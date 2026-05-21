import Button from './components/button';
import LogoIcon from './assets/images/logo.svg?react';
import FlechaIcon from './assets/icons/flecha.svg?react';
import Headline from './components/headline';
import Subtitle from './components/subtitle';

export default function App() {
  return (
    <main className="w-full h-165.25 bg-[url('./assets/images/background-principal.png')] bg-cover bg-top mx-auto flex flex-col items-center">
      <div className="mt-10">
        <LogoIcon />
      </div>
      <Headline />
      <Subtitle />
      <Button
        icon={FlechaIcon}
        type="button"
        className="border border-[#A180EC] rounded-[3px] mt-2.5 font-inter text-white bg-[#A180EC]/80 shadow-[0_0_2.776px_0_#A180EC]"
      >
        Sua nova agência está aqui
      </Button>
    </main>
  );
}
