/* =============================================
   MECHANISTRAIL - script.js
   ============================================= */

/* =============================================
   BÖLÜM 1: GALERİ RESİMLERİ
   ============================================= */
const galleryPhotos = [
  { src: "lokomotif_1.jpg", caption: "Mechanistrail — Mühendislik Projelerimizden" },
  { src: "lokomotif_2.jpg", caption: "Mechanistrail — Mühendislik Projelerimizden" },
  { src: "lokomotif_3.jpg", caption: "Mechanistrail — Mühendislik Projelerimizden" },
  { src: "lokomotif_4.jpg", caption: "Mechanistrail — Mühendislik Projelerimizden" },
  { src: "lokomotif_5.jpg", caption: "Mechanistrail — Mühendislik Projelerimizden" },
  { src: "lokomotif_6.jpg", caption: "Mechanistrail — Mühendislik Projelerimizden" },
  { src: "lokomotif_7.jpg", caption: "Mechanistrail — Mühendislik Projelerimizden" },
];
const GALLERY_INTERVAL = 10000;

/* =============================================
   BÖLÜM 2: PROJE VERİLERİ
   Yeni proje eklemek için örneği kopyala.
   img: "" bırakırsan ikon gösterilir.
   ============================================= */
const projects = [
  { title:"Endüstriyel Konveyör Sistemi", desc:"Mekanik tasarım, PLC yazılımı ve termal analiz.", img:"lokomotif_1.jpg", icon:"ti-robot", iconColor:"#378ADD", iconBg:"rgba(24,95,165,0.1)", tags:["Mekanik","PLC","Termal"] },
  { title:"HVAC Akış Optimizasyonu", desc:"CFD simülasyonu ile enerji verimliliği %23 artırıldı.", img:"lokomotif_2.jpg", icon:"ti-wind", iconColor:"#EF9F27", iconBg:"rgba(186,117,23,0.1)", tags:["CFD","HVAC","Akış"] },
  { title:"Akıllı Sensör PCB Kartı", desc:"Çok katmanlı PCB tasarımı ve gömülü yazılım.", img:"lokomotif_3.jpg", icon:"ti-cpu", iconColor:"#5DCAA5", iconBg:"rgba(29,158,117,0.1)", tags:["PCB","IoT","Yazılım"] },
  { title:"Soğutma Termal Analizi", desc:"Yüksek güçlü elektronik soğutma sistemi simülasyonu.", img:"lokomotif_4.jpg", icon:"ti-ripple", iconColor:"#AFA9EC", iconBg:"rgba(127,119,221,0.1)", tags:["Termal","FEA","Soğutma"] },
  { title:"Özel Makine Tasarımı", desc:"Kinematik analiz, yapısal hesap ve prototip üretimi.", img:"lokomotif_5.jpg", icon:"ti-3d-cube-sphere", iconColor:"#378ADD", iconBg:"rgba(24,95,165,0.1)", tags:["Mekanik","Kinematik","Prototip"] },
  { title:"Motor Kontrol Sistemi", desc:"Servo motor sürücü kartı ve kontrol yazılımı.", img:"lokomotif_6.jpg", icon:"ti-engine", iconColor:"#5DCAA5", iconBg:"rgba(29,158,117,0.1)", tags:["Elektronik","Kontrol","Yazılım"] },
  /* --- YENİ PROJE EKLE ---
  { title:"Proje Adı", desc:"Açıklama.", img:"resim.jpg", icon:"ti-bolt", iconColor:"#EF9F27", iconBg:"rgba(186,117,23,0.1)", tags:["Etiket1","Etiket2"] },
  */
];

/* =============================================
   BÖLÜM 3: HESAPLAYICI (değiştirme)
   ============================================= */
var calcShape = 'box';
var PI = Math.PI;

var CALC_CFG = {
  box:         { fields:{a:'Uzunluk — mm',b:'Genişlik — mm',c:'Yükseklik — mm'}, hide:['d','e'] },
  cylinder:    { fields:{a:'Çap — mm',b:'Boy — mm'}, hide:['c','d','e'] },
  tube:        { fields:{a:'Dış çap — mm',b:'Boy — mm',e:'İç çap — mm'}, hide:['c','d'] },
  sphere:      { fields:{a:'Çap — mm'}, hide:['b','c','d','e'] },
  sq_solid:    { fields:{a:'Kenar a — mm',b:'Boy — mm'}, hide:['c','d','e'] },
  sq_tube:     { fields:{a:'Dış kenar a — mm',b:'Boy — mm',d:'Et kalınlığı — mm'}, hide:['c','e'] },
  rect_solid:  { fields:{a:'Genişlik b — mm',b:'Yükseklik h — mm',c:'Boy — mm'}, hide:['d','e'] },
  rect_tube:   { fields:{a:'Dış genişlik — mm',b:'Dış yükseklik — mm',c:'Boy — mm',d:'Et kalınlığı — mm'}, hide:['e'] }
};
var CALC_NAMES = {
  box:'Dikdörtgen blok', cylinder:'Silindir', tube:'İçi boş boru', sphere:'Küre',
  sq_solid:'Kare profil (dolu)', sq_tube:'Kare kutu profil',
  rect_solid:'Dikdörtgen profil (dolu)', rect_tube:'Dikdörtgen kutu profil'
};

function calcGV(id){ var e=document.getElementById(id); return e?(parseFloat(e.value)||0):0; }
function setText(id,v){ var e=document.getElementById(id); if(e) e.textContent=v; }

function selShape(s){
  calcShape=s;
  document.querySelectorAll('.calc-tab').forEach(function(b){b.classList.remove('active');});
  var tb=document.getElementById('tb-'+s); if(tb) tb.classList.add('active');
  var cfg=CALC_CFG[s];
  ['a','b','c','d','e'].forEach(function(k){
    var el=document.getElementById('cf-'+k), lb=document.getElementById('cl-'+k);
    if(!el) return;
    if(cfg.fields[k]){ el.style.display=''; if(lb) lb.textContent=cfg.fields[k]; }
    else { el.style.display='none'; }
  });
  if(cfg.hide) cfg.hide.forEach(function(k){ var el=document.getElementById('cf-'+k); if(el) el.style.display='none'; });
  doCalc();
}

function fmtVol(n){ if(n>=1e9) return (n/1e9).toFixed(3)+' m³'; if(n>=1e6) return (n/1e6).toFixed(2)+' cm³'; return Math.round(n)+' mm³'; }
function fmtArea(n){ if(n>=1e6) return (n/1e6).toFixed(2)+' cm²'; return Math.round(n)+' mm²'; }
function fmtW(kg){ return kg>=1?kg.toFixed(3)+' kg':(kg*1000).toFixed(1)+' g'; }
function fmtI(n){ if(n>=1e8) return (n/1e8).toFixed(2)+' ×10⁸ mm⁴'; if(n>=1e6) return (n/1e6).toFixed(2)+' ×10⁶ mm⁴'; return Math.round(n)+' mm⁴'; }

function doCalc(){
  var s=calcShape, a=calcGV('cv-a'), b=calcGV('cv-b'), c=calcGV('cv-c'), d=calcGV('cv-d'), e=calcGV('cv-e');
  var matEl=document.getElementById('c-mat'), qtyEl=document.getElementById('c-qty');
  var dens=matEl?(parseFloat(matEl.value)||7850):7850;
  var qty=qtyEl?(Math.max(1,parseInt(qtyEl.value)||1)):1;
  var vol=0,area=0,csArea=0,kgm=0,Ix=0,Iy=0;
  var isProfile=['sq_solid','sq_tube','rect_solid','rect_tube'].indexOf(s)>=0;
  if(s==='box'){vol=a*b*c;area=2*(a*b+b*c+a*c);}
  else if(s==='cylinder'){var r=a/2;vol=PI*r*r*b;area=2*PI*r*(r+b);}
  else if(s==='tube'){var ro=a/2,ri=e/2;vol=PI*(ro*ro-ri*ri)*b;area=2*PI*(ro+ri)*b+2*PI*(ro*ro-ri*ri);}
  else if(s==='sphere'){var r=a/2;vol=(4/3)*PI*r*r*r;area=4*PI*r*r;}
  else if(s==='sq_solid'){csArea=a*a;vol=csArea*b;area=4*a*b+2*a*a;Ix=Iy=a*a*a*a/12;kgm=(csArea*1e-6)*dens;}
  else if(s==='sq_tube'){var ai=Math.max(0,a-2*d);csArea=a*a-ai*ai;vol=csArea*b;area=4*a*b+2*(a*a-ai*ai);Ix=Iy=(a*a*a*a-ai*ai*ai*ai)/12;kgm=(csArea*1e-6)*dens;}
  else if(s==='rect_solid'){csArea=a*b;vol=csArea*c;area=2*a*b+2*(a+b)*c;Ix=a*b*b*b/12;Iy=b*a*a*a/12;kgm=(csArea*1e-6)*dens;}
  else if(s==='rect_tube'){var bi=Math.max(0,a-2*d),hi=Math.max(0,b-2*d);csArea=a*b-bi*hi;vol=csArea*c;area=2*(a*b-bi*hi)+2*(a+b)*c;Ix=(a*b*b*b-bi*hi*hi*hi)/12;Iy=(b*a*a*a-hi*bi*bi*bi)/12;kgm=(csArea*1e-6)*dens;}
  var w1=(vol*1e-9)*dens;
  setText('cr-vol',fmtVol(vol)); setText('cr-area',fmtArea(area));
  setText('cr-w1',fmtW(w1)); setText('cr-tot',fmtW(w1*qty)+(qty>1?' (×'+qty+')':''));
  setText('c-slabel',CALC_NAMES[s]);
  var pinfo=document.getElementById('c-pinfo'); if(pinfo) pinfo.style.display=isProfile?'':'none';
  if(isProfile){ setText('cr-cs',fmtArea(csArea)); setText('cr-kgm',kgm.toFixed(3)+' kg/m'); setText('cr-ix',fmtI(Ix)); setText('cr-iy',fmtI(Iy)); }
  var dimTxt={box:Math.round(a)+'×'+Math.round(b)+'×'+Math.round(c)+' mm',cylinder:'Ø'+Math.round(a)+' × '+Math.round(b)+' mm',tube:'Ø'+Math.round(a)+'/Ø'+Math.round(e)+' × '+Math.round(b)+' mm',sphere:'Ø'+Math.round(a)+' mm',sq_solid:Math.round(a)+'×'+Math.round(a)+' × '+Math.round(b)+' mm',sq_tube:Math.round(a)+'×'+Math.round(a)+' et:'+Math.round(d)+' × '+Math.round(b)+' mm',rect_solid:Math.round(a)+'×'+Math.round(b)+' × '+Math.round(c)+' mm',rect_tube:Math.round(a)+'×'+Math.round(b)+' et:'+Math.round(d)+' × '+Math.round(c)+' mm'};
  setText('c-dlabel',dimTxt[s]||'');
  drawCalcShape(s,a,b,c,d,e);
}

