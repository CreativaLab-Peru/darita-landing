"use client";

import Image from "next/image";

// Importarías las imágenes aquí si estuvieran en la carpeta assets, 
// o usas el path directo de /public como lo tienes ahora.
const pressItems = [
  {
    title: "La joven cusqueña que fue embajadora del Reino Unido",
    source: "RPP Noticias",
    year: "2025",
    image: "/rpp-prensa.jpg",
  },
  {
    title: "Dara, escribe sobre la importancia de romper brechas para mujeres",
    source: "Cámara de Comercio Peruano Británica",
    year: "2025",
    image: "/camara-comercio-britanica.jpg",
  },
  {
    title: "Dara compartió su inspirador viaje como emprendedora tech en Cusco",
    source: "Embajada Peruana en Londres",
    year: "2024",
    image: "/embajada-peru-londres.jpg",
  },
];

const PressSection = () => (
  // bg-[#d2ff7d] es el verde neón de la imagen
  <section id="prensa" className="section-padding bg-[#d2ff7d]">
    <div className="max-w-6xl mx-auto px-6 md:px-12">

      {/* Título en color oscuro para contrastar con el neón */}
      <div className="animate-fade-in-up">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-[#19282d] mb-2">
          Prensa y medios<span className="opacity-20">.</span>
        </h2>
        <div className="w-20 h-1.5 bg-[#19282d] my-8" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pressItems.map((p, i) => (
          <div
            key={i}
            className="bg-[#f4f4f0] group hover:translate-y-[-8px] transition-all duration-300 shadow-sm animate-fade-in-up"
            style={{ animationDelay: `${(i + 1) * 150}ms` }}
          >
            {/* Contenedor de Imagen con Next.js */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-6">
              <p className="text-xs font-bold text-[#19282d]/50 uppercase tracking-widest mb-3">
                {p.source} • {p.year}
              </p>
              <h3 className="font-display text-xl font-bold leading-tight text-[#19282d]">
                {p.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PressSection;