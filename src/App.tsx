import  { useState, useEffect } from 'react';
import {
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  Globe,
  Layout,
  Send,
  User,
  MessageSquare,
} from 'lucide-react';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiFirebase,
  SiGoogle,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiReactquery,
  SiSocketdotio,
  SiDocker,
  SiGooglecloud,
  SiNetlify,
  SiVercel,
  SiGit,
  SiGithub,
  SiNpm,
  SiVite,
  SiSwagger,
  SiYaml,
  SiJson,
  SiMarkdown,
  SiApachefreemarker,
  SiAndroidstudio,
  SiFigma,
  SiPrisma,
  SiJsonwebtokens,
  SiShadcnui,
  SiApachekafka,
  SiJenkins,
  SiGithubactions,
  SiCloudinary,
  SiAxios,
  SiWebrtc
} from 'react-icons/si';
import { GiBearFace } from 'react-icons/gi';
import { DiAws } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';

const iconMapping: { [key: string]: any } = {
  "HTML": SiHtml5,
  "CSS": SiCss,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React.js": SiReact,
  "ReactJS": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Express": SiExpress,
  "REST API": SiPostman,
  "Firebase": SiFirebase,
  "Google Auth": SiGoogle,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "Firestore": SiFirebase,
  "Redis": SiRedis,
  "Redux": SiRedux,
  "Zustand": GiBearFace,
  "TanStack Query": SiReactquery,
  "React Query": SiReactquery,
  "Socket.io": SiSocketdotio,
  "Socket.IO": SiSocketdotio,
  "Docker": SiDocker,
  "Google Cloud": SiGooglecloud,
  "Netlify": SiNetlify,
  "Vercel": SiVercel,
  "Git": SiGit,
  "GitHub": SiGithub,
  "npm": SiNpm,
  "Vite": SiVite,
  "Postman": SiPostman,
  "Swagger UI": SiSwagger,
  "YAML": SiYaml,
  "JSON": SiJson,
  "Markdown": SiMarkdown,
  "FreeMarker": SiApachefreemarker,
  "VS Code": VscVscode,
  "Android Studio": SiAndroidstudio,
  "Figma": SiFigma,
  "Prisma": SiPrisma,
  "AWS": DiAws,
  "JWT": SiJsonwebtokens,
  "Shadcn UI": SiShadcnui,
  "Microservices": SiApachekafka,
  "Jenkins": SiJenkins,
  "GitHub Actions": SiGithubactions,
  "Cloudinary": SiCloudinary,
  "Axios": SiAxios,
  "WebRTC": SiWebrtc
};

const getIconColor = (color: string, theme: 'light' | 'dark') => {
  if (!color) return '#a855f7';
  const c = color.toLowerCase();
  if (c === '#ffffff' || c === 'white') {
    return theme === 'dark' ? '#ffffff' : '#09090b';
  }
  if (c === '#000000' || c === 'black' || c === '#010101' || c === '#181717') {
    return theme === 'dark' ? '#ffffff' : '#09090b';
  }
  return color;
};
// --- DATA FROM CV ---
const personalInfo = {
  name: "Ngo Quang Phuc",
  shortName: "Phuc.",
  role: "Fullstack Developer",
  tagline: "I build robust backend systems, scalable UIs, and high-performance end-to-end applications.",
  email: "ngophuc2911@gmail.com",
  phone: "0962447792",
  github: "https://github.com/ngophuc29",
  linkedin: "https://www.linkedin.com/in/phuc-ngo-2685493a5/?trk=opento_sprofile_topcard", // Add your linkedin
  about: "Fullstack Developer with hands-on experience in React.js, Next.js, Node.js, and Express.js. Focused on building robust backend systems, scalable database models, and high-performance, SEO-friendly frontend interfaces. Experienced in API integrations, WebSockets, containerization (Docker), and automated CI/CD pipelines. Passionate about designing end-to-end system architectures, optimizing application performance, and contributing to product-focused development teams.",
  avatar: "/avatar1.jpg" // Use avatar from public folder
};

