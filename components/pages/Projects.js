'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

import { PanelTop } from 'lucide-react';
import { Code } from 'lucide-react';

function Projects() {

  const projects = [{
    id: 1,
    title: "DCPLN (Discipline)",
    tagline: "My Personal Take on Task Management",
    tech: ['Next.js', 'Flask (Python)', 'PostgreSQL'],
    date: 'Dec 11, 2023',
    description: [`As someone who's always juggling tasks from work to home, I found myself in need of a task management app that really gets me. While there are tons of apps available, being a software developer, I took this opportunity to design one of my own.`],
    img: "https://i.imgur.com/SvgFfyQ.png",
  }]

  const Project = ({project}) => {

    return (
      <section className='flex flex-col mx-auto items-center md:flex-row md:justify-center md:items-center md:pt-0 h-full pt-4 overflow-hidden max-w-xl md:max-w-none'>
        <div className='h-full md:h-auto md:gap-4 md:flex md:w-full md:justify-evenly'>
          <div className='flex md:flex-1 md:max-w-lg md:h-96 h-72 justify-center items-start md:h-72 pt-2 bg-neutral-300 rounded-lg overflow-hidden'>
            <img src={project.img} alt="Dcpln app screenshot" 
            className='object-cover w-72 rounded-xl border-white border-2'/>
          </div>

          <motion.div className='my-2 p-2 flex md:flex-1 md:max-w-lg md:my-0 md:p-4 md:h-auto flex-col justify-between bg-neutral-900 rounded-lg md:text-lg'
            initial={{y: 200, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{duration: 0.5}}
          >
            <div className='text-sm md:text-base'>
              <h3 className='text-xl sm:text-2xl md:text-3xl pb-1 font-semibold text-neutral-50'>
                {project.title}
              </h3>
              <h4 className=' text-neutral-400'>
                {project.tagline}
              </h4>
              <div className='flex gap-2 my-2 text-neutral-500'>
                <h4>Built with:</h4>
                {project.tech.map((tech, index) => {
                  return (
                    <p key={index}>{tech}</p>
                  )
                })}
              </div>
              {project.description.map((description, index) => {
                return (
                  <p key={index}
                    className='pb-2 text-neutral-500'>
                    {description}
                  </p>
                )
              })}
            </div>
            <div className='flex justify-center pt-4 pb-2 gap-8'>
              <a href="https://dcpln.vercel.app" target='blank'>
                <div className='inline-flex text-sm items-center gap-1 border px-2 py-1 rounded-xl cursor-pointer hover:bg-neutral-800'>
                  <PanelTop size={18}/>
                  demo
                </div>
              </a>
              <a href="https://github.com/Sah3j/dcpln" target='blank'>
                <div className='inline-flex text-sm items-center gap-1 border px-2 py-1 rounded-xl cursor-pointer hover:bg-neutral-800'>
                  <Code size={18}/>
                  code
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='pt-2 pl-2'>
        <motion.h2 className='text-4xl sm:text-5xl md:text-6xl italic font-bold text-orange-500'
          initial={{x: -200, opacity: 0}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.5}}
        >
          PORTFOLIO
        </motion.h2>
      </div>
      <div className='text-white border-blue-600 h-full'>
        {projects.map(project => {
          return (
            <Project project={project} key={project.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects