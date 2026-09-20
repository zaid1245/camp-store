/* ═══════════════════════════════════════════════════════════
   Camp Store · script.js
   ١. الإعدادات   ٢. الترجمة   ٣. الرسوم   ٤. المنتجات
   ٥. أدوات      ٦. بناء الصفحة   ٧. نافذة المنتج
   ٨. السلة      ٩. واتساب      ١٠. اللغة والمظهر
   ═══════════════════════════════════════════════════════════ */

/* ═══ ١. الإعدادات — عدّل هنا فقط ═══ */
const CONFIG = {
  // رقم واتساب بصيغة دولية بدون + وبدون صفر البداية
  // السعودية 9665xxxxxxxx · مصر 2010xxxxxxxx · الإمارات 9715xxxxxxx
  whatsapp: "963954102812",
  storeName: "Camp Store",
  freeShipping: 500,          // الحد الأدنى للشحن المجاني
  email: "hello@campstore.com"
};

/* ═══ ٢. الترجمة (عربي / English) ═══ */
const I18N = {
  ar: {
    dir:"rtl", locale:"ar-EG", currency:"ر.س", langLabel:"EN",
    "brand.sub":"كامب ستور",
    "nav.products":"المنتجات", "nav.why":"لماذا نحن", "nav.contact":"تواصل معنا",
    "hero.title":"ملابس تصمد<br>حيث <em>تنتهي الطرق</em>",
    "hero.desc":"كامب ستور يجهّزك للجبل والصحراء والمخيّم: أقمشة مقاومة للماء، خياطة مزدوجة، وقطع اختبرناها بأنفسنا قبل أن نبيعها. اختر قطعتك وأكمل الطلب على واتساب خلال دقيقة.",
    "hero.browse":"تصفّح المنتجات", "hero.ask":"اسألنا على واتساب",
    "mq.1":"<b>شحن مجاني</b> للطلبات فوق ٥٠٠ ر.س",
    "mq.2":"<b>الدفع عند الاستلام</b> متاح",
    "mq.3":"<b>إرجاع خلال ١٤ يومًا</b>",
    "mq.4":"<b>ضمان سنة</b> على الخياطة",
    "cat.title":"منتجات كامب ستور",
    "cat.sub":"اختر القطعة ثم المقاس، وسيصلنا طلبك على واتساب مباشرة.",
    "cat.empty":"لا توجد منتجات في هذا القسم حاليًا. جرّب قسمًا آخر.",
    "cat.sizes":"مقاسات متوفرة",
    "card.pick":"اختر المقاس",
    "why.1.k":"قبل البيع", "why.1.t":"نجرّب كل قطعة",
    "why.1.d":"لا ندرج منتجًا قبل أن يقضي فريقنا ثلاث ليالٍ به في الجبل أو الصحراء. ما لا يصمد، لا يدخل المتجر.",
    "why.2.k":"عند الطلب", "why.2.t":"طلبك على واتساب",
    "why.2.d":"لا حاجة لحساب أو بطاقة. ترسل الطلب برسالة، نؤكد التوفر والمقاس، ثم تختار الدفع عند الاستلام أو التحويل.",
    "why.3.k":"بعد البيع", "why.3.t":"نصلح ما ينكسر",
    "why.3.d":"سحّاب تعطّل أو خياطة فُتحت خلال السنة الأولى؟ أرسل القطعة ونعيدها إليك مُصلحة على حسابنا.",
    "foot.address":"طريق الملك عبدالعزيز، الرياض · يوميًا من ٤ عصرًا حتى ١١ مساءً",
    "foot.wa":"واتساب", "foot.mail":"البريد",
    "cart.title":"سلة المشتريات", "cart.total":"الإجمالي",
    "cart.checkout":"إتمام الطلب عبر واتساب", "cart.clear":"إفراغ السلة",
    "cart.empty":"سلتك فارغة.<br>اختر منتجًا لتبدأ طلبك.",
    "cart.freeShip":"الشحن مجاني على هذا الطلب 🎉",
    "cart.addMore":"أضف {x} ليصبح الشحن مجانيًا",
    "modal.size":"اختر المقاس", "modal.buy":"اطلب الآن عبر واتساب",
    "modal.add":"أضف إلى السلة", "modal.close":"إغلاق",
    "size.one":"مقاس واحد", "size.out":"غير متوفر حاليًا",
    "toast.pickSize":"اختر مقاسًا متوفرًا أولًا",
    "toast.added":"أُضيف {n} · مقاس {s}",
    "toast.removed":"أُزيل المنتج من السلة",
    "toast.cleared":"أُفرغت السلة",
    "toast.wa":"فتحنا واتساب — أكمل بياناتك وأرسل الرسالة",
    "aria.lang":"التبديل إلى الإنجليزية", "aria.theme":"تبديل المظهر",
    "aria.cart":"سلة المشتريات", "aria.close":"إغلاق",
    "aria.wa":"تواصل معنا على واتساب",
    "aria.minus":"إنقاص الكمية", "aria.plus":"زيادة الكمية", "aria.remove":"إزالة المنتج",
    "wa.hello":"السلام عليكم",
    "wa.single":"أرغب بطلب هذا المنتج:",
    "wa.confirm":"الرجاء تأكيد التوفر وطريقة التوصيل.",
    "wa.order":"أرغب بتأكيد الطلب التالي:",
    "wa.size":"المقاس", "wa.qty":"الكمية", "wa.price":"السعر",
    "wa.total":"الإجمالي", "wa.ship":"الشحن",
    "wa.free":"مجاني", "wa.byArea":"يُحتسب حسب المنطقة",
    "wa.name":"الاسم", "wa.city":"المدينة", "wa.addr":"العنوان",
    "wa.pay":"طريقة الدفع (تحويل / عند الاستلام)",
    "wa.general":"عندي استفسار عن المنتجات المتوفرة."
  },
  en: {
    dir:"ltr", locale:"en-US", currency:"SAR", langLabel:"عربي",
    "brand.sub":"OUTDOOR GEAR",
    "nav.products":"Products", "nav.why":"Why us", "nav.contact":"Contact",
    "hero.title":"Gear that holds<br>where <em>the road ends</em>",
    "hero.desc":"Camp Store kits you out for the mountain, the desert and the campsite: waterproof fabrics, double stitching, and pieces we field-test ourselves before selling them. Pick your size and finish the order on WhatsApp in a minute.",
    "hero.browse":"Browse products", "hero.ask":"Ask us on WhatsApp",
    "mq.1":"<b>Free shipping</b> over 500 SAR",
    "mq.2":"<b>Cash on delivery</b> available",
    "mq.3":"<b>14-day returns</b>",
    "mq.4":"<b>One-year warranty</b> on stitching",
    "cat.title":"Camp Store products",
    "cat.sub":"Pick a piece and a size — your order reaches us straight on WhatsApp.",
    "cat.empty":"Nothing in this category yet. Try another one.",
    "cat.sizes":"sizes in stock",
    "card.pick":"Choose size",
    "why.1.k":"Before we sell", "why.1.t":"We test every piece",
    "why.1.d":"Nothing goes on the site until our team spends three nights with it in the mountains or the desert. If it fails, it never ships.",
    "why.2.k":"When you order", "why.2.t":"Your order on WhatsApp",
    "why.2.d":"No account, no card. Send a message, we confirm size and stock, then you choose cash on delivery or bank transfer.",
    "why.3.k":"After we sell", "why.3.t":"We repair what breaks",
    "why.3.d":"Zip gave out or a seam opened in the first year? Send the piece back and we return it repaired, on us.",
    "foot.address":"King Abdulaziz Road, Riyadh · Daily, 4 PM – 11 PM",
    "foot.wa":"WhatsApp", "foot.mail":"Email",
    "cart.title":"Your cart", "cart.total":"Total",
    "cart.checkout":"Checkout on WhatsApp", "cart.clear":"Empty cart",
    "cart.empty":"Your cart is empty.<br>Pick a product to start an order.",
    "cart.freeShip":"Shipping is free on this order 🎉",
    "cart.addMore":"Add {x} to get free shipping",
    "modal.size":"Choose a size", "modal.buy":"Order now on WhatsApp",
    "modal.add":"Add to cart", "modal.close":"Close",
    "size.one":"One size", "size.out":"Out of stock",
    "toast.pickSize":"Pick an available size first",
    "toast.added":"Added {n} · size {s}",
    "toast.removed":"Removed from cart",
    "toast.cleared":"Cart emptied",
    "toast.wa":"WhatsApp is open — fill in your details and send",
    "aria.lang":"Switch to Arabic", "aria.theme":"Toggle dark mode",
    "aria.cart":"Shopping cart", "aria.close":"Close",
    "aria.wa":"Chat with us on WhatsApp",
    "aria.minus":"Decrease quantity", "aria.plus":"Increase quantity", "aria.remove":"Remove item",
    "wa.hello":"Hello",
    "wa.single":"I'd like to order this item:",
    "wa.confirm":"Please confirm availability and delivery.",
    "wa.order":"I'd like to confirm this order:",
    "wa.size":"Size", "wa.qty":"Qty", "wa.price":"Price",
    "wa.total":"Total", "wa.ship":"Shipping",
    "wa.free":"Free", "wa.byArea":"Calculated by area",
    "wa.name":"Name", "wa.city":"City", "wa.addr":"Address",
    "wa.pay":"Payment (transfer / cash on delivery)",
    "wa.general":"I have a question about your products."
  }
};

