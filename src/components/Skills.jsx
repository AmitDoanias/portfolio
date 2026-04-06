import { motion } from 'framer-motion'
import {
  Terminal, Code2, Braces, Coffee,
  Monitor, Atom, Globe, Paintbrush, Wind,
  Server, Database, LayoutGrid, Users,
  Cpu, Brain, Sparkles, Film, Bot,
} from 'lucide-react'

const skillGroups = [
  {
    category: 'Languages',
    CategoryIcon: Terminal,
    lightCard: 'bg-gradient-to-br from-violet-50 to-indigo-50 border-violet-200',
    darkCard: 'dark:bg-gradient-to-br dark:from-violet-950/30 dark:to-indigo-950/30 dark:border-violet-800/40',
    titleColor: 'text-violet-700 dark:text-violet-300',
    badgeLight: 'bg-white text-violet-800 border-violet-200',
    badgeDark: 'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/50',
    iconColor: 'text-violet-500 dark:text-violet-400',
    skills: [
      { name: 'JavaScript', Icon: Code2 },
      { name: 'TypeScript', Icon: Braces },
      { name: 'Java', Icon: Coffee },
    ],
  },
  {
    category: 'Frontend',
    CategoryIcon: Monitor,
    lightCard: 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200',
    darkCard: 'dark:bg-gradient-to-br dark:from-indigo-950/30 dark:to-blue-950/30 dark:border-indigo-800/40',
    titleColor: 'text-indigo-700 dark:text-indigo-300',
    badgeLight: 'bg-white text-indigo-800 border-indigo-200',
    badgeDark: 'dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-700/50',
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    skills: [
      { name: 'React', Icon: Atom },
      { name: 'HTML', Icon: Globe },
      { name: 'CSS', Icon: Paintbrush },
      { name: 'Tailwind CSS', Icon: Wind },
    ],
  },
  {
    category: 'Backend & Systems',
    CategoryIcon: Server,
    lightCard: 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200',
    darkCard: 'dark:bg-gradient-to-br dark:from-rose-950/30 dark:to-pink-950/30 dark:border-rose-800/40',
    titleColor: 'text-rose-700 dark:text-rose-300',
    badgeLight: 'bg-white text-rose-800 border-rose-200',
    badgeDark: 'dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-700/50',
    iconColor: 'text-rose-500 dark:text-rose-400',
    skills: [
      { name: 'Node.js', Icon: Server },
      { name: 'MongoDB', Icon: Database },
      { name: 'ERP Priority', Icon: LayoutGrid },
      { name: 'CRM', Icon: Users },
    ],
  },
  {
    category: 'AI Tools',
    CategoryIcon: Cpu,
    lightCard: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-200',
    darkCard: 'dark:bg-gradient-to-br dark:from-purple-950/30 dark:to-fuchsia-950/30 dark:border-purple-800/40',
    titleColor: 'text-purple-700 dark:text-purple-300',
    badgeLight: 'bg-white text-purple-800 border-purple-200',
    badgeDark: 'dark:bg-purple-950/60 dark:text-purple-200 dark:border-purple-700/50',
    iconColor: 'text-purple-500 dark:text-purple-400',
    skills: [
      { name: 'Claude Code', Icon: Brain },
      { name: 'Gemini', Icon: Sparkles },
      { name: 'Kling', Icon: Film },
      { name: 'Cursor', Icon: Bot },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
}

function SkillCard({ group }) {
  const { CategoryIcon } = group
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={`rounded-2xl border p-6 cursor-default
        ${group.lightCard} ${group.darkCard}
        transition-shadow duration-200 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-2 rounded-xl bg-white/70 dark:bg-white/5 ${group.iconColor}`}>
          <CategoryIcon size={18} strokeWidth={2} />
        </div>
        <h3 className={`text-base font-semibold tracking-tight ${group.titleColor}`}>
          {group.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map(({ name, Icon }) => (
          <motion.span
            key={name}
            whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border
              ${group.badgeLight} ${group.badgeDark}`}
          >
            <Icon size={13} strokeWidth={2} />
            {name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-[#030303]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase
            bg-violet-100 dark:bg-white/[0.05] border border-violet-200 dark:border-white/[0.08]
            text-violet-600 dark:text-white/60">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight
            text-gray-900 dark:text-white">
            What I work with
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-gray-500 dark:text-white/40">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillGroups.map(group => (
            <SkillCard key={group.category} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
