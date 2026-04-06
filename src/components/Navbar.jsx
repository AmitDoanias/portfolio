import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ isDark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/85 dark:bg-[#030303]/85 backdrop-blur-md shadow-sm border-b border-violet-100/60 dark:border-white/[0.06]'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white
            hover:text-violet-600 dark:hover:text-violet-300 transition-colors duration-200"
        >
          Amit<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200
                text-gray-500 dark:text-white/50
                hover:text-violet-600 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: toggle + hamburger */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl transition-all duration-200
              text-gray-500 dark:text-white/50
              hover:text-violet-600 dark:hover:text-violet-300
              hover:bg-violet-50 dark:hover:bg-white/[0.05]"
          >
            {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </motion.button>

          <button
            className="md:hidden p-2 rounded-xl transition-all duration-200
              text-gray-500 dark:text-white/50
              hover:bg-violet-50 dark:hover:bg-white/[0.05]"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden border-t border-gray-100 dark:border-white/[0.06]
              bg-white/95 dark:bg-[#030303]/95 backdrop-blur-md
              px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium transition-colors duration-200
                  text-gray-600 dark:text-white/60
                  hover:text-violet-600 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
