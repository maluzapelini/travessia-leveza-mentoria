import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button-custom';

const FAQ = () => {
  const faqs = [
    {
      q: "Qual a duração da mentoria?",
      a: "A mentoria tem duração de 3 meses, com 6 aulas gravadas e 6 encontros ao vivo quinzenais, além de materiais de apoio."
    },
    {
      q: "É terapia?",
      a: "É uma mentoria com base terapêutica, focada em ferramentas práticas e direcionamento. Não substitui psicoterapia quando há necessidade clínica."
    },
    {
      q: "Como são os encontros?",
      a: "Os encontros são online, ao vivo, em formato de grupo pequeno. Também há o círculo de escuta para apoio contínuo."
    },
    {
      q: "Qual o investimento?",
      a: "O valor será informado durante a chamada de acolhimento. Oferecemos opções de parcelamento para facilitar o acesso."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-h2 text-bordeaux mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-lead text-gray-600">
              Esclarecemos suas principais dúvidas
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-200 px-6 shadow-soft hover:shadow-elegant transition-shadow"
              >
                <AccordionTrigger className="text-left text-bordeaux font-medium hover:text-bordeaux-700">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-body">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-bordeaux" />
                <h3 className="text-h3 text-bordeaux">
                  Ainda tem dúvidas?
                </h3>
              </div>
              <p className="text-body text-gray-600 mb-6">
                Entre em contato conosco e teremos prazer em esclarecer qualquer questão.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:contato@maluzapelini.com.br">
                  Fale com a equipe
                </a>
              </Button>
            </div>

            {/* CTA */}
            <Button variant="primary" size="lg" asChild>
              <a href="#form" className="flex items-center gap-2">
                Quero fazer a Travessia
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;