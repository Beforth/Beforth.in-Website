import HeroTransformationBg from '../bg/HeroTransformationBg';
import { ServicesOverviewSection } from './ServicesOverviewSection';

export function ServicesHeroSection() {
  return (
    <section className="relative min-h-0 py-16 md:py-24 bg-stone-50">
      <HeroTransformationBg />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesOverviewSection />
      </div>
    </section>
  );
}
