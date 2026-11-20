// BATUMI NOEL & SARAP GEZI ASISTANI
// GitHub Pages web sürümü

let progress = {};
try { progress = JSON.parse(localStorage.getItem("batumi_progress") || "{}"); } catch(e) {}
if (!progress.done) progress.done = {};

const days = [
 {date:"22 ARALIK · SALI",title:"Noel'e merhaba",intro:"Varış, otele yerleşme ve Noel atmosferi.",stops:[
  ["Europe Square & Noel Köyü","Noel ağacı, ışıklandırmalar ve sezon stantları. 2026 programını önceden kontrol edin.","Europe Square Batumi Georgia"],
  ["Batumi Piazza","Tarihi meydan, fotoğraf ve sıcak içecek molası.","Batumi Piazza Georgia"],
  ["Eski Batum'da akşam yemeği","Haçapuri, hinkali ve Gürcü mezelerini deneyin.","Georgian restaurant Batumi Old Town"]
 ]},
 {date:"23 ARALIK · ÇARŞAMBA",title:"Eski şehir & şarap",intro:"Tarihi sokaklar ve Gürcü şaraplarını keşfedin.",stops:[
  ["Eski Batum kahvaltısı","Güne sakin bir kahvaltıyla başlayın.","Breakfast cafe Batumi Old Town"],
  ["Europe Square ve tarihi sokaklar","Mimariyi keşfedin, fotoğraf çekin.","Europe Square Batumi Georgia"],
  ["MIDI Wine Bar","Gürcü doğal şarapları ve qvevri amber şarapları sorun. Açılış ve tadım durumunu teyit edin.","MIDI Wine Bar Batumi Georgia"],
  ["Akşam yemeği ve şarap","Gürcü yemekleriyle şarap eşleştirmesi deneyin.","Wine bar Batumi Georgia"]
 ]},
 {date:"24 ARALIK · PERŞEMBE",title:"Sahil & romantik akşam",intro:"Karadeniz kıyısı ve özel bir akşam.",stops:[
  ["Batumi Boulevard","Deniz kenarında yürüyüş; yağmur ve rüzgâra hazırlıklı olun.","Batumi Boulevard Georgia"],
  ["Ali & Nino Heykeli","Batum'un simgesel heykelinde fotoğraf molası.","Ali and Nino Statue Batumi Georgia"],
  ["Kahve ve serbest zaman","Eski şehirde kahve ve hediyelik eşya molası.","Coffee shop Batumi Old Town"],
  ["Romantik akşam yemeği","Önceden masa ayırtın; Gürcü şarabı eşleşmesi isteyin.","Romantic restaurant Batumi Georgia"],
  ["Bu&Khari şarap barı","Tadım ve çalışma saatlerini önceden teyit edin.","Bu Khari wine bar Batumi Georgia"]
 ]},
 {date:"25 ARALIK · CUMA",title:"Son keşif & dönüş",intro:"Son kahvaltı, hediyelikler ve dönüş yolculuğu.",stops:[
  ["Kahvaltı ve otelden çıkış","Bagajları otele bırakma imkânını sorun.","Breakfast Batumi Old Town"],
  ["Son Noel pazarı turu","Eksik kalan stantları gezin.","Europe Square Batumi Christmas market"],
  ["Gürcü şarabı alışverişi","Saperavi, Rkatsiteli veya Kisi seçeneklerine bakın; gümrük limitlerini kontrol edin.","Georgian wine shop Batumi"],
  ["Dönüş transferi","Uçak veya kara yolu planına göre erken çıkın; sınır için zaman payı bırakın.","Sarpi Border Crossing Georgia"]
 ]}
];

const wines = [
 ["Saperavi","Gövdesi güçlü, koyu renkli kırmızı üzüm."],
 ["Rkatsiteli","Geleneksel beyaz üzüm; beyaz veya amber stillerde."],
 ["Kisi","Amber şaraplarda denemeye değer yerel üzüm."],
 ["Qvevri amber","Geleneksel toprak küplerde üretilen, yoğun aromalı şarap."]
];
const foods = [
 ["Adjarian Khachapuri","Batum'un meşhur peynirli, yumurtalı tekne ekmeği."],
 ["Khinkali","Sulu Gürcü mantısı."],
 ["Pkhali","Cevizli sebze mezeleri."],
 ["Churchkhela","Ceviz ve üzüm suyu ile yapılan geleneksel tatlı."]
];

function mapLink(q){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);}
function save(){localStorage.setItem("batumi_progress",JSON.stringify(progress));}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

