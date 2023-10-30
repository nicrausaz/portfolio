import Image from 'next/image'
import Navbar from './navbar'
import Switcher from '../components/switcher'
import SocialsMenu from '../components/socialsMenu'
import ProjectCard from '../components/projectCard'

export default function Home() {
  return (
    <div className='overflow-x-hidden bg-gradient-to-b from-[#001521] to-[#001825]'>
      <Switcher />
      <SocialsMenu />
      <Navbar />
      <main>
        <section className='w-screen h-screen flex flex-col items-center justify-center'>
          <div>
            <h1 className='text-6xl text-white '>Nicolas Crausaz</h1>
            <h4 className='text-xl text-white'>Software Engineer</h4>
          </div>

          <div className='bg-white bg-opacity-20 rounded-full p-3 flex justify-between items-center backdrop-filter backdrop-blur-lg'>
            <a href='#' className='text-white hover:text-blue-400 transition-all duration-300'>
              {' '}
              Linkedin{' '}
            </a>
            <a href='#' className='text-white hover:text-blue-400 transition-all duration-300'>
              {' '}
              Github{' '}
            </a>
            <a href='#' className='text-white hover:text-red-500 transition-all duration-300'>
              {' '}
              Contact{' '}
            </a>
          </div>
        </section>
        <section className='w-screen h-screen flex flex-col items-center justify-center' id='about'>
          <div className='w-1/2'>
            <div>
              <h1 className='text-6xl text-white line-trough'>About me</h1>
            </div>
            <div className='relative'>
              <div className='flex items-center'>
                <img src='https://crausaz.click/img/NicolasCrausaz.png' alt='picture_of_me' width='300' />
                <div className='text-white flex flex-col justify-between w-full'>
                  <h4 className='text-2xl'>Nicolas Crausaz</h4>
                  <hr />
                  <ul role='list' className='marker:text-sky-400 list-disc pl-5 space-y-3'>
                    <li>24 ans</li>
                    <li>Ingénieur HES diplomé de l'HEIG-VD</li>
                    <li>test</li>
                    <li>test</li>
                    <li>Suisse, Canton de Vaud</li>
                  </ul>
                </div>
              </div>

              <div className='backdrop-blur-xl bg-white/10 text-white p-4 -translate-y-16 translate-x-20 rounded-xl hover:shadow-xl hover:shadow-[#001521]'>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un
                imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de
                texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de
                feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des
                applications de mise en page de texte, comme Aldus PageMaker.
              </div>
            </div>
          </div>
        </section>
        <section className='w-screen h-screen portfolio-blue flex flex-col items-center justify-center' id='experience'>
          <div className='w-1/2'>
            <div>
              <h1 className='text-6xl text-white line-trough'>Experience</h1>
            </div>
            <div className='flex w-full flex-col sm:flex-row mt-10'>
              <div className='mb-4 flex flex-none flex-row overflow-x-auto sm:w-max sm:flex-col'>
                <button className='text-white active mb-2 flex h-12 items-center whitespace-nowrap px-4 border'>
                  Actuellement
                </button>
                <button className='text-white mb-2 flex h-12 items-center whitespace-nowrap px-4'>
                  <img
                    alt=''
                    width='30'
                    className='rounded border-2 border-slate-200/10 mr-2 bg-transparent'
                    srcset='
                      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8-aBeYhD4stHJHB2fffG-3az6Be8ZE_ywNKe4sQN&s
                    '
                  />
                  <span> HEIG-VD</span>
                </button>
                <button className='text-white mb-2 flex h-12 items-center whitespace-nowrap px-4 border'>...</button>
              </div>
              <div className='ml-5'>
                <div className='flex flex-col'>
                  <span className='text-lg font-bold text-white'>HEIG-VD</span>
                  <span className='text-primary text-sm text-white'>BSc in Software Engineering</span>
                  <span className='text-sm text-white'>Yverdon-les-Bains, Switzerland</span>
                  <span className='text-sm text-white'>2019 - 2023</span>

                  <article className='mt-4 text-white'>
                    <div>
                      <p>
                        - Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
                        avant impression.
                      </p>
                      <p>
                        - Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un
                      </p>
                      <p>- Mon travail de bachelor consistait en ...</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-screen h-screen portfolio-blue flex flex-col items-center justify-center' id='projects'>
          <div className='w-1/2'>
            <div>
              <h1 className='text-6xl text-white line-trough'>Projects</h1>
            </div>
            <div className='grid grid-cols-2 mt-10 text-white border-b border-emerald-300'>
              <div className='px-2 max-h-96 overflow-y-scroll overflow-x-hidden'>
                <h4 className='text-2xl'>Freelance projects</h4>
                <p>Quelques projets réalisés de manière professionelle à côté de mes études</p>
                <ul className='mt-10'>
                  <ProjectCard />
                </ul>
              </div>
              <div className='px-2 max-h-96 overflow-y-scroll overflow-x-hidden'>
                <h4 className='text-2xl'>School / personal projects</h4>
                <p>Une séléction de mes projets phares réalisés en groupe ou seul durant mes études</p>
                <ul className='mt-10'>
                  <ProjectCard />
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='w-screen h-screen flex flex-col items-center justify-center' id='contact'>
          <div className='w-1/2'>
            <div>
              <h1 className='text-6xl text-white line-trough'>Contact</h1>
            </div>
            <div className='mt-10'>
              <div className='px-4'>
                <p className='text-center text-white mb-10'>
                  Want to talk about a project or just want to say hi? Send me a message and I'll get back to you as
                  soon as possible!
                </p>
                <div className='w-full rounded-2xl shadow-2xl backdrop-blur-sm bg-white/10'>
                  <form
                    name='contact'
                    method='post'
                    action='https://formspree.io/mknqbjkw'
                    className='w-full p-8 my-4 mr-auto rounded-2xl shadow-2xl bg-emerald-500 transform translate-x-4 translate-y-4'
                  >
                    <div className='flex'>
                      <h1 className='font-bold uppercase text-3xl'>Your message</h1>
                    </div>

                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
                      <input
                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-emerald-500'
                        name='name'
                        type='text'
                        placeholder='Your name'
                        required
                      />
                      <input
                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                        name='email'
                        type='email'
                        placeholder='Your email'
                        required
                      />
                    </div>
                    <div className='my-4'>
                      <textarea
                        placeholder='Your message ...'
                        name='message'
                        className='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                        required
                      ></textarea>
                    </div>
                    <div className='my-2'>
                      <button
                        type='submit'
                        className='uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline'
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
