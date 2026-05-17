import React, { useState, useEffect } from 'react';
import {
  
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  Code2,
  Terminal,
  Database,
  Globe,
  Layout,
  Server,
  Send,
  Smartphone,
  Layers,
  Box,
  Workflow,
  Cloud,
  Code
} from 'lucide-react';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// --- DATA FROM CV ---
const personalInfo = {
  name: "Ngo Quang Phuc",
  shortName: "Phuc.",
  role: "Frontend Developer",
  tagline: "I build scalable UI systems and responsive applications.",
  email: "ngophuc2911@gmail.com",
  phone: "0962447792",
  github: "https://github.com/ngophuc29",
  linkedin: "https://www.linkedin.com/in/phuc-ngo-2685493a5/?trk=opento_sprofile_topcard", // Add your linkedin
  about: "Frontend Developer with hands-on experience in React.js and Next.js, seeking an opportunity to contribute to real-world product development. Strong focus on building scalable UI systems, responsive design, performance optimization, and SEO-friendly applications. Passionate about clean code, user experience, and continuous growth toward a professional Frontend Engineer role.",
  avatar: "https://chiragchrg.netlify.app/_astro/ChiragChrg_Avatar_180.gQjQL-YK_1pBsz3.webp" // User's updated avatar
};

const skills = [
  {
    category: "Web & Programming",
    items: [
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css/E34F26" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },

    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },

      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },

      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "REST API", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Google Auth", icon: "https://cdn.simpleicons.org/google/4285F4" },
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Firestore", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },

      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      
    ]
  },
  {
    category: "State & Events",
    items: [
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Zustand", icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.png" },

      { name: "TanStack Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
      { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio/white" },
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
    ]
  },
  {
    category: "Tooling & Observability",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
      { name: "npm", icon: "https://cdn.simpleicons.org/npm/CB3837" },

      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },

      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Swagger UI", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },

    ]
  },
  {
    category: "Config & Templating",
    items: [
      { name: "YAML", icon: "https://cdn.simpleicons.org/yaml/white" },
      { name: "JSON", icon: "https://cdn.simpleicons.org/json/white" },
      { name: "Markdown", icon: "https://cdn.simpleicons.org/markdown/white" },
      { name: "FreeMarker", icon: "https://cdn.simpleicons.org/apache/D22128" },
    ]
  },
  {
    category: "IDEs & Design",
    items: [
      { name: "VS Code", icon: "data:image/jpeg;base64,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" },
      { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    ]
  }
];

const projects = [
  {
    id: 1,
    title: "MegaTrip",
    type: "Graduation Project",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800", // Placeholder for flight/travel
    description: "An all-in-one travel booking platform supporting Flights, Bus Trips, and Tour Packages, including a customer-facing web application and an admin management dashboard.",
    tech: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
      { name: "Axios", icon: "https://cdn.simpleicons.org/axios/5A29E4" }
    ],
    github: "https://github.com/ngophuc29/MegaTrip",
    live: "https://megatrip.id.vn/"
  },
  {
    id: 2,
    title: "Chat app (Web & Mobile)",
    type: "Team Project",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", // Placeholder for chat
    description: "A cross-platform real-time messaging application inspired by Zalo. It features secure user authentication, instant messaging, and a responsive UI tailored for both web and mobile experiences.",
    tech: [
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "ReactJS", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "Socket.IO", icon: "https://cdn.simpleicons.org/socketdotio/white" },
      { name: "WebRTC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webrtc/webrtc-original.svg" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" }
    ],
    github: "https://github.com/ngophuc29/ZaloApp.git",
    live: "#"
  },
  {
    id: 3,
    title: "Ecommerce microservices (Web)",
    type: "Personal Project",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800", // Placeholder for e-commerce
    description: "A scalable e-commerce platform built on a microservices architecture. It includes features like a secure payment gateway integration, seamless user checkout, and automated CI/CD pipelines.",
    tech: [
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/white" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MoMo", icon: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Microservices", icon: "https://cdn.simpleicons.org/apachekafka/white" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D33833" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
      { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" }
    ],
    github: "#", // Điền link mã nguồn
    overview: "#", // Điền link ảnh tổng quát
    live: "#" // Điền link demo
  }
];

// --- COMPONENTS ---

