import { useState, useEffect, useCallback } from 'react';
import socialMediaProject from '../../assets/images/social-media-project.png';
import visualIdentityProject from '../../assets/images/visual-identity-project.png';
import releasesProject from '../../assets/images/releases-project.png';
import pagesProject from '../../assets/images/pages-project.png';
import moreProjects from '../../assets/images/more-projects.png';
import socialMediaProjectTablet from '../../assets/images/social-media-project-tablet.png';
import visualIdentityProjectTablet from '../../assets/images/visual-identity-project-tablet.png';
import releasesProjectTablet from '../../assets/images/releases-project-tablet.png';
import pagesProjectTablet from '../../assets/images/pages-project-tablet.png';
import moreProjectsTablet from '../../assets/images/more-projects-tablet.png';

const projectsMobile = [
  socialMediaProject,
  visualIdentityProject,
  pagesProject,
  releasesProject,
  moreProjects
];

const projectsTablet = [
  socialMediaProjectTablet,
  visualIdentityProjectTablet,
  pagesProjectTablet,
  releasesProjectTablet,
  moreProjectsTablet
];

const INTERVAL = 4000;
const DURATION = 500;

export default function ProjectsHero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsLg(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const projects = isLg ? projectsTablet : projectsMobile;

  const advance = useCallback(() => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projectsMobile.length);
      setAnimating(false);
    }, DURATION);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  const next = (current + 1) % projects.length;

  return (
    <section className="relative w-full overflow-hidden mt-4 -mb-7 z-1 sm:-mb-14 sm:mt-8 lg:-mb-65">
      <img src={projects[0]} alt="" className="w-full invisible" />
      <img
        src={projects[current]}
        alt=""
        className="absolute inset-0 w-full"
        style={{
          transition: animating
            ? `transform ${DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : 'none',
          transform: animating ? 'translateX(-100%)' : 'translateX(0)'
        }}
      />
      <img
        src={projects[next]}
        alt=""
        className="absolute inset-0 w-full"
        style={{
          transition: animating
            ? `transform ${DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : 'none',
          transform: animating ? 'translateX(0)' : 'translateX(100%)'
        }}
      />
    </section>
  );
}
