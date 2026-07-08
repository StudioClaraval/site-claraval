import SubTitleMotivation from './subtitle-motivation';
import TitleMotivation from './title-motivation';

export default function MotivationSection() {
  return (
    <section
      className="w-full h-75
        bg-[url('./assets/images/background-diamont.png')]
        bg-cover bg-center bg-no-repeat
        mx-auto flex flex-col items-center
        rounded-b-[20px]"
    >
      <TitleMotivation />
      <SubTitleMotivation />
    </section>
  );
}
