interface Skill {
  name: string;
  level: number;
  description: string;
  icon: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  color: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function SkillCategory({ title, skills, color, isExpanded, onToggle }: SkillCategoryProps) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-base hover:shadow-elevation-md">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors duration-base"
        aria-expanded={isExpanded}
      >
        <h3 className="text-xl font-headline font-semibold text-foreground">{title}</h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-base ${color}`}>
          <svg
            className={`w-5 h-5 text-white transition-transform duration-base ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div
        className={`transition-all duration-base overflow-hidden ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
                <span className="text-sm font-semibold text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-slow ${color}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}