var BL='#378ADD',BT='rgba(55,138,221,0.15)',BS='rgba(55,138,221,0.3)';
function drawCalcShape(s,a,b,c,d,e){
  var cv=document.getElementById('c-canvas'); if(!cv) return;
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  if(s==='box') drawCBox(ctx,W,H,a,b,c);
  else if(s==='cylinder') drawCCyl(ctx,W,H,a,b);
  else if(s==='tube') drawCTube(ctx,W,H,a,b,e);
  else if(s==='sphere') drawCSphere(ctx,W,H,a);
  else if(s==='sq_solid') drawCProfile(ctx,W,H,a,a,b,0,true);
  else if(s==='sq_tube') drawCProfile(ctx,W,H,a,a,b,d,false);
  else if(s==='rect_solid') drawCProfile(ctx,W,H,a,b,c,0,true);
  else if(s==='rect_tube') drawCProfile(ctx,W,H,a,b,c,d,false);
}
function drawCBox(ctx,W,H,a,b,c){var mx=Math.max(a,b,c,1),bw=Math.min(150,150*a/mx),bh=Math.min(90,90*c/mx),bd=Math.min(50,50*b/mx);var ox=(W-bw-bd*0.5)/2+bd*0.5,oy=(H-bh-bd*0.4)/2+bd*0.4;ctx.clearRect(0,0,W,H);ctx.lineWidth=1.5;ctx.strokeStyle=BL;ctx.fillStyle=BT;ctx.fillRect(ox,oy,bw,bh);ctx.strokeRect(ox,oy,bw,bh);ctx.fillStyle='rgba(55,138,221,0.22)';ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ox-bd*0.5,oy-bd*0.4);ctx.lineTo(ox-bd*0.5+bw,oy-bd*0.4);ctx.lineTo(ox+bw,oy);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='rgba(55,138,221,0.08)';ctx.beginPath();ctx.moveTo(ox+bw,oy);ctx.lineTo(ox+bw-bd*0.5,oy-bd*0.4);ctx.lineTo(ox+bw-bd*0.5,oy-bd*0.4+bh);ctx.lineTo(ox+bw,oy+bh);ctx.closePath();ctx.fill();ctx.stroke();ctx.strokeStyle=BS;ctx.setLineDash([3,3]);ctx.beginPath();ctx.moveTo(ox,oy+bh);ctx.lineTo(ox-bd*0.5,oy+bh-bd*0.4);ctx.lineTo(ox-bd*0.5+bw,oy+bh-bd*0.4);ctx.stroke();ctx.beginPath();ctx.moveTo(ox-bd*0.5,oy-bd*0.4);ctx.lineTo(ox-bd*0.5,oy+bh-bd*0.4);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#85B7EB';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(Math.round(a)+'mm',ox+bw/2,oy+bh+14);ctx.save();ctx.translate(ox+bw+14,oy+bh/2);ctx.rotate(PI/2);ctx.fillText(Math.round(c)+'mm',0,0);ctx.restore();ctx.fillText(Math.round(b)+'mm',ox-bd*0.25-6,oy-bd*0.2-4);}
function drawCCyl(ctx,W,H,d,h){var mx=Math.max(d,h,1),cw=Math.min(120,120*d/mx),ch=Math.min(110,110*h/mx),eh=Math.max(14,cw*0.25);var cx=W/2,cy=(H-ch)/2+ch;ctx.clearRect(0,0,W,H);ctx.lineWidth=1.5;ctx.strokeStyle=BL;ctx.fillStyle='rgba(55,138,221,0.22)';ctx.beginPath();ctx.ellipse(cx,cy-ch,cw/2,eh/2,0,0,2*PI);ctx.fill();ctx.stroke();ctx.fillStyle=BT;ctx.fillRect(cx-cw/2,cy-ch,cw,ch);ctx.beginPath();ctx.moveTo(cx-cw/2,cy-ch);ctx.lineTo(cx-cw/2,cy);ctx.stroke();ctx.beginPath();ctx.moveTo(cx+cw/2,cy-ch);ctx.lineTo(cx+cw/2,cy);ctx.stroke();ctx.beginPath();ctx.ellipse(cx,cy,cw/2,eh/2,0,0,PI);ctx.stroke();ctx.strokeStyle=BS;ctx.setLineDash([3,3]);ctx.beginPath();ctx.ellipse(cx,cy,cw/2,eh/2,0,PI,2*PI);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#85B7EB';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('Ø'+Math.round(d)+'mm',cx,cy+eh/2+14);ctx.save();ctx.translate(cx+cw/2+14,cy-ch/2);ctx.rotate(PI/2);ctx.fillText(Math.round(h)+'mm',0,0);ctx.restore();}
function drawCTube(ctx,W,H,od,h,id_){drawCCyl(ctx,W,H,od,h);var mx=Math.max(od,h,1),cw=Math.min(120,120*od/mx),ch=Math.min(110,110*h/mx),eh=Math.max(14,cw*0.25);var cx=W/2,cy=(H-ch)/2+ch,ir=id_>0?(id_/od)*(cw/2):0;if(ir>2){ctx.strokeStyle='rgba(55,138,221,0.5)';ctx.lineWidth=1;ctx.setLineDash([2,2]);ctx.beginPath();ctx.ellipse(cx,cy-ch,ir,eh/2*(id_/od),0,0,2*PI);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#85B7EB';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('İç Ø'+Math.round(id_)+'mm',cx,cy-ch-eh/2*(id_/od)-6);}}
function drawCSphere(ctx,W,H,d){var r=Math.min(72,72*d/Math.max(d,200,1)),cx=W/2,cy=H/2;ctx.clearRect(0,0,W,H);ctx.lineWidth=1.5;ctx.strokeStyle=BL;ctx.fillStyle=BT;ctx.beginPath();ctx.arc(cx,cy,r,0,2*PI);ctx.fill();ctx.stroke();ctx.strokeStyle=BS;ctx.setLineDash([3,3]);ctx.beginPath();ctx.ellipse(cx,cy,r,r*0.28,0,0,2*PI);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#85B7EB';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('Ø'+Math.round(d)+'mm',cx,cy+r+16);}
function drawCProfile(ctx,W,H,pw,ph,len,t,solid){var mx=Math.max(pw,ph,1),sc=Math.min(85,85)/mx,dw=pw*sc,dh=ph*sc,dt=t*sc,bd=Math.min(45,45*len/Math.max(len,1000,1));var ox=(W-dw-bd*0.5)/2+bd*0.5,oy=(H-dh-bd*0.4)/2+bd*0.4;ctx.clearRect(0,0,W,H);ctx.lineWidth=1.5;ctx.strokeStyle=BL;if(solid){ctx.fillStyle=BT;ctx.fillRect(ox,oy,dw,dh);ctx.strokeRect(ox,oy,dw,dh);ctx.fillStyle='rgba(55,138,221,0.22)';ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ox-bd*0.5,oy-bd*0.4);ctx.lineTo(ox-bd*0.5+dw,oy-bd*0.4);ctx.lineTo(ox+dw,oy);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='rgba(55,138,221,0.08)';ctx.beginPath();ctx.moveTo(ox+dw,oy);ctx.lineTo(ox+dw-bd*0.5,oy-bd*0.4);ctx.lineTo(ox+dw-bd*0.5,oy-bd*0.4+dh);ctx.lineTo(ox+dw,oy+dh);ctx.closePath();ctx.fill();ctx.stroke();}else{var diw=Math.max(0,dw-2*dt),dih=Math.max(0,dh-2*dt);ctx.fillStyle=BT;ctx.beginPath();ctx.rect(ox,oy,dw,dh);ctx.rect(ox+dt,oy+dt,diw,dih);ctx.fill('evenodd');ctx.strokeRect(ox,oy,dw,dh);ctx.strokeRect(ox+dt,oy+dt,diw,dih);ctx.fillStyle='rgba(55,138,221,0.22)';ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ox-bd*0.5,oy-bd*0.4);ctx.lineTo(ox-bd*0.5+dw,oy-bd*0.4);ctx.lineTo(ox+dw,oy);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='rgba(55,138,221,0.08)';ctx.beginPath();ctx.moveTo(ox+dw,oy);ctx.lineTo(ox+dw-bd*0.5,oy-bd*0.4);ctx.lineTo(ox+dw-bd*0.5,oy-bd*0.4+dh);ctx.lineTo(ox+dw,oy+dh);ctx.closePath();ctx.fill();ctx.stroke();}ctx.strokeStyle=BS;ctx.setLineDash([3,3]);ctx.beginPath();ctx.moveTo(ox,oy+dh);ctx.lineTo(ox-bd*0.5,oy+dh-bd*0.4);ctx.lineTo(ox-bd*0.5+dw,oy+dh-bd*0.4);ctx.stroke();ctx.beginPath();ctx.moveTo(ox-bd*0.5,oy-bd*0.4);ctx.lineTo(ox-bd*0.5,oy+dh-bd*0.4);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#85B7EB';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(Math.round(pw)+'mm',ox+dw/2,oy+dh+14);ctx.save();ctx.translate(ox+dw+14,oy+dh/2);ctx.rotate(PI/2);ctx.fillText(Math.round(ph)+'mm',0,0);ctx.restore();ctx.fillText(Math.round(len)+'mm',ox-bd*0.25-6,oy-bd*0.2-4);}

/* =============================================
   BÖLÜM 4: SİTE MANTIĞI (değiştirme)
   ============================================= */
/* --- Formspree İletişim Formu --- */
async function submitForm() {
  var name    = document.getElementById('f-name').value.trim();
  var email   = document.getElementById('f-email').value.trim();
  var service = document.getElementById('f-service').value.trim();
  var message = document.getElementById('f-message').value.trim();
  var btn     = document.getElementById('f-submit');
  var success = document.getElementById('form-success');
  var error   = document.getElementById('form-error');

  if (!name || !email || !message) {
    error.style.display = 'block';
    error.textContent = '❌ Lütfen zorunlu alanları doldurun (Ad, E-posta, Mesaj).';
    return;
  }

  btn.textContent = 'Gönderiliyor...';
  btn.disabled = true;
  success.style.display = 'none';
  error.style.display = 'none';

  try {
    var response = await fetch('https://formspree.io/f/mjgzkzgl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name: name, email: email, hizmet: service, message: message })
    });

    if (response.ok) {
      success.style.display = 'block';
      document.getElementById('f-name').value = '';
      document.getElementById('f-email').value = '';
      document.getElementById('f-service').value = '';
      document.getElementById('f-message').value = '';
    } else {
      throw new Error('Sunucu hatası');
    }
  } catch (e) {
    error.style.display = 'block';
    error.textContent = '❌ Bir hata oluştu. Lütfen tekrar deneyin.';
  }

  btn.textContent = 'Gönder';
  btn.disabled = false;
}

function toggleMenu(){ document.getElementById('nav-links').classList.toggle('open'); document.getElementById('hamburger').classList.toggle('open'); }
function closeMenu(){ document.getElementById('nav-links').classList.remove('open'); document.getElementById('hamburger').classList.remove('open'); }

function showPage(id){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});
  document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active');});
  var page=document.getElementById('page-'+id), btn=document.getElementById('nb-'+id);
  if(page) page.classList.add('active');
  if(btn)  btn.classList.add('active');
  window.scrollTo(0,0);
  if(id==='calc') setTimeout(doCalc,100);
}

