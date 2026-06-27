import LogoIcon from '../assets/images/logo.svg?react';
import LogoTabletIcon from '../assets/images/logo-tablet.svg?react';
import LogoDesktopIcon from '../assets/images/logo-desktop.svg?react';
import FlechaIcon from '../assets/icons/flecha.svg?react';
import Headline from './headline';
import Subtitle from './subtitle';
import Button from './button';

export default function Hero() {
  return (
    <main
      className="
        w-full min-h-screen
        bg-[url('./assets/images/background-hero.png')]
        md:bg-[url('./assets/images/background-hero-tablet.png')]
        lg:bg-[url('./assets/images/background-hero-desktop.png')]
        bg-cover bg-top
        mx-auto flex flex-col items-center lg:items-start
      "
    >
      <div className="mt-10 sm:mt-16 lg:mt-55 lg:ml-13.75 2xl:mt-65">
        <LogoIcon className="block md:hidden" />
        <LogoTabletIcon className="hidden md:block lg:hidden" />
        <LogoDesktopIcon className="hidden lg:block" />
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
          lg:max-w-76 lg:ml-13.75
          2xl:max-w-125 2xl:p-6 2xl:text-[24px]
        "
      >
        Sua nova agência está aqui
      </Button>
    </main>
  );
}
