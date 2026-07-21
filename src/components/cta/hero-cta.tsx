import Button from '../hero/button';
import FlechaIcon from '../../assets/icons/flecha.svg?react';

export default function HeroCta() {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-77 bg-[url('./assets/images/background-logo.png')] bg-cover bg-center mt-5">
      <div className="relative">
        <h3 className="text-[10px] text-white text-center uppercase font-oranienbaum pt-22">
          Se você quer parar de <br /> improvisar e começar a <br /> estruturar
          sua marca, <br />{' '}
          <span className="text-[#332553]">
            o Studio Claraval é o <br /> próximo passo
          </span>
          .
        </h3>
        <Button
          icon={FlechaIcon}
          type="button"
          className="
          absolute top-full left-1/2 -translate-x-1/2 border border-[#A180EC] rounded-[3px]
          mt-1
          font-inter text-white
          p-2 text-[8px]
          bg-[#A180EC]/80
          shadow-[0_0_2.776px_0_#A180EC]
        "
        >
          Fale com a sua âgencia
        </Button>
      </div>
    </div>
  );
}
