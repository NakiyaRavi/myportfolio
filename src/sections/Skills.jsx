import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import {
  SiDotnet,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiDocker,
} from "react-icons/si";
import { FaDatabase, FaMicrosoft } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
const skills = [
  { name: "C#", icon: SiDotnet, color: "#512BD4" },
  { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
  { name: "REST API", icon: SiDotnet, color: "#512BD4" },
  { name: "Entity Framework", icon: SiDotnet, color: "#512BD4" },
  { name: "LINQ", icon: SiDotnet, color: "#512BD4" },
  { name: "JWT", icon: SiDotnet, color: "#512BD4" },

  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },

  { name: "SQL Server", icon: FaDatabase, color: "#CC2927" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },

  { name: "Visual Studio", icon: FaMicrosoft, color: "#5C2D91" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },

  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },

  { name: "Azure", icon: FaMicrosoft, color: "#0078D4" },
  { name: "Microservices", icon: SiDotnet, color: "#512BD4" },
  { name: "Clean Architecture", icon: SiDotnet, color: "#512BD4" },
];
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateX: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 15,
    },
  },
};return (
  <section
    id="skills"
    className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-sky-50"
  >
    {/* Background Blur 1 */}
    <motion.div
      animate={{
        x: [0, 80, 0],
        y: [0, -60, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-sky-400/20 blur-[130px]"
    />

    {/* Background Blur 2 */}
    <motion.div
      animate={{
        x: [0, -80, 0],
        y: [0, 60, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-[130px]"
    />

    {/* Floating Circle */}
    <motion.div
      animate={{
        y: [0, -25, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-20 right-20 w-24 h-24 rounded-full border border-sky-300/40"
    />

    <div className="relative max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 12,
          }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center
          w-24 h-24 rounded-3xl
          bg-gradient-to-r
          from-sky-500
          via-blue-600
          to-cyan-500
          shadow-[0_20px_60px_rgba(14,165,233,0.35)]
          mb-8"
        >
          <Cpu className="text-white" size={46} />
        </motion.div>

        {/* Small Title */}
        <p className="uppercase tracking-[6px] text-sky-600 font-semibold mb-3">
          PROFESSIONAL STACK
        </p>

        {/* Main Title */}
        <h2
          className="text-5xl md:text-6xl font-extrabold
          bg-gradient-to-r
          from-sky-600
          via-blue-700
          to-cyan-500
          bg-clip-text
          text-transparent"
        >
          My Skills
        </h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 140 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 h-1 rounded-full
          bg-gradient-to-r
          from-sky-500
          via-blue-500
          to-cyan-500"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto
          text-slate-600
          text-lg
          leading-9"
        >
          Passionate Full Stack Developer specializing in
          <span className="font-semibold text-sky-600">
            {" "}ASP.NET Core, React, SQL Server
          </span>
          {" "}and modern cloud technologies.
          I enjoy building scalable, secure and visually
          engaging web applications with clean architecture.
        </motion.p>

      </motion.div>

      {/* ========= Skills Grid starts here ========= */}{/* ===================== Skills Grid ===================== */}

<motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
>
  {skills.map((skill, index) => {
    const Icon = skill.icon;

    return (
      <motion.div
        key={skill.name}
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 3 + (index % 3),
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.08,
          rotateX: 12,
          rotateY: -12,
          y: -15,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        className="
        group
        relative
        h-44
        overflow-hidden
        rounded-3xl
        border
        border-white/40
        bg-white/70
        backdrop-blur-2xl
        shadow-xl
        cursor-pointer
        transition-all
        duration-500
      "
      >
        {/* Animated Gradient */}
        <div
          className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
          bg-gradient-to-br
          from-sky-500/20
          via-cyan-400/20
          to-blue-500/20
        "
        />

        {/* Top Glow */}
        <div
          className="
          absolute
          -top-20
          left-1/2
          -translate-x-1/2
          w-40
          h-40
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition
          duration-700
        "
          style={{
            background: skill.color,
          }}
        />

        {/* Glass Shine */}
        <div
          className="
          absolute
          inset-0
          -translate-x-full
          group-hover:translate-x-full
          transition-all
          duration-1000
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          skew-x-12
        "
        />

        {/* Content */}
        <div
          className="
          relative
          z-10
          h-full
          flex
          flex-col
          items-center
          justify-center
          gap-5
        "
        >
          {/* Icon Circle */}
          <motion.div
            whileHover={{
              rotate: 360,
              scale: 1.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            w-20
            h-20
            rounded-full
            flex
            items-center
            justify-center
            shadow-2xl
            border
            border-white/50
            bg-white
          "
            style={{
              boxShadow: `0 0 35px ${skill.color}55`,
            }}
          >
            <Icon
              size={42}
              style={{
                color: skill.color,
              }}
            />
          </motion.div>

          {/* Skill Name */}
          <h3
            className="
            text-base
            font-bold
            tracking-wide
            text-slate-700
            group-hover:text-sky-600
            transition
          "
          >
            {skill.name}
          </h3>
        </div>

        {/* Bottom Light */}
        <div
          className="
          absolute
          bottom-0
          left-0
          w-full
          h-1
          scale-x-0
          group-hover:scale-x-100
          transition-transform
          duration-500
          origin-left
        "
          style={{
            background: skill.color,
          }}
        />
      </motion.div>
    );
  })}
</motion.div>{/* ===================== Bottom Section ===================== */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-24 flex flex-col items-center"
>
  {/* Animated Line */}
  <div className="flex items-center gap-4">

    <motion.div
      animate={{ scaleX: [0.6, 1, 0.6] }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="w-20 h-[3px] rounded-full bg-gradient-to-r from-transparent to-sky-500"
    />

    <motion.div
      animate={{
        scale: [1, 1.5, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="w-4 h-4 rounded-full bg-sky-500 shadow-[0_0_25px_#0ea5e9]"
    />

    <motion.div
      animate={{ scaleX: [1, 0.6, 1] }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="w-20 h-[3px] rounded-full bg-gradient-to-l from-transparent to-cyan-500"
    />
  </div>

  {/* Quote */}
  <motion.h3
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    className="
    mt-8
    text-2xl
    md:text-3xl
    font-bold
    text-slate-700
    text-center
  "
  >
    🚀 Always Learning, Always Building
  </motion.h3>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    viewport={{ once: true }}
    className="
    mt-4
    max-w-2xl
    text-center
    text-slate-500
    leading-8
  "
  >
    Passionate about creating scalable, secure and modern web applications
    using ASP.NET Core, React and Cloud technologies.
    Every project is an opportunity to learn something new.
  </motion.p>

  {/* Tech Badges */}
  <div className="flex flex-wrap justify-center gap-3 mt-10">

    {["ASP.NET Core", "React", "SQL Server", "Azure", "Docker"].map((tech) => (
      <motion.span
        key={tech}
        whileHover={{
          scale: 1.08,
          y: -4,
        }}
        className="
        px-5
        py-2
        rounded-full
        bg-white
        border
        border-sky-100
        shadow-md
        text-sky-600
        font-semibold
      "
      >
        {tech}
      </motion.span>
    ))}

  </div>
</motion.div>

</div>
</section>
)

}