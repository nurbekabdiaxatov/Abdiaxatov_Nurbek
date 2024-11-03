"use client"; // Ensure this is at the top for Next.js app directory

import React, { useEffect, useRef } from 'react';

const AnimatedCircles = () => {
    const circlesRef = useRef([]);
    const coords = { x: 0, y: 0 };

    // Ranglar massivini tayyorlash: boshida #1565c0, oxirida qora
    const colors = [...Array(20).fill("#1565c0"), ...Array(30).fill("#000000")]; // 20 ta #1565c0 va 30 ta qora

    useEffect(() => {
        // Doiralarning boshlang'ich pozitsiyalarini va ranglarini belgilash
        const circles = circlesRef.current;
        circles.forEach((circle, index) => {
            if (circle) { // Doira null emasligini tekshirish
                circle.style.backgroundColor = colors[index % colors.length];
                circle.style.position = 'fixed'; // Doiralarni to'g'ri joylashtirish
                circle.style.pointerEvents = 'none'; // Bosishlarni o'tkazish
                circle.style.transition = 'transform 1s ease'; // Silliq o'zgarish
                circle.style.borderRadius = '50%'; // Doira shaklini ta'minlash
                circle.style.width = '24px'; // Doiraning kengligi
                circle.style.height = '24px'; // Doiraning balandligi
            }
        });

        // Mousemove hodisasi tinglovchisi
        const handleMouseMove = (e) => {
            coords.x = e.clientX;
            coords.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Animatsiya tsikli
        const animateCircles = () => {
            let x = coords.x;
            let y = coords.y;

            circles.forEach((circle, index) => {
                if (circle) { // Doira null emasligini tekshirish
                    const scale = (circles.length - index) / circles.length;
                    circle.style.left = `${x - 12}px`; // Doirani sichqoncha ustida markazlash
                    circle.style.top = `${y - 12}px`; // Doirani sichqoncha ustida markazlash
                    circle.style.transform = `scale(${scale})`; // Indeksga asoslangan o'lcham

                    const nextCircle = circles[index + 1] || circles[0];
                    // Keyingi effektni sekinlashtirish
                    x += (nextCircle.offsetLeft - x + 12) * 0.2; // Sezilarli sekinlikda
                    y += (nextCircle.offsetTop - y + 12) * 0.2; // Sezilarli sekinlikda
                }
            });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();

        // Tozalash
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {[...Array(50)].map((_, index) => ( // 50 ta doira yaratish
                <div
                    key={index}
                    className="circle"
                    ref={(el) => (circlesRef.current[index] = el)}
                />
            ))}
        </>
    );
};

export default AnimatedCircles;
