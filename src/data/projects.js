export const PROJECTS = [
  {
    id: 'studio-rajarhat',
    category: 'interior',
    type: 'INTERIOR · KOLKATA 2026',
    title: 'Studio Interior, Rajarhat',
    blurb: 'Bespoke living environment with coordinated joinery and warm ambient light.',
    drg: 'DRG-INT-001',
    scale: 'SCALE 1:50',
    alt: 'Studio Interior, Rajarhat',
    thumb: '/assets/images/project-interior-01-thumb.webp',
    image: '/assets/images/project-interior-01.webp',
    categoryLabel: 'Interior Architecture',
    area: '450 SQ.FT',
    year: '2026',
    location: 'Rajarhat, New Town, Kolkata',
    description:
      'A bespoke minimalist studio apartment interior developed simultaneously in 3D BIM. Featuring custom joinery, concealed warm lighting strips, and tactile textured lime plaster finishes.',
    deliverables: [
      'Volumetric BIM Model LOD 350',
      'Custom Millwork Fabrication Drawings',
      'Lighting & Power Coordinated Schematics'
    ]
  },
  {
    id: 'residence-newtown',
    category: 'architecture',
    type: 'ARCHITECTURE · KOLKATA 2025',
    title: 'Residential Complex, New Town',
    blurb: 'Climate-responsive facade massing with deep terraces and natural cross-ventilation.',
    drg: 'DRG-ARC-002',
    scale: 'SCALE 1:100',
    alt: 'Residential Complex, New Town',
    thumb: '/assets/images/project-architecture-02-thumb.webp',
    image: '/assets/images/project-architecture-02.webp',
    categoryLabel: 'Architecture & Facade',
    area: '14,200 SQ.FT',
    year: '2025',
    location: 'Action Area II, New Town, Kolkata',
    description:
      'Contemporary multi-residential massing designed with climate-responsive louvers, cantilevered balconies, and a central ventilation spine coordinated from schematic conception.',
    deliverables: [
      'Schematic Massing Iterations',
      'Structural Grid Coordination',
      'Facade Envelope Detail Package'
    ]
  },
  {
    id: 'commercial-bim',
    category: 'bim',
    type: 'BIM VISUALISATION · 2025',
    title: 'Commercial BIM Model',
    blurb: 'Multidisciplinary clash-free coordination between structural frame and MEP lines.',
    drg: 'DRG-BIM-003',
    scale: 'SCALE 1:200',
    alt: 'Commercial BIM Coordination',
    thumb: '/assets/images/project-bim-visualization-thumb.webp',
    image: '/assets/images/project-bim-visualization.webp',
    categoryLabel: 'BIM & Visualisation',
    area: '38,000 SQ.FT',
    year: '2025',
    location: 'Sector V, Salt Lake, Kolkata',
    description:
      'Full-stack multidisciplinary BIM coordination for a grade-A commercial facility, with clash detection between MEP services, HVAC ducting, and post-tensioned floor slabs.',
    deliverables: [
      'Clash Detection & Audit Log',
      'Real-Time Navisworks Coordination',
      'Photorealistic Client Render Sets'
    ]
  },
  {
    id: 'corporate-interior',
    category: 'interior',
    type: 'INTERIOR · SALT LAKE 2024',
    title: 'Corporate Office Headquarters',
    blurb: 'Open-plan acoustic workspaces engineered for optimal light diffusion and team agility.',
    drg: 'DRG-INT-004',
    scale: 'SCALE 1:50',
    alt: 'Velocity Corporate Office Interior',
    thumb: '/assets/images/project-office-interior-thumb.webp',
    image: '/assets/images/project-office-interior.webp',
    categoryLabel: 'Interior Architecture',
    area: '8,500 SQ.FT',
    year: '2024',
    location: 'Salt Lake IT Corridor, Kolkata',
    description:
      'High-density agile workplace with acoustic timber baffles, ergonomic focus pods, and biophilic interior elements engineered to maximize daylight penetration.',
    deliverables: [
      'Spatial Layout & Heatmap Studies',
      'Acoustic Coordinated Ceilings',
      'Complete Bill of Quantities'
    ]
  },
  {
    id: 'rajarhat-hero',
    category: 'architecture',
    type: 'MASTERPLANNING · 2026',
    title: 'Rajarhat Studio Masterwork',
    blurb: 'Coordinated design from early sketch to final digital twin realization.',
    drg: 'DRG-ARC-005',
    scale: 'SCALE 1:100',
    alt: 'Rajarhat Masterwork Visualisation',
    thumb: '/assets/images/hero-bg-thumb.webp',
    image: '/assets/images/hero-bg.webp',
    categoryLabel: 'Masterplanning & BIM',
    area: '5,600 SQ.FT',
    year: '2026',
    location: 'Rajarhat Expressway, Kolkata',
    description:
      'Coordinated architectural design demonstrating seamless transition from raw hand-drawn brief to high-fidelity physical realization with zero on-site change orders.',
    deliverables: [
      'Schematic 3D Massing',
      'BIM LOD 350 Model',
      'As-Built Documentation Pack'
    ]
  },
  {
    id: 'studio-practice',
    category: 'architecture',
    type: 'STUDIO ARCHITECTURE · 2026',
    title: 'OFFSITE Design Laboratory',
    blurb: 'Our experimental research space testing material assemblies and parametric tools.',
    drg: 'DRG-STU-006',
    scale: 'SCALE 1:25',
    alt: 'OFFSITE Design Laboratory',
    thumb: '/assets/images/about-studio-thumb.webp',
    image: '/assets/images/about-studio.webp',
    categoryLabel: 'Studio Architecture',
    area: '2,200 SQ.FT',
    year: '2026',
    location: 'New Town Studio, Kolkata',
    description:
      'Our in-house design environment where computational workflows, VR walkthroughs, and physical material libraries intersect for experimental spatial studies.',
    deliverables: [
      'Experimental Spatial Studies',
      'Material Swatch Matrix',
      'Digital Twin Model'
    ]
  }
]

export const FILTERS = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'interior', label: 'Interior Architecture' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'bim', label: 'BIM & Visualisation' }
]

export const DOSSIER = {
  meta: ['SHEET 03 // ARCHIVE', 'SELECTED WORK REGISTER'],
  title: 'Project Dossier & Drawings',
  tagline:
    'Select any project sheet to inspect high-resolution drawings, volumetric specifications, and architectural documentation.',
  tabs: ['📁 DOSSIER // RECENT PROJECTS', 'SPECIFICATION SHEETS'],
  inspectText: 'Inspect Sheet ↗'
}