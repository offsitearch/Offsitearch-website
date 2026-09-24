// ═══════════════════════════════════════════════════════════════════════
//  JOURNEY — the 5 phase scrollytelling story.
//  `dir` points to the folder of film frames inside /public/video/<dir>.
//  To add a phase, copy an existing block and give it a unique `n`.
// ═══════════════════════════════════════════════════════════════════════

export const JOURNEY = {
  brand: 'OFFSITE',
  unit: 'mm',
  phases: [
    {
      id: 'phase-1',
      n: 1,
      dir: '/video/01',
      label: '01 — The Spark',
      title: 'Every Landmark Begins as a Quiet Thought',
      desc: 'Before the steel rises and the concrete sets, there is a moment of pure imagination. We sit with you, listen to your dreams, and find the soul of your future space.'
    },
    {
      id: 'phase-2',
      n: 2,
      dir: '/video/02',
      label: '02 — The Vision',
      title: "We Give Shape to What Doesn't Exist Yet",
      desc: 'Raw ideas become spatial compositions. We explore light, volume, and flow — testing dozens of possibilities until the design feels inevitable.'
    },
    {
      id: 'phase-3',
      n: 3,
      dir: '/video/03',
      label: '03 — The Blueprint',
      title: 'Where Art Meets Absolute Accuracy',
      desc: 'Every wall, every beam, every electrical line — mapped to the millimeter. Our blueprints are not just drawings; they are instructions for reality.'
    },
    {
      id: 'phase-4',
      n: 4,
      dir: '/video/04',
      label: '04 — The Build',
      title: 'From Paper to Skyline',
      desc: 'The blueprint leaves the desk and enters the earth. Steel frames climb, concrete pours, and the structure you once only imagined begins to cast its first real shadow.'
    },
    {
      id: 'phase-5',
      n: 5,
      dir: '/video/05',
      label: '05 — The Living',
      title: "Step Inside. You're Home.",
      desc: 'The final layer. Curated materials, bespoke furniture, natural light flooding through perfectly placed windows. This is not just a building — it is the backdrop of your life.'
    }
  ]
}