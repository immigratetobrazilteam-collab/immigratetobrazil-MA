/** MA JS - São Luís - Earthy-cultural with brown warm accents */
const STATE_CONFIG = {
  stateCode: 'ma',
  capital: 'São Luís',
  formspreeUrl: 'https://formspree.io/f/xmaqbddb',
  colors: { primary: '#8b4513', secondary: '#cd853f', accent: '#daa520' },
  animations: {"enabled": true, "header": {"type": "lencolSlide", "duration": "0.9s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "dunesReveal", "duration": "1.3s", "easing": "ease-in-out", "stagger": "0.2s"}, "hero": {"type": "desertParallax", "speed": 0.3, "direction": "multi"}, "cards": {"type": "sandFloat", "lightness": true, "shadow": "soft"}, "images": {"type": "mirageReveal", "shimmer": true, "duration": "1.2s"}},
  interactions: {"hover": "sand-lift", "scroll": "dune-flow", "transitions": "desert-ease", "click": "sand-ripple"},
  premiumEffects: ["lencol-gradient", "sand-particles", "water-shimmer", "oasis-glow"]
};

const SECTIONS = ["ma-index-section--map", "ma-index-section-frequently-asked-questions-about-living-in-", "ma-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
