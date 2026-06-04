/* ============================================
 * CERRUDO2 — Enhanced Portfolio JavaScript
 * ──────────────────────────────────────────────
 * Features:
 *  1. Animated canvas background (Constellations)
 *     — Adapted from Odysseus UI (theme.js)
 *  2. i18n (ES ↔ EN) full translations from CV
 *  3. Scroll-triggered domino reveal animations
 *  4. Nav scroll effects + active link
 *  5. Mobile hamburger menu
 *  6. Scroll-to-top button
 *  7. Timeline item reveal
 * ============================================ */

// ═══════════════════════════════════════════════
// 1. ANIMATED BACKGROUND — Constellations Effect
//    Adapted from Odysseus (theme.js lines 1664-1758)
//    This creates a network of drifting, twinkling
//    particles connected by proximity lines.
// ═══════════════════════════════════════════════
//
// HOW TO CUSTOMIZE:
//   - STAR_COUNT: Number of particles (default: 60).
//     More = denser. For mobile, we auto-reduce.
//   - CONNECT_DIST: Max distance to draw a line
//     between two particles (default: 140px).
//   - Star color: Uses CSS variable --fg (cyan #9cdef2).
//     Change --fg in style.css to change particle color.
//   - Opacity: Controlled by --bg-effect-intensity in CSS
//     (default 0.6). Set to 0 to hide, 1 for full.
//   - Speed: Adjust vx/vy multiplier (default: 0.18).
//
// HOW TO SWITCH TO A DIFFERENT EFFECT:
//   Replace the initConstellations() call in the DOMContentLoaded
//   listener with one of the alternative effects below:
//     - initConstellations()  → Slow drifting particle network
//     - initRain()            → Falling vertical streaks
//     - initSparkles()        → Twinkling 4-pointed stars
//   All effects use the same <canvas id="bg-canvas"> element.
// ═══════════════════════════════════════════════

function initConstellations() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Parameters — tune these!
  const isMobile = window.innerWidth < 600;
  const STAR_COUNT = isMobile ? 30 : 60;
  const CONNECT_DIST = isMobile ? 100 : 140;
  const SPEED = 0.18;

  let W, H;
  let stars = [];

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: 0.8 + Math.random() * 1.0,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  resize();
  initStars();

  window.addEventListener('resize', () => { resize(); initStars(); });

  // Read color from CSS variable (reactive to theme changes)
  function getColor() {
    const s = getComputedStyle(document.documentElement);
    return s.getPropertyValue('--fg').trim() || '#9cdef2';
  }

  let t = 0;
  function draw() {
    requestAnimationFrame(draw);
    t += 0.008;
    ctx.clearRect(0, 0, W, H);
    const c = getColor();

    // Move particles (wrap at edges)
    for (const s of stars) {
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H;
      if (s.y > H) s.y = 0;
    }

    // Draw connecting lines between nearby particles
    ctx.strokeStyle = c;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          ctx.globalAlpha = (1 - dist / CONNECT_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles with twinkle
    ctx.fillStyle = c;
    for (const s of stars) {
      const twinkle = 0.5 + 0.5 * Math.sin(t * 2 + s.phase);
      ctx.globalAlpha = 0.2 + twinkle * 0.3;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  draw();
}

// ── Alternative: Rain Effect ──
// Uncomment and call initRain() instead of initConstellations()
function initRain() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W, H;
  const DROP_COUNT = 80;
  let drops = [];

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function initDrops() {
    drops = [];
    for (let i = 0; i < DROP_COUNT; i++) {
      drops.push({
        x: Math.random() * W,
        y: Math.random() * H,
        speed: 1 + Math.random() * 2.5,
        len: 10 + Math.random() * 25,
        alpha: 0.03 + Math.random() * 0.08,
      });
    }
  }
  resize(); initDrops();
  window.addEventListener('resize', () => { resize(); initDrops(); });

  function getColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--fg').trim() || '#9cdef2';
  }

  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);
    const c = getColor();
    ctx.strokeStyle = c;
    ctx.lineWidth = 1;
    for (const d of drops) {
      ctx.globalAlpha = d.alpha;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + d.len);
      ctx.stroke();
      d.y += d.speed;
      if (d.y > H + d.len) { d.y = -d.len; d.x = Math.random() * W; }
    }
    ctx.globalAlpha = 1;
  }
  draw();
}

