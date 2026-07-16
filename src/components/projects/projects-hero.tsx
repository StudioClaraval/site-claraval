import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import socialMediaProject from '../../assets/images/social-media-project.png';
import visualIdentityProject from '../../assets/images/visual-identity-project.png';
import releasesProject from '../../assets/images/releases-project.png';
import pagesProject from '../../assets/images/pages-project.png';
import moreProjects from '../../assets/images/more-projects.png';

import TitleProjects from './title-projects';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  socialMediaProject,
  visualIdentityProject,
  releasesProject,
  pagesProject,
  moreProjects
];

const CARD_AREA_HEIGHT = 480;

export default function ProjectsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = imagesRef.current;

      gsap.set(images, {
        xPercent: 0,
        rotation: 0,
        opacity: 1
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${projects.length * 250}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      images.forEach((image, index) => {
        tl.to(
          image,
          {
            xPercent: -130,
            rotation: -14,
            opacity: 0.1,
            ease: 'none',
            duration: 1
          },
          index
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: CARD_AREA_HEIGHT }}
    >
      <div className="flex h-full flex-col">
        <div className="py-6">
          <TitleProjects />
        </div>

        <div className="relative flex-1">
          {projects.map((src, index) => (
            <img
              key={src}
              ref={(el) => {
                if (el) imagesRef.current[index] = el;
              }}
              src={src}
              className="absolute inset-0 h-full w-full object-contain"
              style={{
                zIndex: projects.length - index,
                willChange: 'transform, opacity'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
