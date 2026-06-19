import React from 'react';
import {  Mail, ExternalLink, Code2, Briefcase, User, Terminal, Database, Globe, GraduationCap, Phone } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
const developerData = {
  name: "Deepak Yadav",
  title: ".NET Core Developer",
  bio: ".NET Core Developer with 3+ years of experience building scalable web applications and APIs using ASP.NET Core, SQL Server, and Azure. Skilled in backend development, secure integrations, performance optimization, and maintainable system design.",
  contact: {
    email: "deepakyadav.sde@gmail.com",
    phone: "+91 8564060986",
    linkedin: "https://www.linkedin.com/in/deepak-yadav-050872135/",
    portfolio: "https://deepakyadav14.github.io/Portfolio/"
  },
  skills: [
    { name: "Backend", icon: Code2, items: ["C#", ".NET 8", "ASP.NET Core", "ASP.NET 4.8", "Web API", "EF Core", "LINQ", "Dapper", "ADO.NET"] },
    { name: "Cloud & Database", icon: Database, items: ["Azure Functions", "APIM", "Cosmos DB", "Blob Storage", "MSSQL", "MySQL","Apache Solr"] },
    { name: "Frontend", icon: Globe, items: ["Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "jQuery"] },
    { name: "DevOps & Security", icon: Terminal, items: ["Git", "Azure DevOps", "CI/CD", "JWT Auth", "xUnit", "Swagger", "Postman", "IIS"] }
  ],
  projects: [
    {
      title: "Serverless API Platform",
      company: "EBC PUBLISHING",
      period: "Dec 2025 - Feb 2026",
      description: "Designed and developed 10+ Azure Functions-based APIs for multiple business applications. Implemented APIM, JWT authentication, centralized logging with Cosmos DB, and cloud file management.",
      tech: ["Azure Functions", "APIM", "Cosmos DB", "Blob Storage"],
      link: null
    },
    {
      title: "Admin Panel Module",
      company: "EBC PUBLISHING",
      period: "Oct 2025 - Jan 2026",
      description: "Built 5+ .NET Core 8 admin panel modules streamlining internal workflows. Implemented RBAC for 10+ roles and developed robust backend services using Clean Architecture and xUnit.",
      tech: [".NET Core 8", "Clean Architecture", "xUnit", "RBAC"],
      link: null
    },
    {
      title: "Deetaa",
      company: "Elation Softnet",
      period: "Feb 2024 - Mar 2025",
      description: "Full-stack platform supporting 300+ daily users with secure transaction workflows. Integrated payment gateways, Aadhaar API for verification, and optimized EF Core queries to reduce data retrieval time by 25%.",
      tech: ["ASP.NET Core", "EF Core", "SQL Server", "jQuery"],
      link: "https://deetaa.com"
    },
    {
      title: "IOCL Bottling Plant",
      company: "Elation Softnet",
      period: "Jul 2024 - Aug 2025",
      description: "Built an attendance management module for 500+ employees and optimized 10+ CTE-based queries and stored procedures in SQL Server, reducing report generation time by 30%.",
      tech: ["ASP.NET Core", "MSSQL", "Stored Procedures"],
      link: null
    }
  ],
  experience: [
    {
      role: ".NET Core Developer",
      company: "EBC Publishing Pvt Ltd",
      location: "Lucknow, UP",
      period: "Sep 2025 - Present",
      description: "Designing Azure Functions-based APIs and .NET Core 8 backend services. Securing applications using APIM and JWT. Utilizing Cosmos DB, Blob Storage, and Azure DevOps for CI/CD reliable deployments following Clean Architecture."
    },
    {
      role: ".NET Core Developer",
      company: "Elation Softnet Pvt Ltd",
      location: "Lucknow, UP",
      period: "Jul 2023 - Sep 2025",
      description: "Contributed to 5+ business-critical applications. Led backend development for an email-selling platform handling 300+ daily users. Optimized SQL queries, designed scalable architecture, and developed responsive UI components."
    }
  ],
  education: [
    {
      degree: "Master of Computer Application",
      institution: "JS University, Shikohabad, UP",
      year: "2025"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Ewing Christian College, Prayagraj, UP",
      year: "2022"
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-900">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            &lt;{developerData.name.split(' ')[0].toLowerCase()} /&gt;
          </span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
          <Terminal size={14} /> Available for opportunities
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">{developerData.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-400">
          {developerData.title}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          {developerData.bio}
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#projects" className="px-5 py-2.5 rounded-lg bg-blue-500 text-slate-950 font-bold hover:bg-blue-400 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-900 font-medium transition-colors">
            Contact Me
          </a>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="flex items-center gap-2 mb-8">
          <User className="text-blue-400" size={22} />
          <h2 className="text-2xl font-bold">Skills & Expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developerData.skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
                <h3 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <Icon size={18} />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="text-blue-400" size={22} />
          <h2 className="text-2xl font-bold">Key Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {developerData.projects.map((project, index) => (
            <div key={index} className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-xs font-mono text-slate-500 mb-4">{project.company} | {project.period}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs text-blue-400 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="text-blue-400" size={22} />
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </div>
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
          {developerData.experience.map((exp, index) => (
            <div key={index} className="relative pl-10 group">
              <div className="absolute left-2.5 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors border-2 border-slate-950" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-slate-200">{exp.role} <span className="text-blue-400 font-normal">@ {exp.company}</span></h3>
                <span className="text-xs font-mono text-slate-500">{exp.period}</span>
              </div>
              <p className="text-xs font-mono text-slate-500 mb-3">{exp.location}</p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="text-blue-400" size={22} />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {developerData.education.map((edu, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
              <h3 className="text-lg font-bold text-slate-200 mb-1">{edu.degree}</h3>
              <p className="text-blue-400 text-sm mb-3">{edu.institution}</p>
              <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Currently based in Lucknow, UP. Open to new opportunities and discussions around .NET and Cloud architecture.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href={`mailto:${developerData.contact.email}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-all text-sm">
            <Mail size={16} /> Email Me
          </a>
          <a href={`tel:${developerData.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-all text-sm">
            <Phone size={16} /> Call Me
          </a>
          <a href={developerData.contact.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-all text-sm">
            <Github size={16} /> GitHub
          </a>
          <a href={developerData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-all text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-600 text-xs py-8 text-center font-mono flex flex-col gap-2">
        <span>&copy; {new Date().getFullYear()} {developerData.name}. All rights reserved.</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </footer>
    </div>
  );
}