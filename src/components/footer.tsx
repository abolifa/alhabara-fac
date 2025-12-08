"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0d1520] text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,150,255,0.10),transparent_70%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[conic-gradient(from_0deg,rgba(0,120,255,0.25),transparent)] blur-[160px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-5"
        >
          <img
            src="/meta/logo.png"
            alt="Alhabara Logo"
            className="w-32 opacity-90"
          />
          <h3 className="text-2xl font-extrabold bg-linear-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            شركة الهبارة للصناعات الغذائية
          </h3>
          <p className="text-white/70 leading-relaxed text-lg">
            نصنع منتجات غذائية عالية الجودة تلبي احتياجات الأسرة الليبية، مع
            التزام بمعايير السلامة والجودة والإنتاج الحديث.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="space-y-4"
        >
          <h4 className="text-xl font-bold mb-4">الروابط</h4>
          <ul className="space-y-3 text-white/70 text-lg">
            <li className="hover:text-blue-300 transition cursor-pointer">
              <a href="#hero">الرئيسية</a>
            </li>
            <li className="hover:text-blue-300 transition cursor-pointer">
              <a href="#about">من نحن</a>
            </li>
            <li className="hover:text-blue-300 transition cursor-pointer">
              <a href="#brands">علاماتنا</a>
            </li>
            <li className="hover:text-blue-300 transition cursor-pointer">
              <a href="#products">منتجاتنا</a>
            </li>
            <li className="hover:text-blue-300 transition cursor-pointer">
              <a href="#contact">تواصل معنا</a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-5"
        >
          <h4 className="text-xl font-bold mb-4">معلومات التواصل</h4>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-blue-300" />
            <a
              href="tel:+218912131319"
              dir="ltr"
              className="text-white/70 hover:text-blue-300 transition"
            >
              +218 91 213 1319
            </a>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-blue-300" />
            <a
              href="mailto:info@alhabara.ly"
              className="text-white/70 hover:text-blue-300 transition"
            >
              info@alhabara.ly
            </a>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-blue-300" />
            <p className="text-white/70">
              السلع التموينية – شارع المجمدات
              <br />
              مصراتة | ليبيا
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-16 text-center text-white/50 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()} شركة الهبارة للصناعات الغذائية — جميع
        الحقوق محفوظة
      </div>
    </footer>
  );
}
