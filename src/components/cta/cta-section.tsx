import HeroCta from './hero-cta';
import SubtitleCta from './subtile-cta';
import TitleCta from './title-cta';

export default function CTASection() {
  return (
    <section className="h-125.5 w-full bg-[url('./assets/images/background-cta.png')] bg-cover bg-center bg-no-repeat mt-2 relative sm:h-212 lg:h-300">
      <div className="max-w-384 mx-auto w-full h-full px-6 lg:px-30">
        <TitleCta />
        <SubtitleCta />
        <HeroCta />
      </div>
    </section>
  );
}
