'use client'

import Image from 'next/image'
import { useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen'

export default function AboutSection() {
  return (
    <section className='w-screen h-screen flex flex-col items-center justify-center' id='about' >
      <div className='w-1/2'>
        <div className='drop-shadow-[0_0_30px_#10b981]'>
          <h1 className='section-title uppercase'>A propos de moi</h1>
        </div>
        <div className='relative'>
          <div className='flex items-start'>
            <Image src='/NicolasCrausaz.png' alt='picture_of_me' width={400} height={400} draggable='false' />
            <div className='text-white flex flex-col w-full mt-8'>
              <h4 className='text-2xl mb-6 text-emerald-400'>Nicolas Crausaz</h4>
              <ul role='list' className='marker:text-emerald-400 list-disc pl-5 space-y-3'>
                <li className='text-slate-400 hover:text-white'>Ingénieur HES diplomé de l'HEIG-VD</li>
                <li className='text-slate-400 hover:text-white'>24 ans</li>
                <li className='text-slate-400 hover:text-white'>Suisse, domicilié dans le canton de Vaud</li>
                <li className='text-slate-400 hover:text-white'>Joueur de basket</li>
              </ul>
            </div>
          </div>

          <div className='backdrop-blur-xl bg-white/10 text-white p-4 -translate-y-16 translate-x-20 rounded-xl hover:shadow-xl hover:shadow-[#001521]'>
            <p className=''>
              <span className='underline decoration-emerald-500'>Passionné</span> par le développement, en particulier
              par les <span className='underline decoration-emerald-500'>technologies Web</span>, j’ai eu l’occasion
              durant mes études, ainsi que de manière indépendante, de réaliser de multiples projets réels de moyenne à
              grande envergure. Récemment diplômé de l’<span className='underline decoration-emerald-500'>HEIG-VD</span>
              , je suis à la recherche d’un poste d'ingénieur logiciel dans lequel je pourrais mettre à profit mes
              compétences et ma motivation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
