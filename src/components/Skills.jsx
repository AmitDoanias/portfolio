const skillGroups = [
  {
    category: 'Languages',
    emoji: '💻',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800',
    titleColor: 'text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Java', icon: '☕' },
    ],
  },
  {
    category: 'Frontend',
    emoji: '🎨',
    color: 'from-violet-500/10 to-purple-500/10 border-violet-200 dark:border-violet-800',
    titleColor: 'text-violet-600 dark:text-violet-400',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    color: 'from-green-500/10 to-emerald-500/10 border-green-200 dark:border-green-800',
    titleColor: 'text-green-600 dark:text-green-400',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚀' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'SQL', icon: '🗄️' },
    ],
  },
  {
    category: 'AI Tools',
    emoji: '🤖',
    color: 'from-orange-500/10 to-pink-500/10 border-orange-200 dark:border-orange-800',
    titleColor: 'text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'Claude Code', icon: '🧠' },
      { name: 'Gemini', icon: '✨' },
      { name: 'Kling', icon: '🎬' },
      { name: 'Cursor', icon: '🖱️' },
    ],
  },
]

function SkillCard({ group }) {
  return (
    <div className={`rounded-2xl border bg-gradient-to-br p-6 ${group.color} transition-transform duration-200 hover:-translate-y-1`}>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{group.emoji}</span>
        <h3 className={`text-lg font-semibold ${group.titleColor}`}>{group.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map(skill => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
              bg-white/70 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300
              border border-gray-200/80 dark:border-gray-700/80"
          >
            <span>{skill.icon}</span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            What I work with
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map(group => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
