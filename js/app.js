/* =====================================================================
   ODY — Investor Microsite · App interactions
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------- Reveal on scroll */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  const hasIO = "IntersectionObserver" in window;
  window.observeReveals = function (scope) {
    const els = (scope || document).querySelectorAll(".reveal:not(.is-in), .reveal-stagger:not(.is-in)");
    if (!hasIO) { els.forEach((el) => el.classList.add("is-in")); return; }
    els.forEach((el) => revealObserver.observe(el));
  };
  // Safety net: never leave content hidden if the observer misfires.
  function failsafeReveal() {
    document.querySelectorAll(".reveal:not(.is-in), .reveal-stagger:not(.is-in)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95) el.classList.add("is-in");
    });
  }
  window.addEventListener("load", () => setTimeout(failsafeReveal, 400));

  /* ---------------------------------------------------- Header shrink */
  const header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 8) header.classList.add("is-stuck");
    else header.classList.remove("is-stuck");
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------------------------------------------- Language selector */
  const langsel = document.getElementById("langsel");
  const langselBtn = document.getElementById("langselBtn");
  if (langselBtn) {
    langselBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = langsel.classList.toggle("is-open");
      langselBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll("[data-lang-option]").forEach((opt) => {
      opt.addEventListener("click", () => {
        applyTranslations(opt.getAttribute("data-lang-option"));
        langsel.classList.remove("is-open");
        langselBtn.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", (e) => {
      if (!langsel.contains(e.target)) {
        langsel.classList.remove("is-open");
        langselBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------------------------------- Mobile nav */
  const burger = document.getElementById("burger");
  const mobilenav = document.getElementById("mobilenav");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = burger.classList.toggle("is-open");
      mobilenav.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobilenav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("is-open");
        mobilenav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------------------------------------------- Cap-table tabs */
  const capTabs = document.getElementById("capTabs");
  if (capTabs) {
    const btns = capTabs.querySelectorAll(".tabs__btn");
    const panels = capTabs.querySelectorAll(".tabs__panel");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        btns.forEach((b) => b.classList.toggle("is-active", b === btn));
        panels.forEach((p) => p.classList.toggle("is-active", p.getAttribute("data-panel") === tab));
      });
    });
  }

  /* ---------------------------------------------------- Group structure: rotating country */
  let countryTimer = null;
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function setupCountryCycle() {
    const el = document.getElementById("odyCountryCycle");
    if (!el) return;
    if (countryTimer) { clearInterval(countryTimer); countryTimer = null; }
    const raw = (typeof t === "function") ? t("struct_country_cycle") : "";
    const list = String(raw).split(",").map((s) => s.trim()).filter(Boolean);
    if (!list.length) return;
    let i = 0;
    el.textContent = list[0];
    if (reduceMotion || list.length < 2) return;
    countryTimer = setInterval(() => {
      el.classList.add("is-fading");
      setTimeout(() => {
        i = (i + 1) % list.length;
        el.textContent = list[i];
        el.classList.remove("is-fading");
      }, 400);
    }, 2600);
  }
  document.addEventListener("ody:langchange", setupCountryCycle);

  /* ---------------------------------------------------- Footer year */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------------------------------------------------- Boot */
  document.addEventListener("DOMContentLoaded", boot);
  if (document.readyState !== "loading") boot();
  let booted = false;
  function boot() {
    if (booted) return;
    booted = true;
    initLanguage();      // sets default FR + applies dictionary
    renderAllCharts();   // build all SVG charts/tables
    setupCountryCycle(); // rotating ODY <country> label
    observeReveals();    // fade-in
    onScroll();
  }
})();
