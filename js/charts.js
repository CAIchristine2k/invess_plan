/* =====================================================================
   ODY — Investor Microsite · SVG chart engine
   Hand-built donuts, ecosystem diagram, roadmap, orbit, pipeline.
   All labels resolve via t() so charts re-render on language change.
   ===================================================================== */

const SVGNS = "http://www.w3.org/2000/svg";
function svgEl(name, attrs) {
  const el = document.createElementNS(SVGNS, name);
  if (attrs) for (const k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}
function polar(cx, cy, r, deg) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function arcPath(cx, cy, rOuter, rInner, startDeg, endDeg) {
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const o1 = polar(cx, cy, rOuter, startDeg);
  const o2 = polar(cx, cy, rOuter, endDeg);
  const i2 = polar(cx, cy, rInner, endDeg);
  const i1 = polar(cx, cy, rInner, startDeg);
  return [
    `M ${o1.x} ${o1.y}`,
    `A ${rOuter} ${rOuter} 0 ${large} 1 ${o2.x} ${o2.y}`,
    `L ${i2.x} ${i2.y}`,
    `A ${rInner} ${rInner} 0 ${large} 0 ${i1.x} ${i1.y}`,
    "Z",
  ].join(" ");
}

/* ------------------------------------------------------------------ */
/* DONUT CHART                                                        */
/* segments: [{ value, color, key }]; centerValue/centerLabel optional */
/* ------------------------------------------------------------------ */
function renderDonut(host, segments, opts) {
  opts = opts || {};
  host.innerHTML = "";
  const size = 240, cx = 120, cy = 120, rOuter = 108, rInner = 70;
  const gap = segments.length > 1 ? 2.2 : 0; // degrees between segments
  const total = segments.reduce((s, x) => s + x.value, 0);

  const svg = svgEl("svg", { class: "donut-svg", viewBox: `0 0 ${size} ${size}`, role: "img" });

  let cursor = 0;
  const paths = [];
  segments.forEach((seg, i) => {
    const sweep = (seg.value / total) * 360;
    let start = cursor + (segments.length > 1 ? gap / 2 : 0);
    let end = cursor + sweep - (segments.length > 1 ? gap / 2 : 0);
    if (end <= start) end = start + 0.01;
    const p = svgEl("path", {
      d: arcPath(cx, cy, rOuter, rInner, start, end),
      fill: seg.color,
      class: "donut-seg",
    });
    p.dataset.key = seg.key || i;
    // Soft load animation
    p.style.opacity = "0";
    p.style.transform = "scale(.92)";
    p.style.transitionDelay = i * 70 + "ms";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      p.style.opacity = "1";
      p.style.transform = "scale(1)";
    }));
    svg.appendChild(p);
    paths.push(p);

    if (opts.onHover) {
      p.addEventListener("mouseenter", () => opts.onHover(seg.key, paths, segments));
      p.addEventListener("mouseleave", () => opts.onLeave && opts.onLeave(paths));
    }
    cursor += sweep;
  });

  // Center text
  if (opts.centerValue) {
    const v = svgEl("text", { x: cx, y: cy - 2, "text-anchor": "middle", class: "donut-center-value" });
    v.setAttribute("font-size", opts.centerValueSize || "30");
    v.textContent = opts.centerValue;
    svg.appendChild(v);
  }
  if (opts.centerLabel) {
    const l = svgEl("text", { x: cx, y: cy + 20, "text-anchor": "middle", class: "donut-center-label" });
    l.textContent = opts.centerLabel;
    svg.appendChild(l);
  }
  host.appendChild(svg);
  return paths;
}

/* ------------------------------------------------------------------ */
/* CAP TABLE charts + tables                                          */
/* ------------------------------------------------------------------ */
const CAP_COLORS = { f1: "#4338CA", f2: "#6366F1", f3: "#8B8AF5", founders: "#4338CA", investor: "#C2820B" };
const TOTAL_SHARES = 10000; // total share count of the company

