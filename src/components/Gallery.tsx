'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Camera, Image as ImageIcon, MapPin, Heart, X } from 'lucide-react'

const galleryImages = [
    { src: '/images/gallery/kokomo (2).jpg', category: 'Views', title: 'Sunset from the Terrace' },
    { src: '/images/gallery/kokomo (3).JPG', category: 'Pool', title: 'Infinity Pool at Twilight' },
    { src: '/images/gallery/kokomo (12).jpg', category: 'Dining', title: 'Romantic Beach Dinner' },
    { src: '/images/gallery/kokomo (5).jpg', category: 'Villas', title: 'Luxury Villa Interior' },
    { src: '/images/gallery/kokomo (13).jpg', category: 'Gardens', title: 'Lush Tropical Landscape' },
    { src: '/images/gallery/kokomo (11).jpg', category: 'Rooms', title: 'Master Bedroom View' }
]

export default function Gallery({ showHeading = true }: { showHeading?: boolean }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section id="gallery" className="py-32 bg-background overflow-hidden relative">
            {/* Decorative background text */}
            <div className="absolute top-20 -left-20 text-[15rem] font-bold text-black/[0.02] select-none pointer-events-none heading-font uppercase tracking-tighter">
                Visual Art
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {showHeading && (
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="space-y-4">
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Capturing Essence</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground">Visual Gallery</h2>
                            <div className="h-1.5 w-24 bg-sunset-gradient rounded-full" />
                        </div>
                        <Link href="/gallery" className="group flex items-center gap-3 py-4 px-10 bg-primary text-white rounded-full font-bold transition-all duration-500 shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-95 hover:scale-[1.02]">
                            <ImageIcon size={20} className="group-hover:rotate-12 transition-transform" />
                            <span className="uppercase tracking-[0.2em] text-[10px]">Explore All Frames</span>
                        </Link>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-[2.5rem] h-[30rem] shadow-sm hover:shadow-2xl transition-all duration-700 border border-muted ring-1 ring-black/[0.03]">
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                            />

                            {/* Refined Premium Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 text-white translate-y-4 group-hover:translate-y-0">
                                <span className="mb-3 text-primary font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                                    <MapPin size={12} className="animate-bounce" /> {image.category}
                                </span>
                                <h3 className="text-3xl font-heading font-bold mb-6 tracking-tight leading-tight">{image.title}</h3>

                                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                    <button
                                        onClick={() => setSelectedImage(image.src)}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-primary hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest rounded-2xl"
                                    >
                                        <Camera size={16} /> Perspective
                                    </button>
                                    <button className="p-3 bg-primary/20 hover:bg-primary backdrop-blur-xl rounded-2xl border border-primary/30 transition-all text-white shadow-xl">
                                        <Heart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Premium Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-2xl animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-all p-4 bg-white/5 rounded-full hover:bg-white/10">
                        <X size={32} />
                    </button>
                    <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 animate-in zoom-in duration-500 ease-out"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
