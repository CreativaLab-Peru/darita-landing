"use client";

const services = [
  {
    title: "Consultoría",
    description: "Asesoría estratégica en innovación social, emprendimiento e internacionalización para organizaciones y startups.",
  },
  {
    title: "Impulso conjunto",
    description: "¿Tienes un proyecto con impacto social? Busquemos sinergias y construyamos algo juntos.",
  },
  {
    title: "Mentoría",
    description: "Acompaño a jóvenes latinoamericanos en su camino hacia becas, fellowships y oportunidades globales.",
  },
];

const WorkWithMeSection = () => (
  <section id="trabaja-conmigo" className="section-padding bg-cream">
    <div className="max-w-4xl mx-auto px-6 md:px-12">
      <h2 className="font-display text-5xl md:text-7xl font-bold text-primary mb-2">
        Trabaja conmigo<span className="text-secondary">.</span>
      </h2>
      <div className="w-20 h-1 bg-secondary my-6" />
      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-12">
        Si buscas un aliado para impulsar proyectos con impacto, explorar oportunidades globales o llevar tu idea al siguiente nivel — hablemos.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="border-4 border-primary p-8 hover:bg-primary hover:text-primary-foreground group transition-colors duration-300"
          >
            <h3 className="font-display text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-sm leading-relaxed transition-colors duration-300">
              {s.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="#contacto"
          className="inline-block bg-[#19282d] text-[#d2ff7d] px-10 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Conversemos →
        </a>
      </div>
    </div>
  </section>
);

export default WorkWithMeSection;
