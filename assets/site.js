/* A/L Chemistry Virtual Lab: home page logic (language switch, unit filter, search, saved scores) */
(function () {
  "use strict";
  const $ = id => document.getElementById(id);
  const LI = { en: 0, si: 1, ta: 2 };
  const T = {
    en: {
      skip: "Skip to the practicals", brand: "A/L Chemistry Virtual Lab", brandSub: "NIE Practical Handbook (2018)", navHow: "How it works", navPract: "Practicals", navSafety: "Safety", navTeach: "For teachers",
      heroEyebrow: "G.C.E. Advanced Level · Chemistry", heroH: "Every A/L Chemistry practical, <em>on your screen.</em>",
      heroP: "Pipette, titrate, heat and test, just like in the school lab. Watch every colour change up close, learn the safety rules, and check your answers in Sinhala, English or Tamil.",
      ctaStart: "Start a practical", ctaHow: "How it works", statPract: "practicals", statUnits: "units", statLang: "languages", statFreeB: "Free", statFree: "no sign-up",
      float1: "Colour changes you can replay slowly", float2: "Safety first, every time",
      howEyebrow: "How it works", howH: "Four steps, like a real practical class", howP: "Each practical follows the NIE handbook order. If you do a step in the wrong order, the lab explains why, kindly.",
      s1H: "Read the safety rules", s1P: "Every lab opens with a short safety briefing. Put on your goggles to begin.", s2H: "Watch the demo", s2P: "Nimali, a student guide, shows the whole practical step by step.",
      s3H: "Do it yourself", s3P: "Real apparatus, realistic results and named colour changes. Steps tick off as you go.", s4H: "Answer the questions", s4P: "Short exam-style questions with explanations. Your best score is saved on this device.",
      prEyebrow: "Practicals", prH: "Choose a practical", prP: "Open any practical. They work on phones, tablets and computers.", searchPh: "Search practicals", all: "All units", unit: "Unit {n}", extra: "Extra", exp: "Exp {n}",
      count: "{n} practicals", count1: "1 practical", none: "No practical matches your search.", open: "Open practical", best: "Best {p}%",
      sfEyebrow: "Safety first", sfH: "The same rules as your school lab", sf1H: "Goggles on, always", sf1P: "From the start to the end of every practical.", sf2H: "Waft, never sniff", sf2P: "Gently waft a gas towards your nose with your hand.",
      sf3H: "Use a pipette filler", sf3P: "Never pipette by mouth.", sf4H: "Toxic fumes in the fume cupboard", sf4P: "Conc. acids, ammonia and NO₂ stay inside the fume cupboard.",
      tEyebrow: "For teachers and schools", tH: "Ready for the classroom", f1H: "Follows the NIE handbook", f1P: "Aims, apparatus, procedure and questions follow the G.C.E. (A/L) Chemistry Practical Handbook (2018).",
      f2H: "Sinhala, English and Tamil", f2P: "Switch language at any time. The choice is remembered across all practicals.", f3H: "Light and offline-friendly", f3P: "Each practical is a single page with no installs or accounts, so it also works on a school projector.",
      footP: "A practice tool for Sri Lankan A/L students. It supports, but does not replace, real laboratory work under a teacher.", footNote: "Photos: illustrative images of Sri Lankan school students, created with AI (Canva) for this project.",
    },
    si: {
      skip: "ප්‍රායෝගික වෙත යන්න", brand: "උ.පෙ. රසායන විද්‍යා අතථ්‍ය රසායනාගාරය", brandSub: "ජා.අ.ආ. ප්‍රායෝගික අත්පොත (2018)", navHow: "ක්‍රියා කරන අයුරු", navPract: "ප්‍රායෝගික", navSafety: "ආරක්ෂාව", navTeach: "ගුරුවරුන් සඳහා",
      heroEyebrow: "අ.පො.ස. උසස් පෙළ · රසායන විද්‍යාව", heroH: "සියලු උ.පෙ. රසායන විද්‍යා ප්‍රායෝගික, <em>ඔබේ තිරය මත.</em>",
      heroP: "පාසල් රසායනාගාරයේ මෙන්ම පිපෙට් කරන්න, අනුමාපනය කරන්න, රත් කරන්න, පරීක්ෂා කරන්න. සෑම වර්ණ වෙනසක්ම සමීපව බලන්න, ආරක්ෂක නීති ඉගෙන ගන්න, සිංහලෙන්, ඉංග්‍රීසියෙන් හෝ දෙමළෙන් පිළිතුරු පරීක්ෂා කරන්න.",
      ctaStart: "ප්‍රායෝගිකයක් අරඹන්න", ctaHow: "ක්‍රියා කරන අයුරු", statPract: "ප්‍රායෝගික", statUnits: "ඒකක", statLang: "භාෂා", statFreeB: "නොමිලේ", statFree: "ලියාපදිංචියක් නැත",
      float1: "සෙමින් නැවත බැලිය හැකි වර්ණ වෙනස්කම්", float2: "සෑම විටම ආරක්ෂාව මුලින්",
      howEyebrow: "ක්‍රියා කරන අයුරු", howH: "සැබෑ ප්‍රායෝගික පන්තියක් මෙන් පියවර හතරක්", howP: "සෑම ප්‍රායෝගිකයක්ම ජා.අ.ආ. අත්පොතේ පිළිවෙළ අනුගමනය කරයි. ඔබ වැරදි පිළිවෙළකට පියවරක් කළහොත්, රසායනාගාරය ඒ මන්දැයි කාරුණිකව පැහැදිලි කරයි.",
      s1H: "ආරක්ෂක නීති කියවන්න", s1P: "සෑම රසායනාගාරයක්ම කෙටි ආරක්ෂක උපදෙස් සමඟ ආරම්භ වේ. ආරම්භ කිරීමට කණ්ණාඩි පළඳින්න.", s2H: "ආදර්ශනය බලන්න", s2P: "ශිෂ්‍ය මාර්ගෝපදේශිකාව නිමාලි මුළු ප්‍රායෝගිකයම පියවරෙන් පියවර පෙන්වයි.",
      s3H: "ඔබම කරන්න", s3P: "සැබෑ උපකරණ, යථාර්ථවාදී ප්‍රතිඵල සහ නම් කළ වර්ණ වෙනස්කම්. ඔබ ඉදිරියට යන විට පියවර සලකුණු වේ.", s4H: "ප්‍රශ්නවලට පිළිතුරු දෙන්න", s4P: "පැහැදිලි කිරීම් සහිත කෙටි විභාග ආකාරයේ ප්‍රශ්න. ඔබේ හොඳම ලකුණු මෙම උපාංගයේ සුරැකේ.",
      prEyebrow: "ප්‍රායෝගික", prH: "ප්‍රායෝගිකයක් තෝරන්න", prP: "ඕනෑම ප්‍රායෝගිකයක් විවෘත කරන්න. ඒවා දුරකථන, ටැබ්ලට් සහ පරිගණක මත ක්‍රියා කරයි.", searchPh: "ප්‍රායෝගික සොයන්න", all: "සියලු ඒකක", unit: "ඒකකය {n}", extra: "අමතර", exp: "පරීක්ෂණය {n}",
      count: "ප්‍රායෝගික {n}", count1: "ප්‍රායෝගික 1", none: "ඔබේ සෙවුමට ගැළපෙන ප්‍රායෝගිකයක් නැත.", open: "ප්‍රායෝගිකය විවෘත කරන්න", best: "උපරිම {p}%",
      sfEyebrow: "ආරක්ෂාව මුලින්", sfH: "ඔබේ පාසල් රසායනාගාරයේ නීතිම", sf1H: "සෑම විටම කණ්ණාඩි", sf1P: "සෑම ප්‍රායෝගිකයකම මුල සිට අවසානය දක්වා.", sf2H: "සුළං කරන්න, කිසිවිටෙක ඉඹින්න එපා", sf2P: "අතින් වායුවක් මෘදුව ඔබේ නාසය දෙසට සුළං කරන්න.",
      sf3H: "පිපෙට් පිරවුමක් භාවිත කරන්න", sf3P: "කිසිවිටෙක මුඛයෙන් පිපෙට් නොකරන්න.", sf4H: "විෂ දුම් දුම් කුටීරයේ", sf4P: "සාන්ද්‍ර අම්ල, ඇමෝනියා සහ NO₂ දුම් කුටීරය තුළම තබන්න.",
      tEyebrow: "ගුරුවරුන් සහ පාසල් සඳහා", tH: "පන්ති කාමරයට සූදානම්", f1H: "ජා.අ.ආ. අත්පොත අනුගමනය කරයි", f1P: "අරමුණු, උපකරණ, ක්‍රියා පිළිවෙළ සහ ප්‍රශ්න අ.පො.ස. (උ.පෙ.) රසායන විද්‍යා ප්‍රායෝගික අත්පොත (2018) අනුගමනය කරයි.",
      f2H: "සිංහල, ඉංග්‍රීසි සහ දෙමළ", f2P: "ඕනෑම වේලාවක භාෂාව මාරු කරන්න. ඔබේ තේරීම සියලු ප්‍රායෝගිකවලදී මතක තබා ගනී.", f3H: "සැහැල්ලු සහ නොබැඳි ලෙසද භාවිතයට", f3P: "සෑම ප්‍රායෝගිකයක්ම ස්ථාපන හෝ ගිණුම් නැති තනි පිටුවක් බැවින් පාසල් ප්‍රොජෙක්ටරයකද ක්‍රියා කරයි.",
      footP: "ශ්‍රී ලාංකික උ.පෙ. සිසුන් සඳහා පුහුණු මෙවලමකි. එය ගුරුවරයෙකු යටතේ සැබෑ රසායනාගාර වැඩට සහාය වන නමුත් එය ප්‍රතිස්ථාපනය නොකරයි.", footNote: "ඡායාරූප: මෙම ව්‍යාපෘතිය සඳහා AI (Canva) මගින් සාදන ලද ශ්‍රී ලාංකික පාසල් සිසුන්ගේ නිදර්ශන රූප.",
    },
    ta: {
      skip: "செய்முறைகளுக்குச் செல்", brand: "க.பொ.த (உ/த) இரசாயனவியல் மெய்நிகர் ஆய்வுகூடம்", brandSub: "தே.க.நி. செய்முறைக் கைநூல் (2018)", navHow: "இது எப்படி இயங்குகிறது", navPract: "செய்முறைகள்", navSafety: "பாதுகாப்பு", navTeach: "ஆசிரியர்களுக்கு",
      heroEyebrow: "க.பொ.த உயர்தரம் · இரசாயனவியல்", heroH: "எல்லா உ/த இரசாயனவியல் செய்முறைகளும், <em>உங்கள் திரையில்.</em>",
      heroP: "பாடசாலை ஆய்வுகூடத்தைப் போலவே குழாயியால் எடுங்கள், நியமியுங்கள், சூடாக்குங்கள், சோதியுங்கள். ஒவ்வொரு நிற மாற்றத்தையும் அருகில் பாருங்கள், பாதுகாப்பு விதிகளைக் கற்றுக்கொள்ளுங்கள், சிங்களம், ஆங்கிலம் அல்லது தமிழில் விடைகளைச் சரிபாருங்கள்.",
      ctaStart: "செய்முறையைத் தொடங்கு", ctaHow: "இது எப்படி இயங்குகிறது", statPract: "செய்முறைகள்", statUnits: "அலகுகள்", statLang: "மொழிகள்", statFreeB: "இலவசம்", statFree: "பதிவு தேவையில்லை",
      float1: "மெதுவாக மீண்டும் பார்க்கக்கூடிய நிற மாற்றங்கள்", float2: "எப்போதும் பாதுகாப்பு முதலில்",
      howEyebrow: "இது எப்படி இயங்குகிறது", howH: "உண்மையான செய்முறை வகுப்பைப் போல நான்கு படிகள்", howP: "ஒவ்வொரு செய்முறையும் தே.க.நி. கைநூலின் ஒழுங்கைப் பின்பற்றுகிறது. ஒரு படியைத் தவறான ஒழுங்கில் செய்தால், ஏன் என்பதை ஆய்வுகூடம் அன்புடன் விளக்கும்.",
      s1H: "பாதுகாப்பு விதிகளை வாசி", s1P: "ஒவ்வொரு ஆய்வுகூடமும் சுருக்கமான பாதுகாப்பு அறிவுறுத்தலுடன் தொடங்கும். தொடங்கக் கண்ணாடி அணிக.", s2H: "காட்சியைப் பார்", s2P: "மாணவர் வழிகாட்டி நிமாலி முழுச் செய்முறையையும் படிப்படியாகக் காட்டுவார்.",
      s3H: "நீங்களே செய்யுங்கள்", s3P: "உண்மையான உபகரணங்கள், யதார்த்தமான முடிவுகள், பெயரிடப்பட்ட நிற மாற்றங்கள். நீங்கள் முன்னேறும்போது படிகள் குறிக்கப்படும்.", s4H: "வினாக்களுக்கு விடையளி", s4P: "விளக்கங்களுடன் சுருக்கமான பரீட்சை வகை வினாக்கள். உங்கள் சிறந்த புள்ளி இந்தச் சாதனத்தில் சேமிக்கப்படும்.",
      prEyebrow: "செய்முறைகள்", prH: "செய்முறையைத் தெரிவு செய்க", prP: "எந்தச் செய்முறையையும் திறக்கலாம். அவை கைபேசி, டப்லெட், கணினி எல்லாவற்றிலும் இயங்கும்.", searchPh: "செய்முறைகளைத் தேடு", all: "எல்லா அலகுகளும்", unit: "அலகு {n}", extra: "மேலதிகம்", exp: "பரிசோதனை {n}",
      count: "{n} செய்முறைகள்", count1: "1 செய்முறை", none: "உங்கள் தேடலுக்குப் பொருந்தும் செய்முறை இல்லை.", open: "செய்முறையைத் திற", best: "அதிகூடியது {p}%",
      sfEyebrow: "பாதுகாப்பு முதலில்", sfH: "உங்கள் பாடசாலை ஆய்வுகூடத்தின் அதே விதிகள்", sf1H: "எப்போதும் கண்ணாடி", sf1P: "ஒவ்வொரு செய்முறையின் தொடக்கம் முதல் முடிவு வரை.", sf2H: "விசிறுக, ஒருபோதும் முகர வேண்டாம்", sf2P: "கையால் வாயுவை மெதுவாக மூக்கை நோக்கி விசிறுக.",
      sf3H: "குழாயி நிரப்பியைப் பயன்படுத்துக", sf3P: "ஒருபோதும் வாயால் உறிஞ்ச வேண்டாம்.", sf4H: "நச்சுப் புகை புகை அலமாரியில்", sf4P: "செறிந்த அமிலங்கள், அமோனியா, NO₂ ஆகியவை புகை அலமாரிக்குள்ளேயே இருக்க வேண்டும்.",
      tEyebrow: "ஆசிரியர்களுக்கும் பாடசாலைகளுக்கும்", tH: "வகுப்பறைக்குத் தயார்", f1H: "தே.க.நி. கைநூலைப் பின்பற்றுகிறது", f1P: "நோக்கங்கள், உபகரணங்கள், செய்முறை, வினாக்கள் ஆகியன க.பொ.த (உ/த) இரசாயனவியல் செய்முறைக் கைநூலை (2018) பின்பற்றுகின்றன.",
      f2H: "சிங்களம், ஆங்கிலம், தமிழ்", f2P: "எந்நேரமும் மொழியை மாற்றலாம். உங்கள் தெரிவு எல்லாச் செய்முறைகளிலும் நினைவில் வைக்கப்படும்.", f3H: "இலகுவானது, இணையமின்றியும் உதவும்", f3P: "ஒவ்வொரு செய்முறையும் நிறுவலோ கணக்கோ இல்லாத ஒரே பக்கம், எனவே பாடசாலை புரொஜெக்டரிலும் இயங்கும்.",
      footP: "இலங்கை உ/த மாணவர்களுக்கான பயிற்சிக் கருவி. ஆசிரியரின் கீழ் செய்யும் உண்மையான ஆய்வுகூட வேலைக்கு இது உதவுகிறது, ஆனால் அதற்குப் பதிலாகாது.", footNote: "படங்கள்: இத் திட்டத்துக்காக AI (Canva) மூலம் உருவாக்கப்பட்ட இலங்கைப் பாடசாலை மாணவர்களின் விளக்கப் படங்கள்.",
    },
  };
  const P = window.SVL_PRACTICALS || [], U = window.SVL_UNITS || {}, TG = window.SVL_TAGS || {};
  let lang = "en", unit = "all", q = "";
  try { const s = localStorage.getItem("svl-lang"); if (T[s]) lang = s; else { const n = (navigator.language || "").slice(0, 2); if (T[n]) lang = n; } } catch (e) {}
  const t = (k, p) => { let s = T[lang][k] ?? T.en[k] ?? k; if (p) s = s.replace(/\{(\w+)\}/g, (_, x) => p[x] ?? ""); return s; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const L = arr => (arr && (arr[LI[lang]] || arr[0])) || "";
  function scores() { try { return JSON.parse(localStorage.getItem("svl-scores") || "{}") || {}; } catch (e) { return {}; } }

  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
    document.querySelectorAll("[data-i18n-html]").forEach(el => el.innerHTML = t(el.dataset.i18nHtml));
    document.querySelectorAll("[data-i18n-ph]").forEach(el => el.placeholder = t(el.dataset.i18nPh));
    document.querySelectorAll(".seg button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.title = t("brand");
  }
  function renderChips() {
    const units = [...new Set(P.map(p => p.unit))].sort((a, b) => a - b);
    $("chips").innerHTML = `<button class="chip" data-u="all" aria-pressed="${unit === "all"}">${esc(t("all"))}</button>` +
      units.map(u => `<button class="chip" data-u="${u}" aria-pressed="${String(unit) === String(u)}">${esc(t("unit", { n: String(u).padStart(2, "0") }))} · ${esc(L(U[u]))}</button>`).join("");
  }
  function matches(p) {
    if (unit !== "all" && String(p.unit) !== String(unit)) return false;
    if (!q) return true;
    const hay = [p.title.join(" "), p.aim.join(" "), p.exp ? "exp " + p.exp + " experiment " + p.exp : "extra", (U[p.unit] || []).join(" "), p.tags.map(k => (TG[k] || []).join(" ")).join(" ")].join(" ").toLowerCase();
    return q.toLowerCase().split(/\s+/).every(w => hay.includes(w));
  }
  function renderGrid() {
    const sc = scores(), list = P.filter(matches);
    $("count").textContent = list.length === 1 ? t("count1") : t("count", { n: list.length });
    if (!list.length) { $("grid").innerHTML = `<div class="empty">${esc(t("none"))}</div>`; return; }
    $("grid").innerHTML = list.map(p => {
      const best = sc[p.id];
      return `<a class="card" href="practicals/${p.file}">
        <div class="thumb"><img src="images/thumbs/${p.file.replace(".html", ".jpg")}" alt="" loading="lazy" width="720" height="405">
          <span class="badge ${p.extra ? "extra" : ""}">${esc(p.exp ? t("exp", { n: p.exp }) : t("extra"))}</span>${best !== undefined ? `<span class="score">${esc(t("best", { p: best }))}</span>` : ""}</div>
        <div class="body"><span class="unit">${esc(t("unit", { n: String(p.unit).padStart(2, "0") }))} · ${esc(L(U[p.unit]))}</span>
          <h3>${esc(L(p.title))}</h3><p>${esc(L(p.aim))}</p>
          <div class="tags">${p.tags.map(k => `<span>${esc(L(TG[k]))}</span>`).join("")}</div>
          <span class="open">${esc(t("open"))} <span aria-hidden="true">→</span></span></div></a>`;
    }).join("");
  }
  function render() { applyStatic(); renderChips(); renderGrid(); }
  document.querySelectorAll(".seg button").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; try { localStorage.setItem("svl-lang", lang); } catch (e) {} render(); }));
  $("chips").addEventListener("click", e => { const b = e.target.closest("[data-u]"); if (!b) return; unit = b.dataset.u; renderChips(); renderGrid(); });
  $("q").addEventListener("input", e => { q = e.target.value.trim(); renderGrid(); });
  window.addEventListener("pageshow", renderGrid); // refresh saved scores when coming back from a practical
  $("statN").textContent = P.length; $("yr").textContent = new Date().getFullYear();
  render();
})();
