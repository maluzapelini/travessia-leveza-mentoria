import React from 'react';
import { Shield, MessageCircle, Zap } from 'lucide-react';
import maluPortrait from '@/assets/malu-portrait.jpg';

const SobreMalu = () => {
  const highlights = [
    {
      icon: Shield,
      text: "Atuação ética e baseada em evidências."
    },
    {
      icon: MessageCircle,
      text: "Comunicação acolhedora, clara e prática."
    },
    {
      icon: Zap,
      text: "Integra ferramentas modernas de suporte."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={maluPortrait}
                alt="Malu Zapelini, psicóloga especializada em saúde emocional feminina"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-bordeaux px-4 py-2 rounded-xl font-medium text-sm shadow-lg">
                CRP12: 07082
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-h2 text-bordeaux mb-6">
              Quem conduz sua travessia
            </h2>
            
            <div className="bg-bordeaux/5 rounded-xl p-6 mb-8">
              <p className="text-body text-bordeaux font-medium mb-2">
                Malu Zapelini
              </p>
              <p className="text-body text-gray-600">
                Psicóloga (CRP12: 07082), 16+ anos de experiência, especialista em saúde emocional feminina.
              </p>
            </div>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-bordeaux" />
                    </div>
                    <p className="text-body text-gray-600 pt-1">
                      {highlight.text}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl border border-gold/20">
              <p className="text-small text-gray-600 italic">
                "Minha missão é acompanhar mulheres na reconexão com sua força interior, oferecendo direção clara e acolhimento genuíno neste processo de transformação."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMalu;