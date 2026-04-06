import { useState } from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isDark, setIsDark] = useState(true);

  const cards = [
    {
      icon: "🚀",
      tag: "STARTUP & FONDOS",
      title: "Capital y Grants desde cero",
      desc: "Estrategias reales para fondear tu startup o fundación. Cómo aplicar a grants internacionales y aceleradoras desde Latinoamérica.",
      highlight: "+$70K conseguidos",
    },
    {
      icon: "🎓",
      tag: "BECAS DE ÉLITE",
      title: "Postgrados 100% financiados",
      desc: "Guía específica para ganar becas totales en UK, Europa y USA. Olvida las deudas y enfócate en las mejores universidades del mundo.",
      highlight: "UK / Europa / USA",
    },
    {
      icon: "🔥",
      tag: "BITÁCORA DE CONSTRUCCIÓN",
      title: "El 'detrás de cámaras' real",
      desc: "Lo que no cabe en un post de LinkedIn: el paso a paso técnico, los errores estratégicos y las reflexiones crudas de construir una startup y una fundación desde cero.",
      highlight: "100% transparente",
    },
    {
      icon: "📬",
      tag: "CONVOCATORIAS",
      title: "Oportunidades de la semana",
      desc: "Cada semana, becas y fondos que acaban de abrir. Ahorra horas de búsqueda con acceso directo.",
      highlight: "Semanal",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "theme-dark" : "theme-light"}`}
      style={{ backgroundColor: `hsl(var(--background))`, color: `hsl(var(--foreground))` }}>
      {/* Header */}
      <header className="px-6 md:px-12 py-6 flex justify-between items-center max-w-5xl mx-auto">
        <Link
          to="/"
          className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors"
        >
          ← Volver
        </Link>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full border border-primary-foreground/20 hover:border-secondary/50 transition-all duration-300 text-primary-foreground/60 hover:text-secondary"
          aria-label={isDark ? "Modo día" : "Modo noche"}
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" /><path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" /><path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-12 pb-20 max-w-5xl mx-auto">
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-secondary/70 border border-secondary/30 px-3 py-1 mb-8">
          CARRERA GLOBAL
        </span>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4" style={{ color: '#D2FF7D' }}>
          La ruta al top 3% del talento global
        </h1>

        <p className="font-display text-lg md:text-xl text-secondary font-bold tracking-wide mb-2">
          Carrera Global <span className="text-primary-foreground/50 font-normal">— by Dara</span>
        </p>

        <h2 className="font-display text-xl md:text-2xl leading-relaxed mb-6 max-w-2xl" style={{ color: '#D2FF7D' }}>
          Un boletín semanal donde te compartimos la ruta para entrar al top 3% del talento global que gana becas, fellowships, startups y oportunidades internacionales para que empieces a calificar.
        </h2>

        {/* Subscribe Form */}
        <div className="flex flex-col sm:flex-row gap-0 mb-4 max-w-lg">
          <input
            type="email"
            placeholder="Tu correo electrónico..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3.5 border-2 border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-secondary transition-colors"
          />
          <button className="bg-secondary text-secondary-foreground px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all hover:shadow-[0_0_20px_hsl(82,100%,74%,0.3)] shrink-0">
            Únete a la travesía
          </button>
        </div>
        <p className="text-primary-foreground/30 text-xs">
          Gratis · Sin spam · Cancela cuando quieras
        </p>
      </section>

      {/* What you'll get */}
      <section className="px-6 md:px-12 py-20 border-t border-primary-foreground/10 max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          ¿Qué encontrarás?
        </h2>
        <p className="text-primary-foreground/50 text-base mb-14 max-w-xl">
          Estrategia, vulnerabilidad y recursos accionables en cada edición.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
              style={{ backgroundColor: '#5687FF', border: '1.5px solid rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{card.icon}</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">
                  {card.tag}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                {card.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {card.desc}
              </p>

              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#D2FF7D', color: '#19282D' }}>
                {card.highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-primary-foreground/10 max-w-5xl mx-auto text-center">
        <p className="text-primary-foreground/50 font-display text-lg mb-6">
          Únete a la comunidad de personas construyendo carreras globales 🌍
        </p>
        <Link
          to="/"
          className="text-secondary text-sm font-bold hover:opacity-80 transition-opacity"
        >
          Conoce más sobre Levely →
        </Link>
      </section>
    </div>
  );
};

export default Newsletter;
