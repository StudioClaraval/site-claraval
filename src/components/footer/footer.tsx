import LogoWhite from '../../assets/images/logo-white.svg?react';
import Diamond from '../../assets/icons/diamond.svg?react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-5 bg-[#332553] text-[#A180EC] text-[12px]">
      <LogoWhite />
      <p className="pt-3">Desde 2022 construindo marcas com direção</p>
      <div className="flex items-center gap-1">
        <p>Design</p>
        <Diamond />
        <p>Conteúdo</p>
        <Diamond />
        <p>Estratégia</p>
      </div>
    </footer>
  );
}
