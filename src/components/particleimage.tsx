"use client";

import { useEffect, useRef } from "react";

const ParticleDemo = () => {
    const logoRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const script1 = document.createElement("script");
        script1.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/nextparticle-documentation.js";
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src = "https://nextparticle.nextco.de/nextparticle.min.js";
        document.body.appendChild(script2);

        const script3 = document.createElement("script");
        script3.src = "https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.4/dat.gui.min.js";
        document.body.appendChild(script3);

        // Scriptlar yuklangandan so'ng, NextParticle-ni ishga tushiring
        script3.onload = () => {
            // NextParticle initializatsiyasi
            if (logoRef.current && (window as any).NextParticle) {
                const nextParticle = new (window as any).NextParticle(logoRef.current, {
                    noise: 0,
                    pixelRatio: 2,
                    animation: "bounce",
                });

                nextParticle.particleGap = 1;
                nextParticle.noise = 20;
                nextParticle.mouseForce = 20;
                nextParticle.size = Math.max(window.innerWidth, window.innerHeight);
                nextParticle.colorize = false;
                nextParticle.tint = '#FF00FF';
                nextParticle.minWidth = nextParticle.size;
                nextParticle.minHeight = nextParticle.size;
                nextParticle.maxWidth = nextParticle.size;
                nextParticle.maxHeight = nextParticle.size;

                // Redraw funktsiyasi
                const redraw = () => {
                    nextParticle.initPosition = "none";
                    nextParticle.initDirection = "none";
                    nextParticle.fadePostion = "none";
                    nextParticle.fadeDirection = "none";
                    nextParticle.minWidth = nextParticle.size;
                    nextParticle.minHeight = nextParticle.size;
                    nextParticle.maxWidth = nextParticle.size;
                    nextParticle.maxHeight = nextParticle.size;
                    nextParticle.color = nextParticle.colorize ? nextParticle.tint : '';
                    nextParticle.start();
                };

                // GUI sozlamalari
                const gui = new (window as any).dat.GUI();
                gui.add(nextParticle, "particleGap", 1, 10, 1).onChange(redraw);
                gui.add(nextParticle, "noise", 0, 200, 1).onChange(redraw);
                gui.add(nextParticle, "mouseForce", -200, 200, 1).onChange(redraw);
                gui.add(nextParticle, "size", 100, 800, 1).onChange(redraw);
                gui.add(nextParticle, "colorize").onChange(redraw);
                gui.addColor(nextParticle, "tint").onChange(redraw);

                // Ekran o‘lchami kichik bo‘lsa, GUI ni yopish
                if (window.innerWidth < 1000) {
                    gui.close();
                }

                // Ekran o‘lchami o‘zgarganda, partiklni qayta chizish
                window.onresize = () => {
                    nextParticle.width = window.innerWidth;
                    nextParticle.height = window.innerHeight;
                    redraw();
                };
            }
        };

        // Component o‘chirilganda scriptlarni olib tashlash
        return () => {
            if (document.body.contains(script1)) document.body.removeChild(script1);
            if (document.body.contains(script2)) document.body.removeChild(script2);
            if (document.body.contains(script3)) document.body.removeChild(script3);
        };
    }, []); // Faqat bitta marta yuklanadi (component birinchi marta ekranda paydo bo'lganda)

    return (
        <div>
            <img
                id="logo"
                ref={logoRef}
                src="/Nurbek (500 x 200 px).png"
                alt="logo"
                className="w-full h-auto"
            />
        </div>
    );
};

export default ParticleDemo;
