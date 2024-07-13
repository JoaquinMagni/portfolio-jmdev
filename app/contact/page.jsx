"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

import Swal from 'sweetalert2'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "(+54) 9 3576 510179"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "joaquinmagnidev@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Dirección",
    description: "Arroyito, Córdoba - Belgrano 1092"
  },
]

import { motion } from "framer-motion";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b33f2544-7e03-445b-95f6-f29aa0d9d6e5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "¡Perfecto!",
        text: "Su mensaje se ha enviado correctamente.",
        icon: "success"
      });
    // Vaciar el formulario
    event.target.reset();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delat: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Concretemos tu proyecto juntos.</h3>
              <p className="text-white/60">
              Completa el formulario a continuación para que podamos ponernos en contacto.
              </p>
              {/* Input */}
              <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="name" required placeholder="Nombre" />
                <Input type="lastname" name="lastname" required placeholder="Apellido" />
                <Input type="email" name="email" required placeholder="Email" />
                <Input type="phone" name="phone" required placeholder="Teléfono" />
              </div>
              {/* Text Area */}
              <Textarea 
                name="message"
                required
                className="h-[200px]"
                placeholder="Escribe tu mensaje aquí."
              />
              {/* Button */}
              <Button type="submit" size="md" className="max-w-40">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact