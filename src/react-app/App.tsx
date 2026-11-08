import "./App.css";

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <div className="page-inner">
        <header className="site-header">
          <a className="brand" href="/" aria-label="JavaSistem ana sayfa">
            <span className="brand-symbol" aria-hidden="true"><span /><span /><span /><span /></span>
            <span className="brand-word">java<span>sistem</span></span>
          </a>
          <span className="header-note"><span className="status-dot" /> YENİLENİYORUZ</span>
        </header>

        <main className="hero">
          <div className="eyebrow"><span className="eyebrow-line" /> YENİ BİR DİJİTAL DENEYİM</div>
          <h1>Geleceğe hazır.<br /><span>Yakında yayında.</span></h1>
          <p className="hero-description">Daha hızlı, daha yalın ve daha güçlü bir dijital deneyim için hazırlanıyoruz.</p>
          <div className="hero-divider" aria-hidden="true"><span /></div>
          <p className="hero-caption">TEKNOLOJİYLE HAYATA DEĞER KATIYORUZ.</p>
        </main>

        <div className="corner-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />
          <div className="art-glow" />
          <div className="art-cross cross-one">+</div>
          <div className="art-cross cross-two">+</div>
        </div>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} JavaSistem. Tüm hakları saklıdır.</span>
          <a href="https://javasistem.com" rel="noopener noreferrer">javasistem.com <span aria-hidden="true">↗</span></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
