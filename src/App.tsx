import { useState } from "react";
import type { ReactNode } from "react";
import { Menu, X, MessageCircle, Mail, Phone, CheckCircle2, HeartPulse, Brain, Users, ClipboardCheck } from "lucide-react";

const wa = "https://wa.me/34640761701?text=Hola%20Juanlu%2C%20quiero%20solicitar%20un%20diagnostico%20360%20gratuito%20para%20mi%20empresa.";
const crm = "https://airtable.com/appjBVElF81S92Hxj/pagpdUxH1dnUQMFRL/form";
const email = "mailto:contacto@juanlurodriguez.com?subject=Diagnostico%20360%20gratuito";
const linkedin = "https://www.linkedin.com/in/juan-luis-rodriguez-avila-755743275/";

const nav = [
  ["Diagnóstico", "diagnostico"],
  ["Servicios", "servicios"],
  ["Método", "metodo"],
  ["FUNDAE", "fundae"],
  ["Contacto", "contacto"],
];

function Label({ children }: { children: ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function Title({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`section-title ${light ? "text-prestige-bg" : "text-prestige-ink"}`}>{children}</h2>;
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-prestige-bg text-prestige-ink pb-24 md:pb-0">
      <nav className="fixed inset-x-0 top-0 z-50 bg-prestige-bg/95 backdrop-blur border-b border-prestige-divider px-5 md:px-12 py-4 md:py-5 flex items-center justify-between">
        <a href="#hero" className="block">
          <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-bold text-prestige-ink/40">Bienestar corporativo · FUNDAE · Mallorca</span>
          <span className="font-serif text-lg sm:text-xl">Juan Luis Rodríguez</span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-[10px] font-bold tracking-[0.2em] uppercase text-prestige-ink/60 hover:text-prestige-blue">{label}</a>)}
          <a href={wa} target="_blank" rel="noopener" className="bg-prestige-ink text-prestige-bg px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-prestige-blue">Diagnóstico gratis</a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">{open ? <X /> : <Menu />}</button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-prestige-bg pt-28 px-6 lg:hidden">
          <div className="flex flex-col items-center gap-7 text-center">
            {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="font-serif text-3xl">{label}</a>)}
            <a href={wa} target="_blank" rel="noopener" className="btn-primary w-full justify-center max-w-xs">WhatsApp</a>
            <a href={crm} target="_blank" rel="noopener" className="btn-outline w-full justify-center max-w-xs">Dejar datos</a>
          </div>
        </div>
      )}

      <section id="hero" className="pt-28 md:pt-32 border-b border-prestige-divider grid lg:grid-cols-12">
        <div className="lg:col-span-7 section-padding flex flex-col justify-center border-r border-prestige-divider">
          <Label>Bienestar corporativo bonificable</Label>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-7 max-w-4xl">Reduce bajas, mejora el clima y consigue que tu equipo quiera quedarse.</h1>
          <p className="text-base sm:text-lg md:text-xl text-prestige-ink/70 font-light leading-relaxed mb-8 max-w-2xl">Diseño formaciones y experiencias corporativas prácticas para cuidar la salud física, mental y relacional de tus trabajadores. Sin actividades de relleno. Con una propuesta clara y adaptada a tu empresa.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-9">
            <a href={wa} target="_blank" rel="noopener" className="btn-primary justify-center"><MessageCircle className="w-4 h-4" /> WhatsApp diagnóstico</a>
            <a href={crm} target="_blank" rel="noopener" className="btn-outline justify-center"><ClipboardCheck className="w-4 h-4" /> Dejar mis datos</a>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
            {["Diagnóstico 360º gratuito", "Propuesta a medida en 48h", "Formaciones bonificables", "Presencial en Mallorca y online"].map(item => <div key={item} className="flex items-center gap-3 text-sm text-prestige-ink/65"><CheckCircle2 className="w-4 h-4 text-prestige-blue shrink-0" />{item}</div>)}
          </div>
        </div>
        <div className="lg:col-span-5 bg-white/40 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6 lg:gap-8">
          <div className="relative aspect-[4/5] bg-prestige-accent rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-inner max-w-sm w-full mx-auto lg:max-w-none">
            <img src="https://pub-6b5e631a2e94415a999c6c8f9c26b7a3.r2.dev/juanlu.png" alt="Juan Luis Rodríguez" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-prestige-ink/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 md:bottom-8 left-0 right-0 px-6 md:px-8 text-white"><p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold mb-3 md:mb-4">Juanlu Rodríguez · Mallorca</p><p className="font-serif text-xl md:text-2xl italic leading-tight">Salud, cohesión y rendimiento para empresas que quieren cuidar a su gente de verdad.</p></div>
          </div>
          <div className="bg-prestige-ink text-prestige-bg rounded-[1.5rem] p-6 md:p-7 shadow-2xl"><p className="font-serif text-xl md:text-2xl leading-tight mb-4">No pierdes solo horas por bajas. Pierdes energía, compromiso, clima y talento.</p><p className="text-sm text-prestige-bg/65">El bienestar bien diseñado es una herramienta empresarial.</p></div>
        </div>
      </section>

      <section id="diagnostico" className="section-padding bg-prestige-accent/30 border-b border-prestige-divider scroll-mt-24">
        <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5"><Label>Diagnóstico 360º gratuito</Label><Title>Antes de venderte una actividad, entiendo qué necesita tu equipo.</Title><p className="text-lg text-prestige-ink/70 mb-8">Primero medimos. Después proponemos. Tus trabajadores responden un test breve y anónimo sobre salud física, estrés y cohesión.</p><div className="flex flex-col sm:flex-row gap-4"><a href={wa} target="_blank" rel="noopener" className="btn-primary justify-center"><MessageCircle className="w-4 h-4" /> WhatsApp</a><a href={crm} target="_blank" rel="noopener" className="btn-outline justify-center"><ClipboardCheck className="w-4 h-4" /> Formulario CRM</a></div></div>
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-5">{[["3 min", "Test breve"], ["3 áreas", "Cuerpo, mente y equipo"], ["48h", "Propuesta clara"]].map(([a,b]) => <div key={a} className="bg-white/70 rounded-[1.5rem] p-8 border border-prestige-divider"><div className="font-serif text-4xl text-prestige-blue mb-3">{a}</div><p className="text-sm text-prestige-ink/60">{b}</p></div>)}</div>
        </div>
      </section>

      <section className="section-padding bg-prestige-ink text-prestige-bg">
        <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center"><div><Label>Impacto empresarial</Label><Title light>El bienestar no es un gasto blando. Es una palanca de retención y productividad.</Title><p className="text-lg text-prestige-bg/70">Cuando la gente se desgasta, pierde pertenencia, comunicación y energía. Ahí aparecen las bajas, la rotación y el bajo rendimiento.</p></div><div className="grid sm:grid-cols-2 gap-5">{["Menos bajas físicas y psicosociales", "Mejor clima laboral", "Más cohesión", "Mayor retención de talento"].map(x => <div key={x} className="border border-white/10 rounded-2xl p-7 bg-white/[0.03]"><CheckCircle2 className="w-5 h-5 mb-4" /><p className="text-sm text-prestige-bg/75">{x}</p></div>)}</div></div>
      </section>

      <section id="servicios" className="section-padding scroll-mt-24">
        <div className="container mx-auto"><div className="max-w-3xl mb-14"><Label>Servicios para empresas</Label><Title>Soluciones prácticas para cuidar cuerpo, mente y equipo.</Title><p className="text-lg text-prestige-ink/65">Acciones diseñadas según el tipo de empresa, el perfil de trabajadores y el problema que quieres resolver.</p></div><div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">{[[<HeartPulse />, "Salud física laboral", "Espalda sana, ergonomía, movilidad y prevención."], [<Brain />, "Salud mental", "Estrés, comunicación y regulación emocional."], [<Users />, "Team building", "Cohesión, confianza y pertenencia."], [<CheckCircle2 />, "Wellness days", "Jornadas de bienestar corporativo."]].map(([icon,title,desc]) => <div key={String(title)} className="bg-white/65 border border-prestige-divider rounded-[1.5rem] p-8 h-full"><div className="text-prestige-blue mb-6">{icon}</div><h3 className="font-serif text-2xl mb-4">{title}</h3><p className="text-sm text-prestige-ink/60">{desc}</p></div>)}</div></div>
      </section>

      <section id="metodo" className="section-padding bg-prestige-accent/25 border-y border-prestige-divider scroll-mt-24"><div className="container mx-auto"><Label>Método</Label><Title>Simple para la empresa. Potente para el equipo.</Title><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">{[["01","Diagnóstico"],["02","Propuesta en 48h"],["03","Encaje FUNDAE"],["04","Ejecución y medición"]].map(([n,t]) => <div key={n} className="bg-prestige-bg border border-prestige-divider rounded-[1.5rem] p-8"><div className="font-serif text-5xl text-prestige-blue/40 mb-6">{n}</div><h3 className="font-serif text-2xl">{t}</h3></div>)}</div></div></section>

      <section id="fundae" className="section-padding scroll-mt-24"><div className="container mx-auto grid lg:grid-cols-12 gap-12"><div className="lg:col-span-5"><Label>Formación bonificable</Label><Title>Tu empresa puede tener crédito formativo sin utilizar.</Title><p className="text-lg text-prestige-ink/70 mb-6">Muchas acciones pueden plantearse como formación bonificable a través de FUNDAE, sujeto a crédito disponible y cumplimiento de requisitos.</p><a href={email} className="btn-outline">Consultar encaje FUNDAE <Mail className="w-4 h-4" /></a></div><div className="lg:col-span-7 grid md:grid-cols-3 gap-5">{[["Formación puntual","Desde 680€"],["Team building","Desde 1.700€"],["Plan 360º","A medida"]].map(([a,b]) => <div key={a} className="bg-white/70 rounded-[1.5rem] border border-prestige-divider p-8"><p className="text-[10px] uppercase tracking-[0.22em] text-prestige-ink/35 font-bold mb-4">{a}</p><div className="font-serif text-4xl">{b}</div></div>)}</div></div></section>

      <section id="contacto" className="section-padding bg-prestige-accent/10 scroll-mt-24"><div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center"><div><Label>Contacto</Label><Title>Empecemos por detectar dónde está perdiendo energía tu equipo.</Title><p className="text-lg text-prestige-ink/70 mb-8">Escríbeme y te preparo el primer paso: diagnóstico 360º, lectura del contexto y recomendación de acciones.</p><div className="grid sm:grid-cols-2 gap-6"><a href="tel:+34640761701" className="font-serif text-xl"><Phone className="inline w-5 h-5 mr-2 text-prestige-blue" />640 761 701</a><a href="mailto:contacto@juanlurodriguez.com" className="font-serif text-xl"><Mail className="inline w-5 h-5 mr-2 text-prestige-blue" />Email directo</a></div></div><div className="bg-prestige-ink text-prestige-bg p-9 md:p-14 rounded-[2.5rem] shadow-2xl"><p className="font-serif text-3xl md:text-4xl font-light leading-tight mb-8">Elige la vía rápida: WhatsApp o formulario directo al CRM.</p><div className="flex flex-col gap-4"><a href={wa} target="_blank" rel="noopener" className="btn-primary w-full justify-center bg-prestige-bg text-prestige-ink hover:bg-white"><MessageCircle className="w-4 h-4" /> WhatsApp</a><a href={crm} target="_blank" rel="noopener" className="btn-outline w-full justify-center border-white/20 text-prestige-bg hover:border-white/50 hover:text-white"><ClipboardCheck className="w-4 h-4" /> Dejar datos en formulario</a></div><p className="text-xs text-prestige-bg/45 mt-6 italic">Propuestas sujetas a crédito disponible y requisitos aplicables.</p></div></div></section>

      <footer className="bg-prestige-ink text-white/40 px-8 md:px-24 py-16"><div className="container mx-auto flex flex-col md:flex-row justify-between gap-8"><div><div className="font-serif text-3xl text-white mb-3">Juan Luis Rodríguez</div><p className="text-[10px] uppercase tracking-[0.3em]">Bienestar corporativo bonificable</p></div><div className="flex gap-8 text-[10px] uppercase tracking-widest"><a href={linkedin}>LinkedIn</a><a href="mailto:contacto@juanlurodriguez.com">Email</a></div></div></footer>

      <div className="fixed left-3 right-3 bottom-3 z-50 grid grid-cols-2 gap-2 md:hidden">
        <a href={wa} target="_blank" rel="noopener" className="bg-prestige-ink text-prestige-bg rounded-full px-4 py-4 text-center text-[10px] font-bold tracking-[0.14em] uppercase shadow-2xl flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
        <a href={crm} target="_blank" rel="noopener" className="bg-prestige-bg text-prestige-ink border border-prestige-divider rounded-full px-4 py-4 text-center text-[10px] font-bold tracking-[0.14em] uppercase shadow-2xl flex items-center justify-center gap-2"><ClipboardCheck className="w-4 h-4" /> Datos</a>
      </div>
    </main>
  );
}
