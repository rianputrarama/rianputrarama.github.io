// components/Hero.jsx
// Section pertama yang keliatan — nama, tagline, foto lo

// Import foto lo dari folder assets
// Ganti nama file sesuai nama foto lo yang lo taruh di src/assets/
import myPhoto from '../assets/photo.jpg'

function Hero() {
  return (
    <section className="hero">

      {/* Efek glow ungu di background */}
      <div className="hero-glow" />

      {/* Kolom kiri: teks */}
      <div>
        {/* Badge "Available for work" */}
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Available for work
        </div>

        {/* Headline utama */}
        <h1>
          Backend Dev who builds<br />
          <em>scalable</em> systems<br />
          &amp; clean APIs.
        </h1>

        {/* Deskripsi singkat */}
        <p className="hero-sub">
          Hi! I'm Rian — a backend developer from Jakarta, Indonesia.
          I love building robust, scalable systems and clean REST APIs
          using Go, Node.js, and Java.
        </p>

        {/* Tombol CTA */}
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact"  className="btn-secondary">Contact Me</a>
        </div>
      </div>

      {/* Kolom kanan: foto */}
      <div className="photo-wrap">
        <img src={myPhoto} alt="Febriansyah Putra Ramadhan — Backend Developer" />
        <div className="photo-badge">
          <strong>Febriansyah Putra Ramadhan</strong>
          Backend Developer · Jakarta
        </div>
      </div>

    </section>
  )
}

export default Hero
