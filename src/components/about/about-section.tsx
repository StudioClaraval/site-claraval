import AboutHero from './about-hero';
import TitleAbout from './title-about';

export default function AboutSection() {
  return (
    <section className="mt-5.5 flex-flex-col items-center mx-12 sm:mx-20 lg:mx-35 lg:mt-15 xl:mx-60">
      <TitleAbout />
      <AboutHero />
    </section>
  );
}
