import Image from 'next/image'
import ProjectCard from '../components/projectCard'

export default function ProjectsSection() {
  return (
    <section className='w-screen h-screen portfolio-blue flex flex-col items-center justify-center' id='projects'>
      <div className='w-1/2'>
        <div>
          <h1 className='section-title'>Projects</h1>
        </div>
        <div className='grid grid-cols-2 mt-10 text-white border-b border-emerald-300'>
          <div className='px-2 overflow-y-scroll overflow-x-hidden' style={{ maxHeight: '600px' }}>
            <h4 className='text-2xl'>Freelance projects</h4>
            <p>Quelques projets réalisés de manière professionelle à côté de mes études</p>
            <ul className='mt-10'>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </ul>
          </div>
          <div className='px-2 max-h-96 overflow-y-scroll overflow-x-hidden overscroll-y-scroll' style={{ maxHeight: '600px' }}>
            <h4 className='text-2xl'>School / personal projects</h4>
            <p>Une séléction de mes projets phares réalisés en groupe ou seul durant mes études</p>
            <ul className='mt-10'>
              <ProjectCard />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
