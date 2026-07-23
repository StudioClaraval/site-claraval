import HeroCta from './hero-cta';
import SubtitleCta from './subtile-cta';
import TitleCta from './title-cta';

export default function CTASection() {
  return (
    <section className="h-125.5 bg-[url('./assets/images/background-cta.png')] bg-cover mx-6 mt-2 relative sm:h-212 lg:h-300 lg:mx-30">
      <TitleCta />
      <SubtitleCta />
      <HeroCta />
    </section>
  );
}
