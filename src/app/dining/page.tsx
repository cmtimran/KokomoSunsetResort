
import Dining from '@/components/Dining'


export default function DiningPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">A Culinary Journey</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground tracking-tighter mt-4">
                        Flavors of <span className="text-gradient">Kokomo</span>
                    </h1>
                    <div className="h-2 w-32 bg-sunset-gradient mx-auto rounded-full mt-6" />
                    <p className="text-muted-foreground text-lg sm:text-xl font-light mt-8 max-w-3xl mx-auto leading-relaxed">
                        From sunrise artisanal brews to gourmet candlelit dinners, discover a world of exquisite tastes at our signature dining venues.
                    </p>
                </div>
                <Dining showHeading={false} />
            </div>
        </main>
    )
}
