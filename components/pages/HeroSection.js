'use client'
import React from 'react'

//icons
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { FileDown } from 'lucide-react';
import { Mouse } from 'lucide-react';

import {motion, stagger} from 'framer-motion'

function HeroSection() {

  return (
    <div className='flex flex-col w-full h-full relative'>

      <div className='text-xs font-light italic absolute pt-2'>
        Portfolio ∙ 23
      </div>

      <div className='flex flex-col justify-center items-center h-full'>
        <div className='flex flex-col justify-between items-center'>
          <motion.div className='self-start tracking-widest font-light mb-[-0.3rem] sm:text-xl md:text-2xl text-orange-500'
          initial={{x: 200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1, delay:0.5}}
          >
            SAHEJDEEP SINGH
          </motion.div>
          <h1 className='text-6xl sm:text-8xl md:text-9xl italic font-bold'>
            <motion.div className='mb-[-1rem]'
              initial={{x: -500, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{duration: 1}}
            >
              FULLSTACK 
            </motion.div>
            <motion.div className='pl-8 sm:pl-16 md:pl-24'
              initial={{x: 500, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{duration: 1}}
            >
              DEVELOPER
            </motion.div>
          </h1>
          <motion.div className='self-end'
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1,}}
            transition={{duration: 1, delay:0.5}}
          >
            <div className='flex gap-4 items-center'>
              <a href="/Sahejdeep_Singh_Resume.pdf" download className='flex justify-center gap-1 border rounded-lg px-4 py-2 text-xs cursor-pointer hover:bg-neutral-800'>
                Download CV
                <FileDown strokeWidth={2} size={16}/>
              </a>
              <a href="https://github.com/Sah3j" target='blank'>
                <Github strokeWidth={2}/>
              </a>
              <a href="https://www.linkedin.com/in/sahejdeep-singh/" target='blank'>
                <Linkedin strokeWidth={2}/>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='flex justify-center gap-1 w-full pb-16'>
        <motion.div
          initial={{opacity: 0.6, y: -5}}
          animate={{opacity: 0, y: 5}}
          transition={{duration:3, repeat:Infinity}}
        >
          <Mouse strokeWidth={2}/>
        </motion.div>
        <p className='font-light text-sm opacity-60'>portfolio</p>
      </div>
    </div>
  )
}

export default HeroSection