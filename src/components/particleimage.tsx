"use client";
import { useEffect, useRef, useState } from "react";

const ParticleDemo = () => {
    const logoRef = useRef<HTMLImageElement | null>(null);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        // Dynamically load the scripts
        const script1 = document.createElement("script");
        script1.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/nextparticle-documentation.js";
        script1.async = true;

        const script2 = document.createElement("script");
        script2.src = "https://nextparticle.nextco.de/nextparticle.min.js";
        script2.async = true;

        const script3 = document.createElement("script");
        script3.src = "https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.4/dat.gui.min.js";
        script3.async = true;

        // Check if all scripts are loaded
        const onAllScriptsLoaded = () => {
            // If all three scripts have loaded
            if (script1.onload && script2.onload && script3.onload) {
                setScriptsLoaded(true);
            }
        };

        script1.onload = onAllScriptsLoaded;
        script2.onload = onAllScriptsLoaded;
        script3.onload = onAllScriptsLoaded;

        document.body.appendChild(script1);
        document.body.appendChild(script2);
        document.body.appendChild(script3);

        // Cleanup function to remove the scripts when the component unmounts
        return () => {
            if (document.body.contains(script1)) document.body.removeChild(script1);
            if (document.body.contains(script2)) document.body.removeChild(script2);
            if (document.body.contains(script3)) document.body.removeChild(script3);
        };
    }, []);

    useEffect(() => {
        // Initialize the particle effect after scripts are loaded
        if (scriptsLoaded && logoRef.current && (window as any).NextParticle) {
            const nextParticle = new (window as any).NextParticle(logoRef.current, {
                noise: 4,        // Set noise to 4
                pixelRatio: 2,   // Set pixel ratio to 2
                animation: "bounce", // Set animation to bounce
                particleGap: 1,  // Set particle gap to 1
                mouseForce: 13,  // Set mouse force to 13
                size: 25,        // Set size to 25
                colorize: false,
                tint: '#fff',    // Set tint color to white
            });
        }
    }, [scriptsLoaded]);

    return (
        <div className="flex justify-center items-center relative w-full h-screen">
            {/* Background for better visibility */}
            <div className="absolute inset-0 z-0 bg-gray-900 opacity-50"></div>

            {/* The logo element */}
            <img
                ref={logoRef}
                src="/Nurbek (500 x 200 px).png"
                alt="logo"
                className="relative z-10 w-1/4 h-auto"  // Adjust size as needed
            />
        </div>
    );
};

export default ParticleDemo;
