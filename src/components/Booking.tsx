'use client'

import { Calendar, Users, ChevronDown, Check, Square, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { rooms } from '@/data/rooms'

export default function Booking() {
    const searchParams = useSearchParams();
    const roomParam = searchParams.get('room');

    const [step, setStep] = useState(1);
    const [selectedRoom, setSelectedRoom] = useState<number | string | null>(roomParam ? parseInt(roomParam) : null);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (roomParam) {
            setSelectedRoom(parseInt(roomParam));
            setStep(1); // Set to step 1 so they input dates first
        }
    }, [roomParam]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuccess(true);
    }

    const resetBookingContext = () => {
        setStep(1);
        setSelectedRoom(null);
        setCheckIn('');
        setCheckOut('');
        setIsSuccess(false);
    }

    return (
        <section id="booking" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block animate-slideUp">Reserve Your Stay</span>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground animate-fadeIn">
                        Book <span className="text-gradient">Now</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
                        Secure your sanctuary at Kokomo Sunset Resort. Choose your dates, select a premium room, and leave the rest to us.
                    </p>
                </div>

                <div className="bg-card rounded-[3rem] shadow-2xl border border-muted p-8 md:p-14 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-orange-400 to-gold-400" />

                    {/* Progress Steps */}
                    <div className="flex justify-between items-center mb-12 relative border-b border-muted pb-8">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10 rounded-full hidden sm:block">
                            <div className="h-full bg-primary transition-all duration-500 rounded-full" style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }} />
                        </div>

                        {['Dates', 'Room', 'Details'].map((label, idx) => {
                            const stepNum = idx + 1;
                            const isActive = step >= stepNum;
                            return (
                                <div key={label} className="flex flex-col items-center gap-3 bg-card px-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-muted text-muted-foreground'}`}>
                                        {step > stepNum ? <Check size={18} /> : stepNum}
                                    </div>
                                    <span className={`text-[10px] uppercase font-bold tracking-widest ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>{label}</span>
                                </div>
                            )
                        })}
                    </div>

                    <form onSubmit={handleSubmit} className="relative">
                        {/* Step 1: Dates & Guests */}
                        {step === 1 && (
                            <div className="space-y-8 animate-fadeIn">
                                <h3 className="text-2xl font-bold font-heading">When are you joining us?</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                            <Calendar size={14} /> Check In
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={checkIn}
                                            onChange={(e) => setCheckIn(e.target.value)}
                                            className="w-full px-5 py-4 bg-muted/30 border border-muted focus:border-primary rounded-2xl outline-none transition-all font-medium text-foreground"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                            <Calendar size={14} /> Check Out
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                            className="w-full px-5 py-4 bg-muted/30 border border-muted focus:border-primary rounded-2xl outline-none transition-all font-medium text-foreground"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                            <Users size={14} /> Adults
                                        </label>
                                        <div className="relative">
                                            <select required className="w-full px-5 py-4 bg-muted/30 border border-muted focus:border-primary rounded-2xl outline-none transition-all font-medium text-foreground appearance-none">
                                                <option value="1">1 Adult</option>
                                                <option value="2">2 Adults</option>
                                                <option value="3">3 Adults</option>
                                                <option value="4+">4+ Adults</option>
                                            </select>
                                            <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                            <Users size={14} /> Children
                                        </label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-4 bg-muted/30 border border-muted focus:border-primary rounded-2xl outline-none transition-all font-medium text-foreground appearance-none">
                                                <option value="0">0 Children</option>
                                                <option value="1">1 Child</option>
                                                <option value="2">2 Children</option>
                                                <option value="3+">3+ Children</option>
                                            </select>
                                            <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-6">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        disabled={!checkIn || !checkOut}
                                        className="px-10 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[11px] transition-all shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-500 disabled:hover:bg-primary"
                                    >
                                        Continue to Rooms
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Room Selection */}
                        {step === 2 && (
                            <div className="space-y-8 animate-fadeIn">
                                <h3 className="text-2xl font-bold font-heading">Choose Your Sanctuary</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {rooms.map(room => (
                                        <div
                                            key={room.id}
                                            onClick={() => setSelectedRoom(room.id)}
                                            className={`group rounded-[2rem] border-2 cursor-pointer transition-all duration-300 overflow-hidden relative ${selectedRoom === room.id ? 'border-primary ring-4 ring-primary/10 shadow-2xl scale-[1.02]' : 'border-muted hover:border-primary/30'} bg-card`}
                                        >
                                            <div className="h-56 relative overflow-hidden bg-muted">
                                                <img
                                                    src={room.image}
                                                    alt={room.name}
                                                    className={`w-full h-full object-cover transition-transform duration-700 ${selectedRoom === room.id ? 'scale-105' : 'group-hover:scale-105'}`}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                                    <div className="flex justify-between items-end">
                                                        <h4 className="font-heading font-bold text-white text-2xl drop-shadow-md">{room.name}</h4>
                                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors shadow-lg ${selectedRoom === room.id ? 'border-primary bg-primary text-white scale-110' : 'border-white/50 backdrop-blur-sm bg-black/20'}`}>
                                                            {selectedRoom === room.id && <Check size={18} strokeWidth={3} />}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`p-6 transition-colors duration-300 ${selectedRoom === room.id ? 'bg-primary/5' : ''}`}>
                                                <div className="flex justify-between items-start mb-4">
                                                    <p className="text-primary font-bold text-2xl">BDT {room.price} <span className="text-xs text-muted-foreground font-normal">/ night</span></p>
                                                </div>
                                                <div className="flex items-center gap-5 text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-4 border-b border-muted pb-4">
                                                    <span className="flex items-center gap-1.5"><Users size={14} className="text-primary" /> {room.guests} Guests</span>
                                                    <span className="flex items-center gap-1.5"><Square size={14} className="text-primary" /> {room.size} m²</span>
                                                </div>
                                                <p className="text-sm text-foreground/80 leading-relaxed font-light italic">
                                                    &ldquo;{room.description}&rdquo;
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-6">
                                    <button type="button" onClick={() => setStep(1)} className="px-8 py-4 text-muted-foreground hover:text-foreground font-bold uppercase tracking-widest text-[11px] transition-colors">
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep(3)}
                                        disabled={!selectedRoom}
                                        className="px-10 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-orange-500 transition-colors shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Final Details
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Personal Details */}
                        {step === 3 && (
                            <div className="space-y-8 animate-fadeIn">
                                <h3 className="text-2xl font-bold font-heading">Complete Your Booking</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                                        <input type="text" required placeholder="John Doe" className="w-full px-5 py-4 bg-muted/30 border border-muted focus:border-primary rounded-2xl outline-none transition-all font-medium text-foreground" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                                        <input type="email" required placeholder="john@example.com" className="w-full px-5 py-4 bg-muted/30 border border-muted focus:border-primary rounded-2xl outline-none transition-all font-medium text-foreground" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Phone Number</label>
                                    <input type="tel" required placeholder="+880 1XXX CCC CCC" className="w-full px-5 py-4 bg-muted/30 border border-muted focus:border-primary rounded-2xl outline-none transition-all font-medium text-foreground" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Special Requests <span className="text-muted-foreground/50 lowercase">(optional)</span></label>
                                    <textarea rows={3} placeholder="Any specific requirements..." className="w-full px-5 py-4 bg-muted/30 border border-muted focus:border-primary rounded-2xl outline-none transition-all font-medium text-foreground resize-none" />
                                </div>

                                <div className="flex justify-between items-center pt-6">
                                    <button type="button" onClick={() => setStep(2)} className="px-8 py-4 text-muted-foreground hover:text-foreground font-bold uppercase tracking-widest text-[11px] transition-colors">
                                        Back
                                    </button>
                                    <button type="submit" className="px-10 py-4 bg-sunset-gradient text-white rounded-full font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                                        Confirm Booking
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
            {isSuccess && (
                <div className="fixed inset-0 z-[100000] bg-black/80 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-card w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-white/20 animate-in zoom-in duration-500 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -z-10" />
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                            <CheckCircle2 size={48} className="text-primary" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-3xl font-heading font-bold text-foreground">Voyage Secured</h3>
                            <p className="text-muted-foreground text-sm font-light leading-relaxed">
                                Your booking reservation has been successfully placed. Our concierge will contact you shortly to confirm the final details.
                            </p>
                        </div>
                        <button
                            onClick={resetBookingContext}
                            className="mt-4 px-10 py-4 bg-sunset-gradient text-white rounded-full font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform w-full"
                        >
                            Explore More
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