function renderProjects(){
  var grid=document.getElementById('proj-grid'); if(!grid) return;
  grid.innerHTML='';
  projects.forEach(function(p){
    var thumb=p.img?'<img src="'+p.img+'" alt="'+p.title+'">':'<i class="ti '+p.icon+'" style="font-size:40px;color:'+p.iconColor+'" aria-hidden="true"></i>';
    var tags=p.tags.map(function(t){return '<span class="ptag">'+t+'</span>';}).join('');
    grid.innerHTML+='<div class="proj-card"><div class="proj-thumb" style="background:'+(p.img?'#000':p.iconBg)+'">'+thumb+'</div><div class="proj-body"><h3>'+p.title+'</h3><p>'+p.desc+'</p><div class="proj-tags">'+tags+'</div></div></div>';
  });
}

const SLIDER_INTERVAL=4000;
var sliderCur=0,sliderProg=0,sliderTimer,sliderProgTimer;
function initSlider(){
  var slidesEl=document.getElementById('slides'),dotsEl=document.getElementById('dots'),progEl=document.getElementById('prog');
  if(!slidesEl) return;
  var total=slidesEl.children.length;
  dotsEl.innerHTML='';
  for(var i=0;i<total;i++){(function(idx){var d=document.createElement('button');d.className='dot'+(idx===0?' active':'');d.setAttribute('aria-label','Slayt '+(idx+1));d.onclick=function(){sliderGoTo(idx);};dotsEl.appendChild(d);})(i);}
  function updateDots(){document.querySelectorAll('.dot').forEach(function(d,i){d.className='dot'+(i===sliderCur?' active':'');});}
  function sliderResetProg(){clearInterval(sliderProgTimer);sliderProg=0;progEl.style.width='0%';sliderProgTimer=setInterval(function(){sliderProg+=100/(SLIDER_INTERVAL/100);if(sliderProg>=100)sliderProg=100;progEl.style.width=sliderProg+'%';},100);}
  window.sliderGoTo=function(n){sliderCur=(n+total)%total;slidesEl.style.transform='translateX(-'+sliderCur*100+'%)';updateDots();sliderResetProg();};
  document.getElementById('prev').onclick=function(){clearInterval(sliderTimer);sliderGoTo(sliderCur-1);startSliderAuto();};
  document.getElementById('next').onclick=function(){clearInterval(sliderTimer);sliderGoTo(sliderCur+1);startSliderAuto();};
  function startSliderAuto(){clearInterval(sliderTimer);sliderTimer=setInterval(function(){sliderGoTo(sliderCur+1);},SLIDER_INTERVAL);}
  sliderResetProg();startSliderAuto();
}

