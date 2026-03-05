'use client'

import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function Contact({ showHeading = true }: { showHeading?: boolean }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSuccess(true)
        }, 1500)
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
        setIsSubmitting(false)
        setIsSuccess(false)
    }
    return (
        <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side: Information & Essence */}
                    <div className="lg:col-span-5 space-y-12">
                        {showHeading && (
                            <div className="space-y-6">
                                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block animate-slideUp">An Eternal Connection</span>
                                <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] animate-fadeIn">
                                    Get In <span className="text-gradient">Touch</span>
                                </h2>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                                    Whether you seek a tranquil escape or a grand celebration, our concierge is here to curate your perfect Kokomo experience.
                                </p>
                            </div>
                        )}

                        <div className="space-y-8">
                            {[
                                { title: 'Resort Location', icon: MapPin, content: 'Pabur Road, Surjanarayanpur, Kapasia, Gazipur', label: 'Explore Map' },
                                { title: 'Direct Reservations', icon: Phone, content: '+880 1894 953 780-82', label: 'Call Now' },
                                { title: 'Email Enquiries', icon: Mail, content: 'reservation.kokomoresort@gmail.com', label: 'Send Email' }
                            ].map((item, idx) => (
                                <div key={idx} className="group flex items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-[2rem] hover:bg-muted transition-all duration-500 cursor-pointer border border-transparent hover:border-muted-foreground/10">
                                    <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <item.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-[10px] sm:text-sm font-bold text-muted-foreground uppercase tracking-widest">{item.title}</h3>
                                        <p className="text-lg sm:text-xl font-bold text-foreground">{item.content}</p>
                                        <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-primary tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pt-1">
                                            {item.label} <ArrowUpRight size={10} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Connection Hub */}
                        <div className="p-6 sm:p-10 glass rounded-[3rem] border border-white/40 shadow-2xl space-y-6">
                            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Connect with our story</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: Facebook, href: 'https://www.facebook.com/kokomosunset' },
                                    { icon: Twitter, href: '#' },
                                    { icon: Instagram, href: '#' },
                                    { icon: Linkedin, href: '#' }
                                ].map((item, idx) => (
                                    <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="p-4 bg-card text-muted-foreground hover:text-primary hover:scale-110 shadow-lg hover:shadow-primary/20 rounded-2xl transition-all duration-300 border border-muted">
                                        <item.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Immersive Contact Form */}
                    <div className="lg:col-span-7 relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-3xl -z-10" />
                        <div className="bg-card p-6 sm:p-10 md:p-16 rounded-[3rem] sm:rounded-[4rem] shadow-2xl border border-white/40 relative overflow-hidden">
                            {/* Decorative background text */}
                            <div className="absolute -top-10 -right-10 text-[12rem] font-bold text-muted/30 select-none pointer-events-none heading-font opacity-20 rotate-12">
                                Hello
                            </div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
                                <div className="space-y-2">
                                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Send A Message</h3>
                                    <p className="text-muted-foreground text-sm font-light">Have an inquiry or feedback? We'd love to hear from you.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3 relative group">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 transition-colors group-focus-within:text-primary">Your Identity</label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Full Name"
                                            className="w-full px-0 py-4 bg-transparent border-b border-muted transition-all outline-none font-medium placeholder:text-muted-foreground/30 focus:border-primary text-lg"
                                        />
                                    </div>
                                    <div className="space-y-3 relative group">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 transition-colors group-focus-within:text-primary">Arrival Path</label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email Address"
                                            className="w-full px-0 py-4 bg-transparent border-b border-muted transition-all outline-none font-medium placeholder:text-muted-foreground/30 focus:border-primary text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 transition-colors group-focus-within:text-primary">Your Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="How can we assist you today?"
                                        className="w-full px-0 py-4 bg-transparent border-b border-muted transition-all outline-none resize-none font-medium placeholder:text-muted-foreground/30 focus:border-primary text-lg"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={!name || !email || !message || isSubmitting}
                                    className="group w-full py-5 sm:py-8 rounded-[2rem] font-bold flex items-center justify-center gap-6 transition-all duration-500 shadow-2xl hover:shadow-primary/40 active:scale-95 overflow-hidden relative text-white bg-sunset-gradient disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 uppercase tracking-[0.3em] text-xs">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </span>
                                    {!isSubmitting && <Send size={20} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />}
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>

                                <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">
                                    By sending, you agree to our premium service standards.
                                </p>
                            </form>
                        </div>
                    </div>
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
                            <h3 className="text-3xl font-heading font-bold text-foreground">Message Sent</h3>
                            <p className="text-muted-foreground text-sm font-light leading-relaxed">
                                Thank you for reaching out to Kokomo Sunset Resort. Our concierge team will review your message and reply to you shortly.
                            </p>
                        </div>
                        <button
                            onClick={resetForm}
                            className="mt-4 px-10 py-4 bg-sunset-gradient text-white rounded-full font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform w-full"
                        >
                            Return
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
