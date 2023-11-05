'use client'

import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return <motion.div style={{ scaleX: scrollYProgress }} />
}
