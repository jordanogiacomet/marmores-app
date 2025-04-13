import { MainTemplate } from '../../templates/MainTemplate';
import { HeroSection } from '../../components/HeroSection';
import { AboutSection } from '../../components/AboutSection';
import { ServicesList } from '../../components/ServiceList';
import { MinimalistSection } from '../../components/MinimalistSection';
import { BancadaSection } from '../../components/BancadaSection';
import { MultiPhotosSection } from '../../components/MultiPhotoSection';
import { WorkDoneSection } from '../../components/WorkDoneSection';
import { BudgetSection } from '../../components/BudgetSection';
import { ContactSection } from '../../components/ContactSection';

export function Home() {
  return (
    <MainTemplate>
      <HeroSection />
      <AboutSection />
      <ServicesList />
      <MinimalistSection />
      <BancadaSection />
      <MultiPhotosSection />
      <WorkDoneSection />
      <BudgetSection />
      <ContactSection />
    </MainTemplate>
  );
}
