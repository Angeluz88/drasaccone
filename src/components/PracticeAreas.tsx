interface PracticeArea {
  icon: string;
  title: string;
  description: string;
}

const PracticeAreas = () => {
  const practiceAreas: PracticeArea[] = [
    {
      icon: "⚖️",
      title: "Criminal Defense",
      description: "Aggressive representation for those facing criminal charges. We protect your rights and fight for the best possible outcome."
    },
    {
      icon: "🏢",
      title: "Corporate Law",
      description: "Comprehensive legal solutions for businesses of all sizes. From formation to litigation, we've got you covered."
    },
    {
      icon: "👨‍👩‍👧",
      title: "Family Law",
      description: "Compassionate guidance through divorce, custody, and other family matters. We help you navigate difficult times."
    },
    {
      icon: "🚗",
      title: "Personal Injury",
      description: "Fighting for fair compensation when you've been injured due to someone else's negligence."
    },
    {
      icon: "🏠",
      title: "Real Estate Law",
      description: "Expert advice on property transactions, disputes, and zoning issues. Protecting your real estate investments."
    },
    {
      icon: "💼",
      title: "Employment Law",
      description: "Representing both employers and employees in workplace disputes, discrimination cases, and contract negotiations."
    }
  ];

  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Our Practice Areas
          </h2>
          <p className="text-gray-600 text-lg">
            We offer comprehensive legal services across multiple areas of law. 
            Our experienced attorneys are ready to help you with your specific needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-amber-600 transition-colors">
                <span className="group-hover:filter group-hover:brightness-0 group-hover:invert">{area.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {area.description}
              </p>

              {/* Learn More Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
