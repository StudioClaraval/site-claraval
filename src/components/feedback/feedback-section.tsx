import HeroFeedback from './hero-feedback';
import TitleFeedback from './title-feedback';

export default function FeedbackSection() {
  return (
    <section className="relative w-full">
      <div
        className="bg-[url('./assets/images/background-feedback.png')]
       bg-cover bg-top pb-24 -mb-24
       lg:bg-[url('./assets/images/background-feedback-desktop.png')]"
      >
        <div className="max-w-[1536px] mx-auto w-full">
          <TitleFeedback />
          <HeroFeedback />
        </div>
      </div>
    </section>
  );
}
