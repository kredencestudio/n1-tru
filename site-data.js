// N1 True Media — Global Data Engine & Synchronization Hub
(function(window) {
  'use strict';

  const STORAGE_KEY = 'n1_site_data';
  const CHANNEL_NAME = 'n1_cms_channel';

  // Fallback default site data in case JSON fetch is blocked or offline
  const DEFAULT_SITE_DATA = {
    general: {
      siteTitle: "N1 True Media — Film Equipment Rental House",
      metaDescription: "Cinema cameras, lenses and production equipment for films, OTT, commercials and music videos in Mumbai and worldwide.",
      brandName: "N1 True Media",
      accentColor: "#54B669",
      adminPin: "admin123"
    },
    nav: {
      ctaText: "Get a Quote →",
      ctaLink: "https://wa.me/919820669798",
      links: [
        { label: "Equipment", url: "#equipment" },
        { label: "Why Us", url: "#why" },
        { label: "Productions", url: "#productions" },
        { label: "Clients", url: "#clients" },
        { label: "Process", url: "#process" },
        { label: "Visit", url: "#visit" }
      ]
    },
    hero: {
      tag: "FILM EQUIPMENT RENTAL HOUSE",
      line1: "YOU BRING THE VISION.",
      line2: "WE BRING THE GEAR.",
      subtitle: "Cinema cameras, lenses and production equipment for films, OTT, commercials, music videos and more — Sony VENICE 2, ARRI ALEXA 35, ALEXA Mini LF, Cooke, Zeiss and more.",
      btn1Text: "Get a Quote →",
      btn1Link: "https://wa.me/919820669798",
      btn2Text: "View Equipment",
      btn2Link: "#equipment",
      scrollText: "SCROLL",
      tapeText: "CAMERAS · LENSES · PRODUCTION GEAR"
    },
    equipment: {
      eyebrow: "Equipment",
      title: "Everything you need <em>to shoot.</em>",
      note: "Gimbals · Tripods · Rigs · Monitors · Follow Focus · Wireless Systems · Grip · Power & More. <b>Lighting, audio and drones also available on request.</b>",
      ctaText: "Check Availability →",
      ctaLink: "https://wa.me/919820669798",
      items: [
        { id: "1", tag: "Camera", name: "SONY VENICE 2", icon: "i-camera", spec: "8.6K Full Frame · 16 Stops DR", accent: "#54B669" },
        { id: "2", tag: "Lens", name: "COOKE S7/i", icon: "i-lens", spec: "Full Frame Plus · T2.0 Primes", accent: "#327270" },
        { id: "3", tag: "Camera", name: "ARRI ALEXA 35", icon: "i-camera", spec: "4.6K Super 35 · 17 Stops DR", accent: "#3C7D52" },
        { id: "4", tag: "Lens", name: "ZEISS SUPREME", icon: "i-lens", spec: "Full Frame · T1.5 High Speed", accent: "#54B669" },
        { id: "5", tag: "Camera", name: "ALEXA MINI LF", icon: "i-camera", spec: "4.5K Large Format · Dual ISO", accent: "#327270" },
        { id: "6", tag: "Lens", name: "SIGNATURE PRIME", icon: "i-lens", spec: "T1.8 Magnesium · Warm Flares", accent: "#3C7D52" },
        { id: "7", tag: "Camera", name: "RED V-RAPTOR", icon: "i-camera", spec: "8K VV 120fps · Compact Carbon", accent: "#54B669" }
      ]
    },
    why: {
      eyebrow: "Why N1",
      title: "The gear is ready.<br>So are we.",
      tags: ["MUMBAI · WORLDWIDE", "CINEMA CAMERAS", "CINEMA LENSES", "PRODUCTION GEAR"],
      items: [
        { id: "1", icon: "i-check", title: "Well-Maintained", text: "Every rental is handled and checked before it goes out." },
        { id: "2", icon: "i-clock", title: "On-Time", text: "Production schedules matter. We get your equipment where it needs to be, when it needs to be there." },
        { id: "3", icon: "i-flex", title: "Flexible", text: "Tell us what your production needs. We'll work around the requirement." },
        { id: "4", icon: "i-target", title: "Ready to Shoot", text: "Visit us, check the equipment and get your setup sorted before the shoot." }
      ]
    },
    productions: {
      eyebrow: "Productions",
      title: "Made for production.<br>One setup,<br><em>many ways to shoot.</em>",
      items: [
        { id: "1", title: "FEATURE FILMS", icon: "i-clapper", desc: "Full-scale film production support", gradient: "linear-gradient(175deg, #1d4d2d 0%, #102e1b 100%)", accent: "#54B669", glow: "rgba(84,182,105,0.45)" },
        { id: "2", title: "OTT & WEB SERIES", icon: "i-play", desc: "Episodic and streaming content", gradient: "linear-gradient(175deg, #184b34 0%, #0d2c1f 100%)", accent: "#45c47f", glow: "rgba(69,196,127,0.45)" },
        { id: "3", title: "COMMERCIALS", icon: "i-megaphone", desc: "Brand films and ad campaigns", gradient: "linear-gradient(175deg, #14483b 0%, #0b2b23 100%)", accent: "#36baa0", glow: "rgba(54,186,160,0.45)" },
        { id: "4", title: "MUSIC VIDEOS", icon: "i-music", desc: "Performance and narrative videos", gradient: "linear-gradient(175deg, #114442 0%, #082928 100%)", accent: "#2bb1b9", glow: "rgba(43,177,185,0.45)" },
        { id: "5", title: "MADE FOR PRODUCTION", icon: "i-target", desc: "Everything under one roof", gradient: "linear-gradient(175deg, #226139 0%, #123d21 100%)", accent: "#54B669", glow: "rgba(84,182,105,0.65)" },
        { id: "6", title: "CORPORATE FILMS", icon: "i-briefcase", desc: "Corporate and internal content", gradient: "linear-gradient(175deg, #124045 0%, #09272b 100%)", accent: "#23a1b8", glow: "rgba(35,161,184,0.45)" },
        { id: "7", title: "DIGITAL CONTENT", icon: "i-phone", desc: "Social-first video content", gradient: "linear-gradient(175deg, #133c4a 0%, #0a232e 100%)", accent: "#2394b8", glow: "rgba(35,148,184,0.45)" },
        { id: "8", title: "EVENTS & WEDDINGS", icon: "i-heart", desc: "Live coverage and films", gradient: "linear-gradient(175deg, #15354e 0%, #0b1f30 100%)", accent: "#2c83be", glow: "rgba(44,131,190,0.45)" },
        { id: "9", title: "AERIAL & SPECIALTY", icon: "i-drone", desc: "Drone and specialty rigs", gradient: "linear-gradient(175deg, #172e4e 0%, #0b192e 100%)", accent: "#3172b8", glow: "rgba(49,114,184,0.45)" }
      ]
    },
    clients: {
      eyebrow: "Our Clients",
      title: "Trusted on<br><em>professional</em><br>productions.",
      subText: "EQUIPMENT SUPPLIED FOR PRODUCTIONS ACROSS FILM, OTT & DIGITAL MEDIA — MUMBAI BASED, SERVING PRODUCTIONS WORLDWIDE",
      planets: [
        { id: "prime", name: "Prime Video", orbit: "inner", className: "p-prime", orbClass: "orb-prime", pillClass: "pill-prime" },
        { id: "sonyliv", name: "Sony LIV", orbit: "inner", className: "p-sonyliv", orbClass: "orb-sonyliv", pillClass: "pill-sonyliv" },
        { id: "hotstar", name: "Hotstar", orbit: "outer", className: "p-hotstar", orbClass: "orb-hotstar", pillClass: "pill-hotstar" },
        { id: "zee5", name: "Zee5", orbit: "outer", className: "p-zee5", orbClass: "orb-zee5", pillClass: "pill-zee5" },
        { id: "altbalaji", name: "ALTBalaji", orbit: "outer", className: "p-altbalaji", orbClass: "orb-altbalaji", pillClass: "pill-altbalaji" }
      ]
    },
    process: {
      eyebrow: "Process",
      title: "From enquiry <em>to set.</em>",
      steps: [
        { num: "01", title: "Tell Us", desc: "Share your shoot date, location and equipment requirements." },
        { num: "02", title: "Get Your Quote", desc: "We'll check availability and send you the rental quote." },
        { num: "03", title: "View the Gear", desc: "Come to our office, see the equipment and discuss your setup." },
        { num: "04", title: "Get Set", desc: "Collect your equipment or arrange delivery and get ready to shoot." }
      ]
    },
    visit: {
      eyebrow: "Visit Us",
      title: "Come see<br>the gear.",
      subtitle: "Based in Mumbai — equipping productions across India and worldwide.",
      addressLines: "3/25, Unnat Nagar No. 4, C.C.I. Colony,\nNear Jain Hospital, M.G. Road,\nGoregaon (W), Mumbai – 400104",
      mapsUrl: "https://share.google/kKq9NAiRLvvJNbhTm",
      phone: "+91 98206 69798",
      email: "hello.n1truemedia@gmail.com",
      mapEmbedUrl: "https://maps.google.com/maps?q=3%2F25%2C%20Unnat%20Nagar%20No.%204%2C%20C.C.I.%20Colony%2C%20Near%20Jain%20Hospital%2C%20M.G.%20Road%2C%20Goregaon%20West%2C%20Mumbai%20400104&t=&z=16&ie=UTF8&iwloc=&output=embed",
      mapBadge: "N1 True Media · Goregaon (W), Mumbai"
    },
    finalCta: {
      eyebrow: "Ready to Roll?",
      title: "Tell us what you're shooting.<br>We'll arrange the gear.",
      subtitle: "Cameras · Lenses · Production Equipment",
      btn1Text: "Get Your Quote →",
      btn1Link: "https://wa.me/919820669798",
      btn2Text: "Call +91 98206 69798",
      btn2Link: "tel:+919820669798"
    },
    footer: {
      copyright: "© 2026 N1 TRUE MEDIA. ALL RIGHTS RESERVED.",
      location: "MUMBAI, INDIA",
      instagram: "#",
      whatsapp: "https://wa.me/919820669798",
      maps: "https://share.google/kKq9NAiRLvvJNbhTm"
    }
  };

  let cachedData = null;
  const updateCallbacks = [];
  let broadcastChannel = null;

  try {
    if (typeof BroadcastChannel !== 'undefined') {
      broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
      broadcastChannel.onmessage = (evt) => {
        if (evt.data && evt.data.type === 'DATA_UPDATED') {
          cachedData = evt.data.payload;
          triggerCallbacks(cachedData);
        }
      };
    }
  } catch (err) {
    console.warn('BroadcastChannel not available:', err);
  }

  // Cross-tab fallback via storage events
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        cachedData = JSON.parse(e.newValue);
        triggerCallbacks(cachedData);
      } catch (err) {
        console.error('Failed to parse storage update:', err);
      }
    }
  });

  function triggerCallbacks(data) {
    updateCallbacks.forEach(fn => {
      try { fn(data); } catch (err) { console.error('Callback error:', err); }
    });
  }

  // Deep clone helper
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  // Deep merge helper
  function deepMerge(target, source) {
    if (!source) return target;
    const output = Object.assign({}, target);
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
          output[key] = deepMerge(target[key] || {}, source[key]);
        } else {
          output[key] = source[key];
        }
      }
    }
    return output;
  }

  const N1Data = {
    getDefaults: function() {
      return deepClone(DEFAULT_SITE_DATA);
    },

    get: function() {
      if (cachedData) return cachedData;
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          cachedData = deepMerge(deepClone(DEFAULT_SITE_DATA), JSON.parse(stored));
          return cachedData;
        }
      } catch (err) {
        console.warn('Error reading from localStorage:', err);
      }
      cachedData = deepClone(DEFAULT_SITE_DATA);
      return cachedData;
    },

    loadAsync: async function() {
      try {
        let res = null;
        try {
          res = await fetch('/api/get-content');
        } catch(e) {}
        if (!res || !res.ok) {
          try {
            res = await fetch('/site-data.json?t=' + Date.now());
          } catch(e) {}
        }
        if (res && res.ok) {
          const json = await res.json();
          cachedData = deepMerge(deepClone(DEFAULT_SITE_DATA), json);
          try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedData)); } catch(e){}
          return cachedData;
        }
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          cachedData = deepMerge(deepClone(DEFAULT_SITE_DATA), JSON.parse(stored));
          return cachedData;
        }
      } catch (err) {
        console.warn('Could not fetch site-data.json, using defaults:', err);
      }
      cachedData = deepClone(DEFAULT_SITE_DATA);
      return cachedData;
    },

    save: function(newData) {
      cachedData = deepClone(newData);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedData));
      } catch (err) {
        console.error('Error saving to localStorage:', err);
      }

      // Broadcast to other open tabs or preview iframe
      if (broadcastChannel) {
        try {
          broadcastChannel.postMessage({ type: 'DATA_UPDATED', payload: cachedData });
        } catch (err) {
          console.warn('Broadcast failed:', err);
        }
      }

      // Try background sync with local dev server if available
      try {
        fetch('/api/save-content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cachedData)
        }).catch(() => {
          // Silent catch for static hosting environments
        });
      } catch (err) {
        // No dev server running
      }

      triggerCallbacks(cachedData);
      return cachedData;
    },

    reset: function() {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {}
      cachedData = deepClone(DEFAULT_SITE_DATA);
      if (broadcastChannel) {
        try {
          broadcastChannel.postMessage({ type: 'DATA_UPDATED', payload: cachedData });
        } catch (err) {}
      }
      triggerCallbacks(cachedData);
      return cachedData;
    },

    onUpdate: function(callback) {
      if (typeof callback === 'function') {
        updateCallbacks.push(callback);
      }
    },

    exportJSON: function() {
      const data = this.get();
      return JSON.stringify(data, null, 2);
    },

    importJSON: function(jsonStr) {
      try {
        const parsed = JSON.parse(jsonStr);
        const merged = deepMerge(deepClone(DEFAULT_SITE_DATA), parsed);
        this.save(merged);
        return { success: true, data: merged };
      } catch (err) {
        return { success: false, error: err.message };
      }
    },

    // Apply data directly to DOM of the main public website
    applyToDOM: function(data) {
      if (!data) data = this.get();

      // Brand color and theme
      if (data.general && data.general.accentColor) {
        document.documentElement.style.setProperty('--green', data.general.accentColor);
      }
      if (data.general && data.general.siteTitle) {
        document.title = data.general.siteTitle;
      }

      // Nav CTA
      const navCta = document.querySelector('.nav-cta');
      if (navCta && data.nav) {
        if (data.nav.ctaText) navCta.textContent = data.nav.ctaText;
        if (data.nav.ctaLink) navCta.href = data.nav.ctaLink;
      }

      // Hero
      if (data.hero) {
        const heroTag = document.getElementById('heroTag');
        if (heroTag && data.hero.tag) heroTag.textContent = data.hero.tag;

        const line1 = document.querySelector('.hero-line.line-1 span');
        if (line1 && data.hero.line1) line1.textContent = data.hero.line1;

        const line2 = document.querySelector('.hero-line.line-2 span');
        if (line2 && data.hero.line2) line2.textContent = data.hero.line2;

        const heroSub = document.getElementById('heroSub');
        if (heroSub && data.hero.subtitle) heroSub.textContent = data.hero.subtitle;

        const heroBtns = document.getElementById('heroBtns');
        if (heroBtns) {
          const btn1 = heroBtns.querySelector('.btn-primary');
          if (btn1) {
            if (data.hero.btn1Text) btn1.textContent = data.hero.btn1Text;
            if (data.hero.btn1Link) btn1.href = data.hero.btn1Link;
          }
          const btn2 = heroBtns.querySelector('.btn-outline');
          if (btn2) {
            if (data.hero.btn2Text) btn2.textContent = data.hero.btn2Text;
            if (data.hero.btn2Link) btn2.href = data.hero.btn2Link;
          }
        }

        const heroTape = document.querySelector('.hero-tape');
        if (heroTape && data.hero.tapeText) heroTape.textContent = data.hero.tapeText;

        const scrollTxt = document.querySelector('.hero-scroll-txt');
        if (scrollTxt && data.hero.scrollText) scrollTxt.textContent = data.hero.scrollText;
      }

      // Equipment Headings
      if (data.equipment) {
        const equipEyebrow = document.querySelector('#equipment .eyebrow');
        if (equipEyebrow && data.equipment.eyebrow) equipEyebrow.textContent = data.equipment.eyebrow;

        const equipTitle = document.querySelector('#equipment .sec-title');
        if (equipTitle && data.equipment.title) equipTitle.innerHTML = data.equipment.title;

        const equipNote = document.querySelector('.equip-note');
        if (equipNote && data.equipment.note) equipNote.innerHTML = data.equipment.note;

        const equipCta = document.querySelector('.equip-cta a');
        if (equipCta) {
          if (data.equipment.ctaText) equipCta.textContent = data.equipment.ctaText;
          if (data.equipment.ctaLink) equipCta.href = data.equipment.ctaLink;
        }
      }

      // Why N1
      if (data.why) {
        const whyEyebrow = document.querySelector('#why .eyebrow');
        if (whyEyebrow && data.why.eyebrow) whyEyebrow.textContent = data.why.eyebrow;

        const whyTitle = document.querySelector('#why .sec-title');
        if (whyTitle && data.why.title) whyTitle.innerHTML = data.why.title;

        const tagsContainer = document.querySelector('.why-tags');
        if (tagsContainer && Array.isArray(data.why.tags)) {
          tagsContainer.innerHTML = data.why.tags.map(t => `<div class="why-tag">${t}</div>`).join('');
        }
      }

      // Productions
      if (data.productions) {
        const prodEyebrow = document.querySelector('#productions .eyebrow');
        if (prodEyebrow && data.productions.eyebrow) prodEyebrow.textContent = data.productions.eyebrow;

        const prodTitle = document.querySelector('#productions .sec-title');
        if (prodTitle && data.productions.title) prodTitle.innerHTML = data.productions.title;

        if (window.rebuildProductions && Array.isArray(data.productions.items)) {
          window.rebuildProductions(data.productions.items);
        }
      }

      // Clients
      if (data.clients) {
        const sunEyebrow = document.querySelector('.sun-eyebrow');
        if (sunEyebrow && data.clients.eyebrow) sunEyebrow.textContent = data.clients.eyebrow;

        const sunTitle = document.querySelector('.sun-title');
        if (sunTitle && data.clients.title) sunTitle.innerHTML = data.clients.title;

        const clientsSub = document.querySelector('.clients-sub');
        if (clientsSub && data.clients.subText) clientsSub.textContent = data.clients.subText;
      }

      // Process
      if (data.process) {
        const procEyebrow = document.querySelector('#process .eyebrow');
        if (procEyebrow && data.process.eyebrow) procEyebrow.textContent = data.process.eyebrow;

        const procTitle = document.querySelector('#process .sec-title');
        if (procTitle && data.process.title) procTitle.innerHTML = data.process.title;
      }

      // Visit
      if (data.visit) {
        const visitEyebrow = document.querySelector('#visit .eyebrow');
        if (visitEyebrow && data.visit.eyebrow) visitEyebrow.textContent = data.visit.eyebrow;

        const visitTitle = document.querySelector('#visit .sec-title');
        if (visitTitle && data.visit.title) visitTitle.innerHTML = data.visit.title;

        const visitSub = document.querySelector('#visit p[style*="var(--paper-60)"]');
        if (visitSub && data.visit.subtitle) visitSub.textContent = data.visit.subtitle;

        const addrBlock = document.querySelector('.visit-info .info-block:nth-child(1) .val');
        if (addrBlock) {
          if (data.visit.addressLines) addrBlock.innerHTML = data.visit.addressLines.replace(/\n/g, '<br>');
          if (data.visit.mapsUrl) addrBlock.href = data.visit.mapsUrl;
        }

        const phoneLink = document.querySelector('.visit-info a[href^="tel:"]');
        if (phoneLink && data.visit.phone) {
          phoneLink.href = 'tel:' + data.visit.phone.replace(/\s+/g, '');
          phoneLink.textContent = data.visit.phone;
        }

        const emailLink = document.querySelector('.visit-info a[href^="mailto:"]');
        if (emailLink && data.visit.email) {
          emailLink.href = 'mailto:' + data.visit.email;
          emailLink.textContent = data.visit.email;
        }

        const dirBtn = document.querySelector('.visit-btns a.btn-primary');
        if (dirBtn && data.visit.mapsUrl) dirBtn.href = data.visit.mapsUrl;

        const callBtn = document.querySelector('.visit-btns a.btn-outline');
        if (callBtn && data.visit.phone) callBtn.href = 'tel:' + data.visit.phone.replace(/\s+/g, '');

        const mapIframe = document.querySelector('.map-iframe');
        if (mapIframe && data.visit.mapEmbedUrl) mapIframe.src = data.visit.mapEmbedUrl;

        const mapBadgeText = document.querySelector('.map-badge span:last-child');
        if (mapBadgeText && data.visit.mapBadge) mapBadgeText.textContent = data.visit.mapBadge;
      }

      // Final CTA
      if (data.finalCta) {
        const finalEyebrow = document.querySelector('.final-cta .eyebrow');
        if (finalEyebrow && data.finalCta.eyebrow) finalEyebrow.textContent = data.finalCta.eyebrow;

        const finalTitle = document.querySelector('.final-cta .sec-title');
        if (finalTitle && data.finalCta.title) finalTitle.innerHTML = data.finalCta.title;

        const finalSub = document.querySelector('.final-cta p');
        if (finalSub && data.finalCta.subtitle) finalSub.textContent = data.finalCta.subtitle;

        const finalBtn1 = document.querySelector('.final-btns .btn-primary');
        if (finalBtn1) {
          if (data.finalCta.btn1Text) finalBtn1.textContent = data.finalCta.btn1Text;
          if (data.finalCta.btn1Link) finalBtn1.href = data.finalCta.btn1Link;
        }

        const finalBtn2 = document.querySelector('.final-btns .btn-outline');
        if (finalBtn2) {
          if (data.finalCta.btn2Text) finalBtn2.textContent = data.finalCta.btn2Text;
          if (data.finalCta.btn2Link) finalBtn2.href = data.finalCta.btn2Link;
        }
      }

      // Footer
      if (data.footer) {
        const footBottomDivs = document.querySelectorAll('.foot-bottom div');
        if (footBottomDivs.length >= 2) {
          if (data.footer.copyright) footBottomDivs[0].textContent = data.footer.copyright;
          if (data.footer.location) footBottomDivs[1].textContent = data.footer.location;
        }

        const instaLink = document.querySelector('.foot-social a[aria-label="Instagram"]');
        if (instaLink && data.footer.instagram) instaLink.href = data.footer.instagram;

        const waLink = document.querySelector('.foot-social a[aria-label="WhatsApp"]');
        if (waLink && data.footer.whatsapp) waLink.href = data.footer.whatsapp;

        const mapsLink = document.querySelector('.foot-social a[aria-label="Maps"]');
        if (mapsLink && data.footer.maps) mapsLink.href = data.footer.maps;
      }

      // Trigger dynamic rebuilders if defined on window
      if (typeof window.rebuildEquipmentCarousel === 'function') {
        window.rebuildEquipmentCarousel(data.equipment ? data.equipment.items : null);
      }
      if (typeof window.rebuildWhyAccordion === 'function') {
        window.rebuildWhyAccordion(data.why ? data.why.items : null);
      }
      if (typeof window.rebuildProductions === 'function') {
        window.rebuildProductions(data.productions ? data.productions.items : null);
      }
      if (typeof window.rebuildClients === 'function') {
        window.rebuildClients(data.clients ? data.clients.planets : null);
      }
      if (typeof window.rebuildProcess === 'function') {
        window.rebuildProcess(data.process ? data.process.steps : null);
      }
    }
  };

  window.N1Data = N1Data;

  // Auto-init on page load if in browser
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => N1Data.get());
    } else {
      N1Data.get();
    }
  }

})(typeof window !== 'undefined' ? window : this);
