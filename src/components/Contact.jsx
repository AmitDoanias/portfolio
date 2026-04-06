const contactLinks = [
  {
    label: 'GitHub',
    href: '#',
    description: 'See my code',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-white',
  },
  {
    label: 'LinkedIn',
    href: '#',
    description: 'Let\'s connect',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
  },
  {
    label: 'Email',
    href: 'mailto:your@email.com',
    description: 'Send a message',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: 'hover:bg-violet-600 hover:text-white hover:border-violet-600',
  },
]

const cvLinks = [
  { label: 'Download CV (English)', href: '/Amit_Doanias_CV_EN.pdf', download: 'Amit_Doanias_CV.pdf', lang: 'EN' },
  { label: 'הורד קורות חיים (עברית)', href: '/Amit_Doanias_CV_HE.pdf', download: 'עמית_דואניאס_קורות_חיים.pdf', lang: 'HE' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-12 leading-relaxed">
          I'm always open to new opportunities, collaborations, or just a friendly chat.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {contactLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-2 px-8 py-5 rounded-2xl border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
                transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${link.color} min-w-[140px]`}
            >
              {link.icon}
              <span className="font-semibold text-sm">{link.label}</span>
              <span className="text-xs text-gray-400 group-hover:text-current/70 transition-colors">{link.description}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          <span className="text-sm text-gray-400 dark:text-gray-600 font-medium">or grab my CV</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* CV buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {cvLinks.map(cv => (
            <a
              key={cv.lang}
              href={cv.href}
              download={cv.download}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                border-2 border-violet-500 dark:border-violet-500 text-violet-600 dark:text-violet-400
                hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white
                transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {cv.label}
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-16 text-xs text-gray-400 dark:text-gray-600">
          Built with React & Tailwind CSS · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
