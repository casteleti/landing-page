// Section 7 — bonus library. Verbatim from Docs/01-sections-copy.md SEÇÃO 7.
export interface BonusItem {
  title: string;
  subtitle: string;
  painLine: string;
  bullets: string[];
  value: number;
}

export interface BonusGroup {
  heading: string;
  items: BonusItem[];
}

export const BONUS_GROUPS: BonusGroup[] = [
  {
    heading: 'Start Strong',
    items: [
      {
        title: 'Side Effect Survival Guide™',
        subtitle: 'What to Do When Nausea, Constipation, Fatigue, Reflux & "Sulfur Burps" Hit',
        painLine: 'When symptoms show up, the last thing you need is more confusion.',
        bullets: [
          'Quick-reference playbooks for nausea, constipation, fatigue, reflux, and low appetite',
          'A "common vs. concerning" table plus a clear red-flags card for when to contact your provider',
          'Printable SOS cards + a "What to Eat When Nothing Sounds Good" list',
          'Injection-Day Playbook and a 24-Hour Side Effect Reset',
        ],
        value: 37,
      },
      {
        title: 'First 30 Days Survival Guide™',
        subtitle: 'Your Day-by-Day Playbook for the First Month on GLP-1',
        painLine: "Stop wondering what you're supposed to do next.",
        bullets: [
          'A visual 30-day calendar with week-by-week guidance',
          'Pre-day-1 prep checklist, starter kit list, and 10 questions for your prescriber',
          'Daily micro-tracker, weekly reviews, and scenario playbooks',
          'The 10 most common first-month mistakes — and how to sidestep them',
        ],
        value: 37,
      },
    ],
  },
  {
    heading: 'Fuel & Protect Your Body',
    items: [
      {
        title: 'Protein Priority Playbook™',
        subtitle: 'How to Meet Your Protein Needs When Your Appetite Is Low',
        painLine: 'A smaller appetite can make nutrition harder — not less important.',
        bullets: [
          'Protein Quick-Math framework to discuss a personal target with your provider',
          'Protein-first meal hierarchy plus 30 quick meals and 30 snack combos',
          'Liquid, soft, and portable protein options for low-appetite days',
          'A "Protein Rescue Plan" for the hardest days',
        ],
        value: 27,
      },
      {
        title: 'Muscle Preservation Blueprint™',
        subtitle: 'Support Your Strength, Lean Mass & Confidence During Weight Loss',
        painLine: "Losing weight and protecting your strength shouldn't feel like competing goals.",
        bullets: [
          'The four pillars: protein, resistance, movement, recovery',
          'Minimum Effective Resistance Training framework with a 20-minute movement menu',
          'Adaptable weekly plan, progression basics, and general safety guidance',
          'Strength & mobility tracker + body composition check-ins',
        ],
        value: 37,
      },
      {
        title: 'Face & Body Defense Guide™',
        subtitle: 'Support Skin, Hair, Strength & Confidence Through Rapid Body Changes',
        painLine:
          'Your body may change quickly — this judgment-free guide helps you focus on what you can support.',
        bullets: [
          'Nutrition, hydration, sleep, and recovery fundamentals for general skin and hair support',
          'A simplified self-care routine and weekly checklist',
          'Questions to bring a dermatologist or qualified professional',
          'Wardrobe transition and body-confidence guide',
        ],
        value: 27,
      },
    ],
  },
  {
    heading: 'Navigate Progress & Long-Term Change',
    items: [
      {
        title: 'Plateau Breaker Protocol™',
        subtitle: 'How to Understand a Stall Without Panic, Restriction, or Guesswork',
        painLine: "A slower scale doesn't automatically mean you're doing something wrong.",
        bullets: [
          'Plateau Diagnostic Worksheet + "Is this a true plateau?" decision tree',
          'A calm 7-Day Consistency Reset — no extremes, no crash rules',
          'Scale Neutrality Toolkit and beyond-the-scale dashboard',
          'Questions to bring your prescriber before changing anything',
        ],
        value: 27,
      },
      {
        title: 'Life After GLP-1™',
        subtitle: 'The Long-Term Maintenance & Regain-Awareness Guide',
        painLine: "The goal isn't just reaching a number — it's building routines you can return to.",
        bullets: [
          'Two paths covered: ongoing use and medically supervised transitions',
          'Early Warning Signs checklist + monthly sustainability review',
          '90-Day Maintenance Roadmap and food-environment redesign',
          'A guilt-free restart plan for imperfect weeks',
        ],
        value: 37,
      },
      {
        title: 'Food Noise Workbook™',
        subtitle: 'Understand Your Triggers, Build Awareness & Create New Responses',
        painLine: 'Less food noise creates space — you still deserve tools for what fills it.',
        bullets: [
          'Baseline assessment, trigger mapping, and hunger/fullness reflection scales',
          'Urge-surfing practice and a personal Pause Plan',
          '14-Day Awareness Journal with weekly reflection pages',
          'A restart-without-shame plan',
        ],
        value: 27,
      },
    ],
  },
  {
    heading: 'Make Real Life Easier',
    items: [
      {
        title: 'High-Protein Recipe Book™',
        subtitle: '100+ Simple Recipes for Low-Appetite Days',
        painLine: 'When appetite is low, complicated meal plans are the last thing you need.',
        bullets: [
          '100+ protein-forward recipes: breakfasts, lunches, light dinners, snacks, and shakes',
          'Tags for real life: quick, no-cook, soft texture, freezer-friendly, portable',
          'Approximate protein per serving, prep time, and difficulty on every recipe',
          'US and metric measurements + batch-cooking and grocery lists',
        ],
        value: 47,
      },
      {
        title: 'Restaurant & Social Survival Guide™',
        subtitle: 'Eat Out, Travel, Celebrate & Stay Flexible on GLP-1',
        painLine: "Your plan should fit into your life — not shrink it.",
        bullets: [
          'Restaurant decision cards, portion strategy, and fast-food smart choices',
          'Scripts for social pressure, comments, and questions you\'d rather not answer',
          'Travel-day checklist, event prep sheet, and alcohol considerations to discuss with your provider',
          'A no-guilt reset guide for "I ate more than planned" days',
        ],
        value: 27,
      },
    ],
  },
];
