"use client"; // Ensure this is at the top for Next.js app directory

import React, { useEffect, useRef } from 'react';


const AnimatedCircles = () => {
    const circlesRef = useRef<HTMLDivElement[]>([]);
    const coords = { x: 0, y: 0 };
    const colors = [...Array(20).fill("#ffffff00"), ...Array(30).fill("#ffffff00")];

    useEffect(() => {
        const circles = circlesRef.current;
        circles.forEach((circle, index) => {
            if (circle) {
                circle.style.backgroundColor = colors[index % colors.length];
            }
        });

        const handleMouseMove = (e) => {
            coords.x = e.clientX;
            coords.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animateCircles = () => {
            let x = coords.x;
            let y = coords.y;

            circles.forEach((circle, index) => {
                if (circle) {
                    const scale = (circles.length - index) / circles.length;
                    circle.style.left = `${x - 12}px`;
                    circle.style.top = `${y - 12}px`;
                    circle.style.transform = `scale(${scale})`;

                    const nextCircle = circles[index + 1] || circles[0];
                    x += (nextCircle.offsetLeft - x + 12) * 0.2;
                    y += (nextCircle.offsetTop - y + 12) * 0.2;
                }
            });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {[...Array(50)].map((_, index) => (
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
