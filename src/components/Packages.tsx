import { CheckCircle2, Star, Umbrella, Waves, Calendar } from 'lucide-react'
import Link from 'next/link'

const packages = [
    {
        name: 'Romantic Getaway',
        duration: '3 Nights / 4 Days',
        price: '1,250',
        features: ['Sunset Dinner', 'Couple Spa Treatment', 'Private Transfer', 'Welcome Hamper'],
        featured: true,
        icon: Star
    },
    {
        name: 'Family Adventure',
        duration: '5 Nights / 6 Days',
        price: '2,100',
        features: ['Snorkeling Trip', 'Island Hopping', 'Kids Activities', 'Interconnecting Rooms'],
        featured: false,
        icon: Waves
    },
    {
        name: 'Wellness Retreat',
        duration: '4 Nights / 5 Days',
        price: '1,500',
        features: ['Yoga Sessions', 'Dietary Consultation', 'Steam & Sauna', 'Nature Hikes'],
        featured: false,
        icon: Umbrella
    }
]

export default function Packages({ showHeading = true }: { showHeading?: boolean }) {
    return (
        <section id="packages" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background artistic element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {showHeading && (
                    <div className="text-center mb-12 md:mb-24 space-y-4">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Curated Journeys</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground">Special Experiences</h2>
                        <div className="h-1.5 w-24 bg-sunset-gradient mx-auto rounded-full" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                            Tailored escapes designed to immerse you in the extraordinary beauty and tranquility of Kokomo Sunset.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
                    {packages.map((pkg) => {
                        const Icon = pkg.icon
                        return (
                            <div key={pkg.name} className={`group relative p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] transition-all duration-700 ${pkg.featured
                                ? 'bg-charcoal text-white shadow-[0_30px_100px_-20px_rgba(var(--primary),0.3)] md:scale-105 z-10 border border-white/10'
                                : 'bg-card text-foreground hover:shadow-2xl border border-muted hover:border-primary/20 hover:scale-102'
                                }`}>
                                {pkg.featured && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-sunset-gradient text-white py-2.5 px-8 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(var(--primary),0.5)] z-20">
                                        Highly Coveted
                                    </div>
                                )}

                                <div className={`mb-10 p-5 rounded-2xl inline-block transition-transform duration-500 group-hover:-translate-y-2 ${pkg.featured ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
                                    <Icon size={36} strokeWidth={1.5} />
                                </div>

                                <h3 className={`text-2xl sm:text-3xl font-heading font-bold mb-3 tracking-tight ${pkg.featured ? 'text-white' : 'text-foreground'}`}>{pkg.name}</h3>
                                <p className={`mb-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${pkg.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                                    <Calendar size={14} className="text-primary" /> {pkg.duration}
                                </p>

                                <div className={`mb-10 flex items-baseline gap-2 ${pkg.featured ? 'text-white' : 'text-foreground'}`}>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${pkg.featured ? 'opacity-80' : 'text-muted-foreground'}`}>BDT</span>
                                    <span className="text-4xl sm:text-5xl font-bold tracking-tighter">{pkg.price}</span>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${pkg.featured ? 'opacity-80' : 'text-muted-foreground'}`}>Pkg</span>
                                </div>

                                <ul className="space-y-5 mb-12">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-4 text-sm font-medium leading-relaxed">
                                            <div className={`p-1 rounded-full ${pkg.featured ? 'bg-primary text-white' : 'bg-primary/20 text-primary'}`}>
                                                <CheckCircle2 size={14} strokeWidth={3} />
                                            </div>
                                            <span className={pkg.featured ? 'text-white/95' : 'text-foreground/90'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href={`/booking?package=${encodeURIComponent(pkg.name)}`} className="block text-center w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl active:scale-95 text-white bg-sunset-gradient hover:shadow-primary/30 group-hover:scale-102">
                                    Secure Package
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
