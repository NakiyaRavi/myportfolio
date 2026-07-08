import { motion } from "framer-motion";
import { useState } from "react";
import {
  Loader2, Send, ArrowRight
} from "lucide-react";

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
          message: "✅ Message sent successfully!",
          type: "success",
        });

        form.reset();
      } else {
        setStatus({
          message: "❌ Failed to send message.",
          type: "error",
        });
      }
    } catch {
      setStatus({
        message: "❌ Something went wrong.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };return (
  <section
    id="contact"
    className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-sky-50"
  >
    {/* Background Blobs */}
    <motion.div
      animate={{
        x: [0, 40, 0],
        y: [0, -40, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
      }}
      className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-300/20 blur-[120px]"
    />

    <motion.div
      animate={{
        x: [0, -40, 0],
        y: [0, 40, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
      }}
      className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-300/20 blur-[120px]"
    />

    <div className="relative max-w-7xl mx-auto">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >

        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">

          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

          Available For Work

        </span>

        <h2 className="mt-6 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">

          Get In Touch

        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg leading-8">

          I'm available for freelance work, internships and full-time opportunities.
          Let's build something amazing together.

        </p>

      </motion.div>

      {/* Layout */}

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="rounded-[32px] bg-white/80 backdrop-blur-2xl border border-sky-100 shadow-2xl p-8"
        >
          <form
  onSubmit={handleSubmit}
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
>
  <input
    type="hidden"
    name="access_key"
    value="893fe57a-4af3-433a-9a78-c97da16c0122"
  />

  {/* Name */}

  <div className="relative">

    <input
      type="text"
      name="name"
      required
      placeholder="Your Name"
      className="
      w-full
      rounded-2xl
      border
      border-sky-100
      bg-white/70
      px-5
      py-4
      outline-none
      transition
      focus:border-sky-500
      focus:ring-4
      focus:ring-sky-100
    "
    />

  </div>

  {/* Email */}

  <div className="relative">

    <input
      type="email"
      name="email"
      required
      placeholder="Email Address"
      className="
      w-full
      rounded-2xl
      border
      border-sky-100
      bg-white/70
      px-5
      py-4
      outline-none
      transition
      focus:border-sky-500
      focus:ring-4
      focus:ring-sky-100
    "
    />

  </div>

  {/* Phone */}

  <div className="relative">

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number (Optional)"
      className="
      w-full
      rounded-2xl
      border
      border-sky-100
      bg-white/70
      px-5
      py-4
      outline-none
      transition
      focus:border-sky-500
      focus:ring-4
      focus:ring-sky-100
    "
    />

  </div>

  {/* Subject */}

  <div className="relative">

    <input
      type="text"
      name="subject"
      placeholder="Subject"
      className="
      w-full
      rounded-2xl
      border
      border-sky-100
      bg-white/70
      px-5
      py-4
      outline-none
      transition
      focus:border-sky-500
      focus:ring-4
      focus:ring-sky-100
    "
    />

  </div>

  {/* Message */}

  <textarea
    name="message"
    rows="6"
    required
    placeholder="Write your message..."
    className="
    w-full
    rounded-2xl
    border
    border-sky-100
    bg-white/70
    p-5
    resize-none
    outline-none
    transition
    focus:border-sky-500
    focus:ring-4
    focus:ring-sky-100
  "
  />

  {/* Button */}

  <motion.button
    whileHover={{
      scale: 1.03,
    }}
    whileTap={{
      scale: 0.97,
    }}
    disabled={isSubmitting}
    type="submit"
    className="
    w-full
    rounded-2xl
    bg-gradient-to-r
    from-sky-500
    via-blue-600
    to-cyan-500
    py-4
    text-lg
    font-bold
    text-white
    shadow-xl
    flex
    items-center
    justify-center
    gap-3
    transition-all
    disabled:opacity-70
  "
  >

    {isSubmitting ? (
      <>
        <Loader2
          className="animate-spin"
          size={20}
        />
        Sending...
      </>
    ) : (
      <>
        <Send size={20} />
        Send Message
        <ArrowRight size={18} />
      </>
    )}

  </motion.button>

  {/* Status */}

  {status.message && (

    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`
        rounded-2xl
        p-4
        text-center
        font-semibold
        ${
          status.type === "success"
            ? "bg-green-100 text-green-700 border border-green-300"
            : "bg-red-100 text-red-700 border border-red-300"
        }
      `}
    >
      {status.message}
    </motion.div>

  )}

</form>
        </motion.div>

      </div>

    </div>
    {/* END max-w-7xl */}

  </section>
);
}