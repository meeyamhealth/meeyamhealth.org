/* MYHF site tools: section menu (⋮) and language switch (English / हिन्दी / ਪੰਜਾਬੀ).
   Hindi and Punjabi are machine translations by Google Translate. */
(function () {
  var MENUS = {
    index: [
      ["#about", "Who we are"], ["#work", "What we do"], ["#sdgs", "Global goals (SDGs)"],
      ["#where", "Where we work"], ["#iec", "Health materials"], ["#charter", "Accountability"],
      ["#involve", "Get involved"], ["#donate", "Donate"], ["#contact", "Contact"],
      "-", ["donate.html#csr", "CSR partnership"], ["apply.html", "Volunteer or apply"]
    ],
    donate: [
      ["#csr", "CSR project for companies"], ["#give", "Donate as an individual"],
      ["#s1", "1. Choose an amount"], ["#s2", "2. Pay"], ["#s3", "3. Your details for the 80G receipt"],
      ["#faq", "Questions"], "-", ["index.html", "Home"], ["index.html#work", "Our work"], ["index.html#contact", "Contact"]
    ],
    apply: [
      ["#apply", "Application form"], "-", ["index.html", "Home"], ["index.html#about", "Who we are"],
      ["index.html#work", "What we do"], ["donate.html", "Donate"], ["index.html#contact", "Contact"]
    ]
  };
  var LANGS = [["en", "EN", "English"], ["hi", "हिं", "हिन्दी (Hindi)"], ["pa", "ਪੰ", "ਪੰਜਾਬੀ (Punjabi)"]];

  var page = (location.pathname.split("/").pop() || "index.html").replace(".html", "") || "index";
  var header = document.querySelector("header .wrap") || document.querySelector("header");
  if (!header) return;

  function getLang() {
    var m = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/(hi|pa)/);
    return m ? m[1] : "en";
  }
  function setCookie(v, expire) {
    var tail = ";path=/" + (expire ? ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : ";max-age=31536000");
    document.cookie = "googtrans=" + v + tail;
    var host = location.hostname;
    if (host.indexOf(".") > 0) {
      document.cookie = "googtrans=" + v + tail + ";domain=" + host;
      document.cookie = "googtrans=" + v + tail + ";domain=." + host.replace(/^www\./, "");
    }
  }
  function setLang(l) {
    if (l === getLang()) return;
    if (l === "en") setCookie("", true); else setCookie("/en/" + l, false);
    location.reload();
  }

  var css = document.createElement("style");
  css.textContent =
    ".st{display:flex;align-items:center;gap:8px;margin-left:auto;position:relative}" +
    "header .wrap{flex-wrap:nowrap}" +
    ".st-lang{display:inline-flex;border:1px solid var(--line,#E2DEEC);border-radius:999px;overflow:hidden;background:var(--bg,#fff)}" +
    ".st-lang button{all:unset;cursor:pointer;font:600 .85rem/1 var(--body,system-ui);padding:8px 10px;color:var(--ink,#1B1530);min-width:22px;text-align:center}" +
    ".st-lang button+button{border-left:1px solid var(--line,#E2DEEC)}" +
    ".st-lang button[aria-pressed=true]{background:var(--indigo,#2C0A71);color:#fff}" +
    ".st-lang button:focus-visible,.st-more:focus-visible{outline:3px solid var(--green,#00BF63);outline-offset:2px}" +
    ".st-more{all:unset;cursor:pointer;width:38px;height:38px;border-radius:50%;display:grid;place-items:center;color:var(--accent-text,#2C0A71);border:1px solid var(--line,#E2DEEC);background:var(--bg,#fff)}" +
    ".st-more:hover,.st-more[aria-expanded=true]{background:var(--paper,#F5F3FA)}" +
    ".st-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:240px;max-width:min(320px,calc(100vw - 32px));max-height:min(70vh,520px);overflow:auto;background:var(--bg,#fff);border:1px solid var(--line,#E2DEEC);border-radius:12px;box-shadow:0 12px 32px rgba(29,6,80,.18);padding:6px;z-index:50}" +
    ".st-menu[hidden]{display:none}" +
    ".st-menu .h{font:700 .7rem/1 var(--display,sans-serif);letter-spacing:.14em;text-transform:uppercase;color:var(--green-text,#00804A);padding:10px 12px 6px}" +
    ".st-menu a{display:block;padding:9px 12px;border-radius:8px;text-decoration:none;color:var(--ink,#1B1530);font-weight:500;font-size:.95rem;line-height:1.3}" +
    ".st-menu a:hover,.st-menu a:focus-visible{background:var(--paper,#F5F3FA);color:var(--accent-text,#2C0A71);outline:none}" +
    ".st-menu hr{border:0;border-top:1px solid var(--line,#E2DEEC);margin:6px 4px}" +
    ".st-note{font-size:.75rem;color:var(--muted,#5A5470);padding:8px 12px 6px;line-height:1.35}" +
    "@media (max-width:640px){header .wrap>nav{display:none}}" +
    "@media (max-width:1140px){header .wrap>nav.nav{display:none}}" +
    "@media (max-width:480px){header .wrap{gap:8px!important}header .wrap>a img,header .brand img{height:40px!important;width:auto}}" +
    "@media (max-width:420px){.st-lang button{padding:8px 7px}.st{gap:6px}}" +
    /* hide Google Translate's own bar and tooltips */
    ".goog-te-banner-frame,.skiptranslate>iframe,#goog-gt-tt,.goog-te-balloon-frame,.VIpgJd-ZVi9od-ORHb-OEVmcd,.VIpgJd-ZVi9od-aZ2wEe-wOHMyf,.VIpgJd-yAWNEb-L7lbkb{display:none!important}" +
    "body{top:0!important;position:static!important}#st-gt{display:none}" +
    "font[style]{background:none!important;box-shadow:none!important}" +
    "html[data-st-lang=hi] body,html[data-st-lang=hi] h1,html[data-st-lang=hi] h2,html[data-st-lang=hi] h3{font-family:\"Hind\",\"Noto Sans Devanagari\",system-ui,sans-serif}" +
    "html[data-st-lang=pa] body,html[data-st-lang=pa] h1,html[data-st-lang=pa] h2,html[data-st-lang=pa] h3{font-family:\"Noto Sans Gurmukhi\",\"Raavi\",system-ui,sans-serif}" +
    "html[data-st-lang=hi] .eyebrow,html[data-st-lang=pa] .eyebrow{letter-spacing:.04em}";
  document.head.appendChild(css);

  var lang = getLang();
  var box = document.createElement("div");
  box.className = "st";

  var seg = document.createElement("div");
  seg.className = "st-lang notranslate";
  seg.setAttribute("translate", "no");
  seg.setAttribute("role", "group");
  seg.setAttribute("aria-label", "Language / भाषा / ਭਾਸ਼ਾ");
  LANGS.forEach(function (L) {
    var b = document.createElement("button");
    b.type = "button"; b.textContent = L[1]; b.lang = L[0];
    b.title = L[2]; b.setAttribute("aria-label", L[2]);
    b.setAttribute("aria-pressed", String(L[0] === lang));
    b.addEventListener("click", function () { setLang(L[0]); });
    seg.appendChild(b);
  });
  box.appendChild(seg);

  var items = MENUS[page];
  if (items) {
    var more = document.createElement("button");
    more.type = "button"; more.className = "st-more";
    more.setAttribute("aria-label", "Jump to a section");
    more.setAttribute("aria-haspopup", "true");
    more.setAttribute("aria-expanded", "false");
    more.setAttribute("aria-controls", "st-menu");
    more.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';
    var menu = document.createElement("nav");
    menu.className = "st-menu"; menu.id = "st-menu"; menu.hidden = true;
    menu.setAttribute("aria-label", "On this page");
    var inner = document.createElement("div");
    var h = document.createElement("div"); h.className = "h"; h.textContent = "Go to"; inner.appendChild(h);
    items.forEach(function (it) {
      if (it === "-") { inner.appendChild(document.createElement("hr")); return; }
      if (it[0].charAt(0) === "#" && !document.querySelector(it[0])) return;
      var a = document.createElement("a"); a.href = it[0]; a.textContent = it[1];
      a.addEventListener("click", function () { close(); });
      inner.appendChild(a);
    });
    if (lang !== "en") {
      var n = document.createElement("p"); n.className = "st-note";
      n.textContent = "Automatic translation by Google. The English version is the official text.";
      inner.appendChild(n);
    }
    menu.appendChild(inner);
    var open = function () { menu.hidden = false; more.setAttribute("aria-expanded", "true"); var f = menu.querySelector("a"); f && f.focus({ preventScroll: true }); };
    var close = function () { menu.hidden = true; more.setAttribute("aria-expanded", "false"); };
    more.addEventListener("click", function (e) { e.stopPropagation(); menu.hidden ? open() : close(); });
    document.addEventListener("click", function (e) { if (!menu.hidden && !menu.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) { close(); more.focus(); } });
    box.appendChild(more);
    box.appendChild(menu);
  }
  header.appendChild(box);

  if (lang !== "en") {
    document.documentElement.setAttribute("data-st-lang", lang);
    if (lang === "pa") {
      var f = document.createElement("link"); f.rel = "stylesheet";
      f.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Gurmukhi:wght@400;600;700&display=swap";
      document.head.appendChild(f);
    }
    var el = document.createElement("div"); el.id = "st-gt"; document.body.appendChild(el);
    window.stGtInit = function () {
      try {
        new google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: "en,hi,pa", autoDisplay: false }, "st-gt");
      } catch (e) {}
    };
    var s = document.createElement("script");
    s.src = "https://translate.google.com/translate_a/element.js?cb=stGtInit";
    s.async = true;
    document.body.appendChild(s);
  }
})();
