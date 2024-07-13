"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desarrollo Web",
    description: "Como Desarrollador FullStack construyo, gestiono y mantengo sitios y aplicaciones asegurando calidad, funcionalidad y seguridad.",
    href: "/work"
  },
  {
    num: "02",
    title: "Diseño UI/UX",
    description: "Creo prototipos y diseños finales para productos digitales, asegurando una interfaz de usuario amigable para quien visite la página.",
    href: "/work"
  },
  {
    num: "03",
    title: "Diseño de Logo",
    description: "Fusiono formas, colores, tipografías y conceptos para crear elementos visuales impactantes que transmitan la esencia de tu marca.",
    href: "/work"
  },
  {
    num: "04",
    title: "SEO",
    description: "Mi trabajo implica optimizar sitios web para mejorar su visibilidad en los motores de búsqueda, utilizando palabras clave, optimización de contenido y creación de enlaces.",
    href: "/work"
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link 
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services