// Edit your content here. Everything on the page reads from this file.
export const profile = {
  name: 'Stanislav',
  email: 'hello@example.com',
  github: 'https://github.com/Stanislav-08',
  linkedin: 'https://linkedin.com',
}

export type Project = {
  title: string
  shot: string // visual style class: s1 | s2 | s3
  shotText: string
  description: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: 'Future Jobs Analytics',
    shot: 's1',
    shotText: 'Future Jobs\nAnalytics',
    description: 'Interactive dashboard modelling ten years of labor market trends, with live data visualizations and a responsive UI.',
    tags: ['React', 'TypeScript', 'Vercel'],
    link: profile.github,
  },
  {
    title: 'Vacation Manager Suite',
    shot: 's2',
    shotText: 'Vacation\nManager',
    description: 'Windows desktop app with custom pagination, role-based access and conditional date filtering.',
    tags: ['C# / .NET 8', 'WinForms', 'SQL Server'],
    link: profile.github,
  },
  {
    title: 'ESP32 Desk Companion',
    shot: 's3',
    shotText: 'ESP32\nDesk Companion',
    description: 'Open-source desk robot on an ESP32-C3 with an OLED display, audio amplifier and Li-Ion power management.',
    tags: ['ESP32-C3', 'C++', 'OLED / I2C'],
    link: profile.github,
  },
]

export const skills = [
  { group: 'Frontend and web', items: 'HTML5, CSS3, JavaScript, TypeScript, React, Flutter' },
  { group: 'Backend and desktop', items: 'C#, .NET 8, Python, SQL Server, Git' },
  { group: 'Hardware and IoT', items: 'ESP32, microcontrollers, circuit prototyping, SPI and I2C' },
]

export const tickerItems = ['React', 'TypeScript', 'JavaScript', 'Flutter', 'C#', '.NET 8', 'WinForms', 'SQL Server', 'Python', 'C++', 'ESP32', 'I2C / SPI', 'Git', 'Vercel']
