import type { Metadata } from "next"
import { Work_Sans, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SPR (Sang Penguasa Rasa) | Bakso Cilok Ayam, Sudah 3 Tahun Dipercaya",
  description:
    "Pesan Bakso Cilok Ayam dari SPR via WhatsApp. Paket harian mulai Rp10.000. Melayani event sampai 100 porsi. Langsung chat, konfirmasi cepat.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${workSans.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-sans text-on-surface bg-surface antialiased min-h-full">
        {children}
      </body>
    </html>
  )
}
