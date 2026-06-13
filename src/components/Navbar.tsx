'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { waLink } from '@/lib/wa'

const navLinks = [
  { href: '#produk', label: 'Menu' },
  { href: '#event', label: 'Event' },
  { href: '#lokasi', label: 'Lokasi' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function handleNavClick() {
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between h-16 max-w-screen-xl mx-auto px-4">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logospr.png"
            alt="Logo SPR"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-headline text-headline-md text-primary font-bold tracking-tight">
            Bakso Cilok Ayam
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink('Halo SPR, saya mau pesan sekarang')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary whitespace-nowrap px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95 shadow-md"
          >
            Pesan Sekarang
          </a>
        </div>

        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={handleNavClick}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/45 transition-opacity duration-300" />
        </div>
      )}

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 z-50 h-full shadow-2xl md:hidden transform transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: 'clamp(280px, 75vw, 480px)', backgroundColor: '#fff8f6' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <Image
                src="/logospr.png"
                alt="Logo SPR"
                width={32}
                height={32}
                className="object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-headline text-headline-md text-primary font-bold">
                  SPR
                </span>
                <span className="text-label-md text-on-surface-variant -mt-1">
                  Sang Penguasa Rasa
                </span>
              </div>
            </div>
            <button
              onClick={handleNavClick}
              className="text-on-surface-variant p-1"
              aria-label="Tutup menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-on-surface-variant font-medium text-lg py-3 px-3 rounded-xl hover:bg-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-4 pb-8 pt-4 border-t border-outline-variant">
            <a
              href={waLink('Halo SPR, saya mau pesan sekarang')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="block w-full text-center bg-primary text-on-primary whitespace-nowrap px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95 shadow-md"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