const skills = [
  {
    category: "Web & Programming",
    items: [
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", color: "#888888" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF", color: "#0055FF" },
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/white", color: "#888888" },
      { name: "REST API", icon: "https://cdn.simpleicons.org/postman/FF6C37", color: "#FF6C37" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
      { name: "Google Auth", icon: "https://cdn.simpleicons.org/google/4285F4", color: "#4285F4" },
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "#47A248" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", color: "#4169E1" },
      { name: "Firestore", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D", color: "#DC382D" },
    ]
  },
  {
    category: "State & Events",
    items: [
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC", color: "#764ABC" },
      { name: "Zustand", icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.png", color: "#4c3e3d" },
      { name: "TanStack Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154", color: "#FF4154" },
      { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio/white", color: "#010101" },
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4", color: "#4285F4" },
      { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7", color: "#00C7B7" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white", color: "#888888" },
    ]
  },
  {
    category: "Tooling & Observability",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", color: "#181717" },
      { name: "npm", icon: "https://cdn.simpleicons.org/npm/CB3837", color: "#CB3837" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF", color: "#646CFF" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", color: "#FF6C37" },
      { name: "Swagger UI", icon: "https://cdn.simpleicons.org/swagger/85EA2D", color: "#85EA2D" },
    ]
  },
  {
    category: "Config & Templating",
    items: [
      { name: "YAML", icon: "https://cdn.simpleicons.org/yaml/white", color: "#cb171e" },
      { name: "JSON", icon: "https://cdn.simpleicons.org/json/white", color: "#292929" },
      { name: "Markdown", icon: "https://cdn.simpleicons.org/markdown/white", color: "#000000" },
      { name: "FreeMarker", icon: "https://cdn.simpleicons.org/apache/D22128", color: "#D22128" },
    ]
  },
  {
    category: "IDEs & Design",
    items: [
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC", color: "#007ACC" },
      { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84", color: "#3DDC84" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", color: "#F24E1E" },
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
    description: "An all-in-one travel booking platform supporting Flights, Bus Trips, and Tour Packages. Built as a fullstack-oriented solution integration with modular dashboard components and scalable server data mappings.",
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
    description: "A real-time messaging application inspired by Zalo. Built with a full-stack architecture featuring a custom Node.js/Express server, MongoDB via Prisma ORM, Socket.IO for instant chat synchronization, and WebRTC for peer-to-peer audio/video streaming.",
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
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
      { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" }
    ],
    github: "https://github.com/ngophuc29/newJourney",
    live: "https://new-journey-j9q5.vercel.app/"
  },
  {
    id: 3,
    title: "Ecommerce microservices (Web)",
    type: "Personal Project",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800", // Placeholder for e-commerce
    description: "A highly scalable e-commerce platform designed on a Node.js microservices architecture. Employs Docker for service containment, MoMo payment gateway integrations, Redis database caching, Cloudinary media storage, and fully automated Jenkins/GitHub Actions CI/CD pipelines.",
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
    github: "https://github.com/ngophuc29/KT-TKPM_PROJECT", // Điền link mã nguồn
    overview: "https://kt-tkpm-project.vercel.app", // Điền link ảnh tổng quát
    live: "https://kt-tkpm-project.vercel.app" // Điền link demo
  }
];

// --- COMPONENTS ---

const SectionHeading = ({ title, highlight }: any) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-600/50"></div>
    <h2 className="text-3xl md:text-4xl font-bold text-themeTextTitle">
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
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark'; // default theme is dark
  });
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Vui lòng điền đầy đủ các thông tin.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Read key from import.meta.env
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "8a6af768-3714-48d6-b88f-84ccf3b4397a";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Contact Form Submission from ${formData.name}`,
          from_name: "Portfolio Contact Form"
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: 'Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Có lỗi xảy ra khi gửi tin nhắn.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng của bạn.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollTo = (id:any) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-themeBg text-themeText font-sans selection:bg-purple-500/30">

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'nav-glass border-b border-themeBorder py-4' : 'bg-transparent py-6'}`}>
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
                className="hover:text-purple-400 transition-colors tracking-widest text-themeText hover:text-purple-400"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full border border-themeBorder hover:border-purple-500 transition-colors text-themeTextMuted hover:text-themeTextTitle"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/CV_NgoQuangPhuc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all group"
            >
              Resume <Download size={16} className="group-hover:animate-bounce" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-themeText" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full nav-glass border-b border-themeBorder py-4 px-6 flex flex-col gap-4 shadow-xl">
            {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left py-2 text-themeText hover:text-purple-400 tracking-widest"
              >
                {item}
              </button>
            ))}
            <div className="flex items-center justify-between gap-4 mt-2">
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2.5 rounded border border-themeBorder text-themeTextMuted hover:text-themeTextTitle w-1/2 justify-center"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a href="/CV_NgoQuangPhuc.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-purple-500 text-purple-400 w-1/2">
                Resume <Download size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">
          <div className="grid-overlay" />

          <div className="w-full md:w-1/2 z-10 flex flex-col items-start gap-4">
            <h3 className="text-xl md:text-2xl font-medium text-themeTextTitle flex items-center gap-2">
              Hi 👋 My name is
            </h3>
            <div className="flex items-center gap-4 text-sm text-themeTextMuted">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-themeTextTitle">{personalInfo.email}</a>
              <span className="text-themeTextMuted/60">•</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-themeTextTitle">{personalInfo.phone}</a>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              {personalInfo.shortName}
            </h1>
            <p className="text-xl md:text-2xl mt-2 font-medium">
              I'm a <span className="text-themeTextTitle">{personalInfo.role}.</span>
            </p>
            <p className="text-lg text-themeTextMuted max-w-md">
              {personalInfo.tagline}
            </p>

            <div className="flex gap-4 mt-8">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-themeTextMuted hover:text-themeTextTitle hover:scale-110 transition-all">
                <FaGithub size={28} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-themeTextMuted hover:text-themeTextTitle hover:scale-110 transition-all">
                <FaLinkedin size={28} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-themeTextMuted hover:text-themeTextTitle hover:scale-110 transition-all">
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
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-purple-900/40 to-themeCard border border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center justify-center overflow-hidden z-10">
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
        <section id="about" className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="grid-overlay" />
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
              <h3 className="text-3xl font-bold text-themeTextTitle mb-4 flex items-center gap-2">
                Hey there! 👋
              </h3>
              <div className="space-y-4 text-themeTextMuted text-lg leading-relaxed">
                <p>
                  I'm {personalInfo.name}. I build things on the internet — with a strong focus on performance, interactivity, and getting the details right.
                </p>
                <p>
                  {personalInfo.about}
                </p>
                <p>
                  I enjoy working on systems that aren't static. Real-time updates, complex UIs, and applications with lots of moving parts. I naturally go deeper into problems — optimizing, refining, and chasing that "this feels right" moment.
                </p>
                <p className="text-themeTextTitle">
                  If you're building something interesting, challenging, or technically demanding... I'd love to be part of it 😄
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto relative">
          <div className="grid-overlay" />
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <SectionHeading title="Tech" highlight="Stack" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start">
                <h4 className="text-xl font-bold text-themeTextTitle mb-6 flex items-center gap-2">
                  {skillGroup.category} <span className="text-purple-600 font-mono">(*)</span>
                </h4>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 w-full max-w-lg">
                  {skillGroup.items.map((skill: any, sIdx) => {
                    const IconComponent = iconMapping[skill.name];
                    return (
                      <div
                        key={sIdx}
                        className="skill-card group flex flex-col items-center justify-center p-3 h-24 rounded-2xl bg-themeCard border border-themeBorder transition-all duration-300 cursor-default"
                        style={{
                          '--brand-color': skill.color || '#a855f7',
                          '--brand-color-glow': (skill.color || '#a855f7') + '40'
                        } as React.CSSProperties}
                      >
                        {IconComponent ? (
                          <IconComponent 
                            size={32} 
                            className="mb-3 transition-all transform group-hover:scale-110"
                            style={{ color: getIconColor(skill.color, theme) }}
                          />
                        ) : (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8 mb-3 opacity-90 group-hover:opacity-100 transition-all transform group-hover:scale-110 object-contain"
                          />
                        )}
                        <span className="text-[10px] text-themeTextMuted group-hover:text-themeTextTitle font-medium text-center leading-tight">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="grid-overlay" />
          <SectionHeading title="My" highlight="Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-themeCard rounded-xl overflow-hidden border border-themeBorder hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-300 group flex flex-col"
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
                      <h3 className="text-xl font-bold text-themeTextTitle group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-themeTextMuted mt-1 block">{project.type}</span>
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

                  <p className="text-sm text-themeTextMuted mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    {/* Links */}
                    <div className="flex justify-end gap-3 mb-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-themeTextMuted hover:text-themeTextTitle transition-colors" title="Xem mã nguồn">
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.overview && (
                        <a href={project.overview} target="_blank" rel="noreferrer" className="text-themeTextMuted hover:text-themeTextTitle transition-colors" title="Xem ảnh tổng quát dự án">
                          <Layout size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-themeTextMuted hover:text-themeTextTitle transition-colors" title="Link demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2.5 pt-4 border-t border-themeBorder">
                      {project.tech.map((t, i) => {
                        const IconComponent = iconMapping[t.name];
                        const skillColor = skills.flatMap(g => g.items).find(item => item.name === t.name)?.color || '#a855f7';
                        return IconComponent ? (
                          <IconComponent
                            key={i}
                            size={20}
                            title={t.name}
                            className="opacity-80 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                            style={{ color: getIconColor(skillColor, theme) }}
                          />
                        ) : (
                          <img
                            key={i}
                            src={t.icon}
                            alt={t.name}
                            title={t.name}
                            className="w-5 h-5 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="grid-overlay" />
          <SectionHeading title="Contact" highlight="" />

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
              Let's collaborate!
            </h3>
            <p className="text-themeTextMuted">
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
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-themeCard border border-themeBorder rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                  <Mail size={16} className="text-themeText" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-themeCard border border-themeBorder rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                  <FaLinkedin size={16} className="text-themeText" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-themeCard border border-themeBorder rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                  <FaGithub size={16} className="text-themeText" />
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-themeCard border border-themeBorder rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                  <Globe size={16} className="text-themeText" />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 card-glass p-8 rounded-3xl border border-themeBorder shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
              {/* Decorative background glows inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <form className="space-y-6 relative z-10" onSubmit={handleFormSubmit}>
                {status.message && (
                  <div className={`p-4 rounded-xl text-sm font-medium transition-all duration-300 animate-fadeIn ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {status.message}
                  </div>
                )}
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-themeTextMuted mb-2">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-themeTextMuted/70">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Enter your Name"
                      className="w-full bg-themeInput border border-themeBorder rounded-xl pl-12 pr-4 py-3.5 text-themeTextTitle placeholder:text-themeTextMuted/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-themeTextMuted mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-themeTextMuted/70">
                      <Mail size={18} />
                    </div>
                    <input
                      type="type"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="example@gmail.com"
                      className="w-full bg-themeInput border border-themeBorder rounded-xl pl-12 pr-4 py-3.5 text-themeTextTitle placeholder:text-themeTextMuted/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-themeTextMuted mb-2">Message</label>
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 pointer-events-none text-themeTextMuted/70">
                      <MessageSquare size={18} />
                    </div>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Enter your Message"
                      className="w-full bg-themeInput border border-themeBorder rounded-xl pl-12 pr-4 py-3.5 text-themeTextTitle placeholder:text-themeTextMuted/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl py-3.5 font-bold shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.55)] transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-themeBg border-t border-themeBorder/50 pt-16 pb-8 relative overflow-hidden">
        {/* Wavy background decoration mimicking screenshot */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-themeBg to-themeBg pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
          <div className="mb-6 flex flex-col items-center">
            <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-600 mb-2">
              P
            </div>
            <p className="text-themeText font-medium">NgoQuangPhuc | Portfolio.</p>
          </div>

          <div className="flex gap-6 mb-10">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-themeTextMuted hover:text-themeTextTitle transition-colors bg-themeCard p-3 rounded-full hover:bg-purple-600">
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-themeTextMuted hover:text-themeTextTitle transition-colors bg-themeCard p-3 rounded-full hover:bg-purple-600">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="text-themeTextMuted hover:text-themeTextTitle transition-colors bg-themeCard p-3 rounded-full hover:bg-purple-600">
              <Mail size={20} />
            </a>
          </div>

          <p className="text-themeTextMuted/50 text-sm">
            © Copyright 2024-2026 {personalInfo.name}
          </p>
        </div>
      </footer>
    </div>
  );
}