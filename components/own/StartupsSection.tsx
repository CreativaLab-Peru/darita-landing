"use client";

const startups = [
  {
    name: "Levely",
    role: "Fundadora & CEO",
    description: "Acelerador de carrera impulsado por IA que potencia el talento de Latam hacia mercados globales. Mediante el análisis automatizado de brechas (Gap analysis) y la creación de rutas de aprendizaje personalizadas, optimizamos tu perfil técnico y estratégico para hacerte hasta 10x más empleable.",
  },
  {
    name: "Mujeres Digitales",
    role: "Cofundadora",
    description: "Plataforma de mentoría 1:1 diseñada para mujeres entre 13 y 29 años que buscan escalar en carreras STEAM. Conectamos a la próxima generación con referentes de la industria tech para cerrar la brecha de género.",
  },
];

const StartupsSection = () => (
  <section id="startups" className="section-padding">
    <div className="max-w-4xl mx-auto px-6 md:px-12">
      {/* Título con animación */}
      <div className="animate-fade-in-up">
        <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-2">
          Startups<span className="text-secondary">.</span>
        </h2>
        <div className="w-20 h-1 bg-secondary my-6" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {startups.map((s, i) => (
          <div
            key={i}
            className={`
              border-4 border-primary p-6 md:p-8 group 
              hover:bg-primary hover:text-primary-foreground 
              transition-all duration-300 ease-in-out
              animate-fade-in-up
            `}
            style={{ animationDelay: `${(i + 1) * 200}ms` }}
          >
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-hover:text-primary-foreground/60 mb-3 transition-colors font-sans">
              {s.role}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
              {s.name}<span className="text-secondary">.</span>
            </h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors font-body">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StartupsSection;