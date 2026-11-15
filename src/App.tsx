import { useState, type FormEvent } from 'react'
import { profile, projects, skills, tickerItems, type Project } from './data'

const ICONS = {
  github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01',
}

function Icon({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
  )
}

function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="brand">{profile.name}</a>
      <nav aria-label="Main">
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" className="pill">Start a project</a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Code that runs from the browser to the <em>breadboard.</em></h1>
        <p className="lead">I'm {profile.name}, a full-stack and embedded developer. I build web apps, Windows desktop software and ESP32 devices, and I take each one from first sketch to working build.</p>
        <ul className="chips">
          {['React', 'TypeScript', 'C# / .NET', 'ESP32'].map((c) => <li key={c}>{c}</li>)}
        </ul>
        <div className="stats">
          <div className="stat light"><span>3</span><small>Platforms: web, desktop, embedded</small></div>
          <div className="stat"><span>3</span><small>Featured projects, one per platform</small></div>
        </div>
        <div className="actions">
          <a href="#contact" className="btn btn-light">Start a project</a>
          <a href="#projects" className="btn btn-ghost">View my work</a>
        </div>
      </div>

      <aside className="profile" aria-label="Profile">
        <p className="avail">Available for freelance and full-time work</p>
        <div className="photo"><img src="/photo.jpg" alt={profile.name} /></div>
        <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <p className="loc">{profile.location}</p>
        <div className="icons">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon d={ICONS.github} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon d={ICONS.linkedin} /></a>
          <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon d={ICONS.facebook} /></a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon d={ICONS.instagram} /></a>
        </div>
        <a className="resume" href={profile.resume} target="_blank" rel="noopener noreferrer">
          <span>Download my resume</span><span aria-hidden="true">↗</span>
        </a>
      </aside>
    </section>
  )
}

function Ticker() {
  const items = [...tickerItems, ...tickerItems]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">{items.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="block about">
      <h2>I like systems you can deploy and systems you can touch.</h2>
      <div className="about-text">
        <p>I turn ideas into working things: a React app on the cloud, a C# desktop tool backed by SQL Server, or an ESP32 wired up on a breadboard.</p>
        <p>I write modular, maintainable code, tune interfaces for speed and clarity, and enjoy collaborating on technical projects that don't have an obvious answer yet.</p>
      </div>
    </section>
  )
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="proj">
      <div className={`shot ${p.shot}`}><b style={{ whiteSpace: 'pre-line' }}>{p.shotText}</b></div>
      <div className="meta">
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <a href={p.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="block">
      <h2>Work that runs on a screen, a desk and a desktop.</h2>
      <div className="work">{projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="block">
      <h2>One person, the whole stack.</h2>
      <div className="skills">
        {skills.map((s, i) => (
          <details key={s.group} open={i === 0}>
            <summary>{s.group}</summary>
            <p>{s.items}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const { name, email, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) return
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email app…')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="block contact">
      <div>
        <h2>Have something in mind? Let's talk it through.</h2>
        <p className="muted">Tell me what you're building and where you're stuck. I reply within a couple of days.</p>
      </div>
      <form className="form" onSubmit={submit}>
        <div className="row">
          <input type="text" placeholder="Your name" autoComplete="name" required value={form.name} onChange={set('name')} />
          <input type="email" placeholder="Your email" autoComplete="email" required value={form.email} onChange={set('email')} />
        </div>
        <textarea rows={5} placeholder="What are you building?" required value={form.message} onChange={set('message')} />
        <button type="submit" className="btn btn-accent">Send message</button>
        <p className="status" aria-live="polite">{status}</p>
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React, hosted on Vercel.</p>
      <a href="#top">Back to top</a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
