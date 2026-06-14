import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Concept from '@/components/Concept';
import System from '@/components/System';
import Difference from '@/components/Difference';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import WhoWeServe from '@/components/WhoWeServe';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Concept />
      <System />
      <Difference />
      <Benefits />
      <Process />
      <WhoWeServe />
      <ContactForm source="home" />
    </>
  );
}
