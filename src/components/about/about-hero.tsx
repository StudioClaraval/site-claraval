import AboutPrincipal from '../../assets/images/about-hero-mobile.png';
import AboutPrincipalTablet from '../../assets/images/about-hero.png';

export default function AboutHero() {
  return (
    <div className="mt-4.5 flex flex-col max-md:gap-6 overflow-hidden rounded-sm bg-gray-100 p-2 lg:flex-row lg:items-stretch lg:py-15">
      <div className="flex-1">
        <picture>
          <source media="(min-width: 1024px)" srcSet={AboutPrincipalTablet} />
          <img src={AboutPrincipal} className="w-full max-w-full max-sm:mt-2" />
        </picture>
      </div>
      <div className="flex-1 font-inter text-[14px] text-gray-900 mx-4.5 sm:text-[20px] lg:order-first lg:mx-10 lg:flex lg:flex-col">
        <p>
          <span className="font-bold">Samy e Gaby</span>, melhores amigas desde
          a infância, sempre compartilharam o mesmo olhar crítico sobre a vida e
          consequentemente sobre o mercado de marketing e essa insatisfação
          virou decisão.
        </p>
        <p className="mt-4">
          Em 2022, a Gaby iniciou o Studio com foco em design, trazendo
          profundidade e intenção para cada projeto. Em 2024, a Samy entra como
          sócia, somando estratégia de conteúdo, visão de posicionamento e
          direção de comunicação.
        </p>
        <h3 className="font-oranienbaum text-[18px] font-bold text-[#5B4986] mt-4 uppercase sm:text-[24px] lg:text-[38px] lg:mt-auto">
          A união não foi só profissional, foi construída sobre confiança, visão
          em comum e o compromisso de fazer diferente do que já existia.
        </h3>
      </div>
    </div>
  );
}
