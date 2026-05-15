interface PracticeArea {
  icon: string;
  title: string;
  description: string;
}

const PracticeAreas = () => {
  const practiceAreas: PracticeArea[] = [
    {
      icon: "⚖️",
      title: "Derecho Penal",
      description: "Defensa agresiva y estratégica para proteger sus derechos en todo proceso penal."
    },
    {
      icon: "👨‍👩‍👧",
      title: "Derecho de Familia",
      description: "Asesoramiento compasivo en divorcios, custodias y otros asuntos familiares delicados."
    },
    {
      icon: "🚗",
      title: "Accidentes y Lesiones",
      description: "Luchamos por la compensación justa que usted merece tras un accidente o lesión."
    }
  ];

  return (
    <section id="practice-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Áreas de Práctica
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Cómo Podemos Ayudarle
          </h2>
          <p className="text-gray-600 text-lg">
            Especialistas comprometidos en resolver sus problemas legales con eficacia y dedicación.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:border-amber-500/30 transition-all group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-amber-600 transition-colors">
                <span className="group-hover:filter group-hover:brightness-0 group-hover:invert">{area.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
