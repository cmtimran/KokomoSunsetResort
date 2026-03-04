import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import FloatingButton from '@/components/FloatingButton'
import Footer from '@/components/Footer'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Kokomo Sunset Resort',
  description: 'A premium, luxury resort located in Kapasia, Gazipur with a stunning lake view and sunset.',
}

import { ThemeProvider } from '@/components/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="sunset"
          enableSystem={false}
          themes={['sunset', 'amber', 'blue', 'corporate', 'forest']}
        >
          <Navbar />
          <ThemeSwitcher />
          {children}
          <Footer />
          <FloatingButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
