interface Attorney {
  name: string;
  position: string;
  imagePlaceholder: string;
}

const Attorneys = () => {
  const attorneys: Attorney[] = [
    {
      name: "Dr. Juan Saccone",
      position: "Abogado Fundador",
      imagePlaceholder: "/images/attorney-1.jpg"
    },
    {
      name: "Dra. María Rodríguez",
      position: "Socia Senior",
      imagePlaceholder: "/images/attorney-2.jpg"
    }
  ];

  return (
    <section id="attorneys" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Conozca a Nuestros Abogados
          </h2>
          <p className="text-gray-600 text-lg">
            Profesionales legales con amplia experiencia dedicados a brindarle representación excepcional y atención personalizada.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {attorneys.map((attorney, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="relative overflow-hidden bg-gray-200 aspect-[4/3]">
                {/* Replace with actual image: 
                <img 
                  src={attorney.imagePlaceholder} 
                  alt={attorney.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                /> 
                */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                  <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Name and Position */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {attorney.name}
                </h3>
                <p className="text-amber-600 font-medium">
                  {attorney.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
