"use client";

import { useState } from "react";
import ConvertKitForm from "../convert-kit-form";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    // CAMBIO: El fondo debe ser 'bg-primary' (Dark) para que coincida con la imagen
    <section className="section-padding bg-[#19282d] text-[#d2ff7d]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">

          {/* Left: Title */}
          <div className="flex-1 animate-fade-in-up">
            <p className="text-sm font-bold tracking-widest uppercase text-primary-foreground/60 mb-4 font-sans">
              Newsletter
            </p>
            {/* CAMBIO: El título debe ser Lime (text-secondary o text-primary-foreground) */}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary leading-tight mb-4">
              La ruta para tu <br /> carrera global
            </h2>
            <p className="text-primary-foreground/50 font-display text-xl italic">— by Dara</p>
          </div>

          {/* Right: Description + Form */}
          <div className="flex-1 animate-fade-in-up animation-delay-200">
            <div className="space-y-4 mb-8 text-primary-foreground/80 text-base md:text-lg leading-relaxed font-body">
              <p>
                Te abro mi bitácora personal donde te muestro la ruta para entrar al top 3% del talento global que gana becas, fellowships, startups y oportunidades internacionales para que empieces a calificar.
              </p>
              <p>
                Comparto mis errores y aprendizajes mientras construyo una <span className="font-bold text-secondary underline decoration-secondary/30 underline-offset-4">carrera global</span>.
              </p>
            </div>
            <div className="flex gap-2">
              <ConvertKitForm uid="bfc8a3a54f" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;