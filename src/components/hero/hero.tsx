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
      "
    >
      <div className="max-w-384 mx-auto w-full flex flex-col items-center lg:items-start lg:ml-8">
        <div className="mt-6 sm:mt-16 lg:mt-50 xl:mt-55">
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
            top-full border border-[#A180EC] rounded-[3px]
            mt-1
            font-inter text-white
            p-2 text-[8px]
            bg-[#A180EC]/80
            shadow-[0_0_2.776px_0_#A180EC]
            sm:text-[15px]
            lg:mt-4.5
            lg:text-[12px]
            lg:rounded-2xl
            xl:text-[16px] xl:p-4
            2xl:text-[20px]
          "
          onClick={handleClick}
        >
          Sua nova agência está aqui
        </Button>
      </div>
    </main>
  );
}
