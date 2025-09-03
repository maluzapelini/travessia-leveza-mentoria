import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button-custom';

const ProvasSociais = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Voltei a dormir e a dizer não sem culpa. A Malu me ajudou a entender que cuidar de mim não é egoísmo.",
      author: "Mulher, 47 anos"
    },
    {
      quote: "Aprendi a desacelerar sem me sentir fracassando. Hoje consigo respirar entre uma tarefa e outra.",
      author: "Mulher, 42 anos"
    },
    {
      quote: "Voltei a me ver com carinho — e isso mudou tudo. Minha família também percebeu a diferença.",
      author: "Mulher, 51 anos"
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
        <div className="text-center mb-16 animate-fade-up">
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
          <p className="text-white/80 text-sm">Baseado em avaliações reais</p>
        </div>
        
        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center min-h-[200px] flex items-center">
            <div className="w-full">
              <blockquote className="text-xl md:text-2xl font-accent italic mb-6 text-white">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <cite className="text-gold font-medium text-lg">
                — {testimonials[currentIndex].author}
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

        {/* CTA */}
        <div className="text-center animate-fade-up animate-delay-500">
          <Button variant="hero" size="lg" className="bg-gold text-bordeaux hover:bg-gold-600" asChild>
            <a href="#form" className="flex items-center gap-2">
              Quero ser vista
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProvasSociais;