import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">An Eternal Connection</span>
                    <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground tracking-tighter mt-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h1>
                    <div className="h-2 w-32 bg-sunset-gradient mx-auto rounded-full mt-6" />
                    <p className="text-muted-foreground text-xl font-light mt-8 max-w-3xl mx-auto leading-relaxed">
                        Whether you seek a tranquil escape or a grand celebration, our concierge is here to curate your perfect Kokomo experience.
                    </p>
                </div>
                <Contact showHeading={false} />
                <Feedback />
            </div>
            <Footer />
        </main>
    )
}
