import SubTitleMotivation from './subtitle-motivation';
import TitleMotivation from './title-motivation';

export default function MotivationSection() {
  return (
    <section
      className="w-full h-75
        bg-[url('./assets/images/background-diamont.png')]
        bg-cover max-lg:bg-center mx-lg:bg-no-repeat
        mx-auto flex flex-col items-center
        rounded-b-[20px]
        sm:h-82
        lg:bg-[url('./assets/images/background-diamont-tablet.png')]
        lg:bg-cover lg:h-[620px]"
    >
      <TitleMotivation />
      <SubTitleMotivation />
    </section>
  );
}
