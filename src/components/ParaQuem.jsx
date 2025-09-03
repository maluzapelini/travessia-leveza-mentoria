import React from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button-custom';

const ParaQuem = () => {
  const positive = [
    "Tem 40+ e sente que perdeu a leveza do dia a dia",
    "Quer direção com acolhimento, sem papo raso",
    "Está disposta a pequenas ações consistentes",
    "Busca um espaço seguro para se expressar"
  ];

  const negative = [
    "Procura solução mágica sem compromisso",
    "Não está disposta a olhar para si com honestidade"
  ];

  return (
    <section id="para-quem" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-h2 text-bordeaux mb-4">
            É para você se...
          </h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Reconheça-se neste perfil e dê o primeiro passo
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Positive */}
          <div className="bg-emerald-50 rounded-2xl p-8 animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-h3 text-emerald-800">
                É para você
              </h3>
            </div>
            
            <ul className="space-y-4">
              {positive.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-emerald-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Negative */}
          <div className="bg-red-50 rounded-2xl p-8 animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-h3 text-red-800">
                Não é para você
              </h3>
            </div>
            
            <ul className="space-y-4">
              {negative.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-red-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up animate-delay-500">
          <div className="bg-bordeaux/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-body text-bordeaux mb-6">
              Se você se reconheceu, este é o momento de dar o primeiro passo para sua transformação.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="#form" className="flex items-center gap-2">
                Quero ser vista
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuem;