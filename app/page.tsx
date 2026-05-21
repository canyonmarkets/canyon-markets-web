import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import WhoWeServe from '@/components/WhoWeServe';
import WhatWeInstall from '@/components/WhatWeInstall';
import HowItWorks from '@/components/HowItWorks';
import WhyUs from '@/components/WhyUs';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <WhoWeServe />
      <WhatWeInstall />
      <HowItWorks />
      <WhyUs />
      <ContactForm />
    </>
  );
}
