// components/About.jsx
// Section tentang lo + tech stack

// Data skills lo — tinggal edit array ini kalau mau tambah/kurangi skill
const skills = [
  'Golang',
  'Node.js',
  'Java',
  'REST API',
  'PostgreSQL',
  'MySQL',
  'Docker',
  'Git & GitHub',
]

function About() {
  return (
    <section className="section" id="about">
      <p className="section-eyebrow">About Me</p>

      <div className="about-grid">

        {/* Kolom kiri: teks about */}
        <div>
          <h2>Building the engines that power great digital products.</h2>

          <div className="about-text">
            <p>
              I'm a backend developer based in Jakarta, Indonesia. I love
              designing robust systems, building clean APIs, and solving
              complex problems on the server side — especially when the
              product is used by thousands of real users.
            </p>
            <p>
              I've worked on real-world apps like MyKisel, Marissa, and
              CoopIn — products used by thousands of people across Indonesia.
              I focus on performance, reliability, and writing backend code
              that just works.
            </p>
            <p>
              When I'm not coding, you'll find me exploring distributed
              systems, learning new Go patterns, or diving deep into
              database optimization.
            </p>
          </div>
        </div>

        {/* Kolom kanan: tech stack */}
        <div>
          <p className="skills-label">Tech Stack</p>

          <div className="skills-grid">
            {/* .map() = loop array skills, render satu tag per skill */}
            {skills.map((skill) => (
              <div className="skill-tag" key={skill}>
                <span className="skill-dot" />
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
