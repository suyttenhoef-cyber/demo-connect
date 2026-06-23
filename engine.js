/* ============================================================
   MOTEUR GÉNÉRIQUE — commun à toutes les collections.
   Lit TENANT (config.js) + RUBRIQUES/TYPES/CONTENT/ASSIST/… (data/*.js).
   Ne contient aucune donnée propre à une collection.
   ============================================================ */
/* ============================================================
   ICÔNES
   ============================================================ */
const I = {
  home:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  search:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  book:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
  grid:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  folder:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  chev:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
  assist:'<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM19 14l.9 2.4 2.4.9-2.4.9L19 21l-.9-2.4-2.4-.9 2.4-.9L19 14z"/></svg>',
  help:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 4 1.8c0 1.7-2.5 2-2.5 3.2M12 17h.01"/></svg>',
  user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',
  lock:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  trend:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M21 7v5h-5"/></svg>',
  cap:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m2 8 10-4 10 4-10 4z"/><path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg>',
  star:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.6 5.6 6.1.7-4.6 4.1 1.3 6L12 16.9 6.6 19.5l1.3-6L3.3 9.3l6.1-.7z"/></svg>',
  memo:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v12l-4 4H4z"/><path d="M16 20v-4h4"/></svg>',
  doc:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>',
  screen:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  gavel:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m14 13-7 7M3 21h8M13 7l4 4M9 11 17 3l4 4-8 8z"/></svg>',
  law:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M5 7h14M7 7l-3 6h6zM17 7l-3 6h6z"/></svg>',
  pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  news:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h6M7 13h10M7 17h10"/></svg>',
  mag:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
  model:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4"/></svg>',
  flow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 6h10M6 8l5 8M18 8l-5 8"/></svg>',
  bulb:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/></svg>',
  runner:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="13" cy="4" r="2"/><path d="m6 17 3-3 3 1 3-3M9 14l-2 5M15 12l2 4"/></svg>',
  stop:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>',
  brain:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 1 5 3 3 0 0 0 3 3 3 3 0 0 0 3-1V4a3 3 0 0 0-3-1ZM15 3a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-1 5 3 3 0 0 1-3 3 3 3 0 0 1-3-1"/></svg>',
};
/* Logo : chemin local pour le dev (Live Server). build.py le remplace par un data URI base64. */
const LOGO_URL="Image/logo_demo.png";
const CUBE='<img class="cube" src="'+LOGO_URL+'" alt="Vanden Broele Connect">';

/* Offre personnalisée : ?c=CODE_POSTAL&col=COLLECTION
   Le PDF est hébergé dans le dossier offres/ du repo GitHub Pages.
   URL construite : offres/{COL}-{CP}.pdf (relative, fonctionne en local et en prod) */
const OFFER_PARAMS=(()=>{
  try{
    const p=new URLSearchParams(window.location.search);
    const c=p.get('c');
    if(!c)return null;
    const col=(p.get('col')||'CPAS').toUpperCase();
    const commune=(typeof COMMUNES!=='undefined'?COMMUNES:[]).find(x=>x.cp===c);
    const fileName=col+'-'+c+'.pdf';
    const url='offres/'+fileName;
    return{cp:c,col,commune:commune||{cp:c,nom:c},url,fileName};
  }catch(e){return null;}
})();

