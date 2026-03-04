'use client'

import { Bed, Users, Square, ArrowRight, Info, Clock } from 'lucide-react'
import Link from 'next/link'
import { rooms } from '@/data/rooms'

export default function Accommodations({ showHeading = true }: { showHeading?: boolean }) {
    return (
        <section id="accommodations" className="py-32 bg-muted/30 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {showHeading && (
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Exquisite Living</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground">Luxurious Accommodations</h2>
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
                            className="group bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/40 ring-1 ring-black/[0.03] block cursor-pointer"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-6 right-6 glass px-4 py-2 rounded-2xl text-primary font-bold shadow-xl border border-white/50">
                                    <span className="text-[10px] uppercase tracking-wider block leading-none mb-1 opacity-70">Starting From</span>
                                    <span className="text-lg">BDT {room.price}</span>
                                </div>
                            </div>
                            <div className="p-10 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{room.name}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 font-light italic">
                                        &ldquo;{room.description}&rdquo;
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 py-4">
                                    {room.features.map((feature, index) => (
                                        <span key={index} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/10">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between py-6 border-y border-muted text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Users size={16} className="text-primary" />
                                        <span>{room.guests} Guests</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Square size={16} className="text-primary" />
                                        <span>{room.size} m²</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bed size={16} className="text-primary" />
                                        <span>{room.features[0].includes('Bed') ? room.features[0] : 'Master King'}</span>
                                    </div>
                                </div>

                                <div className="w-full h-14 flex items-center justify-center gap-3 bg-primary text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-primary/30 active:scale-95 bg-sunset-gradient group/btn-suite">
                                    <span className="relative z-10">Reserve Suite</span>
                                    <ArrowRight size={18} className="relative z-10 transition-transform group-hover/btn-suite:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Refined Tariff Note */}
                <div className="mt-24 p-10 glass rounded-[2.5rem] border border-white/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
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
