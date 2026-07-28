import ProjectsHero from './projects-hero';
import TitleProjects from './title-projects';

export default function ProjectsSection() {
  return (
    <section className="w-fit mx-auto px-12 sm:px-18">
      <TitleProjects />
      <ProjectsHero />
    </section>
  );
}
