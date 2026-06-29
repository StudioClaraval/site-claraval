import DescriptionAbout from './description-about';
import TitleAbout from './title-about';

export default function AboutSection() {
  return (
    <section className="mt-5.5 flex-flex-col items-center mx-12">
      <TitleAbout />
      <DescriptionAbout />
    </section>
  );
}
