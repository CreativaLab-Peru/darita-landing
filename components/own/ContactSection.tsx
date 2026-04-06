"use client";

const ContactSection = () => (
  <section id="contacto" className="section-padding bg-[#19282d] text-[#d2ff7d]">
    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
      <h2 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
        Conectemos<span className="text-secondary">.</span>
      </h2>
      <p className="text-primary-foreground/70 text-lg mb-8 max-w-md mx-auto">
        ¿Tienes un proyecto, oportunidad o simplemente quieres conversar? Escríbeme.
      </p>
      <a
        href="mailto:hola@soydaramariluz.com"
        className="inline-block bg-[#d2ff7d] text-[#19282d] px-10 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
      >
        hola@soydaramariluz.com
      </a>
      <div className="mt-16 pt-8 border-t border-primary-foreground/15">
        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Dara Mariluz. Desde Cusco para el mundo.
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
