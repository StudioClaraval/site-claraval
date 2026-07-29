export default function Headline() {
  return (
    <h1
      className="
      max-w-66 sm:max-w-sm md:max-w-md
      mt-2.5 sm:mt-4
      font-oranienbaum text-center uppercase
      text-[26px] sm:text-[34px] md:text-[45px]
      leading-6.5 sm:leading-9 md:leading-11
      lg:text-start lg:text-[40px]
      xl:text-[52px] xl:leading-12
      2xl:text-[66px] 2xl:leading-15
    "
    >
      <span className="text-[#5B4986]">
        Construímos <br className="hidden lg:block" />
      </span>{' '}
      marcas <br className="lg:hidden" /> e <br className="hidden lg:block" />{' '}
      posicionamento{' '}
      <span className="text-[#5B4986]">
        <br />
        que vendem.
      </span>
    </h1>
  );
}
