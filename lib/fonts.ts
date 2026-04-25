import { Inter } from 'next/font/google'

/**
 * UI & body copy — clean, neutral.
 * Display / headers use Proxima Nova from `@font-face` in globals.css (`--font-display`).
 */
export const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})
