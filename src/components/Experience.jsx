// components/Experience.jsx
// Timeline pengalaman kerja lo

// Data pengalaman — tinggal edit/tambah di sini
const experiences = [
  {
    id: 1,
    date: '2022 – Now',
    role: 'Backend Developer',
    company: 'PT Kinarya Utama Teknik · Jakarta',
    desc: 'Built and maintained backend services for MyKisel, Marissa, and CoopIn using Golang and Node.js. Designed REST APIs, managed databases, and collaborated with frontend teams to ship production-ready features.',
  },
  {
    id: 2,
    date: '2020 – 2022',
    role: 'Backend Developer',
    company: 'PT KiselGroup - Jakarta',
    desc: 'Developed backend systems and REST APIs for clients — including e-commerce and business tools. Worked with Node.js, Golang MySQL, and Java SpringBoot services.',
  },
  {
    id: 3,
    date: '2018 – 2020',
    role: 'Web Developer',
    company: 'PT Medianet support Telkomsel - Jakarta',
    desc: 'Development of web apps, dashboards, and APIs — starting with Javascript, PHP, and exploring Java. Built dashboard monitoring for internal use and client reporting tools.',
  },
  {
    id: 4,
    date: '2017 – 2018',
    role: 'Web Developer',
    company: 'PT Nuansa Citra Ramantha - Jakarta',
    desc: 'Development of web apps and dashboards — starting with PHP CodeIgniter, and javascript. Built internal tools and client websites, gaining experience in full-stack development and project management.',
  },
]

function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-eyebrow">Experience</p>
      <h2>Where I've worked.</h2>

      <div className="exp-list">
        {experiences.map((exp) => (
          // Satu baris pengalaman
          <div className="exp-item" key={exp.id}>
            <div className="exp-date">{exp.date}</div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-desc">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
