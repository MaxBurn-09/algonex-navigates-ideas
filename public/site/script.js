// ============================================
// EDIT OFFICIAL EVENT INFORMATION HERE
// ============================================
const HACKATHON_CONFIG = {
  name: "AlgoNex 1.0",
  // CHANGE THIS TO THE OFFICIAL HACKATHON DATE AND TIME (placeholder)
  date: "2026-11-25T10:00:00",
  registrationUrl: "https://unstop.com/", // REPLACE WITH YOUR UNSTOP EVENT LINK
  email: "mdu.hackathon@mdu.edu.in",
  phone: "+91 XXXXX XXXXX"
};
// Stats: [number, suffix, label, prefix]
const STATS = [[500, "+", "Participants", ""], [100, "+", "Teams", ""], [30, "", "Hours", ""], [1.5, "L+", "Prize pool", "₹"]];
const NAV = [["home", "Home"], ["about", "About"], ["themes", "Themes"], ["timeline", "Timeline"], ["prizes", "Prizes"], ["rules", "Rules"], ["faq", "FAQ"]];
const FLOW = ["Idea", "Build", "Test", "Pitch", "Impact"];
const WHY = [["🛠", "Build", "Turn your idea into a working prototype."], ["💡", "Innovate", "Solve meaningful real-world problems."], ["🤝", "Collaborate", "Build with people who think differently."], ["📚", "Learn", "Gain practical experience from mentors."], ["🌐", "Network", "Meet students, experts and innovators."], ["🏆", "Win", "Compete for prizes, recognition and opportunities."]];
const THEMES = [["🤖", "AI & Machine Learning", "Intelligent solutions for real-world challenges."], ["💳", "FinTech", "Reinventing financial experiences."], ["🩺", "Healthcare", "Technology for better healthcare."], ["🎓", "EdTech", "The future of learning."], ["🛡", "Cybersecurity", "Building safer digital ecosystems."], ["🏫", "Smart Campus", "Making campuses smarter and more connected."], ["🌱", "Sustainability", "Technology for a better planet."], ["✨", "Open Innovation", "Build something unexpected."]];
const STEPS = ["Register", "Form team", "Choose challenge", "Build", "Submit", "Pitch", "Win"];
// PLACEHOLDER DATES: REPLACE WITH THE OFFICIAL SCHEDULE
const DATES = [["Registration opens", "Open on Unstop"], ["Registration closes", "TBA"], ["Team shortlisting", "18 Nov 2026"], ["Hackathon begins", "25 Nov 2026"], ["Final submission", "26 Nov 2026"], ["Winners announced", "26 Nov 2026"]];
// PLACEHOLDER PRIZES: REPLACE WITH OFFICIAL PRIZE INFORMATION
const PRIZES = [["first", "🥇", "01 · Winner", "₹65,000"], ["second", "🥈", "02 · Runner up", "₹45,000"], ["third", "🥉", "03 · Second runner up", "₹30,000"]];
const AWARDS = ["Best UI/UX", "Best Innovation", "Best Social Impact", "Best Beginner Team"];
const JUDGE = [["Innovation", 25], ["Technical execution", 25], ["Impact & relevance", 20], ["UI / UX", 15], ["Presentation", 15]];
// PLACEHOLDER RULES: REPLACE WITH THE OFFICIAL RULEBOOK
const RULES = [["Eligibility", "Open to all enrolled students."], ["Team size", "Teams of 3 to 5 members, with at least 1 female candidate in every team."], ["Originality", "Projects must be built by the team during the event. Cite any open-source code you use."], ["Technology usage", "Any language, framework or tool may be used unless a track says otherwise."], ["Submission requirements", "Source code repository, short demo, and a brief description before the deadline."], ["Intellectual property", "Teams keep ownership of their work. Organisers may showcase submissions."], ["Code of conduct", "Be respectful and inclusive. Harassment of any kind is not tolerated."], ["Judging", "Judges score using the published criteria. Their decision is final."], ["Disqualification", "Plagiarism, rule violations or misconduct may lead to disqualification."]];
// PLACEHOLDER FAQ: CONFIRM ANSWERS WITH THE ORGANISERS
const FAQ = [["Who can participate?", "All enrolled students are eligible."], ["What is the team size?", "Teams must have 3 to 5 members, with at least 1 female candidate."], ["Can beginners participate?", "Yes. Beginners are welcome, and there is a Best Beginner Team award."], ["Can I participate individually?", "No. Participation is team-based: 3 to 5 members, including at least 1 female candidate."], ["What technologies can we use?", "Any language, framework or tool, unless a specific track says otherwise."], ["Is the hackathon free?", "No. The registration fee is ₹500 per team member."], ["Will mentors be available?", "Yes, mentors are planned to guide teams during the event."], ["What do we need to submit?", "A code repository, a short demo and a project description."], ["How will judging work?", "Teams are scored on innovation, technical execution, impact, UI/UX and presentation."], ["What happens after registration?", "You will receive a confirmation and next steps from the organising team."]];
const PEOPLE = [["Mentor 01", "Industry Expert"], ["Mentor 02", "Technology Expert"], ["Mentor 03", "Entrepreneur"], ["Judge 01", "Industry Leader"]];
const PARTNERS = ["Technology Partner", "Industry Partner", "Community Partner", "Knowledge Partner"];
const YEARS = ["1st year", "2nd year", "3rd year", "4th year", "Other"];
// Field: [id, label, type, options or placeholder, required, class]
const FIELDS = [["name", "Full name", "text", "", 1], ["email", "Email", "email", "", 1], ["phone", "Phone", "tel", "", 1], ["college", "University / College", "text", "", 1], ["course", "Course", "text", "", 1], ["year", "Year", "select", YEARS, 1], ["team", "Team name", "text", "", 1], ["size", "Team size", "select", ["1", "2", "3", "4"], 1], ["leader", "Team leader", "text", "", 1], ["theme", "Preferred theme", "select", THEMES.map(t => t[1]), 1], ["link", "GitHub / Portfolio (optional)", "url", "https://", 0, "full"], ["idea", "Project idea", "textarea", "", 1, "full"]];

