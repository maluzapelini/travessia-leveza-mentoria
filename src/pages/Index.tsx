import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IdentificacaoDor from '@/components/IdentificacaoDor';
import Proposta from '@/components/Proposta';
import ComoFunciona from '@/components/ComoFunciona';
import ParaQuem from '@/components/ParaQuem';
import ProvasSociais from '@/components/ProvasSociais';
import SobreMalu from '@/components/SobreMalu';
import FAQ from '@/components/FAQ';
import FormularioCaptura from '@/components/FormularioCaptura';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IdentificacaoDor />
        <Proposta />
        <ComoFunciona />
        <ParaQuem />
        <ProvasSociais />
        <SobreMalu />
        <FAQ />
        <FormularioCaptura />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
};

export default Index;