let lang = "ar";
try { const s = localStorage.getItem("camp_lang"); if (s === "en" || s === "ar") lang = s; } catch (e) {}
const t = key => (I18N[lang][key] ?? key);

/* ═══ ٣. رسوم المنتجات (SVG داخلي) ═══ */
const ART = {
  jacket:(a,b)=>`<path d="M74 56 L108 42 L132 42 L166 56 L196 82 L182 114 L168 102 L168 246 L72 246 L72 102 L58 114 L44 82 Z" fill="${a}"/><path d="M108 42 L120 92 L132 42" fill="${b}" opacity=".9"/><path d="M120 92 L120 246" stroke="${b}" stroke-width="3"/><path d="M78 150 L108 150 M132 150 L162 150" stroke="${b}" stroke-width="7"/>`,
  shirt:(a,b)=>`<path d="M78 56 L110 40 Q120 54 130 40 L162 56 L194 78 L178 108 L166 98 L166 236 L74 236 L74 98 L62 108 L46 78 Z" fill="${a}"/><path d="M110 40 L120 66 L130 40" fill="${b}"/><path d="M120 66 L120 232" stroke="${b}" stroke-width="2.5"/><circle cx="120" cy="112" r="3.4" fill="${b}"/><circle cx="120" cy="152" r="3.4" fill="${b}"/><circle cx="120" cy="192" r="3.4" fill="${b}"/>`,
  fleece:(a,b)=>`<path d="M74 60 L120 44 L166 60 L200 86 L184 118 L168 106 L168 226 L72 226 L72 106 L56 118 L40 86 Z" fill="${a}"/><path d="M72 226 L168 226 L168 242 L72 242 Z" fill="${b}"/><path d="M100 50 Q120 70 140 50" stroke="${b}" stroke-width="4.5" fill="none"/><path d="M96 112 L96 212 M120 112 L120 212 M144 112 L144 212" stroke="${b}" stroke-width="1.8" opacity=".5"/>`,
  pants:(a,b)=>`<path d="M80 54 L160 54 L170 244 L132 244 L120 146 L108 244 L70 244 Z" fill="${a}"/><path d="M78 54 L162 54 L163 76 L77 76 Z" fill="${b}"/><rect x="84" y="112" width="26" height="30" rx="4" fill="${b}"/><rect x="130" y="112" width="26" height="30" rx="4" fill="${b}"/>`,
  shorts:(a,b)=>`<path d="M78 56 L162 56 L168 176 L130 176 L120 122 L110 176 L72 176 Z" fill="${a}"/><path d="M76 56 L164 56 L165 78 L75 78 Z" fill="${b}"/><path d="M120 78 L120 122" stroke="${b}" stroke-width="2" opacity=".6"/>`,
  hat:(a,b)=>`<ellipse cx="120" cy="170" rx="92" ry="30" fill="${a}"/><path d="M62 168 Q68 82 120 82 Q172 82 178 168 Z" fill="${b}"/><path d="M62 150 Q120 168 178 150" stroke="${a}" stroke-width="12" fill="none"/>`,
  boots:(a,b)=>`<path d="M74 46 L118 46 L120 148 L152 162 Q170 170 170 186 L170 202 L74 202 Z" fill="${a}"/><path d="M74 186 L170 186 L170 206 L74 206 Z" fill="${b}"/><path d="M82 70 L112 78 M82 94 L112 102 M82 118 L112 126" stroke="${b}" stroke-width="4" stroke-linecap="round"/>`,
  bag:(a,b)=>`<path d="M68 90 L172 90 L182 238 L58 238 Z" fill="${a}"/><path d="M92 90 Q92 46 120 46 Q148 46 148 90" stroke="${b}" stroke-width="9" fill="none"/><rect x="92" y="130" width="56" height="44" rx="7" fill="${b}"/>`
};
const svg = (type,a,b,extra="") =>
  `<svg viewBox="0 0 240 280" xmlns="http://www.w3.org/2000/svg" ${extra} role="img" aria-hidden="true">${ART[type](a,b)}</svg>`;

/* ═══ ٤. الأقسام والمنتجات ═══ */
const CATS = [
  { id:"all",    ar:"الكل",              en:"All" },
  { id:"outer",  ar:"جاكيتات",           en:"Jackets" },
  { id:"tops",   ar:"قمصان وبلايز",      en:"Shirts & tees" },
  { id:"bottom", ar:"بناطيل وشورتات",    en:"Pants & shorts" },
  { id:"gear",   ar:"أحذية وحقائب",      en:"Boots & bags" },
  { id:"acc",    ar:"إكسسوارات",         en:"Accessories" }
];

const PRODUCTS = [
  { id:1, cat:"outer", price:420, art:"jacket", c1:"#3C6329", c2:"#1F3C16",
    ar:"جاكيت التخييم المقاوم للماء", en:"Waterproof Camp Jacket",
    ar_d:"طبقة خارجية مقاومة للماء والرياح، مع قلنسوة قابلة للطي داخل الياقة.",
    en_d:"Waterproof, windproof shell with a hood that folds away into the collar.",
    sizes:["S","M","L","XL","XXL"], out:["XXL"], ar_t:"الأكثر مبيعًا", en_t:"Bestseller" },

  { id:2, cat:"outer", price:295, old:360, art:"fleece", c1:"#5B8C3E", c2:"#33521F",
    ar:"جاكيت الصوف الجبلي", en:"Mountain Fleece Jacket",
    ar_d:"صوف مزدوج الوبر يحتفظ بالحرارة حتى ٤ درجات، خفيف ولا يقيّد الحركة.",
    en_d:"Double-pile fleece that holds warmth down to 4°C without limiting movement.",
    sizes:["S","M","L","XL"], out:[], ar_t:"خصم", en_t:"Sale" },

  { id:3, cat:"tops", price:165, art:"shirt", c1:"#8FA98B", c2:"#3E5636",
    ar:"قميص السفاري القطني", en:"Cotton Safari Shirt",
    ar_d:"قطن مسامي بجيبين أماميين وأكمام قابلة للتثبيت عند المرفق.",
    en_d:"Breathable cotton with two chest pockets and roll-up sleeve tabs.",
    sizes:["S","M","L","XL"], out:["S"] },

  { id:4, cat:"tops", price:85, art:"shirt", c1:"#2F4A22", c2:"#C7A03A",
    ar:"تيشيرت التخييم القطني", en:"Camp Cotton Tee",
    ar_d:"قطن ثقيل ١٨٠ غرام مطبوع بشعار كامب ستور على الصدر.",
    en_d:"Heavy 180gsm cotton with the Camp Store mark printed on the chest.",
    sizes:["S","M","L","XL","XXL"], out:[] },

  { id:5, cat:"bottom", price:230, art:"pants", c1:"#4A6234", c2:"#2B3A1E",
    ar:"بنطلون كارجو تكتيكي", en:"Tactical Cargo Pants",
    ar_d:"ستة جيوب، ركبة مقوّاة، وخصر مطاطي جانبي يتحمّل المشي الطويل.",
    en_d:"Six pockets, reinforced knees and a side-elastic waist built for long walks.",
    sizes:["28","30","32","34","36"], out:["28"] },

  { id:6, cat:"bottom", price:120, art:"shorts", c1:"#6C8A4A", c2:"#3D5228",
    ar:"شورت الرحلات سريع الجفاف", en:"Quick-Dry Trail Shorts",
    ar_d:"قماش يجف خلال ٢٠ دقيقة، مناسب للمشي قرب الماء والوديان.",
    en_d:"Dries in 20 minutes — made for trails along water and wadis.",
    sizes:["S","M","L","XL"], out:[] },

  { id:7, cat:"gear", price:540, art:"boots", c1:"#3E5A2A", c2:"#21301A",
    ar:"حذاء الجبال المضاد للانزلاق", en:"Grip Mountain Boots",
    ar_d:"نعل مطاطي بعمق ٥ ملم وكاحل عالٍ يحمي من الالتواء على الصخور.",
    en_d:"5mm rubber lugs and a high ankle that guards against rolls on rock.",
    sizes:["40","41","42","43","44","45"], out:["45"], ar_t:"جديد", en_t:"New" },

  { id:8, cat:"gear", price:390, old:450, art:"bag", c1:"#4C7235", c2:"#26401B",
    ar:"حقيبة ظهر ٤٥ لتر", en:"45L Trekking Backpack",
    ar_d:"هيكل داخلي يوزّع الوزن على الخصر، مع غطاء مطر مدمج في القاع.",
    en_d:"Internal frame that shifts load to the hips, with a rain cover in the base.",
    sizes:["ONE"], out:[], ar_t:"خصم", en_t:"Sale" },

  { id:9, cat:"acc", price:75, art:"hat", c1:"#A9B98F", c2:"#4E6634",
    ar:"قبعة الشمس واسعة الحواف", en:"Wide-Brim Sun Hat",
    ar_d:"حواف ٨ سم بحماية UPF 50+، ورباط ذقن ينفع في الرياح.",
    en_d:"8cm brim rated UPF 50+, with a chin cord that earns its keep in wind.",
    sizes:["ONE"], out:[] },

  { id:10, cat:"outer", price:340, art:"jacket", c1:"#20361A", c2:"#8FA98B",
    ar:"جاكيت مبطّن خفيف", en:"Packable Insulated Jacket",
    ar_d:"حشوة صناعية تُطوى بحجم قبضة اليد، تدفئ حتى صفر درجة.",
    en_d:"Synthetic fill that packs to the size of a fist and warms to 0°C.",
    sizes:["S","M","L","XL"], out:["L"] }
];

