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
  { src: "laptop-standi-4.png", caption: "Katlanabilir Laptop Standı — Mechanistrail" },
  { src: "ananas_render1.png", caption: "Ananas Soyma Makinası — Mechanistrail" },
  { src: "duvar-yazicisi-1.png", caption: "Duvar Yazıcısı — Mechanistrail" },
  { src: "nohut_ayıklama1.png", caption: "Nohut Ayıklama Makinası — Mechanistrail" },
  { src: "ipek_gerdirme1.png", caption: "İpek Gerdirme Makinası — Mechanistrail" },
  { src: "aydınlatma-direk1.png", caption: "Aydınlatma Direği Tasarımı — Mechanistrail" },
];
const GALLERY_INTERVAL = 10000;

/* =============================================
   BÖLÜM 2: PROJE VERİLERİ
   Yeni proje eklemek için örneği kopyala.
   img: "" bırakırsan ikon gösterilir.
   ============================================= */
const projects = {
  tr: [
    { title:"Endüstriyel Konveyör Sistemi", desc:"Mekanik tasarım, PLC yazılımı ve termal analiz.", img:"lokomotif_1.jpg", icon:"ti-robot", iconColor:"#378ADD", iconBg:"rgba(24,95,165,0.1)", tags:["Mekanik","PLC","Termal"], link:"konveyor-sistemi.html" },
    { title:"HVAC Akış Optimizasyonu", desc:"CFD simülasyonu ile enerji verimliliği %23 artırıldı.", img:"lokomotif_2.jpg", icon:"ti-wind", iconColor:"#EF9F27", iconBg:"rgba(186,117,23,0.1)", tags:["CFD","HVAC","Akış"], link:"hvac-akis-optimizasyonu.html" },
    { title:"Akıllı Sensör PCB Kartı", desc:"Çok katmanlı PCB tasarımı ve gömülü yazılım.", img:"lokomotif_3.jpg", icon:"ti-cpu", iconColor:"#5DCAA5", iconBg:"rgba(29,158,117,0.1)", tags:["PCB","IoT","Yazılım"], link:"akilli-sensor-pcb.html" },
    { title:"Soğutma Termal Analizi", desc:"Yüksek güçlü elektronik soğutma sistemi simülasyonu.", img:"lokomotif_4.jpg", icon:"ti-ripple", iconColor:"#AFA9EC", iconBg:"rgba(127,119,221,0.1)", tags:["Termal","FEA","Soğutma"], link:"sogutma-termal-analiz.html" },
    { title:"Özel Makine Tasarımı", desc:"Kinematik analiz, yapısal hesap ve prototip üretimi.", img:"lokomotif_5.jpg", icon:"ti-3d-cube-sphere", iconColor:"#378ADD", iconBg:"rgba(24,95,165,0.1)", tags:["Mekanik","Kinematik","Prototip"], link:"ozel-makine-tasarimi.html" },
    { title:"Motor Kontrol Sistemi", desc:"Servo motor sürücü kartı ve kontrol yazılımı.", img:"lokomotif_6.jpg", icon:"ti-engine", iconColor:"#5DCAA5", iconBg:"rgba(29,158,117,0.1)", tags:["Elektronik","Kontrol","Yazılım"], link:"motor-kontrol-sistemi.html" },
    { title:"Katlanabilir Laptop Standı", desc:"Ergonomik, taşınabilir alüminyum laptop standı — mekanik tasarım, kinematik analiz ve prototip üretimi.", img:"laptop-standi-1.png", icon:"ti-device-laptop", iconColor:"#378ADD", iconBg:"rgba(24,95,165,0.1)", tags:["Mekanik Tasarım","Prototip","Ürün Geliştirme"], link:"laptop-standi.html" },
    { title:"Ananas Soyma Makinası", desc:"Gıda endüstrisine yönelik endüstriyel ananas soyma makinası — mekanik tasarım, kinematik analiz ve prototip üretimi.", img:"ananas_render1.png", icon:"ti-tool", iconColor:"#97C459", iconBg:"rgba(99,153,34,0.1)", tags:["Mekanik","Gıda Makinesi","Prototip"], link:"ananas-soyma-makinasi.html" },
    { title:"Duvar Yazıcısı", desc:"CNC kontrollü duvar boyama makinası — X-Y-Z eksen hareketi, alüminyum profil yapı ve komple prototip üretimi.", img:"duvar yazıcısı/DUVAR BOYAMA MONTAJI.png", icon:"ti-printer", iconColor:"#60a5fa", iconBg:"rgba(59,130,246,0.1)", tags:["CNC","Mekanik Tasarım","Prototip"], link:"duvar-yazicisi.html" },
    { title:"Nohut Ayıklama Makinası", desc:"Gıda endüstrisine yönelik endüstriyel nohut ayıklama makinası — mekanik tasarım, titreşim analizi ve prototip üretimi.", img:"nohut_ayıklama1.png", icon:"ti-grain", iconColor:"#EF9F27", iconBg:"rgba(186,117,23,0.1)", tags:["Mekanik","Gıda Makinesi","Titreşim"], link:"nohut-ayiklama-makinasi.html" },
    { title:"İpek Gerdirme Makinası", desc:"Değirmen eleği üretiminde kullanılan ipek gerdirme makinası — ipek fileyi ahşap çıtalara özel yapıştırıcılarla gergin şekilde sabitleyen mekanik sistem.", img:"ipek_gerdirme1.png", icon:"ti-needle", iconColor:"#a78bfa", iconBg:"rgba(167,139,250,0.1)", tags:["Mekanik","Elek Makinesi","Değirmen"], link:"ipek-gerdirme-makinasi.html" },
    { title:"Aydınlatma Direği Tasarımı", desc:"Belediyeler ve şirketler için kuruma özel aydınlatma direği tasarımı — özgün form, yapısal analiz ve marka kimliğiyle uyumlu çözümler.", img:"aydınlatma-direk1.png", icon:"ti-bulb", iconColor:"#f59e0b", iconBg:"rgba(245,158,11,0.1)", tags:["Kentsel Tasarım","Belediye","Kurumsal"], link:"aydinlatma-diregi.html" },
  ],
  en: [
    { title:"Industrial Conveyor System", desc:"Mechanical design, PLC software and thermal analysis.", img:"lokomotif_1.jpg", icon:"ti-robot", iconColor:"#378ADD", iconBg:"rgba(24,95,165,0.1)", tags:["Mechanical","PLC","Thermal"], link:"konveyor-sistemi.html" },
    { title:"HVAC Flow Optimization", desc:"Energy efficiency increased by 23% with CFD simulation.", img:"lokomotif_2.jpg", icon:"ti-wind", iconColor:"#EF9F27", iconBg:"rgba(186,117,23,0.1)", tags:["CFD","HVAC","Flow"], link:"hvac-akis-optimizasyonu.html" },
    { title:"Smart Sensor PCB Board", desc:"Multi-layer PCB design and embedded software.", img:"lokomotif_3.jpg", icon:"ti-cpu", iconColor:"#5DCAA5", iconBg:"rgba(29,158,117,0.1)", tags:["PCB","IoT","Software"], link:"akilli-sensor-pcb.html" },
    { title:"Cooling Thermal Analysis", desc:"High-power electronics cooling system simulation.", img:"lokomotif_4.jpg", icon:"ti-ripple", iconColor:"#AFA9EC", iconBg:"rgba(127,119,221,0.1)", tags:["Thermal","FEA","Cooling"], link:"sogutma-termal-analiz.html" },
    { title:"Custom Machine Design", desc:"Kinematic analysis, structural calculation and prototype manufacturing.", img:"lokomotif_5.jpg", icon:"ti-3d-cube-sphere", iconColor:"#378ADD", iconBg:"rgba(24,95,165,0.1)", tags:["Mechanical","Kinematics","Prototype"], link:"ozel-makine-tasarimi.html" },
    { title:"Motor Control System", desc:"Servo motor driver board and control software.", img:"lokomotif_6.jpg", icon:"ti-engine", iconColor:"#5DCAA5", iconBg:"rgba(29,158,117,0.1)", tags:["Electronics","Control","Software"], link:"motor-kontrol-sistemi.html" },
    { title:"Foldable Laptop Stand", desc:"Ergonomic, portable aluminium laptop stand — mechanical design, kinematic analysis and prototype manufacturing.", img:"laptop-standi-1.png", icon:"ti-device-laptop", iconColor:"#378ADD", iconBg:"rgba(24,95,165,0.1)", tags:["Mechanical Design","Prototype","Product Development"], link:"laptop-standi.html" },
    { title:"Pineapple Peeling Machine", desc:"Industrial pineapple peeling machine for the food industry — mechanical design, kinematic analysis and prototype manufacturing.", img:"ananas_render1.png", icon:"ti-tool", iconColor:"#97C459", iconBg:"rgba(99,153,34,0.1)", tags:["Mechanical","Food Machine","Prototype"], link:"ananas-soyma-makinasi.html" },
    { title:"Wall Printer", desc:"CNC-controlled wall painting machine — X-Y-Z axis motion, aluminium profile structure and complete prototype manufacturing.", img:"duvar yazıcısı/DUVAR BOYAMA MONTAJI.png", icon:"ti-printer", iconColor:"#60a5fa", iconBg:"rgba(59,130,246,0.1)", tags:["CNC","Mechanical Design","Prototype"], link:"duvar-yazicisi.html" },
    { title:"Chickpea Sorting Machine", desc:"Industrial chickpea sorting machine for the food industry — mechanical design, vibration analysis and prototype manufacturing.", img:"nohut_ayıklama1.png", icon:"ti-grain", iconColor:"#EF9F27", iconBg:"rgba(186,117,23,0.1)", tags:["Mechanical","Food Machine","Vibration"], link:"nohut-ayiklama-makinasi.html" },
    { title:"Silk Stretching Machine", desc:"Silk stretching machine for mill sieve production — stretches silk mesh onto wooden frames using special adhesives for uniform tension.", img:"ipek_gerdirme1.png", icon:"ti-needle", iconColor:"#a78bfa", iconBg:"rgba(167,139,250,0.1)", tags:["Mechanical","Sieve Machine","Mill"], link:"ipek-gerdirme-makinasi.html" },
    { title:"Lighting Pole Design", desc:"Custom lighting pole design for municipalities and companies — unique form, structural analysis and brand-aligned solutions.", img:"aydınlatma-direk1.png", icon:"ti-bulb", iconColor:"#f59e0b", iconBg:"rgba(245,158,11,0.1)", tags:["Urban Design","Municipality","Corporate"], link:"aydinlatma-diregi.html" },
  ]
};

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
  /* Mağaza açılınca render et */
  if(id==='shop'){
    var catsEl=document.getElementById('shop-cats');
    if(catsEl) catsEl.innerHTML='';
    setTimeout(renderShop, 50);
  }
  /* URL hash güncelle */
  if(history.replaceState) history.replaceState(null,'','#'+id);
  /* Dil uygula */
  if(typeof currentLang !== 'undefined') setTimeout(function(){ applyLang(currentLang); }, 50);
}