function fmtNum(n) {
  const loc = currentLang === "fr" ? "fr-FR" : currentLang === "zh" ? "zh-CN" : "en-US";
  try {
    return new Intl.NumberFormat(loc).format(n);
  } catch (e) {
    return String(n);
  }
}

function renderCapTables() {
  // CURRENT — three founders, 10,000 shares total
  const current = [
    { key: "f1", labelKey: "cap_founder1", shares: 3333, pct: 33.33, color: CAP_COLORS.f1 },
    { key: "f2", labelKey: "cap_founder2", shares: 3333, pct: 33.33, color: CAP_COLORS.f2 },
    { key: "f3", labelKey: "cap_founder3", shares: 3334, pct: 33.33, color: CAP_COLORS.f3 },
  ];
  renderDonut(
    document.getElementById("capChartCurrent"),
    current.map((c) => ({ value: c.pct, color: c.color, key: c.key })),
    { centerValue: "100%", centerLabel: t("cap_founders") }
  );
  const cb = document.getElementById("capTableCurrentBody");
  cb.innerHTML = "";
  current.forEach((c) => {
    const tr = document.createElement("tr");
    tr.innerHTML =
      `<td><span class="cap-cell"><span class="cap-swatch" style="background:${c.color}"></span>${t(c.labelKey)}</span></td>` +
      `<td>${fmtNum(c.shares)}</td>` +
      `<td class="num cap-pct">${c.pct.toFixed(2)}%</td>`;
    cb.appendChild(tr);
  });
  const currentTotal = current.reduce((s, c) => s + c.shares, 0);
  const trTotal = document.createElement("tr");
  trTotal.className = "is-total";
  trTotal.innerHTML = `<td>Total</td><td>${fmtNum(currentTotal)}</td><td class="num">100%</td>`;
  cb.appendChild(trTotal);

  // POST — founders 90% + investor 10% (10,000 shares total)
  const post = [
    { key: "founders", labelKey: "cap_founders", shares: 9000, pct: 90, color: CAP_COLORS.founders },
    { key: "investor", labelKey: "cap_investor", shares: 1000, pct: 10, color: CAP_COLORS.investor },
  ];
  renderDonut(
    document.getElementById("capChartPost"),
    post.map((c) => ({ value: c.pct, color: c.color, key: c.key })),
    { centerValue: "100%", centerLabel: t("cap_tab_post") }
  );
  const pb = document.getElementById("capTablePostBody");
  pb.innerHTML = "";
  post.forEach((c) => {
    const tr = document.createElement("tr");
    tr.innerHTML =
      `<td><span class="cap-cell"><span class="cap-swatch" style="background:${c.color}"></span>${t(c.labelKey)}</span></td>` +
      `<td>${fmtNum(c.shares)}</td>` +
      `<td class="num cap-pct">${c.pct}%</td>`;
    pb.appendChild(tr);
  });
  const pTotal = document.createElement("tr");
  pTotal.className = "is-total";
  pTotal.innerHTML = `<td>Total</td><td>${fmtNum(TOTAL_SHARES)}</td><td class="num">100%</td>`;
  pb.appendChild(pTotal);
}

