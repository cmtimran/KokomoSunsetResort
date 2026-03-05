'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
    {
        image: '/images/slides/bird.jpg',
        title: 'Kokomo Sunset Resort',
        subtitle: 'Where Nature Meets Luxury'
    },
    {
        image: '/images/slides/swimming.jpg',
        title: 'Luxury Pool Side',
        subtitle: 'Unwind and Relax'
    },
    {
        image: '/images/slides/dron.jpg',
        title: 'Breathtaking Views',
        subtitle: 'Experience Unparalleled Beauty'
    },
    {
        image: '/images/slides/minizoo.jpg',
        title: 'Nature & Wildlife',
        subtitle: 'Connect with the Environment'
    }
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section id="home" className="relative h-screen overflow-hidden bg-black">
            {/* Slider */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                        <div className="absolute inset-0 bg-sunset-overlay opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 mt-10 md:pt-0 text-center text-white">
                <div className="max-w-4xl space-y-7">
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/30 glass-dark text-xs font-bold tracking-widest uppercase animate-slideUp">
                        Experience the Extraordinary
                    </div>

                    <h1 className="font-heading text-5xl sm:text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter drop-shadow-2xl animate-fadeIn">
                        <span className="block text-white">Kokomo</span>
                        <span className="block text-gradient">Sunset Resort</span>
                    </h1>

                    <p className="mt-2 text-lg sm:text-xl font-light md:text-2xl lg:text-3xl max-w-2xl mx-auto drop-shadow-md text-white/90 animate-slideUp">
                        {slides[currentSlide].subtitle}
                    </p>

                    <div className="flex flex-col gap-3 sm:gap-6 pt-4 sm:pt-2 sm:flex-row justify-center animate-slideUp w-full px-4 sm:px-0">
                        <Link
                            href="/booking"
                            className="relative group/btn-hero shadow-2xl overflow-hidden px-8 py-4 sm:px-14 sm:py-6 rounded-full text-base sm:text-lg font-bold transition-all hover:shadow-primary/40 active:scale-95 text-white bg-sunset-gradient flex items-center justify-center min-w-[200px]"
                        >
                            <span className="relative z-10 uppercase tracking-widest text-sm">Book Now</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn-hero:translate-y-0 transition-transform duration-500" />
                        </Link>
                        <Link
                            href="#cinematic-tour"
                            className="group relative rounded-full border border-white/50 backdrop-blur-md px-8 py-4 sm:px-14 sm:py-6 text-base sm:text-lg font-bold transition-all active:scale-95 overflow-hidden flex items-center justify-center min-w-[200px] text-white"
                        >
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-black uppercase tracking-widest text-sm text-center">Cinematic Tour</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 md:bottom-4 left-1/2 flex -translate-x-1/2 gap-3 sm:gap-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-primary w-20' : 'bg-white/30 w-8 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-4 animate-bounce">
                <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] uppercase tracking-widest vertical-rl text-white/60">Scroll Down</span>
            </div>
        </section>
    )
}
