"use client";

import Image from "next/image";

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding bg-cream">
    <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl">
          <div className="inline-block bg-primary text-secondary px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
            GLOBAL STRATEGY 🌎
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-extrabold text-primary animate-fade-in-up animation-delay-100">
            Hola, soy
            <br />
            <span className="text-primary/70">Dara Mariluz.</span>
          </h1>
          <p className="font-body text-lg md:text-xl leading-relaxed text-primary/70 mt-6 animate-fade-in-up animation-delay-200 max-w-lg">
            —dedicada a impulsar la innovación, impacto social y emprendimiento. Construyendo una carrera global 🇵🇪
          </p>
          <div className="mt-8 flex items-center gap-3 animate-fade-in-up animation-delay-300">
            <span className="text-primary/60 text-sm font-body">Con sede en</span>
            <span className="inline-flex items-center gap-2 border-2 border-primary/30 rounded-full px-5 py-2 text-sm font-bold text-primary">
              📍 Perú 🌎
            </span>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="shrink-0 animate-fade-in-up animation-delay-200">
          <div className="relative">
            {/* Marco decorativo - posicionado arriba a la derecha */}
            <div className="w-64 h-80 md:w-72 md:h-96 border-4 border-primary absolute -top-3 -right-3" />

            {/* Contenedor de la Imagen */}
            <div className="relative w-64 h-80 md:w-72 md:h-96 z-10">
              <Image
                src={"/dara-portrait.jpg"}
                alt="Dara Mariluz"
                fill
                priority
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover object-top grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