// ── Alternative: Sparkles Effect ──
function initSparkles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W, H;
  const COUNT = 40;
  let sparkles = [];

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function initSparkleParticles() {
    sparkles = [];
    for (let i = 0; i < COUNT; i++) {
      sparkles.push({
        x: Math.random() * W, y: Math.random() * H,
        size: 2 + Math.random() * 4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
      });
    }
  }
  resize(); initSparkleParticles();
  window.addEventListener('resize', () => { resize(); initSparkleParticles(); });

  function getColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--fg').trim() || '#9cdef2';
  }

  let t = 0;
  function draw() {
    requestAnimationFrame(draw);
    t += 0.015;
    ctx.clearRect(0, 0, W, H);
    const c = getColor();
    ctx.fillStyle = c;
    for (const s of sparkles) {
      const twinkle = Math.max(0, Math.sin(t * s.speed + s.phase));
      ctx.globalAlpha = twinkle * 0.35;
      // 4-pointed star
      const sz = s.size * twinkle;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y - sz);
      ctx.lineTo(s.x + sz * 0.3, s.y);
      ctx.lineTo(s.x, s.y + sz);
      ctx.lineTo(s.x - sz * 0.3, s.y);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(s.x - sz, s.y);
      ctx.lineTo(s.x, s.y + sz * 0.3);
      ctx.lineTo(s.x + sz, s.y);
      ctx.lineTo(s.x, s.y - sz * 0.3);
      ctx.closePath();
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  draw();
}


// ═══════════════════════════════════════════════
// 2. i18n TRANSLATIONS (from real CV data)
// ═══════════════════════════════════════════════

