/* =============================================
   MECHANISTRAIL - script.js
   =============================================

   Bu dosyada 3 ana bölüm var:
   1. GALERİ RESİMLERİ  ← Kendi resimlerini buraya ekle
   2. PROJE VERİLERİ    ← Projelerini buraya ekle
   3. SİTE MANTIĞI      ← Değiştirmene gerek yok
   ============================================= */


/* =============================================
   BÖLÜM 1: GALERİ RESİMLERİ
   ---------------------------------------------
   Ana sayfada 10 saniyede bir geçiş yapan
   fotoğraf galerisine resim eklemek için:

   1. Klasör yapısı:
      mechanistrail/
        index.html
        style.css
        script.js
        images/           ← Bu klasörü oluştur
          galeri1.jpg
          galeri2.jpg
          ...

   2. Aşağıdaki diziye ekle:
      { src: "images/DOSYA_ADI.jpg", caption: "Açıklama metni" }

   3. İstediğin kadar resim ekleyebilirsin.
   ============================================= */
const galleryPhotos = [
  /* --- KENDİ RESİMLERİNİ BURAYA EKLE --- */
  /* Örnek format (# işaretini kaldır ve düzenle):
  { src: "images/proje-genel.jpg",    caption: "Mechanistrail Atölyesi" },
  { src: "images/makine1.jpg",        caption: "Endüstriyel Konveyör Sistemi" },
  { src: "images/cad-tasarim.jpg",    caption: "CAD Tasarım Çalışması" },
  { src: "images/pcb.jpg",            caption: "PCB Kart Tasarımı" },
  { src: "images/analiz.jpg",         caption: "CFD Akış Analizi" },
  */

  /* Resim ekleyene kadar yer tutucu gösterilir (placeholder).
     En az bir resim ekledikten sonra placeholder kaybolur. */
];

/* Galeri geçiş süresi (milisaniye) — 10000 = 10 saniye */
const GALLERY_INTERVAL = 10000;


/* =============================================
   BÖLÜM 2: PROJE VERİLERİ
   ---------------------------------------------
   Projeler sayfasına yeni proje eklemek için
   aşağıdaki diziye nesne ekle.

   Her nesnenin alanları:
     title    : Projenin adı
     desc     : Kısa açıklama (1-2 cümle)
     img      : Resim yolu (images/ klasöründen)
                Yoksa "" bırak → simge gösterilir
     icon     : Tabler icon sınıfı (resim yoksa)
                https://tabler.io/icons
     iconColor: İkon rengi
     iconBg   : İkon arka plan rengi
     tags     : Etiket listesi (dizi)
   ============================================= */
