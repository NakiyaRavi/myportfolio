import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const skills = [
  "C#",
  "ASP.NET Core",
  "RESTful Web API",
  "Entity Framework Core",
  "LINQ",
  "JWT",
  "React.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "SQL Server",
  "Mongodb",
  "Git",
  "GitHub",
  "Visual Studio",
  "VS Code",
  "Postman",
  "Vite",
  "Docker",
  "Azure",
  "Microservices",
  "Clean Architecture",
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
    y: 40,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 15,
    },
  },
};

export default function Skills() {

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 md:py-28 px-5 md:px-8 bg-gradient-to-b from-cream via-white to-cream-dark"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-72 md:w-96 h-72 md:h-96 rounded-full bg-blue-300/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -right-24 w-72 md:w-96 h-72 md:h-96 rounded-full bg-sky-300/20 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 220,
      damping: 12,
    }}
    viewport={{ once: true }}
    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 shadow-xl mb-6"
  >
    <Cpu className="text-white" size={36} />
  </motion.div>

  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
    My Skills
  </h2>

  <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500"></div>

  <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-base md:text-lg leading-8">
    I build modern, scalable and high-performance web applications using
    the latest Microsoft technologies and modern frontend frameworks.
  </p>
</motion.div>

{/* Skills Grid */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
>
  
  {skills.map((skill) => (
    <motion.div
      key={skill}
      variants={item}
      whileHover={{
        y: -10,
        scale: 1.08,
        rotateX: 8,
        rotateY: -8,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 18,
      }}
      className="
    group
    relative
    overflow-hidden
    rounded-2xl
    border
    border-blue-100/80
    bg-white/80
    backdrop-blur-xl
    px-5
    py-5
    text-center
    shadow-md
    hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]
    transition-all
    duration-500
    cursor-pointer
  "
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Glow Effect */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Skill Name */}
      <span className="relative z-10 text-sm md:text-base font-semibold text-slate-800 group-hover:text-white transition-colors duration-300">
        {skill}
      </span>
    </motion.div>
  ))}
</motion.div>

{/* Bottom Decoration */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  viewport={{ once: true }}
  className="flex justify-center mt-20"
>
  <div className="flex items-center gap-3">
    <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-sky-400"></span>

    <motion.div
      animate={{
        scale: [1, 1.25, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="w-3 h-3 rounded-full bg-sky-500"
    />

    <span className="text-slate-500 font-medium">
      Always Learning New Technologies
    </span>

    <motion.div
      animate={{
        scale: [1, 1.25, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        delay: 0.5,
      }}
      className="w-3 h-3 rounded-full bg-cyan-500"
    />

    <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-cyan-400"></span>
  </div>
</motion.div>

</div>
</section>
  );
}