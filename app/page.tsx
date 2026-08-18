"use client";

import { FormEvent, useState } from "react";

const ArrowUpRight = () => <span aria-hidden="true" className="arrow">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Ana menü">
          <a className="wordmark" href="#top" aria-label="yckdijital ana sayfa">
            <span>yckdijital</span><i>.</i>
            <small>digital marketing agency</small>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menüyü aç">
            <span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a onClick={() => setMenuOpen(false)} href="#hizmetler">Hizmetler</a>
            <a onClick={() => setMenuOpen(false)} href="#neden-biz">Neden biz?</a>
            <a onClick={() => setMenuOpen(false)} href="#surec">Süreç</a>
            <a className="nav-cta" onClick={() => setMenuOpen(false)} href="#iletisim">Ücretsiz analiz <ArrowUpRight /></a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> PERFORMANS ODAKLI DİJİTAL AJANS</p>
          <h1>Reklam bütçenizi<br /><em>büyümeye</em> dönüştürüyoruz.</h1>
          <p className="hero-text">Google Ads, Meta reklamları ve dönüşüm odaklı web siteleriyle yerel işletmelerin ve e-ticaret markalarının sürdürülebilir büyümesine yardımcı oluyoruz.</p>
          <div className="hero-actions">
            <a className="button primary" href="#iletisim">Ücretsiz strateji görüşmesi <ArrowUpRight /></a>
            <a className="text-link" href="#hizmetler">Neler yapıyoruz? <span>↓</span></a>
          </div>
          <div className="trust-row">
            <div className="partner-mark"><b>G</b><span>Google<br />Partner</span></div>
            <p>Veriye dayalı stratejiler.<br /><strong>Şeffaf, ölçülebilir sonuçlar.</strong></p>
          </div>
        </div>
        <div className="hero-art" aria-label="Performans grafiği görseli">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="metric-card metric-main"><span>Reklam performansı</span><b>+184<span>%</span></b><small>son 90 gün <i>↗</i></small></div>
          <div className="chart-card"><div className="chart-title"><span>Dönüşüm trendi</span><b>12.8K</b></div><svg viewBox="0 0 340 112" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#c7f03d" stopOpacity=".38"/><stop offset="1" stopColor="#c7f03d" stopOpacity="0"/></linearGradient></defs><path d="M0 101 C23 92 27 96 47 75 S73 77 91 64 S115 85 139 59 S167 62 183 43 S212 54 232 30 S260 48 281 22 S312 25 340 5 V112 H0Z" fill="url(#fill)"/><path d="M0 101 C23 92 27 96 47 75 S73 77 91 64 S115 85 139 59 S167 62 183 43 S212 54 232 30 S260 48 281 22 S312 25 340 5" fill="none" stroke="#c7f03d" strokeWidth="3"/></svg></div>
          <div className="metric-card metric-small"><span>ROAS</span><b>6.4x</b><small>ortalama getiri</small></div>
          <div className="grain" />
        </div>
      </section>

      <section className="brands shell"><span>GÜÇLÜ BÜYÜME İÇİN</span><div>GOOGLE ADS <i /> META <i /> WEB <i /> SEO</div></section>

      <section id="hizmetler" className="services shell">
        <div className="section-intro"><p className="eyebrow"><span /> HİZMETLERİMİZ</p><h2>Tek ekiple, <em>tam</em> dijital güç.</h2><p>Birbirinden kopuk işler değil; her kanalı birlikte çalışan, ölçülebilir bir büyüme sistemi olarak kuruyoruz.</p></div>
        <div className="service-grid">
          <article className="service-card featured"><div className="service-no">01</div><div className="service-icon">◉</div><h3>Google Ads<br />Yönetimi</h3><p>Arama, alışveriş, Performance Max ve yeniden pazarlama kampanyalarıyla doğru zamanda, doğru müşteriye ulaşın.</p><a href="#iletisim">Detayları keşfet <ArrowUpRight /></a><div className="card-art art-search"><span>Google Ads</span><b>Satış odaklı<br />kampanyalar</b></div></article>
          <article className="service-card"><div className="service-no">02</div><div className="service-icon">✦</div><h3>Meta Reklam<br />Yönetimi</h3><p>Instagram ve Facebook’ta markanızın dikkat çekmesini, talep toplamasını ve büyümesini sağlıyoruz.</p><a href="#iletisim">Detayları keşfet <ArrowUpRight /></a></article>
          <article className="service-card"><div className="service-no">03</div><div className="service-icon">⌘</div><h3>Web Tasarım<br />& SEO</h3><p>Hızlı, ikna edici ve Google’ın sevdiği; reklam trafiğini müşteriye dönüştüren web siteleri tasarlıyoruz.</p><a href="#iletisim">Detayları keşfet <ArrowUpRight /></a></article>
        </div>
      </section>

      <section id="neden-biz" className="dark-section"><div className="shell difference"><div><p className="eyebrow light"><span /> YCKDİJİTAL FARKI</p><h2>Her tıklama<br />bir <em>fırsat</em> olmalı.</h2></div><div className="difference-copy"><p>Reklamı sadece yayınlamıyoruz. Doğru mesajı, doğru açılış sayfası ve doğru ölçümleme altyapısıyla tek bir büyüme makinesine dönüştürüyoruz.</p><a className="button lime" href="#iletisim">İşletmenizi birlikte büyütelim <ArrowUpRight /></a></div></div><div className="shell stat-grid"><div><b>360°</b><span>Uçtan uca dijital strateji</span></div><div><b>7/24</b><span>Ölçümleme ve optimizasyon</span></div><div><b>100%</b><span>Şeffaf raporlama yaklaşımı</span></div></div></section>

      <section id="surec" className="process shell"><div className="section-intro"><p className="eyebrow"><span /> NASIL ÇALIŞIYORUZ?</p><h2>Net strateji.<br /><em>Gerçek</em> sonuçlar.</h2></div><ol><li><b>01</b><div><h3>Tanışma & analiz</h3><p>Hedeflerinizi, müşterilerinizi ve mevcut dijital varlıklarınızı birlikte değerlendiririz.</p></div></li><li><b>02</b><div><h3>Strateji & kurulum</h3><p>Size özel kampanya, web deneyimi ve ölçümleme planını hayata geçiririz.</p></div></li><li><b>03</b><div><h3>Optimizasyon & büyüme</h3><p>Veriyi takip eder, sürekli test eder ve bütçenizi en verimli noktaya taşırız.</p></div></li></ol></section>

      <section id="iletisim" className="contact shell"><div className="contact-panel"><p className="eyebrow light"><span /> HAZIR MISINIZ?</p><h2>Markanızın sıradaki<br /><em>büyüme hikâyesi</em><br />sizinki olsun.</h2><p>30 dakikalık ücretsiz strateji görüşmesinde işletmeniz için fırsatları birlikte değerlendirelim.</p><div className="contact-note"><span>●</span> Genellikle aynı iş günü içinde dönüş yaparız.</div></div><form onSubmit={submitForm} className="lead-form"><h3>Ücretsiz görüşme talep edin</h3>{submitted ? <div className="success"><b>Teşekkürler.</b><p>Talebinizi aldık. En kısa sürede sizinle iletişime geçeceğiz.</p></div> : <><label>Adınız soyadınız<input required name="name" placeholder="Adınız soyadınız" /></label><label>Telefon numaranız<input required name="phone" type="tel" placeholder="05XX XXX XX XX" /></label><label>Hangi konuda desteğe ihtiyacınız var?<select name="service" defaultValue=""><option value="" disabled>Hizmet seçin</option><option>Google Ads Yönetimi</option><option>Meta Reklam Yönetimi</option><option>Web Tasarım & SEO</option><option>Diğer</option></select></label><button className="button primary" type="submit">Görüşme talep et <ArrowUpRight /></button><small>Göndererek iletişim bilgilerinizle dönüş yapılmasını kabul etmiş olursunuz.</small></>}</form></section>

      <footer className="footer shell"><a className="wordmark footer-logo" href="#top"><span>yckdijital</span><i>.</i><small>digital marketing agency</small></a><p>Performans odaklı dijital büyüme.</p><a href="mailto:merhaba@yckdijital.com">merhaba@yckdijital.com</a><span>© {new Date().getFullYear()} yckdijital</span></footer>
    </main>
  );
}
