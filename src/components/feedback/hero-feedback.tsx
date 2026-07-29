import Feedbacks from '../../assets/images/feedbacks.png';
import FeedbacksDesktop from '../../assets/images/feedbacks-desktop.png';

export default function HeroFeedback() {
  return (
    <div className="px-3 sm:px-5 lg:px-50">
      <img src={Feedbacks} className="-mx-3 sm:-mx-5 px-4 sm:px-6 lg:hidden" />
      <img src={FeedbacksDesktop} className="hidden -mx-3 sm:-mx-5 lg:block" />
    </div>
  );
}
