
import Packages from '@/components/Packages'


export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Curated Journeys</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground tracking-tighter mt-4">
                        Special <span className="text-gradient">Experiences</span>
                    </h1>
                    <div className="h-2 w-32 bg-sunset-gradient mx-auto rounded-full mt-6" />
                    <p className="text-muted-foreground text-lg sm:text-xl font-light mt-8 max-w-3xl mx-auto leading-relaxed">
                        Tailored escapes designed to immerse you in the extraordinary beauty and tranquility of Kokomo Sunset.
                    </p>
                </div>
                <Packages showHeading={false} />
            </div>
        </main>
    )
}
