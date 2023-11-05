import BasilLinkedinSolid from '@/assets/BasilLinkedinSolid'
import BasilInstagramSolid from '@/assets/BasilInstagramSolid'
import BasilEnvelopeSolid from '@/assets/BasilEnvelopeSolid'

import {motion} from 'framer-motion'

export default function SocialsMenu() {
    const variants1 = {
        hidden: {filter: 'blur(10px)', opacity: 0},
        visible: {filter: 'blur(0px)', opacity: 1},
    }

    return (
        <motion.div
            className='fixed bottom-4 right-4 p-3 bg-slate-500 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full flex flex-col gap-4'
            initial='hidden'
            animate='visible'
            variants={variants1}
            transition={{delay: 1, duration: 1}}
        >
            <a href='#' className='text-white hover:text-slate-400 transition-all duration-300'>
                <BasilLinkedinSolid width={'1.5em'}/>
            </a>
            <a href='#' className='text-white hover:text-slate-400 transition-all duration-300'>
                <BasilInstagramSolid width={'1.5em'}/>
            </a>
            <a href='#' className='text-white hover:text-slate-500 transition-all duration-300'>
                <BasilEnvelopeSolid width={'1.5em'}/>
            </a>
        </motion.div>
    )
}
