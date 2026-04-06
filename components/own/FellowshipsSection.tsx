"use client";

const fellowships = [
  { year: "2024", title: "Becaria en Pre-incubación para Mujeres en tech", org: "UTEC Ventures · Programa FemLab 2024" },
  { year: "2023", title: "Becaria en Desarrollo Web", org: "Le Wagon · Bootcamp en Web Development 2023" },
];

const FellowshipsSection = () => (
  <section id="becas" className="section-padding">
    <div className="max-w-4xl mx-auto px-6 md:px-12">
      <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-2">
        Becas<span className="text-secondary">.</span>
      </h2>
      <div className="w-20 h-1 bg-secondary my-6" />
      <div className="space-y-0">
        {fellowships.map((f, i) => (
          <div key={i} className="flex items-baseline gap-6 py-6 border-b border-border">
            <span className="text-secondary font-bold text-sm shrink-0 w-12">{f.year}</span>
            <div>
              <p className="font-display text-lg md:text-xl font-bold">{f.title}</p>
              <p className="text-muted-foreground text-sm mt-1">{f.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FellowshipsSection;
