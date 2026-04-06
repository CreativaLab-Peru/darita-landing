"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "biografia", label: "Biografía" },
  { id: "premios", label: "Premios" },
  { id: "becas", label: "Becas" },
  { id: "vocera", label: "Vocera" },
  { id: "startups", label: "Startups" },
  { id: "prensa", label: "Prensa" },
  { id: "trabaja-conmigo", label: "Trabaja conmigo" },
  { id: "contacto", label: "Contacto" },
];

const SideNav = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 z-50 flex-col gap-2">
      {navItems.map(({ id, label }, i) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`
              group flex items-center gap-4 py-2 px-4 rounded-lg text-sm font-bold transition-all duration-300
              ${isActive
                ? "bg-[#d2ff7d] text-[#19282d] shadow-sm translate-x-2"
                : "text-[#19282d]/50 hover:text-[#19282d] hover:translate-x-1"
              }
            `}
          >
            {/* El número a la izquierda */}
            <span className={`
              text-[10px] w-4 font-mono transition-colors
              ${isActive ? "text-[#19282d]/40" : "text-[#19282d]/30"}
            `}>
              {i + 1}.
            </span>

            {/* El texto del item */}
            <span className="font-display tracking-tight">
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default SideNav;