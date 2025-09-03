import React from 'react';
import { Mail, Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-heading font-bold text-2xl text-gold mb-2">
                Travessia Mulher
              </h3>
              <p className="text-gray-300 text-body max-w-md">
                Mentoria para mulheres 40+ que buscam reencontrar sua leveza e direção na vida.
              </p>
            </div>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p>Com Malu Zapelini</p>
              <p>CRP12: 07082</p>
              <p>16+ anos de experiência</p>
            </div>
          </div>
          
          {/* Mentoria */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">
              Mentoria
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#viver" className="hover:text-gold transition-colors link-underline">
                  O que você vai viver
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-gold transition-colors link-underline">
                  Estrutura
                </a>
              </li>
              <li>
                <a href="#para-quem" className="hover:text-gold transition-colors link-underline">
                  Para quem é
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold transition-colors link-underline">
                  Perguntas
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">
              Contato
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href="mailto:contato@maluzapelini.com.br" 
                  className="flex items-center gap-2 hover:text-gold transition-colors link-underline"
                >
                  <Mail className="w-4 h-4" />
                  E-mail
                </a>
              </li>
              <li>
                <a href="#form" className="hover:text-gold transition-colors link-underline">
                  Fazer a Travessia
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Badges */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span>LGPD Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-gold" />
              <span>Acolhimento Profissional</span>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Malu Zapelini. Todos os direitos reservados. CRP12: 07082.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacidade" className="hover:text-gold transition-colors link-underline">
                Privacidade
              </a>
              <a href="/termos" className="hover:text-gold transition-colors link-underline">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;