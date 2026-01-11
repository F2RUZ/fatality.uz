"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, User, Phone, X, Check } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [activeField, setActiveField] = useState<"name" | "phone" | null>(null);

  // Fatality API URL (O'zingizning API'ingizga almashtiring)
  const API_URL = `${
    process.env.NEXT_PUBLIC_API_URL || "https://api.example.com"
  }/leads/`;

  const progress =
    (formData.name.length > 2 ? 50 : 0) +
    (formData.phone.replace(/\D/g, "").length === 12 ? 50 : 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setFormData({ name: "", phone: "" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (!value.startsWith("998")) value = "998" + value;
    value = value.slice(0, 12);

    let formatted = "+";
    if (value.length > 0) formatted += value.slice(0, 3);
    if (value.length > 3) formatted += " (" + value.slice(3, 5) + ")";
    if (value.length > 5) formatted += " " + value.slice(5, 8);
    if (value.length > 8) formatted += " " + value.slice(8, 10);
    if (value.length > 10) formatted += " " + value.slice(10, 12);

    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const cleanPhone = formData.phone.replace(/\D/g, "");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: cleanPhone,
          source: "fatality_web_site",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 4000);
      } else {
        throw new Error("Xatolik");
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />

          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            className="relative w-full max-w-[460px] bg-white rounded-[50px] shadow-[0_40px_120px_rgba(233,30,99,0.2)] overflow-hidden"
          >
            {/* Dynamic Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className={`h-full transition-colors duration-500 ${
                  status === "error" ? "bg-red-500" : "bg-[#E91E63]"
                }`}
                style={{
                  boxShadow: status === "error" ? "none" : "0 0 15px #E91E63",
                }}
              />
            </div>

            <div className="p-10 md:p-14">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <SuccessView />
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* FATALITY LOGO */}
                    <div className="text-center mb-12">
                      <div className="flex items-center justify-center text-4xl md:text-5xl font-[1000] italic tracking-tighter leading-none uppercase">
                        <span className="text-[#000000]">FATA</span>
                        <span className="text-[#E91E63]">LITY</span>
                      </div>
                      <p className="mt-4 text-[10px] font-black uppercase tracking-[4px] text-slate-400">
                        KURSGA ARIZA QOLDIRISH
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Input */}
                      <div className="space-y-2">
                        <div
                          className={`flex items-center bg-slate-50 border-2 rounded-[24px] transition-all duration-300 ${
                            activeField === "name"
                              ? "border-[#E91E63] bg-white ring-4 ring-pink-500/5"
                              : "border-slate-100"
                          }`}
                        >
                          <span
                            className={`pl-7 transition-colors ${
                              activeField === "name"
                                ? "text-[#E91E63]"
                                : "text-slate-300"
                            }`}
                          >
                            <User size={22} strokeWidth={3} />
                          </span>
                          <input
                            required
                            type="text"
                            placeholder="ISMINGIZ"
                            onFocus={() => setActiveField("name")}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-5 py-6 bg-transparent outline-none font-black text-[#000000] placeholder:text-slate-300 text-sm tracking-wider"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-2">
                        <div
                          className={`flex items-center bg-slate-50 border-2 rounded-[24px] transition-all duration-300 ${
                            activeField === "phone"
                              ? "border-[#E91E63] bg-white ring-4 ring-pink-500/5"
                              : "border-slate-100"
                          }`}
                        >
                          <span
                            className={`pl-7 transition-colors ${
                              activeField === "phone"
                                ? "text-[#E91E63]"
                                : "text-slate-300"
                            }`}
                          >
                            <Phone size={22} strokeWidth={3} />
                          </span>
                          <input
                            required
                            type="text"
                            placeholder="+998 (__) ___ __ __"
                            onFocus={() => setActiveField("phone")}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-5 py-6 bg-transparent outline-none font-[1000] text-[#000000] text-sm tracking-[2px]"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === "loading" || progress < 100}
                        className={`w-full mt-6 py-7 rounded-[26px] font-[1000] uppercase tracking-[5px] text-[13px] italic shadow-2xl transition-all overflow-hidden relative ${
                          status === "error"
                            ? "bg-red-600 text-white"
                            : "bg-[#000000] text-white shadow-pink-900/20"
                        } disabled:bg-slate-100 disabled:text-slate-300 disabled:shadow-none`}
                      >
                        <span className="relative z-10">
                          {status === "loading"
                            ? "YUBORILMOQDA..."
                            : status === "error"
                            ? "XATOLIK!"
                            : "BUYURTMA BERISH"}
                        </span>
                        {status === "loading" && (
                          <motion.div
                            className="absolute inset-0 bg-[#E91E63]/40"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              repeat: Infinity,
                              duration: 1,
                              ease: "linear",
                            }}
                          />
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 w-11 h-11 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-[#E91E63] hover:text-white transition-all group"
            >
              <X
                size={22}
                strokeWidth={3}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function SuccessView() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="py-10 text-center"
    >
      <div className="w-28 h-28 bg-[#E91E63] rounded-[35px] flex items-center justify-center text-white shadow-[0_20px_50px_rgba(233,30,99,0.3)] mx-auto mb-10 transform rotate-[-8deg]">
        <Check size={56} strokeWidth={5} />
      </div>
      <h3 className="text-4xl font-[1000] text-[#000000] mb-5 uppercase tracking-tighter italic leading-none">
        MUVAFFAQIYAT!
      </h3>
      <p className="text-slate-500 font-bold text-xs leading-relaxed uppercase tracking-[2px] opacity-80">
        Sizning natijangiz sari ilk qadam <br /> muvaffaqiyatli bosildi.
      </p>
    </motion.div>
  );
}
