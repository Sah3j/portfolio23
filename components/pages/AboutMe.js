'use client'
import React from 'react'
import { motion } from 'framer-motion'

import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';

function AboutMe() {
  return (
    <div>
      <div className='pt-2 pl-2'>
        <motion.h2 className='text-4xl sm:text-5xl md:text-6xl italic font-bold text-orange-500'
          initial={{x: -200, opacity: 0}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.5}}
        >
          ABOUT ME
        </motion.h2>
      </div>
      <div className='flex flex-col md:flex-row-reverse h-full mt-4 md:pt-20 items-center md:items-center md:mx-auto'>
        <div className='md:flex-1'>
          <div className='w-60 h-60 md:w-80 md:h-80 rounded-full bg-neutral-200 md:mx-auto overflow-hidden relative'>
            <img src="https://i.imgur.com/UR95VrW.png" alt="portfolio headshot" 
              className='object-cover w-72 absolute top-[-2rem] md:left-8 left-4'/>
          </div>
          <div className='flex flex-col gap-1 items-center my-4 md:gap-4 md:my-8'>
            <a href = "mailto: sahejboparai99@gmail.com" className='flex justify-center gap-1 border rounded-lg px-4 py-2 text-xs cursor-pointer hover:bg-neutral-800'>
              <Mail strokeWidth={2} size={16}/>
              sahejboparai99@gmail.com
            </a>
            <div className='flex items-center gap-2'>
              <a href="tel:+12507977957" className='flex justify-center gap-1 border rounded-lg px-4 py-2 text-xs cursor-pointer hover:bg-neutral-800'>
                <Phone strokeWidth={2} size={16}/>
                +1 (250) 797-7957
              </a>
              <a href="https://www.linkedin.com/in/sahejdeep-singh/" target='blank'>
                <Linkedin strokeWidth={2}/>
              </a>
            </div>
          </div>
        </div>
        <div className='md:flex-1 md:max-w-none'>
          <div className='text-center max-w-md flex flex-col gap-2 md:gap-8 md:leading-relaxed text-sm text-neutral-400 md:text-left md:text-base md:mx-auto'>
            <p>Hello! I&#39;m Sahejdeep Singh, a passionate coder driven to tackle real-world challenges through innovative technologies.</p>
            <p>Comitted to continuous self-improvement, I dedicate my free time to fitness and expanding my knowledge through reading. With a Bachelor of Science in Computer Science from Vancouver Island University, I am eager to embark on my first professional journey in the tech industry.</p>
            <p>This portfolio is a testament to my skills and dedication. Let&#39;s connect and explore how I can be a valuable asset to your team!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe