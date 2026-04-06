import { motion } from 'framer-motion'
import { Mail, Download, Clock } from 'lucide-react'

function GithubIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const contactLinks = [
  {
    label: 'GitHub',
    href: '#',
    description: 'See my code',
    Icon: GithubIcon,
    hoverLight: 'hover:bg-gray-900 hover:text-white hover:border-gray-900',
    hoverDark: 'dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white',
  },
  {
    label: 'LinkedIn',
    href: '#',
    description: "Let's connect",
    Icon: LinkedinIcon,
    hoverLight: 'hover:bg-indigo-600 hover:text-white hover:border-indigo-600',
    hoverDark: 'dark:hover:bg-indigo-500 dark:hover:text-white dark:hover:border-indigo-500',
  },
  {
    label: 'Email',
    href: 'mailto:amitdoanias@gmail.com',
    description: 'Send a message',
    Icon: Mail,
    hoverLight: 'hover:bg-violet-600 hover:text-white hover:border-violet-600',
    hoverDark: 'dark:hover:bg-violet-500 dark:hover:text-white dark:hover:border-violet-500',
  },
]

const cvLinks = [
  {
    label: 'Download CV (English)',
    sublabel: 'Coming soon',
    href: null,
    download: null,
    lang: 'EN',
    disabled: true,
  },
  {
    label: 'הורד קורות חיים (עברית)',
    sublabel: null,
    href: '/Amit_Doanias_CV_HE.pdf',
    download: 'עמית_דואניאס_קורות_חיים.pdf',
    lang: 'HE',
    disabled: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-[#030303]">
      <div className="max-w-3xl mx-auto text-center">

        {/* Section header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase
            bg-violet-100 dark:bg-white/[0.05] border border-violet-200 dark:border-white/[0.08]
            text-violet-600 dark:text-white/60">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4
            text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="max-w-md mx-auto mb-12 leading-relaxed
            text-gray-500 dark:text-white/40">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {contactLinks.map(link => {
            const { Icon } = link
            return (
              <motion.a
                key={link.label}
                href={link.href}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-2 px-8 py-5 rounded-2xl min-w-[140px]
                  border border-gray-200 dark:border-white/[0.08]
                  bg-white dark:bg-white/[0.03]
                  text-gray-700 dark:text-white/70
                  transition-all duration-200 cursor-pointer
                  hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40
                  ${link.hoverLight} ${link.hoverDark}`}
              >
                <Icon size={22} strokeWidth={1.8} />
                <span className="font-semibold text-sm">{link.label}</span>
                <span className="text-xs text-gray-400 dark:text-white/30 group-hover:text-inherit transition-colors">
                  {link.description}
                </span>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/[0.06]" />
          <span className="text-sm font-medium text-gray-400 dark:text-white/30">or grab my CV</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/[0.06]" />
        </div>

        {/* CV buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cvLinks.map(cv => (
            <motion.div key={cv.lang} variants={itemVariants}>
              {cv.disabled ? (
                <div
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                    border-2 border-gray-200 dark:border-white/[0.06]
                    text-gray-400 dark:text-white/20 cursor-not-allowed select-none"
                  title="Coming soon"
                >
                  <Clock size={15} strokeWidth={2} />
                  {cv.label}
                  <span className="ml-1 text-xs font-normal opacity-70">({cv.sublabel})</span>
                </div>
              ) : (
                <motion.a
                  href={cv.href}
                  download={cv.download}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer
                    border-2 border-violet-500 dark:border-violet-500/70
                    text-violet-600 dark:text-violet-300
                    hover:bg-violet-600 hover:text-white hover:border-violet-600
                    dark:hover:bg-violet-600/80 dark:hover:text-white dark:hover:border-violet-600
                    transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
                >
                  <Download size={15} strokeWidth={2.5} />
                  {cv.label}
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-xs text-gray-400 dark:text-white/20"
        >
          Built with React & Tailwind CSS · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  )
}