var galleryCur=0,galleryTimer,galleryProgTimer,galleryProgVal=0;
function initGallery(){
  var wrap=document.getElementById('gallery-wrap'),dotsEl=document.getElementById('gallery-dots'),progEl=document.getElementById('gallery-prog');
  if(!wrap) return;
  if(galleryPhotos.length===0){wrap.innerHTML='<div class="gallery-placeholder"><i class="ti ti-photo" aria-hidden="true"></i><span>Resim eklemek için script.js dosyasındaki <strong>galleryPhotos</strong> dizisini düzenleyin</span></div>';return;}
  var sc=document.createElement('div');
  galleryPhotos.forEach(function(photo,i){var slide=document.createElement('div');slide.className='gallery-slide'+(i===0?' active':'');slide.innerHTML='<img src="'+photo.src+'" alt="'+(photo.caption||'')+'">'+( photo.caption?'<div class="gallery-caption">'+photo.caption+'</div>':'');sc.appendChild(slide);});
  wrap.appendChild(sc);
  var prev=document.createElement('button');prev.className='gallery-prev';prev.innerHTML='<i class="ti ti-arrow-left"></i>';
  var next=document.createElement('button');next.className='gallery-next';next.innerHTML='<i class="ti ti-arrow-right"></i>';
  wrap.appendChild(prev);wrap.appendChild(next);
  dotsEl.innerHTML='';
  galleryPhotos.forEach(function(_,i){(function(idx){var d=document.createElement('button');d.className='gallery-dot'+(idx===0?' active':'');d.onclick=function(){galleryGoTo(idx);};dotsEl.appendChild(d);})(i);});
  function updateGallery(){wrap.querySelectorAll('.gallery-slide').forEach(function(s,i){s.classList.toggle('active',i===galleryCur);});dotsEl.querySelectorAll('.gallery-dot').forEach(function(d,i){d.className='gallery-dot'+(i===galleryCur?' active':'');});}
  function galleryResetProg(){clearInterval(galleryProgTimer);galleryProgVal=0;progEl.style.width='0%';galleryProgTimer=setInterval(function(){galleryProgVal+=100/(GALLERY_INTERVAL/100);if(galleryProgVal>=100)galleryProgVal=100;progEl.style.width=galleryProgVal+'%';},100);}
  function galleryGoTo(n){galleryCur=(n+galleryPhotos.length)%galleryPhotos.length;updateGallery();galleryResetProg();}
  window.galleryGoTo=galleryGoTo;
  prev.onclick=function(){clearInterval(galleryTimer);galleryGoTo(galleryCur-1);startGalleryAuto();};
  next.onclick=function(){clearInterval(galleryTimer);galleryGoTo(galleryCur+1);startGalleryAuto();};
  function startGalleryAuto(){clearInterval(galleryTimer);galleryTimer=setInterval(function(){galleryGoTo(galleryCur+1);},GALLERY_INTERVAL);}
  galleryResetProg();startGalleryAuto();
}

