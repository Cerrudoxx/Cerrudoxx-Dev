/* ==========================================================================
   PORTFOLIO CONTROLLER
   Jesús Cerrudo Herrera — Quantum Computing & HPC Specialist
   ========================================================================== */

// ═══════════════════════════════════════════════
// 1. TRANSLATIONS (ES ↔ EN)
// ═══════════════════════════════════════════════
const translations = {
  es: {
    // Nav
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.pub': 'Publicaciones',
    'nav.education': 'Formación',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero
    'hero.focus': 'Técnico de I+D+i en Computación Cuántica y Supercomputación en la Fundación COMPUTAEX.',
    'hero.bio': 'Graduado en Ingeniería Informática en Ingeniería de Computadores por la Universidad de Extremadura (Matrícula de Honor en el Trabajo Fin de Grado) y estudiante del Máster en Ingeniería Informática en la UNED. Mi trabajo se centra en la optimización de flujos de trabajo sobre el supercomputador Lusitania, simulación cuántica distribuida (CUNQA), algoritmos variacionales (QAOA, VQE) y modelos QUBO.',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Publicaciones',
    'hero.cta3': 'Contacto',

    // Experience
    'exp.title': 'Experiencia',
    'exp.j1.date': 'Mar 2026 – Actualidad',
    'exp.j1.title': 'Técnico de I+D+i en Supercomputación y Computación Cuántica',
    'exp.j1.d1': 'Investigación en optimización de rendimiento y eficiencia energética en HPC mediante algoritmos cuánticos (QAOA, VQE) y modelos QUBO.',
    'exp.j1.d2': 'Integración, validación y benchmarking de emuladores y hardware cuántico en el supercomputador Lusitania.',
    'exp.j1.d3': 'Transferencia tecnológica y difusión mediante publicaciones en revistas científicas y congresos.',
    'exp.j2.date': 'Abr 2025 – Mar 2026',
    'exp.j2.title': 'Becario de Investigación',
    'exp.j2.d1': 'Benchmarking y análisis de escalabilidad paralela (MPI, OpenMP) de los principales simuladores cuánticos (Qiskit, Qulacs, Qibo, Cirq, IQS) en el supercomputador Lusitania.',
    'exp.j2.d2': 'Implementación del software de simulación cuántica distribuida CUNQA sobre nodos de cómputo en clúster.',
    'exp.j3.date': 'Feb 2025 – Abr 2025',
    'exp.j3.title': 'Contrato de Prácticas',
    'exp.j3.d1': 'Benchmarking de simuladores cuánticos ejecutando el algoritmo de Grover en Lusitania, analizando consumo de memoria y tiempos de CPU.',
    'exp.j3.d2': 'Automatización de pruebas y generación de resultados mediante scripts en Python y Bash.',

    // Projects
    'projects.title': 'Proyectos',
    'p1.title': 'Benchmarking de Simuladores Cuánticos en HPC',
    'p1.desc': 'Evaluación comparativa del rendimiento de los principales simuladores de vectores de estado (Qiskit, Qulacs, Qibo, Pennylane, Cirq, IQS) en el supercomputador Lusitania.',
    'p2.title': 'DEGGA Agnóstico al Entrelazamiento',
    'p2.desc': 'Implementación en el supercomputador Lusitania del algoritmo cuántico distribuido DEGGA utilizando CUNQA para búsquedas exactas multinodo preservando el entrelazamiento.',
    'p3.title': 'Evaluación de Simuladores Cuánticos en Lusitania',
    'p3.desc': 'Trabajo Fin de Grado en Ingeniería de Computadores calificado con Matrícula de Honor (10/10). Análisis de consumo de memoria y escalabilidad paralela en supercomputación.',
    'btn.code': 'GitHub',
    'btn.paper': 'Ver publicaciones',

    // Publication
    'pub.title': 'Publicaciones',

    // Education
    'edu.title': 'Formación',
    'edu.e1.date': 'Oct 2025 – Actualidad',
    'edu.e1.title': 'Máster Universitario en Ingeniería Informática',
    'edu.e1.inst': 'Universidad Nacional de Educación a Distancia (UNED)',
    'edu.e1.desc': 'Sistemas distribuidos, algoritmos avanzados y computación de alto rendimiento.',
    'edu.e2.date': 'Sept 2021 – Jul 2025',
    'edu.e2.title': 'Grado en Ingeniería Informática en Ingeniería de Computadores',
    'edu.e2.inst': 'Universidad de Extremadura',
    'edu.e2.desc': 'Arquitectura de computadores, computación paralela y gestión de sistemas.',
    'cert.title': 'Cursos y Certificaciones',

    // Skills
    'skills.title': 'Habilidades',
    'skills.c1': 'Lenguajes',
    'skills.c2': 'Computación Cuántica',
    'skills.c3': 'HPC & Paralelismo',
    'skills.c5': 'Sistemas & DevOps',

    // Contact
    'contact.title': 'Contacto',
    'contact.form.header': 'Envíame un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.msg': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',

    // Footer
    'footer.rights': 'TODOS LOS DERECHOS RESERVADOS.'
  },

  en: {
    // Nav
    'nav.about': 'About me',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.pub': 'Publications',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.focus': 'R&D Technician in Quantum Computing and High-Performance Computing at Fundación COMPUTAEX.',
    'hero.bio': 'Graduate in Computer Engineering from the University of Extremadura (Honors with Distinction in Bachelor\'s Thesis) and Master\'s student in Computer Engineering at UNED. My work focuses on workload optimization on the Lusitania supercomputer, distributed quantum simulation (CUNQA), variational quantum algorithms (QAOA, VQE), and QUBO models.',
    'hero.cta1': 'View projects',
    'hero.cta2': 'Publications',
    'hero.cta3': 'Contact',

    // Experience
    'exp.title': 'Experience',
    'exp.j1.date': 'Mar 2026 – Present',
    'exp.j1.title': 'R&D Technician in Supercomputing & Quantum Computing',
    'exp.j1.d1': 'Research on HPC performance and energy efficiency using quantum heuristics (QAOA, VQE) and QUBO formulation.',
    'exp.j1.d2': 'Integration, validation, and benchmarking of quantum emulators and hardware on the Lusitania supercomputer.',
    'exp.j1.d3': 'Technology transfer and scientific dissemination through peer-reviewed papers and conferences.',
    'exp.j2.date': 'Apr 2025 – Mar 2026',
    'exp.j2.title': 'Research Fellow',
    'exp.j2.d1': 'Benchmarking and parallel scalability analysis (MPI, OpenMP) of statevector simulators (Qiskit, Qulacs, Qibo, Cirq, IQS) on Lusitania.',
    'exp.j2.d2': 'Deployment and orchestration of CUNQA distributed quantum simulation software across compute cluster nodes.',
    'exp.j3.date': 'Feb 2025 – Apr 2025',
    'exp.j3.title': 'Research Intern',
    'exp.j3.d1': 'Benchmarking quantum simulators running Grover\'s algorithm on Lusitania, analyzing memory footprint and CPU runtimes.',
    'exp.j3.d2': 'Simulation automation and data processing using Python and Bash scripts.',

    // Projects
    'projects.title': 'Projects',
    'p1.title': 'Benchmarking Quantum Simulators on HPC',
    'p1.desc': 'Comparative performance evaluation of major statevector simulators (Qiskit, Qulacs, Qibo, Pennylane, Cirq, IQS) on the Lusitania supercomputer.',
    'p2.title': 'Entanglement-Agnostic DEGGA',
    'p2.desc': 'Implementation on the Lusitania supercomputer of the distributed DEGGA quantum algorithm using CUNQA for exact multi-node searches while preserving entanglement.',
    'p3.title': 'Quantum Simulator Evaluation on Lusitania',
    'p3.desc': 'Bachelor\'s Thesis in Computer Engineering awarded Grade 10 (Honors with Distinction). Analysis of memory footprint and parallel scalability on supercomputing systems.',
    'btn.code': 'GitHub',
    'btn.paper': 'View publications',

    // Publication
    'pub.title': 'Publications',

    // Education
    'edu.title': 'Education',
    'edu.e1.date': 'Oct 2025 – Present',
    'edu.e1.title': 'Master\'s Degree in Computer Engineering',
    'edu.e1.inst': 'National Distance Education University (UNED)',
    'edu.e1.desc': 'Distributed systems, advanced algorithms, and high-performance computing.',
    'edu.e2.date': 'Sept 2021 – Jul 2025',
    'edu.e2.title': 'Bachelor\'s Degree in Computer Engineering',
    'edu.e2.inst': 'University of Extremadura',
    'edu.e2.desc': 'Computer architecture, parallel computing, and systems administration.',
    'cert.title': 'Courses & Certifications',

    // Skills
    'skills.title': 'Skills',
    'skills.c1': 'Languages',
    'skills.c2': 'Quantum Computing',
    'skills.c3': 'HPC & Parallelism',
    'skills.c5': 'Systems & DevOps',

    // Contact
    'contact.title': 'Contact',
    'contact.form.header': 'Send a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.msg': 'Message',
    'contact.form.submit': 'Send message',

    // Footer
    'footer.rights': 'ALL RIGHTS RESERVED.'
  }
};

