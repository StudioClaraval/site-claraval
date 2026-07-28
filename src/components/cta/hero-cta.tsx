import FlechaIcon from '../../assets/icons/flecha.svg?react';
import ButtonCta from './button-cta';

const FORM_URL =
  'https://docs.google.com/forms/d/1A5Jw-8k6k6AS52feKhHD_jw8HRR5-GAOWXPrsj487f8/viewform?edit_requested=true';

export default function HeroCta() {
  function handleClick() {
    window.open(FORM_URL, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-77 bg-[url('./assets/images/background-logo.png')] bg-cover bg-center mt-5 sm:h-150 lg:h-200 lg:mt-18">
      <div className="relative">
        <h3 className="text-[10px] text-white text-center uppercase font-oranienbaum pt-22 sm:pt-48 sm:text-[22px] lg:text-[32px] lg:pt-57">
          Se você quer parar de <br /> improvisar e começar a <br /> estruturar
          sua marca, <br />{' '}
          <span className="text-[#332553]">
            o Studio Claraval é o <br /> próximo passo
          </span>
          .
        </h3>
        <ButtonCta
          icon={FlechaIcon}
          type="button"
          className="
          absolute top-full left-1/2 -translate-x-1/2 border border-[#A180EC] rounded-[3px]
          mt-1
          font-inter text-white
          p-2 text-[8px]
          bg-[#A180EC]/80
          shadow-[0_0_2.776px_0_#A180EC]
          sm:text-[15px]
          lg:mt-4.5
          lg:text-[24px]
          lg:rounded-2xl
        "
          onClick={handleClick}
        >
          Fale com a sua âgencia
        </ButtonCta>
      </div>
    </div>
  );
}
