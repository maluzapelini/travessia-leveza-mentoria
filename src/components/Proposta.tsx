import React from 'react';
import { Sparkles, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button-custom';

const Proposta = () => {
  const pillars = [
    {
      icon: Sparkles,
      name: "Clareza",
      desc: "Mapeamos seu momento e definimos prioridades reais."
    },
    {
      icon: Heart,
      name: "Apoio",
      desc: "Acolhimento com firmeza: sem julgamentos, com direção."
    },
    {
      icon: CheckCircle,
      name: "Prática",
      desc: "Rotinas simples, possíveis e sustentáveis."
    }
  ];

  return (
    <section id="proposta" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-h2 text-bordeaux mb-4">
            A Travessia
          </h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Da exaustão à leveza com direção e acolhimento
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Pillars */}
          <div className="space-y-8 animate-slide-in-left">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const animationDelay = index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-300' : 'animate-delay-500';
              return (
                <div key={index} className={`flex items-start gap-4 group animate-fade-up ${animationDelay}`}>
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors animate-bounce-subtle">
                    <IconComponent className="w-6 h-6 text-bordeaux group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-h3 text-bordeaux mb-2">
                      {pillar.name}
                    </h3>
                    <p className="text-body text-gray-600">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
            
            <div className="pt-6 animate-fade-up animate-delay-700">
              <Button variant="secondary" size="lg" asChild className="animate-bounce-subtle">
                <a href="#como-funciona" className="flex items-center gap-2">
                  Ver como funciona
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right: Timeline Visual */}
          <div className="bg-gradient-to-br from-bordeaux to-bordeaux-700 rounded-3xl p-8 text-white animate-slide-in-right">
            <h3 className="text-h3 mb-8 text-center animate-fade-in">
              Sua jornada em 4 etapas
            </h3>
            <div className="space-y-6">
              {[
                "Avaliação e acolhimento inicial",
                "Plano personalizado de 3 meses",
                "Encontros semanais + ferramentas",
                "Consolidação e próximos passos"
              ].map((step, index) => {
                const animationDelay = index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-200' : index === 2 ? 'animate-delay-300' : 'animate-delay-500';
                return (
                  <div key={index} className={`flex items-center gap-4 animate-slide-in-right ${animationDelay}`}>
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-bordeaux font-bold text-sm animate-scale-in">
                      {index + 1}
                    </div>
                    <span className="text-white/90">{step}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposta;