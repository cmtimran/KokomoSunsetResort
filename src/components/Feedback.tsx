'use client'

import { useState } from 'react'
import { Star, Quote, Send, User, MessageSquare, Heart, Sparkles, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import Slider from 'react-slick'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const initialTestimonials = [
    {
        id: 1,
        name: 'Sarah Rahman',
        role: 'Honeymoon Couple',
        source: 'Google',
        content: 'Our stay at Kokomo was absolutely magical. The sunset terrace views are something out of a dream. The service was impeccable, making our honeymoon truly unforgettable.',
        rating: 5,
        avatar: '/images/avatars/user1.jpg'
    },
    {
        id: 2,
        name: 'James Wilson',
        role: 'Solo Adventurer',
        source: 'TripAdvisor',
        content: 'A perfect sanctuary for a digital detox. The tranquil energy of the Kapasia lakes combined with the luxury of the cottages provided the reset I desperately needed.',
        rating: 5,
        avatar: '/images/avatars/user2.jpg'
    },
    {
        id: 3,
        name: 'The Chowdhury Family',
        role: 'Family Vacation',
        source: 'Google',
        content: 'The kids loved the pool and the boating! It is rare to find a place that offers both high-end luxury for adults and such engaging activities for children.',
        rating: 5,
        avatar: '/images/avatars/user3.jpg'
    },
    {
        id: 4,
        name: 'Anika & Rashed',
        role: 'Anniversary Celebration',
        source: 'TripAdvisor',
        content: 'Breathtaking architecture and incredibly attentive staff. They surprised us with a custom cake for our anniversary. We will definitely be coming back next year!',
        rating: 5,
        avatar: '/images/avatars/user1.jpg'
    },
    {
        id: 5,
        name: 'David Chen',
        role: 'Corporate Retreat',
        source: 'Google',
        content: 'We hosted our annual corporate retreat here. The conference facilities were top-notch, and the evening BBQ by the lake was exactly what the team needed.',
        rating: 4,
        avatar: '/images/avatars/user2.jpg'
    }
]

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-xl flex items-center justify-center border border-muted hover:border-primary hover:text-primary transition-colors focus:outline-none"
        >
            <ChevronRight size={24} />
        </button>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-xl flex items-center justify-center border border-muted hover:border-primary hover:text-primary transition-colors focus:outline-none"
        >
            <ChevronLeft size={24} />
        </button>
    );
};

export default function Feedback() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [rating, setRating] = useState(5)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            setIsFormOpen(false)
            setSubmitted(false)
        }, 3000)
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <section className="py-32 bg-muted/10 relative overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-10" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="space-y-4">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Guest Chronicles</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground">Share Your <span className="text-gradient">Experience</span></h2>
                        <div className="h-1.5 w-24 bg-sunset-gradient rounded-full" />
                    </div>
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="group flex items-center gap-3 py-5 px-10 bg-primary text-white rounded-[2rem] font-bold transition-all duration-500 shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-95 bg-sunset-gradient"
                    >
                        <MessageSquare size={20} className="group-hover:rotate-12 transition-transform" />
                        <span className="uppercase tracking-[0.2em] text-[10px]">Write Your Story</span>
                    </button>
                </div>

                <div className="relative px-4">
                    <Slider {...sliderSettings} className="review-slider">
                        {initialTestimonials.map((testimonial) => (
                            <div key={testimonial.id} className="p-4 outline-none">
                                <div className="group glass p-10 lg:p-12 rounded-[3.5rem] border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 relative overflow-hidden h-full flex flex-col justify-between min-h-[420px]">
                                    <Quote className="absolute top-8 right-8 text-primary/10 w-20 h-20 -z-10 group-hover:text-primary/20 transition-colors" />

                                    <div>
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={14} className={i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground/30"} />
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-muted rounded-full">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground">
                                                    {testimonial.source}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-lg text-muted-foreground font-light leading-relaxed italic mb-10 line-clamp-4">
                                            &ldquo;{testimonial.content}&rdquo;
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-5 mt-auto">
                                        <div className="w-14 h-14 rounded-full bg-muted overflow-hidden shadow-md flex-shrink-0 flex items-center justify-center">
                                            <User size={24} className="text-muted-foreground/50" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-foreground leading-none">{testimonial.name}</h4>
                                            <p className="text-[10px] uppercase font-bold tracking-widest text-primary leading-none">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Exclusive Benefit Banner */}
                <div className="mt-24 p-12 glass rounded-[3.5rem] border border-white/40 flex flex-col lg:flex-row items-center justify-between gap-12 group/banner">
                    <div className="flex items-center gap-8">
                        <div className="p-6 bg-sunset-gradient text-white rounded-3xl shadow-xl shadow-primary/20 animate-pulse">
                            <Heart size={36} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-3xl font-heading font-bold text-foreground">Your Voice, Our Mission</h4>
                            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-lg">
                                Each review helps us refine the Kokomo sanctuary. Join our community of travelers and share your most cherished moments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submission Form Modal */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-2xl animate-in fade-in duration-300">
                    <div
                        className="bg-card w-full max-w-2xl rounded-[3.5rem] border border-white/20 shadow-2xl overflow-y-auto max-h-[90vh] relative p-12 custom-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute top-8 right-8 text-muted-foreground hover:text-white p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"
                        >
                            <X size={24} />
                        </button>

                        {submitted ? (
                            <div className="py-20 text-center space-y-8 animate-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-primary/40">
                                    <CheckCircle2 size={48} className="text-white" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-4xl font-heading font-bold text-foreground">Story Received</h3>
                                    <p className="text-muted-foreground text-lg font-light">Thank you for sharing your experience. Your feedback illuminates our path.</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-primary">
                                        <Sparkles size={24} />
                                        <span className="text-xs font-bold uppercase tracking-[0.3em]">Craft Your Review</span>
                                    </div>
                                    <h3 className="text-4xl font-heading font-bold text-foreground">Write Your Story</h3>
                                    <p className="text-muted-foreground font-light italic">"Every guest is a chapter in our resort's legacy."</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest ml-1">Satisfaction Rating</label>
                                        <div className="flex gap-4 p-4 glass rounded-3xl w-fit">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    className="transition-transform active:scale-90"
                                                >
                                                    <Star
                                                        size={28}
                                                        className={star <= rating ? 'fill-primary text-primary active:scale-125 transition-all' : 'text-muted-foreground/30 hover:text-primary transition-colors'}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest ml-1">Full Name</label>
                                            <input required type="text" placeholder="Sarah Rahman" className="w-full bg-transparent border-b border-muted transition-all outline-none font-medium placeholder:text-muted-foreground/20 focus:border-primary text-xl py-2" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest ml-1">Who you are</label>
                                            <input required type="text" placeholder="Honeymooner / Explorer" className="w-full bg-transparent border-b border-muted transition-all outline-none font-medium placeholder:text-muted-foreground/20 focus:border-primary text-xl py-2" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest ml-1">Your Narrative</label>
                                        <textarea required rows={4} placeholder="What was your most memorable moment?" className="w-full bg-transparent border-b border-muted transition-all outline-none font-medium placeholder:text-muted-foreground/20 focus:border-primary text-xl py-2 resize-none" />
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-8 bg-sunset-gradient text-white rounded-[2rem] font-bold shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                                    <span className="uppercase tracking-[0.3em] text-[10px]">Publish My Story</span>
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}