function renderProjects(){
  var grid=document.getElementById('proj-grid'); if(!grid) return;
  grid.innerHTML='';
  (projects[currentLang]||projects.tr).forEach(function(p){
    var thumb=p.img?'<img src="'+p.img+'" alt="'+p.title+'">':'<i class="ti '+p.icon+'" style="font-size:40px;color:'+p.iconColor+'" aria-hidden="true"></i>';
    var tags=p.tags.map(function(t){return '<span class="ptag">'+t+'</span>';}).join('');
    var cardStart=p.link?'<a class="proj-card" href="'+p.link+'" style="text-decoration:none;color:inherit;display:block;">':'<div class="proj-card">';
    var cardEnd=p.link?'</a>':'</div>';
    grid.innerHTML+=cardStart+'<div class="proj-thumb" style="background:'+(p.img?'#0d1117':p.iconBg)+'">'+thumb+'</div><div class="proj-body"><h3>'+p.title+'</h3><p>'+p.desc+'</p><div class="proj-tags">'+tags+'</div></div>'+cardEnd;
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

/* DOMContentLoaded — sayfa yüklenince çalışır */

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

/* openTool ve closeTool aşağıda tam versiyon ile tanımlanmıştır */

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

/* =============================================
   ATAlet MOMENTİ
   ============================================= */
function calcInertia() {
  var s = document.getElementById('in-shape').value;
  var b = parseFloat(document.getElementById('in-b').value)||0;
  var h = parseFloat(document.getElementById('in-h').value)||0;
  var D = parseFloat(document.getElementById('in-d').value)||0;
  var di= parseFloat(document.getElementById('in-di').value)||0;
  var t = parseFloat(document.getElementById('in-t').value)||0;
  var tf= parseFloat(document.getElementById('in-tf').value)||0;

  // Girişleri göster/gizle
  ['in-f-b','in-f-h','in-f-d','in-f-di','in-f-t','in-f-tf'].forEach(function(id){ document.getElementById(id).style.display='none'; });
  if(s==='rect')   { show2('in-f-b','in-f-h'); }
  if(s==='circle') { document.getElementById('in-l-b').textContent='Çap D (mm)'; show2('in-f-b',null); }
  if(s==='tube')   { show2('in-f-d','in-f-di'); }
  if(s==='box')    { show2('in-f-b','in-f-h'); document.getElementById('in-f-t').style.display=''; }
  if(s==='ibeam')  { show2('in-f-b','in-f-h'); document.getElementById('in-f-t').style.display=''; document.getElementById('in-f-tf').style.display=''; }

  var Ix=0,Iy=0,A=0;
  if(s==='rect')   { Ix=b*h*h*h/12; Iy=h*b*b*b/12; A=b*h; }
  if(s==='circle') { var r=b/2; Ix=Iy=Math.PI*r*r*r*r/4; A=Math.PI*r*r; }
  if(s==='tube')   { var ro=D/2,ri=di/2; Ix=Iy=Math.PI*(ro*ro*ro*ro-ri*ri*ri*ri)/4; A=Math.PI*(ro*ro-ri*ri); }
  if(s==='box')    { var bi=b-2*t,hi=h-2*t; Ix=(b*h*h*h-bi*hi*hi*hi)/12; Iy=(h*b*b*b-hi*bi*bi*bi)/12; A=b*h-bi*hi; }
  if(s==='ibeam')  { var tw=t,bw=b,hw=h-2*tf; Ix=(bw*h*h*h-(bw-tw)*hw*hw*hw)/12; Iy=(2*tf*bw*bw*bw+(h-2*tf)*tw*tw*tw)/12; A=2*bw*tf+hw*tw; }

  var Wx = h>0 ? Ix/(h/2) : (b>0 ? Ix/(b/2) : 0);
  var Wy = b>0 ? Iy/(b/2) : 0;
  var rx = A>0 ? Math.sqrt(Ix/A) : 0;

  function fi(n){ if(n>=1e8) return (n/1e8).toFixed(2)+' ×10⁸ mm⁴'; if(n>=1e6) return (n/1e6).toFixed(2)+' ×10⁶ mm⁴'; return Math.round(n)+' mm⁴'; }
  function fw(n){ if(n>=1e6) return (n/1e6).toFixed(2)+' ×10⁶ mm³'; if(n>=1e3) return (n/1e3).toFixed(2)+' ×10³ mm³'; return Math.round(n)+' mm³'; }
  setText('in-r-ix', fi(Ix)); setText('in-r-iy', fi(Iy));
  setText('in-r-wx', fw(Wx)); setText('in-r-wy', fw(Wy));
  setText('in-r-a',  Math.round(A)+' mm²');
  setText('in-r-rx', rx.toFixed(2)+' mm');
}
function show2(a,b){ if(a) document.getElementById(a).style.display=''; if(b) document.getElementById(b).style.display=''; }

/* =============================================
   KİRİŞ ANALİZİ
   ============================================= */
function calcBeam() {
  var type= document.getElementById('bm-type').value;
  var L   = parseFloat(document.getElementById('bm-L').value)||0;
  var F   = parseFloat(document.getElementById('bm-F').value)||0;
  var w   = parseFloat(document.getElementById('bm-w').value)||0;
  var I   = parseFloat(document.getElementById('bm-I').value)||0;
  var c   = parseFloat(document.getElementById('bm-c').value)||0;
  var E   = parseFloat(document.getElementById('bm-E').value)||210000;

  var isUniform = type.includes('uniform');
  document.getElementById('bm-f-F').style.display = isUniform ? 'none' : '';
  document.getElementById('bm-f-w').style.display = isUniform ? '' : 'none';

  var M=0, V=0, delta=0;
  if(type==='ss_center')  { M=F*L/4;          V=F/2;    delta=F*L*L*L/(48*E*I); }
  if(type==='ss_uniform') { M=w*L*L/8;         V=w*L/2;  delta=5*w*L*L*L*L/(384*E*I); }
  if(type==='cant_end')   { M=F*L;             V=F;      delta=F*L*L*L/(3*E*I); }
  if(type==='cant_uniform'){ M=w*L*L/2;        V=w*L;    delta=w*L*L*L*L/(8*E*I); }

  var sigma = I>0 ? M*c/I : 0;
  var ratio = delta>0 ? L/delta : 0;
  var limit = L/300;

  function fn(n,u){ return isNaN(n)||!isFinite(n)?'—':n.toFixed(2)+' '+u; }
  setText('bm-r-M',     fn(M,'N·mm'));
  setText('bm-r-s',     fn(sigma,'MPa'));
  setText('bm-r-d',     fn(delta,'mm'));
  setText('bm-r-V',     fn(V,'N'));
  setText('bm-r-ratio', isFinite(ratio)&&ratio>0 ? 'L/'+Math.round(ratio) : '—');
  setText('bm-r-limit', limit.toFixed(2)+' mm');
}

/* =============================================
   ISIL GENLEŞme
   ============================================= */
function calcThermal() {
  var L0  = parseFloat(document.getElementById('th-L').value)||0;
  var T1  = parseFloat(document.getElementById('th-T1').value)||0;
  var T2  = parseFloat(document.getElementById('th-T2').value)||0;
  var mat = document.getElementById('th-mat').value;
  var E   = parseFloat(document.getElementById('th-E').value)||210000;

  document.getElementById('th-f-custom').style.display = mat==='custom' ? '' : 'none';
  var alpha;
  if(mat==='custom') alpha = parseFloat(document.getElementById('th-custom').value)||12;
  else alpha = parseFloat(mat)||12;

  var dT   = T2 - T1;
  var eps  = alpha * 1e-6 * dT;
  var dL   = eps * L0;
  var Lf   = L0 + dL;
  var sigma= eps * E;
  var Fth  = sigma * 1; // A=1mm² varsayımı

  function fn(n,u,dec){ return n.toFixed(dec||3)+' '+u; }
  setText('th-r-dT',  dT.toFixed(1)+' °C');
  setText('th-r-dL',  fn(dL,'mm'));
  setText('th-r-Lf',  fn(Lf,'mm'));
  setText('th-r-eps', (eps*1e6).toFixed(3)+' ×10⁻⁶');
  setText('th-r-sig', fn(sigma,'MPa'));
  setText('th-r-F',   fn(Fth,'N'));
}

/* =============================================
   VİDA & CIVATA
   ============================================= */
function calcBolt() {
  var std = document.getElementById('bt-std').value;
  var isCustom = std==='custom';
  document.getElementById('bt-f-d').style.display  = isCustom ? '' : 'none';
  document.getElementById('bt-f-p').style.display  = isCustom ? '' : 'none';
  document.getElementById('bt-f-as').style.display = isCustom ? '' : 'none';

  var d, p, As;
  if(!isCustom) {
    var parts = std.split('|');
    d=parseFloat(parts[0].replace('M',''));
    p=parseFloat(parts[1]);
    As=parseFloat(parts[2]);
    document.getElementById('bt-d').value = d;
    document.getElementById('bt-p').value = p;
    document.getElementById('bt-as').value= As;
  } else {
    d  = parseFloat(document.getElementById('bt-d').value)||10;
    p  = parseFloat(document.getElementById('bt-p').value)||1.5;
    As = parseFloat(document.getElementById('bt-as').value)||58;
  }

  var Rp    = parseFloat(document.getElementById('bt-grade').value)||640;
  var mu    = parseFloat(document.getElementById('bt-mu').value)||0.15;
  var eta   = (parseFloat(document.getElementById('bt-load').value)||70)/100;

  var d2    = d - 0.6495*p;   // Orta çap
  var F0    = eta * Rp * As;   // Öngerme kuvveti
  var Fmax  = Rp * As;         // Maks. öngerme
  var MA    = F0 * (0.16*p + 0.58*d2*mu + 0*d*mu/2); // Sıkma momenti (basitleştirilmiş)
  var sigma_t = Rp * 0.9;      // İzin. çekme gerilmesi
  var util    = (F0 / Fmax)*100;

  function fn(n,u){ return n.toFixed(1)+' '+u; }
  setText('bt-r-MA',    fn(MA,'N·mm') + ' (' + (MA/1000).toFixed(2) + ' N·m)');
  setText('bt-r-F0',    fn(F0,'N') + ' (' + (F0/1000).toFixed(2) + ' kN)');
  setText('bt-r-st',    fn(sigma_t,'MPa'));
  setText('bt-r-Fmax',  fn(Fmax,'N') + ' (' + (Fmax/1000).toFixed(2) + ' kN)');
  setText('bt-r-util',  util.toFixed(1)+'%');
  var ok = util <= 100;
  setText('bt-r-status', ok ? '✅ Güvenli' : '❌ Aşıldı!');
}

/* openTool güncelle — yeni araçları ekle */
function openTool(tool) {
  var allPanels = ['weight','converter','torque','inertia','beam','thermal','bolt'];
  document.getElementById('tool-selector').style.display = 'none';
  allPanels.forEach(function(t){
    var el=document.getElementById('panel-'+t); if(el) el.style.display='none';
  });
  var el = document.getElementById('panel-'+tool);
  if(el) el.style.display='';
  if(tool==='weight')   { setTimeout(doCalc,50); }
  if(tool==='converter'){ convAll(); }
  if(tool==='torque')   { calcTorque(); }
  if(tool==='inertia')  { calcInertia(); }
  if(tool==='beam')     { calcBeam(); }
  if(tool==='thermal')  { calcThermal(); }
  if(tool==='bolt')     { calcBolt(); }
  document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active');});
  var nb=document.getElementById('nb-calc'); if(nb) nb.classList.add('active');
}

function closeTool() {
  var allPanels = ['weight','converter','torque','inertia','beam','thermal','bolt'];
  allPanels.forEach(function(t){
    var el=document.getElementById('panel-'+t); if(el) el.style.display='none';
  });
  var ts=document.getElementById('tool-selector'); if(ts) ts.style.display='';
  window.scrollTo(0,0);
}

/* =============================================
   DİL SİSTEMİ — TR / EN
   ============================================= */
var translations = {
  tr: {
    /* Nav */
    nav_home:    "Ana Sayfa",
    nav_eng:     "Mühendislik Hizmetleri",
    nav_svc:     "Hizmetler",
    nav_calc:    "🔧 Hesaplayıcılar ▾",
    nav_tmpl:    "📄 Şablonlar",
    nav_proj:    "Projeler",
    nav_about:   "Hakkımızda",
    nav_contact: "İletişim",

    /* Hero */
    hero_title:  "Rayları biz döşeyelim,<br>rotayı <span>birlikte</span> çizelim",
    hero_desc:   "Fikrinizi bir vagon olmaktan çıkarıp geleceğin lokomotifine dönüştürelim. Mekanik tasarım, termal ve akış analizleri, elektronik kart tasarımı ve yazılım geliştirme — makine üretmek için ihtiyacınız olan her şey tek çatı altında.",
    hero_btn1:   "Teklif Al",
    hero_btn2:   "Projelerimizi Gör",

    /* İstatistikler */
    stat1: "Tamamlanan Proje",
    stat2: "Uzmanlık Alanı",
    stat3: "Yıl Deneyim",
    stat4: "Müşteri Memnuniyeti",

    /* Genel bölüm etiketleri */
    sec_services_label: "Ne Yapıyoruz",
    sec_services_title: "Hizmetlerimiz",
    sec_projects_label: "Çalışmalarımızdan",
    sec_projects_title: "Projelerden Kareler",
    sec_about_label:    "Biz Kimiz",
    sec_about_title:    "Hakkımızda",
    sec_contact_label:  "Bize Ulaşın",
    sec_contact_title:  "İletişim",
    sec_tmpl_label:     "İndirilebilir Kaynaklar",
    sec_tmpl_title:     "Hazır Excel Şablonları",
    sec_tmpl_desc:      "Mühendislik süreçlerinizi hızlandırmak için hazırlanmış, kullanıma hazır Excel şablonları. Ücretsiz indirin, ihtiyacınıza göre düzenleyin.",
    sec_calc_label:     "Mühendislik Araçları",
    sec_calc_title:     "Hesaplayıcılar",
    sec_calc_desc:      "Kullanmak istediğiniz hesaplayıcıyı seçin.",

    /* İletişim formu */
    form_name:    "Ad Soyad",
    form_email:   "E-posta",
    form_service: "Hizmet",
    form_msg:     "Mesajınız",
    form_submit:  "Gönder",
    form_success: "✅ Mesajınız iletildi! En kısa sürede dönüş yapacağız.",
    form_error:   "❌ Bir hata oluştu. Lütfen tekrar deneyin.",
    form_ph_name: "Adınız",
    form_ph_svc:  "Hangi hizmetle ilgileniyorsunuz?",
    form_ph_msg:  "Projenizi kısaca anlatın...",

    /* Hizmetler */
    svc_mech:     "Mekanik Tasarım & CAD/CAM",
    svc_thermal:  "Termal & Akış Analizleri (CFD)",
    svc_pcb:      "Elektronik & PCB Tasarımı",
    svc_sw:       "Gömülü Yazılım & PLC",
    svc_rnd:      "Ar-Ge & Prototip Üretimi",

    /* Şablonlar */
    tmpl_dl:      "⬇️ İndir",
    /* Hizmetler kartları */
    svc2_title: "Termal Analiz", svc2_desc: "Isı transferi simülasyonu ile sistemin termal performansını optimize edin.",
    svc3_title: "Akış Analizi", svc3_desc: "CFD simülasyonları ile sıvı ve gaz akışlarını modelleyin.",
    svc4_title: "Elektronik Tasarım", svc4_desc: "Şematik tasarımdan PCB üretimine kadar komple elektronik geliştirme.",
    svc5_title: "Yazılım Geliştirme", svc5_desc: "Makinenizin beynini yazan gömülü sistem ve kontrol yazılımları.",
    svc6_title: "Danışmanlık", svc6_desc: "Projenizin her aşamasında teknik rehberlik ve süreç yönetimi.",
    /* Skill barları */
    skill1:"Mekanik Tasarım", skill2:"Termal Analiz", skill3:"Akış / CFD",
    skill4:"Elektronik / PCB", skill5:"Gömülü Yazılım",
    tmpl_custom_title: "Özel şablon ihtiyacınız var mı?",
    tmpl_custom_desc:  "Sektörünüze veya projenize özel Excel şablonu hazırlayabiliriz.",
    tmpl_custom_btn:   "Talep Gönder",

    /* Hesaplayıcılar araç kartları */
    tool_weight_title: "Hacim & Ağırlık",
    tool_weight_desc:  "Geometri ve malzeme seçerek hacim, ağırlık ve yüzey alanı hesaplayın.",
    tool_conv_title:   "Birim Dönüştürücü",
    tool_conv_desc:    "Uzunluk, kütle, hacim, basınç, sıcaklık ve daha fazlasını dönüştürün.",
    tool_torque_title: "Motor Torku",
    tool_torque_desc:  "Güç, devir ve tork arasındaki ilişkiyi hesaplayın.",
    tool_inertia_title:"Atalet Momenti",
    tool_inertia_desc: "Kesit atalet momenti ve mukavemet modülü hesabı.",
    tool_beam_title:   "Kiriş Analizi",
    tool_beam_desc:    "Basit ve konsol kirişlerde gerilme ve sehim hesabı.",
    tool_thermal_title:"Isıl Genleşme",
    tool_thermal_desc: "Malzemenin sıcaklık değişimine bağlı boyutsal değişimi.",
    tool_bolt_title:   "Vida & Cıvata",
    tool_bolt_desc:    "Sıkma momenti, öngerme kuvveti ve güvenlik katsayısı.",
    tool_back:         "← Araçlara Dön",

    /* Footer */
    footer_rights: "© 2025 Mechanistrail. Tüm hakları saklıdır.",
    nav_shop: "🛒 Mağaza",
    shop_label: "Satılık Parçalar",
    shop_title: "Elektronik & Mekanik Parça Kataloğu",
    shop_desc: "Stoktan veya hızlı tedarik ile. WhatsApp üzerinden sipariş verebilirsiniz.",
    shop_noresult: "Arama kriterinize uygun ürün bulunamadı.",
    shop_custom_title: "Aradığınız parçayı bulamadınız mı?",
    shop_custom_desc: "Marka ve model numarasını gönderin, hızlı tedarik edelim.",
    shop_custom_btn: "WhatsApp'tan Sor",

    /* Galeri & Slider */
    gallery_label: "Çalışmalarımızdan",
    gallery_title: "Projelerden kareler",
    slider_label:  "Hizmetlerimiz",
    slider_title:  "Eksiksiz mühendislik çözümleri",

    /* Mühendislik Hizmetleri */
    eng_label: "Mühendislik Hizmetleri",
    eng_title: "Fikrinizden ürüne giden yol",
    eng_desc:  "Bir fikri pazara hazır ürüne dönüştürmek için ihtiyacınız olan tüm mühendislik süreçlerini sunuyoruz.",
    eng_card1_title: "Konsept & Fizibilite",
    eng_card1_desc:  "Fikrinizin teknik ve ekonomik açıdan değerlendirilmesi.",
    eng_card2_title: "Ürün Geliştirme",
    eng_card2_desc:  "Konseptten ilk prototipin üretimine kadar tüm süreç.",
    eng_card3_title: "Test & Doğrulama",
    eng_card3_desc:  "Kapsamlı test süreçleri ile güvenli ve verimli çalışma.",
    eng_card4_title: "Seri Üretime Geçiş",
    eng_card4_desc:  "Prototipten seri üretime sorunsuz geçiş yönetimi.",
    eng_card5_title: "Sürekli İyileştirme",
    eng_card5_desc:  "Piyasaya çıkış sonrası teknik destek ve geliştirme.",
    eng_card6_title: "Ar-Ge & İnovasyon",
    eng_card6_desc:  "TÜBİTAK ve KOSGEB destekli projeler için danışmanlık.",
    banner_title: "Rayları biz döşeyelim, rotayı birlikte çizelim",
    banner_desc:  "Fikrinizi bir vagon olmaktan çıkarıp geleceğin lokomotifine dönüştürelim.",
    banner_btn:   "Hemen Başlayalım",

    /* Hizmetler */
    svc_label: "Hizmetler",
    svc_title: "Eksiksiz mühendislik çözümleri",
    svc_desc:  "Bir makineyi hayata geçirmek için gereken tüm mühendislik süreçlerini tek çatı altında sunuyoruz.",
    svc_mech_title: "Mekanik Tasarım",
    svc_mech_desc:  "Ürününüzün 3D modelinden teknik çizimlerine kadar tüm süreç.",

    /* Projeler */
    proj_label: "Projeler",
    proj_title: "Tamamlanan çalışmalardan örnekler",
    proj_desc:  "Her proje, müşterimizin özgün ihtiyacına göre tasarlanmış ve sıfırdan geliştirilmiştir.",

    /* Hakkımızda */
    about_label: "Hakkımızda",
    about_title: "Mühendisliği bütünsel düşünüyoruz",
    about_desc:  "Mechanistrail olarak bir makineyi hayata geçirmenin her boyutunda uzmanız.",
    about_p1: "10 yılı aşkın deneyimimizle endüstriyel makine üretimi, Ar-Ge projeleri ve ürün geliştirme süreçlerinde yüzlerce müşteriye danışmanlık hizmeti verdik.",
    about_p2: "Tasarımdan üretime giden yolda karşılaşılan tüm mühendislik zorluklarını tek elden çözüme kavuşturuyoruz.",
    about_p3: "Antalya merkezli olarak Türkiye genelinde ve uluslararası projelerde hizmet veriyoruz.",
    about_val1_title: "Bütünsel Yaklaşım",
    about_val1_desc:  "Mekanikten yazılıma tüm süreçleri tek elden yönetiyoruz.",
    about_val2_title: "Simülasyon Odaklı",
    about_val2_desc:  "Üretim öncesi her sistemi dijital ortamda test ediyoruz.",
    about_val3_title: "Güvenilirlik",
    about_val3_desc:  "Her projede kalite ve zamanında teslimat önceliğimizdir.",
    about_skills: "Uzmanlık Alanları",

    /* İletişim */
    contact_label:     "İletişim",
    contact_title:     "Projenizi konuşalım",
    contact_desc:      "Bir fikriniz mi var? Mevcut projenizde mi takıldınız? Bize yazın.",
    contact_email_lbl: "E-posta",
    contact_web_lbl:   "Website",
    contact_li_lbl:    "LinkedIn",
    contact_loc_lbl:   "Konum",
    contact_loc:       "Antalya, Türkiye",
    contact_form_title:"Mesaj Gönder",

    /* Hero hizmetler & badge & tags */
    hero_svc_title: "SUNDUĞUMUZ HİZMETLER",
    hero_badge: "Komple Makine Mühendisliği Danışmanlığı",
    tag_mech:    "Mekanik Tasarım",
    tag_thermal: "Termal Analiz",
    tag_cfd:     "CFD / Akış",
    tag_pcb:     "PCB Tasarımı",
    tag_sw:      "Gömülü Yazılım",

    /* Şablon indirme butonu */
    tmpl_dl: "⬇️ İndir",
  },

  en: {
    /* Nav */
    nav_home:    "Home",
    nav_eng:     "Engineering Services",
    nav_svc:     "Services",
    nav_calc:    "🔧 Calculators ▾",
    nav_tmpl:    "📄 Templates",
    nav_proj:    "Projects",
    nav_about:   "About Us",
    nav_contact: "Contact",

    /* Hero */
    hero_title:  "We lay the tracks,<br>let's chart the route <span>together</span>",
    hero_desc:   "We transform your idea from a wagon into the locomotive of the future. Mechanical design, thermal & flow analysis, electronics design, and software development — everything you need to build a machine under one roof.",
    hero_btn1:   "Get a Quote",
    hero_btn2:   "View Our Projects",

    /* Stats */
    stat1: "Completed Projects",
    stat2: "Areas of Expertise",
    stat3: "Years Experience",
    stat4: "Customer Satisfaction",

    /* Section labels */
    sec_services_label: "What We Do",
    sec_services_title: "Our Services",
    sec_projects_label: "Our Work",
    sec_projects_title: "Project Gallery",
    sec_about_label:    "Who We Are",
    sec_about_title:    "About Us",
    sec_contact_label:  "Get in Touch",
    sec_contact_title:  "Contact",
    sec_tmpl_label:     "Downloadable Resources",
    sec_tmpl_title:     "Ready-Made Excel Templates",
    sec_tmpl_desc:      "Ready-to-use Excel templates designed to accelerate your engineering processes. Download for free and customize as needed.",
    sec_calc_label:     "Engineering Tools",
    sec_calc_title:     "Calculators",
    sec_calc_desc:      "Select the calculator you want to use.",

    /* Contact form */
    form_name:    "Full Name",
    form_email:   "Email",
    form_service: "Service",
    form_msg:     "Your Message",
    form_submit:  "Send",
    form_success: "✅ Your message has been sent! We'll get back to you shortly.",
    form_error:   "❌ An error occurred. Please try again.",
    form_ph_name: "Your name",
    form_ph_svc:  "Which service are you interested in?",
    form_ph_msg:  "Briefly describe your project...",

    /* Services */
    svc_mech:     "Mechanical Design & CAD/CAM",
    svc_thermal:  "Thermal & Flow Analysis (CFD)",
    svc_pcb:      "Electronics & PCB Design",
    svc_sw:       "Embedded Software & PLC",
    svc_rnd:      "R&D & Prototype Manufacturing",

    /* Templates */
    tmpl_dl:      "⬇️ Download",
    /* Services cards */
    svc2_title: "Thermal Analysis", svc2_desc: "Optimize your system's thermal performance with heat transfer simulation.",
    svc3_title: "Flow Analysis", svc3_desc: "Model liquid and gas flows with CFD simulations.",
    svc4_title: "Electronics Design", svc4_desc: "Complete electronics development from schematic design to PCB manufacturing.",
    svc5_title: "Software Development", svc5_desc: "Embedded system and control software that runs your machine.",
    svc6_title: "Consultancy", svc6_desc: "Technical guidance and process management at every stage of your project.",
    /* Skill bars */
    skill1:"Mechanical Design", skill2:"Thermal Analysis", skill3:"Flow / CFD",
    skill4:"Electronics / PCB", skill5:"Embedded Software",
    tmpl_custom_title: "Need a custom template?",
    tmpl_custom_desc:  "We can prepare custom Excel templates for your industry or project.",
    tmpl_custom_btn:   "Send Request",

    /* Calculator tool cards */
    tool_weight_title: "Volume & Weight",
    tool_weight_desc:  "Calculate volume, weight and surface area by selecting geometry and material.",
    tool_conv_title:   "Unit Converter",
    tool_conv_desc:    "Convert length, mass, volume, pressure, temperature and more.",
    tool_torque_title: "Motor Torque",
    tool_torque_desc:  "Calculate the relationship between power, speed and torque.",
    tool_inertia_title:"Moment of Inertia",
    tool_inertia_desc: "Calculate cross-section moment of inertia and section modulus.",
    tool_beam_title:   "Beam Analysis",
    tool_beam_desc:    "Stress and deflection calculations for simple and cantilever beams.",
    tool_thermal_title:"Thermal Expansion",
    tool_thermal_desc: "Dimensional change of a material due to temperature change.",
    tool_bolt_title:   "Bolt & Screw",
    tool_bolt_desc:    "Tightening torque, preload force and safety factor.",
    tool_back:         "← Back to Tools",

    /* Footer */
    footer_rights: "© 2025 Mechanistrail. All rights reserved.",
    nav_shop: "🛒 Shop",
    shop_label: "Parts for Sale",
    shop_title: "Electronics & Mechanical Parts Catalogue",
    shop_desc: "From stock or fast sourcing. Order and negotiate via WhatsApp.",
    shop_noresult: "No products found matching your search.",
    shop_custom_title: "Can't find what you need?",
    shop_custom_desc: "Send us the brand and model number, we'll source it fast.",
    shop_custom_btn: "Ask on WhatsApp",

    /* Gallery & Slider */
    gallery_label: "From Our Work",
    gallery_title: "Project Snapshots",
    slider_label:  "Our Services",
    slider_title:  "Complete engineering solutions",

    /* Engineering Services */
    eng_label: "Engineering Services",
    eng_title: "From your idea to the product",
    eng_desc:  "We provide all the engineering processes you need to turn an idea into a market-ready product.",
    eng_card1_title: "Concept & Feasibility",
    eng_card1_desc:  "Technical and economic evaluation of your idea.",
    eng_card2_title: "Product Development",
    eng_card2_desc:  "The entire process from concept to first prototype.",
    eng_card3_title: "Test & Validation",
    eng_card3_desc:  "Safe and efficient operation through comprehensive testing.",
    eng_card4_title: "Transition to Mass Production",
    eng_card4_desc:  "Smooth transition management from prototype to serial production.",
    eng_card5_title: "Continuous Improvement",
    eng_card5_desc:  "Technical support and development after market launch.",
    eng_card6_title: "R&D & Innovation",
    eng_card6_desc:  "Consultancy for TÜBİTAK and KOSGEB supported projects.",
    banner_title: "We lay the tracks, let's chart the route together",
    banner_desc:  "Let us transform your idea from a wagon into the locomotive of the future.",
    banner_btn:   "Let's Get Started",

    /* Services */
    svc_label: "Services",
    svc_title: "Complete engineering solutions",
    svc_desc:  "We provide all the engineering processes needed to bring a machine to life under one roof.",
    svc_mech_title: "Mechanical Design",
    svc_mech_desc:  "The entire process from 3D modeling to technical drawings of your product.",

    /* Projects */
    proj_label: "Projects",
    proj_title: "Examples from completed work",
    proj_desc:  "Each project is designed and developed from scratch according to the unique needs of our clients.",

    /* About */
    about_label: "About Us",
    about_title: "We think engineering holistically",
    about_desc:  "At Mechanistrail, we are experts in every aspect of bringing a machine to life.",
    about_p1: "With over 10 years of experience, we have provided consultancy to hundreds of clients in industrial machine manufacturing, R&D projects and product development.",
    about_p2: "We solve all engineering challenges encountered on the road from design to production with a single point of contact.",
    about_p3: "Based in Antalya, we serve projects across Turkey and internationally.",
    about_val1_title: "Holistic Approach",
    about_val1_desc:  "We manage all processes from mechanics to software end-to-end.",
    about_val2_title: "Simulation-Driven",
    about_val2_desc:  "We test every system digitally before production.",
    about_val3_title: "Reliability",
    about_val3_desc:  "Quality and on-time delivery are our priorities in every project.",
    about_skills: "Areas of Expertise",

    /* Contact */
    contact_label:     "Contact",
    contact_title:     "Let's talk about your project",
    contact_desc:      "Have an idea? Stuck on an existing project? Write to us.",
    contact_email_lbl: "Email",
    contact_web_lbl:   "Website",
    contact_li_lbl:    "LinkedIn",
    contact_loc_lbl:   "Location",
    contact_loc:       "Antalya, Turkey",
    contact_form_title:"Send a Message",

    /* Hero services & badge & tags */
    hero_svc_title: "OUR SERVICES",
    hero_badge: "Complete Mechanical Engineering Consultancy",
    tag_mech:    "Mechanical Design",
    tag_thermal: "Thermal Analysis",
    tag_cfd:     "CFD / Flow",
    tag_pcb:     "PCB Design",
    tag_sw:      "Embedded Software",

    /* Template download button */
    tmpl_dl: "⬇️ Download",
  }
};

var currentLang = localStorage.getItem('lang') || 'tr';

function applyLang(lang) {
  var t = translations[lang];
  if (!t) return;

  /* Tüm data-i18n elementleri güncelle */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* Placeholder'lar */
  var phMap = {
    'f-name':    'form_ph_name',
    'f-service': 'form_ph_svc',
    'f-message': 'form_ph_msg',
  };
  Object.keys(phMap).forEach(function(id) {
    var el = document.getElementById(id);
    if (el && t[phMap[id]]) el.placeholder = t[phMap[id]];
  });

  /* Sayfa title */
  document.title = lang==='tr'
    ? 'Mechanistrail | Mekanik Tasarım, Elektronik Kart Tasarımı & Mühendislik Danışmanlığı'
    : 'Mechanistrail | Mechanical Design, PCB Design & Engineering Consultancy';

  document.documentElement.lang = lang==='tr' ? 'tr' : 'en';
  /* Projeleri dile göre yeniden render et */
  var grid = document.getElementById('proj-grid');
  if (grid) { grid.innerHTML = ''; renderProjects(); }
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  /* Buton aktif durumu */
  document.getElementById('lang-tr').classList.toggle('active', lang==='tr');
  document.getElementById('lang-en').classList.toggle('active', lang==='en');

  applyLang(lang);
}

document.addEventListener('DOMContentLoaded', function() {
  renderProjects(); initSlider(); initGallery();
  /* URL hash varsa o sayfayı aç, yoksa ana sayfa */
  var hash = window.location.hash.replace('#','');
  var validPages = ['home','engineering','services','calc','templates','shop','projects','about','contact'];
  if(hash && validPages.indexOf(hash) !== -1) {
    showPage(hash);
  } else {
    showPage('home');
  }
  /* Dil uygula */
  setLang(currentLang);
});

/* =============================================
   MAĞAZA
   ============================================= */
var shopCat = 'all';

function renderShop() {
  var lang = (typeof currentLang !== 'undefined') ? currentLang : 'tr';
  var q = (document.getElementById('shop-search')||{}).value || '';
  q = q.toLowerCase().trim();

  /* Güncel ürün listesini al — admin localStorage > products.js */
  var allProds = [];
  try {
    var stored = localStorage.getItem('mech_prod_v3');
    allProds = stored ? JSON.parse(stored) : (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []);
  } catch(e) {
    allProds = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
  }

  /* Güncel kategorileri al */
  var allCats = [];
  try {
    var storedCats = localStorage.getItem('mech_cat_v3');
    allCats = storedCats ? JSON.parse(storedCats) : [];
  } catch(e) { allCats = []; }

  /* Kategori butonlarını oluştur */
  var catsEl = document.getElementById('shop-cats');
  if (catsEl) {
    catsEl.innerHTML = '';
    /* Tümü butonu */
    var allLabel = lang === 'en' ? 'All' : 'Tümü';
    var btnAll = document.createElement('button');
    btnAll.className = 'shop-cat-btn' + (shopCat === 'all' ? ' active' : '');
    btnAll.textContent = allLabel;
    btnAll.onclick = function() { shopCat = 'all'; renderShop(); };
    catsEl.appendChild(btnAll);

    /* Kategori butonları */
    var usedCats = [];
    allProds.forEach(function(p) {
      if (p.category && usedCats.indexOf(p.category) === -1) usedCats.push(p.category);
    });
    usedCats.forEach(function(catId) {
      var catObj = allCats.find(function(c){ return c.id === catId || c.name === catId; });
      var icon = catObj ? catObj.icon : '📦';
      var label = catObj ? catObj.name : catId;
      var btn = document.createElement('button');
      btn.className = 'shop-cat-btn' + (shopCat === catId ? ' active' : '');
      btn.textContent = icon + ' ' + label;
      btn.onclick = (function(id){ return function() { shopCat = id; renderShop(); }; })(catId);
      catsEl.appendChild(btn);
    });
  }

  var grid = document.getElementById('shop-grid');
  var empty = document.getElementById('shop-empty');
  if (!grid) return;
  grid.innerHTML = '';

  var filtered = allProds.filter(function(p) {
    var catOk = shopCat === 'all' || p.category === shopCat;
    var searchOk = !q || [p.name,p.name_en,p.brand,p.model,(p.tags||[]).join(' ')].join(' ').toLowerCase().indexOf(q) !== -1;
    return catOk && searchOk;
  });

  if (filtered.length === 0) {
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';

  var stockL = { instock: lang==='en'?'✅ In Stock':'✅ Stokta', order: lang==='en'?'📦 On Order':'📦 Sipariş ile', sold: lang==='en'?'❌ Sold':'❌ Satıldı' };
  var condL  = { new: lang==='en'?'New':'Sıfır', used: lang==='en'?'Used':'İkinci El', refurb: lang==='en'?'Refurbished':'Revize' };
  var waMsg  = lang === 'en' ? 'Hello, I am interested in: ' : 'Merhaba, şu ürünü almak istiyorum: ';

  filtered.forEach(function(p) {
    var name  = (lang === 'en' && p.name_en) ? p.name_en : p.name;
    var desc  = (lang === 'en' && p.desc_en) ? p.desc_en : p.desc;
    var stock = stockL[p.stock] || p.stock;
    var cond  = condL[p.condition] || p.condition;
    var soldOut = p.stock === 'sold';
    var waLink  = 'https://wa.me/905444407618?text=' + encodeURIComponent(waMsg + name + ' (' + (p.model||p.id) + ')');
    var btnTxt  = lang === 'en' ? '💬 WhatsApp' : '💬 WhatsApp\'tan Al';
    var tagHtml = (p.tags||[]).map(function(t){ return '<span class="shop-tag">' + t + '</span>'; }).join('');
    var condColor = p.condition==='new' ? '#27AE60' : p.condition==='refurb' ? '#F39C12' : '#85B7EB';
    var imgHtml = (p.images && p.images[0])
      ? '<div class="shop-card-img"><img src="'+p.images[0]+'" alt="'+name+'"></div>'
      : '<div class="shop-card-img"><span style="font-size:32px">📦</span></div>';

    grid.innerHTML += '<div class="shop-card' + (soldOut?' shop-sold':'') + '" data-id="'+p.id+'" onclick="var t=event.target;if(t.tagName!==\'A\'&&t.tagName!==\'BUTTON\')openProdModal(\''+p.id+'\')">' +
      imgHtml +
      '<div class="shop-card-body">' +
        '<div class="shop-card-head">' +
          '<div style="min-width:0">' +
            '<p class="shop-card-id">' + p.id + '</p>' +
            '<h3 class="shop-card-name">' + name + '</h3>' +
            '<p class="shop-card-model">' + (p.brand||'') + (p.model?' — '+p.model:'') + '</p>' +
          '</div>' +
          '<span class="shop-cond" style="background:'+condColor+'22;color:'+condColor+';flex-shrink:0">' + cond + '</span>' +
        '</div>' +
        '<p class="shop-card-desc">' + (desc||'') + '</p>' +
        '<div class="shop-tags">' + tagHtml + '</div>' +
        '<div class="shop-card-foot">' +
          '<div>' +
            '<p class="shop-price">' + (p.price||0).toLocaleString('tr-TR') + ' ₺</p>' +
            '<p class="shop-stock">' + stock + '</p>' +
          '</div>' +
          (soldOut
            ? '<button class="shop-btn shop-btn-sold" disabled>'+(lang==='en'?'Sold':'Satıldı')+'</button>'
            : '<a class="shop-btn" href="'+waLink+'" target="_blank">'+btnTxt+'</a>') +
        '</div>' +
      '</div>' +
    '</div>';
  });
}

/* showPage shop render shop desteği yukarıdaki ana fonksiyona dahil edildi */

/* =============================================
   ÜRÜN DETAY MODALI
   ============================================= */
function openProdModal(id) {
  var allProds = [];
  try {
    var stored = localStorage.getItem('mech_prod_v3');
    allProds = stored ? JSON.parse(stored) : (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []);
  } catch(e) {
    allProds = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
  }

  var p = allProds.find(function(x){ return x.id === id; });
  if (!p) p = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).find(function(x){ return x.id === id; });
  if (!p) return;

  var lang = (typeof currentLang !== 'undefined') ? currentLang : 'tr';
  var name = lang === 'en' && p.name_en ? p.name_en : p.name;
  var desc = lang === 'en' && p.desc_en ? p.desc_en : p.desc;

  document.getElementById('pm-id').textContent = p.id;
  document.getElementById('pm-name').textContent = name;
  document.getElementById('pm-brand').textContent = (p.brand||'') + (p.model ? ' — ' + p.model : '');
  document.getElementById('pm-price').textContent = (p.price||0).toLocaleString('tr-TR');
  document.getElementById('pm-desc').textContent = desc;

  /* Kondisyon badge */
  var cL = {new:{tr:'Sıfır',en:'New',bg:'rgba(39,174,96,.2)',col:'#2ecc71'},
            used:{tr:'İkinci El',en:'Used',bg:'rgba(255,255,255,.08)',col:'rgba(255,255,255,.55)'},
            refurb:{tr:'Revize',en:'Refurbished',bg:'rgba(155,89,182,.2)',col:'#9b59b6'}};
  var cb = document.getElementById('pm-cond-badge');
  var cond = cL[p.condition] || cL.used;
  cb.textContent = lang === 'en' ? cond.en : cond.tr;
  cb.style.background = cond.bg; cb.style.color = cond.col;

  /* Stok badge */
  var sL = {instock:{tr:'✅ Stokta',en:'✅ In Stock',bg:'rgba(39,174,96,.15)',col:'#2ecc71'},
            order:{tr:'📦 Sipariş ile',en:'📦 On Order',bg:'rgba(230,126,34,.15)',col:'#f39c12'},
            sold:{tr:'❌ Satıldı',en:'❌ Sold',bg:'rgba(231,76,60,.15)',col:'#e74c3c'}};
  var sb = document.getElementById('pm-stock-badge');
  var stk = sL[p.stock] || sL.instock;
  sb.textContent = lang === 'en' ? stk.en : stk.tr;
  sb.style.background = stk.bg; sb.style.color = stk.col;

  /* Görseller */
  var imgs = p.images || [];
  var mainImg = document.getElementById('pm-main-img-el');
  var mainIcon = document.getElementById('pm-main-img-icon');
  if (imgs.length > 0) {
    mainImg.src = imgs[0]; mainImg.style.display = 'block'; mainIcon.style.display = 'none';
  } else {
    mainImg.style.display = 'none'; mainIcon.style.display = '';
  }
  var thumbs = document.getElementById('pm-thumbs');
  thumbs.innerHTML = '';
  imgs.forEach(function(url, i) {
    var t = document.createElement('img');
    t.src = url;
    t.style.cssText = 'width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid '+(i===0?'#378ADD':'transparent');
    t.onclick = function() {
      mainImg.src = url; mainImg.style.display = 'block'; mainIcon.style.display = 'none';
      document.querySelectorAll('#pm-thumbs img').forEach(function(x){x.style.borderColor='transparent';});
      t.style.borderColor = '#378ADD';
    };
    thumbs.appendChild(t);
  });

  /* Etiketler */
  var tagsEl = document.getElementById('pm-tags');
  tagsEl.innerHTML = (p.tags||[]).map(function(t){
    return '<span style="font-size:11px;padding:3px 10px;border-radius:10px;background:rgba(55,138,221,0.1);color:#85B7EB;border:0.5px solid rgba(55,138,221,0.2)">'+t+'</span>';
  }).join('');

  /* WhatsApp */
  var waMsg = lang === 'en' ? 'Hello, I am interested in: ' : 'Merhaba, şu ürünü almak istiyorum: ';
  document.getElementById('pm-wa-btn').href = 'https://wa.me/905444407618?text=' + encodeURIComponent(waMsg + name + ' (' + (p.model||p.id) + ')');
  document.getElementById('pm-wa-btn').textContent = lang === 'en' ? '💬 Order via WhatsApp' : '💬 WhatsApp\'tan Sipariş Ver';

  /* Datasheet */
  var dsBtn = document.getElementById('pm-ds-btn');
  if (p.datasheet) { dsBtn.href = p.datasheet; dsBtn.style.display = 'block'; }
  else { dsBtn.style.display = 'none'; }
  var doc2Btn = document.getElementById('pm-doc2-btn');
  if (p.doc2) { doc2Btn.href = p.doc2; doc2Btn.style.display = 'block'; }
  else { doc2Btn.style.display = 'none'; }

  /* Teknik özellikler */
  var specs = p.specs || [];
  var specsSec = document.getElementById('pm-specs-section');
  if (specs.length > 0) {
    specsSec.style.display = '';
    document.getElementById('pm-specs').innerHTML = specs.map(function(s){
      return '<div style="display:flex;justify-content:space-between;padding:8px 12px;background:rgba(255,255,255,0.03);border-radius:8px;border:0.5px solid rgba(55,138,221,0.1)">' +
        '<span style="font-size:12px;color:rgba(255,255,255,0.5)">' + s.key + '</span>' +
        '<span style="font-size:12px;font-weight:500;color:#fff">' + s.val + '</span>' +
        '</div>';
    }).join('');
  } else { specsSec.style.display = 'none'; }

  /* İlişkili ürünler */
  var related = p.related || [];
  var relSec = document.getElementById('pm-related-section');
  if (related.length > 0) {
    relSec.style.display = '';
    var relEl = document.getElementById('pm-related');
    relEl.innerHTML = '';
    related.forEach(function(rid) {
      var rp = allProds.find(function(x){ return x.id === rid; });
      if (!rp) return;
      var rname = lang === 'en' && rp.name_en ? rp.name_en : rp.name;
      var rimg = rp.images && rp.images[0];
      relEl.innerHTML += '<div onclick="openProdModal(\''+rid+'\')" style="cursor:pointer;background:rgba(255,255,255,0.03);border:0.5px solid rgba(55,138,221,0.15);border-radius:10px;padding:12px;transition:border-color .2s" onmouseover="this.style.borderColor=\'rgba(55,138,221,0.4)\'" onmouseout="this.style.borderColor=\'rgba(55,138,221,0.15)\'">' +
        '<div style="width:100%;aspect-ratio:1;border-radius:8px;background:rgba(55,138,221,0.08);display:flex;align-items:center;justify-content:center;margin-bottom:10px;overflow:hidden">' +
        (rimg ? '<img src="'+rimg+'" style="width:100%;height:100%;object-fit:contain">' : '<span style="font-size:28px">📦</span>') +
        '</div>' +
        '<p style="font-size:12px;font-weight:500;color:#fff;margin-bottom:4px;line-height:1.3">'+rname+'</p>' +
        '<p style="font-size:11px;color:rgba(255,255,255,0.4)">'+rp.brand+'</p>' +
        '<p style="font-size:14px;font-weight:600;color:#fff;margin-top:6px">'+(rp.price||0).toLocaleString('tr-TR')+' ₺</p>' +
        '</div>';
    });
  } else { relSec.style.display = 'none'; }

  document.getElementById('prod-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeProdModal() {
  document.getElementById('prod-modal').style.display = 'none';
  document.body.style.overflow = '';
}

/* ESC ile modal kapat */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeProdModal();
});

/* Kart tıklama: data-id üzerinden openProdModal çağrılıyor */
