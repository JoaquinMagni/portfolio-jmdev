"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaNode
} from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

// About Data
const about = {
  title: "Sobre Mí",
  description: "Como desarrollador FullStack, estoy encantado de iniciar mi carrera junto a un equipo talentoso y colaborativo, donde pueda aprovechar mis conocimientos y habilidades mientras expando continuamente mis horizontes.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Joaquín A. Magni"
    },
    {
      fieldName: "Teléfono",
      fieldValue: "(+54) 9 3576 510179"
    },
    {
      fieldName: "Experiencia",
      fieldValue: "+3 Años"
    },
    {
      fieldName: "Skype",
      fieldValue: "Cuenta Pendiente"
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Argentino"
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Disponible"
    },
    {
      fieldName: "Lenguajes",
      fieldValue: "Español, Inglés"
    },
  ]
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi Experiencia",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, praesentium optio temporibus sed et perferendis illum quisquam.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      company: "Tech Solutions Inc.",
      position: "Desarrollador Full Stack",
      duration: "Verano 2022"
    },
    {
      company: "Sitio E-commerce",
      position: "Desarrollador Freelance",
      duration: "2021 - 2022"
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "Mi Educación",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, praesentium optio temporibus sed et perferendis illum quisquam.",
  items: [
    {
      institution: "Curso Online Udemy",
      degree: "Desarrollador Full Stack Certificado",
      duration: "2023"
    },
    {
      institution: "Curso Online Udemy",
      degree: "Desarrollador Fron-End Certificado",
      duration: "2022"
    },
    {
      institution: "Curso Online",
      degree: "Fundamentos HTML, CSS y Javascript",
      duration: "2021"
    },
    {
      institution: "Curso Online",
      degree: "Curso de Programación Inicial",
      duration: "2020"
    },
  ],
};

const skills = {
  title: "Mis Habilidades",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, aperiam totam odit iste sed tempora debitis facilis.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
  ]
};

import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "../../components/ui/tabs"

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "../../components/ui/tooltip"

import { ScrollArea } from "../../components/ui/scroll-area"

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre Mí</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* Dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li 
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* Dat */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="div flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume