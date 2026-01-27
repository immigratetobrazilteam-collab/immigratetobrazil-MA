
// Master JS for State: MA - Persona: Colonial Historian
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 780;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const ma_index_section_immigrate_to_maranho = document.getElementById('ma-index-section-immigrate-to-maranho');
  if (ma_index_section_immigrate_to_maranho) {
    gsap.fromTo('#ma-index-section-immigrate-to-maranho', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_form_immigrate_to_maranho = document.getElementById('ma-index-form-immigrate-to-maranho');
  if (ma_index_form_immigrate_to_maranho) {
    gsap.from('#ma-index-form-immigrate-to-maranho input, #ma-index-form-immigrate-to-maranho textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_state_vibe = document.getElementById('ma-index-section-state-vibe');
  if (ma_index_section_state_vibe) {
    gsap.fromTo('#ma-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_quick_facts_snapshot = document.getElementById('ma-index-section-quick-facts-snapshot');
  if (ma_index_section_quick_facts_snapshot) {
    gsap.fromTo('#ma-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_maranho_map = document.getElementById('ma-index-section-maranho-map');
  if (ma_index_section_maranho_map) {
    gsap.fromTo('#ma-index-section-maranho-map', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_cost_of_living_maranho = document.getElementById('ma-index-section-cost-of-living-maranho');
  if (ma_index_section_cost_of_living_maranho) {
    gsap.fromTo('#ma-index-section-cost-of-living-maranho', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_government_context = document.getElementById('ma-index-section-government-context');
  if (ma_index_section_government_context) {
    gsap.fromTo('#ma-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_hero_immigration_notes = document.getElementById('ma-index-hero-immigration-notes');
  if (ma_index_hero_immigration_notes) {
    gsap.fromTo('#ma-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_common_applicant_profiles = document.getElementById('ma-index-list-common-applicant-profiles');
  if (ma_index_list_common_applicant_profiles) {
    gsap.from('#ma-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_economic_drivers = document.getElementById('ma-index-list-economic-drivers');
  if (ma_index_list_economic_drivers) {
    gsap.from('#ma-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_demographics = document.getElementById('ma-index-section-demographics');
  if (ma_index_section_demographics) {
    gsap.fromTo('#ma-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_regional_challenges = document.getElementById('ma-index-section-regional-challenges');
  if (ma_index_section_regional_challenges) {
    gsap.fromTo('#ma-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_regional_opportunities = document.getElementById('ma-index-section-regional-opportunities');
  if (ma_index_section_regional_opportunities) {
    gsap.fromTo('#ma-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_culture_daily_life = document.getElementById('ma-index-section-culture-daily-life');
  if (ma_index_section_culture_daily_life) {
    gsap.fromTo('#ma-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_local_language_expressions = document.getElementById('ma-index-list-local-language-expressions');
  if (ma_index_list_local_language_expressions) {
    gsap.from('#ma-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_food_cuisine = document.getElementById('ma-index-list-food-cuisine');
  if (ma_index_list_food_cuisine) {
    gsap.from('#ma-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_festivals_traditions = document.getElementById('ma-index-list-festivals-traditions');
  if (ma_index_list_festivals_traditions) {
    gsap.from('#ma-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_music_artistic_expression = document.getElementById('ma-index-list-music-artistic-expression');
  if (ma_index_list_music_artistic_expression) {
    gsap.from('#ma-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_sports_recreation = document.getElementById('ma-index-list-sports-recreation');
  if (ma_index_list_sports_recreation) {
    gsap.from('#ma-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_landmarks_historical_sites = document.getElementById('ma-index-list-landmarks-historical-sites');
  if (ma_index_list_landmarks_historical_sites) {
    gsap.from('#ma-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_natural_features = document.getElementById('ma-index-list-natural-features');
  if (ma_index_list_natural_features) {
    gsap.from('#ma-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_parks_protected_areas = document.getElementById('ma-index-list-parks-protected-areas');
  if (ma_index_list_parks_protected_areas) {
    gsap.from('#ma-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_museums_cultural_institutions = document.getElementById('ma-index-list-museums-cultural-institutions');
  if (ma_index_list_museums_cultural_institutions) {
    gsap.from('#ma-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_image_gallery = document.getElementById('ma-index-section-image-gallery');
  if (ma_index_section_image_gallery) {
    gsap.fromTo('#ma-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_useful_government_links = document.getElementById('ma-index-section-useful-government-links');
  if (ma_index_section_useful_government_links) {
    gsap.fromTo('#ma-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_hero_federal_police_immigration_links = document.getElementById('ma-index-hero-federal-police-immigration-links');
  if (ma_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#ma-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_external_references = document.getElementById('ma-index-section-external-references');
  if (ma_index_section_external_references) {
    gsap.fromTo('#ma-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_immigration_services_overview = document.getElementById('ma-index-list-immigration-services-overview');
  if (ma_index_list_immigration_services_overview) {
    gsap.from('#ma-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section_why_immigrate_here = document.getElementById('ma-index-section-why-immigrate-here');
  if (ma_index_section_why_immigrate_here) {
    gsap.fromTo('#ma-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_travel_services = document.getElementById('ma-index-list-travel-services');
  if (ma_index_list_travel_services) {
    gsap.from('#ma-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_list_how_the_process_works = document.getElementById('ma-index-list-how-the-process-works');
  if (ma_index_list_how_the_process_works) {
    gsap.from('#ma-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_index_section__frequently_asked_questions_about_living_in_maranho_ = document.getElementById('ma-index-section--frequently-asked-questions-about-living-in-maranho-');
  if (ma_index_section__frequently_asked_questions_about_living_in_maranho_) {
    gsap.fromTo('#ma-index-section--frequently-asked-questions-about-living-in-maranho-', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_contactcta_section_get_started_in_maranho = document.getElementById('ma-contactcta-section-get-started-in-maranho');
  if (ma_contactcta_section_get_started_in_maranho) {
    gsap.fromTo('#ma-contactcta-section-get-started-in-maranho', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('ma-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (ma_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#ma-renouncingcitizenship-form-renounce-brazilian-citizenship input, #ma-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_list_quick_facts = document.getElementById('ma-renouncingcitizenship-list-quick-facts');
  if (ma_renouncingcitizenship_list_quick_facts) {
    gsap.from('#ma-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('ma-renouncingcitizenship-list-common-challenges-applicants-face');
  if (ma_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ma-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('ma-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (ma_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ma-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_renunciation_overview = document.getElementById('ma-renouncingcitizenship-section-renunciation-overview');
  if (ma_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#ma-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_form_who_is_this_for = document.getElementById('ma-renouncingcitizenship-form-who-is-this-for');
  if (ma_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#ma-renouncingcitizenship-form-who-is-this-for input, #ma-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_list_required_documents = document.getElementById('ma-renouncingcitizenship-list-required-documents');
  if (ma_renouncingcitizenship_list_required_documents) {
    gsap.from('#ma-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_list_process = document.getElementById('ma-renouncingcitizenship-list-process');
  if (ma_renouncingcitizenship_list_process) {
    gsap.from('#ma-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_timelines_deadlines = document.getElementById('ma-renouncingcitizenship-section-timelines-deadlines');
  if (ma_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ma-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_fees_costs = document.getElementById('ma-renouncingcitizenship-section-fees-costs');
  if (ma_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#ma-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('ma-renouncingcitizenship-list-risks-common-mistakes');
  if (ma_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#ma-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('ma-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (ma_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_maranho_specific_context = document.getElementById('ma-renouncingcitizenship-section-maranho-specific-context');
  if (ma_renouncingcitizenship_section_maranho_specific_context) {
    gsap.fromTo('#ma-renouncingcitizenship-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_what_our_clients_say = document.getElementById('ma-renouncingcitizenship-section-what-our-clients-say');
  if (ma_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ma-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('ma-renouncingcitizenship-section-frequently-asked-questions');
  if (ma_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ma-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_international_support = document.getElementById('ma-renouncingcitizenship-section-international-support');
  if (ma_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#ma-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_list_our_credentials = document.getElementById('ma-renouncingcitizenship-list-our-credentials');
  if (ma_renouncingcitizenship_list_our_credentials) {
    gsap.from('#ma-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_list_related_services = document.getElementById('ma-renouncingcitizenship-list-related-services');
  if (ma_renouncingcitizenship_list_related_services) {
    gsap.from('#ma-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('ma-renouncingcitizenship-section-youre-in-good-hands');
  if (ma_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ma-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_renouncingcitizenship_section_21 = document.getElementById('ma-renouncingcitizenship-section-21');
  if (ma_renouncingcitizenship_section_21) {
    gsap.fromTo('#ma-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('ma-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (ma_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#ma-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #ma-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_list_quick_facts = document.getElementById('ma-provisional-list-quick-facts');
  if (ma_provisional_list_quick_facts) {
    gsap.from('#ma-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_list_common_challenges_applicants_face = document.getElementById('ma-provisional-list-common-challenges-applicants-face');
  if (ma_provisional_list_common_challenges_applicants_face) {
    gsap.from('#ma-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_list_how_we_solve_these_challenges = document.getElementById('ma-provisional-list-how-we-solve-these-challenges');
  if (ma_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#ma-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_naturalisation_overview = document.getElementById('ma-provisional-section-naturalisation-overview');
  if (ma_provisional_section_naturalisation_overview) {
    gsap.fromTo('#ma-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_form_who_is_this_naturalisation_for = document.getElementById('ma-provisional-form-who-is-this-naturalisation-for');
  if (ma_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#ma-provisional-form-who-is-this-naturalisation-for input, #ma-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_list_required_documents = document.getElementById('ma-provisional-list-required-documents');
  if (ma_provisional_list_required_documents) {
    gsap.from('#ma-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_list_application_process = document.getElementById('ma-provisional-list-application-process');
  if (ma_provisional_list_application_process) {
    gsap.from('#ma-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_timelines_deadlines = document.getElementById('ma-provisional-section-timelines-deadlines');
  if (ma_provisional_section_timelines_deadlines) {
    gsap.fromTo('#ma-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_fees_costs = document.getElementById('ma-provisional-section-fees-costs');
  if (ma_provisional_section_fees_costs) {
    gsap.fromTo('#ma-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_list_risks_common_mistakes = document.getElementById('ma-provisional-list-risks-common-mistakes');
  if (ma_provisional_list_risks_common_mistakes) {
    gsap.from('#ma-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_diy_vs_professional_assistance = document.getElementById('ma-provisional-section-diy-vs-professional-assistance');
  if (ma_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_maranho_specific_context = document.getElementById('ma-provisional-section-maranho-specific-context');
  if (ma_provisional_section_maranho_specific_context) {
    gsap.fromTo('#ma-provisional-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_what_our_clients_say = document.getElementById('ma-provisional-section-what-our-clients-say');
  if (ma_provisional_section_what_our_clients_say) {
    gsap.fromTo('#ma-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_frequently_asked_questions = document.getElementById('ma-provisional-section-frequently-asked-questions');
  if (ma_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#ma-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_international_support = document.getElementById('ma-provisional-section-international-support');
  if (ma_provisional_section_international_support) {
    gsap.fromTo('#ma-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_list_our_credentials = document.getElementById('ma-provisional-list-our-credentials');
  if (ma_provisional_list_our_credentials) {
    gsap.from('#ma-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_list_related_services = document.getElementById('ma-provisional-list-related-services');
  if (ma_provisional_list_related_services) {
    gsap.from('#ma-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_youre_in_good_hands = document.getElementById('ma-provisional-section-youre-in-good-hands');
  if (ma_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#ma-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_provisional_section_21 = document.getElementById('ma-provisional-section-21');
  if (ma_provisional_section_21) {
    gsap.fromTo('#ma-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('ma-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (ma_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#ma-special-form-special-naturalisation-in-brazil-for-particular-cases input, #ma-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_list_quick_facts = document.getElementById('ma-special-list-quick-facts');
  if (ma_special_list_quick_facts) {
    gsap.from('#ma-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_list_common_challenges_applicants_face = document.getElementById('ma-special-list-common-challenges-applicants-face');
  if (ma_special_list_common_challenges_applicants_face) {
    gsap.from('#ma-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_list_how_we_solve_these_challenges = document.getElementById('ma-special-list-how-we-solve-these-challenges');
  if (ma_special_list_how_we_solve_these_challenges) {
    gsap.from('#ma-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_naturalisation_overview = document.getElementById('ma-special-section-naturalisation-overview');
  if (ma_special_section_naturalisation_overview) {
    gsap.fromTo('#ma-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_form_who_is_this_naturalisation_for = document.getElementById('ma-special-form-who-is-this-naturalisation-for');
  if (ma_special_form_who_is_this_naturalisation_for) {
    gsap.from('#ma-special-form-who-is-this-naturalisation-for input, #ma-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_list_required_documents = document.getElementById('ma-special-list-required-documents');
  if (ma_special_list_required_documents) {
    gsap.from('#ma-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_list_application_process = document.getElementById('ma-special-list-application-process');
  if (ma_special_list_application_process) {
    gsap.from('#ma-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_timelines_deadlines = document.getElementById('ma-special-section-timelines-deadlines');
  if (ma_special_section_timelines_deadlines) {
    gsap.fromTo('#ma-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_fees_costs = document.getElementById('ma-special-section-fees-costs');
  if (ma_special_section_fees_costs) {
    gsap.fromTo('#ma-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_list_risks_common_mistakes = document.getElementById('ma-special-list-risks-common-mistakes');
  if (ma_special_list_risks_common_mistakes) {
    gsap.from('#ma-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_diy_vs_professional_assistance = document.getElementById('ma-special-section-diy-vs-professional-assistance');
  if (ma_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_maranho_specific_context = document.getElementById('ma-special-section-maranho-specific-context');
  if (ma_special_section_maranho_specific_context) {
    gsap.fromTo('#ma-special-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_what_our_clients_say = document.getElementById('ma-special-section-what-our-clients-say');
  if (ma_special_section_what_our_clients_say) {
    gsap.fromTo('#ma-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_frequently_asked_questions = document.getElementById('ma-special-section-frequently-asked-questions');
  if (ma_special_section_frequently_asked_questions) {
    gsap.fromTo('#ma-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_international_support = document.getElementById('ma-special-section-international-support');
  if (ma_special_section_international_support) {
    gsap.fromTo('#ma-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_list_our_credentials = document.getElementById('ma-special-list-our-credentials');
  if (ma_special_list_our_credentials) {
    gsap.from('#ma-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_list_related_services = document.getElementById('ma-special-list-related-services');
  if (ma_special_list_related_services) {
    gsap.from('#ma-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_youre_in_good_hands = document.getElementById('ma-special-section-youre-in-good-hands');
  if (ma_special_section_youre_in_good_hands) {
    gsap.fromTo('#ma-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_special_section_21 = document.getElementById('ma-special-section-21');
  if (ma_special_section_21) {
    gsap.fromTo('#ma-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('ma-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (ma_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#ma-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #ma-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_list_quick_facts = document.getElementById('ma-ordinary-list-quick-facts');
  if (ma_ordinary_list_quick_facts) {
    gsap.from('#ma-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_list_common_challenges_applicants_face = document.getElementById('ma-ordinary-list-common-challenges-applicants-face');
  if (ma_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#ma-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_list_how_we_solve_these_challenges = document.getElementById('ma-ordinary-list-how-we-solve-these-challenges');
  if (ma_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ma-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_naturalisation_overview = document.getElementById('ma-ordinary-section-naturalisation-overview');
  if (ma_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#ma-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_form_who_is_this_naturalisation_for = document.getElementById('ma-ordinary-form-who-is-this-naturalisation-for');
  if (ma_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ma-ordinary-form-who-is-this-naturalisation-for input, #ma-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_list_required_documents = document.getElementById('ma-ordinary-list-required-documents');
  if (ma_ordinary_list_required_documents) {
    gsap.from('#ma-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_list_application_process = document.getElementById('ma-ordinary-list-application-process');
  if (ma_ordinary_list_application_process) {
    gsap.from('#ma-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_timelines_deadlines = document.getElementById('ma-ordinary-section-timelines-deadlines');
  if (ma_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#ma-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_fees_costs = document.getElementById('ma-ordinary-section-fees-costs');
  if (ma_ordinary_section_fees_costs) {
    gsap.fromTo('#ma-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_list_risks_common_mistakes = document.getElementById('ma-ordinary-list-risks-common-mistakes');
  if (ma_ordinary_list_risks_common_mistakes) {
    gsap.from('#ma-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_diy_vs_professional_assistance = document.getElementById('ma-ordinary-section-diy-vs-professional-assistance');
  if (ma_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_maranho_specific_context = document.getElementById('ma-ordinary-section-maranho-specific-context');
  if (ma_ordinary_section_maranho_specific_context) {
    gsap.fromTo('#ma-ordinary-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_what_our_clients_say = document.getElementById('ma-ordinary-section-what-our-clients-say');
  if (ma_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#ma-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_frequently_asked_questions = document.getElementById('ma-ordinary-section-frequently-asked-questions');
  if (ma_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ma-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_international_support = document.getElementById('ma-ordinary-section-international-support');
  if (ma_ordinary_section_international_support) {
    gsap.fromTo('#ma-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_list_our_credentials = document.getElementById('ma-ordinary-list-our-credentials');
  if (ma_ordinary_list_our_credentials) {
    gsap.from('#ma-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_list_related_services = document.getElementById('ma-ordinary-list-related-services');
  if (ma_ordinary_list_related_services) {
    gsap.from('#ma-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_youre_in_good_hands = document.getElementById('ma-ordinary-section-youre-in-good-hands');
  if (ma_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ma-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_ordinary_section_21 = document.getElementById('ma-ordinary-section-21');
  if (ma_ordinary_section_21) {
    gsap.fromTo('#ma-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('ma-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (ma_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#ma-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #ma-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_list_quick_facts = document.getElementById('ma-extraordinary-list-quick-facts');
  if (ma_extraordinary_list_quick_facts) {
    gsap.from('#ma-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_list_common_challenges_applicants_face = document.getElementById('ma-extraordinary-list-common-challenges-applicants-face');
  if (ma_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#ma-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_list_how_we_solve_these_challenges = document.getElementById('ma-extraordinary-list-how-we-solve-these-challenges');
  if (ma_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ma-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_naturalisation_overview = document.getElementById('ma-extraordinary-section-naturalisation-overview');
  if (ma_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#ma-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('ma-extraordinary-form-who-is-this-naturalisation-for');
  if (ma_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ma-extraordinary-form-who-is-this-naturalisation-for input, #ma-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_list_required_documents = document.getElementById('ma-extraordinary-list-required-documents');
  if (ma_extraordinary_list_required_documents) {
    gsap.from('#ma-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_list_application_process = document.getElementById('ma-extraordinary-list-application-process');
  if (ma_extraordinary_list_application_process) {
    gsap.from('#ma-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_timelines_deadlines = document.getElementById('ma-extraordinary-section-timelines-deadlines');
  if (ma_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#ma-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_fees_costs = document.getElementById('ma-extraordinary-section-fees-costs');
  if (ma_extraordinary_section_fees_costs) {
    gsap.fromTo('#ma-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_list_risks_common_mistakes = document.getElementById('ma-extraordinary-list-risks-common-mistakes');
  if (ma_extraordinary_list_risks_common_mistakes) {
    gsap.from('#ma-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_diy_vs_professional_assistance = document.getElementById('ma-extraordinary-section-diy-vs-professional-assistance');
  if (ma_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_maranho_specific_context = document.getElementById('ma-extraordinary-section-maranho-specific-context');
  if (ma_extraordinary_section_maranho_specific_context) {
    gsap.fromTo('#ma-extraordinary-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_what_our_clients_say = document.getElementById('ma-extraordinary-section-what-our-clients-say');
  if (ma_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#ma-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_frequently_asked_questions = document.getElementById('ma-extraordinary-section-frequently-asked-questions');
  if (ma_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ma-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_international_support = document.getElementById('ma-extraordinary-section-international-support');
  if (ma_extraordinary_section_international_support) {
    gsap.fromTo('#ma-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_list_our_credentials = document.getElementById('ma-extraordinary-list-our-credentials');
  if (ma_extraordinary_list_our_credentials) {
    gsap.from('#ma-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_list_related_services = document.getElementById('ma-extraordinary-list-related-services');
  if (ma_extraordinary_list_related_services) {
    gsap.from('#ma-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_youre_in_good_hands = document.getElementById('ma-extraordinary-section-youre-in-good-hands');
  if (ma_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ma-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extraordinary_section_21 = document.getElementById('ma-extraordinary-section-21');
  if (ma_extraordinary_section_21) {
    gsap.fromTo('#ma-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('ma-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (ma_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#ma-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #ma-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_list_quick_facts = document.getElementById('ma-reacquisitioncitizenship-list-quick-facts');
  if (ma_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#ma-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('ma-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (ma_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ma-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('ma-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (ma_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ma-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('ma-reacquisitioncitizenship-section-reacquisition-overview');
  if (ma_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('ma-reacquisitioncitizenship-form-who-is-this-for');
  if (ma_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#ma-reacquisitioncitizenship-form-who-is-this-for input, #ma-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_list_required_documents = document.getElementById('ma-reacquisitioncitizenship-list-required-documents');
  if (ma_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#ma-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_list_process = document.getElementById('ma-reacquisitioncitizenship-list-process');
  if (ma_reacquisitioncitizenship_list_process) {
    gsap.from('#ma-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('ma-reacquisitioncitizenship-section-timelines-deadlines');
  if (ma_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_fees_costs = document.getElementById('ma-reacquisitioncitizenship-section-fees-costs');
  if (ma_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('ma-reacquisitioncitizenship-list-risks-common-mistakes');
  if (ma_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#ma-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('ma-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (ma_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_maranho_specific_context = document.getElementById('ma-reacquisitioncitizenship-section-maranho-specific-context');
  if (ma_reacquisitioncitizenship_section_maranho_specific_context) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('ma-reacquisitioncitizenship-section-what-our-clients-say');
  if (ma_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('ma-reacquisitioncitizenship-section-frequently-asked-questions');
  if (ma_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_international_support = document.getElementById('ma-reacquisitioncitizenship-section-international-support');
  if (ma_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_list_our_credentials = document.getElementById('ma-reacquisitioncitizenship-list-our-credentials');
  if (ma_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#ma-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_list_related_services = document.getElementById('ma-reacquisitioncitizenship-list-related-services');
  if (ma_reacquisitioncitizenship_list_related_services) {
    gsap.from('#ma-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('ma-reacquisitioncitizenship-section-youre-in-good-hands');
  if (ma_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_reacquisitioncitizenship_section_21 = document.getElementById('ma-reacquisitioncitizenship-section-21');
  if (ma_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#ma-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('ma-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (ma_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#ma-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #ma-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_list_quick_facts = document.getElementById('ma-scientificresearch-list-quick-facts');
  if (ma_scientificresearch_list_quick_facts) {
    gsap.from('#ma-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_list_common_challenges_applicants_face = document.getElementById('ma-scientificresearch-list-common-challenges-applicants-face');
  if (ma_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#ma-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('ma-scientificresearch-list-how-we-solve-these-challenges');
  if (ma_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#ma-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_residency_overview = document.getElementById('ma-scientificresearch-section-residency-overview');
  if (ma_scientificresearch_section_residency_overview) {
    gsap.fromTo('#ma-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_form_who_is_this_residency_for = document.getElementById('ma-scientificresearch-form-who-is-this-residency-for');
  if (ma_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#ma-scientificresearch-form-who-is-this-residency-for input, #ma-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_list_required_documents = document.getElementById('ma-scientificresearch-list-required-documents');
  if (ma_scientificresearch_list_required_documents) {
    gsap.from('#ma-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_list_application_process = document.getElementById('ma-scientificresearch-list-application-process');
  if (ma_scientificresearch_list_application_process) {
    gsap.from('#ma-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_timelines_deadlines = document.getElementById('ma-scientificresearch-section-timelines-deadlines');
  if (ma_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#ma-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_fees_costs = document.getElementById('ma-scientificresearch-section-fees-costs');
  if (ma_scientificresearch_section_fees_costs) {
    gsap.fromTo('#ma-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_list_risks_common_mistakes = document.getElementById('ma-scientificresearch-list-risks-common-mistakes');
  if (ma_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#ma-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('ma-scientificresearch-section-diy-vs-professional-assistance');
  if (ma_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_maranho_specific_context = document.getElementById('ma-scientificresearch-section-maranho-specific-context');
  if (ma_scientificresearch_section_maranho_specific_context) {
    gsap.fromTo('#ma-scientificresearch-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_what_our_clients_say = document.getElementById('ma-scientificresearch-section-what-our-clients-say');
  if (ma_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#ma-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_frequently_asked_questions = document.getElementById('ma-scientificresearch-section-frequently-asked-questions');
  if (ma_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#ma-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_international_support = document.getElementById('ma-scientificresearch-section-international-support');
  if (ma_scientificresearch_section_international_support) {
    gsap.fromTo('#ma-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_list_our_credentials = document.getElementById('ma-scientificresearch-list-our-credentials');
  if (ma_scientificresearch_list_our_credentials) {
    gsap.from('#ma-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_list_related_services = document.getElementById('ma-scientificresearch-list-related-services');
  if (ma_scientificresearch_list_related_services) {
    gsap.from('#ma-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_youre_in_good_hands = document.getElementById('ma-scientificresearch-section-youre-in-good-hands');
  if (ma_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#ma-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_scientificresearch_section_21 = document.getElementById('ma-scientificresearch-section-21');
  if (ma_scientificresearch_section_21) {
    gsap.fromTo('#ma-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_form_study_in_brazil_with_study_residency = document.getElementById('ma-study-form-study-in-brazil-with-study-residency');
  if (ma_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#ma-study-form-study-in-brazil-with-study-residency input, #ma-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_list_quick_facts = document.getElementById('ma-study-list-quick-facts');
  if (ma_study_list_quick_facts) {
    gsap.from('#ma-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_list_common_challenges_applicants_face = document.getElementById('ma-study-list-common-challenges-applicants-face');
  if (ma_study_list_common_challenges_applicants_face) {
    gsap.from('#ma-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_list_how_we_solve_these_challenges = document.getElementById('ma-study-list-how-we-solve-these-challenges');
  if (ma_study_list_how_we_solve_these_challenges) {
    gsap.from('#ma-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_residency_overview = document.getElementById('ma-study-section-residency-overview');
  if (ma_study_section_residency_overview) {
    gsap.fromTo('#ma-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_form_who_is_this_residency_for = document.getElementById('ma-study-form-who-is-this-residency-for');
  if (ma_study_form_who_is_this_residency_for) {
    gsap.from('#ma-study-form-who-is-this-residency-for input, #ma-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_list_required_documents = document.getElementById('ma-study-list-required-documents');
  if (ma_study_list_required_documents) {
    gsap.from('#ma-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_list_application_process = document.getElementById('ma-study-list-application-process');
  if (ma_study_list_application_process) {
    gsap.from('#ma-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_timelines_deadlines = document.getElementById('ma-study-section-timelines-deadlines');
  if (ma_study_section_timelines_deadlines) {
    gsap.fromTo('#ma-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_fees_costs = document.getElementById('ma-study-section-fees-costs');
  if (ma_study_section_fees_costs) {
    gsap.fromTo('#ma-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_list_risks_common_mistakes = document.getElementById('ma-study-list-risks-common-mistakes');
  if (ma_study_list_risks_common_mistakes) {
    gsap.from('#ma-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_diy_vs_professional_assistance = document.getElementById('ma-study-section-diy-vs-professional-assistance');
  if (ma_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_maranho_specific_context = document.getElementById('ma-study-section-maranho-specific-context');
  if (ma_study_section_maranho_specific_context) {
    gsap.fromTo('#ma-study-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_what_our_clients_say = document.getElementById('ma-study-section-what-our-clients-say');
  if (ma_study_section_what_our_clients_say) {
    gsap.fromTo('#ma-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_frequently_asked_questions = document.getElementById('ma-study-section-frequently-asked-questions');
  if (ma_study_section_frequently_asked_questions) {
    gsap.fromTo('#ma-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_international_support = document.getElementById('ma-study-section-international-support');
  if (ma_study_section_international_support) {
    gsap.fromTo('#ma-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_list_our_credentials = document.getElementById('ma-study-list-our-credentials');
  if (ma_study_list_our_credentials) {
    gsap.from('#ma-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_list_related_services = document.getElementById('ma-study-list-related-services');
  if (ma_study_list_related_services) {
    gsap.from('#ma-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_youre_in_good_hands = document.getElementById('ma-study-section-youre-in-good-hands');
  if (ma_study_section_youre_in_good_hands) {
    gsap.fromTo('#ma-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_study_section_21 = document.getElementById('ma-study-section-21');
  if (ma_study_section_21) {
    gsap.fromTo('#ma-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('ma-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (ma_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#ma-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #ma-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_list_quick_facts = document.getElementById('ma-educationalexchange-list-quick-facts');
  if (ma_educationalexchange_list_quick_facts) {
    gsap.from('#ma-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_list_common_challenges_applicants_face = document.getElementById('ma-educationalexchange-list-common-challenges-applicants-face');
  if (ma_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#ma-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('ma-educationalexchange-list-how-we-solve-these-challenges');
  if (ma_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ma-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_residency_overview = document.getElementById('ma-educationalexchange-section-residency-overview');
  if (ma_educationalexchange_section_residency_overview) {
    gsap.fromTo('#ma-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_form_who_is_this_residency_for = document.getElementById('ma-educationalexchange-form-who-is-this-residency-for');
  if (ma_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#ma-educationalexchange-form-who-is-this-residency-for input, #ma-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_list_required_documents = document.getElementById('ma-educationalexchange-list-required-documents');
  if (ma_educationalexchange_list_required_documents) {
    gsap.from('#ma-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_list_application_process = document.getElementById('ma-educationalexchange-list-application-process');
  if (ma_educationalexchange_list_application_process) {
    gsap.from('#ma-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_timelines_deadlines = document.getElementById('ma-educationalexchange-section-timelines-deadlines');
  if (ma_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#ma-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_fees_costs = document.getElementById('ma-educationalexchange-section-fees-costs');
  if (ma_educationalexchange_section_fees_costs) {
    gsap.fromTo('#ma-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_list_risks_common_mistakes = document.getElementById('ma-educationalexchange-list-risks-common-mistakes');
  if (ma_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#ma-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('ma-educationalexchange-section-diy-vs-professional-assistance');
  if (ma_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_maranho_specific_context = document.getElementById('ma-educationalexchange-section-maranho-specific-context');
  if (ma_educationalexchange_section_maranho_specific_context) {
    gsap.fromTo('#ma-educationalexchange-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_what_our_clients_say = document.getElementById('ma-educationalexchange-section-what-our-clients-say');
  if (ma_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#ma-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_frequently_asked_questions = document.getElementById('ma-educationalexchange-section-frequently-asked-questions');
  if (ma_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ma-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_international_support = document.getElementById('ma-educationalexchange-section-international-support');
  if (ma_educationalexchange_section_international_support) {
    gsap.fromTo('#ma-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_list_our_credentials = document.getElementById('ma-educationalexchange-list-our-credentials');
  if (ma_educationalexchange_list_our_credentials) {
    gsap.from('#ma-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_list_related_services = document.getElementById('ma-educationalexchange-list-related-services');
  if (ma_educationalexchange_list_related_services) {
    gsap.from('#ma-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_youre_in_good_hands = document.getElementById('ma-educationalexchange-section-youre-in-good-hands');
  if (ma_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ma-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_educationalexchange_section_21 = document.getElementById('ma-educationalexchange-section-21');
  if (ma_educationalexchange_section_21) {
    gsap.fromTo('#ma-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('ma-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (ma_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#ma-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #ma-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_list_quick_facts = document.getElementById('ma-humanitarian-list-quick-facts');
  if (ma_humanitarian_list_quick_facts) {
    gsap.from('#ma-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_list_common_challenges_applicants_face = document.getElementById('ma-humanitarian-list-common-challenges-applicants-face');
  if (ma_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#ma-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_list_how_we_solve_these_challenges = document.getElementById('ma-humanitarian-list-how-we-solve-these-challenges');
  if (ma_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#ma-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_residency_overview = document.getElementById('ma-humanitarian-section-residency-overview');
  if (ma_humanitarian_section_residency_overview) {
    gsap.fromTo('#ma-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_form_who_is_this_residency_for = document.getElementById('ma-humanitarian-form-who-is-this-residency-for');
  if (ma_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#ma-humanitarian-form-who-is-this-residency-for input, #ma-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_list_required_documents = document.getElementById('ma-humanitarian-list-required-documents');
  if (ma_humanitarian_list_required_documents) {
    gsap.from('#ma-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_list_application_process = document.getElementById('ma-humanitarian-list-application-process');
  if (ma_humanitarian_list_application_process) {
    gsap.from('#ma-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_timelines_deadlines = document.getElementById('ma-humanitarian-section-timelines-deadlines');
  if (ma_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#ma-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_fees_costs = document.getElementById('ma-humanitarian-section-fees-costs');
  if (ma_humanitarian_section_fees_costs) {
    gsap.fromTo('#ma-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_list_risks_common_mistakes = document.getElementById('ma-humanitarian-list-risks-common-mistakes');
  if (ma_humanitarian_list_risks_common_mistakes) {
    gsap.from('#ma-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_diy_vs_professional_assistance = document.getElementById('ma-humanitarian-section-diy-vs-professional-assistance');
  if (ma_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_maranho_specific_context = document.getElementById('ma-humanitarian-section-maranho-specific-context');
  if (ma_humanitarian_section_maranho_specific_context) {
    gsap.fromTo('#ma-humanitarian-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_what_our_clients_say = document.getElementById('ma-humanitarian-section-what-our-clients-say');
  if (ma_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#ma-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_frequently_asked_questions = document.getElementById('ma-humanitarian-section-frequently-asked-questions');
  if (ma_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#ma-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_international_support = document.getElementById('ma-humanitarian-section-international-support');
  if (ma_humanitarian_section_international_support) {
    gsap.fromTo('#ma-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_list_our_credentials = document.getElementById('ma-humanitarian-list-our-credentials');
  if (ma_humanitarian_list_our_credentials) {
    gsap.from('#ma-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_list_related_services = document.getElementById('ma-humanitarian-list-related-services');
  if (ma_humanitarian_list_related_services) {
    gsap.from('#ma-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_youre_in_good_hands = document.getElementById('ma-humanitarian-section-youre-in-good-hands');
  if (ma_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#ma-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_humanitarian_section_21 = document.getElementById('ma-humanitarian-section-21');
  if (ma_humanitarian_section_21) {
    gsap.fromTo('#ma-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('ma-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (ma_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#ma-digitalnomad-form-digital-nomad-residency-in-brazil input, #ma-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_list_quick_facts = document.getElementById('ma-digitalnomad-list-quick-facts');
  if (ma_digitalnomad_list_quick_facts) {
    gsap.from('#ma-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_list_common_challenges_applicants_face = document.getElementById('ma-digitalnomad-list-common-challenges-applicants-face');
  if (ma_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#ma-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('ma-digitalnomad-list-how-we-solve-these-challenges');
  if (ma_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#ma-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_residency_overview = document.getElementById('ma-digitalnomad-section-residency-overview');
  if (ma_digitalnomad_section_residency_overview) {
    gsap.fromTo('#ma-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_form_who_is_this_residency_for = document.getElementById('ma-digitalnomad-form-who-is-this-residency-for');
  if (ma_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#ma-digitalnomad-form-who-is-this-residency-for input, #ma-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_list_required_documents = document.getElementById('ma-digitalnomad-list-required-documents');
  if (ma_digitalnomad_list_required_documents) {
    gsap.from('#ma-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_list_application_process = document.getElementById('ma-digitalnomad-list-application-process');
  if (ma_digitalnomad_list_application_process) {
    gsap.from('#ma-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_timelines_deadlines = document.getElementById('ma-digitalnomad-section-timelines-deadlines');
  if (ma_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#ma-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_fees_costs = document.getElementById('ma-digitalnomad-section-fees-costs');
  if (ma_digitalnomad_section_fees_costs) {
    gsap.fromTo('#ma-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_list_risks_common_mistakes = document.getElementById('ma-digitalnomad-list-risks-common-mistakes');
  if (ma_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#ma-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('ma-digitalnomad-section-diy-vs-professional-assistance');
  if (ma_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_maranho_specific_context = document.getElementById('ma-digitalnomad-section-maranho-specific-context');
  if (ma_digitalnomad_section_maranho_specific_context) {
    gsap.fromTo('#ma-digitalnomad-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_what_our_clients_say = document.getElementById('ma-digitalnomad-section-what-our-clients-say');
  if (ma_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#ma-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_frequently_asked_questions = document.getElementById('ma-digitalnomad-section-frequently-asked-questions');
  if (ma_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#ma-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_international_support = document.getElementById('ma-digitalnomad-section-international-support');
  if (ma_digitalnomad_section_international_support) {
    gsap.fromTo('#ma-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_list_our_credentials = document.getElementById('ma-digitalnomad-list-our-credentials');
  if (ma_digitalnomad_list_our_credentials) {
    gsap.from('#ma-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_list_related_services = document.getElementById('ma-digitalnomad-list-related-services');
  if (ma_digitalnomad_list_related_services) {
    gsap.from('#ma-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_youre_in_good_hands = document.getElementById('ma-digitalnomad-section-youre-in-good-hands');
  if (ma_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#ma-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_digitalnomad_section_21 = document.getElementById('ma-digitalnomad-section-21');
  if (ma_digitalnomad_section_21) {
    gsap.fromTo('#ma-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('ma-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (ma_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#ma-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #ma-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_list_quick_facts = document.getElementById('ma-familyreunion-list-quick-facts');
  if (ma_familyreunion_list_quick_facts) {
    gsap.from('#ma-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_list_common_challenges_applicants_face = document.getElementById('ma-familyreunion-list-common-challenges-applicants-face');
  if (ma_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#ma-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_list_how_we_solve_these_challenges = document.getElementById('ma-familyreunion-list-how-we-solve-these-challenges');
  if (ma_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#ma-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_residency_overview = document.getElementById('ma-familyreunion-section-residency-overview');
  if (ma_familyreunion_section_residency_overview) {
    gsap.fromTo('#ma-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_form_who_is_this_residency_for = document.getElementById('ma-familyreunion-form-who-is-this-residency-for');
  if (ma_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#ma-familyreunion-form-who-is-this-residency-for input, #ma-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_list_required_documents = document.getElementById('ma-familyreunion-list-required-documents');
  if (ma_familyreunion_list_required_documents) {
    gsap.from('#ma-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_list_application_process = document.getElementById('ma-familyreunion-list-application-process');
  if (ma_familyreunion_list_application_process) {
    gsap.from('#ma-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_timelines_deadlines = document.getElementById('ma-familyreunion-section-timelines-deadlines');
  if (ma_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#ma-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_fees_costs = document.getElementById('ma-familyreunion-section-fees-costs');
  if (ma_familyreunion_section_fees_costs) {
    gsap.fromTo('#ma-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_list_risks_common_mistakes = document.getElementById('ma-familyreunion-list-risks-common-mistakes');
  if (ma_familyreunion_list_risks_common_mistakes) {
    gsap.from('#ma-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_diy_vs_professional_assistance = document.getElementById('ma-familyreunion-section-diy-vs-professional-assistance');
  if (ma_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_maranho_specific_context = document.getElementById('ma-familyreunion-section-maranho-specific-context');
  if (ma_familyreunion_section_maranho_specific_context) {
    gsap.fromTo('#ma-familyreunion-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_what_our_clients_say = document.getElementById('ma-familyreunion-section-what-our-clients-say');
  if (ma_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#ma-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_frequently_asked_questions = document.getElementById('ma-familyreunion-section-frequently-asked-questions');
  if (ma_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#ma-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_international_support = document.getElementById('ma-familyreunion-section-international-support');
  if (ma_familyreunion_section_international_support) {
    gsap.fromTo('#ma-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_list_our_credentials = document.getElementById('ma-familyreunion-list-our-credentials');
  if (ma_familyreunion_list_our_credentials) {
    gsap.from('#ma-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_list_related_services = document.getElementById('ma-familyreunion-list-related-services');
  if (ma_familyreunion_list_related_services) {
    gsap.from('#ma-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_youre_in_good_hands = document.getElementById('ma-familyreunion-section-youre-in-good-hands');
  if (ma_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#ma-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_familyreunion_section_21 = document.getElementById('ma-familyreunion-section-21');
  if (ma_familyreunion_section_21) {
    gsap.fromTo('#ma-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('ma-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (ma_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#ma-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #ma-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_list_quick_facts = document.getElementById('ma-mercosul-list-quick-facts');
  if (ma_mercosul_list_quick_facts) {
    gsap.from('#ma-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_list_common_challenges_applicants_face = document.getElementById('ma-mercosul-list-common-challenges-applicants-face');
  if (ma_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#ma-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_list_how_we_solve_these_challenges = document.getElementById('ma-mercosul-list-how-we-solve-these-challenges');
  if (ma_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#ma-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_residency_overview = document.getElementById('ma-mercosul-section-residency-overview');
  if (ma_mercosul_section_residency_overview) {
    gsap.fromTo('#ma-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_form_who_is_this_residency_for = document.getElementById('ma-mercosul-form-who-is-this-residency-for');
  if (ma_mercosul_form_who_is_this_residency_for) {
    gsap.from('#ma-mercosul-form-who-is-this-residency-for input, #ma-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_list_required_documents = document.getElementById('ma-mercosul-list-required-documents');
  if (ma_mercosul_list_required_documents) {
    gsap.from('#ma-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_list_application_process = document.getElementById('ma-mercosul-list-application-process');
  if (ma_mercosul_list_application_process) {
    gsap.from('#ma-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_timelines_deadlines = document.getElementById('ma-mercosul-section-timelines-deadlines');
  if (ma_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#ma-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_fees_costs = document.getElementById('ma-mercosul-section-fees-costs');
  if (ma_mercosul_section_fees_costs) {
    gsap.fromTo('#ma-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_list_risks_common_mistakes = document.getElementById('ma-mercosul-list-risks-common-mistakes');
  if (ma_mercosul_list_risks_common_mistakes) {
    gsap.from('#ma-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_diy_vs_professional_assistance = document.getElementById('ma-mercosul-section-diy-vs-professional-assistance');
  if (ma_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_maranho_specific_context = document.getElementById('ma-mercosul-section-maranho-specific-context');
  if (ma_mercosul_section_maranho_specific_context) {
    gsap.fromTo('#ma-mercosul-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_what_our_clients_say = document.getElementById('ma-mercosul-section-what-our-clients-say');
  if (ma_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#ma-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_frequently_asked_questions = document.getElementById('ma-mercosul-section-frequently-asked-questions');
  if (ma_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#ma-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_international_support = document.getElementById('ma-mercosul-section-international-support');
  if (ma_mercosul_section_international_support) {
    gsap.fromTo('#ma-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_list_our_credentials = document.getElementById('ma-mercosul-list-our-credentials');
  if (ma_mercosul_list_our_credentials) {
    gsap.from('#ma-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_list_related_services = document.getElementById('ma-mercosul-list-related-services');
  if (ma_mercosul_list_related_services) {
    gsap.from('#ma-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_youre_in_good_hands = document.getElementById('ma-mercosul-section-youre-in-good-hands');
  if (ma_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#ma-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_mercosul_section_21 = document.getElementById('ma-mercosul-section-21');
  if (ma_mercosul_section_21) {
    gsap.fromTo('#ma-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('ma-retiree-form-retire-in-brazil-with-retiree-residency');
  if (ma_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#ma-retiree-form-retire-in-brazil-with-retiree-residency input, #ma-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_list_quick_facts = document.getElementById('ma-retiree-list-quick-facts');
  if (ma_retiree_list_quick_facts) {
    gsap.from('#ma-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_list_common_challenges_applicants_face = document.getElementById('ma-retiree-list-common-challenges-applicants-face');
  if (ma_retiree_list_common_challenges_applicants_face) {
    gsap.from('#ma-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_list_how_we_solve_these_challenges = document.getElementById('ma-retiree-list-how-we-solve-these-challenges');
  if (ma_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#ma-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_residency_overview = document.getElementById('ma-retiree-section-residency-overview');
  if (ma_retiree_section_residency_overview) {
    gsap.fromTo('#ma-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_form_who_is_this_residency_for = document.getElementById('ma-retiree-form-who-is-this-residency-for');
  if (ma_retiree_form_who_is_this_residency_for) {
    gsap.from('#ma-retiree-form-who-is-this-residency-for input, #ma-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_list_required_documents = document.getElementById('ma-retiree-list-required-documents');
  if (ma_retiree_list_required_documents) {
    gsap.from('#ma-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_list_application_process = document.getElementById('ma-retiree-list-application-process');
  if (ma_retiree_list_application_process) {
    gsap.from('#ma-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_timelines_deadlines = document.getElementById('ma-retiree-section-timelines-deadlines');
  if (ma_retiree_section_timelines_deadlines) {
    gsap.fromTo('#ma-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_fees_costs = document.getElementById('ma-retiree-section-fees-costs');
  if (ma_retiree_section_fees_costs) {
    gsap.fromTo('#ma-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_list_risks_common_mistakes = document.getElementById('ma-retiree-list-risks-common-mistakes');
  if (ma_retiree_list_risks_common_mistakes) {
    gsap.from('#ma-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_diy_vs_professional_assistance = document.getElementById('ma-retiree-section-diy-vs-professional-assistance');
  if (ma_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_maranho_specific_context = document.getElementById('ma-retiree-section-maranho-specific-context');
  if (ma_retiree_section_maranho_specific_context) {
    gsap.fromTo('#ma-retiree-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_what_our_clients_say = document.getElementById('ma-retiree-section-what-our-clients-say');
  if (ma_retiree_section_what_our_clients_say) {
    gsap.fromTo('#ma-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_frequently_asked_questions = document.getElementById('ma-retiree-section-frequently-asked-questions');
  if (ma_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#ma-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_international_support = document.getElementById('ma-retiree-section-international-support');
  if (ma_retiree_section_international_support) {
    gsap.fromTo('#ma-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_list_our_credentials = document.getElementById('ma-retiree-list-our-credentials');
  if (ma_retiree_list_our_credentials) {
    gsap.from('#ma-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_list_related_services = document.getElementById('ma-retiree-list-related-services');
  if (ma_retiree_list_related_services) {
    gsap.from('#ma-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_youre_in_good_hands = document.getElementById('ma-retiree-section-youre-in-good-hands');
  if (ma_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#ma-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_retiree_section_21 = document.getElementById('ma-retiree-section-21');
  if (ma_retiree_section_21) {
    gsap.fromTo('#ma-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('ma-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (ma_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#ma-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #ma-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_list_quick_facts = document.getElementById('ma-volunteer-list-quick-facts');
  if (ma_volunteer_list_quick_facts) {
    gsap.from('#ma-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_list_common_challenges_applicants_face = document.getElementById('ma-volunteer-list-common-challenges-applicants-face');
  if (ma_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#ma-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_list_how_we_solve_these_challenges = document.getElementById('ma-volunteer-list-how-we-solve-these-challenges');
  if (ma_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#ma-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_residency_overview = document.getElementById('ma-volunteer-section-residency-overview');
  if (ma_volunteer_section_residency_overview) {
    gsap.fromTo('#ma-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_form_who_is_this_residency_for = document.getElementById('ma-volunteer-form-who-is-this-residency-for');
  if (ma_volunteer_form_who_is_this_residency_for) {
    gsap.from('#ma-volunteer-form-who-is-this-residency-for input, #ma-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_list_required_documents = document.getElementById('ma-volunteer-list-required-documents');
  if (ma_volunteer_list_required_documents) {
    gsap.from('#ma-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_list_application_process = document.getElementById('ma-volunteer-list-application-process');
  if (ma_volunteer_list_application_process) {
    gsap.from('#ma-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_timelines_deadlines = document.getElementById('ma-volunteer-section-timelines-deadlines');
  if (ma_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#ma-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_fees_costs = document.getElementById('ma-volunteer-section-fees-costs');
  if (ma_volunteer_section_fees_costs) {
    gsap.fromTo('#ma-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_list_risks_common_mistakes = document.getElementById('ma-volunteer-list-risks-common-mistakes');
  if (ma_volunteer_list_risks_common_mistakes) {
    gsap.from('#ma-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_diy_vs_professional_assistance = document.getElementById('ma-volunteer-section-diy-vs-professional-assistance');
  if (ma_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_maranho_specific_context = document.getElementById('ma-volunteer-section-maranho-specific-context');
  if (ma_volunteer_section_maranho_specific_context) {
    gsap.fromTo('#ma-volunteer-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_what_our_clients_say = document.getElementById('ma-volunteer-section-what-our-clients-say');
  if (ma_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#ma-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_frequently_asked_questions = document.getElementById('ma-volunteer-section-frequently-asked-questions');
  if (ma_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#ma-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_international_support = document.getElementById('ma-volunteer-section-international-support');
  if (ma_volunteer_section_international_support) {
    gsap.fromTo('#ma-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_list_our_credentials = document.getElementById('ma-volunteer-list-our-credentials');
  if (ma_volunteer_list_our_credentials) {
    gsap.from('#ma-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_list_related_services = document.getElementById('ma-volunteer-list-related-services');
  if (ma_volunteer_list_related_services) {
    gsap.from('#ma-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_youre_in_good_hands = document.getElementById('ma-volunteer-section-youre-in-good-hands');
  if (ma_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#ma-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_volunteer_section_21 = document.getElementById('ma-volunteer-section-21');
  if (ma_volunteer_section_21) {
    gsap.fromTo('#ma-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('ma-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (ma_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#ma-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #ma-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_list_quick_facts = document.getElementById('ma-skilledworker-list-quick-facts');
  if (ma_skilledworker_list_quick_facts) {
    gsap.from('#ma-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_list_common_challenges_applicants_face = document.getElementById('ma-skilledworker-list-common-challenges-applicants-face');
  if (ma_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#ma-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_list_how_we_solve_these_challenges = document.getElementById('ma-skilledworker-list-how-we-solve-these-challenges');
  if (ma_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#ma-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_residency_overview = document.getElementById('ma-skilledworker-section-residency-overview');
  if (ma_skilledworker_section_residency_overview) {
    gsap.fromTo('#ma-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_form_who_is_this_residency_for = document.getElementById('ma-skilledworker-form-who-is-this-residency-for');
  if (ma_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#ma-skilledworker-form-who-is-this-residency-for input, #ma-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_list_required_documents = document.getElementById('ma-skilledworker-list-required-documents');
  if (ma_skilledworker_list_required_documents) {
    gsap.from('#ma-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_list_application_process = document.getElementById('ma-skilledworker-list-application-process');
  if (ma_skilledworker_list_application_process) {
    gsap.from('#ma-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_timelines_deadlines = document.getElementById('ma-skilledworker-section-timelines-deadlines');
  if (ma_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#ma-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_fees_costs = document.getElementById('ma-skilledworker-section-fees-costs');
  if (ma_skilledworker_section_fees_costs) {
    gsap.fromTo('#ma-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_list_risks_common_mistakes = document.getElementById('ma-skilledworker-list-risks-common-mistakes');
  if (ma_skilledworker_list_risks_common_mistakes) {
    gsap.from('#ma-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_diy_vs_professional_assistance = document.getElementById('ma-skilledworker-section-diy-vs-professional-assistance');
  if (ma_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_maranho_specific_context = document.getElementById('ma-skilledworker-section-maranho-specific-context');
  if (ma_skilledworker_section_maranho_specific_context) {
    gsap.fromTo('#ma-skilledworker-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_what_our_clients_say = document.getElementById('ma-skilledworker-section-what-our-clients-say');
  if (ma_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#ma-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_frequently_asked_questions = document.getElementById('ma-skilledworker-section-frequently-asked-questions');
  if (ma_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#ma-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_international_support = document.getElementById('ma-skilledworker-section-international-support');
  if (ma_skilledworker_section_international_support) {
    gsap.fromTo('#ma-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_list_our_credentials = document.getElementById('ma-skilledworker-list-our-credentials');
  if (ma_skilledworker_list_our_credentials) {
    gsap.from('#ma-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_list_related_services = document.getElementById('ma-skilledworker-list-related-services');
  if (ma_skilledworker_list_related_services) {
    gsap.from('#ma-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_youre_in_good_hands = document.getElementById('ma-skilledworker-section-youre-in-good-hands');
  if (ma_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#ma-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_skilledworker_section_21 = document.getElementById('ma-skilledworker-section-21');
  if (ma_skilledworker_section_21) {
    gsap.fromTo('#ma-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('ma-religious-form-religious-residency-in-brazil-for-missions');
  if (ma_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#ma-religious-form-religious-residency-in-brazil-for-missions input, #ma-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_list_quick_facts = document.getElementById('ma-religious-list-quick-facts');
  if (ma_religious_list_quick_facts) {
    gsap.from('#ma-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_list_common_challenges_applicants_face = document.getElementById('ma-religious-list-common-challenges-applicants-face');
  if (ma_religious_list_common_challenges_applicants_face) {
    gsap.from('#ma-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_list_how_we_solve_these_challenges = document.getElementById('ma-religious-list-how-we-solve-these-challenges');
  if (ma_religious_list_how_we_solve_these_challenges) {
    gsap.from('#ma-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_residency_overview = document.getElementById('ma-religious-section-residency-overview');
  if (ma_religious_section_residency_overview) {
    gsap.fromTo('#ma-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_form_who_is_this_residency_for = document.getElementById('ma-religious-form-who-is-this-residency-for');
  if (ma_religious_form_who_is_this_residency_for) {
    gsap.from('#ma-religious-form-who-is-this-residency-for input, #ma-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_list_required_documents = document.getElementById('ma-religious-list-required-documents');
  if (ma_religious_list_required_documents) {
    gsap.from('#ma-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_list_application_process = document.getElementById('ma-religious-list-application-process');
  if (ma_religious_list_application_process) {
    gsap.from('#ma-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_timelines_deadlines = document.getElementById('ma-religious-section-timelines-deadlines');
  if (ma_religious_section_timelines_deadlines) {
    gsap.fromTo('#ma-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_fees_costs = document.getElementById('ma-religious-section-fees-costs');
  if (ma_religious_section_fees_costs) {
    gsap.fromTo('#ma-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_list_risks_common_mistakes = document.getElementById('ma-religious-list-risks-common-mistakes');
  if (ma_religious_list_risks_common_mistakes) {
    gsap.from('#ma-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_diy_vs_professional_assistance = document.getElementById('ma-religious-section-diy-vs-professional-assistance');
  if (ma_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_maranho_specific_context = document.getElementById('ma-religious-section-maranho-specific-context');
  if (ma_religious_section_maranho_specific_context) {
    gsap.fromTo('#ma-religious-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_what_our_clients_say = document.getElementById('ma-religious-section-what-our-clients-say');
  if (ma_religious_section_what_our_clients_say) {
    gsap.fromTo('#ma-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_frequently_asked_questions = document.getElementById('ma-religious-section-frequently-asked-questions');
  if (ma_religious_section_frequently_asked_questions) {
    gsap.fromTo('#ma-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_international_support = document.getElementById('ma-religious-section-international-support');
  if (ma_religious_section_international_support) {
    gsap.fromTo('#ma-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_list_our_credentials = document.getElementById('ma-religious-list-our-credentials');
  if (ma_religious_list_our_credentials) {
    gsap.from('#ma-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_list_related_services = document.getElementById('ma-religious-list-related-services');
  if (ma_religious_list_related_services) {
    gsap.from('#ma-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_youre_in_good_hands = document.getElementById('ma-religious-section-youre-in-good-hands');
  if (ma_religious_section_youre_in_good_hands) {
    gsap.fromTo('#ma-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_religious_section_21 = document.getElementById('ma-religious-section-21');
  if (ma_religious_section_21) {
    gsap.fromTo('#ma-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('ma-investor-form-gain-residency-in-brazil-through-investment');
  if (ma_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#ma-investor-form-gain-residency-in-brazil-through-investment input, #ma-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_list_quick_facts = document.getElementById('ma-investor-list-quick-facts');
  if (ma_investor_list_quick_facts) {
    gsap.from('#ma-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_list_common_challenges_applicants_face = document.getElementById('ma-investor-list-common-challenges-applicants-face');
  if (ma_investor_list_common_challenges_applicants_face) {
    gsap.from('#ma-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_list_how_we_solve_these_challenges = document.getElementById('ma-investor-list-how-we-solve-these-challenges');
  if (ma_investor_list_how_we_solve_these_challenges) {
    gsap.from('#ma-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_residency_overview = document.getElementById('ma-investor-section-residency-overview');
  if (ma_investor_section_residency_overview) {
    gsap.fromTo('#ma-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_form_who_is_this_residency_for = document.getElementById('ma-investor-form-who-is-this-residency-for');
  if (ma_investor_form_who_is_this_residency_for) {
    gsap.from('#ma-investor-form-who-is-this-residency-for input, #ma-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_list_required_documents = document.getElementById('ma-investor-list-required-documents');
  if (ma_investor_list_required_documents) {
    gsap.from('#ma-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_list_application_process = document.getElementById('ma-investor-list-application-process');
  if (ma_investor_list_application_process) {
    gsap.from('#ma-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_timelines_deadlines = document.getElementById('ma-investor-section-timelines-deadlines');
  if (ma_investor_section_timelines_deadlines) {
    gsap.fromTo('#ma-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_fees_costs = document.getElementById('ma-investor-section-fees-costs');
  if (ma_investor_section_fees_costs) {
    gsap.fromTo('#ma-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_list_risks_common_mistakes = document.getElementById('ma-investor-list-risks-common-mistakes');
  if (ma_investor_list_risks_common_mistakes) {
    gsap.from('#ma-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_diy_vs_professional_assistance = document.getElementById('ma-investor-section-diy-vs-professional-assistance');
  if (ma_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_maranho_specific_context = document.getElementById('ma-investor-section-maranho-specific-context');
  if (ma_investor_section_maranho_specific_context) {
    gsap.fromTo('#ma-investor-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_what_our_clients_say = document.getElementById('ma-investor-section-what-our-clients-say');
  if (ma_investor_section_what_our_clients_say) {
    gsap.fromTo('#ma-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_frequently_asked_questions = document.getElementById('ma-investor-section-frequently-asked-questions');
  if (ma_investor_section_frequently_asked_questions) {
    gsap.fromTo('#ma-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_international_support = document.getElementById('ma-investor-section-international-support');
  if (ma_investor_section_international_support) {
    gsap.fromTo('#ma-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_list_our_credentials = document.getElementById('ma-investor-list-our-credentials');
  if (ma_investor_list_our_credentials) {
    gsap.from('#ma-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_list_related_services = document.getElementById('ma-investor-list-related-services');
  if (ma_investor_list_related_services) {
    gsap.from('#ma-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_youre_in_good_hands = document.getElementById('ma-investor-section-youre-in-good-hands');
  if (ma_investor_section_youre_in_good_hands) {
    gsap.fromTo('#ma-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_investor_section_21 = document.getElementById('ma-investor-section-21');
  if (ma_investor_section_21) {
    gsap.fromTo('#ma-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('ma-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (ma_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#ma-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #ma-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_list_quick_facts = document.getElementById('ma-healthtreatment-list-quick-facts');
  if (ma_healthtreatment_list_quick_facts) {
    gsap.from('#ma-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_list_common_challenges_applicants_face = document.getElementById('ma-healthtreatment-list-common-challenges-applicants-face');
  if (ma_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#ma-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('ma-healthtreatment-list-how-we-solve-these-challenges');
  if (ma_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#ma-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_residency_overview = document.getElementById('ma-healthtreatment-section-residency-overview');
  if (ma_healthtreatment_section_residency_overview) {
    gsap.fromTo('#ma-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_form_who_is_this_residency_for = document.getElementById('ma-healthtreatment-form-who-is-this-residency-for');
  if (ma_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#ma-healthtreatment-form-who-is-this-residency-for input, #ma-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_list_required_documents = document.getElementById('ma-healthtreatment-list-required-documents');
  if (ma_healthtreatment_list_required_documents) {
    gsap.from('#ma-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_list_application_process = document.getElementById('ma-healthtreatment-list-application-process');
  if (ma_healthtreatment_list_application_process) {
    gsap.from('#ma-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_timelines_deadlines = document.getElementById('ma-healthtreatment-section-timelines-deadlines');
  if (ma_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#ma-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_fees_costs = document.getElementById('ma-healthtreatment-section-fees-costs');
  if (ma_healthtreatment_section_fees_costs) {
    gsap.fromTo('#ma-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_list_risks_common_mistakes = document.getElementById('ma-healthtreatment-list-risks-common-mistakes');
  if (ma_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#ma-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('ma-healthtreatment-section-diy-vs-professional-assistance');
  if (ma_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_maranho_specific_context = document.getElementById('ma-healthtreatment-section-maranho-specific-context');
  if (ma_healthtreatment_section_maranho_specific_context) {
    gsap.fromTo('#ma-healthtreatment-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_what_our_clients_say = document.getElementById('ma-healthtreatment-section-what-our-clients-say');
  if (ma_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#ma-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_frequently_asked_questions = document.getElementById('ma-healthtreatment-section-frequently-asked-questions');
  if (ma_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#ma-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_international_support = document.getElementById('ma-healthtreatment-section-international-support');
  if (ma_healthtreatment_section_international_support) {
    gsap.fromTo('#ma-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_list_our_credentials = document.getElementById('ma-healthtreatment-list-our-credentials');
  if (ma_healthtreatment_list_our_credentials) {
    gsap.from('#ma-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_list_related_services = document.getElementById('ma-healthtreatment-list-related-services');
  if (ma_healthtreatment_list_related_services) {
    gsap.from('#ma-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_youre_in_good_hands = document.getElementById('ma-healthtreatment-section-youre-in-good-hands');
  if (ma_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#ma-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_healthtreatment_section_21 = document.getElementById('ma-healthtreatment-section-21');
  if (ma_healthtreatment_section_21) {
    gsap.fromTo('#ma-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('ma-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (ma_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#ma-cplp-form-residency-for-cplp-citizens-in-brazil input, #ma-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_list_quick_facts = document.getElementById('ma-cplp-list-quick-facts');
  if (ma_cplp_list_quick_facts) {
    gsap.from('#ma-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_list_common_challenges_applicants_face = document.getElementById('ma-cplp-list-common-challenges-applicants-face');
  if (ma_cplp_list_common_challenges_applicants_face) {
    gsap.from('#ma-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_list_how_we_solve_these_challenges = document.getElementById('ma-cplp-list-how-we-solve-these-challenges');
  if (ma_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#ma-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_residency_overview = document.getElementById('ma-cplp-section-residency-overview');
  if (ma_cplp_section_residency_overview) {
    gsap.fromTo('#ma-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_form_who_is_this_residency_for = document.getElementById('ma-cplp-form-who-is-this-residency-for');
  if (ma_cplp_form_who_is_this_residency_for) {
    gsap.from('#ma-cplp-form-who-is-this-residency-for input, #ma-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_list_required_documents = document.getElementById('ma-cplp-list-required-documents');
  if (ma_cplp_list_required_documents) {
    gsap.from('#ma-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_list_application_process = document.getElementById('ma-cplp-list-application-process');
  if (ma_cplp_list_application_process) {
    gsap.from('#ma-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_timelines_deadlines = document.getElementById('ma-cplp-section-timelines-deadlines');
  if (ma_cplp_section_timelines_deadlines) {
    gsap.fromTo('#ma-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_fees_costs = document.getElementById('ma-cplp-section-fees-costs');
  if (ma_cplp_section_fees_costs) {
    gsap.fromTo('#ma-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_list_risks_common_mistakes = document.getElementById('ma-cplp-list-risks-common-mistakes');
  if (ma_cplp_list_risks_common_mistakes) {
    gsap.from('#ma-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_diy_vs_professional_assistance = document.getElementById('ma-cplp-section-diy-vs-professional-assistance');
  if (ma_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_maranho_specific_context = document.getElementById('ma-cplp-section-maranho-specific-context');
  if (ma_cplp_section_maranho_specific_context) {
    gsap.fromTo('#ma-cplp-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_what_our_clients_say = document.getElementById('ma-cplp-section-what-our-clients-say');
  if (ma_cplp_section_what_our_clients_say) {
    gsap.fromTo('#ma-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_frequently_asked_questions = document.getElementById('ma-cplp-section-frequently-asked-questions');
  if (ma_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#ma-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_international_support = document.getElementById('ma-cplp-section-international-support');
  if (ma_cplp_section_international_support) {
    gsap.fromTo('#ma-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_list_our_credentials = document.getElementById('ma-cplp-list-our-credentials');
  if (ma_cplp_list_our_credentials) {
    gsap.from('#ma-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_list_related_services = document.getElementById('ma-cplp-list-related-services');
  if (ma_cplp_list_related_services) {
    gsap.from('#ma-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_youre_in_good_hands = document.getElementById('ma-cplp-section-youre-in-good-hands');
  if (ma_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#ma-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_cplp_section_21 = document.getElementById('ma-cplp-section-21');
  if (ma_cplp_section_21) {
    gsap.fromTo('#ma-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('ma-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (ma_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#ma-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #ma-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_list_quick_facts = document.getElementById('ma-youthexchange-list-quick-facts');
  if (ma_youthexchange_list_quick_facts) {
    gsap.from('#ma-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_list_common_challenges_applicants_face = document.getElementById('ma-youthexchange-list-common-challenges-applicants-face');
  if (ma_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#ma-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_list_how_we_solve_these_challenges = document.getElementById('ma-youthexchange-list-how-we-solve-these-challenges');
  if (ma_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ma-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_residency_overview = document.getElementById('ma-youthexchange-section-residency-overview');
  if (ma_youthexchange_section_residency_overview) {
    gsap.fromTo('#ma-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_form_who_is_this_residency_for = document.getElementById('ma-youthexchange-form-who-is-this-residency-for');
  if (ma_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#ma-youthexchange-form-who-is-this-residency-for input, #ma-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_list_required_documents = document.getElementById('ma-youthexchange-list-required-documents');
  if (ma_youthexchange_list_required_documents) {
    gsap.from('#ma-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_list_application_process = document.getElementById('ma-youthexchange-list-application-process');
  if (ma_youthexchange_list_application_process) {
    gsap.from('#ma-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_timelines_deadlines = document.getElementById('ma-youthexchange-section-timelines-deadlines');
  if (ma_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#ma-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_fees_costs = document.getElementById('ma-youthexchange-section-fees-costs');
  if (ma_youthexchange_section_fees_costs) {
    gsap.fromTo('#ma-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_list_risks_common_mistakes = document.getElementById('ma-youthexchange-list-risks-common-mistakes');
  if (ma_youthexchange_list_risks_common_mistakes) {
    gsap.from('#ma-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_diy_vs_professional_assistance = document.getElementById('ma-youthexchange-section-diy-vs-professional-assistance');
  if (ma_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_maranho_specific_context = document.getElementById('ma-youthexchange-section-maranho-specific-context');
  if (ma_youthexchange_section_maranho_specific_context) {
    gsap.fromTo('#ma-youthexchange-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_what_our_clients_say = document.getElementById('ma-youthexchange-section-what-our-clients-say');
  if (ma_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#ma-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_frequently_asked_questions = document.getElementById('ma-youthexchange-section-frequently-asked-questions');
  if (ma_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ma-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_international_support = document.getElementById('ma-youthexchange-section-international-support');
  if (ma_youthexchange_section_international_support) {
    gsap.fromTo('#ma-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_list_our_credentials = document.getElementById('ma-youthexchange-list-our-credentials');
  if (ma_youthexchange_list_our_credentials) {
    gsap.from('#ma-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_list_related_services = document.getElementById('ma-youthexchange-list-related-services');
  if (ma_youthexchange_list_related_services) {
    gsap.from('#ma-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_youre_in_good_hands = document.getElementById('ma-youthexchange-section-youre-in-good-hands');
  if (ma_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ma-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_youthexchange_section_21 = document.getElementById('ma-youthexchange-section-21');
  if (ma_youthexchange_section_21) {
    gsap.fromTo('#ma-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('ma-work-form-work-and-reside-in-brazil-with-work-residency');
  if (ma_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#ma-work-form-work-and-reside-in-brazil-with-work-residency input, #ma-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_list_quick_facts = document.getElementById('ma-work-list-quick-facts');
  if (ma_work_list_quick_facts) {
    gsap.from('#ma-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_list_common_challenges_applicants_face = document.getElementById('ma-work-list-common-challenges-applicants-face');
  if (ma_work_list_common_challenges_applicants_face) {
    gsap.from('#ma-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_list_how_we_solve_these_challenges = document.getElementById('ma-work-list-how-we-solve-these-challenges');
  if (ma_work_list_how_we_solve_these_challenges) {
    gsap.from('#ma-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_residency_overview = document.getElementById('ma-work-section-residency-overview');
  if (ma_work_section_residency_overview) {
    gsap.fromTo('#ma-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_form_who_is_this_residency_for = document.getElementById('ma-work-form-who-is-this-residency-for');
  if (ma_work_form_who_is_this_residency_for) {
    gsap.from('#ma-work-form-who-is-this-residency-for input, #ma-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_list_required_documents = document.getElementById('ma-work-list-required-documents');
  if (ma_work_list_required_documents) {
    gsap.from('#ma-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_list_application_process = document.getElementById('ma-work-list-application-process');
  if (ma_work_list_application_process) {
    gsap.from('#ma-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_timelines_deadlines = document.getElementById('ma-work-section-timelines-deadlines');
  if (ma_work_section_timelines_deadlines) {
    gsap.fromTo('#ma-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_fees_costs = document.getElementById('ma-work-section-fees-costs');
  if (ma_work_section_fees_costs) {
    gsap.fromTo('#ma-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_list_risks_common_mistakes = document.getElementById('ma-work-list-risks-common-mistakes');
  if (ma_work_list_risks_common_mistakes) {
    gsap.from('#ma-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_diy_vs_professional_assistance = document.getElementById('ma-work-section-diy-vs-professional-assistance');
  if (ma_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_maranho_specific_context = document.getElementById('ma-work-section-maranho-specific-context');
  if (ma_work_section_maranho_specific_context) {
    gsap.fromTo('#ma-work-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_what_our_clients_say = document.getElementById('ma-work-section-what-our-clients-say');
  if (ma_work_section_what_our_clients_say) {
    gsap.fromTo('#ma-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_frequently_asked_questions = document.getElementById('ma-work-section-frequently-asked-questions');
  if (ma_work_section_frequently_asked_questions) {
    gsap.fromTo('#ma-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_international_support = document.getElementById('ma-work-section-international-support');
  if (ma_work_section_international_support) {
    gsap.fromTo('#ma-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_list_our_credentials = document.getElementById('ma-work-list-our-credentials');
  if (ma_work_list_our_credentials) {
    gsap.from('#ma-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_list_related_services = document.getElementById('ma-work-list-related-services');
  if (ma_work_list_related_services) {
    gsap.from('#ma-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_youre_in_good_hands = document.getElementById('ma-work-section-youre-in-good-hands');
  if (ma_work_section_youre_in_good_hands) {
    gsap.fromTo('#ma-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_work_section_21 = document.getElementById('ma-work-section-21');
  if (ma_work_section_21) {
    gsap.fromTo('#ma-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('ma-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (ma_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#ma-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #ma-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_list_quick_facts = document.getElementById('ma-startup-list-quick-facts');
  if (ma_startup_list_quick_facts) {
    gsap.from('#ma-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_list_common_challenges_applicants_face = document.getElementById('ma-startup-list-common-challenges-applicants-face');
  if (ma_startup_list_common_challenges_applicants_face) {
    gsap.from('#ma-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_list_how_we_solve_these_challenges = document.getElementById('ma-startup-list-how-we-solve-these-challenges');
  if (ma_startup_list_how_we_solve_these_challenges) {
    gsap.from('#ma-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_visa_overview = document.getElementById('ma-startup-section-visa-overview');
  if (ma_startup_section_visa_overview) {
    gsap.fromTo('#ma-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_form_who_is_this_visa_for = document.getElementById('ma-startup-form-who-is-this-visa-for');
  if (ma_startup_form_who_is_this_visa_for) {
    gsap.from('#ma-startup-form-who-is-this-visa-for input, #ma-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_list_required_documents = document.getElementById('ma-startup-list-required-documents');
  if (ma_startup_list_required_documents) {
    gsap.from('#ma-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_list_application_process = document.getElementById('ma-startup-list-application-process');
  if (ma_startup_list_application_process) {
    gsap.from('#ma-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_timelines_deadlines = document.getElementById('ma-startup-section-timelines-deadlines');
  if (ma_startup_section_timelines_deadlines) {
    gsap.fromTo('#ma-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_fees_costs = document.getElementById('ma-startup-section-fees-costs');
  if (ma_startup_section_fees_costs) {
    gsap.fromTo('#ma-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_list_risks_common_mistakes = document.getElementById('ma-startup-list-risks-common-mistakes');
  if (ma_startup_list_risks_common_mistakes) {
    gsap.from('#ma-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_diy_vs_professional_assistance = document.getElementById('ma-startup-section-diy-vs-professional-assistance');
  if (ma_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_maranho_specific_context = document.getElementById('ma-startup-section-maranho-specific-context');
  if (ma_startup_section_maranho_specific_context) {
    gsap.fromTo('#ma-startup-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_what_our_clients_say = document.getElementById('ma-startup-section-what-our-clients-say');
  if (ma_startup_section_what_our_clients_say) {
    gsap.fromTo('#ma-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_frequently_asked_questions = document.getElementById('ma-startup-section-frequently-asked-questions');
  if (ma_startup_section_frequently_asked_questions) {
    gsap.fromTo('#ma-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_international_support = document.getElementById('ma-startup-section-international-support');
  if (ma_startup_section_international_support) {
    gsap.fromTo('#ma-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_list_our_credentials = document.getElementById('ma-startup-list-our-credentials');
  if (ma_startup_list_our_credentials) {
    gsap.from('#ma-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_list_related_services = document.getElementById('ma-startup-list-related-services');
  if (ma_startup_list_related_services) {
    gsap.from('#ma-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_youre_in_good_hands = document.getElementById('ma-startup-section-youre-in-good-hands');
  if (ma_startup_section_youre_in_good_hands) {
    gsap.fromTo('#ma-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_startup_section_21 = document.getElementById('ma-startup-section-21');
  if (ma_startup_section_21) {
    gsap.fromTo('#ma-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('ma-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (ma_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#ma-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #ma-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_list_quick_facts = document.getElementById('ma-family-list-quick-facts');
  if (ma_family_list_quick_facts) {
    gsap.from('#ma-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_list_common_challenges_applicants_face = document.getElementById('ma-family-list-common-challenges-applicants-face');
  if (ma_family_list_common_challenges_applicants_face) {
    gsap.from('#ma-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_list_how_we_solve_these_challenges = document.getElementById('ma-family-list-how-we-solve-these-challenges');
  if (ma_family_list_how_we_solve_these_challenges) {
    gsap.from('#ma-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_visa_overview = document.getElementById('ma-family-section-visa-overview');
  if (ma_family_section_visa_overview) {
    gsap.fromTo('#ma-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_form_who_is_this_visa_for = document.getElementById('ma-family-form-who-is-this-visa-for');
  if (ma_family_form_who_is_this_visa_for) {
    gsap.from('#ma-family-form-who-is-this-visa-for input, #ma-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_list_required_documents = document.getElementById('ma-family-list-required-documents');
  if (ma_family_list_required_documents) {
    gsap.from('#ma-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_list_application_process = document.getElementById('ma-family-list-application-process');
  if (ma_family_list_application_process) {
    gsap.from('#ma-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_timelines_deadlines = document.getElementById('ma-family-section-timelines-deadlines');
  if (ma_family_section_timelines_deadlines) {
    gsap.fromTo('#ma-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_fees_costs = document.getElementById('ma-family-section-fees-costs');
  if (ma_family_section_fees_costs) {
    gsap.fromTo('#ma-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_list_risks_common_mistakes = document.getElementById('ma-family-list-risks-common-mistakes');
  if (ma_family_list_risks_common_mistakes) {
    gsap.from('#ma-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_diy_vs_professional_assistance = document.getElementById('ma-family-section-diy-vs-professional-assistance');
  if (ma_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_maranho_specific_context = document.getElementById('ma-family-section-maranho-specific-context');
  if (ma_family_section_maranho_specific_context) {
    gsap.fromTo('#ma-family-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_what_our_clients_say = document.getElementById('ma-family-section-what-our-clients-say');
  if (ma_family_section_what_our_clients_say) {
    gsap.fromTo('#ma-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_frequently_asked_questions = document.getElementById('ma-family-section-frequently-asked-questions');
  if (ma_family_section_frequently_asked_questions) {
    gsap.fromTo('#ma-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_international_support = document.getElementById('ma-family-section-international-support');
  if (ma_family_section_international_support) {
    gsap.fromTo('#ma-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_list_our_credentials = document.getElementById('ma-family-list-our-credentials');
  if (ma_family_list_our_credentials) {
    gsap.from('#ma-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_list_related_services = document.getElementById('ma-family-list-related-services');
  if (ma_family_list_related_services) {
    gsap.from('#ma-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_youre_in_good_hands = document.getElementById('ma-family-section-youre-in-good-hands');
  if (ma_family_section_youre_in_good_hands) {
    gsap.fromTo('#ma-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_family_section_21 = document.getElementById('ma-family-section-21');
  if (ma_family_section_21) {
    gsap.fromTo('#ma-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('ma-sports-form-compete-in-brazil-with-the-sports-visa');
  if (ma_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#ma-sports-form-compete-in-brazil-with-the-sports-visa input, #ma-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_list_quick_facts = document.getElementById('ma-sports-list-quick-facts');
  if (ma_sports_list_quick_facts) {
    gsap.from('#ma-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_list_common_challenges_applicants_face = document.getElementById('ma-sports-list-common-challenges-applicants-face');
  if (ma_sports_list_common_challenges_applicants_face) {
    gsap.from('#ma-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_list_how_we_solve_these_challenges = document.getElementById('ma-sports-list-how-we-solve-these-challenges');
  if (ma_sports_list_how_we_solve_these_challenges) {
    gsap.from('#ma-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_visa_overview = document.getElementById('ma-sports-section-visa-overview');
  if (ma_sports_section_visa_overview) {
    gsap.fromTo('#ma-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_form_who_is_this_visa_for = document.getElementById('ma-sports-form-who-is-this-visa-for');
  if (ma_sports_form_who_is_this_visa_for) {
    gsap.from('#ma-sports-form-who-is-this-visa-for input, #ma-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_list_required_documents = document.getElementById('ma-sports-list-required-documents');
  if (ma_sports_list_required_documents) {
    gsap.from('#ma-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_list_application_process = document.getElementById('ma-sports-list-application-process');
  if (ma_sports_list_application_process) {
    gsap.from('#ma-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_timelines_deadlines = document.getElementById('ma-sports-section-timelines-deadlines');
  if (ma_sports_section_timelines_deadlines) {
    gsap.fromTo('#ma-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_fees_costs = document.getElementById('ma-sports-section-fees-costs');
  if (ma_sports_section_fees_costs) {
    gsap.fromTo('#ma-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_list_risks_common_mistakes = document.getElementById('ma-sports-list-risks-common-mistakes');
  if (ma_sports_list_risks_common_mistakes) {
    gsap.from('#ma-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_diy_vs_professional_assistance = document.getElementById('ma-sports-section-diy-vs-professional-assistance');
  if (ma_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_maranho_specific_context = document.getElementById('ma-sports-section-maranho-specific-context');
  if (ma_sports_section_maranho_specific_context) {
    gsap.fromTo('#ma-sports-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_what_our_clients_say = document.getElementById('ma-sports-section-what-our-clients-say');
  if (ma_sports_section_what_our_clients_say) {
    gsap.fromTo('#ma-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_frequently_asked_questions = document.getElementById('ma-sports-section-frequently-asked-questions');
  if (ma_sports_section_frequently_asked_questions) {
    gsap.fromTo('#ma-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_international_support = document.getElementById('ma-sports-section-international-support');
  if (ma_sports_section_international_support) {
    gsap.fromTo('#ma-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_list_our_credentials = document.getElementById('ma-sports-list-our-credentials');
  if (ma_sports_list_our_credentials) {
    gsap.from('#ma-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_list_related_services = document.getElementById('ma-sports-list-related-services');
  if (ma_sports_list_related_services) {
    gsap.from('#ma-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_youre_in_good_hands = document.getElementById('ma-sports-section-youre-in-good-hands');
  if (ma_sports_section_youre_in_good_hands) {
    gsap.fromTo('#ma-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_sports_section_21 = document.getElementById('ma-sports-section-21');
  if (ma_sports_section_21) {
    gsap.fromTo('#ma-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('ma-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (ma_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#ma-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #ma-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_list_quick_facts = document.getElementById('ma-medical-list-quick-facts');
  if (ma_medical_list_quick_facts) {
    gsap.from('#ma-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_list_common_challenges_applicants_face = document.getElementById('ma-medical-list-common-challenges-applicants-face');
  if (ma_medical_list_common_challenges_applicants_face) {
    gsap.from('#ma-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_list_how_we_solve_these_challenges = document.getElementById('ma-medical-list-how-we-solve-these-challenges');
  if (ma_medical_list_how_we_solve_these_challenges) {
    gsap.from('#ma-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_visa_overview = document.getElementById('ma-medical-section-visa-overview');
  if (ma_medical_section_visa_overview) {
    gsap.fromTo('#ma-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_form_who_is_this_visa_for = document.getElementById('ma-medical-form-who-is-this-visa-for');
  if (ma_medical_form_who_is_this_visa_for) {
    gsap.from('#ma-medical-form-who-is-this-visa-for input, #ma-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_list_required_documents = document.getElementById('ma-medical-list-required-documents');
  if (ma_medical_list_required_documents) {
    gsap.from('#ma-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_list_application_process = document.getElementById('ma-medical-list-application-process');
  if (ma_medical_list_application_process) {
    gsap.from('#ma-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_timelines_deadlines = document.getElementById('ma-medical-section-timelines-deadlines');
  if (ma_medical_section_timelines_deadlines) {
    gsap.fromTo('#ma-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_fees_costs = document.getElementById('ma-medical-section-fees-costs');
  if (ma_medical_section_fees_costs) {
    gsap.fromTo('#ma-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_list_risks_common_mistakes = document.getElementById('ma-medical-list-risks-common-mistakes');
  if (ma_medical_list_risks_common_mistakes) {
    gsap.from('#ma-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_diy_vs_professional_assistance = document.getElementById('ma-medical-section-diy-vs-professional-assistance');
  if (ma_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_maranho_specific_context = document.getElementById('ma-medical-section-maranho-specific-context');
  if (ma_medical_section_maranho_specific_context) {
    gsap.fromTo('#ma-medical-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_what_our_clients_say = document.getElementById('ma-medical-section-what-our-clients-say');
  if (ma_medical_section_what_our_clients_say) {
    gsap.fromTo('#ma-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_frequently_asked_questions = document.getElementById('ma-medical-section-frequently-asked-questions');
  if (ma_medical_section_frequently_asked_questions) {
    gsap.fromTo('#ma-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_international_support = document.getElementById('ma-medical-section-international-support');
  if (ma_medical_section_international_support) {
    gsap.fromTo('#ma-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_list_our_credentials = document.getElementById('ma-medical-list-our-credentials');
  if (ma_medical_list_our_credentials) {
    gsap.from('#ma-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_list_related_services = document.getElementById('ma-medical-list-related-services');
  if (ma_medical_list_related_services) {
    gsap.from('#ma-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_youre_in_good_hands = document.getElementById('ma-medical-section-youre-in-good-hands');
  if (ma_medical_section_youre_in_good_hands) {
    gsap.fromTo('#ma-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_medical_section_21 = document.getElementById('ma-medical-section-21');
  if (ma_medical_section_21) {
    gsap.fromTo('#ma-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('ma-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (ma_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#ma-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #ma-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_list_quick_facts = document.getElementById('ma-tourist-list-quick-facts');
  if (ma_tourist_list_quick_facts) {
    gsap.from('#ma-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_list_common_challenges_applicants_face = document.getElementById('ma-tourist-list-common-challenges-applicants-face');
  if (ma_tourist_list_common_challenges_applicants_face) {
    gsap.from('#ma-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_list_how_we_solve_these_challenges = document.getElementById('ma-tourist-list-how-we-solve-these-challenges');
  if (ma_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#ma-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_visa_overview = document.getElementById('ma-tourist-section-visa-overview');
  if (ma_tourist_section_visa_overview) {
    gsap.fromTo('#ma-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_form_who_is_this_visa_for = document.getElementById('ma-tourist-form-who-is-this-visa-for');
  if (ma_tourist_form_who_is_this_visa_for) {
    gsap.from('#ma-tourist-form-who-is-this-visa-for input, #ma-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_list_required_documents = document.getElementById('ma-tourist-list-required-documents');
  if (ma_tourist_list_required_documents) {
    gsap.from('#ma-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_list_application_process = document.getElementById('ma-tourist-list-application-process');
  if (ma_tourist_list_application_process) {
    gsap.from('#ma-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_timelines_deadlines = document.getElementById('ma-tourist-section-timelines-deadlines');
  if (ma_tourist_section_timelines_deadlines) {
    gsap.fromTo('#ma-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_fees_costs = document.getElementById('ma-tourist-section-fees-costs');
  if (ma_tourist_section_fees_costs) {
    gsap.fromTo('#ma-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_list_risks_common_mistakes = document.getElementById('ma-tourist-list-risks-common-mistakes');
  if (ma_tourist_list_risks_common_mistakes) {
    gsap.from('#ma-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_diy_vs_professional_assistance = document.getElementById('ma-tourist-section-diy-vs-professional-assistance');
  if (ma_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_maranho_specific_context = document.getElementById('ma-tourist-section-maranho-specific-context');
  if (ma_tourist_section_maranho_specific_context) {
    gsap.fromTo('#ma-tourist-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_what_our_clients_say = document.getElementById('ma-tourist-section-what-our-clients-say');
  if (ma_tourist_section_what_our_clients_say) {
    gsap.fromTo('#ma-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_frequently_asked_questions = document.getElementById('ma-tourist-section-frequently-asked-questions');
  if (ma_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#ma-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_international_support = document.getElementById('ma-tourist-section-international-support');
  if (ma_tourist_section_international_support) {
    gsap.fromTo('#ma-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_list_our_credentials = document.getElementById('ma-tourist-list-our-credentials');
  if (ma_tourist_list_our_credentials) {
    gsap.from('#ma-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_list_related_services = document.getElementById('ma-tourist-list-related-services');
  if (ma_tourist_list_related_services) {
    gsap.from('#ma-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_youre_in_good_hands = document.getElementById('ma-tourist-section-youre-in-good-hands');
  if (ma_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#ma-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_tourist_section_21 = document.getElementById('ma-tourist-section-21');
  if (ma_tourist_section_21) {
    gsap.fromTo('#ma-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('ma-transit-form-transit-through-brazil-with-the-transit-visa');
  if (ma_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#ma-transit-form-transit-through-brazil-with-the-transit-visa input, #ma-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_list_quick_facts = document.getElementById('ma-transit-list-quick-facts');
  if (ma_transit_list_quick_facts) {
    gsap.from('#ma-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_list_common_challenges_applicants_face = document.getElementById('ma-transit-list-common-challenges-applicants-face');
  if (ma_transit_list_common_challenges_applicants_face) {
    gsap.from('#ma-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_list_how_we_solve_these_challenges = document.getElementById('ma-transit-list-how-we-solve-these-challenges');
  if (ma_transit_list_how_we_solve_these_challenges) {
    gsap.from('#ma-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_visa_overview = document.getElementById('ma-transit-section-visa-overview');
  if (ma_transit_section_visa_overview) {
    gsap.fromTo('#ma-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_form_who_is_this_visa_for = document.getElementById('ma-transit-form-who-is-this-visa-for');
  if (ma_transit_form_who_is_this_visa_for) {
    gsap.from('#ma-transit-form-who-is-this-visa-for input, #ma-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_list_required_documents = document.getElementById('ma-transit-list-required-documents');
  if (ma_transit_list_required_documents) {
    gsap.from('#ma-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_list_application_process = document.getElementById('ma-transit-list-application-process');
  if (ma_transit_list_application_process) {
    gsap.from('#ma-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_timelines_deadlines = document.getElementById('ma-transit-section-timelines-deadlines');
  if (ma_transit_section_timelines_deadlines) {
    gsap.fromTo('#ma-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_fees_costs = document.getElementById('ma-transit-section-fees-costs');
  if (ma_transit_section_fees_costs) {
    gsap.fromTo('#ma-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_list_risks_common_mistakes = document.getElementById('ma-transit-list-risks-common-mistakes');
  if (ma_transit_list_risks_common_mistakes) {
    gsap.from('#ma-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_diy_vs_professional_assistance = document.getElementById('ma-transit-section-diy-vs-professional-assistance');
  if (ma_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_maranho_specific_context = document.getElementById('ma-transit-section-maranho-specific-context');
  if (ma_transit_section_maranho_specific_context) {
    gsap.fromTo('#ma-transit-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_what_our_clients_say = document.getElementById('ma-transit-section-what-our-clients-say');
  if (ma_transit_section_what_our_clients_say) {
    gsap.fromTo('#ma-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_frequently_asked_questions = document.getElementById('ma-transit-section-frequently-asked-questions');
  if (ma_transit_section_frequently_asked_questions) {
    gsap.fromTo('#ma-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_international_support = document.getElementById('ma-transit-section-international-support');
  if (ma_transit_section_international_support) {
    gsap.fromTo('#ma-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_list_our_credentials = document.getElementById('ma-transit-list-our-credentials');
  if (ma_transit_list_our_credentials) {
    gsap.from('#ma-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_list_related_services = document.getElementById('ma-transit-list-related-services');
  if (ma_transit_list_related_services) {
    gsap.from('#ma-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_youre_in_good_hands = document.getElementById('ma-transit-section-youre-in-good-hands');
  if (ma_transit_section_youre_in_good_hands) {
    gsap.fromTo('#ma-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_transit_section_21 = document.getElementById('ma-transit-section-21');
  if (ma_transit_section_21) {
    gsap.fromTo('#ma-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_form_study_in_brazil_with_the_student_visa = document.getElementById('ma-student-form-study-in-brazil-with-the-student-visa');
  if (ma_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#ma-student-form-study-in-brazil-with-the-student-visa input, #ma-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_list_quick_facts = document.getElementById('ma-student-list-quick-facts');
  if (ma_student_list_quick_facts) {
    gsap.from('#ma-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_list_common_challenges_applicants_face = document.getElementById('ma-student-list-common-challenges-applicants-face');
  if (ma_student_list_common_challenges_applicants_face) {
    gsap.from('#ma-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_list_how_we_solve_these_challenges = document.getElementById('ma-student-list-how-we-solve-these-challenges');
  if (ma_student_list_how_we_solve_these_challenges) {
    gsap.from('#ma-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_visa_overview = document.getElementById('ma-student-section-visa-overview');
  if (ma_student_section_visa_overview) {
    gsap.fromTo('#ma-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_form_who_is_this_visa_for = document.getElementById('ma-student-form-who-is-this-visa-for');
  if (ma_student_form_who_is_this_visa_for) {
    gsap.from('#ma-student-form-who-is-this-visa-for input, #ma-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_list_required_documents = document.getElementById('ma-student-list-required-documents');
  if (ma_student_list_required_documents) {
    gsap.from('#ma-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_list_application_process = document.getElementById('ma-student-list-application-process');
  if (ma_student_list_application_process) {
    gsap.from('#ma-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_timelines_deadlines = document.getElementById('ma-student-section-timelines-deadlines');
  if (ma_student_section_timelines_deadlines) {
    gsap.fromTo('#ma-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_fees_costs = document.getElementById('ma-student-section-fees-costs');
  if (ma_student_section_fees_costs) {
    gsap.fromTo('#ma-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_list_risks_common_mistakes = document.getElementById('ma-student-list-risks-common-mistakes');
  if (ma_student_list_risks_common_mistakes) {
    gsap.from('#ma-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_diy_vs_professional_assistance = document.getElementById('ma-student-section-diy-vs-professional-assistance');
  if (ma_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_maranho_specific_context = document.getElementById('ma-student-section-maranho-specific-context');
  if (ma_student_section_maranho_specific_context) {
    gsap.fromTo('#ma-student-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_what_our_clients_say = document.getElementById('ma-student-section-what-our-clients-say');
  if (ma_student_section_what_our_clients_say) {
    gsap.fromTo('#ma-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_frequently_asked_questions = document.getElementById('ma-student-section-frequently-asked-questions');
  if (ma_student_section_frequently_asked_questions) {
    gsap.fromTo('#ma-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_international_support = document.getElementById('ma-student-section-international-support');
  if (ma_student_section_international_support) {
    gsap.fromTo('#ma-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_list_our_credentials = document.getElementById('ma-student-list-our-credentials');
  if (ma_student_list_our_credentials) {
    gsap.from('#ma-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_list_related_services = document.getElementById('ma-student-list-related-services');
  if (ma_student_list_related_services) {
    gsap.from('#ma-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_youre_in_good_hands = document.getElementById('ma-student-section-youre-in-good-hands');
  if (ma_student_section_youre_in_good_hands) {
    gsap.fromTo('#ma-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_student_section_21 = document.getElementById('ma-student-section-21');
  if (ma_student_section_21) {
    gsap.fromTo('#ma-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('ma-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (ma_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#ma-business-form-conduct-business-in-brazil-with-the-business-visa input, #ma-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_list_quick_facts = document.getElementById('ma-business-list-quick-facts');
  if (ma_business_list_quick_facts) {
    gsap.from('#ma-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_list_common_challenges_applicants_face = document.getElementById('ma-business-list-common-challenges-applicants-face');
  if (ma_business_list_common_challenges_applicants_face) {
    gsap.from('#ma-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_list_how_we_solve_these_challenges = document.getElementById('ma-business-list-how-we-solve-these-challenges');
  if (ma_business_list_how_we_solve_these_challenges) {
    gsap.from('#ma-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_visa_overview = document.getElementById('ma-business-section-visa-overview');
  if (ma_business_section_visa_overview) {
    gsap.fromTo('#ma-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_form_who_is_this_visa_for = document.getElementById('ma-business-form-who-is-this-visa-for');
  if (ma_business_form_who_is_this_visa_for) {
    gsap.from('#ma-business-form-who-is-this-visa-for input, #ma-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_list_required_documents = document.getElementById('ma-business-list-required-documents');
  if (ma_business_list_required_documents) {
    gsap.from('#ma-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_list_application_process = document.getElementById('ma-business-list-application-process');
  if (ma_business_list_application_process) {
    gsap.from('#ma-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_timelines_deadlines = document.getElementById('ma-business-section-timelines-deadlines');
  if (ma_business_section_timelines_deadlines) {
    gsap.fromTo('#ma-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_fees_costs = document.getElementById('ma-business-section-fees-costs');
  if (ma_business_section_fees_costs) {
    gsap.fromTo('#ma-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_list_risks_common_mistakes = document.getElementById('ma-business-list-risks-common-mistakes');
  if (ma_business_list_risks_common_mistakes) {
    gsap.from('#ma-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_diy_vs_professional_assistance = document.getElementById('ma-business-section-diy-vs-professional-assistance');
  if (ma_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_maranho_specific_context = document.getElementById('ma-business-section-maranho-specific-context');
  if (ma_business_section_maranho_specific_context) {
    gsap.fromTo('#ma-business-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_what_our_clients_say = document.getElementById('ma-business-section-what-our-clients-say');
  if (ma_business_section_what_our_clients_say) {
    gsap.fromTo('#ma-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_frequently_asked_questions = document.getElementById('ma-business-section-frequently-asked-questions');
  if (ma_business_section_frequently_asked_questions) {
    gsap.fromTo('#ma-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_international_support = document.getElementById('ma-business-section-international-support');
  if (ma_business_section_international_support) {
    gsap.fromTo('#ma-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_list_our_credentials = document.getElementById('ma-business-list-our-credentials');
  if (ma_business_list_our_credentials) {
    gsap.from('#ma-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_list_related_services = document.getElementById('ma-business-list-related-services');
  if (ma_business_list_related_services) {
    gsap.from('#ma-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_youre_in_good_hands = document.getElementById('ma-business-section-youre-in-good-hands');
  if (ma_business_section_youre_in_good_hands) {
    gsap.fromTo('#ma-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_business_section_21 = document.getElementById('ma-business-section-21');
  if (ma_business_section_21) {
    gsap.fromTo('#ma-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('ma-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (ma_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#ma-research-form-conduct-research-in-brazil-with-the-research-visa input, #ma-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_list_quick_facts = document.getElementById('ma-research-list-quick-facts');
  if (ma_research_list_quick_facts) {
    gsap.from('#ma-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_list_common_challenges_applicants_face = document.getElementById('ma-research-list-common-challenges-applicants-face');
  if (ma_research_list_common_challenges_applicants_face) {
    gsap.from('#ma-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_list_how_we_solve_these_challenges = document.getElementById('ma-research-list-how-we-solve-these-challenges');
  if (ma_research_list_how_we_solve_these_challenges) {
    gsap.from('#ma-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_visa_overview = document.getElementById('ma-research-section-visa-overview');
  if (ma_research_section_visa_overview) {
    gsap.fromTo('#ma-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_form_who_is_this_visa_for = document.getElementById('ma-research-form-who-is-this-visa-for');
  if (ma_research_form_who_is_this_visa_for) {
    gsap.from('#ma-research-form-who-is-this-visa-for input, #ma-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_list_required_documents = document.getElementById('ma-research-list-required-documents');
  if (ma_research_list_required_documents) {
    gsap.from('#ma-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_list_application_process = document.getElementById('ma-research-list-application-process');
  if (ma_research_list_application_process) {
    gsap.from('#ma-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_timelines_deadlines = document.getElementById('ma-research-section-timelines-deadlines');
  if (ma_research_section_timelines_deadlines) {
    gsap.fromTo('#ma-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_fees_costs = document.getElementById('ma-research-section-fees-costs');
  if (ma_research_section_fees_costs) {
    gsap.fromTo('#ma-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_list_risks_common_mistakes = document.getElementById('ma-research-list-risks-common-mistakes');
  if (ma_research_list_risks_common_mistakes) {
    gsap.from('#ma-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_diy_vs_professional_assistance = document.getElementById('ma-research-section-diy-vs-professional-assistance');
  if (ma_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_maranho_specific_context = document.getElementById('ma-research-section-maranho-specific-context');
  if (ma_research_section_maranho_specific_context) {
    gsap.fromTo('#ma-research-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_what_our_clients_say = document.getElementById('ma-research-section-what-our-clients-say');
  if (ma_research_section_what_our_clients_say) {
    gsap.fromTo('#ma-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_frequently_asked_questions = document.getElementById('ma-research-section-frequently-asked-questions');
  if (ma_research_section_frequently_asked_questions) {
    gsap.fromTo('#ma-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_international_support = document.getElementById('ma-research-section-international-support');
  if (ma_research_section_international_support) {
    gsap.fromTo('#ma-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_list_our_credentials = document.getElementById('ma-research-list-our-credentials');
  if (ma_research_list_our_credentials) {
    gsap.from('#ma-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_list_related_services = document.getElementById('ma-research-list-related-services');
  if (ma_research_list_related_services) {
    gsap.from('#ma-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_youre_in_good_hands = document.getElementById('ma-research-section-youre-in-good-hands');
  if (ma_research_section_youre_in_good_hands) {
    gsap.fromTo('#ma-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_research_section_21 = document.getElementById('ma-research-section-21');
  if (ma_research_section_21) {
    gsap.fromTo('#ma-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('ma-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (ma_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#ma-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #ma-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_list_quick_facts = document.getElementById('ma-diplomatic-list-quick-facts');
  if (ma_diplomatic_list_quick_facts) {
    gsap.from('#ma-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_list_common_challenges_applicants_face = document.getElementById('ma-diplomatic-list-common-challenges-applicants-face');
  if (ma_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#ma-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_list_how_we_solve_these_challenges = document.getElementById('ma-diplomatic-list-how-we-solve-these-challenges');
  if (ma_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#ma-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_visa_overview = document.getElementById('ma-diplomatic-section-visa-overview');
  if (ma_diplomatic_section_visa_overview) {
    gsap.fromTo('#ma-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_form_who_is_this_visa_for = document.getElementById('ma-diplomatic-form-who-is-this-visa-for');
  if (ma_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#ma-diplomatic-form-who-is-this-visa-for input, #ma-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_list_required_documents = document.getElementById('ma-diplomatic-list-required-documents');
  if (ma_diplomatic_list_required_documents) {
    gsap.from('#ma-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_list_application_process = document.getElementById('ma-diplomatic-list-application-process');
  if (ma_diplomatic_list_application_process) {
    gsap.from('#ma-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_timelines_deadlines = document.getElementById('ma-diplomatic-section-timelines-deadlines');
  if (ma_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#ma-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_fees_costs = document.getElementById('ma-diplomatic-section-fees-costs');
  if (ma_diplomatic_section_fees_costs) {
    gsap.fromTo('#ma-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_list_risks_common_mistakes = document.getElementById('ma-diplomatic-list-risks-common-mistakes');
  if (ma_diplomatic_list_risks_common_mistakes) {
    gsap.from('#ma-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_diy_vs_professional_assistance = document.getElementById('ma-diplomatic-section-diy-vs-professional-assistance');
  if (ma_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_maranho_specific_context = document.getElementById('ma-diplomatic-section-maranho-specific-context');
  if (ma_diplomatic_section_maranho_specific_context) {
    gsap.fromTo('#ma-diplomatic-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_what_our_clients_say = document.getElementById('ma-diplomatic-section-what-our-clients-say');
  if (ma_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#ma-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_frequently_asked_questions = document.getElementById('ma-diplomatic-section-frequently-asked-questions');
  if (ma_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#ma-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_international_support = document.getElementById('ma-diplomatic-section-international-support');
  if (ma_diplomatic_section_international_support) {
    gsap.fromTo('#ma-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_list_our_credentials = document.getElementById('ma-diplomatic-list-our-credentials');
  if (ma_diplomatic_list_our_credentials) {
    gsap.from('#ma-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_list_related_services = document.getElementById('ma-diplomatic-list-related-services');
  if (ma_diplomatic_list_related_services) {
    gsap.from('#ma-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_youre_in_good_hands = document.getElementById('ma-diplomatic-section-youre-in-good-hands');
  if (ma_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#ma-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_diplomatic_section_21 = document.getElementById('ma-diplomatic-section-21');
  if (ma_diplomatic_section_21) {
    gsap.fromTo('#ma-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('ma-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (ma_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#ma-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #ma-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_list_quick_facts = document.getElementById('ma-journalist-list-quick-facts');
  if (ma_journalist_list_quick_facts) {
    gsap.from('#ma-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_list_common_challenges_applicants_face = document.getElementById('ma-journalist-list-common-challenges-applicants-face');
  if (ma_journalist_list_common_challenges_applicants_face) {
    gsap.from('#ma-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_list_how_we_solve_these_challenges = document.getElementById('ma-journalist-list-how-we-solve-these-challenges');
  if (ma_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#ma-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_visa_overview = document.getElementById('ma-journalist-section-visa-overview');
  if (ma_journalist_section_visa_overview) {
    gsap.fromTo('#ma-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_form_who_is_this_visa_for = document.getElementById('ma-journalist-form-who-is-this-visa-for');
  if (ma_journalist_form_who_is_this_visa_for) {
    gsap.from('#ma-journalist-form-who-is-this-visa-for input, #ma-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_list_required_documents = document.getElementById('ma-journalist-list-required-documents');
  if (ma_journalist_list_required_documents) {
    gsap.from('#ma-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_list_application_process = document.getElementById('ma-journalist-list-application-process');
  if (ma_journalist_list_application_process) {
    gsap.from('#ma-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_timelines_deadlines = document.getElementById('ma-journalist-section-timelines-deadlines');
  if (ma_journalist_section_timelines_deadlines) {
    gsap.fromTo('#ma-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_fees_costs = document.getElementById('ma-journalist-section-fees-costs');
  if (ma_journalist_section_fees_costs) {
    gsap.fromTo('#ma-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_list_risks_common_mistakes = document.getElementById('ma-journalist-list-risks-common-mistakes');
  if (ma_journalist_list_risks_common_mistakes) {
    gsap.from('#ma-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_diy_vs_professional_assistance = document.getElementById('ma-journalist-section-diy-vs-professional-assistance');
  if (ma_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_maranho_specific_context = document.getElementById('ma-journalist-section-maranho-specific-context');
  if (ma_journalist_section_maranho_specific_context) {
    gsap.fromTo('#ma-journalist-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_what_our_clients_say = document.getElementById('ma-journalist-section-what-our-clients-say');
  if (ma_journalist_section_what_our_clients_say) {
    gsap.fromTo('#ma-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_frequently_asked_questions = document.getElementById('ma-journalist-section-frequently-asked-questions');
  if (ma_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#ma-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_international_support = document.getElementById('ma-journalist-section-international-support');
  if (ma_journalist_section_international_support) {
    gsap.fromTo('#ma-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_list_our_credentials = document.getElementById('ma-journalist-list-our-credentials');
  if (ma_journalist_list_our_credentials) {
    gsap.from('#ma-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_list_related_services = document.getElementById('ma-journalist-list-related-services');
  if (ma_journalist_list_related_services) {
    gsap.from('#ma-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_youre_in_good_hands = document.getElementById('ma-journalist-section-youre-in-good-hands');
  if (ma_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#ma-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_journalist_section_21 = document.getElementById('ma-journalist-section-21');
  if (ma_journalist_section_21) {
    gsap.fromTo('#ma-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('ma-fines-form-resolve-immigration-fines-in-brazil');
  if (ma_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#ma-fines-form-resolve-immigration-fines-in-brazil input, #ma-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_list_quick_facts = document.getElementById('ma-fines-list-quick-facts');
  if (ma_fines_list_quick_facts) {
    gsap.from('#ma-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_list_common_challenges_applicants_face = document.getElementById('ma-fines-list-common-challenges-applicants-face');
  if (ma_fines_list_common_challenges_applicants_face) {
    gsap.from('#ma-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_list_how_we_solve_these_challenges = document.getElementById('ma-fines-list-how-we-solve-these-challenges');
  if (ma_fines_list_how_we_solve_these_challenges) {
    gsap.from('#ma-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_service_overview = document.getElementById('ma-fines-section-service-overview');
  if (ma_fines_section_service_overview) {
    gsap.fromTo('#ma-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_form_who_is_this_service_for = document.getElementById('ma-fines-form-who-is-this-service-for');
  if (ma_fines_form_who_is_this_service_for) {
    gsap.from('#ma-fines-form-who-is-this-service-for input, #ma-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_list_required_documents = document.getElementById('ma-fines-list-required-documents');
  if (ma_fines_list_required_documents) {
    gsap.from('#ma-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_list_process = document.getElementById('ma-fines-list-process');
  if (ma_fines_list_process) {
    gsap.from('#ma-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_timelines_deadlines = document.getElementById('ma-fines-section-timelines-deadlines');
  if (ma_fines_section_timelines_deadlines) {
    gsap.fromTo('#ma-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_fees_costs = document.getElementById('ma-fines-section-fees-costs');
  if (ma_fines_section_fees_costs) {
    gsap.fromTo('#ma-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_list_risks_common_mistakes = document.getElementById('ma-fines-list-risks-common-mistakes');
  if (ma_fines_list_risks_common_mistakes) {
    gsap.from('#ma-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_diy_vs_professional_assistance = document.getElementById('ma-fines-section-diy-vs-professional-assistance');
  if (ma_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_maranho_specific_context = document.getElementById('ma-fines-section-maranho-specific-context');
  if (ma_fines_section_maranho_specific_context) {
    gsap.fromTo('#ma-fines-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_what_our_clients_say = document.getElementById('ma-fines-section-what-our-clients-say');
  if (ma_fines_section_what_our_clients_say) {
    gsap.fromTo('#ma-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_frequently_asked_questions = document.getElementById('ma-fines-section-frequently-asked-questions');
  if (ma_fines_section_frequently_asked_questions) {
    gsap.fromTo('#ma-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_international_support = document.getElementById('ma-fines-section-international-support');
  if (ma_fines_section_international_support) {
    gsap.fromTo('#ma-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_list_our_credentials = document.getElementById('ma-fines-list-our-credentials');
  if (ma_fines_list_our_credentials) {
    gsap.from('#ma-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_list_related_services = document.getElementById('ma-fines-list-related-services');
  if (ma_fines_list_related_services) {
    gsap.from('#ma-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_youre_in_good_hands = document.getElementById('ma-fines-section-youre-in-good-hands');
  if (ma_fines_section_youre_in_good_hands) {
    gsap.fromTo('#ma-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_fines_section_21 = document.getElementById('ma-fines-section-21');
  if (ma_fines_section_21) {
    gsap.fromTo('#ma-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_form_deportation_assistance_in_brazil = document.getElementById('ma-deportation-form-deportation-assistance-in-brazil');
  if (ma_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#ma-deportation-form-deportation-assistance-in-brazil input, #ma-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_list_quick_facts = document.getElementById('ma-deportation-list-quick-facts');
  if (ma_deportation_list_quick_facts) {
    gsap.from('#ma-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_list_common_challenges_applicants_face = document.getElementById('ma-deportation-list-common-challenges-applicants-face');
  if (ma_deportation_list_common_challenges_applicants_face) {
    gsap.from('#ma-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_list_how_we_solve_these_challenges = document.getElementById('ma-deportation-list-how-we-solve-these-challenges');
  if (ma_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#ma-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_service_overview = document.getElementById('ma-deportation-section-service-overview');
  if (ma_deportation_section_service_overview) {
    gsap.fromTo('#ma-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_form_who_is_this_service_for = document.getElementById('ma-deportation-form-who-is-this-service-for');
  if (ma_deportation_form_who_is_this_service_for) {
    gsap.from('#ma-deportation-form-who-is-this-service-for input, #ma-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_list_required_documents = document.getElementById('ma-deportation-list-required-documents');
  if (ma_deportation_list_required_documents) {
    gsap.from('#ma-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_list_process = document.getElementById('ma-deportation-list-process');
  if (ma_deportation_list_process) {
    gsap.from('#ma-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_timelines_deadlines = document.getElementById('ma-deportation-section-timelines-deadlines');
  if (ma_deportation_section_timelines_deadlines) {
    gsap.fromTo('#ma-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_fees_costs = document.getElementById('ma-deportation-section-fees-costs');
  if (ma_deportation_section_fees_costs) {
    gsap.fromTo('#ma-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_list_risks_common_mistakes = document.getElementById('ma-deportation-list-risks-common-mistakes');
  if (ma_deportation_list_risks_common_mistakes) {
    gsap.from('#ma-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_diy_vs_professional_assistance = document.getElementById('ma-deportation-section-diy-vs-professional-assistance');
  if (ma_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_maranho_specific_context = document.getElementById('ma-deportation-section-maranho-specific-context');
  if (ma_deportation_section_maranho_specific_context) {
    gsap.fromTo('#ma-deportation-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_what_our_clients_say = document.getElementById('ma-deportation-section-what-our-clients-say');
  if (ma_deportation_section_what_our_clients_say) {
    gsap.fromTo('#ma-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_frequently_asked_questions = document.getElementById('ma-deportation-section-frequently-asked-questions');
  if (ma_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#ma-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_international_support = document.getElementById('ma-deportation-section-international-support');
  if (ma_deportation_section_international_support) {
    gsap.fromTo('#ma-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_list_our_credentials = document.getElementById('ma-deportation-list-our-credentials');
  if (ma_deportation_list_our_credentials) {
    gsap.from('#ma-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_list_related_services = document.getElementById('ma-deportation-list-related-services');
  if (ma_deportation_list_related_services) {
    gsap.from('#ma-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_youre_in_good_hands = document.getElementById('ma-deportation-section-youre-in-good-hands');
  if (ma_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#ma-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_deportation_section_21 = document.getElementById('ma-deportation-section-21');
  if (ma_deportation_section_21) {
    gsap.fromTo('#ma-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('ma-translation-form-sworn-document-translation-services-in-brazil');
  if (ma_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#ma-translation-form-sworn-document-translation-services-in-brazil input, #ma-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_list_quick_facts = document.getElementById('ma-translation-list-quick-facts');
  if (ma_translation_list_quick_facts) {
    gsap.from('#ma-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_list_common_challenges_applicants_face = document.getElementById('ma-translation-list-common-challenges-applicants-face');
  if (ma_translation_list_common_challenges_applicants_face) {
    gsap.from('#ma-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_list_how_we_solve_these_challenges = document.getElementById('ma-translation-list-how-we-solve-these-challenges');
  if (ma_translation_list_how_we_solve_these_challenges) {
    gsap.from('#ma-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_service_overview = document.getElementById('ma-translation-section-service-overview');
  if (ma_translation_section_service_overview) {
    gsap.fromTo('#ma-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_form_who_is_this_service_for = document.getElementById('ma-translation-form-who-is-this-service-for');
  if (ma_translation_form_who_is_this_service_for) {
    gsap.from('#ma-translation-form-who-is-this-service-for input, #ma-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_list_required_documents = document.getElementById('ma-translation-list-required-documents');
  if (ma_translation_list_required_documents) {
    gsap.from('#ma-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_list_process = document.getElementById('ma-translation-list-process');
  if (ma_translation_list_process) {
    gsap.from('#ma-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_timelines_deadlines = document.getElementById('ma-translation-section-timelines-deadlines');
  if (ma_translation_section_timelines_deadlines) {
    gsap.fromTo('#ma-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_fees_costs = document.getElementById('ma-translation-section-fees-costs');
  if (ma_translation_section_fees_costs) {
    gsap.fromTo('#ma-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_list_risks_common_mistakes = document.getElementById('ma-translation-list-risks-common-mistakes');
  if (ma_translation_list_risks_common_mistakes) {
    gsap.from('#ma-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_diy_vs_professional_assistance = document.getElementById('ma-translation-section-diy-vs-professional-assistance');
  if (ma_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_maranho_specific_context = document.getElementById('ma-translation-section-maranho-specific-context');
  if (ma_translation_section_maranho_specific_context) {
    gsap.fromTo('#ma-translation-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_what_our_clients_say = document.getElementById('ma-translation-section-what-our-clients-say');
  if (ma_translation_section_what_our_clients_say) {
    gsap.fromTo('#ma-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_frequently_asked_questions = document.getElementById('ma-translation-section-frequently-asked-questions');
  if (ma_translation_section_frequently_asked_questions) {
    gsap.fromTo('#ma-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_international_support = document.getElementById('ma-translation-section-international-support');
  if (ma_translation_section_international_support) {
    gsap.fromTo('#ma-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_list_our_credentials = document.getElementById('ma-translation-list-our-credentials');
  if (ma_translation_list_our_credentials) {
    gsap.from('#ma-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_list_related_services = document.getElementById('ma-translation-list-related-services');
  if (ma_translation_list_related_services) {
    gsap.from('#ma-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_youre_in_good_hands = document.getElementById('ma-translation-section-youre-in-good-hands');
  if (ma_translation_section_youre_in_good_hands) {
    gsap.fromTo('#ma-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_translation_section_21 = document.getElementById('ma-translation-section-21');
  if (ma_translation_section_21) {
    gsap.fromTo('#ma-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('ma-expulsion-form-expulsion-assistance-in-brazil');
  if (ma_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#ma-expulsion-form-expulsion-assistance-in-brazil input, #ma-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_list_quick_facts = document.getElementById('ma-expulsion-list-quick-facts');
  if (ma_expulsion_list_quick_facts) {
    gsap.from('#ma-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_list_common_challenges_applicants_face = document.getElementById('ma-expulsion-list-common-challenges-applicants-face');
  if (ma_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#ma-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_list_how_we_solve_these_challenges = document.getElementById('ma-expulsion-list-how-we-solve-these-challenges');
  if (ma_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#ma-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_service_overview = document.getElementById('ma-expulsion-section-service-overview');
  if (ma_expulsion_section_service_overview) {
    gsap.fromTo('#ma-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_form_who_is_this_service_for = document.getElementById('ma-expulsion-form-who-is-this-service-for');
  if (ma_expulsion_form_who_is_this_service_for) {
    gsap.from('#ma-expulsion-form-who-is-this-service-for input, #ma-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_list_required_documents = document.getElementById('ma-expulsion-list-required-documents');
  if (ma_expulsion_list_required_documents) {
    gsap.from('#ma-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_list_process = document.getElementById('ma-expulsion-list-process');
  if (ma_expulsion_list_process) {
    gsap.from('#ma-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_timelines_deadlines = document.getElementById('ma-expulsion-section-timelines-deadlines');
  if (ma_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#ma-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_fees_costs = document.getElementById('ma-expulsion-section-fees-costs');
  if (ma_expulsion_section_fees_costs) {
    gsap.fromTo('#ma-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_list_risks_common_mistakes = document.getElementById('ma-expulsion-list-risks-common-mistakes');
  if (ma_expulsion_list_risks_common_mistakes) {
    gsap.from('#ma-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_diy_vs_professional_assistance = document.getElementById('ma-expulsion-section-diy-vs-professional-assistance');
  if (ma_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_maranho_specific_context = document.getElementById('ma-expulsion-section-maranho-specific-context');
  if (ma_expulsion_section_maranho_specific_context) {
    gsap.fromTo('#ma-expulsion-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_what_our_clients_say = document.getElementById('ma-expulsion-section-what-our-clients-say');
  if (ma_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#ma-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_frequently_asked_questions = document.getElementById('ma-expulsion-section-frequently-asked-questions');
  if (ma_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#ma-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_international_support = document.getElementById('ma-expulsion-section-international-support');
  if (ma_expulsion_section_international_support) {
    gsap.fromTo('#ma-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_list_our_credentials = document.getElementById('ma-expulsion-list-our-credentials');
  if (ma_expulsion_list_our_credentials) {
    gsap.from('#ma-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_list_related_services = document.getElementById('ma-expulsion-list-related-services');
  if (ma_expulsion_list_related_services) {
    gsap.from('#ma-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_youre_in_good_hands = document.getElementById('ma-expulsion-section-youre-in-good-hands');
  if (ma_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#ma-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_expulsion_section_21 = document.getElementById('ma-expulsion-section-21');
  if (ma_expulsion_section_21) {
    gsap.fromTo('#ma-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('ma-appeals-form-appeal-immigration-denials-in-brazil');
  if (ma_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#ma-appeals-form-appeal-immigration-denials-in-brazil input, #ma-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_list_quick_facts = document.getElementById('ma-appeals-list-quick-facts');
  if (ma_appeals_list_quick_facts) {
    gsap.from('#ma-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_list_common_challenges_applicants_face = document.getElementById('ma-appeals-list-common-challenges-applicants-face');
  if (ma_appeals_list_common_challenges_applicants_face) {
    gsap.from('#ma-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_list_how_we_solve_these_challenges = document.getElementById('ma-appeals-list-how-we-solve-these-challenges');
  if (ma_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#ma-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_service_overview = document.getElementById('ma-appeals-section-service-overview');
  if (ma_appeals_section_service_overview) {
    gsap.fromTo('#ma-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_form_who_is_this_service_for = document.getElementById('ma-appeals-form-who-is-this-service-for');
  if (ma_appeals_form_who_is_this_service_for) {
    gsap.from('#ma-appeals-form-who-is-this-service-for input, #ma-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_list_required_documents = document.getElementById('ma-appeals-list-required-documents');
  if (ma_appeals_list_required_documents) {
    gsap.from('#ma-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_list_appeal_process = document.getElementById('ma-appeals-list-appeal-process');
  if (ma_appeals_list_appeal_process) {
    gsap.from('#ma-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_timelines_deadlines = document.getElementById('ma-appeals-section-timelines-deadlines');
  if (ma_appeals_section_timelines_deadlines) {
    gsap.fromTo('#ma-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_fees_costs = document.getElementById('ma-appeals-section-fees-costs');
  if (ma_appeals_section_fees_costs) {
    gsap.fromTo('#ma-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_list_risks_common_mistakes = document.getElementById('ma-appeals-list-risks-common-mistakes');
  if (ma_appeals_list_risks_common_mistakes) {
    gsap.from('#ma-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_diy_vs_professional_assistance = document.getElementById('ma-appeals-section-diy-vs-professional-assistance');
  if (ma_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_maranho_specific_context = document.getElementById('ma-appeals-section-maranho-specific-context');
  if (ma_appeals_section_maranho_specific_context) {
    gsap.fromTo('#ma-appeals-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_what_our_clients_say = document.getElementById('ma-appeals-section-what-our-clients-say');
  if (ma_appeals_section_what_our_clients_say) {
    gsap.fromTo('#ma-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_frequently_asked_questions = document.getElementById('ma-appeals-section-frequently-asked-questions');
  if (ma_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#ma-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_international_support = document.getElementById('ma-appeals-section-international-support');
  if (ma_appeals_section_international_support) {
    gsap.fromTo('#ma-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_list_our_credentials = document.getElementById('ma-appeals-list-our-credentials');
  if (ma_appeals_list_our_credentials) {
    gsap.from('#ma-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_list_related_services = document.getElementById('ma-appeals-list-related-services');
  if (ma_appeals_list_related_services) {
    gsap.from('#ma-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_youre_in_good_hands = document.getElementById('ma-appeals-section-youre-in-good-hands');
  if (ma_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#ma-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_appeals_section_21 = document.getElementById('ma-appeals-section-21');
  if (ma_appeals_section_21) {
    gsap.fromTo('#ma-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('ma-consular-form-consular-services-in-brazil-for-citizens');
  if (ma_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#ma-consular-form-consular-services-in-brazil-for-citizens input, #ma-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_list_quick_facts = document.getElementById('ma-consular-list-quick-facts');
  if (ma_consular_list_quick_facts) {
    gsap.from('#ma-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_list_common_challenges_applicants_face = document.getElementById('ma-consular-list-common-challenges-applicants-face');
  if (ma_consular_list_common_challenges_applicants_face) {
    gsap.from('#ma-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_list_how_we_solve_these_challenges = document.getElementById('ma-consular-list-how-we-solve-these-challenges');
  if (ma_consular_list_how_we_solve_these_challenges) {
    gsap.from('#ma-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_service_overview = document.getElementById('ma-consular-section-service-overview');
  if (ma_consular_section_service_overview) {
    gsap.fromTo('#ma-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_form_who_is_this_service_for = document.getElementById('ma-consular-form-who-is-this-service-for');
  if (ma_consular_form_who_is_this_service_for) {
    gsap.from('#ma-consular-form-who-is-this-service-for input, #ma-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_list_required_documents = document.getElementById('ma-consular-list-required-documents');
  if (ma_consular_list_required_documents) {
    gsap.from('#ma-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_list_process = document.getElementById('ma-consular-list-process');
  if (ma_consular_list_process) {
    gsap.from('#ma-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_timelines_deadlines = document.getElementById('ma-consular-section-timelines-deadlines');
  if (ma_consular_section_timelines_deadlines) {
    gsap.fromTo('#ma-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_fees_costs = document.getElementById('ma-consular-section-fees-costs');
  if (ma_consular_section_fees_costs) {
    gsap.fromTo('#ma-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_list_risks_common_mistakes = document.getElementById('ma-consular-list-risks-common-mistakes');
  if (ma_consular_list_risks_common_mistakes) {
    gsap.from('#ma-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_diy_vs_professional_assistance = document.getElementById('ma-consular-section-diy-vs-professional-assistance');
  if (ma_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_maranho_specific_context = document.getElementById('ma-consular-section-maranho-specific-context');
  if (ma_consular_section_maranho_specific_context) {
    gsap.fromTo('#ma-consular-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_what_our_clients_say = document.getElementById('ma-consular-section-what-our-clients-say');
  if (ma_consular_section_what_our_clients_say) {
    gsap.fromTo('#ma-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_frequently_asked_questions = document.getElementById('ma-consular-section-frequently-asked-questions');
  if (ma_consular_section_frequently_asked_questions) {
    gsap.fromTo('#ma-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_international_support = document.getElementById('ma-consular-section-international-support');
  if (ma_consular_section_international_support) {
    gsap.fromTo('#ma-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_list_our_credentials = document.getElementById('ma-consular-list-our-credentials');
  if (ma_consular_list_our_credentials) {
    gsap.from('#ma-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_list_related_services = document.getElementById('ma-consular-list-related-services');
  if (ma_consular_list_related_services) {
    gsap.from('#ma-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_youre_in_good_hands = document.getElementById('ma-consular-section-youre-in-good-hands');
  if (ma_consular_section_youre_in_good_hands) {
    gsap.fromTo('#ma-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_consular_section_21 = document.getElementById('ma-consular-section-21');
  if (ma_consular_section_21) {
    gsap.fromTo('#ma-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('ma-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (ma_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#ma-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #ma-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_list_quick_facts = document.getElementById('ma-criminalrecords-list-quick-facts');
  if (ma_criminalrecords_list_quick_facts) {
    gsap.from('#ma-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_list_common_challenges_applicants_face = document.getElementById('ma-criminalrecords-list-common-challenges-applicants-face');
  if (ma_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#ma-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('ma-criminalrecords-list-how-we-solve-these-challenges');
  if (ma_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#ma-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_service_overview = document.getElementById('ma-criminalrecords-section-service-overview');
  if (ma_criminalrecords_section_service_overview) {
    gsap.fromTo('#ma-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_form_who_is_this_service_for = document.getElementById('ma-criminalrecords-form-who-is-this-service-for');
  if (ma_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#ma-criminalrecords-form-who-is-this-service-for input, #ma-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_list_required_documents = document.getElementById('ma-criminalrecords-list-required-documents');
  if (ma_criminalrecords_list_required_documents) {
    gsap.from('#ma-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_list_process = document.getElementById('ma-criminalrecords-list-process');
  if (ma_criminalrecords_list_process) {
    gsap.from('#ma-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_timelines_deadlines = document.getElementById('ma-criminalrecords-section-timelines-deadlines');
  if (ma_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#ma-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_fees_costs = document.getElementById('ma-criminalrecords-section-fees-costs');
  if (ma_criminalrecords_section_fees_costs) {
    gsap.fromTo('#ma-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_list_risks_common_mistakes = document.getElementById('ma-criminalrecords-list-risks-common-mistakes');
  if (ma_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#ma-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('ma-criminalrecords-section-diy-vs-professional-assistance');
  if (ma_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_maranho_specific_context = document.getElementById('ma-criminalrecords-section-maranho-specific-context');
  if (ma_criminalrecords_section_maranho_specific_context) {
    gsap.fromTo('#ma-criminalrecords-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_what_our_clients_say = document.getElementById('ma-criminalrecords-section-what-our-clients-say');
  if (ma_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#ma-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_frequently_asked_questions = document.getElementById('ma-criminalrecords-section-frequently-asked-questions');
  if (ma_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#ma-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_international_support = document.getElementById('ma-criminalrecords-section-international-support');
  if (ma_criminalrecords_section_international_support) {
    gsap.fromTo('#ma-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_list_our_credentials = document.getElementById('ma-criminalrecords-list-our-credentials');
  if (ma_criminalrecords_list_our_credentials) {
    gsap.from('#ma-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_list_related_services = document.getElementById('ma-criminalrecords-list-related-services');
  if (ma_criminalrecords_list_related_services) {
    gsap.from('#ma-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_youre_in_good_hands = document.getElementById('ma-criminalrecords-section-youre-in-good-hands');
  if (ma_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#ma-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_criminalrecords_section_21 = document.getElementById('ma-criminalrecords-section-21');
  if (ma_criminalrecords_section_21) {
    gsap.fromTo('#ma-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_form_extradition_assistance_in_brazil = document.getElementById('ma-extradition-form-extradition-assistance-in-brazil');
  if (ma_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#ma-extradition-form-extradition-assistance-in-brazil input, #ma-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_list_quick_facts = document.getElementById('ma-extradition-list-quick-facts');
  if (ma_extradition_list_quick_facts) {
    gsap.from('#ma-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_list_common_challenges_applicants_face = document.getElementById('ma-extradition-list-common-challenges-applicants-face');
  if (ma_extradition_list_common_challenges_applicants_face) {
    gsap.from('#ma-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_list_how_we_solve_these_challenges = document.getElementById('ma-extradition-list-how-we-solve-these-challenges');
  if (ma_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#ma-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_service_overview = document.getElementById('ma-extradition-section-service-overview');
  if (ma_extradition_section_service_overview) {
    gsap.fromTo('#ma-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_form_who_is_this_service_for = document.getElementById('ma-extradition-form-who-is-this-service-for');
  if (ma_extradition_form_who_is_this_service_for) {
    gsap.from('#ma-extradition-form-who-is-this-service-for input, #ma-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_list_required_documents = document.getElementById('ma-extradition-list-required-documents');
  if (ma_extradition_list_required_documents) {
    gsap.from('#ma-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_list_process = document.getElementById('ma-extradition-list-process');
  if (ma_extradition_list_process) {
    gsap.from('#ma-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_timelines_deadlines = document.getElementById('ma-extradition-section-timelines-deadlines');
  if (ma_extradition_section_timelines_deadlines) {
    gsap.fromTo('#ma-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_fees_costs = document.getElementById('ma-extradition-section-fees-costs');
  if (ma_extradition_section_fees_costs) {
    gsap.fromTo('#ma-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_list_risks_common_mistakes = document.getElementById('ma-extradition-list-risks-common-mistakes');
  if (ma_extradition_list_risks_common_mistakes) {
    gsap.from('#ma-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_diy_vs_professional_assistance = document.getElementById('ma-extradition-section-diy-vs-professional-assistance');
  if (ma_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_maranho_specific_context = document.getElementById('ma-extradition-section-maranho-specific-context');
  if (ma_extradition_section_maranho_specific_context) {
    gsap.fromTo('#ma-extradition-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_what_our_clients_say = document.getElementById('ma-extradition-section-what-our-clients-say');
  if (ma_extradition_section_what_our_clients_say) {
    gsap.fromTo('#ma-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_frequently_asked_questions = document.getElementById('ma-extradition-section-frequently-asked-questions');
  if (ma_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#ma-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_international_support = document.getElementById('ma-extradition-section-international-support');
  if (ma_extradition_section_international_support) {
    gsap.fromTo('#ma-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_list_our_credentials = document.getElementById('ma-extradition-list-our-credentials');
  if (ma_extradition_list_our_credentials) {
    gsap.from('#ma-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_list_related_services = document.getElementById('ma-extradition-list-related-services');
  if (ma_extradition_list_related_services) {
    gsap.from('#ma-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_youre_in_good_hands = document.getElementById('ma-extradition-section-youre-in-good-hands');
  if (ma_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#ma-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_extradition_section_21 = document.getElementById('ma-extradition-section-21');
  if (ma_extradition_section_21) {
    gsap.fromTo('#ma-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_form_discover_the_north_amazon_and_beyond = document.getElementById('ma-north-form-discover-the-north-amazon-and-beyond');
  if (ma_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#ma-north-form-discover-the-north-amazon-and-beyond input, #ma-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_list_quick_facts = document.getElementById('ma-north-list-quick-facts');
  if (ma_north_list_quick_facts) {
    gsap.from('#ma-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_list_common_challenges_applicants_face = document.getElementById('ma-north-list-common-challenges-applicants-face');
  if (ma_north_list_common_challenges_applicants_face) {
    gsap.from('#ma-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_list_how_we_solve_these_challenges = document.getElementById('ma-north-list-how-we-solve-these-challenges');
  if (ma_north_list_how_we_solve_these_challenges) {
    gsap.from('#ma-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_trip_overview = document.getElementById('ma-north-section-trip-overview');
  if (ma_north_section_trip_overview) {
    gsap.fromTo('#ma-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_form_who_is_this_trip_for = document.getElementById('ma-north-form-who-is-this-trip-for');
  if (ma_north_form_who_is_this_trip_for) {
    gsap.from('#ma-north-form-who-is-this-trip-for input, #ma-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_list_required_documents = document.getElementById('ma-north-list-required-documents');
  if (ma_north_list_required_documents) {
    gsap.from('#ma-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_list_booking_process = document.getElementById('ma-north-list-booking-process');
  if (ma_north_list_booking_process) {
    gsap.from('#ma-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_timelines_deadlines = document.getElementById('ma-north-section-timelines-deadlines');
  if (ma_north_section_timelines_deadlines) {
    gsap.fromTo('#ma-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_fees_costs = document.getElementById('ma-north-section-fees-costs');
  if (ma_north_section_fees_costs) {
    gsap.fromTo('#ma-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_list_risks_common_mistakes = document.getElementById('ma-north-list-risks-common-mistakes');
  if (ma_north_list_risks_common_mistakes) {
    gsap.from('#ma-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_diy_vs_professional_assistance = document.getElementById('ma-north-section-diy-vs-professional-assistance');
  if (ma_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_maranho_specific_context = document.getElementById('ma-north-section-maranho-specific-context');
  if (ma_north_section_maranho_specific_context) {
    gsap.fromTo('#ma-north-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_what_our_clients_say = document.getElementById('ma-north-section-what-our-clients-say');
  if (ma_north_section_what_our_clients_say) {
    gsap.fromTo('#ma-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_frequently_asked_questions = document.getElementById('ma-north-section-frequently-asked-questions');
  if (ma_north_section_frequently_asked_questions) {
    gsap.fromTo('#ma-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_international_support = document.getElementById('ma-north-section-international-support');
  if (ma_north_section_international_support) {
    gsap.fromTo('#ma-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_list_our_credentials = document.getElementById('ma-north-list-our-credentials');
  if (ma_north_list_our_credentials) {
    gsap.from('#ma-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_list_related_services = document.getElementById('ma-north-list-related-services');
  if (ma_north_list_related_services) {
    gsap.from('#ma-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_youre_in_good_hands = document.getElementById('ma-north-section-youre-in-good-hands');
  if (ma_north_section_youre_in_good_hands) {
    gsap.fromTo('#ma-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_north_section_21 = document.getElementById('ma-north-section-21');
  if (ma_north_section_21) {
    gsap.fromTo('#ma-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('ma-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (ma_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#ma-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #ma-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_list_quick_facts = document.getElementById('ma-centralwest-list-quick-facts');
  if (ma_centralwest_list_quick_facts) {
    gsap.from('#ma-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_list_common_challenges_applicants_face = document.getElementById('ma-centralwest-list-common-challenges-applicants-face');
  if (ma_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#ma-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_list_how_we_solve_these_challenges = document.getElementById('ma-centralwest-list-how-we-solve-these-challenges');
  if (ma_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#ma-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_trip_overview = document.getElementById('ma-centralwest-section-trip-overview');
  if (ma_centralwest_section_trip_overview) {
    gsap.fromTo('#ma-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_form_who_is_this_trip_for = document.getElementById('ma-centralwest-form-who-is-this-trip-for');
  if (ma_centralwest_form_who_is_this_trip_for) {
    gsap.from('#ma-centralwest-form-who-is-this-trip-for input, #ma-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_list_required_documents = document.getElementById('ma-centralwest-list-required-documents');
  if (ma_centralwest_list_required_documents) {
    gsap.from('#ma-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_list_booking_process = document.getElementById('ma-centralwest-list-booking-process');
  if (ma_centralwest_list_booking_process) {
    gsap.from('#ma-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_timelines_deadlines = document.getElementById('ma-centralwest-section-timelines-deadlines');
  if (ma_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#ma-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_fees_costs = document.getElementById('ma-centralwest-section-fees-costs');
  if (ma_centralwest_section_fees_costs) {
    gsap.fromTo('#ma-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_list_risks_common_mistakes = document.getElementById('ma-centralwest-list-risks-common-mistakes');
  if (ma_centralwest_list_risks_common_mistakes) {
    gsap.from('#ma-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_diy_vs_professional_assistance = document.getElementById('ma-centralwest-section-diy-vs-professional-assistance');
  if (ma_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_maranho_specific_context = document.getElementById('ma-centralwest-section-maranho-specific-context');
  if (ma_centralwest_section_maranho_specific_context) {
    gsap.fromTo('#ma-centralwest-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_what_our_clients_say = document.getElementById('ma-centralwest-section-what-our-clients-say');
  if (ma_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#ma-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_frequently_asked_questions = document.getElementById('ma-centralwest-section-frequently-asked-questions');
  if (ma_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#ma-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_international_support = document.getElementById('ma-centralwest-section-international-support');
  if (ma_centralwest_section_international_support) {
    gsap.fromTo('#ma-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_list_our_credentials = document.getElementById('ma-centralwest-list-our-credentials');
  if (ma_centralwest_list_our_credentials) {
    gsap.from('#ma-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_list_related_services = document.getElementById('ma-centralwest-list-related-services');
  if (ma_centralwest_list_related_services) {
    gsap.from('#ma-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_youre_in_good_hands = document.getElementById('ma-centralwest-section-youre-in-good-hands');
  if (ma_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#ma-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_centralwest_section_21 = document.getElementById('ma-centralwest-section-21');
  if (ma_centralwest_section_21) {
    gsap.fromTo('#ma-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('ma-southeast-form-dynamic-southeast-cities-and-history');
  if (ma_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#ma-southeast-form-dynamic-southeast-cities-and-history input, #ma-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_list_quick_facts = document.getElementById('ma-southeast-list-quick-facts');
  if (ma_southeast_list_quick_facts) {
    gsap.from('#ma-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_list_common_challenges_applicants_face = document.getElementById('ma-southeast-list-common-challenges-applicants-face');
  if (ma_southeast_list_common_challenges_applicants_face) {
    gsap.from('#ma-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_list_how_we_solve_these_challenges = document.getElementById('ma-southeast-list-how-we-solve-these-challenges');
  if (ma_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#ma-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_trip_overview = document.getElementById('ma-southeast-section-trip-overview');
  if (ma_southeast_section_trip_overview) {
    gsap.fromTo('#ma-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_form_who_is_this_trip_for = document.getElementById('ma-southeast-form-who-is-this-trip-for');
  if (ma_southeast_form_who_is_this_trip_for) {
    gsap.from('#ma-southeast-form-who-is-this-trip-for input, #ma-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_list_required_documents = document.getElementById('ma-southeast-list-required-documents');
  if (ma_southeast_list_required_documents) {
    gsap.from('#ma-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_list_booking_process = document.getElementById('ma-southeast-list-booking-process');
  if (ma_southeast_list_booking_process) {
    gsap.from('#ma-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_timelines_deadlines = document.getElementById('ma-southeast-section-timelines-deadlines');
  if (ma_southeast_section_timelines_deadlines) {
    gsap.fromTo('#ma-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_fees_costs = document.getElementById('ma-southeast-section-fees-costs');
  if (ma_southeast_section_fees_costs) {
    gsap.fromTo('#ma-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_list_risks_common_mistakes = document.getElementById('ma-southeast-list-risks-common-mistakes');
  if (ma_southeast_list_risks_common_mistakes) {
    gsap.from('#ma-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_diy_vs_professional_assistance = document.getElementById('ma-southeast-section-diy-vs-professional-assistance');
  if (ma_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_maranho_specific_context = document.getElementById('ma-southeast-section-maranho-specific-context');
  if (ma_southeast_section_maranho_specific_context) {
    gsap.fromTo('#ma-southeast-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_what_our_clients_say = document.getElementById('ma-southeast-section-what-our-clients-say');
  if (ma_southeast_section_what_our_clients_say) {
    gsap.fromTo('#ma-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_frequently_asked_questions = document.getElementById('ma-southeast-section-frequently-asked-questions');
  if (ma_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#ma-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_international_support = document.getElementById('ma-southeast-section-international-support');
  if (ma_southeast_section_international_support) {
    gsap.fromTo('#ma-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_list_our_credentials = document.getElementById('ma-southeast-list-our-credentials');
  if (ma_southeast_list_our_credentials) {
    gsap.from('#ma-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_list_related_services = document.getElementById('ma-southeast-list-related-services');
  if (ma_southeast_list_related_services) {
    gsap.from('#ma-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_youre_in_good_hands = document.getElementById('ma-southeast-section-youre-in-good-hands');
  if (ma_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#ma-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_southeast_section_21 = document.getElementById('ma-southeast-section-21');
  if (ma_southeast_section_21) {
    gsap.fromTo('#ma-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('ma-northeast-form-vibrant-northeast-beaches-and-culture');
  if (ma_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#ma-northeast-form-vibrant-northeast-beaches-and-culture input, #ma-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_list_quick_facts = document.getElementById('ma-northeast-list-quick-facts');
  if (ma_northeast_list_quick_facts) {
    gsap.from('#ma-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_list_common_challenges_applicants_face = document.getElementById('ma-northeast-list-common-challenges-applicants-face');
  if (ma_northeast_list_common_challenges_applicants_face) {
    gsap.from('#ma-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_list_how_we_solve_these_challenges = document.getElementById('ma-northeast-list-how-we-solve-these-challenges');
  if (ma_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#ma-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_trip_overview = document.getElementById('ma-northeast-section-trip-overview');
  if (ma_northeast_section_trip_overview) {
    gsap.fromTo('#ma-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_form_who_is_this_trip_for = document.getElementById('ma-northeast-form-who-is-this-trip-for');
  if (ma_northeast_form_who_is_this_trip_for) {
    gsap.from('#ma-northeast-form-who-is-this-trip-for input, #ma-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_list_required_documents = document.getElementById('ma-northeast-list-required-documents');
  if (ma_northeast_list_required_documents) {
    gsap.from('#ma-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_list_booking_process = document.getElementById('ma-northeast-list-booking-process');
  if (ma_northeast_list_booking_process) {
    gsap.from('#ma-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_timelines_deadlines = document.getElementById('ma-northeast-section-timelines-deadlines');
  if (ma_northeast_section_timelines_deadlines) {
    gsap.fromTo('#ma-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_fees_costs = document.getElementById('ma-northeast-section-fees-costs');
  if (ma_northeast_section_fees_costs) {
    gsap.fromTo('#ma-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_list_risks_common_mistakes = document.getElementById('ma-northeast-list-risks-common-mistakes');
  if (ma_northeast_list_risks_common_mistakes) {
    gsap.from('#ma-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_diy_vs_professional_assistance = document.getElementById('ma-northeast-section-diy-vs-professional-assistance');
  if (ma_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_maranho_specific_context = document.getElementById('ma-northeast-section-maranho-specific-context');
  if (ma_northeast_section_maranho_specific_context) {
    gsap.fromTo('#ma-northeast-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_what_our_clients_say = document.getElementById('ma-northeast-section-what-our-clients-say');
  if (ma_northeast_section_what_our_clients_say) {
    gsap.fromTo('#ma-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_frequently_asked_questions = document.getElementById('ma-northeast-section-frequently-asked-questions');
  if (ma_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#ma-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_international_support = document.getElementById('ma-northeast-section-international-support');
  if (ma_northeast_section_international_support) {
    gsap.fromTo('#ma-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_list_our_credentials = document.getElementById('ma-northeast-list-our-credentials');
  if (ma_northeast_list_our_credentials) {
    gsap.from('#ma-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_list_related_services = document.getElementById('ma-northeast-list-related-services');
  if (ma_northeast_list_related_services) {
    gsap.from('#ma-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_youre_in_good_hands = document.getElementById('ma-northeast-section-youre-in-good-hands');
  if (ma_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#ma-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_northeast_section_21 = document.getElementById('ma-northeast-section-21');
  if (ma_northeast_section_21) {
    gsap.fromTo('#ma-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_form_charming_south_wine_and_gauchos = document.getElementById('ma-south-form-charming-south-wine-and-gauchos');
  if (ma_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#ma-south-form-charming-south-wine-and-gauchos input, #ma-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_list_quick_facts = document.getElementById('ma-south-list-quick-facts');
  if (ma_south_list_quick_facts) {
    gsap.from('#ma-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_list_common_challenges_applicants_face = document.getElementById('ma-south-list-common-challenges-applicants-face');
  if (ma_south_list_common_challenges_applicants_face) {
    gsap.from('#ma-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_list_how_we_solve_these_challenges = document.getElementById('ma-south-list-how-we-solve-these-challenges');
  if (ma_south_list_how_we_solve_these_challenges) {
    gsap.from('#ma-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_trip_overview = document.getElementById('ma-south-section-trip-overview');
  if (ma_south_section_trip_overview) {
    gsap.fromTo('#ma-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_form_who_is_this_trip_for = document.getElementById('ma-south-form-who-is-this-trip-for');
  if (ma_south_form_who_is_this_trip_for) {
    gsap.from('#ma-south-form-who-is-this-trip-for input, #ma-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_list_required_documents = document.getElementById('ma-south-list-required-documents');
  if (ma_south_list_required_documents) {
    gsap.from('#ma-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_list_booking_process = document.getElementById('ma-south-list-booking-process');
  if (ma_south_list_booking_process) {
    gsap.from('#ma-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_timelines_deadlines = document.getElementById('ma-south-section-timelines-deadlines');
  if (ma_south_section_timelines_deadlines) {
    gsap.fromTo('#ma-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_fees_costs = document.getElementById('ma-south-section-fees-costs');
  if (ma_south_section_fees_costs) {
    gsap.fromTo('#ma-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_list_risks_common_mistakes = document.getElementById('ma-south-list-risks-common-mistakes');
  if (ma_south_list_risks_common_mistakes) {
    gsap.from('#ma-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_diy_vs_professional_assistance = document.getElementById('ma-south-section-diy-vs-professional-assistance');
  if (ma_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ma-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_maranho_specific_context = document.getElementById('ma-south-section-maranho-specific-context');
  if (ma_south_section_maranho_specific_context) {
    gsap.fromTo('#ma-south-section-maranho-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_what_our_clients_say = document.getElementById('ma-south-section-what-our-clients-say');
  if (ma_south_section_what_our_clients_say) {
    gsap.fromTo('#ma-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_frequently_asked_questions = document.getElementById('ma-south-section-frequently-asked-questions');
  if (ma_south_section_frequently_asked_questions) {
    gsap.fromTo('#ma-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_international_support = document.getElementById('ma-south-section-international-support');
  if (ma_south_section_international_support) {
    gsap.fromTo('#ma-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_list_our_credentials = document.getElementById('ma-south-list-our-credentials');
  if (ma_south_list_our_credentials) {
    gsap.from('#ma-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_list_related_services = document.getElementById('ma-south-list-related-services');
  if (ma_south_list_related_services) {
    gsap.from('#ma-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_youre_in_good_hands = document.getElementById('ma-south-section-youre-in-good-hands');
  if (ma_south_section_youre_in_good_hands) {
    gsap.fromTo('#ma-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

  const ma_south_section_21 = document.getElementById('ma-south-section-21');
  if (ma_south_section_21) {
    gsap.fromTo('#ma-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'power2.inOut'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
