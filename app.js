/**
 * BDS Case Story Book – North Central Region
 * app.js – Core application logic
 */

/* ═══════════════════════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════════════════════ */

/** Debounce helper */
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

/** Animated counter */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

/** Intersection Observer for fade-in */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Fallback: ensure all fade-in elements become visible after 1.5s
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }, 1500);
}

/** Counter observer – fires once when stat cards enter viewport */
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target.querySelector('.stat-number');
        if (el && !el.dataset.counted) {
          el.dataset.counted = '1';
          animateCounter(el, parseInt(el.dataset.target, 10));
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-card').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOMEPAGE LOGIC
   ═══════════════════════════════════════════════════════════════════════════ */

function initHomepage() {
  if (!document.getElementById('stories-grid')) return;

  /* ── Statistics ───────────────────────────────────────────────────────── */
  const uniqueInterventions = [...new Set(STORIES.map(s => s.intervention))];
  const uniqueDistricts     = [...new Set(STORIES.map(s => s.district))];

  const setTarget = (id, val) => {
    const el = document.getElementById(id);
    if (el) { el.dataset.target = val; el.textContent = '0'; }
  };
  setTarget('stat-stories',       STORIES.length);
  setTarget('stat-officers',      OFFICERS.length);
  setTarget('stat-districts',     uniqueDistricts.length);
  setTarget('stat-interventions', uniqueInterventions.length);

  /* ── Featured story ───────────────────────────────────────────────────── */
  const featured = STORIES.find(s => s.featured) || STORIES[0];
  if (featured) renderFeatured(featured);

  /* ── Recent stories ───────────────────────────────────────────────────── */
  renderStoryCards([...STORIES].slice(0, 6));

  /* ── Officer browse cards ─────────────────────────────────────────────── */
  renderOfficerCards();

  /* ── Intervention chips ───────────────────────────────────────────────── */
  renderInterventionChips();

  /* ── Filter & search state ────────────────────────────────────────────── */
  let activeOfficer      = 'all';
  let activeDistrict     = 'all';
  let activeIntervention = 'all';
  let searchQuery        = '';

  function applyFilters() {
    const filtered = STORIES.filter(s => {
      const matchOfficer      = activeOfficer      === 'all' || s.officer.toLowerCase() === activeOfficer;
      const matchDistrict     = activeDistrict     === 'all' || s.district.toLowerCase() === activeDistrict;
      const matchIntervention = activeIntervention === 'all' || s.intervention === activeIntervention;
      const matchSearch       = !searchQuery || s.beneficiary.toLowerCase().includes(searchQuery) ||
                                s.title.toLowerCase().includes(searchQuery);
      return matchOfficer && matchDistrict && matchIntervention && matchSearch;
    });
    renderStoryCards(filtered);
    updateResultsCount(filtered.length);
  }

  /* Search */
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      searchQuery = searchInput.value.toLowerCase().trim();
      applyFilters();
    }));
  }

  /* Officer filter buttons — use event delegation since cards are rendered dynamically */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-officer-filter]');
    if (!btn) return;
    document.querySelectorAll('[data-officer-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeOfficer = btn.dataset.officerFilter;
    // Scroll up to stories
    const storiesSection = document.getElementById('stories');
    if (storiesSection) storiesSection.scrollIntoView({ behavior: 'smooth' });
    applyFilters();
  });

  /* District filter */
  const districtSelect = document.getElementById('district-filter');
  if (districtSelect) {
    districtSelect.addEventListener('change', () => {
      activeDistrict = districtSelect.value;
      applyFilters();
    });
  }

  /* Intervention filter — use event delegation */
  document.addEventListener('click', e => {
    const chip = e.target.closest('[data-intervention-filter]');
    if (!chip) return;
    document.querySelectorAll('[data-intervention-filter]').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeIntervention = chip.dataset.interventionFilter;
    applyFilters();
  });
}

/* ─── Render helpers ────────────────────────────────────────────────────── */