let currentLang = 'es';

/**
 * Switch UI language dynamically across all [data-i18n] tags.
 * @param {'es'|'en'} lang
 */
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', dict[key]);
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update toggle state
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === lang.toUpperCase());
  });

  try { localStorage.setItem('cerrudo-portfolio-lang', lang); } catch (_) {}
}


// ═══════════════════════════════════════════════
// 2. BIBTEX CITATIONS COPY UTILITY
// ═══════════════════════════════════════════════
const bibtexCitations = {
  simulation: `@article{doi:10.1177/00375497261438515,
author = {Jesús Cerrudo-Herrera and Daniel Talaván-Vega and Paloma Rodríguez-Oliver and Ahmed Ziabat-Ziabat and Juan Antonio Rico-Gallego},
title ={Benchmarking quantum computing statevector simulators on high-performance computing},
journal = {SIMULATION},
volume = {102},
number = {7},
pages = {493-507},
year = {2026},
doi = {10.1177/00375497261438515},
URL = {https://doi.org/10.1177/00375497261438515},
eprint = {https://doi.org/10.1177/00375497261438515},
abstract = { The increasing complexity of quantum algorithms and the limitations of current Noisy Intermediate-Scale Quantum (NISQ) hardware underscore the importance of eﬃcient classical simulators. To support informed decision-making by users of quantum circuit simulators, we benchmark seven statevector-based quantum circuit simulators (Qiskit, Qulacs, Qibo, Qsimov, Cirq, Pennylane and the Intel Quantum Simulator (IQS)) on a multicore node of the Lusitania high-performance computing (HPC) system. We evaluate their performance in terms of execution time, memory usage and core scalability using Grover’s algorithm, the quantum Fourier transform (QFT), and quantum volume (QV) circuits, across qubit counts ranging from 3 to 30. Our results reveal that Qulacs oﬀers the best performance for circuits below 22 qubits, while Qiskit becomes the fastest for larger and more complex circuits. Qiskit and Qulacs achieve the most eﬃcient parallel performance across multiple cores, while others display limited scaling benefits. IQS shows the lowest memory consumption in QFT and QV benchmarks for systems under 24 qubits; however, it suﬀers from higher execution times, particularly for Grover’s algorithm. The experimental implementation of Qsimov consistently underperforms in both runtime and scalability; for this reason, it is employed as a baseline in our measurements, serving to highlight the importance of performance optimizations in statevector-based quantum circuit simulators. Previous findings provide a comprehensive performance landscape to guide researchers in selecting appropriate simulators for both standard and large-scale quantum workloads on HPC infrastructures. }
}`,

  jisbd: `@inproceedings{cerrudo2026jisbd,
  author = {Jesús Cerrudo-Herrera and Ahmed Ziabat-Ziabat and Pablo Polo-Alcántara and Juan Antonio Rico-Gallego},
  title = {Benchmarking de Simuladores Cuánticos de Vector de Estado en HPC},
  booktitle = {Actas de las XXX Jornadas de Ingeniería del Software y Bases de Datos (JISBD 2026)},
  editor = {Carlos Cetina},
  publisher = {Sistedes},
  year = {2026},
  month = {6},
  url = {https://hdl.handle.net/11705/JISBD/2026/104}
}`
};

function copyBibtexCitation(key, btnElement) {
  const text = bibtexCitations[key];
  if (!text) return;

  const btn = btnElement || document.getElementById(`btn-bibtex-${key}`) || document.getElementById('btn-bibtex');
  const originalText = btn ? btn.textContent : '';

  const onSuccess = () => {
    if (btn) {
      btn.textContent = currentLang === 'es' ? '✓ Cita copiada' : '✓ BibTeX copied';
      btn.style.borderColor = 'var(--status-emerald)';
      btn.style.color = 'var(--status-emerald)';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2500);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
      fallbackCopy(text, onSuccess);
    });
  } else {
    fallbackCopy(text, onSuccess);
  }
}

function fallbackCopy(text, callback) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    if (callback) callback();
  } catch (err) {
    alert(text);
  }
  document.body.removeChild(ta);
}


// ═══════════════════════════════════════════════
// 3. NAVIGATION, SCROLL TO TOP & MOBILE MENU
// ═══════════════════════════════════════════════
function initNavigationEvents() {
  const nav = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Header shadow on scroll
    if (nav) {
      nav.classList.toggle('scrolled', scrollY > 40);
    }

    // Scroll to top button visibility
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', scrollY > 400);
    }

    // Active link highlighting
    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentSectionId}`);
    });
  }, { passive: true });
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('open');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.remove('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', e => {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger-btn');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});


// ═══════════════════════════════════════════════
// 4. DOM READY INITIALIZATION
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language preference
  try {
    const saved = localStorage.getItem('cerrudo-portfolio-lang');
    if (saved && translations[saved]) {
      setLang(saved);
    } else {
      setLang('es');
    }
  } catch (_) {
    setLang('es');
  }

  // Initialize navigation events
  initNavigationEvents();
});
