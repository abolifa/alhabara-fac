"use client";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "بريمو مدعّم",
      description: "حليب مدعم لنمو صحي ومناعة أقوى للأطفال فوق السنة.",
      image: "/products/primo-modam.jpeg",
    },
    {
      name: "بريمو كامل الدسم",
      description: "تركيبة حليب غنية بالطاقة للمرحلة العمرية 1–6 سنوات.",
      image: "/products/primo-fatfilled.jpeg",
    },
    {
      name: "بريمو مقوّى",
      description: "صيغة غذائية أقوى لدعم النمو والحيوية بتركيبة متوازنة.",
      image: "/products/primo-moqawa.jpeg",
    },
    {
      name: "هيرولاك عسل و قمح",
      description: "حبوب أطفال بنكهة العسل والقمح، غذاء متكامل وطاقة يومية.",
      image: "/products/herolac-wheat-honey.jpeg",
    },
    {
      name: "هيرولاك فواكه و قمح",
      description: "حبوب مغذية بفاكهة طبيعية لوجبة خفيفة ولذيذة.",
      image: "/products/herolac-fruit.jpeg",
    },
    {
      name: "هيرولاك تمر و قمح",
      description: "تركيبة بالتمر والقمح تمنح الطفل طاقة وعناصر أساسية.",
      image: "/products/herolac-date.jpeg",
    },
    {
      name: "بسكويت بامبينو بالقمح",
      description:
        "بسكويت أطفال بتركيبة إيطالية غني بالكالسيوم والحديد والفيتامينات.",
      image: "/products/bambino-wheat.png",
    },
    {
      name: "بسكويت بامبينو بالعسل",
      description:
        "بسكويت مغذٍ بنكهة العسل، مناسب لاحتياجات الرضع من عمر 6 أشهر.",
      image: "/products/bambino-honey.png",
    },
    {
      name: "بسكويت باودر بامبينو",
      description: "حببيبات بسكويت للوجبات السريعة التحضير للرضع.",
      image: "/products/bammino-biscutte.jpeg",
    },
    {
      name: "حليب ليو النمو بالفانيلا",
      description: "مشروب فانيلا مدعم بـ 18 فيتامين ومعادن لنشاط يومي.",
      image: "/products/leo-vanilla.jpeg",
    },
    {
      name: "حليب ليو الشوكولاتة المحلى",
      description:
        "مشروب شوكولاتة بخام كاكاو إيطالي، صنع خصيصاً لدعم نمو الأطفال.",
      image: "/products/leo-hot-chocolate.jpeg",
    },
    {
      name: "حليب صن كامل الدسم",
      description:
        "مسحوق حليب كامل الدسم فوري الذوبان، غني بالفيتامينات والكالسيوم.",
      image: "/products/sun-full-fat.jpeg",
    },
  ];

  return (
    <section
      id="products"
      className="relative w-screen max-w-none py-24 md:py-32 bg-[#f9fcff] isolate"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#1a2b47] mb-6"
        >
          منتجاتنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="text-lg md:text-xl text-[#384863] max-w-3xl mx-auto mb-12"
        >
          مجموعة واسعة من المنتجات الغذائية المخصصة للأطفال والرضع، تجمع بين
          الجودة الأوروبية والقيم الغذائية العالية.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col items-center text-[#1a2b47] space-y-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-64 h-64 object-contain"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-[#40516d] leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