function renderFeatured(story) {
  const container = document.getElementById('featured-story');
  if (!container) return;
  const officer = OFFICERS.find(o => o.name === story.officer);

  container.innerHTML = `
    <div class="featured-card fade-in">
      <div class="featured-image-wrap">
        <img src="${story.coverImage}" alt="${story.title}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
        <span class="intervention-badge">${story.intervention}</span>
      </div>
      <div class="featured-content">
        <div class="story-meta">
          <span class="district-tag">${story.district}</span>
          <span class="story-id">${story.id}</span>
        </div>
        <h2 class="featured-title">${story.title}</h2>
        <p class="featured-excerpt">${story.summary.split('\n')[0]}</p>
        <div class="featured-footer">
          <div class="officer-mini">
            ${officer ? `<img src="${officer.photo}" alt="${officer.name}" onerror="this.style.display='none'">` : ''}
            <span>${story.officer}</span>
          </div>
          <a href="story.html?id=${story.id}" class="btn-read-more">
            Read Story <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderStoryCards(stories) {
  const grid = document.getElementById('stories-grid');
  if (!grid) return;

  if (!stories.length) {
    grid.innerHTML = `<div class="no-results"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><p>No stories match your search.</p></div>`;
    return;
  }

  grid.innerHTML = stories.map(story => {
    const officer = OFFICERS.find(o => o.name === story.officer);
    return `
      <article class="story-card fade-in" onclick="location.href='story.html?id=${story.id}'">
        <div class="card-image-wrap">
          <img src="${story.coverImage}" alt="${story.title}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
          <span class="card-badge">${story.intervention}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="district-chip">${story.district}</span>
            <span class="story-id-chip">${story.id}</span>
          </div>
          <h3 class="card-title">${story.title}</h3>
          <p class="card-beneficiary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${story.beneficiary}</p>
          <div class="card-footer">
            <div class="officer-mini">
              ${officer ? `<img src="${officer.photo}" alt="${officer.name}" onerror="this.style.display='none'">` : ''}
              <span>${story.officer}</span>
            </div>
            <span class="read-link">Read →</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  initScrollAnimations();
}

function renderOfficerCards() {
  const container = document.getElementById('officers-grid');
  if (!container) return;

  container.innerHTML = OFFICERS.map(officer => {
    const count = STORIES.filter(s => s.officer === officer.name).length;
    return `
      <div class="officer-card fade-in" data-officer-filter="${officer.name.toLowerCase()}">
        <div class="officer-avatar-wrap">
          <img src="${officer.photo}" alt="${officer.name}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
        </div>
        <h4 class="officer-name">${officer.name}</h4>
        <p class="officer-stories">${count} ${count === 1 ? 'Story' : 'Stories'}</p>
        <button class="btn-filter-officer" data-officer-filter="${officer.name.toLowerCase()}">Filter Stories</button>
      </div>
    `;
  }).join('');
}

function renderInterventionChips() {
  const container = document.getElementById('intervention-chips');
  if (!container) return;

  const allChip = `<button class="intervention-chip active" data-intervention-filter="all">All</button>`;
  const chips = Object.keys(INTERVENTIONS).map(key =>
    `<button class="intervention-chip" data-intervention-filter="${key}">${key}</button>`
  ).join('');

  container.innerHTML = allChip + chips;
}

function updateResultsCount(count) {
  const el = document.getElementById('results-count');
  if (el) el.textContent = `${count} ${count === 1 ? 'story' : 'stories'} found`;
}

/* ═══════════════════════════════════════════════════════════════════════════
   STORY DETAIL PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

function initStoryPage() {
  if (!document.getElementById('story-hero')) return;

  const params  = new URLSearchParams(window.location.search);
  const storyId = params.get('id');
  const story   = STORIES.find(s => s.id === storyId);

  if (!story) {
    document.body.innerHTML = `<div style="text-align:center;padding:4rem"><h2>Story not found.</h2><a href="index.html">← Back to stories</a></div>`;
    return;
  }

  const officer = OFFICERS.find(o => o.name === story.officer);

  /* ── Document title ───────────────────────────────────────────────────── */
  document.title = `${story.title} | BDS Case Stories`;

  /* ── Hero ─────────────────────────────────────────────────────────────── */
  const hero = document.getElementById('story-hero');
  if (hero) {
    hero.style.backgroundImage = `url('${story.coverImage}')`;
  }

  /* ── Breadcrumb ───────────────────────────────────────────────────────── */
  setText('story-title-hero', story.title);
  setText('story-id-display', story.id);
  setText('story-district-display', story.district);

  /* ── Overview ─────────────────────────────────────────────────────────── */
  setText('story-title-main', story.title);
  setText('story-intervention-badge', story.intervention);

  const summaryEl = document.getElementById('story-summary');
  if (summaryEl) {
    summaryEl.innerHTML = story.summary.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
  }

  /* ── Beneficiary panel ────────────────────────────────────────────────── */
  setText('ben-name',         story.beneficiary);
  setText('ben-district',     story.district);
  setText('ben-ds',           story.dsDivision);
  setText('ben-gn',           story.gnDivision);

  /* ── Project panel ────────────────────────────────────────────────────── */
  setText('proj-id',          story.id);
  setText('proj-cost',        story.projectCost);
  setText('proj-start',       story.startDate);
  setText('proj-end',         story.endDate);
  setText('proj-intervention',story.intervention);

  /* ── Officer card ─────────────────────────────────────────────────────── */
  if (officer) {
    const img = document.getElementById('officer-photo');
    if (img) { img.src = officer.photo; img.alt = officer.name; }
    setText('officer-name',     officer.name);
    setText('officer-fullname', officer.fullName);
  }

  /* ── Outcomes ─────────────────────────────────────────────────────────── */
  const outcomesEl = document.getElementById('outcomes-list');
  if (outcomesEl) {
    outcomesEl.innerHTML = story.outcomes.map(o =>
      `<li class="outcome-item fade-in"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>${o}</span></li>`
    ).join('');
  }

  /* ── Timeline ─────────────────────────────────────────────────────────── */
  const timelineEl = document.getElementById('timeline-list');
  if (timelineEl) {
    timelineEl.innerHTML = story.timeline.map((t, i) => `
      <div class="timeline-item fade-in">
        <div class="timeline-marker">${i + 1}</div>
        <div class="timeline-content">
          <h4>${t.phase}</h4>
          <p>${t.description}</p>
        </div>
      </div>
    `).join('');
  }

  /* ── Before/After slider ──────────────────────────────────────────────── */
  initBeforeAfterSlider(story.beforeImage, story.afterImage);

  /* ── Related stories ──────────────────────────────────────────────────── */
  const related = STORIES.filter(s => s.id !== story.id &&
    (s.officer === story.officer || s.intervention === story.intervention)).slice(0, 3);
  renderRelatedStories(related);

  /* ── Share buttons ────────────────────────────────────────────────────── */
  initShareButtons(story);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* ─── Before/After Slider ───────────────────────────────────────────────── */