const translations = {
  es: {
    // Nav
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',

    // Hero
    'hero.badge': 'Técnico de I+D+i en COMPUTAEX',
    'hero.title': 'Ingeniero Informático',
    'hero.subtitle': 'Técnico de I+D · Computación Cuántica & HPC',
    'hero.tagline': 'Graduado en Ingeniería Informática en Ingeniería de Computadores (UEx) y estudiante de Máster Universitario en Ingeniería Informática (UNED). Mi trayectoria se centra en la convergencia entre la Supercomputación (HPC) y la Computación Cuántica.',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Contacto',
    'hero.cta3': '📄 Publicación',

    // About
    'about.eyebrow': 'Sobre mí',
    'about.title': 'Quién soy',
    'about.role': 'Técnico de I+D · Computación Cuántica & HPC',
    'about.work.title': 'Trabajo actual',
    'about.work.desc': 'Técnico de I+D+i en la Fundación COMPUTAEX. Optimización de rendimiento y eficiencia energética en HPC mediante algoritmos cuánticos (QAOA, VQE) y modelos QUBO.',
    'about.edu.title': 'Formación',
    'about.edu.desc': 'Grado en Ingeniería Informática (UEx) · Máster en Ingeniería Informática — UNED (en curso).',
    'about.research.title': 'Investigación',
    'about.research.desc': 'Benchmarking de simuladores cuánticos en HPC. Publicación en SIMULATION Journal (2026). DOI: 10.1177/00375497261438515.',
    'about.interests.title': 'Intereses',
    'about.interests.desc': 'Computación Cuántica, HPC, Inteligencia Artificial, Programación Paralela, Open Source.',

    // Experience
    'exp.eyebrow': 'Experiencia',
    'exp.title': 'Trayectoria profesional',
    'exp.j1.date': 'Mar 2026 – Actualidad',
    'exp.j1.title': 'Técnico de I+D+i',
    'exp.j1.d1': 'Optimización de rendimiento y eficiencia energética en HPC mediante algoritmos cuánticos (QAOA, VQE) y modelos QUBO.',
    'exp.j1.d2': 'Integración y benchmarking de emuladores y hardware cuántico en flujos de trabajo de supercomputación real.',
    'exp.j1.d3': 'Difusión científica y transferencia tecnológica mediante publicaciones técnicas y participación en congresos.',
    'exp.j2.date': 'Abr 2025 – Mar 2026',
    'exp.j2.title': 'Becario de Investigación',
    'exp.j2.d1': 'Benchmarking de simuladores cuánticos y algoritmos sobre infraestructuras de supercomputación (HPC).',
    'exp.j2.d2': 'Implementación del software de simulación cuántica distribuida CUNQA en el supercomputador Lusitania.',
    'exp.j3.date': 'Feb 2025 – Abr 2025',
    'exp.j3.title': 'Contrato de Prácticas',
    'exp.j3.d1': 'Benchmarking de simuladores (Grover) en Lusitania analizando rendimiento y escalabilidad.',
    'exp.j3.d2': 'Automatización de simulaciones y análisis de resultados mediante scripts en Python.',

    // Projects
    'projects.eyebrow': 'Proyectos',
    'projects.title': 'Trabajo destacado',
    'projects.sub': 'Una selección de proyectos representativos de mi trabajo en investigación y desarrollo.',
    'projects.code': 'Código',
    'projects.paper': 'Publicación',
    'projects.p1.title': 'Benchmarking de Simuladores Cuánticos en HPC',
    'projects.p1.desc': 'Evaluación exhaustiva de simuladores de vectores de estado (Qiskit, Qulacs, Qibo, Pennylane, Cirq, IQS) en el supercomputador Lusitania. Publicado en SIMULATION Journal.',
    'projects.p2.title': 'Optimización QAOA/VQE para HPC',
    'projects.p2.desc': 'Módulo de optimización combinatoria usando algoritmos cuánticos variacionales y modelos QUBO para scheduling de tareas y eficiencia energética en clusters HPC.',
    'projects.p3.title': 'CUNQA — Simulación Cuántica Distribuida',
    'projects.p3.desc': 'Implementación y despliegue del software de simulación cuántica distribuida CUNQA en el supercomputador Lusitania para ejecuciones a gran escala.',
    'projects.p4.title': 'TFG: Evaluación de Simuladores Cuánticos',
    'projects.p4.desc': 'Trabajo de Fin de Grado: Evaluación del Rendimiento de Simuladores Cuánticos en el Supercomputador Lusitania. Calificación: 10 (Matrícula de Honor).',

    // Skills
    'skills.eyebrow': 'Habilidades',
    'skills.title': 'Stack técnico',
    'skills.lang': 'Lenguajes',
    'skills.quantum': 'Computación Cuántica',
    'skills.hpc': 'HPC & Computación Paralela',
    'skills.ai': 'IA & Análisis de Datos',
    'skills.devops': 'Sistemas & DevOps',
    'skills.hardware': 'Hardware & Diseño',
    'skills.procarch': 'Arquitectura de procesadores',
    'skills.digitallogic': 'Lógica digital',

    // Education
    'edu.eyebrow': 'Formación',
    'edu.title': 'Formación académica',
    'edu.e1.date': 'Oct 2025 – Actualidad',
    'edu.e1.title': 'Máster Universitario en Ingeniería Informática',
    'edu.e1.inst': 'Universidad Nacional de Educación a Distancia (UNED)',
    'edu.e2.date': 'Sept 2021 – Jul 2025',
    'edu.e2.title': 'Grado en Ingeniería Informática en Ingeniería de Computadores',
    'edu.e2.inst': 'Universidad de Extremadura',
    'edu.e2.desc': 'TFG: Evaluación del Rendimiento de Simuladores Cuánticos en el Supercomputador Lusitania. Especialización en arquitecturas avanzadas, computación paralela y gestión de sistemas.',
    'edu.e2.grade': '10 — Matrícula de Honor',
    'edu.e3.date': 'Certificaciones',
    'edu.e3.title': 'Computación Cuántica · IA y Productividad',
    'edu.e3.inst': 'Fundación COMPUTAEX · Santander Open Academy — Google',
    'edu.e3.desc': 'Curso exhaustivo sobre computación cuántica (QSimov). Aplicación de IA generativa para análisis de datos.',

    // Publications
    'pub.title': 'Publicaciones',
    'pub.desc': 'Investigación sobre el rendimiento de simuladores de vectores de estado en entornos de computación de alto rendimiento (HPC).',

    // Contact
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Hablemos',
    'contact.sub': '¿Tienes un proyecto interesante o quieres colaborar? No dudes en contactarme.',
    'contact.location': 'Ubicación',
    'contact.form.title': 'Envíame un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },

  en: {
    // Nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'R&D Technician at COMPUTAEX',
    'hero.title': 'Computer Engineer',
    'hero.subtitle': 'R&D Technician · Quantum Computing & HPC',
    'hero.tagline': 'Graduate in Computer Engineering (UEx) and student of the Master\'s Degree in Computer Engineering (UNED). My career focuses on the convergence between High-Performance Computing (HPC) and Quantum Computing.',
    'hero.cta1': 'View projects',
    'hero.cta2': 'Contact me',
    'hero.cta3': '📄 Publication',

    // About
    'about.eyebrow': 'About me',
    'about.title': 'Who I am',
    'about.role': 'R&D Technician · Quantum Computing & HPC',
    'about.work.title': 'Current role',
    'about.work.desc': 'R&D Technician at Fundación COMPUTAEX. Performance optimization and energy efficiency in HPC through quantum algorithms (QAOA, VQE) and QUBO models.',
    'about.edu.title': 'Education',
    'about.edu.desc': 'Bachelor\'s in Computer Engineering (UEx) · Master\'s in Computer Engineering — UNED (in progress).',
    'about.research.title': 'Research',
    'about.research.desc': 'Benchmarking quantum simulators on HPC. Published in SIMULATION Journal (2026). DOI: 10.1177/00375497261438515.',
    'about.interests.title': 'Interests',
    'about.interests.desc': 'Quantum Computing, HPC, Artificial Intelligence, Parallel Programming, Open Source.',

    // Experience
    'exp.eyebrow': 'Experience',
    'exp.title': 'Professional career',
    'exp.j1.date': 'Mar 2026 – Present',
    'exp.j1.title': 'R&D Technician',
    'exp.j1.d1': 'Optimization of performance and energy efficiency in HPC through quantum algorithms (QAOA, VQE) and QUBO models.',
    'exp.j1.d2': 'Integration and benchmarking of emulators and quantum hardware in real supercomputing workflows.',
    'exp.j1.d3': 'Scientific dissemination and technology transfer through technical publications and conference participation.',
    'exp.j2.date': 'Apr 2025 – Mar 2026',
    'exp.j2.title': 'Research Fellow',
    'exp.j2.d1': 'Benchmarking of quantum simulators and algorithms on supercomputing infrastructures (HPC).',
    'exp.j2.d2': 'Implementation of the CUNQA distributed quantum simulation software on the Lusitania supercomputer.',
    'exp.j3.date': 'Feb 2025 – Apr 2025',
    'exp.j3.title': 'Internship',
    'exp.j3.d1': 'Benchmarking of simulators (Grover) on Lusitania, analyzing performance and scalability.',
    'exp.j3.d2': 'Automation of simulations and analysis of results using Python scripts.',

    // Projects
    'projects.eyebrow': 'Projects',
    'projects.title': 'Featured work',
    'projects.sub': 'A selection of representative projects from my research and development work.',
    'projects.code': 'Code',
    'projects.paper': 'Publication',
    'projects.p1.title': 'Benchmarking Quantum Simulators on HPC',
    'projects.p1.desc': 'Exhaustive evaluation of statevector simulators (Qiskit, Qulacs, Qibo, Pennylane, Cirq, IQS) on the Lusitania supercomputer. Published in SIMULATION Journal.',
    'projects.p2.title': 'QAOA/VQE Optimization for HPC',
    'projects.p2.desc': 'Combinatorial optimization module using variational quantum algorithms and QUBO models for task scheduling and energy efficiency in HPC clusters.',
    'projects.p3.title': 'CUNQA — Distributed Quantum Simulation',
    'projects.p3.desc': 'Implementation and deployment of the CUNQA distributed quantum simulation software on the Lusitania supercomputer for large-scale executions.',
    'projects.p4.title': 'Thesis: Quantum Simulator Evaluation',
    'projects.p4.desc': 'Bachelor\'s Thesis: Performance Evaluation of Quantum Simulators on the Lusitania Supercomputer. Grade: 10 (Honors with Distinction).',

    // Skills
    'skills.eyebrow': 'Skills',
    'skills.title': 'Tech stack',
    'skills.lang': 'Languages',
    'skills.quantum': 'Quantum Computing',
    'skills.hpc': 'HPC & Parallel Computing',
    'skills.ai': 'AI & Data Analysis',
    'skills.devops': 'Systems & DevOps',
    'skills.hardware': 'Hardware & Design',
    'skills.procarch': 'Processor architecture',
    'skills.digitallogic': 'Digital logic',

    // Education
    'edu.eyebrow': 'Education',
    'edu.title': 'Academic background',
    'edu.e1.date': 'Oct 2025 – Present',
    'edu.e1.title': 'Master\'s Degree in Computer Engineering',
    'edu.e1.inst': 'Universidad Nacional de Educación a Distancia (UNED)',
    'edu.e2.date': 'Sept 2021 – Jul 2025',
    'edu.e2.title': 'Bachelor\'s Degree in Computer Engineering (Computer Engineering specialty)',
    'edu.e2.inst': 'Universidad de Extremadura',
    'edu.e2.desc': 'Thesis: Performance Evaluation of Quantum Simulators on the Lusitania Supercomputer. Specialization in advanced architectures, parallel computing, and systems management.',
    'edu.e2.grade': '10 — Honors with Distinction',
    'edu.e3.date': 'Certifications',
    'edu.e3.title': 'Quantum Computing · AI and Productivity',
    'edu.e3.inst': 'Fundación COMPUTAEX · Santander Open Academy — Google',
    'edu.e3.desc': 'Exhaustive course on quantum computing (QSimov). Application of generative AI for data analysis.',

    // Publications
    'pub.title': 'Publications',
    'pub.desc': 'Research on the performance of statevector simulators in high-performance computing (HPC) environments.',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let\'s talk',
    'contact.sub': 'Have an interesting project or want to collaborate? Feel free to reach out.',
    'contact.location': 'Location',
    'contact.form.title': 'Send me a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',

    // Footer
    'footer.rights': 'All rights reserved.',
  }
};

let currentLang = 'es';

/**
 * Switch UI language. Updates all [data-i18n] elements.
 * @param {'es'|'en'} lang
 */
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Meta
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.content = lang === 'es'
      ? 'Jesús Cerrudo Herrera — Ingeniero Informático · Técnico de I+D en Computación Cuántica y HPC.'
      : 'Jesús Cerrudo Herrera — Computer Engineer · R&D Technician in Quantum Computing and HPC.';
  }

  // Update all lang-toggle buttons
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === lang.toUpperCase());
  });

  try { localStorage.setItem('cerrudo2-lang', lang); } catch (_) {}
}


