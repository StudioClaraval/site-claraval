import Button from './components/button';
import LogoIcon from './assets/images/logo.svg?react';
import FlechaIcon from './assets/icons/flecha.svg?react';
import Headline from './components/headline';
import Subtitle from './components/subtitle';

export default function App() {
  return (
    <main
      className="
      w-full min-h-screen
      bg-[url('./assets/images/background-principal.png')] bg-cover bg-top
      mx-auto flex flex-col items-center
    "
    >
      <div className="mt-10 sm:mt-14">
        <LogoIcon />
      </div>
      <Headline />
      <Subtitle />
      <Button
        icon={FlechaIcon}
        type="button"
        className="
          border border-[#A180EC] rounded-[3px]
          mt-2.5 sm:mt-4
          font-inter text-white
          bg-[#A180EC]/80
          shadow-[0_0_2.776px_0_#A180EC]
          sm:h-8 sm:text-xs sm:gap-1.5 sm:px-3
        "
      >
        Sua nova agência está aqui
      </Button>
    </main>
  );
}
