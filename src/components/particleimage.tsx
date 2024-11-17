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
        script3.onload = () => {
            if (logoRef.current && (window as any).NextParticle) {
                new (window as any).NextParticle(logoRef.current, {
                    particleGap: 0.1, 
                    noise: 0.1, 
                    maxWidth: 800, 
                    maxHeight: 800, 
                    pixelRatio: 1, 
                    animation: "bounce",
                });
            }
        };
        return () => {
            if (document.body.contains(script1)) document.body.removeChild(script1);
            if (document.body.contains(script2)) document.body.removeChild(script2);
            if (document.body.contains(script3)) document.body.removeChild(script3);
        };
    }, []);
    return (
        <div>
            <img
                id="logo"
                ref={logoRef}
                data-init-position="random"
                data-init-direction="random"
                src="/Banner.png"
                alt="logo"
                className="w-full h-auto"
            />
        </div>
    );
};

export default ParticleDemo;
