import React from 'react';
import Head from 'next/head';
import { WavyBackgroundDemo } from './components/features/WavyBackground';
import { TracingBeamDemo } from './components/features/TracingBeam';
import { ThreeDCardDemo } from './components/features/3d-cardComp';
import { SignupFormDemo } from './components/features/ContactForm';
import { Footer } from './footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Juan I</title>
        <link rel="icon" href="/image/favicon.png" />
      </Head>
      <header className="absolute top-0 right-0 z-50 m-4">
        {/* Contenido del header aquí */}
      </header>
      <main className="pt-24">
        <WavyBackgroundDemo />
        <TracingBeamDemo />
        <h2 className="text-2xl font-bold text-center mt-12">Projects</h2>
        <ThreeDCardDemo />
        <SignupFormDemo />
      </main>
      <Footer />
    </div>
  );
}
