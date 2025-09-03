import React from 'react';
import { Button } from '@/components/ui/button-custom';
import { ArrowRight, Shield, Award, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-malu.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6 animate-slide-in-left">
            <div className="w-12 h-0.5 bg-gold animate-scale-in animate-delay-300" />
            <span className="text-gold text-sm font-accent italic tracking-wide animate-fade-in animate-delay-100" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.2)' }}>
              Mentoria para Mulheres 40+
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-h1 text-white mb-6 animate-fade-up" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            Eu Te Vejo, Mulher — A Travessia da Exaustão para a Leveza
          </h1>
          
          {/* Subtitle */}
          <p className="text-lead text-white/90 mb-8 max-w-2xl animate-fade-up animate-delay-200" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
            Um espaço para mulheres 40+ cansadas encontrarem descanso, dignidade e esperança em 3 meses.
          </p>
          
          {/* Bullets */}
          <ul className="space-y-3 mb-8 text-white/90">
            <li className="flex items-start gap-3 animate-fade-up animate-delay-300">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse-soft" />
              <span className="text-body" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>Sem fórmulas mágicas — direção terapêutica e prática.</span>
            </li>
            <li className="flex items-start gap-3 animate-fade-up animate-delay-500">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse-soft" />
              <span className="text-body" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>Ferramentas semanais com acompanhamento.</span>
            </li>
            <li className="flex items-start gap-3 animate-fade-up animate-delay-700">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0 animate-pulse-soft" />
              <span className="text-body" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>Suporte acolhedor e firme para retomar sua força.</span>
            </li>
          </ul>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up animate-delay-500">
            <Button variant="hero" size="lg" asChild className="animate-bounce-subtle bg-gold text-bordeaux hover:bg-gold-600">
              <a href="#form" className="flex items-center gap-2">
                Quero fazer a Travessia
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10 animate-scale-in animate-delay-300" asChild>
              <a href="#estrutura">Como funciona</a>
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap gap-6 text-sm text-white/80 animate-fade-up animate-delay-700">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span>Atuação ética (CRP12: 07082)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span>16+ anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-gold" />
              <span>Abordagem acolhedora e firme</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;