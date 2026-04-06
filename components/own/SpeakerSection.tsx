"use client";

import Image from "next/image";

const talks = [
  { title: "Women in AI & Blockchain", event: "Globant 2024", image: "/speaker-globant.jpg" },
  { title: "Pitch startup", event: "Innovandes Cusco by PECAP", image: "/speaker-pecap.jpg" },
  { title: "Design Thinking para proyectos STEAM", event: "Solve for Tomorrow by Samsung", image: "/google_for_educ.jpeg" },
  { title: "Women in STEAM", event: "Embajada Británica", image: "/speaker-embajada-britanica.jpg" },
];

const SpeakerSection = () => (
  <section id="vocera" className="section-padding bg-[#19282d] text-[#d2ff7d]">
    <div className="max-w-4xl mx-auto px-6 md:px-12">
      <h2 className="font-display text-5xl md:text-7xl font-extrabold text-primary-foreground mb-2">
        Speaker<span className="text-secondary">.</span>
      </h2>
      <div className="w-20 h-1 bg-secondary my-6" />
      <div className="grid sm:grid-cols-2 gap-8">
        {talks.map((t, i) => (
          <div key={i} className="group">
            <div className="relative aspect-video bg-primary-foreground/10 border-2 border-primary-foreground/20 mb-4 flex items-center justify-center overflow-hidden">
              {t.image ? (
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                // Si estas imágenes aparecen en una lista larga, Next.js las cargará bajo demanda (Lazy Loading)
                />
              ) : (
                <span className="text-primary-foreground/30 text-sm uppercase tracking-wider">Foto</span>
              )}
            </div>
            <p className="text-secondary font-bold text-sm mb-1">{t.event}</p>
            <p className="font-display text-xl font-bold text-primary-foreground leading-snug">{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpeakerSection;
