"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay" // Only import once
import EmblaCarouselReact from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true }) // Autoplay plugin configuration
    )

    return (
        <Carousel
            plugins={[plugin.current]} // Using the autoplay plugin
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop} // Stop autoplay on mouse enter
            onMouseLeave={plugin.current.reset} // Reset autoplay on mouse leave
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
