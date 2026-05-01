// components/Contact.jsx
// Halaman contact tanpa form — langsung link ke semua kontak lo

const contacts = [
  {
    id: 1,
    icon: '✉️',
    label: 'Email',
    value: 'myemail@email.com',
    href: 'mailto:rianpr20@email.com',
    desc: 'Balas dalam 1x24 jam',
  },
  {
    id: 2,
    icon: '💬',
    label: 'WhatsApp',
    value: '+62 8xx-xxxx-xxxx',
    href: 'https://wa.me/6281311740293',
    desc: 'Lebih cepat lewat sini',
  },
  {
    id: 3,
    icon: '💼',
    label: 'LinkedIn',
    value: 'Febriansyah Putra Ramadhan',
    href: 'https://www.linkedin.com/in/febriansyah-putra-ramadhan/',
    desc: 'Connect & lihat pengalaman gue',
  },
  {
    id: 4,
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/rianputrarama',
    href: 'https://github.com/rianputrarama',
    desc: 'Lihat kode & project gue',
  },
]

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <p className="section-eyebrow" style={{textAlign:'center'}}>Contact</p>
      <h2 style={{textAlign:'center'}}>Let's work together.</h2>

      <p className="contact-tagline">
        Punya project menarik atau mau ngobrol soal backend?<br />
        Gue selalu terbuka untuk kolaborasi dan kesempatan baru.
      </p>

      {/* Grid 2x2 contact cards */}
      <div className="contact-cards">
        {contacts.map((c) => (
          <a
            key={c.id}
            href={c.href}
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-card-icon">{c.icon}</div>
            <div className="contact-card-info">
              <div className="contact-card-label">{c.label}</div>
              <div className="contact-card-value">{c.value}</div>
              <div className="contact-card-desc">{c.desc}</div>
            </div>
            <div className="contact-card-arrow">→</div>
          </a>
        ))}
      </div>

    </section>
  )
}

export default Contact
