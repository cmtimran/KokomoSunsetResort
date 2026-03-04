'use client'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { ComponentProps } from 'react'

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
