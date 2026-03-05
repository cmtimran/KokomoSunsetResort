import { Wifi, Utensils, Coffee, Briefcase, Car, Activity, Sun, Wind, Ship, Baby, Waves, Heart } from 'lucide-react'

const amenities = [
    { name: 'Infinity Pool', icon: Waves, description: 'Temperature-controlled pool with panoramic lake views.' },
    { name: 'Lake Boating', icon: Ship, description: 'Guided boat tours and private lake explorations.' },
    { name: 'Kids Zone', icon: Baby, description: 'Dedicated play area and activities for our younger guests.' },
    { name: 'Fine Dining', icon: Utensils, description: 'World-class cuisine featuring local and international flavors.' },
    { name: 'Spa & Wellness', icon: Heart, description: 'Revitalize your body and soul with premium therapies.' },
    { name: 'Gym & Fitness', icon: Activity, description: 'State-of-the-art equipment for your daily workout.' },
    { name: 'Artisanal Coffee', icon: Coffee, description: 'Premium brews at Cafe Kokomo, our signature lounge.' },
    { name: 'High-speed Wi-Fi', icon: Wifi, description: 'Seamless connectivity across the entire resort.' }
]

export default function Amenities({ showHeading = true }: { showHeading?: boolean }) {
    return (
        <section id="amenities" className="py-32 bg-background relative overflow-hidden">
            {/* Subtle Gradient background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary),0.03),transparent_40%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {showHeading && (
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="space-y-4">
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Unmatched Comfort</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground">World-Class Facilities</h2>
                            <div className="h-1.5 w-24 bg-sunset-gradient rounded-full" />
                        </div>
                        <p className="text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
                            Elevate your stay with our bespoke selection of premium facilities and services,
                            meticulously crafted to anticipate and exceed your every desire.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {amenities.map((amenity) => {
                        const Icon = amenity.icon
                        return (
                            <div key={amenity.name} className="group relative p-8 bg-card rounded-[2rem] border border-muted hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden cursor-pointer">
                                {/* Hover background effect */}
                                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />

                                <div className="relative z-10">
                                    <div className="mb-8 p-5 rounded-2xl bg-primary text-white inline-block shadow-lg shadow-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                                        <Icon size={32} strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{amenity.name}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{amenity.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
