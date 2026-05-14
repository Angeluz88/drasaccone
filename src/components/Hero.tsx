const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Replace with your image: <img src="/path/to/your/hero-image.jpg" className="w-full h-full object-cover opacity-50" alt="Law office" /> */}
        <div className="w-full h-full bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-amber-600/20 border border-amber-600/30 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 font-semibold text-sm">TRUSTED & EXPERIENCED</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            We Fight For Your
            <span className="text-amber-500 block">Legal Rights</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Our team of experienced attorneys is dedicated to providing you with 
            the best legal representation. We understand the challenges you face 
            and are here to help you navigate through difficult times.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-amber-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-amber-700 transition-colors text-center"
            >
              Free Consultation
            </a>
            <a 
              href="#practice-areas" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Our Practice Areas
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500">25+</div>
              <div className="text-gray-400 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500">5000+</div>
              <div className="text-gray-400 text-sm mt-1">Cases Won</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500">98%</div>
              <div className="text-gray-400 text-sm mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
