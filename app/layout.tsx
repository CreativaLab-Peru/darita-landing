import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Dara Mariluz | Innovación, Tecnología y Startups",
    template: "%s | Dara Mariluz"
  },
  description: "Emprendedora tech y gestora de innovación. Fundadora de Levely y Mujeres Digitales. Ayudando a construir carreras globales desde Cusco para el mundo.",
  keywords: ["Dara Mariluz", "Startup", "Levely", "Mujeres Digitales", "Cusco Tech", "Innovación Peru", "Career Coaching AI"],
  authors: [{ name: "Dara Mariluz" }],
  creator: "Edward Melendez", // Crédito para ti como dev
  metadataBase: new URL("https://soydaramariluz.com"), // Cambia por el dominio real

  // // Open Graph (LinkedIn / Facebook)
  // openGraph: {
  //   type: "website",
  //   locale: "es_PE",
  //   url: "https://soydaramariluz.com",
  //   title: "Dara Mariluz | Estrategia en Tecnología e Innovación",
  //   description: "Explora la trayectoria de Dara Mariluz: Startups, mentoría STEAM y aceleración de talento global.",
  //   siteName: "Dara Mariluz Personal Brand",
  //   images: [
  //     {
  //       url: "/og-image.jpg", // Asegúrate de tener esta imagen en /public (recomendado 1200x630)
  //       width: 1200,
  //       height: 630,
  //       alt: "Dara Mariluz - Portafolio Profesional",
  //     },
  //   ],
  // },

  // // Twitter / X
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Dara Mariluz | Innovación y Startups",
  //   description: "Construyendo el futuro del talento tech en Latam.",
  //   images: ["/og-image.jpg"],
  // },

  // Robots y Favicons
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
