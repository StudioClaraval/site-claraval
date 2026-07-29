import AboutHero from './about-hero';
import TitleAbout from './title-about';

export default function AboutSection() {
  return (
    <section className="w-full mt-5.5 lg:mt-15">
      <div className="max-w-384 mx-auto w-full px-12 sm:px-20 lg:px-35 xl:px-60 2xl:px-80">
        <TitleAbout />
        <AboutHero />
      </div>
    </section>
  );
}
