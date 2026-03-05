'use client'

import { useState } from 'react'
import { Play, Sparkles, Youtube, X } from 'lucide-react'

const videos = [
    {
        id: 'sSVoPkRHtOU',
        title: 'Cinematic Resort Drone Tour',
        description: 'Soar above the emerald waters and witness the architectural elegance of Kokomo from the skies.',
        thumbnail: 'https://img.youtube.com/vi/sSVoPkRHtOU/maxresdefault.jpg'
    }
]

export default function VideoTour() {
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

    return (
        <section id="cinematic-tour" className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-24 space-y-4">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Visual Storytelling</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">Cinematic <span className="text-gradient">Tour</span></h2>
                    <div className="h-1.5 w-24 bg-sunset-gradient mx-auto rounded-full" />
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Immerse yourself in the tranquility and grandeur of Kokomo through our curated cinematic experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 max-w-5xl mx-auto gap-16">
                    {videos.map((video, idx) => (
                        <div key={idx} className="group relative">
                            <div
                                onClick={() => setActiveVideoId(video.id)}
                                className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-primary/40 transition-all duration-700 cursor-pointer"
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                                />

                                {/* Overlay Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-all duration-500 backdrop-blur-md">
                                        <Play size={36} fill="white" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                                    <div className="flex items-center gap-3 text-primary mb-3">
                                        <Youtube size={18} />
                                        <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Watch Cinematic Preview</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">{video.title}</h3>
                                    <p className="text-white/60 font-light leading-relaxed mb-6">{video.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Promotional Banner */}
                <div className="mt-16 md:mt-24 p-6 sm:p-12 glass-dark rounded-[3.5rem] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 group/banner overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover/banner:bg-primary/20 transition-all duration-700" />

                    <div className="flex items-center gap-8 relative z-10">
                        <div className="p-6 bg-sunset-gradient text-white rounded-3xl shadow-xl shadow-primary/20">
                            <Sparkles size={36} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-2xl sm:text-3xl font-heading font-bold text-white">Experience it Live</h4>
                            <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg">
                                While video captures the vision, only a visit captures the soul. Reserve your sanctuary today.
                            </p>
                        </div>
                    </div>

                    <a
                        href="/booking"
                        className="relative z-10 px-8 py-4 sm:px-14 sm:py-6 bg-white text-black font-bold rounded-[2rem] hover:bg-primary hover:text-white transition-all text-[11px] uppercase tracking-[0.3em] shadow-2xl active:scale-95 text-center"
                    >
                        Book Your Stay
                    </a>
                </div>
            </div>

            {/* Cinematic Video Lightbox Overlay */}
            {activeVideoId && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-3xl animate-in fade-in duration-500"
                    onClick={() => setActiveVideoId(null)}
                >
                    <button
                        className="absolute top-4 right-4 sm:top-10 sm:right-10 text-white/50 hover:text-white transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 z-[1001]"
                        onClick={() => setActiveVideoId(null)}
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="relative w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(var(--primary),0.2)] border border-white/10 animate-in zoom-in duration-500"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                            title="YouTube cinematic player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    )
}
