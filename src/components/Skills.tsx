
import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<keyof SkillsData>("frontend")

  type Skill = {
    name: string
    percentage: number
  }
  
  type SkillsData = {
    frontend: Skill[]
    backend: Skill[]
    fullstack: Skill[]
  }
  const tabs = [
    { id: "frontend", title: "Frontend", subtitle: "Mais de 3 anos", icon: "uil uil-brackets-curly" },
    { id: "backend", title: "Backend", subtitle: "Mais de 3 anos", icon: "uil uil-server-network" },
    { id: "fullstack", title: "FullStack", subtitle: "Experiência completa", icon: "uil uil-layer-group" },
  ];

  const skillsData:  SkillsData = {
    frontend: [
      { name: "HTML", percentage: 95 },
      { name: "CSS / TailwindCSS", percentage: 70 },
      { name: "JavaScript", percentage: 85 },
      { name: "React / Next.js", percentage: 80 },
    ],
    backend: [
      { name: "Node.js", percentage: 90 },
      { name: "Prisma / MongoDB / MySQL", percentage: 75 },
      { name: "FileSystem / Stream / Crypto", percentage: 85 },
    ],
    fullstack: [
      { name: "Projetos FullStack", percentage: 90 },
    ],
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="Minhas Habilidades">Minha Experiência</h2>

      <div className="skills-container container grid">
        {/* Tabs */}
        <div className="skills-tabs flex flex-col md:flex-row gap-4 md:gap-6">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`skills-header cursor-pointer flex items-center justify-between p-4 border rounded-lg ${
                activeTab === tab.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
              }`}
              onClick={() => setActiveTab(tab.id as keyof SkillsData)}
            >
              <i className={`${tab.icon} text-2xl mr-3`}></i>
              <div>
                <h3 className="skills-title font-semibold">{tab.title}</h3>
                <span className="skills-subtitle text-sm">{tab.subtitle}</span>
              </div>
            {  activeTab === tab.id ? <i className="uil uil-angle-right skills-arrow text-lg"></i>:  <i className="uil uil-angle-down skills-arrow text-lg"></i>}
            </div>
          ))}
        </div>

        {/* Conteúdo */}
        <div className="skills-content mt-6">
          <div className="skills-list grid gap-4">
        
            {skillsData[activeTab].map((skill, idx) => (
              <div key={idx} className="skills-data">
                <div className="flex justify-between mb-1">
                  <h4 className="skills-name font-medium">{skill.name}</h4>
                  <span className="skills-number">{skill.percentage}%</span>
                </div>
                <div className="skills-bar bg-gray-300 h-2 rounded-full">
                  <span
                    className="skills-percentage bg-blue-600 h-2 rounded-full block"
                    style={{ width: `${skill.percentage}%` }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
