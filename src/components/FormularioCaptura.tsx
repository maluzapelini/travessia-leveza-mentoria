import React, { useState } from 'react';
import { Button } from '@/components/ui/button-custom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FormularioCaptura = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    momento: '',
    consent: false
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Pronto! Você está na lista de espera.",
        description: "Em breve entraremos em contato com você.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        momento: '',
        consent: false
      });
    }, 2000);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="form" className="section-padding bg-bordeaux">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-white mb-4">
              Entrar na lista de espera
            </h2>
            <p className="text-lead text-white/90">
              Sem spam. Avisamos quando abrirem novas vagas.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-bordeaux font-medium">
                  Nome completo *
                </Label>
                <Input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                  required
                  className="h-12 border-gray-300 focus:border-gold focus:ring-gold/20"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-bordeaux font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="h-12 border-gray-300 focus:border-gold focus:ring-gold/20"
                  placeholder="seu@email.com"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-bordeaux font-medium">
                  WhatsApp (opcional)
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => handleChange('whatsapp', e.target.value)}
                  className="h-12 border-gray-300 focus:border-gold focus:ring-gold/20"
                  placeholder="+55 (11) 99999-9999"
                />
              </div>

              {/* Momento */}
              <div className="space-y-2">
                <Label htmlFor="momento" className="text-bordeaux font-medium">
                  Qual é seu maior desafio hoje? (opcional)
                </Label>
                <Textarea
                  id="momento"
                  rows={4}
                  value={formData.momento}
                  onChange={(e) => handleChange('momento', e.target.value)}
                  className="border-gray-300 focus:border-gold focus:ring-gold/20 resize-none"
                  placeholder="Compartilhe um pouco sobre seu momento atual..."
                />
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleChange('consent', checked as boolean)}
                  className="mt-1 border-gray-300 data-[state=checked]:bg-bordeaux data-[state=checked]:border-bordeaux"
                  required
                />
                <Label 
                  htmlFor="consent" 
                  className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                >
                  Autorizo o uso dos meus dados para contato conforme a LGPD. *
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isLoading || !formData.consent || !formData.nome || !formData.email}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero entrar na lista de espera
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
              
              {/* Privacy Note */}
              <div className="bg-gray-50 rounded-xl p-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-small text-gray-600">
                    <p className="font-medium text-gray-800 mb-1">Seus dados estão seguros</p>
                    <p>Tratamos seus dados conforme a LGPD. Sem spam, nem compartilhamento com terceiros.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioCaptura;