'use client'

import { Coffee, Utensils, Star, ArrowRight } from 'lucide-react'

export default function Dining({ showHeading = true }: { showHeading?: boolean }) {
    return (
        <section id="dining" className="py-32 bg-muted/20 relative overflow-hidden">
            {/* Background artistic element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {showHeading && (
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">A Culinary Journey</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground">Flavors of Kokomo</h2>
                        <div className="h-1.5 w-24 bg-sunset-gradient mx-auto rounded-full" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                            From sunrise artisanal brews to gourmet candlelit dinners, discover a world of exquisite tastes at our signature dining venues.
                        </p>
                    </div>
                )}

                <div className="space-y-32">
                    {/* Fine Dining Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="lg:w-1/2 order-2 lg:order-1 relative group">
                            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700 -z-10" />
                            <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/images/dinne/restaruant.jpg"
                                    alt="Fine Dining Experience"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200')}
                                />
                            </div>
                            <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl shadow-xl hidden md:block">
                                <div className="flex items-center gap-2 text-primary mb-2">
                                    <Star size={18} fill="currentColor" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Award Winning</span>
                                </div>
                                <p className="text-foreground font-bold italic font-heading">"The finest sunset views in Gazipur"</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
                            <div className="p-4 bg-primary/10 text-primary rounded-2xl inline-block">
                                <Utensils size={32} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">Sunset Dining Terrace</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                Authentically curated dishes that blend local heritage with global finesse. Savor our signature seafood platters while the sky transforms into a canvas of amber and orange.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-1 w-8 bg-primary/30 rounded-full" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Open Daily 07:00 PM – 11:30 PM</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-1 w-8 bg-primary/30 rounded-full" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-foreground/80">Premium Culinary Experience</span>
                                </div>
                            </div>
                            <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] group transition-all shadow-xl hover:shadow-primary/30 active:scale-95 bg-sunset-gradient">
                                Explore The Menu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Cafe Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="lg:w-1/2 space-y-8">
                            <div className="p-4 bg-primary/10 text-primary rounded-2xl inline-block">
                                <Coffee size={32} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">Cafe Kokomo</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                Our boutique lobby lounge offering artisanal coffee, freshly-baked pastries, and a tranquil atmosphere perfect for light reading or intimate conversations.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Artisanal Coffee', 'Tropical Smoothies', 'Fresh Pastries', 'Selection of Teas'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm font-light text-foreground/80">
                                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-1 w-8 bg-primary/30 rounded-full" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Open Daily 08:00 AM – 10:00 PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700 -z-10" />
                            <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/images/dinne/cafe_kokomo.jpg"
                                    alt="Cafe Kokomo Lounge"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
