import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button-custom';

const FAQ = () => {
  const faqs = [
    {
      q: "Qual a duração da mentoria?",
      a: "A mentoria tem duração de 3 meses, com encontros semanais de 90 minutos e materiais de apoio assíncronos para consolidar o aprendizado entre as sessões."
    },
    {
      q: "É terapia?",
      a: "É uma mentoria com base terapêutica, focada em ferramentas práticas e direcionamento. Não substitui psicoterapia formal quando há necessidade de acompanhamento clínico mais intensivo."
    },
    {
      q: "Como são os encontros?",
      a: "Os encontros são online, ao vivo, em formato de grupo pequeno (máximo 8 participantes). Também há sessões individuais pontuais conforme a necessidade de cada participante."
    },
    {
      q: "Posso sair antes do prazo?",
      a: "Você pode sair quando quiser, mas incentivamos fortemente que complete as 12 semanas para consolidar os ganhos e criar mudanças duradouras em sua rotina."
    },
    {
      q: "Qual o investimento?",
      a: "O valor será informado durante a chamada de acolhimento, pois pode variar conforme sua situação. Oferecemos opções de parcelamento para facilitar o acesso."
    },
    {
      q: "Como sei se vou conseguir me comprometer?",
      a: "Durante nossa conversa inicial, vamos avaliar juntas se este é o momento ideal para você. O compromisso principal é dedicar 2-3 horas por semana para os encontros e atividades."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-bordeaux mb-4">
              Perguntas frequentes
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-200 px-6"
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
          
          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-2xl p-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;