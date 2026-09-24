// ═══════════════════════════════════════════════════════════════════════
//  SITE SETTINGS — brand, navigation, contact & footer.
//  Edit the values below. Nothing else in the code needs to change.
//  Changes appear on the live site after a rebuild / deploy (Vercel).
// ═══════════════════════════════════════════════════════════════════════

export const SITE = {
  brand: {
    name: 'OFFSITEARCH',
    logo: '/favicon.png',
    logoAlt: 'OFFSITE Logo',
    homeAria: 'OFFSITE Homepage'
  },

  topbar: {
    // Buttons and links in the top navigation bar.
    cta: 'Start a project',
    nav: [
      { href: '#workflow', label: 'Methodology' },
      { href: '#dossier', label: 'Dossier' },
      { href: '#services', label: 'Capabilities' },
      { href: '#packages', label: 'Scope' },
      { href: '#faq', label: 'Inquiries' }
    ]
  },

  footer: {
    desc:
      "Architecture and interior practice working in coordinated BIM from concept through construction. We design buildings before they're built.",
    cta: 'Initiate Project Brief ↗',
    navTitle: 'Navigation',
    disciplinesTitle: 'Disciplines',
    contactTitle: 'Studio Transmittal',
    nav: [
      { href: '#hero', label: 'Drawing Studio' },
      { href: '#workflow', label: 'BIM Methodology' },
      { href: '#dossier', label: 'Project Dossier' },
      { href: '#services', label: 'Capabilities' },
      { href: '#packages', label: 'Engagement Scope' },
      { href: '#faq', label: 'Inquiries' }
    ],
    disciplines: [
      'Architecture',
      'Interior Design',
      'BIM Coordination',
      '3D Visualisation',
      'Fabrication Sets',
      'AI Exploration'
    ]
  },

  contact: {
    emailLabel: 'DIRECT DISPATCH',
    email: 'operation@offsitearch.com',
    locationLabel: 'STUDIO LOCATION',
    location: 'New Town, Rajarhat, Kolkata, West Bengal, India',
    hoursLabel: 'STUDIO HOURS',
    hours: 'Monday – Friday // 09:00 – 18:00 IST'
  },

  legal: {
    legalName: 'OFFSITE ARCHITECTURE & INTERIORS',
    allRights: 'ALL RIGHTS RESERVED.',
    tagline: 'COORDINATED BIM · DESIGN AT THE SPEED OF THOUGHT'
  }
}