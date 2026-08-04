// Section 7 bonus library for /v2.
//
// The PRODUCT is identical to v1: same ten guides, same titles, same subtitles,
// same bullets, same reference values. Only two things change, and neither
// touches what the customer receives:
//   1. group order/naming — transition guides lead instead of onboarding ones
//   2. painLine — the one-line emotional hook above the bullets
// Everything else is re-exported from bonus-data.ts so the two pages can never
// drift on what is actually being sold.
import { BONUS_GROUPS, type BonusGroup, type BonusItem } from './bonus-data';

const byTitle = new Map<string, BonusItem>(
  BONUS_GROUPS.flatMap((group) => group.items).map((item) => [item.title, item])
);

const get = (title: string, painLine: string): BonusItem => {
  const item = byTitle.get(title);
  if (!item) throw new Error(`bonus-data-v2: unknown guide "${title}"`);
  return { ...item, painLine };
};

export const BONUS_GROUPS_V2: BonusGroup[] = [
  {
    heading: 'When the Treatment Changes or Ends',
    items: [
      get(
        'Life After GLP-1™',
        'The goal was never a number on a screen. It’s knowing what to do the week after your last dose.'
      ),
      get(
        'Food Noise Workbook™',
        'The medication quieted the noise. This is for when it starts talking again.'
      ),
      get(
        'Plateau Breaker Protocol™',
        'A slower scale is data, not a verdict. Read it before you react to it.'
      ),
    ],
  },
  {
    heading: 'Start Strong — or Start Again',
    items: [
      get(
        'First 30 Days Survival Guide™',
        'Stop wondering what you’re supposed to do next.'
      ),
      get(
        'Side Effect Survival Guide™',
        'When symptoms show up at 11 p.m., you need an answer — not another search.'
      ),
    ],
  },
  {
    heading: 'Protect Your Strength and Your Body',
    items: [
      get(
        'Protein Priority Playbook™',
        'A smaller appetite makes nutrition harder — not less important.'
      ),
      get(
        'Muscle Preservation Blueprint™',
        'Lighter on the scale shouldn’t mean weaker on the stairs.'
      ),
      get(
        'Face & Body Defense Guide™',
        'The scale shows progress. The mirror tells another story.'
      ),
    ],
  },
  {
    heading: 'Make Real Life Easier',
    items: [
      get(
        'High-Protein Recipe Book™',
        'When appetite is low, a complicated meal plan is the first thing you’ll abandon.'
      ),
      get(
        'Restaurant & Social Survival Guide™',
        'Your plan should fit into your life — not shrink it.'
      ),
    ],
  },
];
