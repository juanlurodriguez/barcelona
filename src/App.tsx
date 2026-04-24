/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  HeartPulse, 
  Globe,
  Menu,
  X
} from "lucide-react";

const FadeUp: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="section-label">
    {children}
  </span>
);

const SectionTitle: React.FC<{ children: React.ReactNode, light?: boolean }> = ({ children, light = false }) => (
  <h2 className={`section-title ${light ? 'text-prestige-bg' : 'text-prestige-ink'}`}>
    {children}
  </h2>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre mí", id: "sobre-mi" },
    { label: "Servicios", id: "servicios" },
    { label: "Proyectos", id: "proyectos" },
    { label: "Contacto", id: "contacto" }
  ];

  return (
    <div className="min-h-screen selection:bg-prestige-blue/20 selection:text-prestige-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-prestige-bg/95 backdrop-blur-md border-b border-prestige-divider transition-all duration-300">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-prestige-ink/40 mb-1">BIENESTAR CORPORATIVO · MALLORCA</span>
          <a href="#hero" className="font-serif text-xl tracking-tight text-prestige-ink hover:text-prestige-blue transition-colors">
            Juan Luis Rodríguez
          </a>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={`#${item.id}`}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-prestige-ink/60 hover:text-prestige-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="mailto:contacto@juanlurodriguez.com" className="bg-prestige-ink text-prestige-bg px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-prestige-blue transition-all shadow-lg">
            Hablemos
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-ink p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-warm-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-ink"
                >
                  {item.label}
                </a>
              ))}
              <div className="w-10 h-[1px] bg-gold" />
              <div className="flex gap-6 mt-4">
                <a href="mailto:contacto@juanlurodriguez.com" className="text-ink-light"><Mail className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/juan-luis-rodriguez-avila-755743275/" className="text-ink-light"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden border-b border-prestige-divider">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 h-full items-stretch">
          <div className="lg:col-span-7 section-padding flex flex-col justify-center border-r border-prestige-divider">
            <FadeUp>
              <SectionLabel>Consultoría en Mallorca</SectionLabel>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-prestige-ink mb-8">
                Bienestar corporativo integral y <span className="italic">cohesión</span> de equipos.
              </h1>
              <p className="text-lg md:text-xl text-prestige-ink/70 font-light leading-relaxed mb-10 max-w-xl">
                Ayudo a empresas a mejorar la salud, la cohesión y el rendimiento de sus equipos. Con un enfoque práctico, humano y sin complicaciones.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: "Salud Laboral", desc: "Programas de fisioterapia y prevención enfocados en el rendimiento." },
                  { title: "Team Building B2B", desc: "Dinamización real pensada para motivar y cohesionar a la plantilla." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-prestige-blue rounded-full"></div>
                      <h3 className="text-[10px] uppercase tracking-widest font-bold text-prestige-ink">{item.title}</h3>
                    </div>
                    <p className="text-sm text-prestige-ink/60 italic leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-8">
                <a href="#contacto" className="border-b-2 border-prestige-ink pb-1 font-bold text-xs tracking-wider uppercase hover:border-prestige-blue hover:text-prestige-blue transition-all">
                  Pedir Presupuesto
                </a>
                <span className="hidden sm:inline text-prestige-ink/20">/</span>
                <a 
                  href="https://www.linkedin.com/in/juan-luis-rodriguez-avila-755743275/" 
                  target="_blank" 
                  rel="noopener" 
                  className="text-prestige-ink/60 hover:text-prestige-blue font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Conectar en LinkedIn
                </a>
              </div>
            </FadeUp>
          </div>
          
          <div className="lg:col-span-5 bg-white/30 flex flex-col items-stretch">
            <div className="flex-1 flex flex-col p-12 lg:p-20 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative aspect-[4/5] bg-prestige-accent rounded-3xl overflow-hidden border border-prestige-ink/5 shadow-inner group cursor-default"
                >
                  <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 select-none">
                    <span className="text-[12rem] font-serif leading-none">JL</span>
                  </div>
                  <img
                    src="https://pub-6b5e631a2e94415a999c6c8f9c26b7a3.r2.dev/juanlu.png"
                    alt="Juan Luis Rodríguez"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-10 left-0 w-full text-center px-8 z-20">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/90 mb-4 drop-shadow-md text-slate-100">Basado en Mallorca</p>
                    <div className="h-px w-12 bg-white/40 mx-auto mb-4"></div>
                    <p className="font-serif text-xl italic text-white drop-shadow-lg">"Claridad, rigor y humanidad."</p>
                  </div>
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-prestige-ink/80 via-transparent to-transparent opacity-70" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quién Soy Section */}
      <section id="sobre-mi" className="bg-prestige-accent/30 section-padding border-b border-prestige-divider">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeUp>
            <SectionLabel>Trayectoria Profesional</SectionLabel>
            <SectionTitle>Un enfoque integral<br />construido en <em className="italic text-prestige-blue">primera línea</em></SectionTitle>
            <div className="w-12 h-[2px] bg-prestige-blue mb-10" />
            <div className="space-y-6 text-prestige-ink/80 leading-relaxed font-light text-lg">
              <p>
                No llego a este proyecto por casualidad. Llego después de años trabajando en contacto directo con las personas: rehabilitando y cuidando desde la fisioterapia, educando a través de la actividad física, dinamizando grupos y coordinando equipos.
              </p>
              <p>
                He unido mi perfil clínico, mi base pedagógica y mi vocación comunicativa para crear una propuesta diferencial. No ofrezco teoría vacía, sino programas reales basados en lo que verdaderamente funciona al trabajar con grupos humanos.
              </p>
              <p>
                Como fundador de la <strong>Asociación Seis Grados</strong>, impulso iniciativas vinculadas a proyectos sociales, juveniles y culturales, un liderazgo social que reafirma mi convicción de que los mejores equipos son aquellos que se sienten motivados, conectados y con propósito.
              </p>
            </div>
          </FadeUp>
          
          <div className="flex flex-col justify-center gap-12">
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {[
                  { value: "Salud", desc: "Base clínica, prevención y mejora postural" },
                  { value: "Humano", desc: "ENFOQUE PRÁCTICO Y SIN FÓRMULAS VACÍAS" },
                  { 
                    value: "Conexión", 
                    desc: "DINAMIZACIÓN DE GRUPOS Y SENTIDO DE PERTENENCIA" 
                  },
                  { value: "Formación", desc: "PROGRAMAS BONIFICABLES PARA EMPRESAS" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-prestige-ink/20 pl-8">
                    <div className="font-serif text-4xl text-prestige-ink mb-2">{stat.value}</div>
                    <div className="text-[10px] tracking-[0.2em] font-bold text-prestige-ink/40 uppercase leading-relaxed">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="section-padding bg-prestige-bg scroll-mt-20">
        <div className="container mx-auto">
          <FadeUp>
            <div className="max-w-2xl mb-16">
              <SectionLabel>Servicios Especializados</SectionLabel>
              <SectionTitle>Gestión integral para<br /><em>equipos vivos y productivos</em></SectionTitle>
              <div className="w-12 h-[1px] bg-prestige-ink/20" />
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 border border-prestige-divider rounded-2xl overflow-hidden shadow-sm">
            {[
              {
                icon: <HeartPulse className="w-8 h-8 text-prestige-blue" />,
                title: "Salud Laboral y Fisioterapia",
                text: "Programas preventivos, ergonomía y salud física. Un equipo sin molestias articulares es un equipo con más enfoque y retención.",
                tag: "Fisioterapia Aplicada"
              },
              {
                icon: <Users className="w-8 h-8 text-prestige-blue" />,
                title: "Cohesión y Dinámicas",
                text: "Actividades de team building y dinamización grupales con propósito. Experiencia garantizada en comunicación, motivación y relaciones.",
                tag: "Clima Organizacional"
              },
              {
                icon: <Building2 className="w-8 h-8 text-prestige-blue" />,
                title: "Formación para Equipos",
                text: "Talleres prácticos sobre gestión del estrés, hábitos saludables, comunicación y liderazgo. En muchos casos, la formación puede financiarse con crédito bonificado que la empresa ya tiene disponible.",
                tag: "FORMACIÓN BONIFICABLE"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="p-10 md:p-14 bg-white/50 border-b md:border-b-0 md:border-r last:border-0 border-prestige-divider hover:bg-white transition-all duration-500 group cursor-default"
              >
                <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="font-serif text-2xl text-prestige-ink mb-4">{service.title}</h3>
                <p className="text-base font-light text-prestige-ink/60 leading-relaxed mb-10 italic">
                  "{service.text}"
                </p>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-prestige-blue border-b border-prestige-blue/20 pb-1">
                  {service.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trayectoria Section */}
      <section id="trayectoria" className="bg-prestige-ink text-prestige-bg section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeUp>
            <SectionLabel>Rigor y Metodología</SectionLabel>
            <SectionTitle light>Una respuesta experta<br /><em className="italic text-prestige-accent font-serif tracking-tight">y diseñada a medida</em></SectionTitle>
            <div className="w-12 h-[1px] bg-white/20 mb-10" />
            <div className="space-y-6 text-prestige-bg/70 leading-relaxed font-light text-lg">
              <p>
                Cada estructura laboral tiene retos distintos. No vengo de una sola disciplina técnica; mi capacidad analítica nace de la unión entre lo fisiológico, lo educativo y lo social.
              </p>
              <p>
                Aporto toda mi experiencia clínica y formativa, apoyándome estructuralmente en una <em>red experta de colaboradores</em>. De esta forma, garantizo que cualquier necesidad de la empresa —por técnica o singular que resulte— reciba una solución de máximo nivel.
              </p>
            </div>
          </FadeUp>
          
          <div className="flex flex-col justify-center">
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  "Fisioterapia y salud articular",
                  "Pedagogía y educación grupal",
                  "Formación bonificable para empresas",
                  "Comunicación asertiva",
                  "Coordinación de dinámicas",
                  "Integración emocional",
                  "Experiencia y trato al público",
                  "Red de expertos asociados"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 bg-prestige-blue rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-light text-prestige-bg/80 leading-snug tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="bg-prestige-bg section-padding border-b border-prestige-divider">
        <div className="container mx-auto">
          <FadeUp>
            <div className="max-w-2xl mb-16">
              <SectionLabel>Liderazgo y Conexión</SectionLabel>
              <SectionTitle>Iniciativas que definen un<br /><em>propósito común</em></SectionTitle>
              <div className="w-12 h-[1px] bg-prestige-ink/20" />
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Linkedin className="w-6 h-6" />,
                name: "LinkedIn",
                desc: "Trayectoria profesional, reflexiones sobre bienestar corporativo y novedades de proyectos.",
                link: "https://www.linkedin.com/in/juan-luis-rodriguez-avila-755743275/",
                action: "Red Profesional"
              },
              {
                icon: <img src="https://pub-faa1d5bae1cd41a594ac4deff8eafd71.r2.dev/logo.svg" alt="Seis Grados" className="w-10 h-10 object-contain" />,
                name: "Asociación Seis Grados",
                desc: "Proyecto de liderazgo social fundado para promover la conexión humana, la formación y el desarrollo comunitario.",
                link: "https://www.asociacionseisgrados.org",
                action: "Desarrollo Social"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                name: "Canal Directo",
                desc: "Plantea tus dudas o pide información sobre mis servicios y los de mi red de colaboradores.",
                link: "mailto:contacto@juanlurodriguez.com",
                action: "Solicitar Información"
              }
            ].map((proj, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener"
                  className="block group h-full"
                >
                  <div className="mb-8 text-prestige-ink group-hover:text-prestige-blue transition-colors duration-500">{proj.icon}</div>
                  <h3 className="font-serif text-2xl text-prestige-ink mb-4">{proj.name}</h3>
                  <p className="text-sm font-light text-prestige-ink/60 leading-relaxed mb-8 italic">"{proj.desc}"</p>
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-prestige-blue">
                    {proj.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="section-padding bg-prestige-accent/10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <SectionLabel>Contactar</SectionLabel>
            <SectionTitle>Iniciemos una conversación<br />sobre <em>tu equipo</em></SectionTitle>
            <div className="w-12 h-[1px] bg-prestige-ink/20 mb-12" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { label: "Canal Telefónico", val: "640 761 701", href: "tel:+34640761701" },
                { label: "Email Directo", val: "contacto@juanlurodriguez.com", href: "mailto:contacto@juanlurodriguez.com" },
                { label: "Sede", val: "Mallorca", href: "#" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-prestige-ink/40 mb-3">{item.label}</div>
                  <a href={item.href} className="text-xl font-serif text-prestige-ink hover:text-prestige-blue transition-colors italic">{item.val}</a>
                </div>
              ))}
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="bg-prestige-ink text-prestige-bg p-12 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              {/* Subtle visual inside the box */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl transition-all group-hover:bg-prestige-blue/10 duration-1000" />
              
              <p className="font-serif text-2xl md:text-3xl font-light leading-snug mb-12 relative z-10">
                ¿Quieres mejorar el bienestar y el rendimiento de tu equipo? Hablemos sin compromiso.
              </p>
              <a href="mailto:contacto@juanlurodriguez.com" className="btn-primary w-full justify-center py-6 bg-prestige-bg text-prestige-ink hover:bg-white hover:text-prestige-blue ring-1 ring-white/10 relative z-10">
                Hablemos
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-prestige-ink text-white/40 section-padding py-20 px-12 md:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <div className="font-serif text-3xl text-white mb-3">Juan Luis Rodríguez</div>
              <div className="text-[10px] items-center gap-3 flex font-bold tracking-[0.3em] uppercase text-white/30">
                <span className="w-8 h-px bg-white/10" /> Bienestar Corporativo
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={`#${item.id}`}
                  className="text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] font-medium text-white/20">
            <div>© 2026 Juan Luis Rodríguez · Consultoría Estratégica</div>
            <div className="flex gap-10">
              <a href="https://www.linkedin.com/in/juan-luis-rodriguez-avila-755743275/" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
