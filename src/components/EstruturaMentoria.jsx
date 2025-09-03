import React from 'react';
import { Play, Users, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button-custom';

const EstruturaMentoria = () => {
  const steps = [
    {
      icon: Play,
      title: "6 Aulas Gravadas",
      description: "Conteúdo terapêutico estruturado para assistir no seu ritmo",
      details: "Módulos de 45-60min cada"
    },
    {
      icon: Users,
      title: "6 Encontros ao Vivo",
      description: "Sessões quinzenais em grupo para prática e acolhimento",
      details: "90min por encontro"
    },
    {
      icon: FileText,
      title: "PDFs de Apoio",
      description: "Materiais práticos para aplicar no dia a dia",
      details: "Exercícios e reflexões"
    },
    {
      icon: MessageCircle,
      title: "Círculo de Escuta",
      description: "Grupo privado para compartilhar e receber apoio",
      details: "Suporte contínuo"
    }
  ];

  return (
    <section id="estrutura" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-h2 text-bordeaux mb-4">
            Estrutura da Mentoria
          </h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Um programa completo de 3 meses para sua transformação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const animationDelay = index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-200' : index === 2 ? 'animate-delay-300' : 'animate-delay-500';
            return (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 group animate-scale-in ${animationDelay}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bordeaux/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-bordeaux/20 transition-colors animate-bounce-subtle">
                    <IconComponent className="w-6 h-6 text-bordeaux group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 text-bordeaux mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body text-gray-600 mb-2">
                      {step.description}
                    </p>
                    <span className="text-small text-gold font-medium">
                      {step.details}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Visual */}
        <div className="bg-white rounded-2xl p-8 shadow-elegant mb-12 animate-fade-up animate-delay-300">
          <h3 className="text-h3 text-bordeaux mb-6 text-center">
            Sua jornada de 3 meses
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { month: "Mês 1", focus: "Reconhecimento e Acolhimento", desc: "Entender padrões e criar base segura" },
              { month: "Mês 2", focus: "Ferramentas e Prática", desc: "Implementar mudanças sustentáveis" },
              { month: "Mês 3", focus: "Integração e Autonomia", desc: "Consolidar aprendizados e próximos passos" }
            ].map((phase, index) => {
              const animationDelay = index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-300' : 'animate-delay-500';
              return (
                <div key={index} className={`text-center animate-slide-in-left ${animationDelay}`}>
                  <div className="w-16 h-16 bg-bordeaux text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold animate-scale-in">
                    {index + 1}
                  </div>
                  <h4 className="font-heading font-semibold text-bordeaux mb-2">
                    {phase.month}
                  </h4>
                  <p className="font-medium text-gray-800 mb-2">
                    {phase.focus}
                  </p>
                  <p className="text-small text-gray-600">
                    {phase.desc}
                  </p>
                </div>
              );
            })}
          </div>
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

export default EstruturaMentoria;