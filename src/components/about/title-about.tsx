import FirstImage from '../../assets/images/first-image-about.png';
import SecondImage from '../../assets/images/second-image-about.png';
import TertiaryImage from '../../assets/images/tertiary-image-about.png';

export default function TitleAbout() {
  return (
    <div className="text-[16px] text-center font-bold">
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
          className="flex-1 h-3 object-cover rounded-xs"
        />
      </span>

      <span className="flex justify-between">
        <span>para</span>
        <span>estruturar</span>
        <span>negócios</span>
        <span>que</span>
      </span>

      <span className="flex items-center gap-2">
        <span>querem crescer</span>
        <img
          src={SecondImage}
          alt=""
          className="flex-1 h-3 object-cover rounded-xs"
        />
      </span>

      <span className="flex items-center gap-2">
        <img
          src={TertiaryImage}
          alt=""
          className="flex-1 h-3 object-cover rounded-xs"
        />
        <span>com consistência.</span>
      </span>
    </div>
  );
}
