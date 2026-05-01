// components/Projects.jsx
// Project cards dengan modal popup saat diklik

import { useState } from 'react'

// Import gambar screenshot project
import imgMyKisel from '../assets/mykisel.jpg'
import imgMarissa from '../assets/marissa.jpg'
import imgCoopin  from '../assets/coopin.jpg'

// ─── DATA PROJECT ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    image: imgMyKisel,
    title: 'MyKisel — Backend Services',
    shortDesc: 'Platform koperasi MyKisel milik Kisel Group.',
    fullDesc: `MyKisel adalah aplikasi mobile layanan koperasi milik Kisel Group.

Ikut berkontribusi dalam pengembangan backend services — mencakup sistem autentikasi user, manajemen wallet & transaksi, serta integrasi dengan payment gateway.

Semua API dibangun menggunakan Golang untuk memastikan performa tinggi dan latensi yang rendah.`,
    tags: ['Golang', 'REST API', 'MySQL'],
    year: '2022',
    role: 'Backend Developer',
  },
  {
    id: 2,
    image: imgMarissa,
    title: 'Marissa — HR Platform',
    shortDesc: 'Platform HR internal Kisel Group dengan fitur attendance gamification.',
    fullDesc: `Marissa adalah platform HR internal yang digunakan oleh seluruh karyawan Kisel Group.

Berkontribusi dalam pengembangan backend API untuk fitur attendance gamification (level, badge, ranking), forum diskusi karyawan, sistem pencapaian, dan manajemen profil karyawan.

Platform ini berhasil meningkatkan engagement dan partisipasi karyawan secara signifikan.`,
    tags: ['Golang', 'MySQL', 'REST API'],
    year: '2021',
    role: 'Backend Developer',
  },
  {
    id: 3,
    image: imgCoopin,
    title: 'CoopIn — Digital Cooperative',
    shortDesc: 'Platform koperasi digital Koperasi Merah Putih & Kisel Group.',
    fullDesc: `CoopIn adalah platform koperasi digital lengkap hasil kolaborasi Koperasi Merah Putih dan Kisel Group.

Ikut serta dalam pengembangan core backend dengan arsitektur microservice — mencakup sistem simpanan & pinjaman anggota, laporan keuangan otomatis, manajemen data anggota, serta dashboard admin.

Setiap service dibangun secara independen menggunakan Golang, memungkinkan sistem lebih scalable dan mudah di-maintain.`,
    tags: ['Golang', 'Microservice', 'Fintech'],
    year: '2024',
    role: 'Backend Developer',
  },
]

// ─── MODAL COMPONENT ──────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Handle bar — keliatan di mobile kayak bottom sheet */}
        <div className="modal-handle" />

        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-img-wrap">
          <img src={project.image} alt={project.title} className="modal-img" />
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className="modal-meta-item">📅 {project.year}</span>
            <span className="modal-meta-item">👨‍💻 {project.role}</span>
          </div>

          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-desc">{project.fullDesc}</p>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── PROJECT CARD ─────────────────────────────────────────────
function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-img-wrap">
        <img className="project-img" src={project.image} alt={project.title} />
        <div className="project-img-overlay">
          <span className="project-view-btn">🔍 View Project</span>
        </div>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.shortDesc}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SECTION PROJECTS ─────────────────────────────────────────
function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section className="section" id="projects">
      <p className="section-eyebrow">Projects</p>
      <h2>Things I've built.</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setActiveProject}
          />
        ))}
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}

export default Projects