let html = `<!doctype html><html lang="tr"><head><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><meta charset="utf-8"><style>
:root{--bg:#101713;--card:#1c2921;--gold:#d9ba72;--text:#f5f1e7;--muted:#b9c2b7;--line:#39483d}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,sans-serif;padding-bottom:80px}
header{padding:38px 20px 24px;background:linear-gradient(145deg,#2b4030,#101713)}.eyebrow{color:var(--gold);font-size:11px;letter-spacing:2px;font-weight:bold}.hero{font-size:38px;font-weight:850;margin:8px 0}.sub{color:#d4ddcf}.date{display:inline-block;border:1px solid #71816e;border-radius:20px;padding:8px 12px;margin-top:14px;color:#f3dfad;font-size:12px}
main{padding:16px}.card{background:var(--card);border:1px solid var(--line);border-radius:17px;padding:15px;margin:12px 0}.muted{color:var(--muted);font-size:13px;line-height:1.5}.daydate{color:var(--gold);font-size:11px;font-weight:bold;letter-spacing:1px}.daytitle{font-size:23px;font-weight:800;margin:7px 0}.stop{padding:13px 0;border-bottom:1px solid var(--line);display:flex;gap:10px}.stop:last-child{border:0}.stop input{width:22px;height:22px;accent-color:var(--gold);flex-shrink:0}.stopcontent{flex:1}.stopname{font-weight:750;margin-bottom:5px}.tag{font-size:10px;color:var(--gold);margin:6px 0}.btn{display:inline-block;text-decoration:none;color:#f3dfad;background:#2b3a2f;border:1px solid #52634f;border-radius:10px;padding:9px 11px;font-size:12px;margin-top:8px}.barbg{height:7px;background:#344238;border-radius:9px;overflow:hidden;margin:10px 0}.bar{height:100%;background:var(--gold);width:0%}.section{display:none}.section.active{display:block}nav{position:fixed;bottom:0;left:0;right:0;background:#18231c;border-top:1px solid var(--line);display:flex;overflow-x:auto;padding:8px 2px 12px}nav button{flex:1;min-width:48px;border:0;background:none;color:#b8c2b7;font-size:10px}nav button.active{color:var(--gold);font-weight:bold}nav span{display:block;font-size:17px;margin-bottom:3px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.wine{background:#2b3a2f;border-radius:12px;padding:12px}.wine b{display:block;margin-bottom:6px}.inputrow{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--line);gap:8px}.inputrow input{width:105px;background:#111a14;color:white;border:1px solid #52634f;border-radius:8px;padding:8px;text-align:right}.total{font-size:27px;color:var(--gold);font-weight:850}.note{background:#2b3025;border-left:3px solid var(--gold);padding:11px;border-radius:0 10px 10px 0;color:#dbe0d4;font-size:12px;line-height:1.5}
</style></head><body>
<header><div class="eyebrow">İKİ KİŞİLİK KIŞ KAÇAMAĞI</div><div class="hero">BATUM</div><div class="sub">Noel ışıkları · Gürcü şarabı · Romantik sokaklar</div><div class="date">✦ 22–25 ARALIK 2026</div></header><main>
<section id="home" class="section active"><div class="card"><b>Gezi ilerlemeniz</b><div class="barbg"><div class="bar" id="allbar"></div></div><div class="muted" id="allstat"></div></div><div class="note">2026 Noel Köyü programı ve işletmelerin özel gün çalışma saatleri seyahatten önce teyit edilmeli.</div><h3>Günlük gezi planı</h3>${days.map((d,i)=>`<div class="card" onclick="tab('d${i}')"><div class="daydate">${d.date}</div><h3>${d.title}</h3><div class="muted">${d.intro}</div><a class="btn">Günü aç →</a></div>`).join("")}</section>
${days.map((d,i)=>`<section id="d${i}" class="section"><div class="daydate">${d.date}</div><div class="daytitle">${d.title}</div><p class="muted">${d.intro}</p><div class="card">${d.stops.map((s,j)=>{let id=i+"-"+j;return `<div class="stop"><input type="checkbox" data-id="${id}" onchange="toggle('${id}',this.checked)"><div class="stopcontent"><div class="stopname">${s[0]}</div><div class="muted">${s[1]}</div><a class="btn" href="${mapLink(s[2])}">⌖ Google Maps'te aç</a></div></div>`}).join("")}</div><div class="card"><b>Günün duraklarını haritada ara</b><p class="muted">Google Maps'te bu günün duraklarını görüntüle.</p><a class="btn" href="${mapLink(d.stops.map(s=>s[2]).join(" to "))}">Rotayı aç ↗</a></div></section>`).join("")}
<section id="wine" class="section"><h3>Gürcü şarap rehberi</h3><p class="muted">Tadım sırasında bu üzüm ve stilleri sorun.</p><div class="grid">${wines.map(w=>`<div class="wine"><b>${w[0]}</b><div class="muted">${w[1]}</div></div>`).join("")}</div><div class="card"><h3>Şarap durakları</h3><p><b>MIDI Wine Bar</b></p><div class="muted">Doğal Gürcü şarapları için araştırılacak seçenek.</div><a class="btn" href="${mapLink("MIDI Wine Bar Batumi Georgia")}">Haritada aç</a><hr style="border-color:var(--line);margin:16px 0"><p><b>Bu&Khari</b></p><div class="muted">Tadım ve çalışma saatlerini önceden teyit edin.</div><a class="btn" href="${mapLink("Bu Khari wine bar Batumi Georgia")}">Haritada aç</a></div></section>
<section id="food" class="section"><h3>Gürcü mutfağı</h3><div class="card">${foods.map(f=>`<div style="padding:10px 0;border-bottom:1px solid var(--line)"><b>${f[0]}</b><p class="muted">${f[1]}</p><a class="btn" href="${mapLink(f[0]+" Batumi")}">Yakında ara</a></div>`).join("")}</div></section>
<section id="budget" class="section"><h3>İki kişilik bütçe</h3><p class="muted">Uçuş alanına 3.761 TL başlangıç değeri girdim. Kişi başı mı toplam mı olduğuna göre düzenleyebilirsin.</p><div class="card">${[["flight","Uçak bileti",3761],["hotel","Otel · 3 gece",0],["transfer","Transferler",0],["food","Yemek & kahve",0],["wine","Şarap tadımı",0],["other","Diğer",0]].map(x=>`<div class="inputrow"><label>${x[1]}</label><input type="number" id="${x[0]}" value="${x[2]}" min="0"></div>`).join("")}<p class="muted">Tahmini toplam</p><div class="total" id="total">3.761 TL</div><p class="muted">Hedef bütçe: 25.000–35.000 TL</p></div></section>
<section id="info" class="section"><h3>Seyahat notları</h3><div class="card"><b>Ulaşım alternatifleri</b><p class="muted">Direkt Batum uçuşu veya İstanbul–Rize-Artvin uçuşu + Hopa + Sarp sınırı + Batum kara yolu.</p><p class="muted">Sınır geçişi ve aktarma için geniş zaman payı bırakın; dönüş uçuşuna sıkışık bağlantı yapmayın.</p></div><div class="card"><b>Hazırlık listesi</b><p class="muted">• Geçerli fotoğraflı kimlik veya pasaport<br>• Gürcistan'ın zorunlu seyahat sağlık sigortası koşullarını kontrol edin<br>• Su geçirmez ayakkabı, mont ve şemsiye<br>• Şarap taşıma ve gümrük limitlerini kontrol edin</p></div><div class="card"><b>Önemli harita noktaları</b><p><a class="btn" href="${mapLink("Europe Square Batumi")}">Europe Square</a> <a class="btn" href="${mapLink("Batumi Piazza")}">Piazza</a></p><p><a class="btn" href="${mapLink("Batumi Boulevard")}">Boulevard</a> <a class="btn" href="${mapLink("Ali and Nino Statue Batumi")}">Ali & Nino</a></p></div></section>
</main><nav><button class="active" onclick="tab('home',this)"><span>⌂</span>Plan</button><button onclick="tab('d0',this)"><span>🎄</span>22</button><button onclick="tab('d1',this)"><span>🍷</span>23</button><button onclick="tab('d2',this)"><span>♥</span>24</button><button onclick="tab('d3',this)"><span>✈</span>25</button><button onclick="tab('wine',this)"><span>🍇</span>Şarap</button><button onclick="tab('food',this)"><span>♨</span>Yemek</button><button onclick="tab('budget',this)"><span>₺</span>Bütçe</button><button onclick="tab('info',this)"><span>ⓘ</span>Bilgi</button></nav>
<script>
let done=${JSON.stringify(progress.done)};
function tab(id,btn){document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');window.scrollTo(0,0);}
function toggle(id,v){if(v)done[id]=true;else delete done[id];localStorage.setItem('batumi_progress',JSON.stringify({done}));render();}
function render(){let checks=document.querySelectorAll('input[type=checkbox][data-id]');checks.forEach(c=>c.checked=!!done[c.dataset.id]);let total=${days.reduce((a,d)=>a+d.stops.length,0)},n=Object.keys(done).length;document.getElementById('allbar').style.width=(n/total*100)+'%';document.getElementById('allstat').textContent=n+' / '+total+' durak tamamlandı';}
function calc(){let sum=0;['flight','hotel','transfer','food','wine','other'].forEach(id=>sum+=Number(document.getElementById(id).value)||0);document.getElementById('total').textContent=sum.toLocaleString('tr-TR')+' TL';}
render();document.querySelectorAll('#budget input').forEach(i=>i.addEventListener('input',calc));calc();
</script></body></html>`;

document.open();
document.write(html);
document.close();