const projects = [
  {
    title: "Endüstriyel Konveyör Sistemi",
    desc: "Mekanik tasarım, PLC yazılımı ve termal analiz içeren komple proje.",
    img: "",   /* ← Resim varsa: "images/konveyor.jpg" */
    icon: "ti-robot",
    iconColor: "#378ADD",
    iconBg: "rgba(24,95,165,0.1)",
    tags: ["Mekanik", "PLC", "Termal"]
  },
  {
    title: "HVAC Akış Optimizasyonu",
    desc: "CFD simülasyonu ile enerji verimliliği %23 artırıldı.",
    img: "",
    icon: "ti-wind",
    iconColor: "#EF9F27",
    iconBg: "rgba(186,117,23,0.1)",
    tags: ["CFD", "HVAC", "Akış"]
  },
  {
    title: "Akıllı Sensör PCB Kartı",
    desc: "Çok katmanlı PCB tasarımı ve gömülü yazılım geliştirme.",
    img: "",
    icon: "ti-cpu",
    iconColor: "#5DCAA5",
    iconBg: "rgba(29,158,117,0.1)",
    tags: ["PCB", "IoT", "Yazılım"]
  },
  {
    title: "Soğutma Termal Analizi",
    desc: "Yüksek güçlü elektronik için soğutma sistemi simülasyonu.",
    img: "",
    icon: "ti-ripple",
    iconColor: "#AFA9EC",
    iconBg: "rgba(127,119,221,0.1)",
    tags: ["Termal", "FEA", "Soğutma"]
  },
  {
    title: "Özel Makine Tasarımı",
    desc: "Kinematik analiz, yapısal hesap ve prototip üretimi.",
    img: "",
    icon: "ti-3d-cube-sphere",
    iconColor: "#378ADD",
    iconBg: "rgba(24,95,165,0.1)",
    tags: ["Mekanik", "Kinematik", "Prototip"]
  },
  {
    title: "Motor Kontrol Sistemi",
    desc: "Servo motor sürücü kartı ve gerçek zamanlı kontrol yazılımı.",
    img: "",
    icon: "ti-engine",
    iconColor: "#5DCAA5",
    iconBg: "rgba(29,158,117,0.1)",
    tags: ["Elektronik", "Kontrol", "Yazılım"]
  },

  /* --- YENİ PROJE EKLEMEK İÇİN BURAYA KopyaLa --- */
  /*
  {
    title: "Proje Adı",
    desc: "Projenin kısa açıklaması.",
    img: "images/proje.jpg",
    icon: "ti-bolt",
    iconColor: "#EF9F27",
    iconBg: "rgba(186,117,23,0.1)",
    tags: ["Etiket1", "Etiket2"]
  },
  */
];


/* =============================================
   BÖLÜM 3: SİTE MANTIĞI
   Aşağısını değiştirmene gerek yok.
   ============================================= */

/* --- Hamburger Menü --- */
function toggleMenu() {
  const links = document.getElementById('nav-links');
  const burger = document.getElementById('hamburger');
  links.classList.toggle('open');
  burger.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* --- Sayfa geçişi --- */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  const btn  = document.getElementById('nb-' + id);
  if (page) page.classList.add('active');
  if (btn)  btn.classList.add('active');
  window.scrollTo(0, 0);
}

/* --- Projeleri DOM'a yaz --- */
function renderProjects() {
  const grid = document.getElementById('proj-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(p => {
    const thumb = p.img
      ? `<img src="${p.img}" alt="${p.title}">`
      : `<i class="ti ${p.icon}" style="font-size:40px;color:${p.iconColor}" aria-hidden="true"></i>`;

    const tags = p.tags.map(t => `<span class="ptag">${t}</span>`).join('');
    grid.innerHTML += `
      <div class="proj-card">
        <div class="proj-thumb" style="background:${p.img ? '#000' : p.iconBg}">${thumb}</div>
        <div class="proj-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="proj-tags">${tags}</div>
        </div>
      </div>`;
  });
}

/* --- Proje slider (ana sayfa) --- */
const SLIDER_INTERVAL = 4000;
let sliderCur = 0, sliderProg = 0, sliderTimer, sliderProgTimer;

function initSlider() {
  const slidesEl = document.getElementById('slides');
  const dotsEl   = document.getElementById('dots');
  const progEl   = document.getElementById('prog');
  if (!slidesEl) return;

  const total = slidesEl.children.length;

  // Dot'ları oluştur
  dotsEl.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slayt ' + (i + 1));
    d.onclick = () => sliderGoTo(i);
    dotsEl.appendChild(d);
  }

  function updateDots() {
    document.querySelectorAll('.dot').forEach((d, i) => {
      d.className = 'dot' + (i === sliderCur ? ' active' : '');
    });
  }
  function sliderResetProg() {
    clearInterval(sliderProgTimer);
    sliderProg = 0; progEl.style.width = '0%';
    sliderProgTimer = setInterval(() => {
      sliderProg += 100 / (SLIDER_INTERVAL / 100);
      if (sliderProg >= 100) sliderProg = 100;
      progEl.style.width = sliderProg + '%';
    }, 100);
  }
  window.sliderGoTo = function(n) {
    sliderCur = (n + total) % total;
    slidesEl.style.transform = 'translateX(-' + sliderCur * 100 + '%)';
    updateDots(); sliderResetProg();
  };

  document.getElementById('prev').onclick = () => { clearInterval(sliderTimer); sliderGoTo(sliderCur - 1); startSliderAuto(); };
  document.getElementById('next').onclick = () => { clearInterval(sliderTimer); sliderGoTo(sliderCur + 1); startSliderAuto(); };

  function startSliderAuto() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => sliderGoTo(sliderCur + 1), SLIDER_INTERVAL);
  }
  sliderResetProg(); startSliderAuto();
}

