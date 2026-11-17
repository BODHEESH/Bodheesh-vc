// Progressive enhancement. The page is fully readable without this file.
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canObserve = "IntersectionObserver" in window;

  // Footer year
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Hero name: each letter rises in, with the accessible name kept on the heading
  var heroName = document.querySelector("h1.name");
  if (heroName && !reduceMotion) {
    heroName.setAttribute("aria-label", "Bodheesh VC");
    var index = 0;
    var splitText = function (node) {
      var fragment = document.createDocumentFragment();
      node.textContent.split("").forEach(function (ch) {
        var span = document.createElement("span");
        span.className = "ch";
        span.setAttribute("aria-hidden", "true");
        span.style.setProperty("--i", index++);
        span.textContent = ch === " " ? " " : ch;
        fragment.appendChild(span);
      });
      node.parentNode.replaceChild(fragment, node);
    };
    Array.prototype.slice.call(heroName.childNodes).forEach(function (node) {
      if (node.nodeType === 3 && node.textContent.trim()) {
        splitText(node);
      }
    });
  }

  // Reading progress along the top edge
  var progress = document.querySelector(".scroll-progress");
  if (progress) {
    var ticking = false;
    var updateProgress = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = "scaleX(" + Math.min(Math.max(ratio, 0), 1) + ")";
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });
    updateProgress();
  }

  // Reveal items (and section rules) as they enter the viewport, once each
  var revealItems = document.querySelectorAll(".reveal, .section");
  if (reduceMotion || !canObserve) {
    revealItems.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealItems.forEach(function (el) { revealObserver.observe(el); });
  }

  // Count up key numbers once they are visible
  var counters = document.querySelectorAll("[data-count]");
  var countUp = function (el) {
    var end = Number(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var format = function (n) { return Math.round(n).toLocaleString("en-IN") + suffix; };
    if (reduceMotion) {
      el.textContent = format(end);
      return;
    }
    var duration = 1400;
    var start = null;
    var step = function (ts) {
      if (start === null) { start = ts; }
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = format(end * eased);
      if (t < 1) { window.requestAnimationFrame(step); }
    };
    el.textContent = format(0);
    window.requestAnimationFrame(step);
  };

  if (canObserve && !reduceMotion) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  // Mark the nav link for the section currently in view
  var navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  var sectionsById = {};
  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var target = document.getElementById(id);
    if (target) {
      sectionsById[id] = { link: link, target: target };
    }
  });

  if (canObserve && Object.keys(sectionsById).length > 0) {
    var current = null;
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || current === entry.target.id) { return; }
        if (current && sectionsById[current]) {
          sectionsById[current].link.removeAttribute("aria-current");
        }
        current = entry.target.id;
        if (sectionsById[current]) {
          sectionsById[current].link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(sectionsById).forEach(function (id) {
      navObserver.observe(sectionsById[id].target);
    });
  }

  // Hanging spider fires a web strand when the pointer comes near it
  var hang = document.querySelector(".hang");
  if (hang && !reduceMotion) {
    var lastShot = 0;
    document.addEventListener("mousemove", function (e) {
      var now = Date.now();
      if (now - lastShot < 2600) return;
      var r = hang.getBoundingClientRect();
      var dx = e.clientX - (r.left + r.width / 2);
      var dy = e.clientY - (r.top + r.height * 0.4);
      if (Math.sqrt(dx * dx + dy * dy) > 160) return;
      lastShot = now;
      // The strand fires toward the side the pointer is on
      hang.style.setProperty("--dir", dx < 0 ? -1 : 1);
      hang.classList.remove("is-shooting");
      void hang.offsetWidth; // restart the animation
      hang.classList.add("is-shooting");
      setTimeout(function () {
        hang.classList.remove("is-shooting");
      }, 1500);
    }, { passive: true });
  }

  // Mobile menu: the Menu button opens every section in one panel
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    var toggleLabel = toggle.querySelector(".nav-toggle-label");
    var setNavOpen = function (open) {
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggleLabel.textContent = open ? "Close" : "Menu";
    };
    toggle.addEventListener("click", function () {
      setNavOpen(!header.classList.contains("nav-open"));
    });
    // Choosing a section closes the panel
    header.addEventListener("click", function (e) {
      if (e.target.closest(".site-nav a")) setNavOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!header.contains(e.target)) setNavOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("nav-open")) {
        setNavOpen(false);
        toggle.focus();
      }
    });
  }
})();
