import React from 'react';
import { FileText, Calendar, Headphones, TrendingUp } from 'lucide-react';

const ComoFunciona = () => {
  const steps = [
    {
      n: 1,
      icon: FileText,
      title: "Avaliação Inicial",
      text: "Questionário + chamada de acolhimento para entender seu momento."
    },
    {
      n: 2,
      icon: Calendar,
      title: "Plano de Travessia (3 meses)",
      text: "Encontros semanais + tarefas viáveis + acompanhamento."
    },
    {
      n: 3,
      icon: Headphones,
      title: "Ferramentas de Suporte",
      text: "Áudios terapêuticos, check-ins e material de apoio."
    },
    {
      n: 4,
      icon: TrendingUp,
      title: "Revisão e Próximos Passos",
      text: "Consolidação de ganhos e plano de manutenção."
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-bordeaux mb-4">
            Como funciona na prática
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.n} className="flex gap-6">
                  <div className="w-12 h-12 bg-bordeaux text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.n}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-5 h-5 text-gold" />
                      <h3 className="text-h3 text-bordeaux">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-body text-gray-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Aside Info */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <div className="inline-flex items-center gap-2 bg-gold/20 text-bordeaux px-3 py-1 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-gold rounded-full" />
                Vagas limitadas
              </div>
              
              <h3 className="text-h3 text-bordeaux mb-4">
                Formato da Mentoria
              </h3>
              
              <p className="text-body text-gray-600 mb-6">
                Mentoria em grupo pequeno + encontros 1:1 pontuais conforme necessidade.
              </p>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Máximo 8 participantes por turma</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Encontros online ao vivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Material de apoio exclusivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Suporte entre sessões</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;