const C = HACKATHON_CONFIG;
const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
const put = (s, h) => $(s).innerHTML = h;
const card = (n, ic, t, d, ar) => `<article class="card rv"><span class="n">0${n}</span><div class="ic">${ic}</div><h3>${t}</h3><p>${d}</p>${ar ? '<span class="ar">→</span>' : ''}</article>`;
const acc = l => l.map(([q, a]) => `<div class="acc rv"><button aria-expanded="false"><span>${q}</span><i>+</i></button><div class="b"><div><p>${a}</p></div></div></div>`).join('');

put('#links', NAV.map(([id, l]) => `<li><a href="#${id}">${l}</a></li>`).join(''));
put('#stats', STATS.map(s => `<div class="stat rv"><b data-n="${s[0]}" data-p="${s[3]}" data-s="${s[1]}">${s[3]}0</b><span>${s[2]}</span></div>`).join(''));
put('#flow', FLOW.map((f, i) => `<div style="--i:${i}">${i + 1} &nbsp;${f}</div>${i < 4 ? '<i>↓</i>' : ''}`).join(''));
put('#why', WHY.map((w, i) => card(i + 1, ...w)).join(''));
put('#themeGrid', THEMES.map((w, i) => card(i + 1, ...w, 1)).join(''));
put('#dates', DATES.map(d => `<div class="card dt rv"><small>${d[0]}</small><h3>${d[1]}</h3></div>`).join(''));
put('#prz', PRIZES.map(p => `<div class="card pz ${p[0]} rv"><div class="medal">${p[1]}</div><small>${p[2]}</small><b class="grad">${p[3]}</b></div>`).join(''));
put('#awards', AWARDS.map(a => `<li>${a}</li>`).join(''));
put('#judge', JUDGE.map(j => `<div class="jr"><div><span>${j[0]}</span><span>${j[1]}%</span></div><div class="bar"><i style="--w:${j[1] * 4}%"></i></div></div>`).join(''));
put('#rulesList', acc(RULES));
put('#faqList', acc(FAQ));
put('#people', PEOPLE.map(p => `<div class="card person rv"><div class="av"></div><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join(''));
put('#partners', [['logo.png','Maya Devi University'],['ugc.png','UGC'],['aicte.png','AICTE'],['nep.png','NEP 2020']].map(([f,n]) => `<div class="card partner rv"><img src="${f}" alt="${n}" onerror="this.outerHTML='<b>${n}</b>'"><small>${n}</small></div>`).join(''));
$('#em').textContent = $('#em').href = C.email; $('#em').href = 'mailto:' + C.email; $('#ph').textContent = C.phone;
$$('.reg').forEach(a => { a.href = C.registrationUrl; a.target = '_blank'; a.rel = 'noopener'; });

// Countdown
const cd = $('#cd'), T = new Date(C.date).getTime();
function tick() {
  if (isNaN(T)) return;
  const d = T - Date.now();
  if (d <= 0) { cd.innerHTML = '<strong class="live">HACKATHON LIVE 🚀</strong>'; clearInterval(iv); return; }
  const v = [d / 864e5, d / 36e5 % 24, d / 6e4 % 60, d / 1e3 % 60].map(x => String(Math.floor(x)).padStart(2, '0'));
  cd.innerHTML = ['Days', 'Hours', 'Minutes', 'Seconds'].map((l, i) => `<div><b>${v[i]}</b><small>${l}</small></div>`).join('');
}
const iv = setInterval(tick, 1000); tick();

// Count-up
function count(el) {
  const n = +el.dataset.n, t0 = performance.now();
  (function f(t) {
    const p = Math.min((t - t0) / 1600, 1);
    el.textContent = el.dataset.p + (n * (1 - Math.pow(1 - p, 3))).toFixed(n % 1 ? 1 : 0) + el.dataset.s;
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}

// Reveal: cards, stats, timeline steps, judging bars
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  const b = $('b[data-n]', e.target); if (b) count(b);
  io.unobserve(e.target);
}), { threshold: .2 });
$$('.rv,.steps li').forEach(el => io.observe(el));

// Navbar: scroll state, mobile menu, active link
const nav = $('#nav');
addEventListener('scroll', () => nav.classList.toggle('sc', scrollY > 30), { passive: true });
const setMenu = o => { nav.classList.toggle('open', o); $('#burger').setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; };
$('#burger').onclick = () => setMenu(!nav.classList.contains('open'));
$$('#links a').forEach(a => a.onclick = () => setMenu(false));
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$('#links a').forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
NAV.forEach(([id]) => spy.observe($('#' + id)));

// Accordions (rules + FAQ): one open per list
document.addEventListener('click', e => {
  const b = e.target.closest('.acc button'); if (!b) return;
  const a = b.parentElement, open = !a.classList.contains('open');
  $$('.acc', a.parentElement).forEach(x => { x.classList.remove('open'); $('button', x).setAttribute('aria-expanded', false); });
  a.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
});

// Card glow follows the pointer
document.addEventListener('pointermove', e => {
  const c = e.target.closest('.card'); if (!c) return;
  const r = c.getBoundingClientRect();
  c.style.setProperty('--x', e.clientX - r.left + 'px'); c.style.setProperty('--y', e.clientY - r.top + 'px');
});

// Particle field
(() => {
  const c = $('#fx'), x = c.getContext('2d');
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  let w, h, P = [], vis = true; new IntersectionObserver(e => vis = e[0].isIntersecting).observe(c);
  const rs = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; P = Array.from({ length: Math.min(70, w / 16 | 0) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.6 + .4, v: Math.random() * .3 + .1 })); };
  let off = false; new IntersectionObserver(e => off = !e[0].isIntersecting).observe(c); rs(); addEventListener('resize', rs);
  (function f() {
    if (off) return requestAnimationFrame(f); x.clearRect(0, 0, w, h); x.fillStyle = 'rgba(255,70,85,.55)';
    P.forEach(p => { p.y -= p.v; if (p.y < 0) p.y = h; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill(); });
    requestAnimationFrame(f);
  })();
})();

// ===== SCROLL EFFECTS =====
// Word-by-word heading reveal
$$('.sec h2').forEach(h => {
  let k = 0; const w = document.createTreeWalker(h, 4), ns = [];
  while (w.nextNode()) ns.push(w.currentNode);
  ns.forEach(n => {
    const g = n.parentElement.classList.contains('grad'), f = document.createDocumentFragment();
    n.textContent.split(/(\s+)/).forEach(t => {
      if (!t.trim()) return f.append(t);
      const s = document.createElement('span'); s.className = 'w';
      s.innerHTML = `<i class="${g ? 'grad' : ''}" style="--k:${k++}">${t}</i>`; f.append(s);
    });
    n.replaceWith(f);
  });
});

// Theme showcase: sticky orb follows the card in focus
const tc = $$('#themeGrid .card'), orbI = $('#orbI'); tc[0].classList.add('on');
const tio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const i = tc.indexOf(e.target);
  tc.forEach(c => c.classList.toggle('on', c === e.target));
  orbI.textContent = THEMES[i][0]; $('#orbN').textContent = `0${i + 1} / 0${tc.length}`;
  orbI.classList.remove('pop'); void orbI.offsetWidth; orbI.classList.add('pop');
}), { rootMargin: '-45% 0px -45% 0px' });
tc.forEach(c => tio.observe(c));

// Magnetic buttons + 3D tilt on prize and profile cards
$$('.btn').forEach(b => {
  b.onpointermove = e => { const r = b.getBoundingClientRect(); b.style.translate = `${(e.clientX - r.left - r.width / 2) * .2}px ${(e.clientY - r.top - r.height / 2) * .3}px`; };
  b.onpointerleave = () => b.style.translate = '';
});
$$('.pz,.person').forEach(c => {
  c.onpointermove = e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`; };
  c.onpointerleave = () => c.style.transform = '';
});