/* --- Fotoğraf Galerisi (ana sayfa) --- */
let galleryCur = 0, galleryTimer, galleryProgTimer, galleryProgVal = 0;

function initGallery() {
  const wrap    = document.getElementById('gallery-wrap');
  const dotsEl  = document.getElementById('gallery-dots');
  const progEl  = document.getElementById('gallery-prog');
  if (!wrap) return;

  // Resim yoksa placeholder göster
  if (galleryPhotos.length === 0) {
    wrap.innerHTML = `
      <div class="gallery-placeholder">
        <i class="ti ti-photo" aria-hidden="true"></i>
        <span>Resim eklemek için script.js dosyasındaki<br><strong>galleryPhotos</strong> dizisini düzenleyin</span>
      </div>`;
    return;
  }

  // Slaytları oluştur
  const slidesContainer = document.createElement('div');
  galleryPhotos.forEach((photo, i) => {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption || ''}">
      ${photo.caption ? `<div class="gallery-caption">${photo.caption}</div>` : ''}`;
    slidesContainer.appendChild(slide);
  });
  wrap.appendChild(slidesContainer);

  // Ok butonları
  const prev = document.createElement('button');
  prev.className = 'gallery-prev';
  prev.innerHTML = '<i class="ti ti-arrow-left"></i>';
  const next = document.createElement('button');
  next.className = 'gallery-next';
  next.innerHTML = '<i class="ti ti-arrow-right"></i>';
  wrap.appendChild(prev); wrap.appendChild(next);

  // Dot'lar
  dotsEl.innerHTML = '';
  galleryPhotos.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => galleryGoTo(i);
    dotsEl.appendChild(d);
  });

  function updateGallery() {
    wrap.querySelectorAll('.gallery-slide').forEach((s, i) => {
      s.classList.toggle('active', i === galleryCur);
    });
    dotsEl.querySelectorAll('.gallery-dot').forEach((d, i) => {
      d.className = 'gallery-dot' + (i === galleryCur ? ' active' : '');
    });
  }

  function galleryResetProg() {
    clearInterval(galleryProgTimer);
    galleryProgVal = 0; progEl.style.width = '0%';
    galleryProgTimer = setInterval(() => {
      galleryProgVal += 100 / (GALLERY_INTERVAL / 100);
      if (galleryProgVal >= 100) galleryProgVal = 100;
      progEl.style.width = galleryProgVal + '%';
    }, 100);
  }

  function galleryGoTo(n) {
    galleryCur = (n + galleryPhotos.length) % galleryPhotos.length;
    updateGallery(); galleryResetProg();
  }
  window.galleryGoTo = galleryGoTo;

  prev.onclick = () => { clearInterval(galleryTimer); galleryGoTo(galleryCur - 1); startGalleryAuto(); };
  next.onclick = () => { clearInterval(galleryTimer); galleryGoTo(galleryCur + 1); startGalleryAuto(); };

  function startGalleryAuto() {
    clearInterval(galleryTimer);
    galleryTimer = setInterval(() => galleryGoTo(galleryCur + 1), GALLERY_INTERVAL);
  }

  galleryResetProg(); startGalleryAuto();
}

/* --- Başlat --- */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initSlider();
  initGallery();
});
