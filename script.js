// Small progressive enhancements. The site works without this file.

(function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mark the nav link for the section currently in view.
  var links = document.querySelectorAll(".site-nav a[href^='#']");
  var byId = {};
  links.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var target = document.getElementById(id);
    if (target) {
      byId[id] = { link: link, target: target };
    }
  });

  if (!("IntersectionObserver" in window) || Object.keys(byId).length === 0) {
    return;
  }

  var current = null;
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        var id = entry.target.id;
        if (current === id) {
          return;
        }
        if (current && byId[current]) {
          byId[current].link.removeAttribute("aria-current");
        }
        current = id;
        if (byId[id]) {
          byId[id].link.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  Object.keys(byId).forEach(function (id) {
    observer.observe(byId[id].target);
  });
})();
