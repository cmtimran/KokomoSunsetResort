'use client'

import { useState } from 'react'
import { Gift, Sparkles, Calendar, ArrowRight, CheckCircle2, Phone, Mail, ArrowLeft, Home, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'



const OFFERS = [
    {
        id: 'honeymoon',
        name: 'The Eternal Flame',
        category: 'Honeymoon Special',
        description: 'A curated sanctuary for newlyweds featuring private moonlit dinners and therapeutic spa treatments.',
        price: 'BDT 45,000 / Stay',
        benefits: ['Private Lake View Terrace', 'Candelight Dinner', 'Couples Spa Therapy', 'Airport Luxury Pick-up'],
        image: '/images/slides/bird.jpg'
    },
    {
        id: 'weekend',
        name: 'Weekend Sabbatical',
        category: 'Escape Series',
        description: 'Escape the city turmoil with our all-inclusive weekend package designed for ultimate digital detox.',
        price: 'BDT 28,000 / 2 Nights',
        benefits: ['Complimentary Lake Boating', 'Artisanal Breakfast Buffet', 'Sunset Tea Ceremony', 'Late Check-out'],
        image: '/images/slides/swimming.jpg'
    },
    {
        id: 'seasonal',
        name: 'Crimson Sunset Feast',
        category: 'Seasonal Offer',
        description: 'Indulge in our seasonal degustation menu while witnessing the most breathtaking crimson horizons.',
        price: 'BDT 8,500 / Guest',
        benefits: ['7-Course Fusion Dinner', 'Welcome Drink', 'Photography Session', 'Access to Sky Lounge'],
        image: '/images/slides/dron.jpg'
    }
]

export default function OffersPage() {
    const [selectedOffer, setSelectedOffer] = useState<typeof OFFERS[0] | null>(null)

    return (
        <main className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black">
                    <img
                        src="/images/slides/dron.jpg"
                        className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
                        alt="Offers Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
                </div>

                <div className="relative z-10 text-center space-y-6 px-4">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs animate-slideUp">Curated Experiences</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter animate-fadeIn">
                        Exclusive <span className="text-gradient">Offers</span>
                    </h1>
                    <div className="h-2 w-32 bg-sunset-gradient mx-auto rounded-full" />
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-32 relative z-20">
                {selectedOffer ? (
                    /* Detailed Offer View */
                    <div className="animate-in fade-in slide-in-from-bottom duration-700">
                        <button
                            onClick={() => setSelectedOffer(null)}
                            className="mb-12 flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group font-bold uppercase tracking-widest text-xs"
                        >
                            <div className="p-3 glass rounded-full group-hover:-translate-x-2 transition-transform">
                                <ArrowLeft size={16} />
                            </div>
                            Back to All Offers
                        </button>

                        <div className="glass rounded-[4rem] border border-white/40 shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[70vh]">
                            <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
                                <img src={selectedOffer.image} className="absolute inset-0 w-full h-full object-cover" alt={selectedOffer.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">{selectedOffer.category}</span>
                                    <h2 className="text-5xl font-heading font-bold text-white">{selectedOffer.name}</h2>
                                </div>
                            </div>

                            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-between bg-card">
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <p className="text-2xl text-muted-foreground font-light italic leading-relaxed">
                                            &ldquo;{selectedOffer.description}&rdquo;
                                        </p>
                                        <div className="flex items-center gap-4 text-primary">
                                            <Sparkles size={24} />
                                            <span className="text-3xl font-bold tracking-tight">{selectedOffer.price}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <h4 className="text-xs uppercase font-bold tracking-[0.4em] text-muted-foreground border-b border-muted pb-4">Premium Inclusions</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {selectedOffer.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-4 text-base font-medium text-foreground">
                                                    <div className="p-1.5 bg-primary text-white rounded-full shadow-lg shadow-primary/20">
                                                        <CheckCircle2 size={14} strokeWidth={3} />
                                                    </div>
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 pt-12 border-t border-muted flex flex-col sm:flex-row gap-6">
                                    <Link
                                        href={`/booking?offer=${encodeURIComponent(selectedOffer.name)}`}
                                        className="flex-1 py-6 bg-sunset-gradient text-white text-center rounded-3xl font-bold uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:scale-105 transition-all"
                                    >
                                        Claim This Experience
                                    </Link>
                                    <a
                                        href="tel:+8801894953780"
                                        className="px-12 py-6 glass border border-muted-foreground/10 text-foreground rounded-3xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-muted transition-all"
                                    >
                                        <Phone size={18} /> Call Hub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Offers List View */
                    <div className="space-y-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {OFFERS.map((offer) => (
                                <div
                                    key={offer.id}
                                    onClick={() => setSelectedOffer(offer)}
                                    className="group bg-card rounded-[3rem] overflow-hidden border border-muted hover:border-primary/40 transition-all duration-700 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-primary/5"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <img src={offer.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={offer.name} />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                                        <div className="absolute top-8 left-8">
                                            <span className="px-6 py-2 bg-sunset-gradient text-white text-[10px] font-bold rounded-full shadow-2xl uppercase tracking-[0.2em]">
                                                {offer.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-12 space-y-6">
                                        <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{offer.name}</h3>
                                        <p className="text-muted-foreground font-light leading-relaxed line-clamp-2">{offer.description}</p>
                                        <div className="flex items-center justify-between pt-8 border-t border-muted">
                                            <span className="text-primary font-bold text-lg">{offer.price}</span>
                                            <div className="p-4 bg-muted rounded-2xl text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all">
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Exclusive Benefits Roadmap */}
                        <div className="p-16 glass rounded-[4rem] border border-white/40 shadow-2xl relative overflow-hidden group/promo">
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                                <div className="space-y-8 flex-1">
                                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        <Sparkles size={16} /> Seasonal Privileges
                                    </div>
                                    <h2 className="text-5xl font-heading font-bold text-foreground leading-tight">Secure Your Sanctuary <br /> <span className="text-gradient">30 Days Early</span></h2>
                                    <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
                                        Anticipate your voyage and unlock exclusive 20% savings across all signature suites.
                                        Your peace of mind is our premium standard.
                                    </p>
                                </div>
                                <button className="px-16 py-8 bg-sunset-gradient text-white font-bold rounded-[2rem] text-xs uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(var(--primary),0.3)] hover:scale-105 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}
