"use client";

const awards = [
  {
    year: "2025",
    title: "Startup ganadora 11G",
    org: "ProInnóvate Perú",
    image: "/startup-11g.jpg",
  },
  {
    year: "2023",
    title: "Reconocimiento a emprendimiento innovador",
    org: "Innovandes Cusco",
    image: "/PECAP.JPG",
  },
];

const AwardsSection = () => (
  <section id="premios" className="section-padding bg-[#19282d] text-[#d2ff7d]">
    <div className="max-w-4xl mx-auto px-6 md:px-12">
      <h2 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-2">
        Premios<span className="text-secondary">.</span>
      </h2>
      <div className="w-20 h-1 bg-secondary my-6" />
      <div className="grid sm:grid-cols-2 gap-8">
        {awards.map((a, i) => (
          <div key={i} className="group">
            {/* Image placeholder */}
            <div className="aspect-video bg-primary-foreground/10 border-2 border-primary-foreground/20 mb-4 flex items-center justify-center overflow-hidden">
              {a.image ? (
                <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-primary-foreground/30 text-sm uppercase tracking-wider">Foto</span>
              )}
            </div>
            <p className="text-secondary font-bold text-sm mb-1">{a.org} · {a.year}</p>
            <p className="font-display text-xl font-bold text-primary-foreground leading-snug">{a.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
