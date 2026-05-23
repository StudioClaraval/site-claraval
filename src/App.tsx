import Button from './components/button';
import LogoIcon from './assets/images/logo.svg?react';
import LogoTabletIcon from './assets/images/logo-tablet.svg?react';
import FlechaIcon from './assets/icons/flecha.svg?react';
import Headline from './components/headline';
import Subtitle from './components/subtitle';

export default function App() {
  return (
    <main
      className="
      w-full min-h-screen
      bg-[url('./assets/images/background-principal.png')]
      md:bg-[url('./assets/images/background-principal-tablet.png')]
      bg-cover bg-top
      mx-auto flex flex-col items-center
    "
    >
      <div className="mt-10 sm:mt-16">
        <LogoIcon className="block md:hidden" />
        <LogoTabletIcon className="hidden md:block" />
      </div>
      <Headline />
      <Subtitle />
      <Button
        icon={FlechaIcon}
        type="button"
        className="
          border border-[#A180EC] rounded-[3px] md:rounded-[5px] md:w-full md:max-w-74
          mt-2.5 sm:mt-4
          font-inter text-white
          p-2 text-[10px]
          bg-[#A180EC]/80
          shadow-[0_0_2.776px_0_#A180EC] md:shadow-[0_0_4.494px_0_A180EC]
          sm:h-8 sm:text-xs sm:p-3 sm:gap-1.5 md:h-11 md:text-[16px]
        "
      >
        Sua nova agência está aqui
      </Button>
    </main>
  );
}
