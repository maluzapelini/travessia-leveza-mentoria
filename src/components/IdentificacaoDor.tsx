import React from 'react';
import { Moon, Flame, Compass } from 'lucide-react';

const IdentificacaoDor = () => {
  const cards = [
    {
      icon: Moon,
      title: "Corpo cansado, mente acelerada",
      text: "Dificuldade de desligar, sono leve, culpa ao descansar."
    },
    {
      icon: Flame,
      title: "Autocobrança que sufoca",
      text: "Você exige de si o que não exigiria de ninguém."
    },
    {
      icon: Compass,
      title: "Perda de direção",
      text: "Tantas demandas que você não se reconhece mais."
    }
  ];

  return (
    <section id="dor" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-h2 text-bordeaux mb-4">
            Se reconhecer é o primeiro passo
          </h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Você se sente exausta, no automático, sem espaço para si? Essa página é para você.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const animationDelay = index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-300' : 'animate-delay-500';
            return (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-elegant hover:shadow-lg transition-all duration-300 text-center group animate-scale-in ${animationDelay}`}
              >
                <div className="w-16 h-16 bg-bordeaux/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-bordeaux/20 transition-colors animate-float">
                  <IconComponent className="w-8 h-8 text-bordeaux group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-h3 text-bordeaux mb-4">
                  {card.title}
                </h3>
                <p className="text-body text-gray-600">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IdentificacaoDor;