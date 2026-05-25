/* =============================================
   MECHANISTRAIL — ÜRÜN KATALOĞU
   
   YENİ ÜRÜN EKLEMEK İÇİN:
   Aşağıdaki listeye yeni bir {} bloğu ekle.
   
   STOK: "instock" | "order" | "sold"
   KONDİSYON: "new" | "used" | "refurb"
   ============================================= */

const PRODUCTS = [
  /* ── ELEKTRONİK ── */
  { id:"E001", name:"Siemens S7-1200 CPU 1214C PLC", name_en:"Siemens S7-1200 CPU 1214C PLC",
    category:"elektronik", brand:"Siemens", model:"6ES7214-1AG40-0XB0",
    price:12500, stock:"instock", condition:"new",
    desc:"14 DI / 10 DO / 2 AI. Profinet destekli, orijinal ambalajında.",
    desc_en:"14 DI / 10 DO / 2 AI. Profinet supported, original packaging.",
    tags:["PLC","Siemens","S7-1200"],
    images:[],
    datasheet:"",
    specs:[
      {key:"Giriş Voltajı", val:"24V DC"},
      {key:"Dijital Giriş", val:"14 DI"},
      {key:"Dijital Çıkış", val:"10 DO"},
      {key:"Analog Giriş", val:"2 AI"},
      {key:"İletişim", val:"Profinet"},
      {key:"Bellek", val:"100 KB"}
    ],
    related:["E006","E007"] },

  { id:"E002", name:"Schneider ATV312 7.5kW İnverter", name_en:"Schneider ATV312 7.5kW Inverter",
    category:"elektronik", brand:"Schneider", model:"ATV312HU75N4",
    price:8900, stock:"instock", condition:"used",
    desc:"3 faz 400V, 7.5kW. Az kullanılmış, test edilmiş, çalışır durumda.",
    desc_en:"3-phase 400V, 7.5kW. Low usage, tested, fully functional.",
    tags:["İnverter","Sürücü","Schneider"] },

  { id:"E003", name:"Omron E2B Endüktif Sensör M18", name_en:"Omron E2B Inductive Sensor M18",
    category:"elektronik", brand:"Omron", model:"E2B-M18KS08-WP-C1",
    price:850, stock:"order", condition:"new",
    desc:"M18, 8mm algılama mesafesi, PNP NO, IP67. Sipariş üzerine tedarik.",
    desc_en:"M18, 8mm sensing distance, PNP NO, IP67. Available on order.",
    tags:["Sensör","Omron","Endüktif"] },

  { id:"E004", name:"Phoenix Contact 24V DC Güç Kaynağı 10A", name_en:"Phoenix Contact 24V DC Power Supply 10A",
    category:"elektronik", brand:"Phoenix Contact", model:"QUINT-PS/1AC/24DC/10",
    price:4200, stock:"instock", condition:"new",
    desc:"240W, DIN ray montajlı, geniş giriş voltajı. Orijinal kutusu ile.",
    desc_en:"240W, DIN rail mount, wide input voltage. Original box.",
    tags:["Güç Kaynağı","Phoenix Contact","24V"] },

  { id:"E005", name:"ABB ACS550 15kW Frekans İnverter", name_en:"ABB ACS550 15kW Frequency Inverter",
    category:"elektronik", brand:"ABB", model:"ACS550-01-031A-4",
    price:14500, stock:"instock", condition:"refurb",
    desc:"3 faz 400V, 15kW. Revize edilmiş, 6 ay garanti, test belgesi ile.",
    desc_en:"3-phase 400V, 15kW. Refurbished, 6-month warranty, test certificate.",
    tags:["İnverter","ABB","ACS550"] },

  { id:"E006", name:"Siemens LOGO! 8 Lojik Modül", name_en:"Siemens LOGO! 8 Logic Module",
    category:"elektronik", brand:"Siemens", model:"6ED1052-1MD08-0BA1",
    price:3200, stock:"order", condition:"new",
    desc:"8 DI / 4 DO, ethernet, LCD ekran. Sipariş ile 2-3 iş günü.",
    desc_en:"8 DI / 4 DO, ethernet, LCD display. 2-3 business days on order.",
    tags:["PLC","LOGO","Siemens"] },

  { id:"E007", name:"Keyence LR-ZB250CB Lazer Sensör", name_en:"Keyence LR-ZB250CB Laser Sensor",
    category:"elektronik", brand:"Keyence", model:"LR-ZB250CB",
    price:3800, stock:"order", condition:"new",
    desc:"250mm algılama, NPN/PNP seçilebilir, IP67. 3-5 iş günü.",
    desc_en:"250mm sensing range, NPN/PNP selectable, IP67. 3-5 business days.",
    tags:["Sensör","Keyence","Lazer"] },

  { id:"E008", name:"Weidmüller DIN Ray Klemens Seti 100 adet", name_en:"Weidmüller DIN Rail Terminal Set 100pcs",
    category:"elektronik", brand:"Weidmüller", model:"WDU 2.5",
    price:1200, stock:"instock", condition:"new",
    desc:"2.5mm², 100 adet, toprak ve köprü dahil, orijinal paket.",
    desc_en:"2.5mm², 100 pieces, ground and bridge included, original package.",
    tags:["Klemens","Weidmüller","DIN Ray"] },

  /* ── MEKANİK ── */
  { id:"M001", name:"SKF 6205-2RS Derin Oluk Rulman", name_en:"SKF 6205-2RS Deep Groove Ball Bearing",
    category:"mekanik", brand:"SKF", model:"6205-2RS1",
    price:280, stock:"instock", condition:"new",
    desc:"25x52x15mm, her iki yanda keçeli, yağlı, orijinal SKF ambalajı.",
    desc_en:"25x52x15mm, sealed both sides, greased, original SKF packaging.",
    tags:["Rulman","SKF","6205"] },

  { id:"M002", name:"Bosch Rexroth Lineer Ray 25mm 1m", name_en:"Bosch Rexroth Linear Rail 25mm 1m",
    category:"mekanik", brand:"Bosch Rexroth", model:"R162281320",
    price:2800, stock:"instock", condition:"new",
    desc:"25mm, 1000mm uzunluk, 2 adet araba dahil. Kutusunda, kullanılmamış.",
    desc_en:"25mm, 1000mm length, includes 2 carriages. Unused, in box.",
    tags:["Lineer Ray","Bosch Rexroth","25mm"] },

  { id:"M003", name:"Festo DSBC-80-200 Pnömatik Silindir", name_en:"Festo DSBC-80-200 Pneumatic Cylinder",
    category:"mekanik", brand:"Festo", model:"DSBC-80-200-PPSA-N3",
    price:5500, stock:"instock", condition:"used",
    desc:"Çift etkili, Ø80mm, 200mm strok. Temizlenmiş, test edilmiş.",
    desc_en:"Double acting, Ø80mm, 200mm stroke. Cleaned and tested.",
    tags:["Pnömatik","Silindir","Festo"] },

  { id:"M004", name:"SEW Eurodrive 0.75kW Redüktörlü Motor", name_en:"SEW Eurodrive 0.75kW Geared Motor",
    category:"mekanik", brand:"SEW Eurodrive", model:"SA37/T DRE80M4",
    price:6800, stock:"instock", condition:"used",
    desc:"0.75kW, i=28.35, n=50rpm, flanşlı. Çalışır durumda, az kullanılmış.",
    desc_en:"0.75kW, i=28.35, n=50rpm, flanged. Working condition, low usage.",
    tags:["Motor","Redüktör","SEW"] },

  { id:"M005", name:"INA KWVE25-B Lineer Araba", name_en:"INA KWVE25-B Linear Carriage",
    category:"mekanik", brand:"INA", model:"KWVE25-B-G3-V1",
    price:1850, stock:"order", condition:"new",
    desc:"25mm ray uyumlu, yüksek yük kapasiteli, yağlamalı. Sipariş ile.",
    desc_en:"25mm rail compatible, high load capacity, lubricated. On order.",
    tags:["Lineer Araba","INA","25mm"] },

  { id:"M006", name:"Parker Orantısal Yön Kontrol Vanası D1FP", name_en:"Parker Proportional Directional Valve D1FP",
    category:"mekanik", brand:"Parker", model:"D1FP A01 BC5 0014",
    price:18500, stock:"instock", condition:"refurb",
    desc:"NG6, orantısal yön kontrol vanası. Revize edilmiş, test belgeli.",
    desc_en:"NG6 proportional directional valve. Refurbished, test certificate.",
    tags:["Vana","Hidrolik","Parker"] },

  { id:"M007", name:"Alüminyum Profil 40x40 B-tipi 6m", name_en:"Aluminium Profile 40x40 B-type 6m",
    category:"mekanik", brand:"Çeşitli", model:"40x40 B-Slot",
    price:950, stock:"instock", condition:"new",
    desc:"6 metre, B-tipi yiv, eloksal kaplı. Toplu alıma indirim uygulanır.",
    desc_en:"6 metres, B-slot, anodised. Bulk discount available.",
    tags:["Profil","Alüminyum","40x40"] },

  { id:"M008", name:"NSK 7205B Açılı Temas Rulmanı", name_en:"NSK 7205B Angular Contact Bearing",
    category:"mekanik", brand:"NSK", model:"7205 BEP",
    price:420, stock:"order", condition:"new",
    desc:"25x52x15mm, 40° temas açısı. Çift yönlü yüke uygun. Sipariş ile.",
    desc_en:"25x52x15mm, 40° contact angle. Suitable for axial loads. On order.",
    tags:["Rulman","NSK","Açılı"] }
];

const CATEGORIES = {
  tr: [{id:"all",label:"Tümü"},{id:"elektronik",label:"⚡ Elektronik"},{id:"mekanik",label:"⚙️ Mekanik"}],
  en: [{id:"all",label:"All"},{id:"elektronik",label:"⚡ Electronics"},{id:"mekanik",label:"⚙️ Mechanical"}]
};
const STOCK_LABELS = {
  tr:{instock:"✅ Stokta",order:"📦 Sipariş ile",sold:"❌ Satıldı"},
  en:{instock:"✅ In Stock",order:"📦 On Order",sold:"❌ Sold"}
};
const COND_LABELS = {
  tr:{new:"Sıfır",used:"İkinci El",refurb:"Revize"},
  en:{new:"New",used:"Used",refurb:"Refurbished"}
};