document.addEventListener('DOMContentLoaded',function(){renderProjects();initSlider();initGallery();});

/* =============================================
   BİRİM DÖNÜŞTÜRÜCÜ
   ============================================= */

function switchCalcPanel(panel) {
  var pw = document.getElementById('panel-weight');
  var pc = document.getElementById('panel-converter');
  if(pw) pw.style.display = panel==='weight' ? '' : 'none';
  if(pc) pc.style.display = panel==='converter' ? '' : 'none';
  document.querySelectorAll('.calc-tab').forEach(function(b){ b.classList.remove('active'); });
  if(panel==='converter'){
    var tb=document.getElementById('tb-converter'); if(tb) tb.classList.add('active');
    convAll();
  } else {
    var tb2=document.getElementById('tb-'+calcShape); if(tb2) tb2.classList.add('active');
  }
}

function fmtN(n){
  if(n===0) return '0';
  var abs=Math.abs(n);
  if(abs>=1e12) return (n/1e12).toFixed(4)+' (×10¹²)';
  if(abs>=1e9)  return (n/1e9).toFixed(4)+' (×10⁹)';
  if(abs>=1e6)  return (n/1e6).toFixed(4)+' (×10⁶)';
  if(abs>=1e3)  return n.toFixed(4);
  if(abs>=1)    return n.toFixed(6);
  if(abs>=1e-3) return n.toFixed(8);
  return n.toExponential(4);
}

function renderConv(elId, units, valueInBase, activeIdx) {
  var el = document.getElementById(elId);
  if(!el) return;
  var html = '';
  units.forEach(function(u, i){
    var val = valueInBase / u.factor;
    var isActive = i === activeIdx;
    html += '<div class="conv-result-row'+(isActive?' active-unit':'')+'">'+
      '<span class="conv-unit">'+u.label+'</span>'+
      '<span class="conv-val">'+fmtN(val)+'</span>'+
      '</div>';
  });
  el.innerHTML = html;
}

/* UZUNLUK */
var LEN_UNITS = [
  {label:'nm (nanometre)',    factor:1e-9},
  {label:'µm (mikrometre)',   factor:1e-6},
  {label:'mm (milimetre)',    factor:1e-3},
  {label:'cm (santimetre)',   factor:1e-2},
  {label:'dm (desimetre)',    factor:1e-1},
  {label:'m (metre)',         factor:1},
  {label:'km (kilometre)',    factor:1e3},
  {label:'in (inç)',          factor:0.0254},
  {label:'ft (fit)',          factor:0.3048},
  {label:'yd (yarda)',        factor:0.9144},
  {label:'mi (mil)',          factor:1609.344},
  {label:'NM (deniz mili)',   factor:1852},
  {label:'au (astronomik)',   factor:1.496e11},
];
function convLen(){
  var val=parseFloat(document.getElementById('len-val').value)||0;
  var fromIdx=document.getElementById('len-from').selectedIndex;
  var base=val*LEN_UNITS[fromIdx].factor;
  renderConv('len-results', LEN_UNITS, base, fromIdx);
}

/* KÜTLE */
var MASS_UNITS = [
  {label:'µg (mikrogram)',    factor:1e-9},
  {label:'mg (miligram)',     factor:1e-6},
  {label:'g (gram)',          factor:1e-3},
  {label:'kg (kilogram)',     factor:1},
  {label:'t (ton/metrik)',    factor:1e3},
  {label:'oz (ons)',          factor:0.0283495},
  {label:'lb (pound)',        factor:0.453592},
  {label:'st (stone)',        factor:6.35029},
  {label:'kip (kilopound)',   factor:453.592},
  {label:'slug',              factor:14.5939},
];
function convMass(){
  var val=parseFloat(document.getElementById('mass-val').value)||0;
  var fromIdx=document.getElementById('mass-from').selectedIndex;
  var base=val*MASS_UNITS[fromIdx].factor;
  renderConv('mass-results', MASS_UNITS, base, fromIdx);
}

