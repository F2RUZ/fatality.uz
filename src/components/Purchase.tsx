"use client";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function Purchase() {
  const cards = [
    {
      title: "YOG'LARNI ERITISH",
      desc: "Lipid almashinuvini faollashtiradi va eng qiyin sohalardagi yog' qatlamlarini samarali parchalashga yordam beradi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#E91E63]"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "ENERGIYA VA TONUS",
      desc: "Ozish jarayonida charchoqni yo'qotadi. Tanadagi yog'larni foydali energiyaga aylantirib, kun boyi tetiklik beradi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#000000]"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "ISHTAHA NAZORATI",
      desc: "Zararli shirinliklar va ortiqcha ovqatlanishga bo'lgan ehtiyojni kamaytiradi, to'qlik hissini uzoqroq saqlaydi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#E91E63]"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* TEPA QISMDAGI 3 TA KARTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-[40px] p-10 shadow-[0_15px_45px_rgba(233,30,99,0.05)] border border-pink-50 hover:border-[#E91E63]/30 hover:shadow-[0_30px_60px_rgba(233,30,99,0.1)] transition-all duration-500 group"
            >
              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-[-5deg] transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-[#000000] font-[1000] text-[15px] mb-4 tracking-[2px] uppercase italic">
                {card.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed font-bold uppercase opacity-80">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LOGO QISMI: FATALITY (KATTAROQ VERSIYADA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center space-y-8 mb-20"
        >
          <div className="flex items-center select-none uppercase">
            <span className="text-5xl md:text-[90px] font-[1000] italic tracking-tighter text-[#000000] leading-none">
              FATA
            </span>

        

            <span className="text-5xl md:text-[90px] font-[1000] italic tracking-tighter text-[#E91E63] leading-none">
              LITY
            </span>
          </div>

          <div className="h-[4px] w-32 bg-gradient-to-r from-transparent via-[#E91E63] to-transparent rounded-full" />

          <p className="text-[#000000]/40 font-[1000] tracking-[8px] uppercase text-[10px] md:text-[14px] mt-2 italic">
            NATURAL SLIMMING COMPLEX
          </p>
        </motion.div>

        {/* O'YNAB TURUVCHI KAPSULALAR (Qora va Pushti) */}
        <div className="relative h-32 flex justify-center items-center gap-16">
          {[
            {
              color: "bg-[#000000]",
              size: "w-12 h-6",
              delay: 0,
              rotate: "rotate-45",
            },
            {
              color: "bg-[#E91E63]",
              size: "w-14 h-7",
              delay: 0.5,
              rotate: "-rotate-12",
            },
            {
              color: "bg-[#E91E63]/20",
              size: "w-12 h-6",
              delay: 1,
              rotate: "rotate-[60deg]",
            },
          ].map((pill, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 25, -25, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: pill.delay,
                ease: "easeInOut",
              }}
              className={`${pill.size} ${pill.color} rounded-full shadow-xl border border-white/20 ${pill.rotate} opacity-90`}
            />
          ))}
        </div>
      </div>

      {/* Orqa fondagi dekorativ elementlar */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#E91E63]/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#000000]/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
