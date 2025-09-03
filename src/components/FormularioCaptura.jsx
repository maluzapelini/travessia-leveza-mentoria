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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare form data with UTM parameters
      const submitData = {
        ...formData,
        utm_source: 'instagram',
        utm_medium: 'bio',
        utm_campaign: 'travessia-mulher',
        timestamp: new Date().toISOString()
      };

      // Simulate API call
      const response = await fetch('https://api.seudominio.com/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        // Fire conversion event (placeholder for Meta/Ads)
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Travessia Mulher',
            content_category: 'Mentoria'
          });
        }

        toast({
          title: "Pronto! Você será vista.",
          description: "Em breve entraremos em contato para sua chamada de acolhimento.",
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
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      toast({
        title: "Ops! Algo deu errado.",
        description: "Tente novamente ou entre em contato conosco.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.nome && formData.email && formData.consent;

  return (
    <section id="form" className="section-padding bg-bordeaux">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-h2 text-white mb-4">
              Quero fazer a Travessia
            </h2>
            <p className="text-lead text-white/90">
              Preencha o formulário e entraremos em contato em até 24h
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-elegant animate-scale-in">
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
                  aria-describedby="nome-error"
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
                  aria-describedby="email-error"
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
                  onCheckedChange={(checked) => handleChange('consent', checked)}
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
                className="w-full bg-gold text-bordeaux hover:bg-gold-600"
                disabled={isLoading || !isFormValid}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-bordeaux border-t-transparent" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero ser vista
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
              
              {/* Privacy Note */}
              <div className="bg-gray-50 rounded-xl p-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
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