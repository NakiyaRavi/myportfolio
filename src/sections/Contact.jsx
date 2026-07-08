import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({
    message: "",
    type: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({
      message: "",
      type: "",
    });

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({
          message: "✅ Thank you! Your message has been sent successfully.",
          type: "success",
        });

        form.reset();
      } else {
        setStatus({
          message: "❌ Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch {
      setStatus({
        message: "❌ Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 px-5 md:px-8 bg-gradient-to-b from-white via-cream to-cream-dark"
    >
      {/* Floating Background */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
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
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -right-24 w-80 md:w-96 h-80 md:h-96 rounded-full bg-blue-300/20 blur-[120px]"
      />

      <div className="relative max-w-4xl mx-auto"><motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>

  {/* Tag */}
  <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
    Let's Connect
  </span>

  {/* Heading */}
  <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-800">
    Get In Touch
  </h2>

  <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"></div>

  <p className="mt-6 text-slate-600 text-lg leading-8 max-w-2xl mx-auto">
    I'm currently open to new opportunities. Whether you have a question,
    project idea, or just want to say hello — feel free to reach out.
  </p>

</motion.div>

{/* Contact Card */}
<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ type: "spring", stiffness: 120, damping: 15 }}
  viewport={{ once: true }}
  className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-blue-100
    bg-white/80
    backdrop-blur-xl
    shadow-xl
    p-8 md:p-10
  "
>

  {/* Glow Background */}
  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500">
    <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-300/20 blur-[120px] rounded-full"></div>
    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-300/20 blur-[120px] rounded-full"></div>
  </div>

  <form
    onSubmit={handleSubmit}
    action="https://api.web3forms.com/submit"
    method="POST"
    className="relative z-10 space-y-6"
  >
    <input
      type="hidden"
      name="access_key"
      value="893fe57a-4af3-433a-9a78-c97da16c0122"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name Input */}
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="
      w-full
      p-4
      rounded-xl
      bg-white/70
      border
      border-sky-100
      focus:outline-none
      focus:ring-2
      focus:ring-sky-400
      focus:border-sky-400
      transition-all
      text-slate-700
      placeholder:text-slate-400
    "
  />

  {/* Email Input */}
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="
      w-full
      p-4
      rounded-xl
      bg-white/70
      border
      border-sky-100
      focus:outline-none
      focus:ring-2
      focus:ring-sky-400
      focus:border-sky-400
      transition-all
      text-slate-700
      placeholder:text-slate-400
    "
  />

</div>

{/* Message */}
<textarea
  name="message"
  rows="6"
  placeholder="Your Message..."
  required
  className="
    w-full
    p-4
    rounded-xl
    bg-white/70
    border
    border-sky-100
    focus:outline-none
    focus:ring-2
    focus:ring-sky-400
    focus:border-sky-400
    transition-all
    text-slate-700
    placeholder:text-slate-400
    resize-none
  "
></textarea>{/* Submit Button */}
<div className="text-center pt-4">

  <button
    type="submit"
    disabled={isSubmitting}
    className="
      inline-flex
      items-center
      justify-center
      gap-2
      px-10
      py-3
      rounded-full
      bg-gradient-to-r
      from-sky-500
      to-blue-600
      text-white
      font-semibold
      shadow-lg
      hover:scale-105
      hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)]
      transition-all
      duration-300
      disabled:opacity-60
      disabled:cursor-not-allowed
    "
  >
    {isSubmitting ? (
      <>
        <Loader2 className="h-5 w-5 animate-spin" />
        Sending...
      </>
    ) : (
      <>
        Send Message
      </>
    )}
  </button>

</div>

{status.message && (
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`mt-6 text-center font-medium ${
      status.type === "success"
        ? "text-green-600"
        : "text-red-500"
    }`}
  >
    {status.message}
  </motion.p>
)}
  </form>

</motion.div>

{/* Bottom Decoration */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="flex justify-center mt-16"
>
  <span className="text-slate-500 text-sm tracking-wide">
    Built with React • Tailwind • Framer Motion
  </span>
</motion.div>

      </div>
    </section>
  );
}