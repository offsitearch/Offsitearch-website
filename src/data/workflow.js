// ═══════════════════════════════════════════════════════════════════════
//  WORKFLOW — the 4-step methodology sheet and the KPI register.
// ═══════════════════════════════════════════════════════════════════════

export const WORKFLOW = {
  meta: ['SHEET 02 // METHODOLOGY', 'INTENTS TO FABRICATION'],
  title: 'Architectural Design at the Speed of Thought.',
  tagline:
    'How we take your brief from raw hand-drawn concept to a clash-free 3D digital model and constructible documentation set.',
  steps: [
    {
      n: '1',
      stamp: 'INTENTS, TRANSLATED!',
      title: 'Brief & Site Discovery',
      desc: 'We translate programmatic requirements, budget limitations, sun path angles, and local municipal bylaws into fundamental parametric design parameters.',
      output: 'SPATIAL MATRIX & SITE SCAN'
    },
    {
      n: '2',
      stamp: 'IDEAS, SHAPED!',
      title: '3D Schematic Massing',
      desc: 'Volumetric decisions made in full 3D space from day one. No disconnected 2D floor plans; every massing iteration is validated for light, ventilation, and proportion.',
      output: 'ADAPTIVE 3D MASSING MODEL'
    },
    {
      n: '3',
      stamp: 'DISCIPLINES, UNITED!',
      title: 'Coordinated BIM Model',
      desc: 'Architecture, interior joinery, MEP services, and structural columns modeled concurrently in a single unified source of truth. Clashes are eliminated digitally.',
      output: 'CLASH-AUDITED DIGITAL TWIN'
    },
    {
      n: '4',
      stamp: 'VISION, MATERIALIZED!',
      title: 'Construction Documents',
      desc: 'Issue-ready drawing packages with live schedules, millwork details, finish schedules, and bill of quantities tied directly to modeled elements.',
      output: 'READY-TO-BUILD FABRICATION SET'
    }
  ],
  register: {
    meta: ['STUDIO REGISTER', '40+ DELIVERED'],
    label: 'Studio Track Record',
    kpis: [
      { num: '40+', label: 'Projects Delivered' },
      { num: '5+', label: 'Years of Practice' },
      { num: '100%', label: 'BIM Coordinated' },
      { num: '0', label: 'Site Clashes Tolerated' }
    ]
  }
}