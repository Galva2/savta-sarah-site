/* ==========================================================================
   site.js — התנהגות משותפת לכל הדפים, דו-לשוני.
   site.js — shared behaviour for every page, bilingual.
   בדרך כלל אין צורך לגעת כאן. כל התוכן נמצא ב-data.js.
   ========================================================================== */
(function () {
  "use strict";

  /* --- עזרים --------------------------------------------------------------- */
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const param = (name) => new URLSearchParams(location.search).get(name) || "";

  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

  /* --- שפה / language ------------------------------------------------------ */
  const LANGS = ["he", "en"];
  const STORE = "savta-lang";

  function currentLang() {
    const fromUrl = param("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORE);
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* פרטיות חסומה — נופלים לעברית */ }
    return "he";
  }

  const LANG = currentLang();
  const isEn = LANG === "en";

  /* pick — מחזיר את הגרסה בשפה הנוכחית.
     עובד גם על { he, en } וגם על מחרוזת רגילה, כדי ששדות ישנים לא יישברו. */
  function pick(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[LANG] !== undefined && value[LANG] !== "" ? value[LANG] : (value.he || "");
    }
    return value || "";
  }

  /* t — מחרוזת ממשק לפי מפתח */
  function t(key) {
    const table = STRINGS[LANG] || STRINGS.he;
    return table[key] !== undefined ? table[key] : (STRINGS.he[key] || "");
  }

  const catName   = (c) => pick({ he: c.he, en: c.en });
  const recipeLoc = (r) => (isEn && r.en ? r.en : r.he);

  /* --- גישה לנתונים -------------------------------------------------------- */
  const categoryById = (id) => CATEGORIES.find((c) => c.id === id);
  const recipeById   = (id) => RECIPES.find((r) => r.id === id);
  const recipesIn    = (id) => RECIPES.filter((r) => r.category === id);

  /* כל קישור פנימי נושא איתו את השפה, כדי שהמעבר בין דפים לא יאפס אותה */
  const withLang = (url) => (isEn ? url + (url.includes("?") ? "&" : "?") + "lang=en" : url);
  const recipeUrl   = (r) => withLang("recipe.html?id=" + encodeURIComponent(r.id));
  const categoryUrl = (c) => withLang("recipes.html?cat=" + encodeURIComponent(c));
  const iconUrl     = (n) => "assets/img/icons/" + n + ".png";

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- החלת השפה על המסמך -------------------------------------------------- */
  function applyLanguage() {
    document.documentElement.lang = LANG;
    document.documentElement.dir  = isEn ? "ltr" : "rtl";

    // כל אלמנט עם data-i18n מקבל את הטקסט שלו מהטבלה
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val) el.textContent = val;
    });
    // ותכונות: data-i18n-attr="placeholder:searchPlace,aria-label:searchBtn"
    $$("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        const val = t(key);
        if (attr && val) el.setAttribute(attr, val);
      });
    });

    // קישורים סטטיים בדפים — לשמר את השפה
    if (isEn) {
      $$("a[href]").forEach((a) => {
        const href = a.getAttribute("href");
        if (!href || /^(https?:|mailto:|tel:|#)/.test(href)) return;
        if (href.includes("lang=")) return;
        a.setAttribute("href", withLang(href));
      });
    }

    // כפתור החלפת השפה
    const toggle = $(".langbtn");
    if (toggle) {
      toggle.textContent = t("langSwitch");
      toggle.setAttribute("aria-label", t("langSwitchAria"));
      toggle.addEventListener("click", () => {
        const next = isEn ? "he" : "en";
        try { localStorage.setItem(STORE, next); } catch (e) {}
        const url = new URL(location.href);
        if (next === "en") url.searchParams.set("lang", "en");
        else url.searchParams.delete("lang");
        location.href = url.toString();
      });
    }

    try { localStorage.setItem(STORE, LANG); } catch (e) {}
  }

  /* --- כותרת האתר ---------------------------------------------------------- */
  function initHeader() {
    const head = $(".masthead");
    if (!head) return;

    const here = location.pathname.split("/").pop() || "index.html";
    $$(".nav__link[href]").forEach((a) => {
      if (a.getAttribute("href").split("?")[0] === here) {
        a.setAttribute("aria-current", "page");
      }
    });

    const burger = $(".burger", head);
    if (burger) {
      burger.addEventListener("click", () => {
        const open = head.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(open));
      });
    }

    const toggle = $(".nav__toggle", head);
    const menu   = $(".nav__menu", head);
    if (toggle && menu) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
      // שמות הקטגוריות בתפריט הנפתח, לפי השפה
      menu.innerHTML = CATEGORIES.map((c) =>
        `<a href="${categoryUrl(c.id)}">${esc(catName(c))}</a>`).join("");
    }

    const form = $(".search", head);
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const q = $(".search__input", form).value.trim();
        location.href = q ? withLang("recipes.html?q=" + encodeURIComponent(q))
                          : withLang("recipes.html");
      });
      const q = param("q");
      if (q) $(".search__input", form).value = q;
    }
  }

  /* --- גלריית תמונות -------------------------------------------------------- */
  function renderGallery() {
    const track = $(".gallery__track");
    if (!track) return;

    const items = SITE.photos.length ? SITE.photos : Array.from({ length: 5 }, () => null);

    const frame = (p) => p
      ? `<figure class="photo">
           <img src="${esc(p.src)}" alt="${esc(t("galleryTitle"))}" loading="lazy">
           ${p.caption ? `<figcaption class="photo__caption">${esc(p.caption)}</figcaption>` : ""}
         </figure>`
      : `<figure class="photo">
           <div class="photo__blank">${esc(t("photoSoon"))}</div>
           <figcaption class="photo__caption">${esc(t("photoSoonCap"))}</figcaption>
         </figure>`;

    const html = items.map(frame).join("");
    track.innerHTML = html + html;          // מוכפל כדי שהגלילה תיראה אינסופית
    track.setAttribute("aria-label", t("galleryTitle"));

    initGalleryDrift();
  }

  /* הגלריה נגללת באצבע כמו כל רצועה, ובנוסף זזה לבד לאט.
     התזוזה נעשית ע"י דחיפת scrollLeft ולא באנימציית CSS — ככה אפשר
     לתפוס אותה באמצע. נגיעה עוצרת אותה, ואחרי כמה שניות היא חוזרת. */
  function initGalleryDrift() {
    const gal   = $(".gallery");
    const track = $(".gallery__track");
    if (!gal || !track) return;

    const half = () => track.scrollWidth / 2;   // התוכן מוכפל, אז חצי = מחזור שלם

    // גלישה חלקה בין הסוף להתחלה, אבל לא באמצע תנועה של האצבע
    let settle = null;
    gal.addEventListener("scroll", () => {
      clearTimeout(settle);
      settle = setTimeout(() => {
        const h = half();
        if (h < 10) return;
        if (gal.scrollLeft >= h)     gal.scrollLeft -= h;
        else if (gal.scrollLeft < 1) gal.scrollLeft += h;
      }, 140);
    }, { passive: true });

    if (prefersReducedMotion()) return;         // בלי תזוזה עצמונית

    let hold = 0;                               // עד מתי לא לזוז אחרי מגע
    let over = false;                           // העכבר מרחף מעל
    let last = performance.now();

    const pause = () => { hold = performance.now() + 2500; };
    ["pointerdown", "touchstart", "wheel"].forEach((ev) =>
      gal.addEventListener(ev, pause, { passive: true }));
    gal.addEventListener("pointerenter", () => { over = true; });
    gal.addEventListener("pointerleave", () => { over = false; });

    function step(now) {
      const dt = Math.min(now - last, 60);
      last = now;
      if (!over && now > hold && document.visibilityState === "visible") {
        const h = half();
        if (h > 10) {
          gal.scrollLeft += dt * 0.022;         // בערך 22 פיקסלים לשנייה
          if (gal.scrollLeft >= h) gal.scrollLeft -= h;
        }
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* --- רשת הקטגוריות -------------------------------------------------------- */
  function renderCategoryGrid() {
    const grid = $(".cats");
    if (!grid) return;

    grid.innerHTML = CATEGORIES.map((c) => {
      const n = recipesIn(c.id).length;
      return `<a class="cat" href="${categoryUrl(c.id)}">
                ${burst(c.icons)}
                <span class="cat__name">${esc(catName(c))}</span>
                <span class="cat__count">${n ? esc(count(n)) : esc(t("comingSoon"))}</span>
              </a>`;
    }).join("");

    initCategoryTouch();
  }

  /* "מתכון אחד" / "4 מתכונים" / "1 recipe" / "4 recipes" */
  function count(n) {
    if (n === 0) return t("noRecipes");
    if (n === 1) return t("oneRecipe");
    return n + " " + t("manyRecipes");
  }

  /* האייקונים שקופצים מהכרטיס */
  function burst(icons) {
    if (!icons || !icons.length) return "";
    const n = icons.length;
    return '<span class="cat__burst" aria-hidden="true">' + icons.map((name, i) => {
      const t2   = n === 1 ? 0.5 : i / (n - 1);
      const rad  = (-170 + t2 * 160) * Math.PI / 180;
      const dist = 58 + (i % 3) * 17;
      const x    = Math.round(Math.cos(rad) * dist);
      const y    = Math.round(Math.sin(rad) * dist);
      const rot  = Math.round(-20 + t2 * 40);
      return `<img class="cat__spark" src="${iconUrl(name)}" alt="" loading="lazy"
                   style="--x:${x}px; --y:${y}px; --r:${rot}deg; --d:${i * 40}ms">`;
    }).join("") + "</span>";
  }

  function initCategoryTouch() {
    /* מנקים תמיד, גם אם אין מסך מגע: כשחוזרים אחורה בדפדפן הדף משוחזר
       מהזיכרון עם המחלקה שנשארה עליו, והאייקונים נתקעים באמצע התנועה. */
    const clearBursts = () => $$(".cat").forEach((c) => {
      c.classList.remove("is-burst");
      delete c.dataset.burst;
    });
    window.addEventListener("pageshow", clearBursts);
    window.addEventListener("focus", clearBursts);

    if (!window.matchMedia("(hover: none)").matches) return;
    if (prefersReducedMotion()) return;

    $$(".cat").forEach((cat) => {
      cat.addEventListener("click", (e) => {
        if (cat.dataset.burst) return;
        e.preventDefault();
        cat.dataset.burst = "1";
        cat.classList.add("is-burst");
        setTimeout(() => { location.href = cat.href; }, 280);
        // אם המעבר לא קרה מסיבה כלשהי — לא להשאיר אותם רצים לנצח
        setTimeout(clearBursts, 1500);
      });
    });
  }

  /* --- כרטיס מתכון ---------------------------------------------------------- */
  function card(r) {
    const cat  = categoryById(r.category);
    const loc  = recipeLoc(r);
    const meta = [pick(r.time), pick(r.servings)].filter(Boolean).join(" · ");

    /* האייקון של המתכון עצמו (r.icon). אם אין — נופלים לרשימת הקטגוריה,
       לפי מיקום המתכון בה, כדי שלא יחזור אותו אייקון בכל השורות. */
    let placeholder;
    if (r.icon) {
      placeholder = "assets/img/icons/" + r.icon;
    } else if (cat && cat.icons && cat.icons.length) {
      const idx = recipesIn(r.category).findIndex((x) => x.id === r.id);
      placeholder = iconUrl(cat.icons[(idx < 0 ? 0 : idx) % cat.icons.length]);
    } else {
      placeholder = iconUrl("tomato");
    }

    return `<article class="card">
      <div class="card__media">
        ${r.image
          ? `<img src="${esc(r.image)}" alt="${esc(loc.title)}" loading="lazy">`
          : `<img class="card__placeholder" src="${esc(placeholder)}" alt="">`}
      </div>
      <div class="card__body">
        <h3 class="card__title"><a href="${recipeUrl(r)}">${esc(loc.title)}</a></h3>
        ${meta ? `<p class="card__meta">${esc(meta)}</p>` : ""}
      </div>
    </article>`;
  }

  function emptyState(title, text) {
    return `<div class="empty">
      <img src="assets/img/logo.png" alt="">
      <h2>${esc(title)}</h2>
      <p>${esc(text)}</p>
      <p style="margin-top:1.25rem"><a class="btn" href="${withLang("recipes.html")}">${esc(t("backToAll"))}</a></p>
    </div>`;
  }

  /* --- דף מתכונים ----------------------------------------------------------- */
  function renderRecipeList() {
    const list = $("#recipe-list");
    if (!list) return;

    const catId = param("cat");
    const q     = param("q").trim();
    const cat   = categoryById(catId);

    let results, title, sub;

    if (q) {
      const needle = q.toLowerCase();
      results = RECIPES.filter((r) => {
        const loc = recipeLoc(r);
        return loc.title.toLowerCase().includes(needle) ||
               loc.ingredients.some((i) => i.toLowerCase().includes(needle));
      });
      title = t("searchResults");
      sub   = `“${q}” — ${count(results.length)}`;
    } else if (cat) {
      results = recipesIn(cat.id);
      title = catName(cat);
      sub   = count(results.length);
    } else {
      results = RECIPES.slice();
      title = t("allRecipes");
      sub   = count(RECIPES.length) + " " + t("totalSuffix");
    }

    document.title = title + " · " + t("siteName");
    $("#list-title").textContent = title;
    $("#list-sub").textContent   = sub;

    const crumbs = $("#crumbs");
    if (crumbs) {
      crumbs.innerHTML = `<a href="${withLang("index.html")}">${esc(t("crumbHome"))}</a>
        <span aria-hidden="true">›</span>
        ${cat ? `<a href="${withLang("recipes.html")}">${esc(t("crumbRecipes"))}</a><span aria-hidden="true">›</span> ${esc(catName(cat))}`
              : esc(t("crumbRecipes"))}`;
    }

    list.innerHTML = results.length
      ? results.map(card).join("")
      : emptyState(q ? t("emptySearchT") : t("emptyCatT"),
                   q ? t("emptySearchB") : t("emptyCatB"));

    if (!results.length) list.style.display = "block";
  }

  /* --- דף מתכון בודד -------------------------------------------------------- */
  function renderRecipe() {
    const root = $("#recipe");
    if (!root) return;

    const r = recipeById(param("id"));

    if (!r) {
      root.innerHTML = emptyState(t("notFoundTitle"), t("notFoundText"));
      document.title = t("notFoundTitle") + " · " + t("siteName");
      return;
    }

    const cat = categoryById(r.category);
    const loc = recipeLoc(r);
    document.title = loc.title + " · " + t("siteName");

    const crumbs = $("#crumbs");
    if (crumbs) {
      crumbs.innerHTML = `<a href="${withLang("index.html")}">${esc(t("crumbHome"))}</a>
        <span aria-hidden="true">›</span>
        <a href="${withLang("recipes.html")}">${esc(t("crumbRecipes"))}</a>
        <span aria-hidden="true">›</span>
        ${cat ? `<a href="${categoryUrl(cat.id)}">${esc(catName(cat))}</a><span aria-hidden="true">›</span>` : ""}
        ${esc(loc.title)}`;
    }

    const time = pick(r.time), servings = pick(r.servings);
    const facts = [
      time     ? `<span class="recipe__fact"><b>${esc(t("prepTime"))}</b> <span>${esc(time)}</span></span>` : "",
      servings ? `<span class="recipe__fact"><b>${esc(t("servings"))}</b> <span>${esc(servings)}</span></span>` : ""
    ].filter(Boolean).join("");

    root.innerHTML = `
      <div class="recipe__card">
        <header class="recipe__head">
          ${cat ? `<a class="tag recipe__cat" href="${categoryUrl(cat.id)}">${esc(catName(cat))}</a>` : ""}
          <h1 class="recipe__title">${esc(loc.title)}</h1>
        </header>

        ${r.image ? `<img class="recipe__photo" src="${esc(r.image)}" alt="${esc(loc.title)}">` : ""}
        ${facts ? `<div class="recipe__facts">${facts}</div>` : ""}

        <section class="recipe__section">
          <h2 class="recipe__h">${esc(t("ingredients"))}</h2>
          <ul class="ingredients">
            ${loc.ingredients.map((item, i) =>
              /:\s*$/.test(item)
                ? `<li class="ingredients__group">${esc(item.replace(/:\s*$/, ""))}</li>`
                : `<li>
                     <label>
                       <input type="checkbox" id="ing-${i}">
                       <span class="box" aria-hidden="true"></span>
                       <span class="txt">${esc(item)}</span>
                     </label>
                   </li>`
            ).join("")}
          </ul>
        </section>

        <section class="recipe__section">
          <h2 class="recipe__h">${esc(t("method"))}</h2>
          <ol class="steps">
            ${loc.steps.map((s) => `<li>${esc(s)}</li>`).join("")}
          </ol>
        </section>

        ${loc.note ? `<p class="recipe__note"><b>${esc(t("noteLabel"))}</b> ${esc(loc.note)}</p>` : ""}
      </div>

      <div class="recipe__tools">
        <button class="btn cook-open" type="button">${esc(t("cookStart"))}</button>
        <button class="btn btn--ghost share-btn" type="button">${esc(t("share"))}</button>
      </div>

      <nav class="recipe__nav">
        ${cat ? `<a class="btn btn--ghost" href="${categoryUrl(cat.id)}">${esc(t("moreIn"))} ${esc(catName(cat))}</a>` : ""}
        <a class="btn btn--ghost" href="${withLang("recipes.html")}">${esc(t("backToAll"))}</a>
      </nav>`;

    initShare(loc.title);
    initCookMode(loc);
  }

  /* --- שיתוף --------------------------------------------------------------
     בטלפון נפתח גיליון השיתוף של המערכת (וואטסאפ, הודעות וכו').
     במחשב, או כשאין תמיכה, הקישור פשוט מועתק. */
  function initShare(title) {
    const btn = $(".share-btn");
    if (!btn) return;

    btn.addEventListener("click", async () => {
      const url  = location.href;
      const data = { title: title, text: t("shareText") + " — " + title, url: url };

      if (navigator.share) {
        try { await navigator.share(data); return; }
        catch (err) { if (err && err.name === "AbortError") return; }  // המשתמש ביטל
      }
      try {
        await navigator.clipboard.writeText(url);
        toast(t("shareCopied"));
      } catch (e) {
        window.prompt(t("share"), url);   // מוצא אחרון, גם ב-file://
      }
    });
  }

  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    el.textContent = msg;
    document.body.appendChild(el);        // the entry animation is pure CSS
    setTimeout(() => {
      el.classList.add("is-out");
      setTimeout(() => el.remove(), 320);
    }, 2200);
  }

  /* --- מצב "מבשלים ביחד" ---------------------------------------------------
     שלב אחד גדול על המסך, מעבר בכפתורים / חיצים / החלקה, והמסך לא נכבה. */
  function initCookMode(loc) {
    const openBtn = $(".cook-open");
    if (!openBtn || !loc.steps || !loc.steps.length) return;

    const steps = loc.steps;
    const last  = steps.length;
    let i = 0;                 // 0..last-1 = שלבים, last = מסך הסיום
    let wakeLock = null;

    const wrap = document.createElement("div");
    wrap.className = "cook";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-label", t("cookStart"));
    wrap.hidden = true;
    wrap.innerHTML = `
      <div class="cook__bar">
        <span class="cook__count"></span>
        <button class="cook__x" type="button" aria-label="${esc(t("cookClose"))}">✕</button>
      </div>
      <div class="cook__progress"><span></span></div>
      <div class="cook__stage">
        <p class="cook__num"></p>
        <p class="cook__text"></p>
      </div>
      <details class="cook__ingr">
        <summary>${esc(t("cookIngr"))}</summary>
        <ul>${loc.ingredients.map((x) =>
          /:\s*$/.test(x) ? `<li class="ingredients__group">${esc(x.replace(/:\s*$/, ""))}</li>`
                          : `<li>${esc(x)}</li>`).join("")}</ul>
      </details>
      <div class="cook__nav">
        <button class="btn btn--ghost cook__back" type="button">${esc(t("cookBack"))}</button>
        <button class="btn cook__next" type="button">${esc(t("cookNext"))}</button>
      </div>`;
    document.body.appendChild(wrap);

    const elCount = $(".cook__count", wrap), elNum = $(".cook__num", wrap),
          elText  = $(".cook__text", wrap),  elBar = $(".cook__progress span", wrap),
          btnBack = $(".cook__back", wrap),  btnNext = $(".cook__next", wrap),
          stage   = $(".cook__stage", wrap);

    function render() {
      const done = i >= last;
      wrap.classList.toggle("is-done", done);
      elBar.style.width = Math.round(((done ? last : i) / last) * 100) + "%";

      if (done) {
        elCount.textContent = "";
        elNum.textContent   = t("cookDoneT");
        elText.textContent  = t("cookDoneB");
        btnNext.textContent = t("cookAgain");
      } else {
        elCount.textContent = `${t("cookStep")} ${i + 1} ${t("cookOf")} ${last}`;
        elNum.textContent   = i + 1;
        elText.textContent  = steps[i];
        btnNext.textContent = t("cookNext");
      }
      btnBack.disabled = i === 0;
      stage.scrollTop = 0;
    }

    const go = (n) => { i = Math.max(0, Math.min(last, n)); render(); };

    async function open() {
      wrap.hidden = false;
      document.body.classList.add("cook-on");
      i = 0; render();
      btnNext.focus();
      try {                                   // לא לתת למסך להיכבות באמצע בישול
        if ("wakeLock" in navigator) wakeLock = await navigator.wakeLock.request("screen");
      } catch (e) { /* לא נתמך או נדחה — לא נורא */ }
    }
    function close() {
      wrap.hidden = true;
      document.body.classList.remove("cook-on");
      openBtn.focus();
      if (wakeLock) { try { wakeLock.release(); } catch (e) {} wakeLock = null; }
    }

    openBtn.addEventListener("click", open);
    $(".cook__x", wrap).addEventListener("click", close);
    btnBack.addEventListener("click", () => go(i - 1));
    btnNext.addEventListener("click", () => go(i >= last ? 0 : i + 1));

    document.addEventListener("keydown", (e) => {
      if (wrap.hidden) return;
      if (e.key === "Escape") { close(); return; }
      // בעברית החץ שמאלה מקדם, באנגלית ימינה — לפי כיוון הקריאה
      const fwd = isEn ? "ArrowRight" : "ArrowLeft";
      const bwd = isEn ? "ArrowLeft"  : "ArrowRight";
      if (e.key === fwd) go(i + 1);
      if (e.key === bwd) go(i - 1);
    });

    // החלקה באצבע
    let x0 = null;
    stage.addEventListener("touchstart", (e) => { x0 = e.changedTouches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) < 45) return;
      const forward = isEn ? dx < 0 : dx > 0;
      go(forward ? i + 1 : i - 1);
    }, { passive: true });

    // אם חוזרים ללשונית, לבקש שוב נעילת מסך
    document.addEventListener("visibilitychange", async () => {
      if (!wrap.hidden && document.visibilityState === "visible" && "wakeLock" in navigator && !wakeLock) {
        try { wakeLock = await navigator.wakeLock.request("screen"); } catch (e) {}
      }
    });
  }

  /* --- טקסטים מתוך data.js -------------------------------------------------- */
  function renderSiteText() {
    const intro = $("#intro-copy");
    if (intro) intro.innerHTML = pick(SITE.intro).map((p) => `<p>${esc(p)}</p>`).join("");

    const sign = $("#signpost-img");
    if (sign) sign.alt = pick(SITE.signAlt);

    const wordmark = $(".brand__wordmark");
    if (wordmark) wordmark.alt = t("siteName");

    const prose = $("#about-prose");
    if (prose) {
      prose.innerHTML = pick(ABOUT).map((b) =>
        b.h ? `<h2>${esc(b.h)}</h2>` : `<p>${esc(b.p)}</p>`
      ).join("") +
      `<p style="margin-top:1.75rem"><a class="btn" href="${withLang("recipes.html")}">${esc(t("aboutBtn"))}</a></p>`;
    }

    const aboutLogo = $(".about__portrait img");
    if (aboutLogo) aboutLogo.alt = t("logoAlt");

    // כותרת הלשונית בדפים שאין להם כותרת דינמית
    if ($("#cats-title"))  document.title = t("siteName");
    if ($("#about-prose")) document.title = t("aboutTitle") + " · " + t("siteName");
  }

  /* --- הפעלה ---------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage();
    initHeader();
    renderSiteText();
    renderGallery();
    renderCategoryGrid();
    renderRecipeList();
    renderRecipe();
  });
})();
