import AboutSection from './components/about/about-section';
import CTASection from './components/cta/cta-section';
import FeedbackSection from './components/feedback/feedback-section';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import MotivationSection from './components/motivation/motivation-section';
import ProjectsSection from './components/projects/projects-section';

export default function App() {
  return (
    <div className="">
      <Hero />
      <MotivationSection />
      <AboutSection />
      <ProjectsSection />
      <FeedbackSection />
      <CTASection />
      <Footer />
    </div>
  );
}
