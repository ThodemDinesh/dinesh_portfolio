// import type { Metadata } from 'next'
// import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
// import './globals.css'
// import Navbar from '@/components/Navbar'
// import { ThemeProvider } from '@/components/ThemeProvider'

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// })

// const poppins = Poppins({ 
//   subsets: ['latin'], 
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
//   display: 'swap',
// })

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ['latin'],
//   variable: '--font-jetbrains-mono',
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: 'Dinesh - Creative Software Developer',
//   description: 'Portfolio of Dinesh - A passionate software developer who loves solving problems and building innovative solutions.',
//   keywords: 'software developer, full stack, react, next.js, portfolio, AI, machine learning',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans bg-gray-900 text-white`}>
//         <ThemeProvider>
//           <Navbar />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dinesh - Creative Software Developer',
  description: 'Portfolio of Dinesh - A passionate software developer who loves solving problems and building innovative solutions.',
  keywords: 'software developer, full stack, react, next.js, portfolio, AI, machine learning, python, javascript, typescript',
  authors: [{ name: 'Dinesh Thodem' }],
  creator: 'Dinesh Thodem',
  openGraph: {
    title: 'Dinesh - Creative Software Developer',
    description: 'Portfolio showcasing AI/ML projects and full-stack development expertise',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinesh - Creative Software Developer',
    description: 'Portfolio showcasing AI/ML projects and full-stack development expertise',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Separate viewport export (Next.js 14+ requirement)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body 
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans bg-gray-900 text-white min-h-screen antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen">
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
