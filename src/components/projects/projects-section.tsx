import ProjectsHero from './projects-hero';
import TitleProjects from './title-projects';

export default function ProjectsSection() {
  return (
    <section className="mx-12">
      <TitleProjects />
      <ProjectsHero />
    </section>
  );
}