const SectionHeading = ({ title, highlight }: any) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-600/50"></div>
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      <span className="text-purple-500 font-mono text-xl mr-2">&lt;</span>
      {title} <span className="text-purple-500">{highlight}</span>
      <span className="text-purple-500 font-mono text-xl ml-2">/&gt;</span>
    </h2>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-600/50"></div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id:any) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-purple-500/30">

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-purple-900/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center opacity-80">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 italic">Portfolio.</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-purple-400 transition-colors tracking-widest"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full border border-gray-800 hover:border-purple-500 transition-colors text-gray-400 hover:text-white">
              <Moon size={18} />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all group"
            >
              Resume <Download size={16} className="group-hover:animate-bounce" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-gray-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
            {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left py-2 hover:text-purple-400 tracking-widest"
              >
                {item}
              </button>
            ))}
            <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded border border-purple-500 text-purple-400">
              Resume <Download size={16} />
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">

          <div className="w-full md:w-1/2 z-10 flex flex-col items-start gap-4">
            <h3 className="text-xl md:text-2xl font-medium text-gray-200 flex items-center gap-2">
              Hi 👋 My name is
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white">{personalInfo.email}</a>
              <span className="text-gray-600">•</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-white">{personalInfo.phone}</a>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              {personalInfo.shortName}
            </h1>
            <p className="text-xl md:text-2xl mt-2 font-medium">
              I'm a <span className="text-gray-100">{personalInfo.role}.</span>
            </p>
            <p className="text-lg text-gray-400 max-w-md">
              {personalInfo.tagline}
            </p>

            <div className="flex gap-4 mt-8">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <FaGithub size={28} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <FaLinkedin size={28} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Abstract Hero Graphic simulating the screenshot */}
          <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center items-center relative">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Orbits */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_10px_#f472b6]"></div>
              </div>
              <div className="absolute inset-4 rounded-full border border-purple-500/40 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-4 left-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]"></div>
              </div>
              <div className="absolute inset-10 rounded-full border border-pink-500/30 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
              </div>

              {/* Inner Avatar Glow */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-purple-900 to-[#0a0a0a] border border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center justify-center overflow-hidden z-10">
                {/* Insert User Avatar */}
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeading title="About" highlight="Me" />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={personalInfo.avatar}
                alt="About Avatar"
                className="w-64 h-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="w-full md:w-2/3 border-l-2 border-purple-600 pl-6 md:pl-10">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                Hey there! 👋
              </h3>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  I'm {personalInfo.name}. I build things on the internet — with a strong focus on performance, interactivity, and getting the details right.
                </p>
                <p>
                  {personalInfo.about}
                </p>
                <p>
                  I enjoy working on systems that aren't static. Real-time updates, complex UIs, and applications with lots of moving parts. I naturally go deeper into problems — optimizing, refining, and chasing that "this feels right" moment.
                </p>
                <p className="text-gray-200">
                  If you're building something interesting, challenging, or technically demanding... I'd love to be part of it 😄
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto relative">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <SectionHeading title="Tech" highlight="Stack" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  {skillGroup.category} <span className="text-purple-600 font-mono">(*)</span>
                </h4>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 w-full max-w-lg">
                  {skillGroup.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex flex-col items-center justify-center p-3 h-24 rounded-2xl bg-[#080808] border border-gray-800/80 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 cursor-default"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 mb-3 opacity-90 group-hover:opacity-100 transition-all transform group-hover:scale-110 object-contain"
                      />
                      <span className="text-[10px] text-gray-400 group-hover:text-gray-200 font-medium text-center leading-tight">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeading title="My" highlight="Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-300 group flex flex-col"
              >
                {/* Image Box */}
                <div className="relative h-48 overflow-hidden bg-gray-900 border-b border-gray-800">
                  <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-all z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Fake MacOS buttons */}
                  <div className="absolute top-3 left-3 flex gap-1.5 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-500 mt-1 block">{project.type}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] px-2 py-1 rounded-full font-bold tracking-wider flex items-center gap-1 ${project.status === 'LIVE' ? 'text-green-400 bg-green-400/10' :
                          project.status === 'BUILDING' ? 'text-yellow-400 bg-yellow-400/10' : 'text-blue-400 bg-blue-400/10'
                        }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'LIVE' ? 'bg-green-400' :
                            project.status === 'BUILDING' ? 'bg-yellow-400' : 'bg-blue-400'
                          }`}></div>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    {/* Links */}
                    <div className="flex justify-end gap-3 mb-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Xem mã nguồn">
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.overview && (
                        <a href={project.overview} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Xem ảnh tổng quát dự án">
                          <Layout size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Link demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2.5 pt-4 border-t border-gray-800">
                      {project.tech.map((t, i) => (
                        <img
                          key={i}
                          src={t.icon}
                          alt={t.name}
                          title={t.name}
                          className="w-5 h-5 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeading title="Contact" highlight="" />

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
              Let's collaborate!
            </h3>
            <p className="text-gray-400">
              Contact me to discuss your web development needs <br className="hidden md:block" />
              or just to say hello. 😉
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Graphic (Nodes) */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative h-[300px]">
              {/* Center Image - Non-spinning */}
              <img
                src="https://chiragchrg.netlify.app/_astro/ContactVector.DmyxvpE4_LoOaC.svg"
                alt="Contact Vector"
                className="absolute z-10 w-32 h-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:scale-105 transition-transform duration-500"
              />

              <div className="relative w-64 h-64 border border-dashed border-gray-700 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">

                {/* Orbiting Icons */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#0a0a0a] border border-gray-700 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                  <Mail size={16} className="text-gray-300" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-[#0a0a0a] border border-gray-700 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                  <FaLinkedin size={16} className="text-gray-300" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#0a0a0a] border border-gray-700 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                  <FaGithub size={16} className="text-gray-300" />
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-[#0a0a0a] border border-gray-700 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                  <Globe size={16} className="text-gray-300" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Enter your Message"
                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-32 bg-transparent border border-gray-600 hover:border-purple-500 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-purple-500/10 transition-all group"
                >
                  Submit <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-purple-900/30 pt-16 pb-8 relative overflow-hidden">
        {/* Wavy background decoration mimicking screenshot */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#050505] to-[#050505] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
          <div className="mb-6 flex flex-col items-center">
            <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-600 mb-2">
              P
            </div>
            <p className="text-gray-300 font-medium">NgoQuangPhuc | Portfolio.</p>
          </div>

          <div className="flex gap-6 mb-10">
            <a href={personalInfo.github} className="text-gray-400 hover:text-white transition-colors bg-gray-900 p-3 rounded-full hover:bg-purple-600">
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} className="text-gray-400 hover:text-white transition-colors bg-gray-900 p-3 rounded-full hover:bg-purple-600">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors bg-gray-900 p-3 rounded-full hover:bg-purple-600">
              <Mail size={20} />
            </a>
          </div>

          <p className="text-gray-600 text-sm">
            © Copyright 2024-2026 {personalInfo.name}
          </p>
        </div>
      </footer>
    </div>
  );
}