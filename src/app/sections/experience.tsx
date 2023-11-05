import Image from 'next/image'
import {useState} from 'react'

export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section className='w-screen h-screen portfolio-blue flex flex-col items-center justify-center' id='experience'>
            <div className='w-1/2'>
                <div>
                    <h1 className='section-title'>Experience</h1>
                </div>
                <div className='flex w-full flex-col sm:flex-row mt-10'>
                    <div className='mb-4 flex flex-none flex-row overflow-x-auto sm:w-max sm:flex-col '>
                        <button
                            onClick={() => setActiveTab(0)}
                            className={`text-white mb-2 flex h-12 items-center whitespace-nowrap px-4 rounded-xl rounded-l-none ${
                                0 === activeTab ? 'bg-emerald-500' : ''
                            }`}
                        >
                            Actuellement
                        </button>
                        <button
                            onClick={() => setActiveTab(1)}
                            className={`text-white mb-2 flex h-12 items-center whitespace-nowrap px-4 rounded-xl rounded-l-none ${
                                1 === activeTab ? 'bg-emerald-500' : ''
                            }`}
                        >
                            2019 - 2023
                        </button>
                        <button
                            onClick={() => setActiveTab(2)}
                            className={`text-white mb-2 flex h-12 items-center whitespace-nowrap px-4 rounded-xl rounded-l-none ${
                                2 === activeTab ? 'bg-emerald-500' : ''
                            }`}
                        >
                            2015 - 2019
                        </button>
                    </div>
                    <div className='ml-5'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                {
                                    0 === activeTab && (
                                        <>
                                            <Image src='/NicolasCrausaz.png' width={100} height={0}/>
                                            <div className='flex flex-col'>
                                                <span className='text-lg font-bold text-emerald-500'>Armée Suisse</span>
                                                <span className='text-primary text-sm text-white'>Ecole de recrue</span>
                                                <span className='text-sm text-white'></span>
                                                <span className='text-sm text-white'>Janvier - Mai 2024</span>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    1 === activeTab && (
                                        <>
                                            <Image src='/NicolasCrausaz.png' width={100} height={0}/>
                                            <div className='flex flex-col'>
                                                <span className='text-lg font-bold text-emerald-500'>HEIG-VD</span>
                                                <span className='text-primary text-sm text-white'>BSc in Software Engineering</span>
                                                <span className='text-sm text-white'>Yverdon-les-Bains, Switzerland</span>
                                                <span className='text-sm text-white'>2019 - 2023</span>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    2 === activeTab && (
                                        <>
                                            <Image src='/NicolasCrausaz.png' width={100} height={0}/>
                                            <div className='flex flex-col'>
                                                <span className='text-lg font-bold text-emerald-500'>EPFL ENAC-IT</span>
                                                <span className='text-primary text-sm text-white'>CFC Informaticien d'entreprise et maturité pro. technique</span>
                                                <span className='text-sm text-white'>Lausanne, Switzerland</span>
                                                <span className='text-sm text-white'>2015 - 2019</span>
                                            </div>
                                        </>
                                    )
                                }


                            </div>

                            {
                                0 === activeTab && (
                                    <article className='mt-4 text-white'>
                                        Armée suisse
                                    </article>
                                )
                            }

                            {
                                2 === activeTab && (
                                    <article className='mt-4 text-white'>
                                        J'ai obtenu mon CFC d'informaticien d'entreprise ainsi qu'une maturité
                                        professionelle technique, en formation duale
                                        à l'ENAC-IT EPFL, Lausanne.
                                    </article>
                                )
                            }

                            {
                                1 === activeTab && (
                                    <article className='mt-4 text-white'>
                                        J'ai étudié à la HEIG-VD et ai obtenu mon bachelor d'ingénieur en informatique
                                        logicielle.

                                        Mon travail de Bachelor, en collaboration avec l'entreprise YALK,
                                        consistait en la réalisation d'une application modulaire permettant d'implémenter
                                        des interactions entre des dispositifs
                                        en tout genres. J'ai obtenu la note de 5.7.
                                    </article>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
