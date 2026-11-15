const $=s=>document.querySelector(s), esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const d=PORTFOLIO,s=d.site;
function text(id,v){$(id).textContent=v??""}
document.title=`Portfolio | ${s.name}`;text("#brand",s.brand);text("#name",s.name);text("#footname",s.name);text("#availability",s.availability);text("#role",s.role);text("#bio",s.bio);text("#location",s.location);text("#focus",s.focus);text("#currently",s.currently);text("#year",new Date().getFullYear());text("#contact-copy",s.contact);text("#contact-location",s.location);
if(s.photo){$("#photo").src=s.photo;$("#photo").onload=()=>$("#photo-placeholder").style.display="none"}
$("#cv").href=s.cv||"#";if(!s.cv)$("#cv").classList.add("disabled");$("#email").href=`mailto:${s.email||""}`;
text("#about-summary",d.about.summary);text("#about-description",d.about.description);
$("#facts").innerHTML=(d.about.facts||[]).map(x=>`<div><small>${esc(x.label)}</small><b>${esc(x.value)}</b></div>`).join("");
$("#skills-list").innerHTML=(d.skills||[]).map((x,i)=>`<div class="skill reveal"><small>0${i+1} / ${esc(x.group)}</small><h3>${esc(x.name)}</h3><div class="bar"><i style="--v:${Math.min(100,Math.max(0,x.value||0))}%"></i></div><small>${esc(x.level)} · ${x.value}%</small></div>`).join("");
let filter="All";
function projects(){const cats=["All",...new Set(d.projects.map(p=>p.category))];$("#filters").innerHTML=cats.map(c=>`<button class="${filter===c?"active":""}" data-filter="${esc(c)}">${esc(c)}</button>`).join("");let list=d.projects.filter(p=>filter==="All"||p.category===filter);
$("#projects-list").innerHTML=list.length?list.map(p=>`<div class="project reveal" data-title="${esc(p.title)}"><div class="thumb">${p.image?`<img src="${esc(p.image)}" onerror="this.remove()">`:""}<span>↗</span><b>PROJECT<br>PREVIEW</b></div><small>${esc(p.category)} · ${esc(p.year)}</small><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="tags">${(p.tags||[]).map(t=>`<i>${esc(t)}</i>`).join("")}</div></div>`).join(""):`<p class="empty">Tambahkan proyek di config.js.</p>`;
$("#filters").querySelectorAll("button").forEach(b=>b.onclick=()=>{filter=b.dataset.filter;projects();reveal()});
$("#projects-list").querySelectorAll(".project").forEach(card=>card.onclick=()=>{const p=d.projects.find(x=>x.title===card.dataset.title);text("#modal-cat",`${p.category} / ${p.year}`);text("#modal-title",p.title);text("#modal-desc",p.description||p.summary);$("#modal-img").src=p.image||"";$("#modal-img").style.display=p.image?"block":"none";$("#modal-tags").innerHTML=(p.tags||[]).map(t=>`<i>${esc(t)}</i>`).join("");$("#modal-link").href=p.link||"#";$("#modal-link").style.display=p.link?"inline-flex":"none";$("#modal").classList.add("open")})}
projects();
$("#achievements-list").innerHTML=(d.achievements||[]).map(a=>`<div class="achievement reveal"><div class="cert">${a.image?`<img src="${esc(a.image)}" onerror="this.remove()">`:""}<b>CERTIFICATE / AWARD</b></div><div><small>${esc(a.issuer)} · ${esc(a.year)}</small><h3>${esc(a.title)}</h3><p>${esc(a.description)}</p></div></div>`).join("");
$("#timeline").innerHTML=(d.experience||[]).map((e,i)=>`<div class="event reveal"><small>0${i+1} / ${esc(e.type)} · ${esc(e.period)}</small><h3>${esc(e.title)}</h3><b>${esc(e.organization)}</b><p>${esc(e.description)}</p></div>`).join("");
$("#socials").innerHTML=(s.socials||[]).filter(x=>x.url).map(x=>`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)} ↗</a>`).join("");
$("#menu").onclick=()=>$("#nav").classList.toggle("open");$("#nav").querySelectorAll("a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
document.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=>$("#modal").classList.remove("open"));document.onkeydown=e=>{if(e.key==="Escape")$("#modal").classList.remove("open")};
window.onscroll=()=>{$("#progress").style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+"%";$("header").classList.toggle("scrolled",scrollY>20)};
function reveal(){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");ob.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal:not(.visible)").forEach(x=>ob.observe(x))}
reveal();