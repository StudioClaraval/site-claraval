import SubTitleMotivation from './subtitle-motivation';
import TitleMotivation from './title-motivation';

export default function MotivationSection() {
  return (
    <section
      className="w-full h-75
        bg-[url('./assets/images/background-diamont.png')]
        bg-cover bg-center bg-no-repeat
        rounded-b-[20px]
        sm:h-82
        lg:bg-[url('./assets/images/background-diamont-tablet.png')]
        lg:bg-center lg:h-155"
    >
      <div className="max-w-[1536px] mx-auto w-full flex flex-col items-center">
        <TitleMotivation />
        <SubTitleMotivation />
      </div>
    </section>
  );
}
