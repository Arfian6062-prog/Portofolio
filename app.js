document.documentElement.classList.add("js-ready");
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const data = window.PORTFOLIO || {};
const site = data.site || {};
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function setText(selector, value){ const el=$(selector); if(el && value) el.textContent=value; }
setText("#heroName", site.name || "ARFIAN");
setText("#heroRole", site.role || "ENTREPRENEUR · DEVELOPER · CREATOR");
setText("#heroBio", site.bio);
setText("#heroLocation", site.location);
setText("#cardName", site.name);
setText("#cardRole", (site.role || "").replaceAll(" · "," / "));
setText("#cardLocation", (site.location || "INDONESIA").split(",")[0]);
setText("#cardFocus", site.focus);
setText("#aboutSummary", data.about?.summary);
setText("#aboutDescription", data.about?.description);
setText("#contactText", site.contact);
const photo=$("#profilePhoto"); if(photo && site.photo) photo.src=site.photo;
const cv=$("#heroCv"); if(cv && site.cv) cv.href=site.cv;
const email=$("#contactEmail"); if(email && site.email){email.textContent=site.email+" ↗";email.href="mailto:"+site.email;}

const facts=$("#facts");
if(facts) facts.innerHTML=(data.about?.facts||[]).map(f=>`<div class="fact"><span>${escapeHTML(f.label)}</span><strong>${escapeHTML(f.value)}</strong></div>`).join("");

const card=$("#idCard");
function flipCard(){card?.classList.toggle("flipped");}
card?.addEventListener("click",flipCard);
card?.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flipCard();}});

const filters=$("#projectFilters"), projectGrid=$("#projectGrid");
const projects=data.projects||[];
const categories=["ALL",...new Set(projects.map(p=>p.category||"OTHER"))];
if(filters) filters.innerHTML='<span class="filter-caption">FILTER /</span>'+categories.map((c,i)=>`<button class="filter-btn ${i===0?"active":""}" data-filter="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join("");
function renderProjects(filter="ALL"){
  if(!projectGrid)return;
  const shown=projects.filter(p=>filter==="ALL"||p.category===filter);
  projectGrid.innerHTML=shown.map((p,i)=>`<article class="project-card" tabindex="0" role="button" data-project="${projects.indexOf(p)}">
    <div class="project-visual"><span class="project-number">PROJECT / ${String(projects.indexOf(p)+1).padStart(2,"0")}</span><span class="project-open">↗</span><div class="project-placeholder">PROJECT VISUAL<br>ADD YOUR IMAGE</div><img src="${escapeHTML(p.image||"")}" alt="${escapeHTML(p.title)}" onerror="this.remove()"></div>
    <div class="project-info"><div class="project-meta"><span>${escapeHTML(p.category||"PROJECT")}</span><span>${escapeHTML(p.year||"")}</span></div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p><div class="project-tags">${(p.tags||[]).slice(0,3).map(t=>`<span>${escapeHTML(t)}</span>`).join("")}</div></div></article>`).join("");
  $$(".project-card",projectGrid).forEach(el=>{
    el.addEventListener("click",()=>openProject(Number(el.dataset.project)));
    el.addEventListener("keydown",e=>{if(e.key==="Enter")openProject(Number(el.dataset.project));});
    el.addEventListener("mousemove",e=>{if(matchMedia("(hover:hover)").matches){const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-3px)`;}});
    el.addEventListener("mouseleave",()=>el.style.transform="");
  });
}
renderProjects();
filters?.addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;$$(".filter-btn",filters).forEach(x=>x.classList.toggle("active",x===b));renderProjects(b.dataset.filter);});

const skills=$("#skillList");
if(skills) skills.innerHTML=(data.skills||[]).map(s=>`<div class="skill-row"><span class="skill-name">${escapeHTML(s.name)}</span><div class="skill-track"><div class="skill-fill" data-width="${Math.max(0,Math.min(100,Number(s.value)||0))}%"></div></div><span class="skill-level">${escapeHTML(s.level||"")}</span></div>`).join("");

const awards=$("#awardsGrid"), achievements=data.achievements||[];
if(awards) awards.innerHTML=achievements.map((a,i)=>`<article class="award-card" tabindex="0" role="button" data-award="${i}"><div class="award-scan"></div><div class="award-top"><span>HOLOGRAM / ${String(i+1).padStart(2,"0")}</span><span>✧</span></div><div class="award-preview"><div class="award-placeholder"><span>CERTIFICATE<br>HOLOGRAPHIC PROJECTION<br>✧</span></div><img src="${escapeHTML(a.image||"")}" alt="${escapeHTML(a.title)}" onerror="this.remove()"></div><div class="award-info"><h3>${escapeHTML(a.title)}</h3><p>${escapeHTML(a.issuer)} · ${escapeHTML(a.year)}</p></div></article>`).join("");
$$(".award-card",awards||document).forEach(el=>{const open=()=>openAward(Number(el.dataset.award));el.addEventListener("click",open);el.addEventListener("keydown",e=>{if(e.key==="Enter")open();});});

const timeline=$("#timeline");
if(timeline) timeline.innerHTML=(data.experience||[]).map(x=>`<div class="timeline-item"><div class="timeline-type">${escapeHTML(x.type)}</div><div class="timeline-main"><h3>${escapeHTML(x.title)}</h3><span>${escapeHTML(x.organization)}</span></div><div class="timeline-period">${escapeHTML(x.period)}</div><p class="timeline-desc">${escapeHTML(x.description)}</p></div>`).join("");

const socials=$("#socialLinks");
if(socials) socials.innerHTML=(site.socials||[]).map(s=>`<a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.label)} ↗</a>`).join("");

const modal=$("#detailModal"), modalContent=$("#modalContent");
function showModal(html){modalContent.innerHTML=html;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
function openProject(i){const p=projects[i];if(!p)return;showModal(`<div class="modal-meta">${escapeHTML(p.category)} / ${escapeHTML(p.year)}</div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p><div class="modal-tags">${(p.tags||[]).map(t=>`<span>${escapeHTML(t)}</span>`).join("")}</div>${p.link?`<p><a class="button button-primary" href="${escapeHTML(p.link)}" target="_blank" rel="noopener">OPEN PROJECT ↗</a></p>`:""}`);}
function openAward(i){const a=achievements[i];if(!a)return;showModal(`<div class="modal-meta">ACHIEVEMENT / ${String(i+1).padStart(2,"0")}</div><h3>${escapeHTML(a.title)}</h3><p>${escapeHTML(a.issuer)} · ${escapeHTML(a.year)}</p><img src="${escapeHTML(a.image||"")}" alt="${escapeHTML(a.title)}" onerror="this.style.display='none'"><p>${escapeHTML(a.description)}</p>`);}
$$("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});

const menu=$("#menuToggle"), nav=$("#nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
$$("a",nav||document).forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}}),{threshold:.12});
$$(".reveal").forEach(el=>revealObserver.observe(el));
const skillObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){$$(".skill-fill",entry.target).forEach(fill=>fill.style.width=fill.dataset.width);skillObserver.unobserve(entry.target);}}),{threshold:.2});
const consoleEl=$(".skills-console");if(consoleEl)skillObserver.observe(consoleEl);
