import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const text = '404';
const chars = text.split('');

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: { opacity: 0, y: 40 },
};
export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-cream text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg"
      >
        <motion.h1
          className="text-8xl sm:text-9xl font-bold text-dusty-dark flex justify-center overflow-hidden"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {chars.map((char, index) => (
            <motion.span key={index} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-dark mt-4 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="text-dark/80 text-base md:text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-dusty hover:bg-dusty-dark text-cream font-semibold py-3 px-8 rounded-full transition-all hover:shadow-[0_0_20px_rgba(123,150,184,0.4)]"
          >
            <Home size={20} />
            <span>Go Back Home</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}