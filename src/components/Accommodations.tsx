'use client'

import { Bed, Users, Square, ArrowRight, Info, Clock } from 'lucide-react'
import Link from 'next/link'
import { rooms } from '@/data/rooms'

export default function Accommodations({ showHeading = true }: { showHeading?: boolean }) {
    return (
        <section id="accommodations" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {showHeading && (
                    <div className="text-center mb-12 md:mb-20 space-y-4">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Exquisite Living</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground">Luxurious Accommodations</h2>
                        <div className="h-1.5 w-24 bg-sunset-gradient mx-auto rounded-full" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                            Experience the perfect harmony of natural splendor and modern sophistication in our signature suites and villas.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {rooms.map((room) => (
                        <Link
                            key={room.id}
                            href={`/accommodations/${room.id}`}
                            className="group relative rounded-[2.5rem] overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/40 ring-1 ring-black/[0.03] block cursor-pointer flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative h-72 sm:h-96 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Overlay "View Details" */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                                    <span className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                                        View Details <ArrowRight size={14} className="animate-pulse" />
                                    </span>
                                </div>

                                {/* Price tag */}
                                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-[1.5rem] text-white shadow-2xl border border-white/20 z-20 transition-transform duration-500 group-hover:-translate-y-1">
                                    <span className="text-[9px] uppercase tracking-[0.2em] block leading-none mb-1 text-white/70">From</span>
                                    <span className="text-xl font-bold font-heading tracking-wide">BDT {room.price}</span>
                                </div>

                                {/* Title on Image */}
                                <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 drop-shadow-lg">{room.name}</h3>
                                    <div className="h-0.5 w-12 bg-primary rounded-full transition-all duration-500 group-hover:w-full opacity-60 group-hover:opacity-100" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-card/80 backdrop-blur-xl group-hover:bg-card transition-colors duration-500 relative z-20">
                                <div>
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 font-light italic text-center">
                                        &ldquo;{room.description}&rdquo;
                                    </p>
                                </div>

                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent my-4" />

                                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground">
                                    <div className="flex flex-col items-center gap-2 group-hover:text-primary transition-colors duration-300 delay-100">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Users size={16} />
                                        </div>
                                        <span>{room.guests} Guests</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 group-hover:text-primary transition-colors duration-300 delay-200">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Square size={16} />
                                        </div>
                                        <span>{room.size} m²</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 group-hover:text-primary transition-colors duration-300 delay-300">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Bed size={16} />
                                        </div>
                                        <span className="text-center truncate w-full px-1">{room.features[0].includes('Bed') ? room.features[0] : 'Master King'}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Refined Tariff Note */}
                <div className="mt-16 md:mt-24 p-6 sm:p-10 glass rounded-[2.5rem] border border-white/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-sunset-gradient text-white rounded-[1.25rem] shadow-lg shadow-primary/20">
                            <Info size={28} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-foreground text-xl">Tariff & Policies</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                All rates are quoted in BDT and are subject to 10% Service Charge & 15% VAT.
                                Advance booking recommended.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/50 rounded-2xl border border-white/20">
                            <Clock size={20} className="text-primary" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold leading-none">Check-in</span>
                                <span className="text-foreground font-bold">02:00 PM</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/50 rounded-2xl border border-white/20">
                            <Clock size={20} className="text-primary" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold leading-none">Check-out</span>
                                <span className="text-foreground font-bold">12:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
