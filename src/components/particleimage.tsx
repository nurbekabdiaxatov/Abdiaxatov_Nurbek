"use client";

import { useEffect, useRef } from "react";

const ParticleDemo = () => {
    const logoRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        // Shartli tekshiruv faqat brauzerda ishlashini ta'minlaydi
        if (typeof window !== "undefined") {
            // Scriptlarni faqat brauzerda yuklash
            const script1 = document.createElement("script");
            script1.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/nextparticle-documentation.js";
            document.body.appendChild(script1);

            const script2 = document.createElement("script");
            script2.src = "https://nextparticle.nextco.de/nextparticle.min.js";
            document.body.appendChild(script2);

            const script3 = document.createElement("script");
            script3.src = "https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.4/dat.gui.min.js";
            document.body.appendChild(script3);

            // Scriptlar yuklangach
            script3.onload = () => {
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
                    nextParticle.start();
                }
            };

            // Sahifa o'chirilganda scriptlarni olib tashlash
            return () => {
                document.body.removeChild(script1);
                document.body.removeChild(script2);
                document.body.removeChild(script3);
            };
        }
    }, []); // `[]` bo'lsa, faqat sahifa yuklanganda bajariladi

    return (
        <div>
            <img
                id="logo"
                ref={logoRef}
                src="/public/Nurbek.png"
                alt="logo"
                className="w-full h-auto"
            />
        </div>
    );
};

export default ParticleDemo;
