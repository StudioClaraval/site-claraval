import FeedbackReference from '../../assets/images/feedback-reference.png';

export default function Catchphrase() {
  return (
    <div className="hidden lg:flex items-start mx-auto">
      <div className="pl-55 text-[10px] py-2 bg-[#A180EC] text-white mb-10">
        <p>Não improvisamos estratégia.</p>
        <p>Não entregamos pela metade.</p>
        <p>Não tratamos sua marca como mais uma.</p>
        <p className="font-bold pt-3">
          Crescimento exige estrutura. E é isso <br /> que construímos.
        </p>
      </div>
      <img
        className="max-w-[calc(100%-48rem)] ml-auto"
        src={FeedbackReference}
        alt=""
      />
    </div>
  );
}
