import SubTitleMotivation from './subtitle-motivation';
import TitleMotivation from './title-motivation';

export default function MotivationSection() {
  return (
    <section
      className="w-full h-75
        bg-[url('./assets/images/background-diamont.png')]
        bg-cover bg-center bg-no-repeat
        mx-auto flex flex-col items-center lg:items-start"
    >
      <TitleMotivation />
      <SubTitleMotivation />
    </section>
  );
}
