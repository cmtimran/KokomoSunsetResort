'use client'

import * as React from 'react'
import { Palette, Check } from 'lucide-react'
import { useTheme } from 'next-themes'

const THEMES = [
    { id: 'sunset', name: 'Sunset', color: '#EC407A' },
    { id: 'amber', name: 'Amber', color: '#BF9400' },
    { id: 'blue', name: 'Ocean', color: '#1565C0' },
    { id: 'corporate', name: 'Elite', color: '#263238' },
    { id: 'forest', name: 'Forest', color: '#2E7D32' },
]

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed bottom-10 left-10 z-[99999] group/switcher animate-fadeIn">
            {/* Elegant Floating Label */}
            <div className="absolute left-24 top-1/2 -translate-y-1/2 bg-foreground/90 backdrop-blur-md text-white px-5 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/switcher:opacity-100 transition-all duration-500 whitespace-nowrap pointer-events-none shadow-[20px_0_50px_rgba(0,0,0,0.2)] border border-white/10 translate-x-4 group-hover/switcher:translate-x-0">
                Change Resort Theme
            </div>

            {/* Main Floating Button (The "WhatsApp" for Themes) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl relative overflow-hidden group/btn ${isOpen ? 'bg-foreground text-white scale-90 rotate-90' : 'bg-primary text-white hover:scale-110 active:scale-95 animate-bounce-slow'
                    }`}
                aria-label="Switch Theme"
            >
                <Palette size={32} strokeWidth={2.5} className="text-white relative z-10" />

                {/* Subtle pulsing animation to catch the eye */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full border-4 border-white/40 animate-ping opacity-60" />
                )}
            </button>

            {/* Menu Expansion */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/5 flex items-center justify-center lg:bg-transparent lg:inset-auto"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute bottom-24 left-0 z-[110] glass p-3 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 min-w-[260px] animate-slideUp">
                        <div className="space-y-1.5">
                            <div className="px-5 py-3 flex items-center justify-between border-b border-muted/50 mb-2">
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Essence Selection</span>
                                <span className="h-1 w-8 bg-primary rounded-full" />
                            </div>

                            {THEMES.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setTheme(t.id)
                                        setIsOpen(false)
                                    }}
                                    className={`flex items-center justify-between w-full px-5 py-4 rounded-3xl transition-all duration-300 group/item ${theme === t.id
                                        ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-102'
                                        : 'hover:bg-muted text-foreground'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-4 h-4 rounded-full border-2 border-white/20 transition-transform group-hover/item:scale-125 ${theme === t.id ? 'bg-white' : ''
                                                }`}
                                            style={{ backgroundColor: theme === t.id ? 'white' : t.color }}
                                        />
                                        <span className="text-[11px] font-bold uppercase tracking-widest">{t.name}</span>
                                    </div>
                                    {theme === t.id && <Check size={14} strokeWidth={3} className="animate-in fade-in zoom-in duration-300" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
