import { CheckCircle2, ShieldCheck, Users, Square, Bed, ArrowRight, ArrowLeft, Play, Wifi, Coffee, Bath, Tv } from 'lucide-react'
import { rooms } from '@/data/rooms'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function RoomDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const room = rooms.find(r => r.id === parseInt(resolvedParams.id))

    if (!room) {
        return notFound()
    }

    return (
        <main className="min-h-screen bg-background pb-32">

            {/* Immersive Hero Section */}
            <div className="relative h-[70vh] min-h-[500px] w-full flex items-end pb-20 justify-center">
                <img
                    src={room.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={room.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link href="/#accommodations" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold mb-8 group bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Accommodations
                    </Link>

                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-sm mb-4 block animate-slideUp">Signature Collection</span>
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 animate-fadeIn">{room.name}</h1>

                    <div className="flex flex-wrap gap-6 items-center text-white/80 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center gap-2"><Users size={20} className="text-primary" /> <span>Up to {room.guests} Guests</span></div>
                        <div className="flex items-center gap-2"><Square size={20} className="text-primary" /> <span>{room.size} sq meters</span></div>
                        <div className="flex items-center gap-2"><Bed size={20} className="text-primary" /> <span>{room.features[0].includes('Bed') ? room.features[0] : 'Master King'}</span></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="bg-card rounded-[3rem] shadow-2xl border border-white/10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16">

                    {/* Left Details */}
                    <div className="lg:w-2/3 space-y-16">
                        {/* Overview */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-heading font-bold text-foreground">Room Overview</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg font-light">
                                {room.longDescription || room.description}
                            </p>
                        </div>

                        {/* 3D Virtual Tour Mockup */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-heading font-bold text-foreground">Interactive 3D Tour</h2>
                            <p className="text-muted-foreground text-sm font-light">Step inside and explore every corner of your sanctuary before you arrive.</p>

                            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer bg-black/5 flex items-center justify-center border border-muted ring-4 ring-black/5 hover:ring-primary/20 transition-all duration-500">
                                <img src={room.image} className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-70 transition-transform duration-1000 group-hover:scale-105" alt="3D View Background" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

                                <div className="z-10 bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/30 shadow-2xl group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                    <Play size={40} className="text-white ml-2" />
                                </div>

                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                    <span className="text-white font-bold tracking-[0.3em] uppercase text-xs">Explore Space</span>
                                </div>
                            </div>
                        </div>

                        {/* Comprehensive Amenities */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-heading font-bold text-foreground">Premium Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                                {room.features.map((f, i) => (
                                    <div key={i} className="flex flex-col items-start gap-3 p-4 bg-muted/50 rounded-2xl border border-transparent hover:border-black/5 transition-colors">
                                        <div className="p-3 bg-card text-primary rounded-xl shadow-sm border border-black/5">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <span className="text-sm font-bold text-foreground">{f}</span>
                                    </div>
                                ))}
                                {/* Added generic amenities for better feel */}
                                <div className="flex flex-col items-start gap-3 p-4 bg-muted/50 rounded-2xl border border-transparent hover:border-black/5 transition-colors">
                                    <div className="p-3 bg-card text-primary rounded-xl shadow-sm border border-black/5"><Wifi size={24} /></div>
                                    <span className="text-sm font-bold text-foreground">High-Speed WiFi</span>
                                </div>
                                <div className="flex flex-col items-start gap-3 p-4 bg-muted/50 rounded-2xl border border-transparent hover:border-black/5 transition-colors">
                                    <div className="p-3 bg-card text-primary rounded-xl shadow-sm border border-black/5"><Coffee size={24} /></div>
                                    <span className="text-sm font-bold text-foreground">Espresso Machine</span>
                                </div>
                                <div className="flex flex-col items-start gap-3 p-4 bg-muted/50 rounded-2xl border border-transparent hover:border-black/5 transition-colors">
                                    <div className="p-3 bg-card text-primary rounded-xl shadow-sm border border-black/5"><Bath size={24} /></div>
                                    <span className="text-sm font-bold text-foreground">Luxury Bath Amenities</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        {(room as any).gallery && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-heading font-bold text-foreground">Gallery</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {((room as any).gallery as string[]).map((img, idx) => (
                                        <div key={idx} className={`rounded-2xl overflow-hidden h-64 shadow-md ${idx === 2 ? 'sm:col-span-2 h-80' : ''}`}>
                                            <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={`${room.name} Image ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Right Sticky Booking Widget */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32 bg-card rounded-[2rem] border-2 border-primary/20 p-8 shadow-2xl flex flex-col items-center text-center space-y-8">
                            <div className="space-y-2">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Starting Tariff</span>
                                <div className="flex items-end justify-center gap-2">
                                    <span className="text-primary font-bold text-lg mb-1">BDT</span>
                                    <span className="text-6xl font-heading font-bold text-foreground tracking-tighter">{room.price}</span>
                                </div>
                                <span className="text-xs text-muted-foreground font-medium block mt-2">Per night, excluding taxes & fees</span>
                            </div>

                            <div className="w-full h-[1px] bg-muted" />

                            <div className="w-full space-y-4 text-left">
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    <span>Free Cancellation up to 48 hours</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    <span>Complimentary Breakfast</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <ShieldCheck size={16} className="text-primary flex-shrink-0" />
                                    <span>Best Price Guarantee</span>
                                </div>
                            </div>

                            <Link
                                href={`/booking?room=${room.id}`}
                                className="w-full py-6 rounded-[1.5rem] font-bold shadow-2xl active:scale-95 transition-all text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 group bg-sunset-gradient text-white shadow-primary/30"
                            >
                                Book This Suite
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
