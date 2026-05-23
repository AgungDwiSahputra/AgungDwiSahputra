export type Lang = 'id' | 'en';

export const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.about':      { id: 'Tentang',  en: 'About'    },
  'nav.skills':     { id: 'Keahlian', en: 'Skills'   },
  'nav.projects':   { id: 'Proyek',   en: 'Projects' },
  'nav.contact':    { id: 'Kontak',   en: 'Contact'  },
  'nav.downloadcv': { id: 'Unduh CV', en: 'Download CV' },
  'nav.search':     { id: 'Cari',     en: 'Search'   },

  // Hero
  'hero.greeting':    { id: 'Hai, saya',   en: "Hi, I'm"   },
  'hero.role':        { id: 'Full-Stack Web Developer', en: 'Full-Stack Web Developer' },
  'hero.bio':         {
    id: '3+ tahun membangun aplikasi web yang responsif, scalable, dan SEO-friendly. Spesialis Laravel, TailwindCSS, dan sistem GIS berbasis peta.',
    en: '3+ years building responsive, scalable, and SEO-friendly web applications. Specialist in Laravel, TailwindCSS, and GIS map-based systems.',
  },
  'hero.cta_projects': { id: 'Lihat Proyek',  en: 'View Projects' },
  'hero.cta_cv':       { id: 'Unduh CV',      en: 'Download CV'   },
  'hero.available':    { id: 'Terbuka untuk peluang karir', en: 'Open to opportunities' },
  'hero.years_label':  { id: 'Tahun Exp.',  en: 'Years Exp.'  },
  'hero.sat_label':    { id: 'Client Puas', en: 'Clients Sat.'  },
  'hero.time_label':   { id: 'Tepat Waktu', en: 'On-time'     },

  // Sections
  'about.label':    { id: 'Tentang Saya',             en: 'About Me'               },
  'about.title':    { id: 'Perjalanan & Pengalaman',  en: 'Journey & Experience'   },
  'about.subtitle': { id: 'Dari desainer grafis hingga full-stack developer — evolusi karir yang terus berkembang.', en: 'From graphic designer to full-stack developer — a career that keeps evolving.' },
  'about.cert':     { id: 'Sertifikasi & Penghargaan', en: 'Certifications & Awards' },
  'about.edu':      { id: 'Pendidikan',               en: 'Education'              },
  'about.work':     { id: 'Pengalaman Kerja',         en: 'Work Experience'        },
  'about.current':  { id: 'Saat ini',                 en: 'Current'                },

  'skills.label':    { id: 'Kompetensi',  en: 'Competencies'  },
  'skills.title':    { id: 'Keahlian Teknis', en: 'Technical Skills' },
  'skills.subtitle': { id: 'Stack teknologi yang saya gunakan sehari-hari dalam membangun produk digital.', en: 'Technology stack I use daily to build digital products.' },

  'projects.label':    { id: 'Portfolio',      en: 'Portfolio'      },
  'projects.title':    { id: 'Proyek Unggulan', en: 'Featured Projects' },
  'projects.subtitle': { id: 'Beberapa proyek terpilih yang menunjukkan keahlian teknis saya.', en: 'A selection of projects showcasing my technical expertise.' },
  'projects.viewall':  { id: 'Lihat semua proyek', en: 'View all projects' },
  'projects.viewall_btn': { id: 'Lihat Semua Proyek', en: 'View All Projects' },
  'projects.detail':   { id: 'Lihat Detail', en: 'View Detail' },

  'contact.label':       { id: 'Kontak',             en: 'Contact'           },
  'contact.title':       { id: 'Mari Berkolaborasi',  en: "Let's Collaborate" },
  'contact.subtitle':    { id: 'Punya proyek menarik atau tawaran kerja? Saya siap mendengar dari Anda.', en: 'Have an exciting project or job offer? I\'d love to hear from you.' },
  'contact.name':        { id: 'Nama Lengkap',        en: 'Full Name'         },
  'contact.name_ph':     { id: 'Masukkan nama Anda',  en: 'Enter your name'   },
  'contact.email':       { id: 'Email',               en: 'Email'             },
  'contact.email_ph':    { id: 'nama@domain.com',     en: 'name@domain.com'   },
  'contact.message':     { id: 'Pesan',               en: 'Message'           },
  'contact.message_ph':  { id: 'Tuliskan pesan atau pertanyaan Anda...', en: 'Write your message or question here...' },
  'contact.send':        { id: 'Kirim Pesan',         en: 'Send Message'      },
  'contact.sending':     { id: 'Mengirim...',         en: 'Sending...'        },
  'contact.success':     { id: 'Pesan terkirim! Saya akan membalas dalam 1–2 hari kerja.', en: 'Message sent! I\'ll reply within 1–2 business days.' },
  'contact.error':       { id: 'Gagal mengirim. Coba lagi atau hubungi via email langsung.', en: 'Failed to send. Please try again or contact me directly via email.' },
  'contact.email_direct': { id: 'Kirim Email Langsung', en: 'Send Direct Email' },
  'contact.or':          { id: 'atau', en: 'or' },
};
