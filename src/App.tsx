import { motion } from 'motion/react';
import { 
  Zap, 
  Settings, 
  ShieldCheck, 
  Truck, 
  Lightbulb, 
  Hammer, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Clock,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      id: 'ser-1',
      title: "Instalaciones Eléctricas",
      desc: "Instalación completa de circuitos, tableros y sistemas residenciales o comerciales.",
      icon: <Zap className="w-8 h-8" />,
      img: "/assets/project6.jpg",
      notes: "Especialidad en montajes de cuadros de distribución (QGD), cumplimiento de normativa RETIE, y sistemas de puesta a tierra certificados. Utilizamos conductores de cobre electrolítico y protecciones termo-magnéticas de alta gama."
    },
    {
      id: 'ser-2',
      title: "Mantenimiento Preventivo",
      desc: "Inspecciones técnicas para evitar fallas futuras y optimizar el consumo energético.",
      icon: <ShieldCheck className="w-8 h-8" />,
      img: "/assets/project7.jpg",
      notes: "Incluye termografía infrarroja para detectar puntos calientes, reapriete de conexiones, limpieza de tableros y balanceo de cargas para reducir el desperdicio de energía."
    },
    {
      id: 'ser-3',
      title: "Reparaciones de Emergencia",
      desc: "Servicio rápido para cortocircuitos, fallas de fase y apagones inesperados.",
      icon: <Truck className="w-8 h-8" />,
      img: "/assets/about-work.jpg",
      notes: "Diagnóstico avanzado con multímetros digitales de precisión. Detección de fugas a tierra y corrección inmediata de cortocircuitos en redes monofásicas, bifásicas y trifásicas."
    },
    {
      id: 'ser-4',
      title: "Iluminación Profesional",
      desc: "Diseño e instalación de sistemas LED, iluminación exterior y decorativa.",
      icon: <Lightbulb className="w-8 h-8" />,
      img: "/assets/project2.jpg",
      notes: "Instalación de proyectores LED de alta eficiencia, sistemas de control automatizado (sensores de movimiento y fotoceldas) y diseño lumínico para fachadas y jardines."
    },
    {
      id: 'ser-5',
      title: "Sistemas Industriales",
      desc: "Mantenimiento de motores, tableros de control y maquinaria pesada.",
      icon: <Settings className="w-8 h-8" />,
      img: "/assets/project3.jpg",
      notes: "Cableado de automatización, instalación de variadores de frecuencia (VFD), arrancadores suaves y mantenimiento correctivo a motores eléctricos industriales."
    },
    {
      id: 'ser-6',
      title: "Remodelaciones",
      desc: "Actualización de cableados antiguos a normativas vigentes de seguridad.",
      icon: <Hammer className="w-8 h-8" />,
      img: "/assets/project4.jpg",
      notes: "Retirada de conductores obsoletos, actualización de cajas de paso, y modernización de tomacorrientes y switches con diseños ergonómicos y seguros."
    }
  ];

  const [activeService, setActiveService] = useState<string | null>(null);

  const projects = [
    { id: 'p-1', title: "Sistemas Fotovoltaicos", client: "Energía Solar", img: "/assets/project1.jpg" },
    { id: 'p-2', title: "Instalación de Paneles", client: "Proyectos Renovables", img: "/assets/project2.jpg" },
    { id: 'p-3', title: "Tableros de Control", client: "Mantenimiento Industrial", img: "/assets/project3.jpg" },
    { id: 'p-4', title: "Distribución Eléctrica", client: "Instalaciones Comerciales", img: "/assets/project4.jpg" },
    { id: 'p-5', title: "Conexiones de Precisión", client: "Seguridad y Normativa", img: "/assets/project5.jpg" },
    { id: 'p-6', title: "Cuadros de Protección", client: "Residencial", img: "/assets/project6.jpg" },
    { id: 'p-7', title: "Mantenimiento Preventivo", client: "Tableros", img: "/assets/project7.jpg" },
    { id: 'p-8', title: "Optimización Energética", client: "Residencial", img: "/assets/project8.jpg" },
    { id: 'p-9', title: "Instalaciones Especiales", client: "Industrial", img: "/assets/project9.jpg" }
  ];

  const stats = [
    { label: "Años de Experiencia", value: "5+" },
    { label: "Proyectos Realizados", value: "300+" },
    { label: "Clientes Satisfechos", value: "99%" },
    { label: "Garantía de Servicio", value: "100%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-black text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-brand-yellow fill-brand-yellow" size={32} />
            <span className="font-display text-2xl font-black tracking-tighter uppercase italic">JIM</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center font-display text-sm font-semibold uppercase tracking-widest">
            <a href="#about" className="hover:text-brand-yellow transition-colors">Sobre Mí</a>
            <a href="#services" className="hover:text-brand-yellow transition-colors">Servicios</a>
            <a href="#projects" className="hover:text-brand-yellow transition-colors">Proyectos</a>
            <a href="#contact" className="btn-primary py-2 px-6">Contáctame</a>
          </div>

          <button className="md:hidden text-brand-yellow" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute w-full bg-brand-black border-t border-zinc-800 p-4 space-y-4 font-display font-bold uppercase"
          >
            <a href="#about" className="block text-zinc-300 hover:text-brand-yellow py-2" onClick={() => setIsMenuOpen(false)}>Sobre Mí</a>
            <a href="#services" className="block text-zinc-300 hover:text-brand-yellow py-2" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#projects" className="block text-zinc-300 hover:text-brand-yellow py-2" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
            <a href="#contact" className="block text-brand-yellow py-2" onClick={() => setIsMenuOpen(false)}>Contáctame</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src="/assets/hero.jpg" 
            alt="Electrician Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
        </div>

        <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-brand-yellow text-brand-black font-display font-black text-xs uppercase tracking-[0.3em] px-4 py-1 mb-6">
              Servicios Profesionales de Electricidad
            </span>
            <h1 className="heading-xl text-white mb-6">
              Energía <span className="text-brand-yellow italic">Segura</span> & Soluciones <span className="text-zinc-400">Técnicas</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-10 max-w-lg font-light leading-relaxed">
              Técnico electricista certificado con más de una década de experiencia en instalaciones de alta calidad. 
              Garantizo seguridad, puntualidad y resultados duraderos para tu hogar o empresa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Solicitar Cotización</a>
              <a href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-brand-black">Ver Servicios</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-brand-yellow/30 translate-x-4 translate-y-4" />
              <img 
                src="/assets/jim-work.jpg" 
                alt="Jim at work" 
                className="w-[450px] grayscale hover:grayscale-0 transition-all duration-700 relative z-10 shadow-2xl border-b-8 border-brand-yellow"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-yellow py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-black text-brand-black mb-1 leading-none">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-brand-black/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <img 
              src="/assets/about-work.jpg" 
              alt="Jim's Work" 
              className="w-full grayscale shadow-xl border-4 border-brand-yellow/20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-[-20px] right-[-20px] bg-brand-yellow p-8 hidden md:block">
              <ShieldCheck size={48} className="text-brand-black" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="heading-lg mb-8">Especialista en Mantenimiento <span className="text-brand-yellow italic">General</span></h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Hola, soy <strong>Jim</strong>. Me dedico a brindar soluciones eléctricas integrales con un enfoque inquebrantable en la seguridad y la eficiencia. 
              Mi trabajo no es solo "arreglar cables", es asegurar que tu infraestructura eléctrica funcione como un reloj suizo.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-yellow shrink-0" size={20} />
                <span className="text-sm font-medium">Cumplimiento estricto con las normativas RETIE y eléctricas locales.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-yellow shrink-0" size={20} />
                <span className="text-sm font-medium">Uso de materiales certificados de primera calidad.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-yellow shrink-0" size={20} />
                <span className="text-sm font-medium">Atención personalizada y asesoría técnica real.</span>
              </li>
            </ul>
            <a href="#projects" className="btn-outline">Ver mi trabajo</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-zinc-100 py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Servicios <span className="text-brand-yellow italic">Especializados</span></h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Haz clic en cada tarjeta para ver detalles técnicos y notas de trabajo para cada especialidad.</p>
          </div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className={`group relative h-[450px] min-w-[85vw] md:min-w-0 cursor-pointer overflow-hidden transition-all duration-500 snap-center ${activeService === service.id ? 'ring-4 ring-brand-yellow' : ''}`}
              >
                {/* Background Image */}
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-brand-black/70 group-hover:bg-brand-black/80 transition-colors" />

                {/* Default Content */}
                <div className={`absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 ${activeService === service.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  <div className="text-brand-yellow mb-6 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="heading-md text-white mb-4">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-brand-yellow text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span>Ver Notas Técnicas</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                {/* Technical Notes Content (on Click) */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    opacity: activeService === service.id ? 1 : 0,
                    y: activeService === service.id ? 0 : 20
                  }}
                  className={`absolute inset-0 p-10 bg-brand-yellow flex flex-col justify-center pointer-events-none ${activeService === service.id ? 'pointer-events-auto' : ''}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="heading-md text-brand-black">{service.title}</h3>
                    <X size={24} className="text-brand-black cursor-pointer" />
                  </div>
                  <div className="h-[2px] w-12 bg-brand-black mb-6" />
                  <p className="text-brand-black font-medium text-sm leading-relaxed mb-6">
                    {service.notes}
                  </p>
                  <div className="flex items-center gap-2 text-brand-black text-[10px] font-black uppercase tracking-[0.2em] pt-4 border-t border-brand-black/20">
                    <CheckCircle2 size={14} />
                    <span>Estándar Profesional</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="heading-lg mb-4">Proyectos <span className="text-brand-yellow italic">Recientes</span></h2>
            <p className="text-zinc-500">Documentando la calidad y el orden en cada instalación.</p>
          </div>
          <div className="hidden md:block h-[2px] flex-1 bg-brand-black/10 mx-12 mb-4" />
        </div>

        <div className="flex overflow-x-auto md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] min-w-[85vw] md:min-w-0 overflow-hidden snap-center"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/80 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-brand-yellow text-xs uppercase tracking-widest font-black mb-2">{project.client}</p>
                <h4 className="heading-md text-white mb-4">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-brand-black text-white py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-8">Equipamiento de <span className="text-brand-yellow italic">Precisión</span></h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Utilizo herramientas de marcas líderes mundiales para garantizar que cada medición sea exacta y cada conexión sea perfecta. 
                Desde multímetros Fluke hasta taladros percutores de alto rendimiento, mi equipo es reflejo de mi compromiso con la excelencia.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-zinc-800 hover:border-brand-yellow transition-colors">
                  <div className="text-brand-yellow mb-4 underline">Calibración Anual</div>
                  <p className="text-xs text-zinc-500 uppercase tracking-tighter italic">Equipos siempre a punto</p>
                </div>
                <div className="p-6 border border-zinc-800 hover:border-brand-yellow transition-colors">
                  <div className="text-brand-yellow mb-4 underline">Seguridad EPP</div>
                  <p className="text-xs text-zinc-500 uppercase tracking-tighter italic">Protocolo nivel industrial</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img 
                src="/assets/tools.jpg" 
                alt="Electrician Tools" 
                className="w-full h-full object-cover grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-brand-yellow/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-zinc-50 text-center border-y border-zinc-200">
         <div className="section-container italic">
            <h2 className="text-3xl md:text-5xl font-display font-light text-zinc-400 leading-tight">
              "Mi compromiso es brindar soluciones eléctricas <span className="text-brand-black font-black not-italic uppercase tracking-tighter px-2">seguras</span>, eficientes y de <span className="text-brand-yellow font-black not-italic uppercase tracking-tighter">calidad</span>."
            </h2>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-lg mb-8">¿Tienes un <span className="text-brand-yellow italic">Proyecto?</span></h2>
            <p className="text-zinc-600 mb-12">Cuéntame lo que necesitas y te responderé con una propuesta técnica y económica detallada en menos de 24 horas.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-brand-black p-4 text-brand-yellow">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-xs tracking-widest mb-1">Llámanos o WhatsApp</h5>
                  <p className="text-xl font-bold">643993173</p>
                  <p className="text-xs text-zinc-400 uppercase italic">Atención 24/7 para emergencias</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand-black p-4 text-brand-yellow">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-xs tracking-widest mb-1">Email Profesional</h5>
                  <p className="text-xl font-bold">jjobe077@gmail.com</p>
                  <p className="text-xs text-zinc-400 uppercase italic">Cotizaciones y facturación</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand-black p-4 text-brand-yellow">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-xs tracking-widest mb-1">Ubicación</h5>
                  <p className="text-xl font-bold">Calle Batalla del Ebro, CP: 35013</p>
                  <p className="text-xs text-zinc-400 uppercase italic">Cobertura en todo el área metropolitana</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand-black p-4 text-brand-yellow">
                  <Instagram size={24} />
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-xs tracking-widest mb-1">Instagram</h5>
                  <a
                    href="https://www.instagram.com/jobishjr5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold hover:text-brand-yellow transition-colors"
                  >
                    jobish jr
                  </a>
                  <p className="text-xs text-zinc-400 uppercase italic">Sígueme para ver proyectos y novedades</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-zinc-200">
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400 mb-6 font-display">Sígueme en Redes</p>
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="https://www.instagram.com/jobishjr5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-zinc-100 hover:bg-brand-yellow transition-all rounded-full group"
                >
                  <Instagram size={20} />
                  <span className="text-xs font-black uppercase tracking-widest overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500 whitespace-nowrap">jobish jr</span>
                </a>
                <a href="#" className="p-3 bg-zinc-100 hover:bg-brand-yellow transition-colors rounded-full"><Facebook size={20} /></a>
                <a href="#" className="p-3 bg-zinc-100 hover:bg-brand-yellow transition-colors rounded-full"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-100 p-8 md:p-12">
            <h3 className="heading-md mb-8">Formulario de <span className="text-brand-yellow italic">Contacto</span></h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Nombre Completo</label>
                  <input type="text" className="w-full bg-white border-none focus:ring-2 focus:ring-brand-yellow p-4 text-sm" placeholder="Ej: Juan Perez" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Teléfono</label>
                  <input type="tel" className="w-full bg-white border-none focus:ring-2 focus:ring-brand-yellow p-4 text-sm" placeholder="Ej: 300..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Email</label>
                <input type="email" className="w-full bg-white border-none focus:ring-2 focus:ring-brand-yellow p-4 text-sm" placeholder="ejemplo@correo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Tipo de Servicio</label>
                <select className="w-full bg-white border-none focus:ring-2 focus:ring-brand-yellow p-4 text-sm appearance-none">
                  <option>Instalación Residencial</option>
                  <option>Mantenimiento Industrial</option>
                  <option>Reparación Urgente</option>
                  <option>Iluminación</option>
                  <option>Otros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Mensaje / Detalles</label>
                <textarea rows={4} className="w-full bg-white border-none focus:ring-2 focus:ring-brand-yellow p-4 text-sm" placeholder="Describe brevemente lo que necesitas..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-5">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="text-brand-yellow fill-brand-yellow" size={24} />
            <span className="font-display text-xl font-black tracking-tighter uppercase italic">JIM</span>
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-4">Calidad, Seguridad y Confianza en cada proyecto</p>
          <div className="text-zinc-600 text-[10px] font-mono">
            © {new Date().getFullYear()} JIM TÉCNICO ELECTRICISTA. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.instagram.com/jobishjr5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-yellow transition-colors text-sm"
            >
              <Instagram size={18} />
              <span className="font-display font-bold uppercase tracking-widest">jobish jr</span>
            </a>
          </div>
          <div className="mt-6 flex justify-center gap-4 text-zinc-500 text-xs">
            <a href="#" className="hover:text-brand-yellow">Términos</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:text-brand-yellow">Privacidad</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:text-brand-yellow">Desarrollado con profesionalismo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
