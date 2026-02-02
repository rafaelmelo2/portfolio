import { Code } from 'lucide-react'

export function SkillBar({ skill, percentage }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-slate-300 font-medium text-sm">{skill}</span>
        <span className="text-emerald-400 text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const coreSkills = [
  { skill: 'Python (Data Science Ecosystem)', percentage: 95 },
  { skill: 'Computer Vision (OpenCV/YOLO)', percentage: 80 },
  { skill: 'SQL & Database Design', percentage: 75 },
  { skill: 'JavaScript/React', percentage: 60 },
]

const frameworksLibs = ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'FastAPI', 'Flask']
const toolsDevOps = ['Git/GitHub', 'Docker', 'Linux/Bash', 'Jira', 'VS Code', 'Colab', 'AWS']

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-12">Arsenal Tecnológico</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-slate-800/20 p-6 md:p-8 rounded-2xl border border-slate-700">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Code className="text-emerald-400" /> Core Competencies
            </h3>
            {coreSkills.map(({ skill, percentage }) => (
              <SkillBar key={skill} skill={skill} percentage={percentage} />
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/20 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-white font-bold mb-4 text-lg">Frameworks & Libs</h3>
              <div className="flex flex-wrap gap-2">
                {frameworksLibs.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-xs md:text-sm border border-slate-600 hover:border-emerald-500 hover:text-emerald-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/20 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-white font-bold mb-4 text-lg">Ferramentas & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {toolsDevOps.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-xs md:text-sm border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