/* HACİM */
var VOL_UNITS = [
  {label:'mm³ (milimetre küp)',  factor:1e-9},
  {label:'cm³ / ml',             factor:1e-6},
  {label:'dl (desilitre)',       factor:1e-4},
  {label:'l (litre)',            factor:1e-3},
  {label:'m³ (metre küp)',       factor:1},
  {label:'in³ (inç küp)',        factor:1.6387e-5},
  {label:'ft³ (fit küp)',        factor:0.0283168},
  {label:'yd³ (yarda küp)',      factor:0.764555},
  {label:'gal-US (galon ABD)',   factor:0.0037854},
  {label:'gal-UK (galon İng)',   factor:0.00454609},
  {label:'fl oz US',             factor:2.9574e-5},
  {label:'bbl (varil petrol)',   factor:0.158987},
];
function convVol(){
  var val=parseFloat(document.getElementById('vol-val').value)||0;
  var fromIdx=document.getElementById('vol-from').selectedIndex;
  var base=val*VOL_UNITS[fromIdx].factor;
  renderConv('vol-results', VOL_UNITS, base, fromIdx);
}

/* BASINÇ */
var PRES_UNITS = [
  {label:'Pa (pascal)',       factor:1},
  {label:'hPa (hektopaskal)', factor:1e2},
  {label:'kPa (kilopaskal)',  factor:1e3},
  {label:'MPa (megapaskal)',  factor:1e6},
  {label:'GPa (gigapaskal)',  factor:1e9},
  {label:'bar',               factor:1e5},
  {label:'mbar (milibar)',    factor:1e2},
  {label:'atm (atmosfer)',    factor:101325},
  {label:'psi (lb/in²)',      factor:6894.76},
  {label:'ksi (kip/in²)',     factor:6894760},
  {label:'mmHg (torr)',       factor:133.322},
  {label:'inHg',              factor:3386.39},
  {label:'kgf/cm²',           factor:98066.5},
];
function convPres(){
  var val=parseFloat(document.getElementById('pres-val').value)||0;
  var fromIdx=document.getElementById('pres-from').selectedIndex;
  var base=val*PRES_UNITS[fromIdx].factor;
  renderConv('pres-results', PRES_UNITS, base, fromIdx);
}

/* SICAKLIK */
function convTemp(){
  var val=parseFloat(document.getElementById('temp-val').value)||0;
  var from=document.getElementById('temp-from').value;
  var C; // Her şeyi önce Celsius'a çevir
  if(from==='C') C=val;
  else if(from==='F') C=(val-32)/1.8;
  else if(from==='K') C=val-273.15;
  else if(from==='R') C=(val-491.67)/1.8;
  var results=[
    {label:'°C (Celsius)',    val:C},
    {label:'°F (Fahrenheit)', val:C*1.8+32},
    {label:'K (Kelvin)',      val:C+273.15},
    {label:'°R (Rankine)',    val:(C+273.15)*1.8},
  ];
  var fromMap={C:0,F:1,K:2,R:3};
  var el=document.getElementById('temp-results'); if(!el) return;
  var html='';
  results.forEach(function(r,i){
    var isActive=(i===fromMap[from]);
    html+='<div class="conv-result-row'+(isActive?' active-unit':'')+'">'+
      '<span class="conv-unit">'+r.label+'</span>'+
      '<span class="conv-val">'+r.val.toFixed(4)+'</span></div>';
  });
  el.innerHTML=html;
}

/* KUVVET */
var FORCE_UNITS = [
  {label:'N (newton)',     factor:1},
  {label:'kN (kilonewton)',factor:1e3},
  {label:'MN (meganewton)',factor:1e6},
  {label:'dyn (dyne)',     factor:1e-5},
  {label:'kgf (kilogram-kuvvet)', factor:9.80665},
  {label:'tf (ton-kuvvet)',factor:9806.65},
  {label:'lbf (pound-kuvvet)', factor:4.44822},
  {label:'kip (kilopound-kuvvet)', factor:4448.22},
  {label:'ozf (ons-kuvvet)', factor:0.278014},
];
function convForce(){
  var val=parseFloat(document.getElementById('force-val').value)||0;
  var fromIdx=document.getElementById('force-from').selectedIndex;
  var base=val*FORCE_UNITS[fromIdx].factor;
  renderConv('force-results', FORCE_UNITS, base, fromIdx);
}

/* GÜÇ */
var POWER_UNITS = [
  {label:'W (watt)',        factor:1},
  {label:'kW (kilowatt)',   factor:1e3},
  {label:'MW (megawatt)',   factor:1e6},
  {label:'GW (gigawatt)',   factor:1e9},
  {label:'hp (BG/beygir)',  factor:745.7},
  {label:'PS (metrik BG)',  factor:735.499},
  {label:'BTU/s',           factor:1055.06},
  {label:'BTU/h',           factor:0.293071},
  {label:'kcal/s',          factor:4186.8},
  {label:'erg/s',           factor:1e-7},
];
function convPower(){
  var val=parseFloat(document.getElementById('power-val').value)||0;
  var fromIdx=document.getElementById('power-from').selectedIndex;
  var base=val*POWER_UNITS[fromIdx].factor;
  renderConv('power-results', POWER_UNITS, base, fromIdx);
}

/* ALAN */
var AREA_UNITS = [
  {label:'mm² (milimetre kare)', factor:1e-6},
  {label:'cm² (santimetre kare)',factor:1e-4},
  {label:'dm² (desimetre kare)', factor:1e-2},
  {label:'m² (metre kare)',      factor:1},
  {label:'a (ar)',               factor:100},
  {label:'ha (hektar)',          factor:1e4},
  {label:'km² (kilometre kare)', factor:1e6},
  {label:'in² (inç kare)',       factor:6.4516e-4},
  {label:'ft² (fit kare)',       factor:0.0929030},
  {label:'yd² (yarda kare)',     factor:0.836127},
  {label:'mi² (mil kare)',       factor:2.58999e6},
  {label:'acre (dönüm-ABD)',     factor:4046.86},
];
function convArea(){
  var val=parseFloat(document.getElementById('area-val').value)||0;
  var fromIdx=document.getElementById('area-from').selectedIndex;
  var base=val*AREA_UNITS[fromIdx].factor;
  renderConv('area-results', AREA_UNITS, base, fromIdx);
}

