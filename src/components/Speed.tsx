"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Telegram from '@mui/icons-material/Telegram';
import Email from '@mui/icons-material/Email';
import Tel from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';

const actions = [
    { icon: <DescriptionIcon />, name: 'Resume', url: "https://drive.google.com/file/d/1wYWYQWIGVN5NBzwLsgT8wodFDkx8jiY8/view?usp=sharing" },
    { icon: <Telegram />, name: 'Telegram', url: "https://t.me/Abdiaxatov" },
    { icon: <Email />, name: 'Email', url: "mailto:abduaxatov007@gmail.com" },
    { icon: <Tel />, name: 'Phone', url: "tel:+998940192117" }
];

export default function BasicSpeedDial() {
    const [isVisible, setIsVisible] = React.useState(false);

    // Hover holatida ko'rsatish
    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    // Hoverdan chiqqanda yashirish
    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    // Bosish orqali yashirish
    const handleClick = () => {
        setIsVisible((prev) => !prev); // visibility holatini o'zgartirish
    };

    // Faylni yuklash
    const handleDownload = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || ''; // Fayl nomini olish
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="mt-[-232px]">
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onMouseEnter={handleMouseEnter}  // Hoverga kirganda ko'rsatiladi
                    onMouseLeave={handleMouseLeave}  // Hoverdan chiqqanda yashirinadi
                    onClick={handleClick}  // Bosish orqali visibilityni o'zgartirish
                    open={isVisible}  // `SpeedDial`ni ochish
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            sx={{
                                visibility: isVisible ? 'visible' : 'hidden',  // Ko'rinish holati
                                opacity: isVisible ? 1 : 0, // Ko'rinish
                                transition: 'opacity 0.3s ease, visibility 0s 0.3s', // Silliq o'tish
                            }}
                            onClick={(e) => {
                                e.stopPropagation();  // Eventni to'xtatib, faqat harakatni bajarish
                                if (action.name === 'Resume') {
                                    handleDownload(action.url);
                                } else {
                                    window.open(action.url, '_blank');
                                }
                            }}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </div>
    );
}