function initBeforeAfterSlider(beforeSrc, afterSrc) {
  const container = document.getElementById('before-after-container');
  if (!container) return;

  container.innerHTML = `
    <div class="ba-wrapper">
      <div class="ba-after">
        <img src="${afterSrc}" alt="After" onerror="this.src='assets/images/placeholder.jpg'">
        <span class="ba-label ba-label-after">After</span>
      </div>
      <div class="ba-before" id="ba-before-div">
        <img src="${beforeSrc}" alt="Before" onerror="this.src='assets/images/placeholder.jpg'">
        <span class="ba-label ba-label-before">Before</span>
      </div>
      <div class="ba-handle" id="ba-handle">
        <div class="ba-handle-circle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  `;

  const wrapper   = container.querySelector('.ba-wrapper');
  const beforeDiv = document.getElementById('ba-before-div');
  const handle    = document.getElementById('ba-handle');
  let dragging    = false;

  function setPosition(x) {
    const rect  = wrapper.getBoundingClientRect();
    const pct   = Math.min(Math.max(((x - rect.left) / rect.width) * 100, 1), 99);
    beforeDiv.style.width = pct + '%';
    handle.style.left     = pct + '%';
  }

  setPosition(wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width / 2);

  handle.addEventListener('mousedown',  () => dragging = true);
  handle.addEventListener('touchstart', () => dragging = true, { passive: true });
  document.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
  document.addEventListener('touchmove', e => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  document.addEventListener('mouseup',  () => dragging = false);
  document.addEventListener('touchend', () => dragging = false);
  wrapper.addEventListener('click', e => setPosition(e.clientX));
}

/* ─── Related Stories ───────────────────────────────────────────────────── */
function renderRelatedStories(stories) {
  const grid = document.getElementById('related-grid');
  if (!grid) return;

  if (!stories.length) {
    grid.closest('section').style.display = 'none';
    return;
  }

  grid.innerHTML = stories.map(story => `
    <a href="story.html?id=${story.id}" class="related-card fade-in">
      <img src="${story.coverImage}" alt="${story.title}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
      <div class="related-body">
        <span class="related-badge">${story.intervention}</span>
        <h4>${story.title}</h4>
        <p>${story.beneficiary}</p>
      </div>
    </a>
  `).join('');
}

/* ─── Share Buttons ─────────────────────────────────────────────────────── */
function initShareButtons(story) {
  const url   = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(story.title);

  const fbBtn = document.getElementById('share-fb');
  const twBtn = document.getElementById('share-tw');
  const cpBtn = document.getElementById('share-copy');

  if (fbBtn) fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  if (twBtn) twBtn.href = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
  if (cpBtn) {
    cpBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        cpBtn.textContent = 'Copied!';
        setTimeout(() => cpBtn.textContent = 'Copy Link', 2000);
      });
    });
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   NAVIGATION & SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════════════════════ */

function initNav() {
  const nav      = document.getElementById('main-nav');
  const hamburger= document.getElementById('hamburger');
  const navMenu  = document.getElementById('nav-menu');

  /* Sticky nav on scroll */
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* Mobile menu toggle */
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }

  /* Smooth scroll for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navMenu) navMenu.classList.remove('open');
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initCounters();
  initHomepage();
  initStoryPage();
});
