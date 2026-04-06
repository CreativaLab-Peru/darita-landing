"use client";

const startups = [
  {
    name: "Levely",
    role: "Fundadora & CEO",
    description: "Acelerador de carrera impulsado por IA que potencia el talento de Latam hacia mercados globales. Mediante el análisis automatizado de brechas (Gap analysis) y la creación de rutas de aprendizaje personalizadas, optimizamos tu perfil técnico y estratégico para hacerte hasta 10x más empleable.",
    // Agregado https:// para que funcione el redirect externo
    link: "https://www.joinlevely.com"
  },
  {
    name: "Mujeres Digitales",
    role: "Cofundadora",
    description: "Plataforma de mentoría 1:1 diseñada para mujeres entre 13 y 29 años que buscan escalar en carreras STEAM. Conectamos a la próxima generación con referentes de la industria tech para cerrar la brecha de género.",
    link: "https://linktr.ee/mujeresdigitales"
  },
];

const StartupsSection = () => {

  const handleRedirect = (url: string) => {
    // Abre en una nueva pestaña
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="startups" className="section-padding py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
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
              onClick={() => handleRedirect(s.link)}
              className={`
                border-4 border-primary p-6 md:p-8 group 
                hover:bg-primary hover:text-primary-foreground 
                hover:scale-[1.02] cursor-pointer
                transition-all duration-300 ease-in-out
                animate-fade-in-up
              `}
              style={{ animationDelay: `${(i + 1) * 200}ms` }}
            >
              <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-hover:text-primary-foreground/60 mb-3 transition-colors font-sans">
                {s.role}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
                {s.name}<span className="text-secondary group-hover:text-white">.</span>
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors font-body">
                {s.description}
              </p>

              {/* Indicador visual opcional de que es un link */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold underline">
                Visitar sitio →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;