/* ═══ ٥. أدوات مساعدة ═══ */
const $ = s => document.querySelector(s);
const num   = n => new Intl.NumberFormat(I18N[lang].locale).format(n);
const money = n => `${num(n)} ${I18N[lang].currency}`;
const pName = p => lang === "ar" ? p.ar   : p.en;
const pDesc = p => lang === "ar" ? p.ar_d : p.en_d;
const pTag  = p => lang === "ar" ? p.ar_t : p.en_t;
const sizeLabel = s => s === "ONE" ? t("size.one") : s;

let filter = "all", current = null, chosenSize = null, toastTimer = null;

function toast(msg){
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3400);
}

// sessionStorage بدل localStorage: كل زيارة/تبويب جديد = سلة فارغة جديدة.
// تُمسح تلقائيًا عند إغلاق المتصفح، ولا تُشارك أبدًا بين أجهزة أو أشخاص مختلفين
// (كل زائر أصلًا معزول تمامًا عن الآخرين حتى مع localStorage، لكن sessionStorage
// يضمن أيضًا أن العودة للموقع لاحقًا تبدأ سلة جديدة).
let cart = [];
try { cart = JSON.parse(sessionStorage.getItem("camp_cart") || "[]") || []; } catch(e) { cart = []; }
const saveCart = () => { try { sessionStorage.setItem("camp_cart", JSON.stringify(cart)); } catch(e){} };

