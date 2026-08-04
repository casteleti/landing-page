/**
 * Central configuration — the ONLY place to edit page variables.
 * Source: Docs/01-sections-copy.md "VARIÁVEIS DE CONFIGURAÇÃO".
 *
 * Every value below is a placeholder pending real business input.
 * 🚫 Launch-blocking per Docs/04-qa-launch-checklist.md §A until replaced:
 * PRICE, CHECKOUT_URL, SUPPORT_EMAIL, CREATOR_NAME, CREATOR_BIO, BRAND_NAME.
 */

export type HeroVariant = 'a' | 'b' | 'c';

export const PRICE = '$37'; // placeholder — recommended range $37–$47 (Docs/01 §VARIÁVEIS)
export const PRICE_RAW = 37; // numeric value for JSON-LD / dataLayer, keep in sync with PRICE
export const CURRENCY = 'USD';

export const CHECKOUT_URL = '#checkout-pending'; // placeholder — replace with Stripe/ThriveCart URL
export const SUPPORT_EMAIL = 'support@example.com'; // placeholder — replace with real monitored inbox
export const CREATOR_NAME = '[CREATOR NAME]'; // placeholder
export const CREATOR_BIO =
  "Hi, I'm [CREATOR NAME]. I created the GLP-1 Success Blueprint™ after [real context: personal experience / professional background helping GLP-1 users] and seeing how much conflicting, fragmented advice people face every day. I wanted one organized, judgment-free place for the practical side of this journey — built to work alongside your healthcare team, never instead of it.";
export const BRAND_NAME = 'WellspringFlow'; // placeholder — confirm legal entity name for copyright
export const YEAR = new Date().getFullYear();
export const HERO_VARIANT: HeroVariant = 'a';
export const GUARANTEE_DAYS = 7; // pending confirmation with checkout platform + UK consumer rights

export const SITE_URL = 'https://www.wellspringflow.com'; // placeholder canonical domain
export const SITE_TITLE =
  'The GLP-1 Success Blueprint™ — Practical Guides for Your GLP-1 Journey';
export const SITE_DESCRIPTION =
  'A 4-phase educational system plus 10 practical guides to help you navigate low appetite, protein, side-effect questions, plateaus, and long-term habits on prescribed GLP-1 medication. Instant digital access.';

export const HERO_HEADLINES: Record<HeroVariant, string> = {
  a: 'Your Practical GLP-1 Roadmap for Better Nutrition, Stronger Habits, and Lasting Confidence',
  b: 'Stop Guessing Your Way Through GLP-1. Follow a Clear, Practical Plan.',
  c: 'The 4-Phase System for Navigating Real Life on GLP-1 Medication',
};

export const COMBINED_VALUE = 397; // 67+37+37+27+37+27+27+37+47+27+27 — verified in QA checklist §A
