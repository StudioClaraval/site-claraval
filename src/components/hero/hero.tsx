import LogoIcon from '../../assets/images/logo.svg?react';
import LogoTabletIcon from '../../assets/images/logo-tablet.svg?react';
import LogoDesktopIcon from '../../assets/images/logo-desktop.svg?react';
import FlechaIcon from '../../assets/icons/flecha.svg?react';
import Headline from './headline';
import Subtitle from './subtitle';
import Button from './button';

const FORM_URL =
  'https://docs.google.com/forms/d/1A5Jw-8k6k6AS52feKhHD_jw8HRR5-GAOWXPrsj487f8/viewform?edit_requested=true';

export default function Hero() {
  function handleClick() {
    window.open(FORM_URL, '_blank', 'noopener,noreferrer');
  }

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
      <div className="flex flex-col items-center lg:items-start lg:ml-8">
        <div className="mt-6 sm:mt-16 lg:mt-55 xl:mt-60">
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
            lg:max-w-70 lg:text-[14px]
            xl:max-w-90 xl:text-[20px]
          "
          onClick={handleClick}
        >
          Sua nova agência está aqui
        </Button>
      </div>
    </main>
  );
}