// ===== AlgoNex 1.0: story scrub + dark/light mode =====
const STORY = "Something is wrong in the town. The lights flicker. The gate is open. Flip the world, break the code, and build what survives the Upside Down.";
const sEl = $('#story'); $('#storyText').innerHTML = STORY.split(' ').map(w => `<span class="sw">${w}</span>`).join(' ');
const sws = $$('.sw');
function drawStory() {
  const r = sEl.getBoundingClientRect(), p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight))), n = Math.round(p * 1.15 * sws.length);
  sEl.style.setProperty('--p', p);
  sws.forEach((w, i) => { w.classList.toggle('on', i < n); w.classList.toggle('hot', i === n - 1); });
}
const tg = $('#tg'), root = document.documentElement;
function setTheme(t) { root.dataset.theme = t; tg.textContent = t === 'dark' ? '☀' : '☾'; try { localStorage.setItem('mdu-theme', t); } catch (e) {} }
setTheme(root.dataset.theme || 'dark');
tg.onclick = () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');


// ===== Hour-by-hour roadmap (serpentine timeline, drawn on scroll) =====
const DAYS = [
 { el: '#d1', per: 4, ev: [["8:00 AM", "Check-in, Welcome Kits & Breakfast"], ["9:00 AM", "Grand Opening & Keynote"], ["10:00 AM", "CLOCK STARTS · Hour 0", 1], ["1:30 PM", "Lunch & Sponsor Booths"], ["4:30 PM", "Sponsor Tech Workshop / API Masterclass"], ["7:00 PM", "Mentorship Round 1"], ["9:00 PM", "Dinner & Recharge"], ["11:30 PM", "Midnight Fun & Coding Games"]] },
 { el: '#d2', per: 5, ev: [["2:00 AM", "Bug-squashing & Late-night Mentor Desk"], ["7:30 AM", "Energizer & Breakfast"], ["10:30 AM", "Mentorship Round 2: UI/UX & Pitch Prep"], ["1:00 PM", "Lunch & Final Sync"], ["2:00 PM", "Final Testing, Git Push & Deploy"], ["3:00 PM", "CLOCK STOPS · Hour 30", 1], ["3:30 PM", "Final Pitching & Live Demos"], ["6:00 PM", "Valedictory & Prize Distribution"], ["7:00 PM", "High-Tea, Photos & Wrap-up"]] }
];
const RM = []; let lastW = 0;
function buildDay(d) {
  const el = $(d.el), W = el.clientWidth, mob = W < 720, per = mob ? 2 : d.per, rowH = mob ? 150 : 140, r = rowH / 2, m = r + 6;
  const x0 = m, x1 = W - m, Lr = x1 - x0, top = 45, n = d.ev.length, rows = Math.ceil(n / per), H = top + (rows - 1) * rowH + 95;
  let path = `M${x0},${top}`, S = [], html = '';
  for (let k = 0; k < rows; k++) {
    const y = top + k * rowH, last = k === rows - 1, f = last ? ((n - k * per) - 1) / (per - 1) : 1, ex = k % 2 ? x1 - f * Lr : x0 + f * Lr;
    path += ` L${ex},${y}`;
    if (!last) path += k % 2 ? ` A${r},${r} 0 0 0 ${x0},${y + rowH}` : ` A${r},${r} 0 0 1 ${x1},${y + rowH}`;
  }
  d.ev.forEach((e, i) => {
    const k = Math.floor(i / per), fr = per > 1 ? (i % per) / (per - 1) : 0, x = k % 2 ? x1 - fr * Lr : x0 + fr * Lr;
    S.push(k * (Lr + Math.PI * r) + fr * Lr);
    html += `<div class="tn${e[2] ? ' key' : ''}" style="left:${x}px;top:${top + k * rowH}px"><span class="tt">${e[0]}</span><span class="tl">${e[1]}</span></div>`;
  });
  el.style.height = H + 'px';
  el.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><path class="bg" d="${path}"/><path class="fg" d="${path}"/></svg><div class="head"></div>` + html;
  const fg = $('.fg', el), hd = $('.head', el), L = fg.getTotalLength(), ns = $$('.tn', el); fg.style.strokeDasharray = L;
  return { draw() {
    const rc = el.getBoundingClientRect(); if (rc.bottom < -150 || rc.top > innerHeight + 150) return;
    const p = Math.min(1, Math.max(0, (innerHeight * .7 - rc.top) / rc.height)), l = p * L, pt = fg.getPointAtLength(l);
    fg.style.strokeDashoffset = L - l; hd.style.transform = `translate(${pt.x}px,${pt.y}px)`; hd.style.opacity = p > 0 && p < 1 ? 1 : 0;
    ns.forEach((n, i) => n.classList.toggle('on', p > 0 && l >= S[i] - 2));
  } };
}
const buildAll = () => { RM.length = 0; DAYS.forEach(d => RM.push(buildDay(d))); lastW = innerWidth; };

// ===== Smooth scroll loop: direct writes to a few elements, no page-wide style recalcs =====
const heroIn = $('.hero-in'), vis = $('.vis'), b1 = $('.b1'), b2 = $('.b2'), arms = $$('.hero .arm'), mqs = $$('.mq div'), orb = $('.orb'), vines = $$('.vine path'), bar = $('#bar'), home = $('#home');
let heroH = 1, docH = 1, tk = 0;
const meas = () => { heroH = home.offsetHeight; docH = Math.max(1, root.scrollHeight - innerHeight); };
function frame() {
  tk = 0; const y = scrollY, hp = Math.min(1, y / heroH), sp = Math.min(1, y / docH);
  drawStory(); RM.forEach(r => r.draw());
  if (y < heroH * 1.3) {
    heroIn.style.transform = `translateY(${-hp * 70}px) scale(${1 - hp * .12})`; heroIn.style.opacity = 1 - hp * 1.3;
    vis.style.translate = `0 ${-y * .12}px`; b1.style.translate = `0 ${y * .3}px`; b2.style.translate = `0 ${-y * .2}px`;
    arms.forEach(a => a.style.opacity = (innerWidth > 900 ? 1 : .45) * Math.max(0, 1 - hp * 1.2));
  }
  mqs[0].style.transform = `translateX(${-y * .4}px)`; mqs[1].style.transform = `translateX(calc(-70% + ${y * .4}px))`;
  orb.style.setProperty('--sy', y); bar.style.transform = `scaleX(${sp})`;
  vines.forEach(p => p.style.strokeDashoffset = 1 - sp);
}
const queue = () => { tk || (tk = requestAnimationFrame(frame)); };
addEventListener('scroll', queue, { passive: true });
addEventListener('resize', () => { meas(); if (innerWidth !== lastW) buildAll(); queue(); });
buildAll(); meas(); frame();
