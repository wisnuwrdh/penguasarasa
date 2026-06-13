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
            src="/logospr.webp"
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
            href={waLink('Halo, saya mau pesan Bakso Cilok Ayam sekarang')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#25D366', color: '#ffffff' }}
            className="whitespace-nowrap px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95 shadow-md"
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
          id="mobile-menu"
          className="md:hidden bg-surface border-t border-outline-variant px-4 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-on-surface-variant font-medium text-lg py-2 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink('Halo, saya mau pesan Bakso Cilok Ayam sekarang')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            style={{ backgroundColor: '#25D366', color: '#ffffff' }}
            className="text-center whitespace-nowrap px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95 shadow-md mt-2"
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </header>
  )
}
