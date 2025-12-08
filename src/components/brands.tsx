"use client";
import { motion } from "framer-motion";

export default function Brands() {
  const brands = [
    {
      name: "بريمو",
      description:
        "مجموعة حليب متطورة مخصّصة لدعم مناعة الأطفال ونموهم، بصيغ غذائية متوازنة ومعززة بالفيتامينات.",
      image: "/brands/primo.png",
    },
    {
      name: "هيرولاك",
      description:
        "حبوب أطفال قوية التغذية بنكهات طبيعية مثل التمر والقمح والعسل، مصممة لمنح الطفل طاقة ونمو صحي.",
      image: "/brands/herolac.png",
    },
    {
      name: "بامبينو",
      description:
        "بسكويت أطفال مغذٍ بنكهة العسل، غني بالمعادن والفيتامينات وملائم لاحتياجات الرضع من عمر 6 أشهر.",
      image: "/brands/bambino.png",
    },
    {
      name: "ليو",
      description:
        "مشروبات غذائية للأطفال بنكهات الشوكولاتة والفانيلا، مدعّمة بالمعادن والفيتامينات لتعزيز النشاط اليومي.",
      image: "/brands/leo.png",
    },
    {
      name: "صن",
      description:
        "مسحوق حليب كامل الدسم فوري الذوبان، غني بالفيتامينات والكالسيوم وطعم نقي يناسب كل الأسرة.",
      image: "/brands/sun.png",
    },
  ];

  return (
    <section
      id="brands"
      className="relative w-screen max-w-none py-24 md:py-32 bg-linear-to-b from-white via-[#f6fbff] to-[#e8f6ff] overflow-hidden isolate"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#1a2b47] mb-6"
        >
          علاماتنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="text-lg md:text-xl text-[#384863] max-w-3xl mx-auto mb-12"
        >
          تحت مظلة شركة الهبارة للصناعات الغذائية نقدم مجموعة من العلامات التي
          تجمع بين الجودة، الثقة، والتغذية المتوازنة لكل أفراد الأسرة.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-8 flex flex-col items-center justify-start text-[#1a2b47] space-y-4"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-48 h-48 object-contain"
              />
              <h3 className="text-xl font-bold">{brand.name}</h3>
              <p className="text-sm leading-relaxed text-[#40516d]">
                {brand.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
