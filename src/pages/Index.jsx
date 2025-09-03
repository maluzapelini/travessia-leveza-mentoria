import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OQueVaiViver from '@/components/OQueVaiViver';
import EstruturaMentoria from '@/components/EstruturaMentoria';
import ParaQuem from '@/components/ParaQuem';
import ProvasSociais from '@/components/ProvasSociais';
import FAQ from '@/components/FAQ';
import FormularioCaptura from '@/components/FormularioCaptura';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OQueVaiViver />
        <EstruturaMentoria />
        <ParaQuem />
        <ProvasSociais />
        <FAQ />
        <FormularioCaptura />
      </main>
      <Footer />
    </>
  );
};

export default Index;