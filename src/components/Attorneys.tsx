interface Attorney {
  name: string;
  position: string;
  imagePlaceholder: string;
}

const Attorneys = () => {
  const attorneys: Attorney[] = [
    {
      name: "James Richardson",
      position: "Senior Partner & Founder",
      imagePlaceholder: "/images/attorney-1.jpg"
    },
    {
      name: "Sarah Mitchell",
      position: "Managing Partner",
      imagePlaceholder: "/images/attorney-2.jpg"
    },
    {
      name: "Michael Chen",
      position: "Senior Attorney",
      imagePlaceholder: "/images/attorney-3.jpg"
    },
    {
      name: "Emily Thompson",
      position: "Associate Attorney",
      imagePlaceholder: "/images/attorney-4.jpg"
    }
  ];

  return (
    <section id="attorneys" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Meet Our Attorneys
          </h2>
          <p className="text-gray-600 text-lg">
            Our team of experienced legal professionals is dedicated to providing 
            you with exceptional representation and personalized attention.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney, index) => (
            <div 
              key={index}
              className="group"
            >
              {/* Image Placeholder */}
              <div className="relative overflow-hidden rounded-lg mb-6 bg-gray-200 aspect-[3/4]">
                {/* Replace with actual image: 
                <img 
                  src={attorney.imagePlaceholder} 
                  alt={attorney.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                /> 
                */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-amber-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-50 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-50 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Name and Position */}
              <h3 className="text-xl font-bold text-slate-800 mb-1">
                {attorney.name}
              </h3>
              <p className="text-amber-600 font-medium">
                {attorney.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
