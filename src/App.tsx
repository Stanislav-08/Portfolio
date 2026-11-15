import { useState, type FormEvent } from 'react'
import { profile, projects, skills, tickerItems, type Project } from './data'

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
        <p className="avail"><i /> Available for freelance and full-time work</p>
        {/* Replace with <img src="/photo.jpg" alt={profile.name} /> once you add a photo to /public */}
        <div className="photo" role="img" aria-label="Portrait placeholder">{profile.name[0]}</div>
        <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
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