/* ------------------------------------------------------------------ */
/* USE OF FUNDS — donut + interactive allocation list                 */
/* ------------------------------------------------------------------ */
const RAISE_TOTAL = 1000000; // €1,000,000 target round
function fmtEur(amount) {
  const loc = currentLang === "fr" ? "fr-FR" : currentLang === "zh" ? "zh-CN" : "en-US";
  try {
    return new Intl.NumberFormat(loc, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(amount);
  } catch (e) {
    return amount.toLocaleString() + " €";
  }
}
const FUNDS = [
  { key: "f1", titleKey: "funds_1_title", pct: 35, color: "#4338CA", details: ["funds_1_d1","funds_1_d2","funds_1_d3","funds_1_d4","funds_1_d5","funds_1_d6","funds_1_d7"] },
  { key: "f2", titleKey: "funds_2_title", pct: 30, color: "#6366F1", details: ["funds_2_d1","funds_2_d2","funds_2_d3","funds_2_d4","funds_2_d5","funds_2_d6","funds_2_d7"] },
  { key: "f3", titleKey: "funds_3_title", pct: 20, color: "#0F9D78", details: ["funds_3_d1","funds_3_d2","funds_3_d3","funds_3_d4","funds_3_d5"] },
  { key: "f4", titleKey: "funds_4_title", pct: 10, color: "#C2820B", details: ["funds_4_d1","funds_4_d2","funds_4_d3","funds_4_d4","funds_4_d5"] },
  { key: "f5", titleKey: "funds_5_title", pct: 5, color: "#BE3455", details: ["funds_5_d1","funds_5_d2","funds_5_d3","funds_5_d4"] },
];

function renderFunds() {
  const host = document.getElementById("fundsDonut");
  const list = document.getElementById("fundsList");

  const paths = renderDonut(
    host,
    FUNDS.map((f) => ({ value: f.pct, color: f.color, key: f.key })),
    {
      centerValue: t("funds_raise_value"),
      centerValueSize: "28",
      centerLabel: t("funds_raise_label"),
      onHover: (key, paths) => {
        paths.forEach((p) => p.classList.toggle("is-dim", p.dataset.key !== key));
        const item = list.querySelector(`[data-fund="${key}"]`);
        if (item) item.classList.add("is-hot");
      },
      onLeave: (paths) => {
        paths.forEach((p) => p.classList.remove("is-dim"));
        list.querySelectorAll(".fund-item").forEach((i) => i.classList.remove("is-hot"));
      },
    }
  );

  list.innerHTML = "";
  FUNDS.forEach((f) => {
    const item = document.createElement("div");
    item.className = "fund-item";
    item.dataset.fund = f.key;
    item.innerHTML =
      `<div class="fund-item__top">` +
        `<span class="fund-item__swatch" style="background:${f.color}"></span>` +
        `<span class="fund-item__name">${t(f.titleKey)}</span>` +
        `<span class="fund-item__amount">${fmtEur((f.pct / 100) * RAISE_TOTAL)}</span>` +
        `<span class="fund-item__pct" style="color:${f.color}">${f.pct}%</span>` +
        `<span class="fund-item__toggle">+</span>` +
      `</div>` +
      `<div class="fund-item__bar"><span style="background:${f.color}"></span></div>` +
      `<ul class="fund-item__list">${f.details.map((d) => `<li>${t(d)}</li>`).join("")}</ul>`;

    // bar fill (animate when in view)
    const fill = item.querySelector(".fund-item__bar span");
    item._fillTo = f.pct + "%";

    // expand/collapse
    item.querySelector(".fund-item__top").addEventListener("click", () => {
      item.classList.toggle("is-open");
    });
    // hover sync with donut
    item.addEventListener("mouseenter", () => {
      paths.forEach((p) => p.classList.toggle("is-dim", p.dataset.key !== f.key));
    });
    item.addEventListener("mouseleave", () => paths.forEach((p) => p.classList.remove("is-dim")));

    list.appendChild(item);
  });

  // animate bars when section enters viewport
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        list.querySelectorAll(".fund-item").forEach((item, i) => {
          const fill = item.querySelector(".fund-item__bar span");
          setTimeout(() => { fill.style.width = item._fillTo; }, i * 90);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  obs.observe(list);
}

/* ------------------------------------------------------------------ */
/* ECOSYSTEM DIAGRAM (flow: Consumer ↔ Merchant ↔ Financial)          */
/* ------------------------------------------------------------------ */
function renderEcoDiagram() {
  const host = document.getElementById("ecoDiagram");
  const nodes = [
    { titleKey: "eco_app_title", tagKey: "eco_app_tag", color: "#4338CA" },
    { titleKey: "eco_pro_title", tagKey: "eco_pro_tag", color: "#6366F1" },
    { titleKey: "eco_pay_title", tagKey: "eco_pay_tag", color: "#0F9D78" },
  ];
  host.innerHTML =
    `<div class="ecoflow">` +
    nodes.map((n, i) =>
      `<div class="ecoflow__node" style="--nc:${n.color}">` +
        `<span class="ecoflow__tag">${t(n.tagKey)}</span>` +
        `<span class="ecoflow__title">${t(n.titleKey)}</span>` +
      `</div>` +
      (i < nodes.length - 1 ? `<div class="ecoflow__link" aria-hidden="true"><span></span><span></span></div>` : "")
    ).join("") +
    `</div>`;
}

/* ------------------------------------------------------------------ */
/* ROADMAP TIMELINE                                                   */
/* ------------------------------------------------------------------ */
const ROADMAP = [
  { titleKey: "road_1_title", introKey: "road_1_intro", objs: ["road_1_o1","road_1_o2","road_1_o3","road_1_o4"] },
  { titleKey: "road_2_title", introKey: "road_2_intro", objs: ["road_2_o1","road_2_o2","road_2_o3","road_2_o4"] },
  { titleKey: "road_3_title", introKey: "road_3_intro", objs: ["road_3_o1","road_3_o2","road_3_o3","road_3_o4"] },
  { titleKey: "road_4_title", introKey: "road_4_intro", objs: ["road_4_o1"], streamsKey: "road_4_streams", streams: ["road_4_s1","road_4_s2","road_4_s3","road_4_s4","road_4_s5","road_4_s6"] },
  { titleKey: "road_5_title", introKey: "road_5_intro", objs: ["road_5_o1","road_5_o2","road_5_o3","road_5_o4"] },
];

function renderRoadmap() {
  const host = document.getElementById("timeline");
  host.innerHTML = "";
  ROADMAP.forEach((r, i) => {
    const item = document.createElement("div");
    item.className = "tl-item reveal";
    let streamsHtml = "";
    if (r.streams) {
      streamsHtml =
        `<div class="tl-streams">` +
          `<div class="tl-streams__title">${t(r.streamsKey)}</div>` +
          `<div class="tl-chips">${r.streams.map((s) => `<span class="tl-chip">${t(s)}</span>`).join("")}</div>` +
        `</div>`;
    }
    item.innerHTML =
      `<div class="tl-node">${String(i + 1).padStart(2, "0")}</div>` +
      `<div class="tl-card">` +
        `<h3 class="tl-card__title">${t(r.titleKey)}</h3>` +
        `<p class="tl-card__intro">${t(r.introKey)}</p>` +
        `<ul class="tl-obj">${r.objs.map((o) => `<li>${t(o)}</li>`).join("")}</ul>` +
        streamsHtml +
      `</div>`;
    host.appendChild(item);
  });
  // re-observe new reveal elements
  if (window.observeReveals) window.observeReveals(host);
}

/* ------------------------------------------------------------------ */
/* ORBIT (Vision at 18 months) — 5 platform nodes around ODY core     */
/* ------------------------------------------------------------------ */
function renderOrbit() {
  const host = document.getElementById("orbitNodes");
  const orbit = document.getElementById("orbit");
  if (!host) return;
  const keys = ["v18_p1", "v18_p2", "v18_p3", "v18_p4", "v18_p5"];
  host.innerHTML = "";

  // connecting lines (SVG)
  const old = orbit.querySelector(".orbit__lines");
  if (old) old.remove();
  const ring = orbit.querySelector(".orbit__ring");
  if (ring) ring.remove();

  const svg = svgEl("svg", { class: "orbit__lines", viewBox: "0 0 560 560", preserveAspectRatio: "xMidYMid meet" });
  const cx = 280, cy = 280, R = 195;
  keys.forEach((k, i) => {
    const ang = (i / keys.length) * 360 - 90;
    const pt = polar(cx, cy, R, ang + 90);
    const line = svgEl("line", { x1: cx, y1: cy, x2: pt.x, y2: pt.y, stroke: "rgba(255,255,255,.16)", "stroke-width": "1" });
    svg.appendChild(line);
  });
  orbit.appendChild(svg);

  // decorative ring (sized in CSS as % of the orbit so it scales fluidly)
  const r = document.createElement("div");
  r.className = "orbit__ring";
  orbit.appendChild(r);

  keys.forEach((k, i) => {
    const ang = (i / keys.length) * 360 - 90;
    const a = (ang * Math.PI) / 180;
    const x = 50 + (R / 560) * 100 * Math.cos(a);
    const y = 50 + (R / 560) * 100 * Math.sin(a);
    const node = document.createElement("div");
    node.className = "orbit__node";
    node.style.left = x + "%";
    node.style.top = y + "%";
    node.style.transitionDelay = i * 60 + "ms";
    node.textContent = t(k);
    host.appendChild(node);
  });
}

/* ------------------------------------------------------------------ */
/* TRACTION — signed customers (placeholder) + pipeline board         */
/* ------------------------------------------------------------------ */
function renderSignedTable() {
  const body = document.getElementById("signedBody");
  const labels = ["signed_th_company","signed_th_industry","signed_th_country","signed_th_info","signed_th_status"];
  body.innerHTML = "";
  // 3 elegant skeleton placeholder rows
  for (let r = 0; r < 3; r++) {
    const tr = document.createElement("tr");
    tr.className = "placeholder-row";
    tr.innerHTML = labels.map((l) =>
      `<td data-label="${t(l)}"><span class="skeleton-cell" style="width:${[70,55,45,80,60][labels.indexOf(l)]}%"></span></td>`
    ).join("");
    body.appendChild(tr);
  }
}

function renderPipeline() {
  const board = document.getElementById("pipelineBoard");
  const stages = [
    { key: "pipe_stage_lead", color: "#A1A1AA", n: 2 },
    { key: "pipe_stage_qualified", color: "#6366F1", n: 2 },
    { key: "pipe_stage_demo", color: "#4338CA", n: 1 },
    { key: "pipe_stage_proposal", color: "#C2820B", n: 1 },
    { key: "pipe_stage_won", color: "#0F9D78", n: 1 },
  ];
  board.innerHTML = "";
  stages.forEach((st) => {
    const col = document.createElement("div");
    col.className = "pipe-col";
    let cards = "";
    for (let i = 0; i < st.n; i++) {
      cards +=
        `<div class="pipe-card">` +
          `<div class="pipe-card__line w-80"></div>` +
          `<div class="pipe-card__line w-60"></div>` +
          `<div class="pipe-card__meta">` +
            `<span class="pipe-card__val">€ —</span>` +
            `<span class="pipe-card__tag">${t("pipe_placeholder")}</span>` +
          `</div>` +
        `</div>`;
    }
    col.innerHTML =
      `<div class="pipe-col__head">` +
        `<span class="pipe-col__name"><span class="pipe-col__dot" style="background:${st.color};display:inline-block;margin-right:7px"></span>${t(st.key)}</span>` +
        `<span class="pipe-col__count">${st.n}</span>` +
      `</div>` + cards;
    board.appendChild(col);
  });
}

/* ------------------------------------------------------------------ */
/* Render all charts                                                  */
/* ------------------------------------------------------------------ */
function renderAllCharts() {
  renderEcoDiagram();
  renderCapTables();
  renderFunds();
  renderRoadmap();
}

// Re-render translated charts on language change
document.addEventListener("ody:langchange", () => {
  renderAllCharts();
});
