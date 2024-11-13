"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const images = [
        "/600.300.jpg",
        "/600.300(1).jpg",
        "/600.300(2).jpg",
    ];

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-[650px] h-[400px] mx-auto relative" // Make the carousel container relative
        >
            <CarouselContent className="w-[650px] h-[400px] mx-auto">
                {images.map((src, index) => (
                    <CarouselItem key={index} className="flex justify-center items-center">
                        <div className="p-1 relative">
                            <Card className="relative w-full h-full max-w-[650px] mx-auto">
                                <CardContent className="relative w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        width={650}  // Set the base width
                                        height={400} // Set the base height
                                        className="rounded-md h-[150px] sm:h-[350px] md:h-[200px] lg:h-[450px] xl:h-[500px] w-full object-cover"
                                    />
                                    {/* Position buttons inside the image */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
