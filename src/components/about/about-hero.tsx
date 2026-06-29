import AboutPrincipal from '../../assets/images/about-hero.png';

export default function AboutHero() {
  return (
    <div className="flex flex-col gap-6 rounded-sm bg-gray-100 p-2 mt-4.5">
      <div className="flex-1 font-inter text-[14px] text-gray-900">
        <p>
          <span className="font-bold">Samy e Gaby</span>, melhores amigas desde
          a infância, sempre compartilharam o mesmo olhar crítico sobre a vida e
          consequentemente sobre o mercado de marketing e essa insatisfação
          virou decisão.
        </p>
        <p>
          Em 2024, a Samy entra como sócia, somando estratégia de conteúdo,
          visão de posicionamento e direção de comunicação.
        </p>
        <h3 className="font-oranienbaum text-[16px] font-bold text-[#5B4986] mt-4">
          A união não foi só profissional, foi construída sobre confiança, visão
          em comum e o compromisso de fazer diferente do que já existia.
        </h3>
      </div>
      <div className="flex-1">
        <img src={AboutPrincipal} />
      </div>
    </div>
  );
}