/* ═══ ٦. بناء الصفحة ═══ */
function applyStaticText(){
  const d = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir  = d.dir;
  $("#langLabel").textContent = d.langLabel;
  $("#waDisplay").textContent = "+" + CONFIG.whatsapp;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  $("#cartPanel").setAttribute("aria-label", t("cart.title"));
}

function renderFilters(){
  const box = $("#filters");
  box.innerHTML = "";
  CATS.forEach(c => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = lang === "ar" ? c.ar : c.en;
    b.setAttribute("aria-pressed", String(c.id === filter));
    b.onclick = () => {
      filter = c.id;
      [...box.children].forEach(x => x.setAttribute("aria-pressed","false"));
      b.setAttribute("aria-pressed","true");
      renderGrid();
    };
    box.appendChild(b);
  });
}

function renderGrid(){
  const g = $("#grid");
  g.innerHTML = "";
  const list = PRODUCTS.filter(p => filter === "all" || p.cat === filter);
  if(!list.length){
    g.innerHTML = `<p class="empty">${t("cat.empty")}</p>`;
    return;
  }
  list.forEach(p => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <div class="thumb">
        ${svg(p.art,p.c1,p.c2)}
        ${pTag(p) ? `<span class="tag">${pTag(p)}</span>` : ""}
      </div>
      <div class="card-body">
        <h3>${pName(p)}</h3>
        <p class="meta">${pDesc(p)}</p>
        <div class="price-row">
          <span class="price">${money(p.price)}${p.old ? `<span class="old">${money(p.old)}</span>` : ""}</span>
          <span class="stock">${num(p.sizes.length - p.out.length)} ${t("cat.sizes")}</span>
        </div>
        <button class="pick">${t("card.pick")}</button>
      </div>`;
    el.querySelector(".pick").onclick = () => openProduct(p);
    g.appendChild(el);
  });
}

/* ═══ ٧. نافذة المنتج ═══ */
const modal = $("#modal");

function openProduct(p){
  current = p;
  chosenSize = p.sizes.find(s => !p.out.includes(s)) || null;
  $("#mArt").innerHTML  = svg(p.art,p.c1,p.c2);
  $("#mName").textContent = pName(p);
  $("#mDesc").textContent = pDesc(p);
  $("#mPrice").innerHTML  = money(p.price) + (p.old ? `<span class="old">${money(p.old)}</span>` : "");

  const box = $("#mSizes");
  box.innerHTML = "";
  p.sizes.forEach(s => {
    const b = document.createElement("button");
    b.className = "size";
    b.textContent = sizeLabel(s);
    if(p.out.includes(s)){ b.disabled = true; b.title = t("size.out"); }
    b.setAttribute("aria-pressed", String(s === chosenSize));
    b.onclick = () => {
      chosenSize = s;
      [...box.children].forEach(x => x.setAttribute("aria-pressed","false"));
      b.setAttribute("aria-pressed","true");
    };
    box.appendChild(b);
  });
  modal.showModal();
}

$("#mClose").onclick = () => modal.close();

$("#mAdd").onclick = () => {
  if(!current) return;
  if(!chosenSize){ toast(t("toast.pickSize")); return; }
  const key = current.id + "|" + chosenSize;
  const line = cart.find(l => l.key === key);
  if(line) line.qty++; else cart.push({ key, id: current.id, size: chosenSize, qty: 1 });
  saveCart(); renderCart(); modal.close();
  toast(t("toast.added").replace("{n}", pName(current)).replace("{s}", sizeLabel(chosenSize)));
  openCart();
};

/* ═══ ٨. السلة ═══ */
const panel = $("#cartPanel"), scrim = $("#scrim");

function openCart(){
  scrim.hidden = false;
  requestAnimationFrame(() => scrim.classList.add("open"));
  panel.classList.add("open");
  $("#cartBtn").setAttribute("aria-expanded","true");
}
function closeCart(){
  panel.classList.remove("open");
  scrim.classList.remove("open");
  $("#cartBtn").setAttribute("aria-expanded","false");
  setTimeout(() => { if(!panel.classList.contains("open")) scrim.hidden = true; }, 240);
}
function toggleCart(){ panel.classList.contains("open") ? closeCart() : openCart(); }

$("#cartBtn").onclick   = toggleCart;
$("#closeCart").onclick = closeCart;
scrim.onclick = closeCart;
document.addEventListener("keydown", e => { if(e.key === "Escape") closeCart(); });

const cartTotal = () => cart.reduce((sum,l) => {
  const p = PRODUCTS.find(x => x.id === l.id);
  return p ? sum + p.price * l.qty : sum;
}, 0);

function renderCart(){
  const box = $("#lines");
  box.innerHTML = "";
  const count = cart.reduce((s,l) => s + l.qty, 0);
  const badge = $("#cartCount");
  badge.textContent = num(count);
  badge.hidden = count === 0;
  $("#cartBtn").setAttribute("aria-label", `${t("aria.cart")} (${count})`);

  if(!cart.length){
    box.innerHTML = `<div class="cart-empty">
        ${svg("bag","currentColor","transparent",'style="width:72px"')}
        <p>${t("cart.empty")}</p>
      </div>`;
    $("#cartFoot").hidden = true;
    return;
  }
  $("#cartFoot").hidden = false;

  cart.forEach(l => {
    const p = PRODUCTS.find(x => x.id === l.id);
    if(!p) return;
    const row = document.createElement("div");
    row.className = "line";
    row.innerHTML = `
      <div class="art">${svg(p.art,p.c1,p.c2)}</div>
      <div>
        <h4>${pName(p)}</h4>
        <span class="size-pill">${sizeLabel(l.size)}</span>
        <div class="qty">
          <button class="minus" aria-label="${t("aria.minus")}">−</button>
          <span>${num(l.qty)}</span>
          <button class="plus" aria-label="${t("aria.plus")}">+</button>
        </div>
      </div>
      <div class="end">
        <button class="remove" aria-label="${t("aria.remove")}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13"/></svg>
        </button>
        <span class="sum">${money(p.price * l.qty)}</span>
      </div>`;
    row.querySelector(".minus").onclick = () => {
      l.qty--; if(l.qty < 1) cart = cart.filter(x => x.key !== l.key);
      saveCart(); renderCart();
    };
    row.querySelector(".plus").onclick = () => { l.qty++; saveCart(); renderCart(); };
    row.querySelector(".remove").onclick = () => {
      cart = cart.filter(x => x.key !== l.key);
      saveCart(); renderCart(); toast(t("toast.removed"));
    };
    box.appendChild(row);
  });

  const total = cartTotal();
  $("#total").textContent = money(total);
  $("#shipNote").textContent = total >= CONFIG.freeShipping
    ? t("cart.freeShip")
    : t("cart.addMore").replace("{x}", money(CONFIG.freeShipping - total));
}

$("#clearCart").onclick = () => {
  cart = []; saveCart(); renderCart(); toast(t("toast.cleared"));
};

/* ═══ ٩. واتساب ═══ */
function sendWhatsApp(text){
  window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text), "_blank", "noopener");
}

/* شراء فوري لقطعة واحدة */
$("#mBuyNow").onclick = () => {
  if(!current) return;
  if(!chosenSize){ toast(t("toast.pickSize")); return; }
  const msg =
`${t("wa.hello")} ${CONFIG.storeName} 👋
${t("wa.single")}

• ${pName(current)}
• ${t("wa.size")}: ${sizeLabel(chosenSize)}
• ${t("wa.qty")}: ${num(1)}
• ${t("wa.price")}: ${money(current.price)}

${t("wa.confirm")}`;
  sendWhatsApp(msg);
  modal.close();
};

/* إتمام طلب السلة كاملة */
$("#checkout").onclick = () => {
  if(!cart.length) return;
  const lines = cart.map((l,i) => {
    const p = PRODUCTS.find(x => x.id === l.id);
    return `${num(i+1)}. ${pName(p)}\n   ${t("wa.size")}: ${sizeLabel(l.size)} · ${t("wa.qty")}: ${num(l.qty)} · ${money(p.price * l.qty)}`;
  }).join("\n");
  const total = cartTotal();
  const msg =
`${t("wa.hello")} ${CONFIG.storeName} 👋
${t("wa.order")}

${lines}

${t("wa.total")}: ${money(total)}
${t("wa.ship")}: ${total >= CONFIG.freeShipping ? t("wa.free") : t("wa.byArea")}

${t("wa.name")}:
${t("wa.city")}:
${t("wa.addr")}:
${t("wa.pay")}:`;
  sendWhatsApp(msg);
  closeCart();
  toast(t("toast.wa"));
};

const generalMsg = () => `${t("wa.hello")} ${CONFIG.storeName} 👋\n${t("wa.general")}`;
$("#waFloat").onclick = () => sendWhatsApp(generalMsg());
$("#heroWa").onclick  = () => sendWhatsApp(generalMsg());

/* ═══ ١٠. اللغة والمظهر ═══ */
function setLang(next){
  lang = next;
  try { localStorage.setItem("camp_lang", lang); } catch(e){}
  applyStaticText();
  renderFilters();
  renderGrid();
  renderCart();
}
$("#langBtn").onclick = () => setLang(lang === "ar" ? "en" : "ar");

$("#themeBtn").onclick = () => {
  const root = document.documentElement;
  const isDark = root.getAttribute("data-theme") === "dark"
    || (!root.hasAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
  const next = isDark ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("camp_theme", next); } catch(e){}
};
try {
  const th = localStorage.getItem("camp_theme");
  if(th) document.documentElement.setAttribute("data-theme", th);
} catch(e){}

/* ═══ الإقلاع ═══ */
$("#heroArt").innerHTML = svg("jacket","#3C6329","#C7A03A");
applyStaticText();
renderFilters();
renderGrid();
renderCart();
