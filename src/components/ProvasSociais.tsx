import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ProvasSociais = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Patrícia, 47",
      quote: "Voltei a dormir e a dizer não sem culpa. A Malu me ajudou a entender que cuidar de mim não é egoísmo."
    },
    {
      name: "Renata, 42", 
      quote: "Aprendi a desacelerar sem me sentir fracassando. Hoje consigo respirar entre uma tarefa e outra."
    },
    {
      name: "Carolina, 51",
      quote: "Voltei a me ver com carinho — e isso mudou tudo. Minha família também percebeu a diferença."
    },
    {
      name: "Fernanda, 46",
      quote: "Finalmente entendi que não preciso ser perfeita para ser boa mãe, esposa e profissional."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="provas" className="section-padding bg-bordeaux text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white mb-4">
            Histórias reais de transformação
          </h2>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
            <span className="ml-2 text-white/90 font-medium">4.9/5</span>
          </div>
          <p className="text-white/80 text-sm">Baseado em 132 avaliações</p>
        </div>
        
        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center min-h-[200px] flex items-center">
            <div className="w-full">
              <blockquote className="text-xl md:text-2xl font-accent italic mb-6 text-white">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <cite className="text-gold font-medium text-lg">
                — {testimonials[currentIndex].name}
              </cite>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gold' : 'bg-white/40'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvasSociais;