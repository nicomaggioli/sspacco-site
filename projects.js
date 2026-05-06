/* ============================================================
   project data — title, meta, description, image filenames.
   referenced by project.html via ?id=<slug>
   ============================================================ */
const PROJECTS = {
  'bodega-ss23': {
    title: 'Bodega — SS23 Private Label',
    year: '2024',
    category: 'design / illustration',
    client: 'Bodega',
    description: 'A short capsule of graphics — printed on tees, hats and a handful of bandanas. It is quieter in person.',
    images: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.webp'],
  },
  'bodega-aw24': {
    title: 'Bodega — AW24',
    year: '2024',
    category: 'design',
    client: 'Bodega',
    description: 'Autumn / Winter 2024 graphics. Patches, lockups, and on-garment marks.',
    images: ['01.webp','02.webp','03.webp','04.webp','05.webp','06.webp','07.webp','08.webp'],
  },
  'hoka-bodega': {
    title: 'Hoka × Bodega',
    year: '2024',
    category: 'design',
    client: 'Bodega × Hoka',
    description: 'Tor Ultra capsule — graphic system, packaging marks and supporting illustration.',
    images: ['01.webp','02.webp','03.webp','04.webp','05.webp','06.webp','07.jpg','08.jpg'],
  },
  'nb-concepts': {
    title: 'NB × Concepts',
    year: '2023',
    category: 'design',
    client: 'New Balance × Concepts',
    description: 'Pop-up campaign artwork. Hand-set type, hand-drawn marks, very few corners.',
    images: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg'],
  },
  'nonnas': {
    title: "Nonna's Italian Cuisine",
    year: '2024',
    category: 'illustration',
    client: 'self-initiated',
    description: 'Italian-American identity sketches and a half-finished menu program. Funnier in person.',
    images: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.png','07.png'],
  },
  'flh-converse': {
    title: 'Converse × Feels Like Home',
    year: '2023',
    category: 'design',
    client: 'Converse × Feels Like Home',
    description: 'Graphic system for the Feels Like Home × Converse Volume III presentation.',
    images: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg'],
  },
  'franklin-bodega': {
    title: 'Franklin × Bodega',
    year: '2024',
    category: 'design',
    client: 'Bodega × Franklin',
    description: 'Pickleball paddle — packaging and on-product graphics.',
    images: ['01.webp','02.webp','03.webp','04.png','05.webp','06.jpg'],
  },
  'wilson-bodega': {
    title: 'Wilson × Bodega',
    year: '2024',
    category: 'design',
    client: 'Bodega × Wilson',
    description: 'Mini basketball hoop and ball collab — graphics and lockup. Sizing up the competition. Anytime, anywhere.',
    images: ['01.webp','02.jpg','03.webp','04.jpg','05.jpg','06.webp'],
  },
  'paintings': {
    title: 'Paintings',
    year: 'ongoing',
    category: 'painting',
    client: 'self-initiated',
    description: 'Oil and acrylic on linen. Mostly figures, sometimes a couch.',
    images: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'],
  },
  'asics-nguyen': {
    title: 'ASICS × Nguyen',
    year: '2024',
    category: 'design',
    client: 'ASICS × Stephen Nguyen',
    description: 'Illustrated runners for an ASICS × Nguyen capsule.',
    images: ['01.webp','02.webp','03.webp','04.webp'],
  },
  'laams': {
    title: 'LAAMS Classic',
    year: '2024',
    category: 'design',
    client: 'LAAMS',
    description: 'LAAMS Classic Basketball Tournament — full identity, trading cards, and supporting graphics.',
    images: ['01.webp','02.webp','03.webp','04.webp','05.jpg'],
  },
  'whensmokeclears': {
    title: 'WhenSmokeClears',
    year: '2023',
    category: 'illustration',
    client: 'WhenSmokeClears',
    description: 'Hand-drawn marks, t-shirt graphics and assorted oddities for WhenSmokeClears.',
    images: ['01.jpg','02.png','03.png','04.jpg','05.jpeg','06.jpeg','07.jpg','08.jpeg'],
  },
  'ohoat': {
    title: 'OHOAT — GNX Tee',
    year: '2024',
    category: 'illustration',
    client: 'OHOAT',
    description: 'A GNX-inspired tee for OHOAT. Racing hearts and burnt rubber.',
    images: ['01.jpg','02.png','03.webp','04.webp'],
  },
  'photo': {
    title: 'Photo',
    year: 'ongoing',
    category: 'photo',
    client: 'self-initiated',
    description: '35mm walks. No project, no point. I like over-sharing.',
    images: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg'],
  },
};

const ORDER = ['bodega-ss23','bodega-aw24','hoka-bodega','nb-concepts','nonnas','flh-converse','franklin-bodega','wilson-bodega','paintings','asics-nguyen','laams','whensmokeclears','ohoat','photo'];

function renderProject() {
  const id = new URLSearchParams(location.search).get('id');
  const p = PROJECTS[id];
  if (!p) { location.href = 'index.html#work'; return; }

  document.title = `${p.title} — Salvatore Spacco`;
  document.getElementById('p-title').innerHTML = p.title;
  document.getElementById('p-meta').textContent = `${p.year} · ${p.category} · ${p.client}`;
  document.getElementById('p-desc').textContent = p.description;

  const gal = document.getElementById('p-gallery');
  p.images.forEach((fn, i) => {
    const fig = document.createElement('figure');
    fig.className = 'p-fig';
    fig.innerHTML = `<img src="assets/projects/${id}/${fn}" alt="${p.title} — image ${i+1}" loading="${i < 2 ? 'eager' : 'lazy'}"/>`;
    gal.appendChild(fig);
  });

  // prev / next
  const idx = ORDER.indexOf(id);
  const prev = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
  const next = ORDER[(idx + 1) % ORDER.length];
  document.getElementById('p-prev').href = `project.html?id=${prev}`;
  document.getElementById('p-prev-name').textContent = PROJECTS[prev].title;
  document.getElementById('p-next').href = `project.html?id=${next}`;
  document.getElementById('p-next-name').textContent = PROJECTS[next].title;
  document.getElementById('p-counter').textContent = `${String(idx+1).padStart(2,'0')} / ${String(ORDER.length).padStart(2,'0')}`;
}
