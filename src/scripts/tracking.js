// Minimal client Data Layer. Docs/03-tracking.md §2.
// No client-side pixels here — Meta/GA4/TikTok live server-side (sGTM + CAPI),
// configured separately and out of scope for this static build.
// Health-data hygiene (Docs/03-tracking.md §2): never push medication/condition
// terms or PII into dataLayer events — only generic ids/positions/percentages.

window.dataLayer = window.dataLayer || [];

function pushEvent(payload) {
  window.dataLayer.push(payload);
}

/* ---- UTM passthrough to checkout links ---- */
(function preserveUtms() {
  const params = new URLSearchParams(window.location.search);
  const keep = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const forward = new URLSearchParams();

  keep.forEach((key) => {
    const value = params.get(key);
    if (value) forward.set(key, value);
  });

  if ([...forward.keys()].length === 0) return;

  document.querySelectorAll('[data-cta]').forEach((link) => {
    try {
      const url = new URL(link.href, window.location.origin);
      forward.forEach((value, key) => url.searchParams.set(key, value));
      link.href = url.toString();
    } catch (err) {
      // relative/placeholder hrefs (e.g. "#checkout-pending") — skip silently
    }
  });
})();

/* ---- cta_click + begin_checkout ---- */
document.querySelectorAll('[data-cta]').forEach((link) => {
  link.addEventListener('click', () => {
    const position = link.getAttribute('data-cta-position') || 'unknown';
    const heroVariant = link.getAttribute('data-hero-variant') || undefined;

    pushEvent({ event: 'cta_click', cta_position: position, hero_variant: heroVariant });
    pushEvent({
      event: 'begin_checkout',
      currency: 'USD',
      items: [{ item_id: 'glp1-blueprint-bundle', item_name: 'GLP-1 Success Blueprint Bundle' }],
    });
  });
});

/* ---- view_section (fires once per key section) ---- */
const trackedSectionIds = ['system', 'bonuses', 'stack', 'offer', 'guarantee', 'faq'];
const seenSections = new Set();

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting && !seenSections.has(id)) {
          seenSections.add(id);
          pushEvent({ event: 'view_section', section_id: id });
        }
      });
    },
    { threshold: 0.5 }
  );

  trackedSectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });
}

/* ---- scroll_depth (25/50/75/90%, once each) ---- */
const depthThresholds = [25, 50, 75, 90];
const seenDepths = new Set();

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return;
  const percent = (scrollTop / docHeight) * 100;

  depthThresholds.forEach((threshold) => {
    if (percent >= threshold && !seenDepths.has(threshold)) {
      seenDepths.add(threshold);
      pushEvent({ event: 'scroll_depth', percent: threshold });
    }
  });

  if (seenDepths.size === depthThresholds.length) {
    window.removeEventListener('scroll', onScroll);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
