"use client";

import Image from "next/image";

const BiographySection = () => (
  <section id="biografia" className="section-padding">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start">
        <div className="animate-fade-in-up">
          <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3">
            Desde Cusco
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-2">
            Biografía<span className="text-secondary">.</span>
          </h2>
          <div className="w-20 h-1 bg-secondary my-6" />

          <div className="space-y-6 text-foreground/85 leading-relaxed text-base md:text-lg max-w-xl font-body">
            <p>
              Con más de <strong className="text-foreground">5 años de trayectoria</strong> liderando la intersección entre tecnología, emprendimiento e innovación social. Ha dirigido el diseño y la ejecución de programas de pre-incubación, mentorizando a más de <span className="font-bold text-foreground">100 fundadores</span> en la validación técnica y comercial.
            </p>
            <p>
              Fue parte del <span className="font-semibold text-foreground">Instituto Tecnológico de la Producción</span> (Ministerio de la Producción), donde trabajó en proyectos para el sector textil y en ecosistemas de innovación regional.
            </p>
            <div className="w-12 h-px bg-secondary/50 my-2" />
            <p>
              Fundadora de <span className="font-bold bg-primary text-primary-foreground px-1.5 py-0.5">Levely</span>, startup tecnológica, y cofundadora de <span className="font-bold bg-primary text-primary-foreground px-1.5 py-0.5">Mujeres Digitales</span>, una fundación que busca cerrar la brecha digital de género con retos STEAM.
            </p>
            <p>
              Integra análisis de datos, herramientas no-code y automatización para desarrollar y validar iniciativas con impacto.
            </p>
          </div>
        </div>

        <div className="hidden md:block w-72 lg:w-80 animate-fade-in-up animation-delay-200">
          <div className="relative">
            {/* Marco decorativo - Usando las variables de tu globals.css */}
            <div className="w-full aspect-[3/4] border-4 border-secondary absolute -bottom-3 -left-3" />

            {/* Imagen Optimizada con Next.js */}
            <div className="relative w-full aspect-[3/4] z-10 overflow-hidden">
              <Image
                src={"/dara-biography.png"}
                alt="Dara Mariluz - Trayectoria en Innovación"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BiographySection;