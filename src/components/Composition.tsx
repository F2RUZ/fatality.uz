"use client";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function Composition() {
  const mainFeatures = {
    benefits: [
      "YOG'LARNI TABIIY ERITISH VA QOMATNI TIKLASH",
      "METABOLIZMNI 2 BARAVAR TEZLASHTIRISH",
      "ISHTAHANI SAMARALI NAZORAT QILISH",
    ],
    components: [
      "TABIIY O'SIMLIK EKSTRAKTLARI MAJMUASI",
      "L-KARNITIN VA ENERGETIK KOMPONENTLAR",
      "VAMINLAR VA ANTIOKSIDANTLAR KOMBINATSIYASI",
    ],
  };

  const formulaData = [
    { name: "L-KARNITIN", desc: "YOG'LARNI YO'QOTISH" },
    { name: "EKSTRAKTLAR", desc: "100% TABIIY MEVA" },
    { name: "VITAMINLAR", desc: "B, C, D KOMPLEKS" },
    { name: "ANTIOKSIDANT", desc: "ORGANIZMNI TOZALASH" },
  ];

  return (
    <section className="w-full py-6 bg-white overflow-hidden" id="composition">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha - Fatality uslubida */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity
              className="text-[#E91E63] w-6 h-6 animate-pulse"
              strokeWidth={3}
            />
            <span className="text-[#E91E63] text-[10px] md:text-xs font-black uppercase tracking-[5px]">
              SCIENTIFIC FORMULA
            </span>
          </div>
          <h2 className="text-[#000000] text-3xl md:text-5xl font-[1000] italic leading-tight uppercase tracking-tighter">
            YUKSAK SAMARALI
            <span className="text-[#E91E63]"> TARKIB</span>
          </h2>
          <p className="text-slate-400 font-bold mt-4 uppercase text-[10px] md:text-xs tracking-[2px] max-w-xl mx-auto leading-relaxed italic opacity-80">
            FATALITY — Ortiqcha vazndan xalos bo'lish va metabolizmni
            faollashtirish uchun yaratilgan maxsus biologik faol majmua.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 1-Karta: Foydali xususiyatlar */}
          <div className="w-full lg:w-[380px] bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(233,30,99,0.08)] border border-pink-50 relative z-10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <h3 className="text-[#E91E63] text-2xl font-[1000] uppercase italic transition-all group-hover:tracking-wider">
                FUNKSIYA
              </h3>
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1">
                ASOSIY TA'SIR MEXANIZMI
              </p>
              <div className="h-1.5 w-10 bg-[#000000] mt-3 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center shrink-0 mt-0.5 border border-pink-100 rotate-12">
                    <div className="w-2 h-2 rounded-full bg-[#E91E63] animate-ping" />
                  </div>
                  <p className="text-[#000000] text-[12px] font-black leading-snug uppercase italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Vizual Bottle/Core */}
          <div className="flex flex-col items-center gap-10 z-20">
            <div className="w-60 h-60 md:w-80 md:h-80 relative group">
              {/* Orqa fondagi aylanuvchi pushti nur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E91E63]/20 to-transparent rounded-full animate-spin-slow opacity-60" />

              <div className="absolute inset-4 bg-[#000000] rounded-full shadow-2xl flex items-center justify-center p-4 border-[10px] border-white relative overflow-hidden">
                <Image
                  src="/fatality-bottle.png" // Qora idish rasmi
                  alt="Fatality Complex"
                  fill
                  className="object-contain p-10 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[400px]">
              {formulaData.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-[22px] border border-pink-50 shadow-sm text-center hover:shadow-pink-100 transition-shadow"
                >
                  <h4 className="text-[#E91E63] font-black text-[10px] uppercase mb-1 tracking-wider">
                    {m.name}
                  </h4>
                  <p className="text-[9px] text-[#000000] font-black uppercase opacity-60 italic">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Tarkib */}
          <div className="w-full lg:w-[380px] bg-[#000000] rounded-[40px] p-8 md:p-10 shadow-2xl shadow-pink-900/20 relative z-10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <h3 className="text-[#E91E63] text-2xl font-[1000] uppercase italic">
                MAJMUA
              </h3>
              <p className="text-[9px] text-white/40 font-black uppercase tracking-widest mt-1">
                20 TA KAPSULADAN IBORAT UNIKAL TARKIB
              </p>
              <div className="h-1.5 w-10 bg-[#E91E63] mt-3 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.components.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5 border border-white/10 -rotate-12">
                    <div className="w-2 h-2 rounded-full bg-[#E91E63]" />
                  </div>
                  <p className="text-white text-[12px] font-black leading-snug uppercase italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
