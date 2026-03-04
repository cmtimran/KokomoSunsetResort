import Link from 'next/link'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-sunset-gradient" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <img
                            src="/images/logo/logo.png"
                            alt="Kokomo Sunset Resort Logo"
                            className="h-20 w-auto object-contain"
                        />
                        <p className="text-gray-400 leading-relaxed text-sm font-light">
                            Experience the sublime intersection of modern luxury and nature&apos;s quietude
                            at Gazipur&apos;s preeminent waterfront sanctuary.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: Facebook, href: 'https://www.facebook.com/kokomosunset' },
                                { icon: Instagram, href: '#' },
                                { icon: Youtube, href: '#' }
                            ].map((item, idx) => (
                                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-primary hover:text-white rounded-xl transition-all duration-300 border border-white/10 group">
                                    <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Discover</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {[
                                { name: 'Accommodations', href: '#accommodations' },
                                { name: 'Exclusive Packages', href: '#packages' },
                                { name: 'Resort Facilities', href: '#amenities' },
                                { name: 'Visual Gallery', href: '#gallery' },
                                { name: 'Contact Us', href: '#contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-primary transition-all flex items-center gap-2 group">
                                        <div className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact details */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Enquiries</h4>
                        <ul className="space-y-6 text-sm text-gray-400">
                            <li className="flex items-start space-x-4 group">
                                <div className="p-2 transition-colors group-hover:text-primary"><MapPin size={18} /></div>
                                <span className="font-light leading-relaxed">Pabur Road, Surjanarayanpur, Kapasia, Gazipur</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="p-2 transition-colors group-hover:text-primary"><Phone size={18} /></div>
                                <span className="font-light">+880 1894 953 780, 81, 82</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="p-2 transition-colors group-hover:text-primary"><Mail size={18} /></div>
                                <span className="font-light">reservation.kokomoresort@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Exclusive Newsletter */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Newsletter</h4>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">Subscribe for curated weekend experiences and seasonal offers.</p>
                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Your perspective"
                                className="bg-white/5 border border-white/10 outline-none text-white px-6 py-4 w-full text-xs rounded-2xl focus:bg-white/10 focus:border-primary/50 transition-all font-light"
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary/90 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                    <p>&copy; {new Date().getFullYear()} Kokomo Sunset Resort. All rights reserved.</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-primary transition-all hover:tracking-[0.3em]">Privacy</a>
                        <a href="#" className="hover:text-primary transition-all hover:tracking-[0.3em]">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
