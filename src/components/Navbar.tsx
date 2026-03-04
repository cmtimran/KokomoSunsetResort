'use client'

import { useState } from 'react'
import { Menu, X, Gift } from 'lucide-react'
import Link from 'next/link'

const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Accommodations', href: '/accommodations' },
    { name: 'Packages', href: '/packages' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Dining', href: '/dining' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="fixed w-full z-50 transition-all duration-300 px-4 md:px-8 py-4">
                <div className="max-w-7xl mx-auto glass rounded-full shadow-2xl px-6 md:px-10 h-20 flex justify-between items-center transition-all duration-500 hover:shadow-primary/10">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center group">
                            <img
                                src="/images/logo/logo.png"
                                alt="Kokomo Sunset Resort Logo"
                                className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105 dark:brightness-0 dark:invert"
                            />
                        </Link>
                    </div>

                    <div className="hidden lg:flex space-x-8 items-center">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-foreground font-semibold hover:text-primary hover:-translate-y-0.5 transition-all text-[10px] tracking-[0.2em] uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Special Offers Page Link */}
                        <Link
                            href="/offers"
                            className="relative flex items-center gap-2 text-foreground font-bold hover:text-primary transition-all text-[10px] tracking-[0.2em] uppercase group"
                        >
                            <Gift size={14} className="group-hover:animate-bounce" />
                            Offers
                            <span className="absolute -top-3 -right-6 px-2 py-0.5 bg-sunset-gradient text-white text-[8px] font-bold rounded-full animate-pulse shadow-lg shadow-primary/20">
                                HOT
                            </span>
                        </Link>

                        <div className="flex items-center gap-6 border-l border-muted/50 pl-8 ml-4">
                            <Link
                                href="/booking"
                                className="relative group/nav overflow-hidden px-10 py-4 rounded-full font-bold transition-all shadow-2xl hover:shadow-primary/40 active:scale-95 text-[11px] uppercase tracking-[0.25em] text-white bg-sunset-gradient border border-white/10"
                            >
                                <span className="relative z-10">Book Now</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/nav:translate-y-0 transition-transform duration-500" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary transition-colors focus:outline-none p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 glass rounded-[2rem] shadow-2xl overflow-hidden animate-slideUp">
                        <div className="p-8 space-y-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm font-bold tracking-[0.2em] uppercase text-foreground hover:text-primary transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/offers"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-primary"
                            >
                                <Gift size={18} /> Special Offers
                            </Link>
                            <Link
                                href="/booking"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-sunset-gradient text-white px-4 py-5 rounded-2xl font-bold shadow-xl shadow-primary/20 text-xs uppercase tracking-widest"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
