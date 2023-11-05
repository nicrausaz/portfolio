'use client' // TODO: work on server side rendering

import Navbar from './navbar'
import Switcher from './components/switcher'
import SocialsMenu from './components/socialsMenu'
import { useEffect, useRef, useState } from 'react'
import MainSection from './sections/main'
import AboutSection from './sections/about'
import ProjectsSection from './sections/projects'
import ContactSection from './sections/contact'
import ExperienceSection from './sections/experience'
import useOnScreen from './hooks/useOnScreen'
import React from 'react'
// import ScrollProgress from '../components/scrollProgress';

export default function Home() {
  const [menuLinks, setMenuLinks] = useState([
    {
      label: 'About me',
      to: '#about',
      hidden: false,
      active: false,
    },
    {
      label: 'Experience',
      to: '#experience',
      hidden: false,
      active: false,
    },
    {
      label: 'Projects',
      to: '#projects',
      hidden: false,
      active: false,
    },
    {
      label: 'Contact',
      to: '#contact',
      hidden: false,
      active: false,
    },
  ])

  const setActiveLink = (to) => {
    setMenuLinks((prevLinks) =>
      prevLinks.map((link) => ({
        ...link,
        active: link.to === to,
      }))
    );
  };

  const sectionRefs = useRef(menuLinks.map(() => React.createRef()));

  useEffect(() => {
    const handleScroll = () => {
      const { height: windowHeight } = window;
      const currentSection = menuLinks.find((link, index) => {
        const { current } = sectionRefs.current[index];
        if (current) {
          const { top, height } = current.getBoundingClientRect();
          return top < windowHeight / 2 && top + height > windowHeight / 2;
        }
        return false;
      });

      if (currentSection && !currentSection.active) {
        console.log(currentSection.to)
        setActiveLink(currentSection.to);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuLinks]);

  return (
    <div className='overflow-x-hidden bg-gradient-to-b from-deepblue to-deepbluegrad from-75%'>
      {/* <div className='absolute top-0 h-20 bg-white'>
        <ScrollProgress />
      </div> */}
      <Switcher />
      <SocialsMenu />
      <Navbar links={menuLinks} onMenuClick={setActiveLink} />
      <main>
        <MainSection ref={ sectionRefs[0] }/>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