const norm=s=>(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const byId=id=>CONTENT.find(c=>c.id===id);
const rubName=id=>(RUBRIQUES.find(r=>r.id===id)||{}).name||"";
const tColor=t=>(TYPES[t]||{c:"#5f6b78"}).c;
const tIcon=t=>I[TYPE_ICONS[t]||"doc"];

/* ============================================================
   VUES
   ============================================================ */

/* ---- ACCUEIL ---- */
let HOME_TAB="alaune";
function viewHome(){
  const feat=CONTENT.filter(c=>c.featured);
  const recent=CONTENT.slice(0,5);
  let feed="";
  if(HOME_TAB==="alaune"){
    feed=feat.concat(CONTENT.filter(c=>!c.featured).slice(0,2)).map(feedItem).join("");
  }else if(HOME_TAB==="updates"){
    feed=UPDATES.map(u=>`<div class="feed-item"><div class="feed-body">
      <div class="ftype"><span class="tagcat" style="background:${tColor(u.type)}">${u.type}</span> ${u.date}</div>
      <h3><a onclick="openContent('${u.id}')">${byId(u.id).title}</a></h3>
      <p>${u.note}</p></div></div>`).join("");
  }else{
    feed=recent.slice(0,4).map(feedItem).join("");
  }
  return band("",`
  <div class="c-search-band"><div class="wrap">
    <div class="c-search-wrap">
      <div class="c-search-inner">
        <span class="c-search-icon">${I.search}</span>
        <input id="homeSearch" class="c-search-field" placeholder="Introduisez vos termes de recherche…" onkeydown="if(event.key==='Enter')runSearch(this.value)">
      </div>
      <button class="c-search-btn" onclick="runSearch(document.getElementById('homeSearch').value)">Chercher</button>
    </div>
  </div></div>
  <div class="wrap pad"><div class="home-grid">
    <div>
      <div class="tabs">
        <div class="tab ${HOME_TAB==='alaune'?'active':''}" onclick="setTab('alaune')">À la une</div>
        <div class="tab ${HOME_TAB==='updates'?'active':''}" onclick="setTab('updates')">Mises à jour récentes <span class="count">7</span></div>
        <div class="tab ${HOME_TAB==='recent'?'active':''}" onclick="setTab('recent')">Articles consultés récemment</div>
      </div>
      ${feed}
    </div>
    <aside>
      <div class="scard">
        <div class="sh"><span class="si">${I.cap}</span><h4>Formations</h4><a class="more" onclick="go('contenu/E-learning')">Tous les e-learnings →</a></div>
        <div class="el-item"><span class="elt"></span><div><a onclick="openLock()">${ELEARNING.title}</a><small>${ELEARNING.date}</small></div></div>
      </div>
      <div class="scard">
        <div class="sh"><span class="si">${I.star}</span><h4>Mes favoris</h4></div>
        ${CONTENT.filter(c=>c.fav).map(c=>`<div class="fav"><a onclick="openContent('${c.id}')">${c.title}</a><small>${c.type}</small></div>`).join("")}
        <button class="show-more">Afficher plus</button>
      </div>
      <div class="scard">
        <div class="sh"><span class="si">${I.memo}</span><h4>Mes mémos</h4></div>
        <div class="empty-memo">Vous n'avez pas encore de mémo.<br>Annotez un contenu pour le retrouver ici.</div>
      </div>
    </aside>
  </div>
  ${offer()}
  </div>`,true);
}
function feedItem(c){
  const seed=c.id.replace(/-/g,'');
  return `<article class="c-teaser">
    <div class="c-teaser__side">
      <a class="c-teaser__cover" onclick="openContent('${c.id}')">
        <img src="https://picsum.photos/seed/${seed}/280/180" alt="" width="140" height="90" loading="lazy">
      </a>
    </div>
    <div class="c-teaser__main">
      <h2 class="c-teaser__title"><a onclick="openContent('${c.id}')">${c.title}${c.locked?' '+lockMini():''}</a></h2>
      <div class="c-teaser__meta">${c.date}<span> — ${c.author}</span></div>
      <div class="c-teaser__body">${c.summary}</div>
    </div>
  </article>`;
}
const lockMini=()=>`<span style="color:var(--lock);vertical-align:middle">${I.lock}</span>`;
function setTab(t){HOME_TAB=t;render();}

/* ---- RUBRIQUES ---- */
function viewRubriques(){
  return band("Rubriques",`<div class="wrap pad">
    <div class="crumb"><a onclick="go('rubriques')">Collection</a><span class="sep">›</span><a class="link-blue" onclick="go('rubriques')">${TENANT.collection}</a><span class="sep">›</span>${TENANT.collection}</div>
    <div class="rgrid">
      ${RUBRIQUES.map(r=>`<div class="rcard">
        <h3>${r.name}</h3>
        ${r.contient?`<div class="contient">Contient entre autres</div><div class="contient-v">${r.contient}</div>`:""}
        <div class="ractions">
          <a class="r-explore" onclick="go('rubrique/${r.id}')">${I.search}<span>Explorer</span></a>
          ${r.deepen?`<a class="r-deepen" onclick="openLock()"><b style="font-size:15px;line-height:1">+</b><span>Approfondir</span></a>`:""}
        </div>
      </div>`).join("")}
    </div>
  </div>`);
}

/* ---- RUBRIQUE (liste de contenus) ---- */
function viewRubrique(id){
  const items=CONTENT.filter(c=>c.rub===id);
  return band(rubName(id),`<div class="wrap pad">
    <div class="crumb"><a onclick="go('')">Accueil</a><span class="sep">›</span><a onclick="go('rubriques')">Rubriques</a><span class="sep">›</span>${rubName(id)}</div>
    <div class="clist">${items.length?items.map(citem).join(""):"<p style='color:var(--muted)'>Aucun contenu dans cette rubrique pour cette démo.</p>"}</div>
    ${offer()}
  </div>`);
}

/* ---- CONTENU PAR TYPE ---- */
function viewContenuType(t){
  const items=CONTENT.filter(c=>c.type===t);
  return band(t,`<div class="wrap pad">
    <div class="crumb"><a onclick="go('')">Accueil</a><span class="sep">›</span>Contenu<span class="sep">›</span>${t}</div>
    <div class="clist">${items.length?items.map(citem).join(""):"<p style='color:var(--muted)'>Pas de contenu de ce type dans la démo.</p>"}</div>
    ${offer()}
  </div>`);
}

function citem(c){
  return `<div class="citem" onclick="openContent('${c.id}')">
    <div class="cthumb" style="background:linear-gradient(135deg,${tColor(c.type)},${tColor(c.type)}cc)">${tIcon(c.type)}</div>
    <div class="cbody">
      <h3>${c.title}${c.locked?' '+lockMini():''}</h3>
      <div class="ctype">${c.type}</div>
      <div class="crub">${rubName(c.rub)}</div>
      <div class="cmeta"><b>Auteur(s) :</b> ${c.author} &nbsp;·&nbsp; <b>Dernière modification :</b> ${c.date}</div>
    </div>
    <div class="cside">
      <span class="badge-num">${I.trend} ${c.trend}</span>
      <span class="badge-score">${c.score.toFixed(2)}</span>
    </div>
  </div>`;
}

/* ---- BIBLIOTHÈQUE ---- */
function viewBiblio(){
  const books=CONTENT.filter(c=>c.type==="Livres");
  const tree=[["Collection"+TENANT.collection.replace("Connect",""),CONTENT.length,0],
    ["Aide sociale et intégration",CONTENT.filter(c=>c.rub==="aide-sociale").length,1],
    ["Revenu d'intégration (RI)",2,2],["Initiatives locales",4,2],
    ["Finances des CPAS",CONTENT.filter(c=>c.rub==="finances-cpas").length,1],
    ["Budgets",4,2],["Marchés publics",CONTENT.filter(c=>c.rub==="marches-publics").length,1],
    ["Fonctionnement des CPAS",CONTENT.filter(c=>c.rub==="fonctionnement").length,1]];
  return band("Bibliothèque",`<div class="wrap"><div class="s-layout">
    <aside class="s-side">
      <button class="filter-btn" style="margin-bottom:18px">Types de contenu ${I.chev}</button>
      <h4>Affichage</h4>
      <div class="tree"><label class="tnode"><input type="checkbox"> Regrouper en collections</label>
      <label class="tnode"><input type="checkbox"> Uniquement ma bibliothèque</label></div>
      <h4 style="margin-top:18px">Collections</h4>
      <div class="tree">${tree.map(t=>`<label class="tnode ${t[2]===1?'lvl1':t[2]===2?'lvl2':''}">
        <input type="checkbox" ${t[2]===0?'checked':''}> ${t[0]}<span class="tc">${t[1]}</span></label>`).join("")}</div>
    </aside>
    <div>
      <div class="s-head"><h2 style="font-size:21px">Livres</h2>
        <span class="sort">Trier par <b>alphabétique (A-Z)</b> ${I.chev}</span></div>
      <div class="bgrid">${books.map(bookCard).join("")}</div>
      ${offer()}
    </div>
  </div></div>`);
}
function bookCard(c){
  const cv=c.cover||{lic:TENANT.collection.toUpperCase(),icon:"📄"};
  return `<div class="book ${c.locked?'locked':''}" onclick="openContent('${c.id}')">
    <div class="cover">
      ${c.locked?`<span class="lockcorner">${I.lock}</span>`:""}
      <div class="clic" style="background:${cv.lic.includes('FINANCES')?'#2f7a4d':cv.lic.includes('CODE')?'#c9b04a':'var(--navy)'}">${cv.lic}</div>
      <div class="cmid"><div class="ct">${c.title}</div><div class="cic">${cv.icon}</div></div>
      <div class="cbot">${TENANT.collection.toUpperCase()}</div>
    </div>
    <div class="blabel">${c.title}</div><div class="btype">${c.type}</div>
  </div>`;
}

/* ---- CHERCHER ---- */
let SF_TYPE="Tous";
function viewSearch(q){
  let res=CONTENT.map(c=>({c,s:score(c,q)})).filter(r=>r.s>0).sort((a,b)=>b.s-a.s).map(r=>r.c);
  if(!q)res=CONTENT.slice().sort((a,b)=>b.score-a.score);
  if(SF_TYPE!=="Tous")res=res.filter(c=>c.type===SF_TYPE);
  const total=q?res.length:61155;
  const ai=ASSIST.find(a=>a.match.some(m=>norm(q).includes(norm(m))));
  const types=["Tous",...new Set(CONTENT.map(c=>c.type))];
  const treeR=RUBRIQUES.map(r=>[r.name,CONTENT.filter(c=>c.rub===r.id).length]);
  return band("",`
  <div class="searchbig"><div class="wrap">
    <div class="search-input"><span class="typesel">Tout type de contenu ${I.chev}</span>${I.search}
      <input id="sInput" value="${(q||'').replace(/"/g,'&quot;')}" placeholder="Introduisez vos termes de recherche…" onkeydown="if(event.key==='Enter')runSearch(this.value)">
      <button onclick="runSearch(document.getElementById('sInput').value)">Chercher</button></div>
    <div class="filters">
      <button class="filter-btn">Types ${I.chev}</button>
      <button class="filter-btn">Licences ${I.chev}</button>
      <button class="filter-btn">Dernière mise à jour ${I.chev}</button>
    </div>
  </div></div>
  <div class="wrap"><div class="s-layout" style="padding-top:22px">
    <aside class="s-side">
      <h4>Rubriques</h4>
      <div class="tree">${treeR.map(t=>`<label class="tnode"><input type="checkbox"> ${t[0]}<span class="tc">${t[1]}</span></label>`).join("")}</div>
      <h4 style="margin-top:18px">Type de contenu</h4>
      <div class="tree">${types.map(t=>`<label class="tnode" onclick="setSType('${t}','${encodeURIComponent(q||'')}')"><input type="radio" ${SF_TYPE===t?'checked':''}> ${t}</label>`).join("")}</div>
    </aside>
    <div>
      ${ai?`<div class="amsg" style="margin-bottom:18px">
        <div class="assist-q" style="color:var(--assist2)">${I.assist} Réponse de l'assistant Assist</div>
        <div id="aiAns"><div class="thinking"><span></span><span></span><span></span></div></div>
        <div class="asrc" id="aiSrc" style="display:none">${ai.sources.map(id=>{const a=byId(id);return `<div class="s" onclick="openContent('${id}')">${a.locked?I.lock:I.doc} ${a.title}</div>`;}).join("")}</div>
      </div>`:""}
      <div class="s-head"><span class="rc">${total.toLocaleString('fr-BE')} résultat${total>1?'s':''}${q?` pour « <b>${q}</b> »`:''}</span>
        <span class="sort">Trier par <b>les plus pertinents d'abord</b> ${I.chev}</span></div>
      <div class="clist">${res.length?res.map(c=>resultItem(c,q)).join(""):"<p style='color:var(--muted)'>Aucun résultat. Essayez « RIS », « enquête sociale » ou « médiation de dettes ».</p>"}</div>
    </div>
  </div></div>
  ${ai?`<script>setTimeout(function(){var e=document.getElementById('aiAns');if(e){e.innerHTML='<div class="answer">'+${JSON.stringify(ai.text)}+'</div>';var s=document.getElementById('aiSrc');if(s)s.style.display='flex';}},650)<\/script>`:""}`,true);
}
function resultItem(c,q){
  return `<div class="citem" onclick="openContent('${c.id}')">
    <div class="cthumb" style="background:linear-gradient(135deg,${tColor(c.type)},${tColor(c.type)}cc)">${tIcon(c.type)}</div>
    <div class="cbody">
      <h3>${hl(c.title,q)}${c.locked?' '+lockMini():''}</h3>
      <div class="ctype">${c.type}</div><div class="crub">${rubName(c.rub)}</div>
      <div class="cmeta"><b>Auteur(s) :</b> ${c.author} &nbsp;·&nbsp; <b>Dernière modification :</b> ${c.date}</div>
    </div>
    <div class="cside"><span class="badge-num">${I.trend} ${c.trend}</span><span class="badge-score">${c.score.toFixed(2)}</span></div>
  </div>`;
}
function score(c,q){const tk=norm(q).split(/\s+/).filter(Boolean);if(!tk.length)return 0;
  const hay=norm(c.title+" "+c.summary+" "+c.tags.join(" ")+" "+c.type+" "+rubName(c.rub));
  let s=0;tk.forEach(t=>{if(hay.includes(t))s+=norm(c.title).includes(t)?3:1});return s;}
function hl(text,q){const tk=[...new Set(norm(q||"").split(/\s+/).filter(t=>t.length>2))];let o=text;
  tk.forEach(t=>{o=o.replace(new RegExp("("+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi"),"<mark>$1</mark>")});return o;}
function setSType(t,q){SF_TYPE=t;go("chercher?q="+q);}

/* ---- ARTICLE / CONTENU ---- */
function openContent(id){const c=byId(id);if(!c)return;if(c.locked){openLock(c.title);return;}go("contenu-detail/"+id);}
function iconRail(){
  const emblem=`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.135 5.906L20.016.052 5.894 5.906 0 20.03l5.894 14.126L20.016 40l14.119-5.843 5.852-14.127-5.852-14.123z" fill="#fff"/><path d="M34.136 5.854L20.017 0 5.9 5.854.008 19.978 5.9 34.105l14.117 5.843 14.115-5.843v-11.7l-14.125 5.854-5.846-2.419-2.41-5.861 2.41-5.858 5.845-2.42 9.99 4.139 4.14-9.986z" fill="#80C7ED"/><path d="M20.011 11.709L5.904 5.864.012 19.983l5.892 14.123 14.117 5.842 14.114-5.842V22.408L20.011 28.26l-5.846-2.419-2.41-5.858 2.41-5.856 5.846-2.418z" fill="#0065A5"/><path d="M20.014 11.688l-5.86 2.425-2.416 5.866 2.417 5.87 5.86 2.425 5.866-2.427 4.149-1.722-4.146-10.005-5.87-2.432z" fill="#A7CD38"/><path d="M34.136 34.095v-11.72L40 19.945l-5.864 14.15z" fill="#E9E7B9"/><path d="M34.137 5.864L29.99 15.866l4.145 1.718L40 20.012 34.137 5.864z" fill="#E9E7B9"/><path d="M34.136 5.864l-4.145 10.002-4.142-1.714 8.287-8.288z" fill="#7AC7FF"/><path d="M34.136 5.864L25.85 14.15l-1.718-4.149 10.005-4.138z" fill="#5DAEE9"/><path d="M34.136 34.095L29.995 24.09l4.141-1.714v11.72z" fill="#1B6CA7"/><path d="M34.135 5.864H22.416L19.99 0l14.146 5.864z" fill="#62B3EE"/><path d="M34.135 34.095L19.99 39.948l2.423-5.853h11.723z" fill="#2576B1"/><path d="M34.136 34.095H22.413l1.715-4.141 10.008 4.141zm0-.001l-8.283-8.284 4.142-1.722 4.141 10.006z" fill="#1A6BA6"/><path d="M34.133 17.55l-4.146-1.718-1.714 4.146 1.716 4.146 4.142-1.715 5.864-2.431-5.862-2.428z" fill="#DFDFA0"/><path d="M30.013 15.838L28.3 19.984l-2.427-5.86 4.141 1.714z" fill="#E9E7B9"/><path d="M30.017 24.117l-4.142 1.722 2.427-5.867 1.715 4.145z" fill="#C2D074"/><path d="M25.882 14.132l-5.87-2.431 4.152-1.718 1.718 4.15z" fill="#6FC0FB"/><path d="M25.848 25.811l8.284 8.285-10.012-4.142 1.718-4.142h.01z" fill="#2576B1"/><path d="M28.305 19.977l-2.427 5.867-5.856-5.864 5.861-5.863 2.422 5.86z" fill="#D2DF7F"/><path d="M24.16 29.971l-4.148-1.714 5.867-2.428-1.718 4.142z" fill="#2172AD"/><path d="M25.885 25.836l-5.866 2.427-5.842-2.416-.008-.019 5.86-5.856 5.856 5.864z" fill="#B7CC4D"/><path d="M22.416 5.864h11.72l-10.005 4.138-1.715-4.138z" fill="#4091CC"/><path d="M24.168 29.954l-1.715 4.142h-4.848l-1.718-4.146 4.132-1.711 4.149 1.715z" fill="#13649F"/><path d="M20.029 0l2.428 5.864h-4.855L20.03 0z" fill="#6EBFFA"/><path d="M22.452 34.095l-2.424 5.853-2.423-5.853h4.847z" fill="#2172AD"/><path d="M17.645 34.095l2.423 5.853-14.15-5.853h11.727z" fill="#1A6BA6"/><path d="M20.039 19.98l-5.86 5.858-2.427-5.86 2.423-5.86 5.864 5.862z" fill="#93BE40"/><path d="M14.18 14.121l1.71-4.131 4.135 1.71-5.846 2.421z" fill="#1667A1"/><path d="M20.02 11.72l-4.136-1.71 1.718-4.146h4.855l1.714 4.138-4.151 1.717z" fill="#4091CC"/><path d="M20.029 28.258l-4.132 1.71-1.71-4.127 5.842 2.417z" fill="#1B6CA7"/><path d="M15.927 29.95l1.718 4.145H5.919l10.008-4.145z" fill="#12629E"/><path d="M5.919 5.864L20.069 0l-2.426 5.864H5.919z" fill="#85CCFF"/><path d="M17.638 5.864l-1.718 4.145L5.915 5.864h11.723z" fill="#4798D3"/><path d="M14.216 25.822l1.71 4.128-10.01 4.145 8.28-8.28.02.007z" fill="#13649F"/><path d="M11.759 19.972l2.427 5.86-.01.01-4.142-1.713 1.725-4.157z" fill="#0376AE"/><path d="M14.187 25.845l-.018-.007.011-.011.007.018z" fill="#fff"/><path d="M14.165 14.125l.008-.01 5.845-2.42 5.871 2.43-5.86 5.864-5.864-5.864z" fill="#A7CD38"/><path d="M14.177 14.128l-.007-.007h.014l-.007.007z" fill="#fff"/><path d="M11.76 19.983l-1.722-4.156 4.139-1.71.007.006-2.424 5.86z" fill="#0F609B"/><path d="M14.212 14.14h-.014l-8.28-8.28 10.005 4.145-1.711 4.135z" fill="#2172AD"/><path d="M14.198 25.815l-8.28 8.28 4.138-9.995 4.142 1.715z" fill="#0A5B96"/><path d="M14.198 14.144l-4.139 1.71-4.142-9.99 8.28 8.28z" fill="#1A6BA6"/><path d="M5.919 5.864l4.141 9.99-4.14 1.716V5.864z" fill="#2576B1"/><path d="M10.056 24.1l-4.139 9.995V22.392l4.14 1.708z" fill="#004E87"/><path d="M11.781 19.978l-1.725 4.155-4.139-1.707v-4.89l4.142-1.714 1.722 4.156z" fill="#0F609B"/><path d="M5.919 5.864V17.57L.012 20.012 5.919 5.864z" fill="#1667A1"/><path d="M5.919 34.095L.012 19.945l5.907 2.448v11.702z" fill="#004E87"/><path d="M5.919 17.536v4.886l-5.907-2.45 5.907-2.436z" fill="#0E5F9A"/></svg>`;
  const S=d=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const nav=[
    [S('<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'),"Accueil","go('')",false],
    [S('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),"Recherche","go('search')",false],
    [S('<rect x="2" y="3" width="5" height="18" rx="0.5"/><rect x="9" y="3" width="5" height="18" rx="0.5"/><path d="M16 4.5l4 1.4-5.5 15.6-4-1.4z"/>'),"Bibliothèque","go('biblio')",false],
    [S('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>'),"Modules","go('rubriques')",false],
    [S('<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>'),"Documents","",false],
    [S('<path d="M12 2l2.3 7.1H22l-6.1 4.4 2.3 7.1L12 16.2 5.8 20.6l2.3-7.1L2 9.1h7.7z"/>'),"Assistant IA","",true],
  ];
  return `<nav class="icon-rail">
    <div class="ir-logo">${emblem}</div>
    <div class="ir-main">
      ${nav.map(([ic,t,fn,a])=>`<div class="ir-icon${a?" active":""}" ${fn?`onclick="${fn}"`:""}title="${t}">${ic}</div>`).join("")}
    </div>
    <div class="ir-bottom">
      <div class="ir-icon" title="Langue"><span class="ir-lang">FR</span></div>
      <div class="ir-icon" title="Aide">${S('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>')}</div>
      <div class="ir-icon" title="Profil">${S('<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>')}</div>
    </div>
  </nav>`;
}





function viewLivre(c){
  const rel=(c.related||[]).map(byId).filter(Boolean);
  const safeTitle=c.title.replace(/'/g,"\'");
  const cv=c.cover||{lic:"CONNECT",icon:"📚"};
  const navy="var(--navy)";
  // Grouper les articles liés par type
  const byType={};
  rel.forEach(r=>{if(!byType[r.type])byType[r.type]=[];byType[r.type].push(r);});
  const groups=Object.entries(byType);
  return `<div>
    <div class="livre-searchbar">
      <span class="livre-pill">Livres</span>
      <input class="livre-sinput" placeholder="Introduisez vos termes de recherche...">
      <button class="livre-sbtn">Chercher</button>
    </div>
    <div class="livre-body">
      <div class="livre-hd">
        <h1 class="livre-h1">${c.title}</h1>
        <div class="art-icon-btns">
          <button class="art-icon-btn locked" onclick="openLock('${safeTitle}')" title="Télécharger">${I.doc}</button>
          <button class="art-icon-btn locked" onclick="openLock('${safeTitle}')" title="Mémo">${I.star}</button>
        </div>
      </div>
      <div class="livre-meta">${c.date} — ${c.author}</div>
      <hr class="livre-sep">
      <div class="livre-intro">
        <div class="livre-cover" style="background:${navy}">
          <div class="lc-lic">${cv.lic}</div>
          <div class="lc-icon">${cv.icon}</div>
          <div class="lc-cat">${rubName(c.rub)}</div>
        </div>
        <div class="livre-desc">
          ${c.body.length?c.body.map(p=>`<p>${p}</p>`).join(""):`<p>${c.summary}</p>`}
        </div>
      </div>
      ${groups.length?`<div class="livre-contenu">
        <div class="livre-contenu-hd">
          <h2>Contenu</h2>
          <button class="btn-afficher">Afficher tout</button>
        </div>
        ${groups.map(([type,items])=>`<div class="lc-group">
          <div class="lc-group-hd">
            <span class="lc-toggle">−</span>
            <span>${type}</span>
          </div>
          ${items.map(r=>`<div class="lc-item" onclick="openContent('${r.id}')">
            <span class="lc-item-title">${r.title}</span>
            <span class="lc-item-type">${r.type}</span>
          </div>`).join("")}
        </div>`).join("")}
      </div>`:offer()}
    </div>
  </div>`;
}

function viewArticle(id){
  const c=byId(id);if(!c)return viewHome();
  if(c.locked){setTimeout(()=>openLock(c.title),50);return viewRubrique(c.rub);}
  const rel=(c.related||[]).map(byId).filter(Boolean);
  const clr=tColor(c.type);
  const safeTitle=c.title.replace(/'/g,"\\'");
  const typeItems=CONTENT.filter(x=>x.type===c.type);
  const idx=typeItems.findIndex(x=>x.id===c.id);
  const prev=idx>0?typeItems[idx-1]:null;
  const next=idx<typeItems.length-1?typeItems[idx+1]:null;
  // Couverture visuelle (Highlights, Magazines, Livres)
  let cover="";
  if(["Highlights","Magazines"].includes(c.type)){
    cover=`<div class="art-cover" style="background:${clr}13;border:1.5px solid ${clr}30">
      <div class="ac-badge" style="background:${clr};color:#fff">${tIcon(c.type)}<span>${c.type.toUpperCase()}</span></div>
      <div class="ac-body">
        <div class="ac-title-cover" style="color:${clr}">${c.title}</div>
        <div class="ac-rub">${rubName(c.rub)}</div>
      </div>
    </div>`;
  }else if(c.type==="Livres"){
    const cv=c.cover||{lic:TENANT.collection,icon:"📄"};
    cover=`<div class="art-cover" style="background:var(--navy)">
      <div class="ac-badge" style="background:rgba(0,0,0,.25);color:rgba(255,255,255,.85)">${cv.lic}</div>
      <div class="ac-body" style="text-align:center">
        <div style="font-size:42px;margin:10px 0">${cv.icon}</div>
        <div class="ac-title-cover" style="color:#fff">${c.title}</div>
      </div>
    </div>`;
  }
  // Corps avec titres de section (## Titre)
  const bodyHtml=c.body.map(p=>{
    if(p.startsWith("## "))return`<h2 class="body-h2" style="color:${clr}">${p.slice(3)}</h2>`;
    if(p.startsWith("### "))return`<h3 class="body-h3">${p.slice(4)}</h3>`;
    return`<p>${p}</p>`;
  }).join("");
  return `<div class="art-layout">
    ${iconRail()}
    <aside class="art-side-left">
      <div class="asl-head" style="color:${clr}">${tIcon(c.type)}<span>${c.type}</span></div>
      <div class="asl-search"><input placeholder="Chercher"><button>${I.search}</button></div>
      <div class="asl-nav">
        ${prev?`<a class="asl-nav-a" onclick="openContent('${prev.id}')">← Résultat précédent</a>`:`<span class="asl-nav-a disabled">← Résultat précédent</span>`}
        ${next?`<a class="asl-nav-a" onclick="openContent('${next.id}')">Résultat suivant →</a>`:`<span class="asl-nav-a disabled">Résultat suivant →</span>`}
      </div>
      <div class="asl-list">
        ${typeItems.map(x=>`<div class="asl-item${x.id===c.id?" active":""}" ${x.id!==c.id?`onclick="openContent('${x.id}')"`:""}>
          ${x.locked?`<span class="asl-lock">${I.lock}</span>`:""}
          <span>${x.title}</span>
        </div>`).join("")}
      </div>
    </aside>
    <div class="art-main">
      <div class="art-inner">
        <div class="art-top-bar">
          <div class="crumb"><a onclick="go('')">Accueil</a><span class="sep">›</span><a onclick="go('rubrique/${c.rub}')">${rubName(c.rub)}</a><span class="sep">›</span>${c.type}</div>
          <div class="art-icon-btns">
            <button class="art-icon-btn" onclick="window.print()" title="Imprimer">${I.doc}</button>
            <button class="art-icon-btn locked" onclick="openLock('${safeTitle}')" title="Télécharger">${I.doc}</button>
            <button class="art-icon-btn locked" onclick="openLock('${safeTitle}')" title="Mémo / Favori">${I.star}</button>
          </div>
        </div>
        <h1>${c.title}</h1>
        <div class="ameta-v">
          <div><b>Auteur(s) :</b> ${c.author}</div>
          <div><b>Date de publication :</b> ${c.date}</div>
          ${c.tags.length?`<div class="tag-row">${c.tags.slice(0,5).map(t=>`<span class="tag">${t}</span>`).join("")}</div>`:""}
        </div>
        <div class="art-sep"></div>
        <div class="body">${cover}${bodyHtml}<div style="clear:both"></div></div>
        ${rel.length?`<div class="related"><h4>${I.brain} Les agents consultent aussi</h4>
          ${rel.map(r=>`<div class="ri" onclick="openContent('${r.id}')"><span class="rii">${r.locked?I.lock:I.doc}</span>
            <div><h5>${r.title}</h5><small>${r.type} · ${rubName(r.rub)}</small></div></div>`).join("")}</div>`:""}
        ${offer()}
      </div>
    </div>
  </div>`;
}

/* ---- éléments partagés ---- */
function offer(){
  const op=OFFER_PARAMS;
  if(op){
    const nomCommune=op.commune?op.commune.nom:op.cp;
    return `<div class="offer offer-ready">
    <div>
      <h2>Votre offre personnalisée est prête</h2>
      <p>Document préparé spécialement pour <strong>${nomCommune}</strong>. Cliquez ci-dessous pour le télécharger via SharePoint.</p>
    </div>
    <div class="oc">
      <button class="btn btn-w" onclick="downloadOffer()">⬇ Télécharger mon offre</button>
      <button class="btn btn-o" onclick="ext()">Demander une démo</button>
    </div></div>`;
  }
  return `<div class="offer">
  <div><h2>${TENANT.offer.title}</h2><p>${TENANT.offer.pitch}</p><div class="price">${TENANT.offer.price}</div></div>
  <div class="oc">
    <button class="btn btn-w" onclick="downloadOffer()">Télécharger mon offre</button>
    <button class="btn btn-o" onclick="ext()">Demander une démo</button>
  </div></div>`;
}
function ext(){window.open(TENANT.contactUrl,'_blank');}

/* ---- Téléchargement de l'offre personnalisée ---- */
function downloadOffer(){
  if(OFFER_PARAMS&&OFFER_PARAMS.url){window.open(OFFER_PARAMS.url,'_blank');return;}
  const o=TENANT.offer;
  if(!o.requireCode){window.open(o.documentUrl,'_blank');return;}
  openOfferModal();
}
function openOfferModal(){
  closeOffer();const o=TENANT.offer;
  const el=document.createElement("div");el.className="modal-bg";el.id="offerModal";
  el.onclick=e=>{if(e.target===el)closeOffer();};
  el.innerHTML=`<div class="modal"><button class="mclose" onclick="closeOffer()">×</button>
    <div class="mt" style="background:var(--pill);border-color:#d7e6f6">
      <span class="lp" style="background:var(--blue)">${I.lock} Offre personnalisée</span>
      <h3>Télécharger l'offre de ${TENANT.commune}</h3></div>
    <div class="mb">
      <p>Saisissez le code reçu par e-mail avec votre proposition. Il ouvre votre document personnalisé.</p>
      <input id="offerCode" placeholder="Votre code" autocomplete="off" style="width:100%;border:1.5px solid var(--border);border-radius:9px;padding:12px 14px;font-size:15px;outline:none" onkeydown="if(event.key==='Enter')submitOfferCode()">
      <div style="font-size:12.5px;color:var(--muted);margin:8px 0 16px">${o.codeHint||""}</div>
      <div id="offerStatus" style="display:none;font-size:13.5px;border-radius:9px;padding:11px 13px;margin-bottom:14px"></div>
      <div class="macts">
        <button class="btn btn-b" onclick="submitOfferCode()">Ouvrir mon offre</button>
        <button class="btn btn-g" onclick="closeOffer()">Annuler</button></div></div></div>`;
  document.body.appendChild(el);
  setTimeout(()=>{const i=document.getElementById("offerCode");if(i)i.focus();},50);
}
function closeOffer(){const m=document.getElementById("offerModal");if(m)m.remove();}
function offerStatus(kind,msg){
  const s=document.getElementById("offerStatus");if(!s)return;
  const col=kind==="ok"?["#e4f5ec","#1f7a4d"]:kind==="err"?["#fbe6e4","#b4453a"]:["#fff7e6","#9a6b1a"];
  s.style.display="block";s.style.background=col[0];s.style.color=col[1];s.textContent=msg;
}
function submitOfferCode(){
  const raw=(document.getElementById("offerCode")||{}).value||"";
  const c=raw.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"");      // code = jeton simple
  if(!c){offerStatus("err","Veuillez saisir votre code.");return;}
  const url=TENANT.offer.codeUrlPattern.replace("{code}",encodeURIComponent(c));
  offerStatus("info","Vérification…");
  // Même origine (asset statique) : on vérifie l'existence. Cross-origin (SharePoint) :
  // la vérification échoue (CORS) -> on ouvre directement, c'est SharePoint qui gère l'accès.
  fetch(url,{method:"HEAD"}).then(r=>{
    if(r.ok){window.open(url,"_blank");offerStatus("ok","Votre offre s'ouvre dans un nouvel onglet.");}
    else{offerStatus("info","Aucune offre n'est déposée pour ce code dans cette démonstration. En production, le code ouvrirait : "+url);}
  }).catch(()=>{window.open(url,"_blank");offerStatus("ok","Ouverture de votre offre personnalisée…");});
}

/* ---- LOCK MODAL ---- */
function openLock(title){
  const bens=[["bulb","Restez informé"],["runner","Travaillez plus efficacement"],["stop","Gagnez du temps"],["brain","Renforcez vos connaissances"]];
  const el=document.createElement("div");el.className="modal-bg";el.id="lockModal";
  el.onclick=e=>{if(e.target===el)closeLock();};
  el.innerHTML=`<div class="modal"><button class="mclose" onclick="closeLock()">×</button>
    <div class="mt"><span class="lp">${I.lock} Réservé à la version complète</span>
      <h3>${title||"Ce contenu est réservé aux abonnés de "+TENANT.collection}</h3></div>
    <div class="mb"><p>Cette fonctionnalité fait partie de la licence complète de ${TENANT.collection}. Voici ce que vos agents y gagnent :</p>
      <div class="bens">${bens.map(b=>`<div class="ben"><span class="bi">${I[b[0]]}</span><span>${b[1]}</span></div>`).join("")}</div>
      <div class="macts"><button class="btn btn-b" onclick="ext()">Demander l'accès complet</button>
      <button class="btn btn-g" onclick="closeLock()">Continuer la démo</button></div></div></div>`;
  document.body.appendChild(el);
}
function closeLock(){const m=document.getElementById("lockModal");if(m)m.remove();}

/* ---- ASSIST PANEL (IA) ---- */
function openAssist(preset){
  closeAssist();
  const bg=document.createElement("div");bg.className="assist-bg";bg.id="assistBg";bg.onclick=closeAssist;
  const p=document.createElement("div");p.className="assist-panel";p.id="assistPanel";
  p.innerHTML=`<div class="assist-head"><div class="ah">${I.assist} Assist</div>
    <p>Posez votre question en langage courant. Je cherche dans ${TENANT.collection} et je résume.</p></div>
    <div class="assist-body" id="assistBody">
      <div class="assist-q">Questions fréquentes</div>
      ${["Quelles sont les conditions du RIS ?","Comment mener une enquête sociale ?","Quelles voies pour la médiation de dettes ?","Quel est l'impact de la réforme du chômage ?"]
        .map(q=>`<button class="aq" onclick="askAssist('${q.replace(/'/g,"\\'")}')">${q}</button>`).join("")}
    </div>
    <div class="assist-foot"><input id="assistInput" placeholder="Votre question…" onkeydown="if(event.key==='Enter')askAssist(this.value)">
      <button onclick="askAssist(document.getElementById('assistInput').value)">${I.search}</button></div>`;
  document.body.appendChild(bg);document.body.appendChild(p);
  if(preset)askAssist(preset);
}
function closeAssist(){["assistBg","assistPanel"].forEach(i=>{const e=document.getElementById(i);if(e)e.remove();});}
function askAssist(q){
  if(!q||!q.trim())return;
  const body=document.getElementById("assistBody");if(!body)return;
  const ai=ASSIST.find(a=>a.match.some(m=>norm(q).includes(norm(m))));
  const block=document.createElement("div");
  block.innerHTML=`<div style="font-size:13.5px;font-weight:600;color:var(--navy);margin:14px 0 4px">« ${q} »</div>
    <div class="amsg"><div class="thinking"><span></span><span></span><span></span></div></div>`;
  body.appendChild(block);body.scrollTop=body.scrollHeight;
  setTimeout(()=>{
    const m=block.querySelector(".amsg");
    if(ai){m.innerHTML=`<div class="answer">${ai.text}</div>
      <div class="asrc">${ai.sources.map(id=>{const a=byId(id);return `<div class="s" onclick="closeAssist();openContent('${id}')">${a.locked?I.lock:I.doc} ${a.title}</div>`;}).join("")}</div>`;}
    else{m.innerHTML=`<div class="answer">Je n'ai pas de réponse pré-indexée pour cette question dans la démo. Dans la version complète, Assist interroge l'ensemble des contenus. Essayez « RIS », « enquête sociale » ou « réforme du chômage ».</div>`;}
    body.scrollTop=body.scrollHeight;
  },700);
  const inp=document.getElementById("assistInput");if(inp)inp.value="";
}

/* ============================================================
   SHELL + ROUTER
   ============================================================ */
function band(title,inner,noBand){
  return (title?`<div class="band"><div class="wrap"><h1>${title}</h1></div></div>`:"")+inner;
}
function shell(content){
  const path=(location.hash.replace("#/","")||"").split("?")[0];
  const isHome=path===""||path==="accueil";
  const types=Object.keys(TYPES);
  const navItem=(p,ic,lbl,act)=>`<a onclick="go('${p}')" class="${act?'active':''}">${ic}<span class="lbl">${lbl}</span></a>`;
  return `<header class="main"><div class="wrap">
    <a class="logo" onclick="go('')">${CUBE}</a>
    <span class="demo-pill">Démo</span>
    <nav class="top">
      ${navItem('',I.home,'',isHome)}
      ${navItem('chercher',I.search,'Chercher',path.startsWith('chercher'))}
      ${navItem('bibliotheque',I.book,'Bibliothèque',path.startsWith('biblioth'))}
      ${navItem('rubriques',I.grid,'Rubriques',path.startsWith('rubri'))}
      <div class="contenu-wrap">
        <a onclick="toggleContenu(event)" class="${path.startsWith('contenu')?'active':''}">${I.folder}<span class="lbl">Contenu</span> ${I.chev}</a>
        <div class="dropdown" id="contenuDD" style="display:none">
          ${types.map(t=>`<a onclick="go('contenu/${encodeURIComponent(t)}')">${tIcon(t)} ${t}</a>`).join("")}
        </div>
      </div>
    </nav>
    <div class="head-right">
      <button class="assist-btn" onclick="openAssist()">${I.assist} Assist</button>
      <span class="lang">FR</span>
      <button class="head-icon" title="Aide">${I.help}</button>
      <button class="head-icon" title="${TENANT.commune}">${I.user}</button>
    </div>
  </div></header>
  <main>${content}</main>
  <footer><div class="wrap">
    <span>Vanden Broele</span><span>–</span><span>Disclaimer</span><span>–</span><span>Conditions</span><span>–</span>
    <span>Vie privée</span><span>–</span><span>IA Disclaimer</span><span>–</span><span>Déclaration d'accessibilité</span>
    <span style="width:100%;margin-top:8px;color:#9aa6b2">Démonstration · contenus simulés · ${TENANT.commune} — « Innover par la connaissance »</span>
  </div></footer>
  <button class="tour-launch" onclick="startTour()" title="Visite guidée de la démo">${I.assist}<span>Visite guidée</span></button>
  ${OFFER_PARAMS?`<button class="offer-fab" onclick="downloadOffer()">${I.doc}<span>Mon offre</span></button>`:""}` ;
}
function toggleContenu(e){e.stopPropagation();const d=document.getElementById("contenuDD");if(d)d.style.display=d.style.display==="none"?"block":"none";}
document.addEventListener("click",()=>{const d=document.getElementById("contenuDD");if(d)d.style.display="none";});

function go(p){location.hash="#/"+p;window.scrollTo(0,0);}
function runSearch(q){if(q&&q.trim()){SF_TYPE="Tous";go("chercher?q="+encodeURIComponent(q.trim()));}else{go("chercher");}}

/* ---- PAGE ADMIN : générateur de liens démo ---- */
function viewAdmin(){
  const cols=(TENANT.collections||["CPAS","DG","FINANCES","RH","TECHNIQUE","URBANISME"]);
  const ghUpload='https://github.com/suyttenhoef-cyber/demo-connect/upload/master/offres';
  return `<div class="admin-page">
  <div class="admin-banner">
    <div class="wrap"><h1>Générateur de lien démo</h1>
    <p>Préparez le PDF, déposez-le sur GitHub, générez le lien prospect. Aucune modification de code.</p></div>
  </div>
  <div class="wrap pad">
    <div class="admin-card">

      <div class="admin-steps">
        <div class="admin-step"><span class="admin-step-n">1</span><div>
          <strong>Générez le nom de fichier</strong>
          <span>Remplissez les champs ci-dessous et cliquez sur <em>Générer</em> pour obtenir le nom exact à utiliser.</span>
        </div></div>
        <div class="admin-step"><span class="admin-step-n">2</span><div>
          <strong>Déposez le PDF sur GitHub</strong>
          <span>Renommez votre PDF selon le nom généré, puis déposez-le via le bouton ci-dessous (glisser-déposer dans GitHub).</span>
        </div></div>
        <div class="admin-step"><span class="admin-step-n">3</span><div>
          <strong>Envoyez le lien démo au prospect</strong>
          <span>Copiez le lien généré et transmettez-le. Le prospect cliquera sur « Mon offre » pour télécharger son document.</span>
        </div></div>
      </div>

      <div class="admin-form">
        <div class="admin-row2">
          <div class="admin-row">
            <label for="adminCp">Commune / Code postal</label>
            <input id="adminCp" list="adminCpList" placeholder="Ex. : 5060 ou Sambreville" autocomplete="off">
            <datalist id="adminCpList">
              ${(typeof COMMUNES!=='undefined'?COMMUNES:[]).map(c=>`<option value="${c.cp}">${c.cp} — ${c.nom}</option>`).join("")}
            </datalist>
          </div>
          <div class="admin-row">
            <label for="adminCol">Collection</label>
            <select id="adminCol">
              ${cols.map(c=>`<option value="${c}"${c==="CPAS"?" selected":""}>${c}</option>`).join("")}
            </select>
          </div>
        </div>
        <button class="btn btn-b admin-gen-btn" onclick="adminGenerate()">Générer</button>
      </div>

      <div id="adminResult" class="admin-result" style="display:none">
        <div class="admin-res-row">
          <label>1 — Nom exact du fichier PDF</label>
          <div class="admin-copy-wrap">
            <input id="adminFileName" class="admin-copy-input" readonly>
            <button class="admin-copy-btn" onclick="adminCopy('adminFileName',this)">Copier</button>
          </div>
        </div>
        <div class="admin-res-row">
          <label>2 — Déposer le PDF sur GitHub (glisser-déposer)</label>
          <a id="adminGhLink" class="btn btn-b" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-size:13.5px;padding:9px 18px" href="${ghUpload}" target="_blank">
            ${I.doc} Ouvrir le dépôt GitHub → dossier offres/
          </a>
        </div>
        <div class="admin-res-row">
          <label>3 — Lien démo à envoyer au prospect</label>
          <div class="admin-copy-wrap">
            <input id="adminDemoUrl" class="admin-copy-input" readonly>
            <button class="admin-copy-btn" onclick="adminCopy('adminDemoUrl',this)">Copier</button>
          </div>
        </div>
        <div class="admin-note">
          ${I.bulb} Après avoir déposé le PDF sur GitHub, attendez environ 1 minute que le site se mette à jour avant d'envoyer le lien au prospect.
        </div>
      </div>

    </div>
  </div></div>`;
}

function adminGenerate(){
  const raw=(document.getElementById('adminCp')||{}).value||"";
  const col=(document.getElementById('adminCol')||{}).value||"CPAS";
  const cpNum=raw.replace(/\D/g,"").slice(0,4);
  if(!cpNum){alert('Veuillez saisir un code postal à 4 chiffres.');return;}
  const commune=(typeof COMMUNES!=='undefined'?COMMUNES:[]).find(c=>c.cp===cpNum);
  const fileName=col+'-'+cpNum+'.pdf';
  const demoUrl=location.origin+location.pathname+'?c='+cpNum+'&col='+encodeURIComponent(col);
  document.getElementById('adminFileName').value=fileName;
  document.getElementById('adminDemoUrl').value=demoUrl;
  document.getElementById('adminResult').style.display='block';
  if(commune)document.getElementById('adminCp').value=cpNum+' — '+commune.nom;
}

function adminCopy(id,btn){
  const el=document.getElementById(id);if(!el)return;
  el.select();
  navigator.clipboard.writeText(el.value).then(()=>{
    const orig=btn.textContent;btn.textContent='✓ Copié';btn.style.background='#1f7a4d';
    setTimeout(()=>{btn.textContent=orig;btn.style.background='';},2000);
  }).catch(()=>{document.execCommand('copy');});
}

function render(){
  const h=(location.hash.replace("#/","")||"");
  const [path,query]=h.split("?");
  let c;
  if(path===""||path==="accueil")c=viewHome();
  else if(path==="admin")c=viewAdmin();
  else if(path==="rubriques")c=viewRubriques();
  else if(path.startsWith("rubrique/"))c=viewRubrique(path.split("/")[1]);
  else if(path.startsWith("biblioth"))c=viewBiblio();
  else if(path.startsWith("chercher")){const q=decodeURIComponent((query||"").replace(/^q=/,""));c=viewSearch(q);}
  else if(path.startsWith("contenu-detail/"))c=viewArticle(path.split("/")[1]);
  else if(path.startsWith("contenu/"))c=viewContenuType(decodeURIComponent(path.split("/")[1]));
  else c=viewHome();
  document.getElementById("app").innerHTML=shell(c);
  document.querySelectorAll("#app script").forEach(s=>{const n=document.createElement("script");n.textContent=s.textContent;s.replaceWith(n);});
}
window.addEventListener("hashchange",render);

/* ---- VISITE GUIDÉE ---- */
const TOUR=[
 {h:"Bienvenue sur la démo Connect",p:"Vous explorez une version de démonstration de la plateforme. L'interface reproduit le vrai produit ; les contenus sont simulés. Suivons un parcours type.",act:()=>go("")},
 {h:"1 · La recherche, point d'entrée",p:"Tapez une question en langage courant et obtenez les bons contenus, classés par pertinence.",act:()=>runSearch("conditions du RIS")},
 {h:"2 · Assist, l'assistant intégré",p:"Le bouton violet « Assist » répond directement à vos questions et renvoie vers les sources.",act:()=>{closeLock();openAssist("Quelles sont les conditions du RIS ?");}},
 {h:"3 · Naviguer par rubrique",p:"Les Rubriques organisent toute la connaissance métier de la collection.",act:()=>{closeAssist();go("rubriques");}},
 {h:"4 · Les contenus premium",p:"Modèles, dossiers et livres marqués d'un cadenas sont réservés à la version complète.",act:()=>openLock("Trame type de rapport d'enquête sociale")},
 {h:"5 · Passer à la version complète",p:"Un appel à l'action clair guide la commune vers l'offre. Fin de la visite — explorez librement !",act:()=>{closeLock();go("");}},
];
let tStep=0;
function startTour(){tStep=0;closeLock();closeAssist();showTour();}
function showTour(){const o=document.getElementById("tour");if(o)o.remove();if(tStep>=TOUR.length)return;
  const t=TOUR[tStep];t.act&&t.act();
  setTimeout(()=>{const el=document.createElement("div");el.className="tour";el.id="tour";
    el.innerHTML=`<div class="ts">Visite guidée · ${tStep+1}/${TOUR.length}</div><h4>${t.h}</h4><p>${t.p}</p>
      <div class="ta"><button class="skip" onclick="endTour()">Quitter</button>
      <button class="next" onclick="nextTour()">${tStep<TOUR.length-1?"Suivant →":"Terminer"}</button></div>`;
    document.body.appendChild(el);},140);}
function nextTour(){tStep++;if(tStep>=TOUR.length){endTour();return;}showTour();}
function endTour(){const e=document.getElementById("tour");if(e)e.remove();}

/* init */
render();
