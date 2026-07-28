export default function Headline() {
  return (
    <h1
      className="
      max-w-66 sm:max-w-sm md:max-w-md
      mt-2.5 sm:mt-4
      font-oranienbaum text-center uppercase
      text-[26px] sm:text-[34px] md:text-[45px]
      leading-6.5 sm:leading-9 md:leading-11
      lg:text-start lg:text-[30px]
      lg:leading-12
      xl:text-[38px]
      2xl:text-[44px]
    "
    >
      <span className="text-[#5B4986]">Construímos</span> marcas{' '}
      <br className="lg:hidden" /> e <br className="hidden lg:block" />{' '}
      posicionamento{' '}
      <span className="text-[#5B4986]">
        <br />
        que vendem.
      </span>
    </h1>
  );
}
