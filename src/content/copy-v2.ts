/**
 * Copy for the /v2 landing page.
 *
 * v2 keeps the SAME product as v1 — every deliverable, bullet, guide title, page
 * count, tool list and price is untouched. What changes is which moment of the
 * journey the page speaks to.
 *
 * Direction comes from the three research documents (Aug 2026):
 *  - "Life After GLP-1s" (voice-of-customer, 28 testimonial units)
 *  - "Relatório Estratégico Vida Depois do GLP-1" (search intent + competitor map)
 *  - "GLP-1 Transition Content Titles" (headline bank, USA/Canada/UK/Portugal)
 *
 * Their shared conclusion: the crowded territory is "how to succeed while on
 * GLP-1"; the open territory is the transition — the weeks around the last dose,
 * a coverage loss, or returning appetite. Central message, verbatim from the
 * strategic report: "O tratamento pode parar. O seu plano não."
 *
 * Compliance guardrails applied throughout (strategic report p.15 + FTC/ASA/
 * Health Canada notes): no promise to prevent regain, no taper protocol, no
 * promise to remove loose skin or rebuild muscle by a date, no invented
 * testimonials, no artificial scarcity or countdowns. Urgency here comes only
 * from the reader's own calendar (their last pen, their coverage date).
 */

export const HERO_V2 = {
  eyebrow: 'For adults on — or coming off — prescribed GLP-1 medications',
  headline: 'The Treatment May Stop. Your Plan Shouldn’t.',
  highlight: 'Your Plan Shouldn’t.',
  subheadline:
    'A practical 4-phase system — plus 10 digital guides — for the part nobody prepares you for: returning appetite, the weight trend, your strength, your changing body, and the questions worth bringing to your prescriber.',
  badge: 'Educational tools for GLP-1 users. Not medical advice.',
};

export const TRUST_V2 = [
  'Instant access in under 60 seconds',
  'One-time payment — no subscription',
  'Read on any phone, tablet or desktop',
  'US, Canada & UK — metric + imperial',
  'Judgment-free, education-first',
];

export const PROBLEM_V2 = {
  heading: 'The Part Nobody Warned You About',
  bullets: [
    'Your coverage ended — or the price changed — and your plan ended with it?',
    'The hunger came back faster than you expected, and the food thoughts came with it?',
    'Getting close to your last pen with no idea what the next 90 days look like?',
    'Watching the scale creep back up, unsure what’s worth reacting to?',
    'Lighter than you’ve been in years — but weaker on the stairs?',
    'Lost the weight, and still avoiding mirrors, sleeves and photos?',
  ],
  closing:
    'Your medication changed your appetite. Nobody handed you a plan for the phase where it changes back — the meals, the routines, the signals worth tracking, the conversation to have with your prescriber.',
  closingStrong:
    'Hunger returning is not a failure of willpower. It’s a predictable phase — and phases can be prepared for.',
};

export const SYSTEM_V2 = {
  heading: 'Meet the GLP-1 Success Blueprint™',
  intro:
    'A step-by-step educational system that organizes the whole journey into four practical phases — including the one almost nobody explains: what happens when the medication changes, pauses, or ends. No extreme rules. No shame. No guesswork.',
  taglines: {
    PRIME: 'Prepare before anything changes.',
    INITIATE: 'Get through the first weeks.',
    OPTIMIZE: 'Protect what you built.',
    SUSTAIN: 'The 90 days almost nobody explains.',
  },
  note: {
    lead: 'This is',
    strong: 'not',
    rest: ' another generic weight-loss ebook, a diet program, or medical advice. It won’t tell you how to taper, and it won’t promise you can’t regain weight — nobody honestly can. It’s a focused library of educational guides, checklists, trackers and decision tools built around the real questions GLP-1 users face — always alongside your healthcare provider, never instead of it.',
  },
};

export const BLUEPRINT_V2 = {
  heading: 'Inside The GLP-1 Success Blueprint™',
  subheading:
    'Four phases that follow your real timeline — from before your first dose to the weeks after your last.',
};

export const WHO_V2 = {
  forYou: [
    'Are on a prescribed GLP-1 — or approaching your last dose',
    'Just lost coverage, or are facing a cost, supply or prescription change',
    'Notice hunger and food thoughts returning and want structure instead of guilt',
    'Care about strength, protein and how your body feels — not only the scale',
    'Prefer organized, judgment-free education over 2 a.m. forum threads',
  ],
  notForYou: [
    'Want a taper protocol or instructions on stopping your medication',
    'Expect a guarantee that you won’t regain weight — we don’t make that promise',
    'Are looking for medical diagnosis, personalized dosing, or prescription advice',
    'Want a replacement for your doctor, dietitian, or pharmacist',
    'Are seeking a crash diet or a rapid-transformation promise',
  ],
};

export const STACK_V2 = {
  heading: 'Everything You Get Today',
  priceReframe: 'Less than most people spend on coffee in a single morning.',
};

export const OFFER_V2 = {
  urgency:
    'Your last pen already has a date on it. The plan for what comes after shouldn’t start the week you run out.',
  transparency:
    'What this is not: a taper protocol, a prescription, or a promise about your results. What it is: the organized, judgment-free preparation almost nobody hands you.',
};

export const FINAL_V2 = {
  heading: 'Your Last Pen Has a Date. Your Plan Shouldn’t Start After It.',
  copy:
    'Six weeks from now you’ll either have a plan for returning appetite, your weight trend and your strength — or a browser full of conflicting search results. One of those costs $9 and takes a minute to download.',
};

/** Extra FAQ entries prepended to the shared list on v2. */
export const FAQ_V2_EXTRA = [
  {
    question: 'Does this promise I won’t regain the weight?',
    answer:
      'No — and we’d be careful with anyone who does. Published trial data shows meaningful average regain after people stop these medications, but a trial average is not a prediction for any individual. This product helps you organize the phase, track the signals that matter, and bring better questions to your prescriber. It does not guarantee an outcome.',
  },
  {
    question: 'Will this tell me how to stop, taper, or change my dose?',
    answer:
      'No. Dosing, tapering, pausing and stopping are clinical decisions that belong to you and your prescriber. What this gives you is preparation: what to track beforehand, what to watch for afterwards, and the specific questions to bring to that appointment.',
  },
  {
    question: 'I already lost coverage and stopped. Is it too late to be useful?',
    answer:
      'No. Start with Phase 4 (SUSTAIN) and Life After GLP-1™, which were built for exactly that moment, then use the Food Noise Workbook™ and Protein Priority Playbook™ for returning appetite. The system is designed so you can enter at whichever phase matches your situation today.',
  },
];
