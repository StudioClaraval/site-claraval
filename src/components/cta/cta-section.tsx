import HeroCta from './hero-cta';
import SubtitleCta from './subtile-cta';
import TitleCta from './title-cta';

export default function CTASection() {
  return (
    <section
      className="flex flex-col min-h-125.5 w-full 
      bg-[url('./assets/images/background-cta.png')] bg-cover bg-top 
      bg-no-repeat relative sm:min-h-212 lg:min-h-300"
    >
      <div className="max-w-384 mx-auto w-full flex flex-col flex-1 px-6 lg:px-30">
        <TitleCta />
        <SubtitleCta />
        <HeroCta />
      </div>
    </section>
  );
}
