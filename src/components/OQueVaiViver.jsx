import React from 'react';
import { Heart, Brain, Sparkles, Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button-custom';

const OQueVaiViver = () => {
  const cards = [
    {
      icon: Heart,
      title: "Física",
      description: "Reconectar com seu corpo, estabelecer limites saudáveis e criar rotinas de autocuidado sustentáveis.",
      color: "from-red-50 to-pink-50",
      iconColor: "text-red-600"
    },
    {
      icon: Brain,
      title: "Emocional", 
      description: "Acolher suas emoções sem julgamento, desenvolver autocompaixão e fortalecer sua autoestima.",
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Sparkles,
      title: "Espiritual",
      description: "Reencontrar seu propósito, valores essenciais e conexão com algo maior que você.",
      color: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Compass,
      title: "Existencial",
      description: "Redefinir prioridades, criar significado nas suas escolhas e construir uma vida alinhada.",
      color: "from-emerald-50 to-green-50",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section id="viver" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-h2 text-bordeaux mb-4">
            O que você vai viver na Travessia
          </h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Transformação integral em 4 dimensões da sua vida
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const animationDelay = index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-200' : index === 2 ? 'animate-delay-300' : 'animate-delay-500';
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 group animate-scale-in ${animationDelay}`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-float">
                  <IconComponent className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="text-h3 text-bordeaux mb-3">
                  {card.title}
                </h3>
                <p className="text-body text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up animate-delay-700">
          <Button variant="primary" size="lg" asChild>
            <a href="#form" className="flex items-center gap-2">
              Quero fazer a Travessia
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OQueVaiViver;