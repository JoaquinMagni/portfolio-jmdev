"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../../components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "project 1",
    description: "Rent a Car es un web de alquiler de automóviles. Cuenta con un sistema de filtrado, permitiendo a los usuarios filtrar resultados por marca, precio o características. Logrando una experiencia de usuario intuitiva, dinámica y placentera.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "API Cars" }],
    image: "/assets/work/proyecto1.png",
    live: "https://rentaldrive.vercel.app/",
    github: "https://github.com/JoaquinMagni/car_showcase",
  },
  {
    num: "02",
    category: "FrontEnd",
    title: "project 2",
    description: "En BrainWave IA he implementado un diseño responsivo, asegurando una experiencia de usuario coherente en todos los dispositivos.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
    image: "/assets/work/proyecto2.png",
    live: "https://brainwave2024.vercel.app/",
    github: "https://github.com/JoaquinMagni/brainwave",
  },
  {
    num: "03",
    category: "FrontEnd",
    title: "project 3",
    description: "Añadí interactividad con JavaScript, permitiendo a los clientes consultar precios de manera dinámica. Además, integré un formulario de contacto para facilitar la interacción y el compromiso con la comunidad.",
    stack: [{ name: "Vite" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/proyecto3.png",
    live: "https://fitgim.vercel.app/",
    github: "https://github.com/JoaquinMagni/FittGim",
  },
  {
    num: "04",
    category: "FullStack",
    title: "project 4",
    description: "Consumiendo la PokeAPI, elaboré esta sencilla web, donde se pueden explorar todos los Pokemon. Incorporé un filtro en el cual los usuarios pueden buscar Pokémon por nombre y explorar sus características en tarjetas interactivas.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }, { name: "API Pokemon" }],
    image: "/assets/work/proyecto4.jpg",
    live: "https://therealpokedex.vercel.app/",
    github: "https://github.com/JoaquinMagni/pokedex",
  },
  {
    num: "03",
    category: "FrontEnd",
    title: "project 3",
    description: "En este Planificador de Gastos, implementé un gráfico circular para visualizar la distribución del presupuesto y una funcionalidad para agrupar gastos e ingresos por categorías.",
    stack: [{ name: "React Js" }, { name: "CSS 3" }, { name: "Javascript" }, { name: "Node Js" }],
    image: "/assets/work/proyecto5.png",
    live: "https://presupuesto-de-gasto.netlify.app/",
    github: "https://github.com/JoaquinMagni/control-gastos",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;
    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delat: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                Proyecto {project.category}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Remove the last comma */}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>
              { /* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositorio Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* Slider Button */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work