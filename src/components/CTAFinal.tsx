import React from 'react';
import { Button } from '@/components/ui/button-custom';
import { ArrowRight, Heart } from 'lucide-react';

const CTAFinal = () => {
  return (
    <section id="cta-final" className="section-padding bg-gradient-to-br from-bordeaux via-bordeaux-700 to-bordeaux-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-gold" />
            </div>
          </div>
          
          <h2 className="text-h1 text-white mb-6">
            É hora de se ver com carinho — e direção.
          </h2>
          
          <p className="text-lead text-white/90 mb-8 max-w-2xl mx-auto">
            Dê o primeiro passo para recuperar sua força emocional.
          </p>
          
          <Button variant="hero" size="lg" className="bg-gold text-bordeaux hover:bg-gold-600" asChild>
            <a href="#form" className="flex items-center gap-2">
              Entrar na lista de espera
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          
          <p className="text-small text-white/70 mt-6">
            Vagas limitadas • Próxima turma em breve
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;