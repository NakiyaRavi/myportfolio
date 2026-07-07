import { motion } from "framer-motion";
import { Cloud, Rocket, Target } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

const techStack = {
  Backend: [
    "C#",
    "ASP.NET Core",
    "ASP.NET MVC",
    "RESTful Web API",
    "Entity Framework Core",
    "LINQ",
    "JWT Authentication",
    "Role-Based Authorization",
  ],

  Frontend: [
    "React.js",
    "AngularJS",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ],

  Database: [
    "SQL Server",
    "NoSQL",
  ],

  Tools: [
    "Git",
    "GitHub",
    "Visual Studio",
    "VS Code",
    "Postman",
    "Vite",
  ],
};

const currentlyLearning = [
  "Clean Architecture",
  "Microservices",
  "Docker",
  "Azure",
  "Advanced ASP.NET Core",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-28 px-5 md:px-8 bg-gradient-to-b from-white via-cream to-cream-dark"
    >
      {/* Floating Background */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-80 md:w-96 h-80 md:h-96 rounded-full bg-sky-300/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -right-24 w-80 md:w-96 h-80 md:h-96 rounded-full bg-blue-300/20 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto"><motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>

  {/* Section Heading */}

  <motion.div
    variants={item}
    className="text-center mb-20"
  >

    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 shadow-xl mb-6">

      <Rocket size={36} className="text-white" />

    </div>

    <span className="text-sky-600 font-semibold tracking-widest uppercase">
      Know Me Better
    </span>

    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-800">
      About Me
    </h2>

    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"></div>

  </motion.div>

  {/* About Card */}

  <motion.div
    variants={item}
    whileHover={{
      y: -8,
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
      p-8
      md:p-10
      shadow-xl
      transition-all
      duration-500
    "
  >

    {/* Glow */}

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

      <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-300/20 rounded-full blur-[120px]"></div>

      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-300/20 rounded-full blur-[120px]"></div>

    </div>

    <div className="relative z-10">

      <h3 className="text-3xl font-bold text-slate-800 mb-6">
        Hi, I'm Ravi 👋
      </h3>

      <p className="text-slate-600 leading-8 text-lg">
        I'm a passionate <span className="font-semibold text-sky-600">.NET Full Stack Developer</span>
        specializing in building secure, scalable and high-performance web applications using
        <span className="font-semibold text-sky-600"> ASP.NET Core</span>,
        <span className="font-semibold text-sky-600"> C#</span>,
        <span className="font-semibold text-sky-600"> React.js</span> and
        <span className="font-semibold text-sky-600"> SQL Server</span>.
      </p>

      <p className="mt-6 text-slate-600 leading-8">
        I enjoy solving real-world problems, writing clean and maintainable code,
        learning modern technologies and creating user-friendly applications with
        beautiful UI and excellent performance.
      </p>

    </div>

  </motion.div>

  {/* Tech Stack Title */}

  <motion.div
    variants={item}
    className="mt-20 mb-12 text-center"
  >

    <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 text-slate-800">

      <Rocket className="text-sky-500" />

      Tech Stack

    </h2>

    <p className="text-slate-500 mt-4">
      Technologies I use to build modern applications.
    </p>

  </motion.div>{/* Tech Stack Grid */}

<motion.div
  variants={container}
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
>

  {Object.entries(techStack).map(([title, items]) => (

    <motion.div
      key={title}
      variants={item}
      whileHover={{
        y: -10,
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
        p-7
        shadow-lg
        hover:shadow-[0_25px_60px_rgba(59,130,246,.20)]
        transition-all
        duration-500
      "
    >

      {/* Background Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-sky-300/25 blur-[100px]"></div>

        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-blue-300/20 blur-[100px]"></div>

      </div>

      <div className="relative z-10">

        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">

          {items.map((skill) => (

            <motion.span
              key={skill}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: .95,
              }}
              className="
                px-4
                py-2
                rounded-full
                bg-gradient-to-r
                from-sky-100
                to-blue-100
                border
                border-sky-200
                text-sky-700
                text-sm
                font-semibold
                transition
                duration-300
                hover:from-sky-500
                hover:to-blue-600
                hover:text-white
                cursor-default
              "
            >
              {skill}
            </motion.span>

          ))}

        </div>

      </div>

    </motion.div>

  ))}

</motion.div>{/* Bottom Cards */}

<motion.div
  variants={container}
  className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
>

  {/* Currently Learning */}

  <motion.div
    variants={item}
    whileHover={{
      y: -8,
      scale: 1.02,
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
      p-8
      shadow-lg
      hover:shadow-[0_25px_60px_rgba(59,130,246,.20)]
      transition-all
      duration-500
    "
  >

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-sky-300/20 blur-[100px]"></div>
    </div>

    <div className="relative z-10">

      <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6">
        <Cloud className="text-sky-500" />
        Currently Learning
      </h3>

      <div className="flex flex-wrap gap-3">

        {currentlyLearning.map((item) => (

          <span
            key={item}
            className="
              px-4
              py-2
              rounded-full
              bg-gradient-to-r
              from-sky-100
              to-blue-100
              border
              border-sky-200
              text-sky-700
              text-sm
              font-semibold
            "
          >
            {item}
          </span>

        ))}

      </div>

    </div>

  </motion.div>

  {/* Goal */}

  <motion.div
    variants={item}
    whileHover={{
      y: -8,
      scale: 1.02,
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
      p-8
      shadow-lg
      hover:shadow-[0_25px_60px_rgba(59,130,246,.20)]
      transition-all
      duration-500
    "
  >

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-blue-300/20 blur-[100px]"></div>
    </div>

    <div className="relative z-10">

      <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6">
        <Target className="text-sky-500" />
        Career Goal
      </h3>

      <p className="text-slate-600 leading-8">
        My goal is to become a highly skilled Full Stack .NET Developer by
        building secure, scalable, and user-friendly applications while
        continuously learning modern technologies, cloud platforms, and
        software architecture. I aim to contribute to impactful products
        and grow as a professional software engineer.
      </p>

    </div>

  </motion.div>

</motion.div>

{/* Bottom Decoration */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="flex justify-center mt-20"
>

  <div className="flex items-center gap-3">

    <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-sky-400"></span>

    <motion.div
      animate={{
        scale: [1, 1.3, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="w-3 h-3 rounded-full bg-sky-500"
    />

    <span className="text-slate-500 font-medium">
      Passionate About Building Great Software
    </span>

    <motion.div
      animate={{
        scale: [1, 1.3, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        delay: .5,
      }}
      className="w-3 h-3 rounded-full bg-blue-500"
    />

    <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-400"></span>

  </div>

</motion.div>

</motion.div>

</div>

</section>
  );
}