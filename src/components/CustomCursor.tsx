"use client"; // Bu client component ekanligini bildiradi

import React, { useEffect, useRef } from "react";

const AnimatedCircles: React.FC = () => {
    const circlesRef = useRef<HTMLDivElement[]>([]);
    const coords = { x: 0, y: 0 };
    const circleCount = 30;
    const stationaryColor = "#000";

    useEffect(() => {
        const circles = circlesRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            coords.x = e.clientX;
            coords.y = e.clientY;
        };

        const handleMouseStop = () => {
            circles.forEach((circle) => {
                if (circle) {
                    circle.style.backgroundColor = stationaryColor;
                    circle.style.border = "2px solid #000";
                }
            });
        };

        let mouseMoveTimeout: NodeJS.Timeout;

        const onMouseMove = (e: MouseEvent) => {
            handleMouseMove(e);
            clearTimeout(mouseMoveTimeout);
            mouseMoveTimeout = setTimeout(handleMouseStop, 300);
        };

        window.addEventListener("mousemove", onMouseMove);

        const animateCircles = () => {
            let x = coords.x;
            let y = coords.y;

            circles.forEach((circle, index) => {
                if (circle) {
                    const scale = (circleCount - index) / circleCount;
                    circle.style.left = `${x - 12}px`;
                    circle.style.top = `${y - 12}px`;
                    circle.style.transform = `scale(${scale})`;

                    const nextCircle = circles[index + 1] || circles[0];
                    x += (nextCircle.offsetLeft - x + 12) * 0.3;
                    y += (nextCircle.offsetTop - y + 12) * 0.3;
                }
            });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();

        return () => {
            clearTimeout(mouseMoveTimeout);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <>
            {Array.from({ length: circleCount }).map((_, index) => (
                <div
                    key={index}
                    className="circle"
                    ref={(el) => {
                        if (el) circlesRef.current[index] = el;
                    }}
                />
            ))}
        </>
    );
};

export default AnimatedCircles;
