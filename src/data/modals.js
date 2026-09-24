// ═══════════════════════════════════════════════════════════════════════
//  MODALS — project detail modal + inquiry / "start a project" form.
// ═══════════════════════════════════════════════════════════════════════

export const PROJECT_MODAL = {
  deliverablesTitle: 'Coordinated Project Deliverables:',
  inquireCta: 'Inquire Similar Project'
}

export const INQUIRY = {
  head: ['TRANSMITTAL SHEET', 'NEW PROJECT INTAKE'],
  title: 'Start Your Architectural Project',
  desc: 'Submit your preliminary brief. Our design team will review your requirements and respond with a coordinated BIM roadmap.',
  fields: {
    name: { label: 'YOUR NAME *', placeholder: 'e.g. Soumik Banerjee', type: 'text', required: true },
    email: { label: 'EMAIL ADDRESS *', placeholder: 'name@domain.com', type: 'email', required: true },
    typology: {
      label: 'PROJECT TYPOLOGY',
      type: 'select',
      options: [
        'Residential Architecture',
        'Interior Architecture',
        'Commercial / Corporate Office',
        'BIM Coordination & LOD 350',
        '3D Visualisation Package'
      ]
    },
    area: { label: 'ESTIMATED AREA', placeholder: 'e.g. 3,500 sq.ft / Rajarhat', type: 'text', required: false },
    brief: {
      label: 'PROJECT BRIEF & SCOPE',
      placeholder: 'Tell us about the site location, scope, and target completion timeline...',
      type: 'textarea',
      required: true
    }
  },
  submit: 'SUBMIT PROJECT BRIEF',
  submittingText: 'LOGGING TRANSMITTAL...',
  submittedText: 'TRANSMITTAL RECORDED',
  successNote:
    'Brief logged in Studio Project Register. Our team will review the BIM requirements and contact you within 24 hours.'
}