/* HIZ */
var SPD_UNITS = [
  {label:'mm/s',              factor:1e-3},
  {label:'cm/s',              factor:1e-2},
  {label:'m/s',               factor:1},
  {label:'km/h (kph)',        factor:0.277778},
  {label:'km/min',            factor:16.6667},
  {label:'mph (mil/saat)',    factor:0.44704},
  {label:'ft/s (fit/saniye)', factor:0.3048},
  {label:'knot (deniz mili/sa)', factor:0.514444},
  {label:'Mach (deniz sev.)', factor:340.29},
];
function convSpd(){
  var val=parseFloat(document.getElementById('spd-val').value)||0;
  var fromIdx=document.getElementById('spd-from').selectedIndex;
  var base=val*SPD_UNITS[fromIdx].factor;
  renderConv('spd-results', SPD_UNITS, base, fromIdx);
}

function convAll(){
  convLen(); convMass(); convVol(); convPres();
  convTemp(); convForce(); convPower(); convArea(); convSpd();
}

/* --- Araç Seçim Sistemi --- */
function openTool(tool) {
  document.getElementById('tool-selector').style.display  = 'none';
  document.getElementById('panel-weight').style.display   = 'none';
  document.getElementById('panel-converter').style.display= 'none';
  document.getElementById('panel-torque').style.display   = 'none';
  var el = document.getElementById('panel-' + tool);
  if (el) {
    el.style.display = '';
    if (tool === 'weight')    { setTimeout(doCalc, 50); }
    if (tool === 'converter') { convAll(); }
    if (tool === 'torque')    { calcTorque(); }
  }
  // nb-calc aktif yap
  document.querySelectorAll('.nav-btn').forEach(function(b){ b.classList.remove('active'); });
  var nb = document.getElementById('nb-calc'); if(nb) nb.classList.add('active');
}

function closeTool() {
  document.getElementById('panel-weight').style.display   = 'none';
  document.getElementById('panel-converter').style.display= 'none';
  document.getElementById('panel-torque').style.display   = 'none';
  document.getElementById('tool-selector').style.display  = '';
  window.scrollTo(0, 0);
}

/* --- Motor Torku Hesaplayıcı --- */
function calcTorque() {
  var method = document.getElementById('tq-method').value;
  var eff    = (parseFloat(document.getElementById('tq-eff').value) || 95) / 100;

  // Alanları göster/gizle
  var showPower  = ['pn','tp'].includes(method);
  var showRpm    = ['pn','tn'].includes(method);
  var showTorque = ['tn','tp'].includes(method);
  var showForce  = method === 'force';

  document.getElementById('tq-f-power').style.display  = (showPower  || method==='pn') ? '' : 'none';
  document.getElementById('tq-f-rpm').style.display    = showRpm    ? '' : 'none';
  document.getElementById('tq-f-torque').style.display = showTorque ? '' : 'none';
  document.getElementById('tq-f-force').style.display  = showForce  ? '' : 'none';
  document.getElementById('tq-f-radius').style.display = showForce  ? '' : 'none';

  var P = parseFloat(document.getElementById('tq-power').value) || 0;      // kW
  var n = parseFloat(document.getElementById('tq-rpm').value)   || 0;      // rpm
  var T_in = parseFloat(document.getElementById('tq-torque-in').value) || 0; // N·m
  var F = parseFloat(document.getElementById('tq-force').value) || 0;      // N
  var r = (parseFloat(document.getElementById('tq-radius').value) || 0) / 1000; // mm→m

  var T, power_kw, rpm, omega, hp, useful;

  if (method === 'pn') {
    // Güç & Devir → Tork
    power_kw = P;
    rpm = n;
    T = (power_kw * 1000 * 9.5488) / Math.max(n, 0.001);
  } else if (method === 'tn') {
    // Tork & Devir → Güç
    T = T_in;
    rpm = n;
    power_kw = (T * n) / 9548.8;
  } else if (method === 'tp') {
    // Tork & Güç → Devir
    T = T_in;
    power_kw = P;
    rpm = (power_kw * 1000 * 9.5488) / Math.max(T, 0.001);
  } else if (method === 'force') {
    // Kuvvet & Yarıçap → Tork
    T = F * r;
    power_kw = 0;
    rpm = 0;
  }

  omega  = (2 * Math.PI * (rpm || 0)) / 60;
  hp     = (power_kw || 0) / 0.7457;
  useful = (power_kw || 0) * eff;

  function f2(n){ return isNaN(n)||!isFinite(n) ? '—' : n.toFixed(2); }
  setText('tq-r-torque', f2(T) + ' N·m');
  setText('tq-r-power',  f2(power_kw) + ' kW');
  setText('tq-r-rpm',    f2(rpm) + ' rpm');
  setText('tq-r-omega',  f2(omega) + ' rad/s');
  setText('tq-r-hp',     f2(hp) + ' hp');
  setText('tq-r-useful', f2(useful) + ' kW');
}
