import FirstImage from '../../assets/images/first-image-about.png';
import SecondImage from '../../assets/images/second-image-about.png';
import TertiaryImage from '../../assets/images/tertiary-image-about.png';

export default function TitleAbout() {
  return (
    <div className="text-[13px] text-center font-bold xs:text-[20px] sm:text-[30px] lg:text-[46px]">
      <span className="flex justify-between">
        <span>Hoje,</span>
        <span>unimos</span>
        <span>design,</span>
        <span>conteúdo</span>
        <span>e</span>
      </span>

      <span className="flex items-center gap-2">
        <span>marketing</span>
        <img
          src={FirstImage}
          alt=""
          className="flex-1 h-2 object-cover rounded-xs xs:h-3 sm:h-5 lg:h-8"
        />
      </span>

      <span className="flex justify-between">
        <span>para</span>
        <span>estruturar</span>
        <span>negócios</span>
        <span>que</span>
      </span>

      <span className="flex items-center gap-2">
        <span>querem</span>
        <span>crescer</span>
        <img
          src={SecondImage}
          alt=""
          className="flex-1 h-2 object-cover rounded-xs xs:h-3 sm:h-4 lg:h-8"
        />
      </span>

      <span className="flex items-center gap-2">
        <img
          src={TertiaryImage}
          alt=""
          className="flex-1 h-2 object-cover rounded-xs xs:h-3 sm:h-4 lg:h-10"
        />
        <span>com</span>
        <span>consistência.</span>
      </span>
    </div>
  );
}
