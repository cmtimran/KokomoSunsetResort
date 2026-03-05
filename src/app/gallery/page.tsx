
import Gallery from '@/components/Gallery'
import VideoTour from '@/components/VideoTour'


export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Visual Art</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground tracking-tighter mt-4">
                        The <span className="text-gradient">Gallery</span>
                    </h1>
                    <div className="h-2 w-32 bg-sunset-gradient mx-auto rounded-full mt-6" />
                    <p className="text-muted-foreground text-lg sm:text-xl font-light mt-8 max-w-3xl mx-auto leading-relaxed">
                        A visual exploration of our sanctuary, capturing the essence of the lake, the sunset, and the luxury of Kokomo.
                    </p>
                </div>
                <Gallery showHeading={false} />
                <VideoTour />
            </div>
        </main>
    )
}
