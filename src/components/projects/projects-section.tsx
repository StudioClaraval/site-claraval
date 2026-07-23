import ProjectsHero from './projects-hero';
import TitleProjects from './title-projects';

export default function ProjectsSection() {
  return (
    <section className="mx-12 sm:mx-20 lg:mx-30">
      <TitleProjects />
      <ProjectsHero />
    </section>
  );
}
