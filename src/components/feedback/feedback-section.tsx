import HeroFeedback from './hero-feedback';
import TitleFeedback from './title-feedback';

export default function FeedbackSection() {
  return (
    <section className="relative">
      <div
        className="bg-[url('./assets/images/background-feedback.png')]
       bg-cover bg-top pb-24 -mb-24
       lg:bg-[url('./assets/images/background-feedback-desktop.png')]"
      >
        <TitleFeedback />
        <HeroFeedback />
      </div>
    </section>
  );
}