// ═══════════════════════════════════════════════
// 3. SCROLL REVEAL (IntersectionObserver)
// ═══════════════════════════════════════════════

function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('section, .hero').forEach(el => observer.observe(el));
}


// ═══════════════════════════════════════════════
// 4. TIMELINE ITEM REVEAL
// ═══════════════════════════════════════════════

function initTimelineReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}


// ═══════════════════════════════════════════════
// 5. ACTIVE NAV + SCROLL EFFECTS
// ═══════════════════════════════════════════════

function initNavEffects() {
  const nav = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const scrollTopBtn = document.getElementById('scroll-top');

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    // Scroll-to-top button
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }
  }, { passive: true });

  // Active section tracking
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(s => sectionObserver.observe(s));
}


// ═══════════════════════════════════════════════
// 6. MOBILE MENU
// ═══════════════════════════════════════════════

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

document.addEventListener('click', e => {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger-btn');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});


// ═══════════════════════════════════════════════
// 7. INIT
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language
  try {
    const saved = localStorage.getItem('cerrudo2-lang');
    if (saved && translations[saved]) setLang(saved);
  } catch (_) {}

  // Start animated background
  // Change this to initRain() or initSparkles() for a different effect
  initConstellations();
  //initRain();
  //initSparkles();

  initScrollReveal();
  initTimelineReveal();
  initNavEffects();
  initTerminalAnimation();
});

