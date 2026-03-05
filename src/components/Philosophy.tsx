'use client'

import { Compass, Leaf, Sparkles } from 'lucide-react'

export default function Philosophy() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="space-y-8 md:space-y-12 animate-fadeIn">
                        <div className="space-y-6">
                            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block">Our Essence</span>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tighter">
                                Where Nature <br /> Meets <span className="text-gradient">Pure Luxury</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                                Nestled in the heart of Kapasia, Kokomo Sunset Resort is more than a destination; it&apos;s a sanctuary where the rhythm of the lake and the brilliance of the sunset compose a symphony of tranquility.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { icon: Leaf, label: 'Sustainable', text: 'Eco-conscious design' },
                                { icon: Sparkles, label: 'Experience', text: 'Curated for you' },
                                { icon: Compass, label: 'Discovery', text: 'Hidden lakeside gems' }
                            ].map((item, i) => (
                                <div key={i} className="group space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-foreground">{item.label}</h4>
                                        <p className="text-xs text-muted-foreground font-light">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 group">
                            <img
                                src="/images/gallery/kokomo (13).jpg"
                                alt="Philosophy"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                                onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200')}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 bg-card p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border border-white/20 backdrop-blur-xl z-20 animate-bounce-slow">
                            <div className="space-y-1 text-center font-heading">
                                <span className="block text-3xl sm:text-4xl font-bold text-primary">100%</span>
                                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">Soul Rejuvenation</span>
                            </div>
                        </div>

                        {/* Decorative frame */}
                        <div className="absolute -top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-[4rem] -z-10 translate-x-4 translate-y-4" />
                    </div>
                </div>
            </div>
        </section>
    )
}
