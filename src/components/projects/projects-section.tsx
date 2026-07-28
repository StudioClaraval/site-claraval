import ProjectsHero from './projects-hero';
import TitleProjects from './title-projects';

export default function ProjectsSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1536px] mx-auto w-full px-12 sm:px-18">
        <TitleProjects />
        <ProjectsHero />
      </div>
    </section>
  );
}
