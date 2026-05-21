import Logo from "@/components/Logo";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("intro_seen");
  });
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 3200);
    const hideTimer = setTimeout(() => {
      sessionStorage.setItem("intro_seen", "1");
      setVisible(false);
    }, 3900);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="intro-animation-wrapper fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#f8f8f8" }}
        >
          {/* Background subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Thin golden horizontal line sweep */}
          <div className="golden-line-sweep absolute left-0 right-0 h-[1.5px] top-1/2 -translate-y-1/2 z-10" />

          {/* Logo container */}
          <motion.div
            className="intro-logo-container relative z-20 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.1,
            }}
          >
            {/* Logo mark with metallic shine */}
            <div className="relative mb-8">
              <Logo size={130} className="drop-shadow-2xl logo-shine" />
              {/* Metallic shine overlay */}
              <div className="absolute inset-0 rounded overflow-hidden pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.35) 45%, transparent 55%)",
                    animation: "metallic-shine 3s ease-in-out 0.6s infinite",
                  }}
                />
              </div>
            </div>

            {/* STANDARD text — slides in from left */}
            <motion.div
              className="intro-text-standard overflow-hidden"
              initial={{ opacity: 0, x: -48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.85,
              }}
            >
              <span
                className="block text-5xl sm:text-6xl font-display font-black tracking-[0.2em] text-[#1a1a1a] leading-none select-none"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 40%, #1a1a1a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                STANDARD
              </span>
            </motion.div>

            {/* Thin golden separator line */}
            <motion.div
              className="w-full h-[1.5px] my-3"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #D4AF37, transparent)",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
            />

            {/* COMMERCIAL KITCHEN EQUIPMENTS — slides in from right */}
            <motion.div
              className="intro-text-subtitle overflow-hidden"
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 1.05,
              }}
            >
              <span className="block text-xs sm:text-sm font-body font-semibold tracking-[0.35em] text-[#555] uppercase select-none">
                COMMERCIAL KITCHEN EQUIPMENTS
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
