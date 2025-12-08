import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#071423] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[#071423]" />

      {/* Super bright blue radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,170,255,0.55),transparent_75%)]" />

      {/* Soft overhead light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(60,120,255,0.15)_0%,#071423_100%)]" />

      {/* --- FLOATING PARTICLES --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-blue-200 shadow-2xl shadow-blue-200 rounded-full blur-[1px]"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: -50,
              x: (Math.random() - 0.5) * 120,
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        className="relative z-20 container mx-auto px-6 py-24 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.img
          src="/meta/logo.png"
          alt=""
          className="w-[180px] md:w-[220px] mb-6 opacity-95"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-white text-2xl md:text-4xl font-black drop-shadow-xl leading-snug"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          شركة الهبارة للصناعات الغذائية
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          نحن ملتزمون بتقديم منتجات غذائية عالية الجودة تلبي توقعات عملائنا
          <br />
        </motion.p>

        <a
          href="#about"
          className="mt-8 inline-block bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          اكتشف المزيد
        </a>
      </motion.div>
      {/* Powerful lighter bottom glow */}
      <div className="absolute bottom-0 w-full h-[220px] bg-linear-to-t from-blue-300/40 to-transparent blur-3xl" />
    </section>
  );
};

export default Hero;
