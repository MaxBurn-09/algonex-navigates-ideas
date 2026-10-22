const R=[
["eligibility","Eligibility",[
"Open to all undergraduate and postgraduate students of any recognised college or university in India.",
"Every participant must carry a <b>valid college ID card</b> and a government photo ID at check-in.",
"Students of any branch or year may take part. Design, management and non-tech students are welcome.",
"Recent graduates (passed out in 2026) may join with proof of graduation.",
"A participant can be part of <b>only one team</b>.|DQ",
"Members of the organising committee cannot take part."]],
["teams","Teams & Registration",[
"Teams must have <b>2 to 6 members</b>, including one team leader.",
"Members may come from different colleges, branches or years.",
"Teams with at least one woman member are strongly encouraged.",
"Registration happens <b>only on Unstop</b>. Fill in correct details for every member.",
"The registration fee is <b>₹500 per member</b>. It is not refundable or transferable.",
"Team members cannot be added, removed or swapped after registration closes, except with written approval from the organisers.",
"The team leader is the official point of contact for all communication."]],
["opensource","Open-Source Policy",[
"Create a <b>public GitHub repository</b> before the clock starts and share the link at check-in.|DQ",
"Add an OSI-approved licence (<b>MIT, Apache 2.0, GPL-3.0, BSD or MPL</b>) as a LICENSE file in the repository root.|DQ",
"All code must be committed to that repository. Private repositories or code shared only as ZIP files will not be judged.",
"Commit at least once every 2–3 hours with clear messages. Judges check commit history.",
"Open-source libraries, frameworks, APIs and datasets may be used if their licences allow it. List them in the README.",
"Do not include passwords, API keys or private data in the repository. Use example config files instead.",
"Your README must include: problem statement ID, team name, members, project description, tech stack, setup steps and screenshots or a demo link.",
"Teams keep the rights to their work. Because it is open source, others can use it under the licence you choose.",
"Teams that keep improving their project as open source after the event may be featured by Searching Eyes Club."]],
["building","Building the Project",[
"Choose one problem statement from the <a href='tracks.html'>Tracks</a> page, or the Open Innovation track. Mention its ID when you submit.",
"All coding must happen within the <b>24-hour hackathon window</b> (25–26 Nov 2026).|DQ",
"You may research, sketch, plan and design wireframes beforehand, but must not write project code beforehand.",
"Starter templates and boilerplate from public sources are allowed. Mention them in the README.",
"AI tools such as ChatGPT, Copilot or Lovable are allowed. Explain how you used them during the presentation.",
"Hardware teams must bring their own components. Basic power and internet will be provided.",
"Reusing a previous project, or copying another team's code, means instant disqualification.|DQ"]],
["venue","Venue & Conduct During the Event",[
"Report to the venue by <b>8:00 AM on Day 1</b> for check-in. Late teams may lose part of their build time.",
"At least half of each team must be present at the venue at all times.",
"Wear your participant ID badge at all times on campus.",
"Bring your own laptops, chargers and extension boards. The university is not responsible for lost items.",
"Food, Wi-Fi and rest areas will be provided. Overnight stay is limited to the hackathon area.",
"Follow volunteers' and mentors' instructions during check-ins and mentoring rounds."]],
["submission","Submission",[
"Submit on Unstop before the deadline: <b>GitHub repository link, demo video (up to 3 minutes) and a pitch deck (PDF, up to 10 slides)</b>.",
"Late submissions will not be accepted. The repository is frozen at the deadline time.|DQ",
"Commits made after the deadline will not be considered.",
"The demo video must show the actual working project, not just slides.",
"Each team gets <b>5 minutes to pitch and 3 minutes for questions</b> in the final round."]],
["judging","Judging Criteria",[
"<b>Innovation & originality</b> – 25%",
"<b>Technical complexity & working demo</b> – 25%",
"<b>Impact & relevance to the problem</b> – 20%",
"<b>Open-source quality</b> (README, licence, commit history, code clarity) – 15%",
"<b>Presentation & teamwork</b> – 15%",
"Shortlisted teams from the first round move to the grand finale.",
"The judges' decision is final. No appeals will be considered."]],
["prizes","Prizes & Certificates",[
"Total prize pool: <b>₹1.5 Lakh+</b>, shared between winners and special awards.",
"Prize money is paid to the team leader's bank account within 30 days, after ID checks.",
"All participants who submit a project receive a participation certificate.",
"Prizes may be withheld if a team is found to have broken the rules, even after results are announced."]],
["conduct","Code of Conduct",[
"Treat everyone with respect: participants, mentors, judges, volunteers and staff.",
"Harassment, bullying, or discrimination based on gender, religion, caste, region or ability will not be tolerated.|DQ",
"Alcohol, smoking, drugs and weapons are banned on campus.|DQ",
"Do not damage university property. Teams will pay for any damage caused.",
"Do not attack, hack or disrupt the venue network or other teams' projects.|DQ",
"Report any problem to an organiser or volunteer straight away."]],
["general","General Terms",[
"Photos and videos taken during the event may be used by the university and Searching Eyes Club for promotion.",
"Organisers may change the schedule, rules or prizes if needed. All registered teams will be informed.",
"Organisers may disqualify any team for misconduct or rule-breaking at any stage.",
"For any questions, contact the organising team through the details on the home page."]]
];
const $=s=>document.querySelector(s),list=$('#list'),toc=$('#toc');let open=new Set([R[0][0]]);
const esc=t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function hl(h,q){if(!q)return h;return h.replace(/(<[^>]+>)|([^<]+)/g,(m,tag,txt)=>tag||txt.replace(new RegExp(esc(q),'gi'),x=>'<mark>'+x+'</mark>'))}
function draw(){const q=$('#q').value.trim();let any=false;
list.innerHTML=R.map(([id,t,rules],i)=>{const rs=rules.map(r=>r.split('|')).filter(([r])=>!q||r.replace(/<[^>]+>/g,'').toLowerCase().includes(q.toLowerCase())||t.toLowerCase().includes(q.toLowerCase()));
if(!rs.length)return'';any=true;const o=q||open.has(id);
return `<section class="card acc rsec ${o?'open':''}" id="${id}" style="margin:0 0 16px"><button aria-expanded="${o}" data-id="${id}"><span class="n">${String(i+1).padStart(2,'0')}</span><h2>${t}</h2><span class="c">${rs.length} rule${rs.length>1?"s":""}</span><span class="x">+</span></button><div class="bd"><ol>${rs.map(([r,f])=>`<li>${hl(r,q)}${f?'<span class="pen">DQ</span>':''}</li>`).join('')}</ol></div></section>`}).join('')||'';
if(!any)list.innerHTML='<p class="empty">No rules match your search.</p>';
list.querySelectorAll('.acc>button').forEach(b=>b.onclick=()=>{const id=b.dataset.id;open.has(id)?open.delete(id):open.add(id);draw()});
toc.innerHTML=R.map(([id,t])=>`<a href="#${id}" data-id="${id}">${t}</a>`).join('');
toc.querySelectorAll('a').forEach(a=>a.onclick=()=>{open.add(a.dataset.id);draw()});spy()}
let obs;function spy(){obs&&obs.disconnect();obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)toc.querySelectorAll('a').forEach(a=>a.classList.toggle('act',a.dataset.id===e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});list.querySelectorAll('.acc').forEach(s=>obs.observe(s))}
$('#q').oninput=draw;$('#ex').onclick=()=>{R.forEach(r=>open.add(r[0]));draw()};$('#co').onclick=()=>{open.clear();draw()};
$('#ag').onchange=e=>{const g=$('#go');g.style.opacity=e.target.checked?1:.4;g.style.pointerEvents=e.target.checked?'auto':'none'};
draw();
