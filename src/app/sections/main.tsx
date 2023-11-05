import DoubleDownLine from '@/assets/DoubleDownLine'
import { motion } from 'framer-motion'

export default function MainSection() {
  const variants1 = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  }

  return (
    <section className='w-screen h-screen flex flex-col items-center justify-center'>
      <div className='drop-shadow-[0_0px_30px_#10b981]'>
        <motion.h1
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
          variants={variants1}
          className='text-6xl text-white'
        >
          NICOLAS CRAUSAZ
        </motion.h1>
        <motion.h4
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
          variants={variants1}
          className='text-xl text-emerald-500 float-right'
        >
          Software Engineer
        </motion.h4>
      </div>

      <motion.div
        className='absolute bottom-20'
        initial='hidden'
        animate='visible'
        transition={{ duration: 1, delay: 2 }}
        variants={variants1}
      >
        <a href='#about'>
          <DoubleDownLine width={'3em'} className='animate-pulse text-slate-500 opacity-5'/>
        </a>
      </motion.div>
    </section>
  )
}