// ═══════════════════════════════════════════════
// 8. TERMINAL ANIMATION
// ═══════════════════════════════════════════════

function initTerminalAnimation() {
  const termPre = document.querySelector('.term pre');
  if (!termPre) return;

  const steps = [
    { type: 'input', text: 'whoami' },
    { type: 'output', html: '<span class="comment"># Jesús Cerrudo Herrera — Ingeniero Informático</span>\n' },
    { type: 'input', text: 'cat /etc/hpc/role' },
    { type: 'output', html: '<span class="val">Técnico de I+D @ Fundación COMPUTAEX</span>\n' },
    { type: 'input', text: 'squeue --user=jcerrudo | head -3' },
    { type: 'output', html: '<span class="comment"># JOBID  PARTITION  NAME       STATE   NODES\n# 42195  quantum    vqe_bench  RUNNING 8</span>\n' },
    { type: 'input', text: 'echo $RESEARCH_FOCUS' },
    { type: 'output', html: '<span class="val">Quantum Computing × HPC Optimization</span>\n' }
  ];

  let hasRun = false;
  const termContainer = document.querySelector('.term');

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasRun) {
      hasRun = true;
      // Clear static content
      termPre.innerHTML = '';
      
      let cursorSpan = document.createElement('span');
      cursorSpan.className = 'cursor';
      cursorSpan.innerHTML = '▌';
      termPre.appendChild(cursorSpan);
      
      let currentStep = 0;

      function runStep() {
        if (currentStep >= steps.length) {
          const promptSpan = document.createElement('span');
          promptSpan.className = 'prompt';
          promptSpan.innerHTML = '$ ';
          termPre.insertBefore(promptSpan, cursorSpan);
          return;
        }

        const step = steps[currentStep];

        if (step.type === 'input') {
          const promptSpan = document.createElement('span');
          promptSpan.className = 'prompt';
          promptSpan.innerHTML = '$ ';
          termPre.insertBefore(promptSpan, cursorSpan);
          
          const textNode = document.createTextNode('');
          termPre.insertBefore(textNode, cursorSpan);
          
          let i = 0;
          function typeChar() {
            if (i < step.text.length) {
              textNode.nodeValue += step.text.charAt(i);
              i++;
              setTimeout(typeChar, 40 + Math.random() * 50);
            } else {
              const br = document.createTextNode('\n');
              termPre.insertBefore(br, cursorSpan);
              currentStep++;
              setTimeout(runStep, 150);
            }
          }
          setTimeout(typeChar, 250);
        } else if (step.type === 'output') {
          const wrapper = document.createElement('span');
          wrapper.innerHTML = step.html;
          termPre.insertBefore(wrapper, cursorSpan);
          currentStep++;
          setTimeout(runStep, 350);
        }
      }

      setTimeout(runStep, 600);
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  
  observer.observe(termContainer);
}
