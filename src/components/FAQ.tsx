'use client'

import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQS = [
    {
        question: "Where is Kokomo Sunset Resort located?",
        answer: "We are located at Kapasia, Gazipur, offering a stunning and tranquil escape with premium lakeside views and breathtaking sunsets, just a short drive from Dhaka."
    },
    {
        question: "What are the check-in and check-out times?",
        answer: "Standard check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in or late check-out is subject to availability and may incur additional charges."
    },
    {
        question: "Is there a swimming pool at the resort?",
        answer: "Yes, we have a premium infinity swimming pool that offers a panoramic view of the lake, perfect for a relaxing dip during sunset."
    },
    {
        question: "Do you offer airport transportation?",
        answer: "Yes, we can arrange luxury airport pick-up and drop-off services upon request. Please contact our concierge desk at least 24 hours in advance."
    },
    {
        question: "Are pets allowed in the resort?",
        answer: "To ensure the comfort and safety of all our guests, we currently have a no-pets policy, with the exception of certified service animals."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
                        <HelpCircle size={14} /> Common Inquiries
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground">Curiosity & <span className="text-gradient">Clarity</span></h2>
                    <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
                        Everything you need to know about your upcoming sanctuary experience.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`group rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openIndex === index
                                ? 'bg-card border-primary/20 shadow-xl'
                                : 'bg-card/50 border-muted hover:border-primary/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between text-left"
                            >
                                <span className={`text-lg sm:text-xl font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-all duration-500 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-muted text-muted-foreground'
                                    }`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-muted-foreground font-light leading-relaxed text-base sm:text-lg">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
