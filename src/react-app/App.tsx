import "./App.css";

const days = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const slots = [9, 10, 11, 12, 13, 14, 15];
const appointments = [
  { day: 1, start: 10, duration: 2, tone: "blue" },
  { day: 2, start: 12, duration: 2, tone: "violet" },
  { day: 3, start: 9, duration: 2, tone: "mint" },
  { day: 4, start: 11, duration: 3, tone: "blue" },
  { day: 5, start: 13, duration: 2, tone: "violet" },
];
const products = [
  { className: "product-headphones", shape: "◉" },
  { className: "product-lamp", shape: "◕" },
  { className: "product-bag", shape: "▢" },
];
function CalendarPreview() {
  return (
    <div className="showcase-card calendar-card" aria-label="Örnek haftalık randevu takvimi">
      <div className="card-top"><span className="tiny-icon">▦</span><span>Takvim görünümü</span><span className="card-top-right">Haftalık <span>⌄</span></span></div>
      <div className="calendar-heading"><div><span className="micro-label">PLANLAMA</span><strong>Kasım 2026</strong></div><div className="cal-nav"><span>‹</span><span>›</span></div></div>
      <div className="calendar-grid">
        <div className="calendar-days"><span />{days.map((day, i) => <span key={day} className={i === 3 ? "selected-day" : ""}>{day}<b>{9 + i}</b></span>)}</div>
        <div className="calendar-body">
          <div className="hour-column">{slots.map((hour) => <span key={hour}>{String(hour).padStart(2, "0")}:00</span>)}</div>
          <div className="day-columns">{days.map((day, i) => <div key={day} className="day-column">{slots.map((hour) => <div className="hour-cell" key={hour} />)}{appointments.filter(a => a.day === i).map(a => <div key={a.start} className={`appointment-block ${a.tone}`} style={{ top: `${(a.start - 9) * 14.2857 + 1}%`, height: `${a.duration * 14.2857 - 2}%` }}><span className="appt-line" /><span className="appt-line short" /></div>)}</div>)}</div>
        </div>
      </div>
      <div className="card-foot"><span className="foot-dot" /> Akıllı planlama <span className="foot-right">01 / 02</span></div>
    </div>
  );
}
function CommercePreview() {
  return (
    <div className="showcase-card commerce-card" aria-label="Örnek e-ticaret yönetim ekranı">
      <div className="card-top"><span className="tiny-icon">▧</span><span>Mağaza görünümü</span><span className="card-top-right">Genel bakış <span>⌄</span></span></div>
      <div className="commerce-heading"><span className="micro-label">DİJİTAL TİCARET</span><strong>Her şey tek ekranda.</strong></div>
      <div className="stat-row"><div className="stat"><span>Siparişler</span><strong>1.284</strong><small>↗ 12.8%</small></div><div className="stat"><span>Aktif ürünler</span><strong>248</strong><small>↗ 8.2%</small></div></div>
      <div className="product-title"><span>Öne çıkan ürünler</span><span>•••</span></div>
      <div className="products">{products.map((p,i) => <div className="product" key={p.className}><div className={`product-image ${p.className}`}><span>{p.shape}</span></div><div className="product-skeleton"/><div className="product-skeleton small"/></div>)}</div>
      <div className="card-foot"><span className="foot-dot mint-dot" /> Kolay yönetim <span className="foot-right">02 / 02</span></div>
    </div>
  );
}
function App() {
  return (
    <div className="site">
      <div className="site-grid" aria-hidden="true" />
      <div className="site-wrap">
        <header className="header"><a className="brand" href="/" aria-label="JavaSistem ana sayfa"><span className="brand-mark"><i/><i/><i/><i/></span><span>java<em>sistem</em></span></a><div className="header-status"><span className="live-dot" /> YENİLENİYORUZ</div></header>
        <main className="main">
          <div className="hero-copy"><div className="eyebrow"><span /> DİJİTAL DENEYİMLER TASARLIYORUZ</div><h1>Fikirden<br/><em>geleceğe.</em></h1><p>İşleri kolaylaştıran, zamanı değerli kılan ve dijital dünyayı daha erişilebilir hale getiren çözümler üzerinde çalışıyoruz.</p><div className="coming"><span className="coming-line"/><span>YENİ WEB SİTEMİZ ÇOK YAKINDA</span></div></div>
          <div className="visual-area" aria-label="Randevu takvimi ve e-ticaret arayüzü görselleri"><div className="visual-glow" /><div className="visual-caption">DİJİTAL ÇÖZÜMLER <span>—</span> 2026</div><CalendarPreview/><CommercePreview/><div className="visual-accent">✳</div></div>
        </main>
        <footer className="footer"><span>© {new Date().getFullYear()} JavaSistem</span><span className="footer-center">TEKNOLOJİYLE HAYATA DEĞER KATIYORUZ.</span><a href="https://javasistem.com">javasistem.com <span>↗</span></a></footer>
      </div>
    </div>
  );
}
export default App;
