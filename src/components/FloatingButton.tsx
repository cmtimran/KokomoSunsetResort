'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FloatingButton() {
    return (
        <motion.a
            href="https://api.whatsapp.com/send?phone=8801894953782"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center animate-bounce-slow"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={28} />
        </motion.a>
    )
}
