interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Robert Johnson",
      role: "Business Owner",
      content: "The team at LawEx provided exceptional legal guidance for my business. Their expertise in corporate law saved us from a potentially devastating lawsuit. Highly recommended!",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Personal Injury Client",
      content: "After my accident, I didn't know where to turn. The attorneys at LawEx fought tirelessly for my rights and secured a settlement that exceeded my expectations.",
      rating: 5
    },
    {
      name: "David Williams",
      role: "Criminal Defense Client",
      content: "I was facing serious charges and felt hopeless. LawEx's criminal defense team built a strong case and got the charges dismissed. They truly care about their clients.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experience with our firm.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-8 rounded-lg border border-slate-700"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
