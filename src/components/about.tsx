"use client";
import { motion } from "framer-motion";
import {
  Wheat,
  Milk,
  Baby,
  Heart,
  Sparkles,
  Droplets,
  Apple,
  Cookie,
  Egg,
  Soup,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-screen max-w-none py-24 md:py-32 bg-linear-to-b from-[#eaf7ff] via-[#f4fbff] to-white overflow-hidden isolate"
    >
      {/* Soft background glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),transparent_75%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* --- DECORATIVE ICON SET (More icons, no repeat animation) --- */}

      {/* TOP RIGHT */}
      <motion.div
        className="absolute top-16 right-10 text-[#c9dff8]"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 0.9, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Wheat size={44} strokeWidth={1.3} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-24 text-[#ffe6e6]"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 0.9, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Milk size={38} strokeWidth={1.3} />
      </motion.div>

      {/* TOP LEFT */}
      <motion.div
        className="absolute top-20 left-12 text-[#fde8d1]"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Baby size={42} strokeWidth={1.4} />
      </motion.div>

      <motion.div
        className="absolute top-44 left-28 text-[#e9dfff]"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Apple size={38} strokeWidth={1.4} />
      </motion.div>

      {/* SIDES */}
      <motion.div
        className="absolute top-1/2 right-4 text-[#fff3d6]"
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Heart size={36} strokeWidth={1.4} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-4 text-[#e7f2ff]"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Cookie size={38} strokeWidth={1.3} />
      </motion.div>

      {/* BOTTOM LEFT */}
      <motion.div
        className="absolute bottom-20 left-16 text-[#d8ecff]"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Droplets size={40} strokeWidth={1.3} />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-32 text-[#ffe8cc]"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Egg size={36} strokeWidth={1.3} />
      </motion.div>

      {/* BOTTOM RIGHT */}
      <motion.div
        className="absolute bottom-20 right-20 text-[#fff6da]"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Soup size={40} strokeWidth={1.3} />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-1/3 text-[#fcefdc]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Sparkles size={40} strokeWidth={1.3} />
      </motion.div>

      {/* MAIN CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        dir="rtl"
      >
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-right space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a2b47] leading-tight">
            من نحن
          </h2>

          <p className="text-lg md:text-xl text-[#1f2d3d] leading-relaxed text-justify">
            شركة الهبارة للصناعات الغذائية هي شركة ليبية رائدة متخصصة في تصنيع
            منتجات غذائية للأطفال والرضع وفق أعلى معايير الجودة والسلامة
            الغذائية. نحرص على توفير أغذية صحية تدعم النمو السليم للأطفال مع
            التركيز على الابتكار وتطوير منتجات تلائم احتياجات الأسرة الليبية.
          </p>

          <p className="text-lg md:text-xl text-[#1f2d3d] leading-relaxed text-justify">
            نستخدم مواد خام عالية الجودة وتقنيات تصنيع متقدمة لضمان منتجات آمنة
            وغنية بالعناصر الغذائية الأساسية. رؤيتنا هي تعزيز قطاع أغذية الأطفال
            في ليبيا وتقديم منتجات موثوقة تكسب ثقة الأمهات وتساهم في صحة ونمو
            أبنائهن.
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-full h-[380px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl bg-white/50 backdrop-blur">
            <img
              src="/images/about.png"
              alt="About"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-5 left-5 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-md text-sm font-bold text-[#1a2b47]">
              جودة مضمونة
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
