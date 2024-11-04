"use client"; // Ensure this is at the top for Next.js app directory

import React, { useEffect, useRef } from 'react';

const AnimatedCircles: React.FC = () => {
    const circlesRef = useRef<HTMLDivElement[]>([]);
    const coords = { x: 0, y: 0 };
    const colors = [...Array(20).fill("#ffffff00"), ...Array(30).fill("#ffffff00")];
    const stationaryColor = "#1565c000"; 

    useEffect(() => {
        const circles = circlesRef.current;

        circles.forEach((circle, index) => {
            if (circle) {
                circle.style.backgroundColor = colors[index % colors.length];
                circle.style.border = '2px solid transparent'; // Set initial border color
            }
        });

        const handleMouseMove = (e: MouseEvent) => {
            coords.x = e.clientX;
            coords.y = e.clientY;

            circles.forEach((circle, index) => {
                if (circle) {
                    circle.style.backgroundColor = colors[index % colors.length];
                    circle.style.border = '2px solid transparent'; // Reset border color
                }
            });
        };

        const handleMouseStop = () => {
            circles.forEach((circle) => {
                if (circle) {
                    circle.style.backgroundColor = stationaryColor;
                    circle.style.border = '2px solid #1565c0'; // Change border color when stationary
                }
            });
        };

        let mouseMoveTimeout: NodeJS.Timeout;

        window.addEventListener("mousemove", (e) => {
            handleMouseMove(e);
            clearTimeout(mouseMoveTimeout);
            mouseMoveTimeout = setTimeout(handleMouseStop, 200);
        });

        const animateCircles = () => {
            let x = coords.x;
            let y = coords.y;

            circles.forEach((circle, index) => {
                if (circle) {
                    const scale = (circles.length - index) / circles.length; // Scaling the circle
                    circle.style.left = `${x - 12}px`; // Center the circle on the mouse
                    circle.style.top = `${y - 12}px`;
                    circle.style.transform = `scale(${scale})`;

                    const nextCircle = circles[index + 1] || circles[0]; // Next circle or wrap to first
                    x += (nextCircle.offsetLeft - x + 12) * 0.2; // Adjust for next circle position
                    y += (nextCircle.offsetTop - y + 12) * 0.2;
                }
            });

            requestAnimationFrame(animateCircles); // Continue animation
        };

        animateCircles();

        return () => {
            clearTimeout(mouseMoveTimeout);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {[...Array(50)].map((_, index) => (
                <div
                    key={index}
                    className="circle"
                    ref={(el) => {
                        if (el) {
                            circlesRef.current[index] = el; // Assign the element to the ref array
                        }
                    }}
                />
            ))}
            <style jsx>{`
                .circle {
                    position: fixed; /* Keep this to follow the viewport */
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    pointer-events: none; /* Prevent mouse events on the circles */
                    z-index: 50; /* Ensure they are above other elements */
                    transition: transform 1s ease, background-color 0.5s ease;
                    
                    box-shadow: 0 0 10px #1565c07e; /* Shadow for effect */
                    background-color: #1565c0; /* Default color for visibility */
                }
                    :hover {
                    background-color: #1565c07e; /* Change color on hover */
                }
                @media (max-width: 600px) {
                .circle {
                display: none;
                }
            `}</style>
        </>
    );
};

export default AnimatedCircles;
