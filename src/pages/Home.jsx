import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { AppPreview } from '../components/sections/AppPreview';
import { Services } from '../components/sections/Services';
import { PreviousProjects } from '../components/sections/PreviousProjects';
import { TechStack } from '../components/sections/TechStack';
import { AuroraStats } from '../components/sections/AuroraStats';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { Team } from '../components/sections/Team';

export const Home = () => {
  return (
    <div className="relative" style={{ backgroundColor: '#0c0c14' }}>
      <Header />
      {/* z-[1] + opaque bg acts as the curtain that slides away to reveal the sticky footer */}
      <main className="relative z-[1]" style={{ backgroundColor: '#0c0c14' }}>
        <Hero />
        <AppPreview />
        <Services />
        <PreviousProjects />
        <TechStack />
        <AuroraStats />
        <Process />
        <Testimonials />
        <Team />
      </main>

      {/* Footer pinned behind the curtain — sticks to bottom at z-0 */}
      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </div>
  );
};
