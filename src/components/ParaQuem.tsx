import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const ParaQuem = () => {
  const positive = [
    "Tem 40+ e sente que perdeu a leveza do dia a dia.",
    "Quer direção com acolhimento, sem papo raso.",
    "Topa pequenas ações consistentes."
  ];

  const negative = [
    "Procura solução mágica sem compromisso.",
    "Não está disposta a olhar para si com honestidade."
  ];

  return (
    <section id="para-quem" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-bordeaux mb-4">
            É para você se…
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Positive */}
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-h3 text-green-800">
                É para você
              </h3>
            </div>
            
            <ul className="space-y-4">
              {positive.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-green-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Negative */}
          <div className="bg-red-50 rounded-2xl p-8">
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
      </div>
    </section>
  );
};

export default ParaQuem;