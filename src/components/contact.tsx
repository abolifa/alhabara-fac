"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("to", "info@alhabara.ly");

    try {
      const response = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      if (text.includes("OK")) {
        setSent(true);
        form.reset();
      } else {
        setError("⚠ حدث خطأ أثناء الإرسال");
      }
    } catch {
      setError("⚠ فشل الاتصال بالخادم");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 bg-[#f7fafc] text-[#1a2b47] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,150,255,0.09),transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[conic-gradient(from_180deg,rgba(0,180,120,0.18),transparent,rgba(255,210,120,0.14))] blur-[140px] opacity-70" />

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold bg-linear-to-b from-blue-800 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,120,255,0.25)]">
            تواصل معنا
          </h2>
          <p className="text-[#40516d] text-xl mt-6 max-w-2xl mx-auto leading-[1.9]">
            شركة الهبارة للصناعات الغذائية — جاهزون للتعاون والشراكات وتلبية
            احتياجات السوق المحلي بمنتجات ذات جودة عالية.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="bg-white border border-blue-100 rounded-3xl p-10 space-y-10 shadow-[0_0_30px_rgba(0,0,0,0.05)]"
          >
            <div className="flex gap-5 items-start">
              <Phone className="w-7 h-7 text-blue-600 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">الهاتف</h4>
                <a
                  href="tel:+218912131319"
                  dir="ltr"
                  className="text-[#1a2b47] hover:text-blue-600 transition underline"
                >
                  +218 91 213 1319
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <Mail className="w-7 h-7 text-blue-600 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">البريد الإلكتروني</h4>
                <a
                  href="mailto:info@alhabara.ly"
                  className="text-[#1a2b47] hover:text-blue-600 transition underline"
                >
                  info@alhabara.ly
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <MapPin className="w-7 h-7 text-blue-600 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">العنوان</h4>
                <p className="text-[#40516d]">
                  السلع التموينية - شارع المجمدات - مصراتة | ليبيا
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] border border-blue-100 shadow-inner">
              <iframe
                src="https://maps.google.com/maps?q=32.338827696215446,15.113202566194499&z=14&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="bg-white border border-blue-100 rounded-3xl p-10 flex flex-col gap-6 shadow-[0_0_30px_rgba(0,0,0,0.05)]"
          >
            <input
              name="name"
              placeholder="الاسم بالكامل"
              required
              className="p-4 rounded-xl bg-[#f1f5f9] text-[#1a2b47] border border-blue-100 focus:ring-2 focus:ring-blue-300 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              required
              className="p-4 rounded-xl bg-[#f1f5f9] text-[#1a2b47] border border-blue-100 focus:ring-2 focus:ring-blue-300 outline-none"
            />

            <input
              name="phone"
              placeholder="رقم الهاتف"
              className="p-4 rounded-xl bg-[#f1f5f9] text-[#1a2b47] border border-blue-100 focus:ring-2 focus:ring-blue-300 outline-none"
            />

            <input
              name="subject"
              placeholder="الموضوع"
              className="p-4 rounded-xl bg-[#f1f5f9] text-[#1a2b47] border border-blue-100 focus:ring-2 focus:ring-blue-300 outline-none"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="اكتب رسالتك..."
              required
              className="p-4 rounded-xl bg-[#f1f5f9] text-[#1a2b47] border border-blue-100 focus:ring-2 focus:ring-blue-300 outline-none"
            />

            {sent && (
              <p className="text-green-600 text-sm text-center">
                ✓ تم إرسال الرسالة بنجاح
              </p>
            )}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-bold text-lg disabled:opacity-50"
            >
              {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
