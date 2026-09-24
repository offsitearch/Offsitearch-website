// ═══════════════════════════════════════════════════════════════════════
//  PRICING — the engagement packages sheet.
//  Set `featured: true` on the package you want highlighted most.
// ═══════════════════════════════════════════════════════════════════════

export const PRICING = {
  title: 'Transparent Architectural Engagement',
  tagline:
    'Clear milestones tailored to your project scale—from early concept validation to turnkey fabrication documentation.',
  tabs: ['📁 ENGAGEMENT PACKAGES & SCOPE', 'PROJECT REGISTER'],
  featuredTag: 'MOST POPULAR',
  packages: [
    {
      tier: 'PACKAGE 01',
      title: 'Concept & Schematic & DD ',
      desc: 'Ideal for property owners seeking clear spatial clarity, massing validation, and initial budget alignment.',
      scope: [
        'Site Analysis & Program Briefing',
        '3D Volumetric Massing Explorations',
        'Schematic 2D Floor Plans & Sections',
        '3 Key Photorealistic Concept Renders'
      ],
      featured: false,
      cta: 'Inquire Concept Scope'
    },
    {
      tier: 'PACKAGE 02',
      title: 'Coordinated BIM & 3D',
      desc: 'Complete architectural & interior development coordinated in 3D BIM with full clash validation.',
      scope: [
        'Everything in Concept & Schematic',
        'Full BIM Digital Twin Model (LOD 350)',
        'MEP & Structural Clash Detection Audit',
        'Detailed Material & Joinery Schedules',
        '8 High-Resolution Exterior/Interior Renders'
      ],
      featured: true,
      cta: 'Inquire BIM Package'
    },
    {
      tier: 'PACKAGE 03',
      title: 'Turnkey Documentation',
      desc: 'Comprehensive construction packages, tender drawings, bill of quantities, and on-site coordination oversight.',
      scope: [
        'Everything in Coordinated BIM Package',
        'Full Construction Working Drawings Set',
        'Itemized Bill of Quantities (BOQ)',
        'Periodic On-Site BIM Alignment Audits'
      ],
      featured: false,
      cta: 'Inquire Turnkey Scope'
    }
  ]
}