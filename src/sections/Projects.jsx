import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio showcasing my skills, projects, resume, and contact information with smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/RaviNakiya/portfolio",
    live: "https://nakiyaravi.github.io/myportfolio/",
  },
  {
    id: 2,
    title: "Employee Management System",
    description:
      "A full-stack employee management system with role-based authentication, employee records, attendance, leave management and dashboard.",
    tech: [
      "ASP.NET Core",
      "React",
      "SQL Server",
      "JWT",
      "Entity Framework Core",
    ],
    github: "https://github.com/RaviNakiya/employee-management-system",
    live: "",
  },
  {
    id: 3,
    title: "Authentication System",
    description:
      "JWT authentication, refresh token, role-based authorization, forgot password and email verification.",
    tech: ["ASP.NET Core", "React", "JWT", "SQL Server"],
    github: "https://github.com/RaviNakiya/auth-system",
    live: "",
  },
  {
    id: 4,
    title: "Task Management",
    description:
      "Manage projects and daily tasks with role-based permissions and beautiful dashboard.",
    tech: ["React", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/RaviNakiya/task-manager",
    live: "",
  },
  {
    id: 5,
    title: "Hospital Management",
    description:
      "Patient registration, appointments, billing, doctors and reports management system.",
    tech: ["ASP.NET Core", "SQL Server", "React"],
    github: "https://github.com/RaviNakiya/hospital",
    live: "",
  },
  {
    id: 6,
    title: "Inventory Management",
    description:
      "Inventory tracking, suppliers, purchase orders, sales reports and stock management.",
    tech: ["React", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/RaviNakiya/inventory",
    live: "",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 px-5 md:px-8 bg-gradient-to-b from-white via-cream to-cream-dark"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-300/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-300/20 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto">{/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
    My Recent Work
  </span>

  <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-800">
    Featured Projects
  </h2>

  <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"></div>

  <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg leading-8">
    A collection of projects showcasing my experience in ASP.NET Core,
    React, SQL Server and modern web development.
  </p>
</motion.div>

{/* Projects Grid */}

<motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
>
  {projectsData.map((project, index) => (

    <motion.div
      key={project.id}
      variants={item}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-blue-100
      bg-white/80
      backdrop-blur-xl
      shadow-lg
      hover:shadow-[0_25px_60px_rgba(59,130,246,0.20)]
      transition-all
      duration-500
      "
    >      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-sky-300/30 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-blue-300/20 blur-[120px]" />
      </div>

      <div className="relative z-10 p-7 h-full flex flex-col">

        {/* Project Number */}
        <span className="text-sky-600 font-bold text-sm tracking-widest uppercase">
          Project {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-slate-600 leading-7 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1.5
                rounded-full
                bg-gradient-to-r
                from-sky-100
                to-blue-100
                text-sky-700
                text-xs
                font-semibold
                border
                border-sky-200
                transition
                group-hover:scale-105
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons Start */}
        <div className="mt-8 flex gap-4">          {/* GitHub Button */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-xl
                bg-slate-900
                text-white
                hover:bg-sky-600
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          )}

          {/* Live Demo Button */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-xl
                bg-gradient-to-r
                from-sky-500
                to-blue-600
                text-white
                hover:shadow-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

{/* Bottom Decoration */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  viewport={{ once: true }}
  className="flex justify-center mt-20"
>
  <div className="flex items-center gap-3">
    <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-sky-400"></span>

    <motion.div
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="w-3 h-3 rounded-full bg-sky-500"
    />

    <span className="text-slate-500 font-medium">
      More exciting projects coming soon...
    </span>

    <motion.div
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
      className="w-3 h-3 rounded-full bg-blue-500"
    />

    <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-400"></span>
  </div>
</motion.div>

      </div>
    </section>
  );
}