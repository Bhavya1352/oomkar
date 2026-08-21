'use client'

import { useMemo, useState } from 'react'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Menu, MessageCircle, Phone, Play, ShieldCheck, Sun, X, Zap } from 'lucide-react'

const solutions = [
  { title: 'Rooftop solar', text: 'High-performance rooftop systems designed around your building, load profile, and long-term energy goals.', icon: Sun },
  { title: 'Industrial EPC', text: 'From feasibility to commissioning, one accountable partner for utility-scale and commercial solar delivery.', icon: Zap },
  { title: 'Solar water pumping', text: 'Reliable, low-operating-cost pumping systems for farms, institutions, and rural infrastructure.', icon: ArrowDownRight },
]

const faqs = [
  ['How does a solar project begin?', 'We start with a site and energy assessment, then shape a system around your roof, consumption, budget, and growth plans.'],
  ['How much can solar reduce my bill?', 'Savings depend on your tariff, daytime usage, roof conditions, and system size. Use the estimator below for an indicative starting point.'],
  ['Do you handle approvals and installation?', 'Yes. Oomkar is positioned as a single EPC partner across design, procurement, installation, commissioning, and support.'],
  ['Where does Oomkar operate?', 'Oomkar Technical Services is based in Baripada, Odisha and serves clients across the region.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [units, setUnits] = useState(650)
  const [faqOpen, setFaqOpen] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const estimated = useMemo(() => Math.round(units * 0.32), [units])

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Oomkar Technical Services home"><span className="brand-mark"><Sun size={18} /></span><span>OOMKAR <em>TECHNICAL SERVICES</em></span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a><a href="#process" onClick={() => setMenuOpen(false)}>How we work</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <ArrowRight size={15} /></a>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow light">Solar energy, engineered for tomorrow</p>
          <h1>Powering progress.<br /><span>Responsibly.</span></h1>
          <p className="hero-copy">Your trusted partner for end-to-end solar EPC solutions across Odisha. Smarter energy begins with a better-built system.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Explore solar solutions <ArrowRight size={17} /></a><a className="text-link light" href="#solutions"><span className="play"><Play size={12} fill="currentColor" /></span> See how we work</a></div>
        </div>
        <div className="hero-bottom page-width"><span>Baripada, Odisha</span><span>Clean energy / clear thinking</span><span className="scroll-label">Scroll to explore <ArrowDownRight size={16} /></span></div>
      </section>

      <section className="intro page-width section-pad"><div className="intro-number">01 <span>/ 04</span></div><div className="intro-body"><p className="eyebrow">The Oomkar approach</p><h2>Solar is not just an installation.<br /><i>It is infrastructure.</i></h2><p className="lede">We combine practical engineering with a clear understanding of your energy needs to build solar systems that work harder, last longer, and make a measurable difference.</p><a className="text-link" href="#contact">Talk to our team <ArrowRight size={16} /></a></div><div className="intro-note"><ShieldCheck size={24} /><p>Transparent advice.<br />Dependable execution.</p></div></section>

      <section className="dark-section section-pad" id="solutions"><div className="page-width"><div className="section-heading"><div><p className="eyebrow light">What we do</p><h2>Built for the way<br /><i>you use energy.</i></h2></div><p>From a first feasibility study to the final switch-on, our work is designed to feel clear, coordinated, and considered.</p></div><div className="solution-grid">{solutions.map(({ title, text, icon: Icon }, i) => <article className="solution" key={title}><span className="solution-index">0{i + 1}</span><Icon size={28} strokeWidth={1.3} /><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn about ${title}`}><ArrowUpRight /></a></article>)}</div></div></section>

      <section className="process section-pad" id="process"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">Simple by design</p><h2>A better route<br /><i>to better energy.</i></h2></div><p>Good projects are built on good communication. Our process keeps every decision visible from first conversation to final handover.</p></div><div className="timeline">{[['Discover', 'We understand your site, usage, aspirations, and constraints.'], ['Design', 'We translate the brief into a practical, high-performing system.'], ['Deliver', 'We coordinate procurement, installation, testing, and commissioning.'], ['Support', 'We stay close with monitoring, guidance, and considered aftercare.']].map(([title, text], i) => <div className="step" key={title}><div className="step-dot">{i + 1}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="estimate section-pad"><div className="page-width estimate-grid"><div><p className="eyebrow">A useful first look</p><h2>What could your<br /><i>roof return?</i></h2><p className="lede">Use this indicative estimator to start a conversation. Your actual opportunity will be shaped by a site assessment.</p><div className="estimate-note"><span>Indicative only</span><p>Figures are estimates, not a quote or guarantee.</p></div></div><div className="calculator"><label htmlFor="units">Average monthly electricity use <strong>{units.toLocaleString()} kWh</strong></label><input id="units" type="range" min="100" max="3000" step="50" value={units} onChange={e => setUnits(Number(e.target.value))} /><div className="range-labels"><span>100 kWh</span><span>3,000 kWh</span></div><div className="calc-result"><span>Potential monthly offset</span><strong>{estimated.toLocaleString()} <small>kWh</small></strong><p>Based on a simplified 32% planning assumption.</p></div><a className="button button-dark" href="#contact">Get a considered estimate <ArrowRight size={17} /></a></div></div></section>

      <section className="projects section-pad" id="projects"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">The work</p><h2>Made to perform.<br /><i>Made to last.</i></h2></div><p>Project photography and performance data will be added as Oomkar's portfolio grows. Every system begins with the same standard: no shortcuts.</p></div><div className="project-grid"><figure className="project-feature"><img src="/images/oomkar-projects.png" alt="Solar engineers inspecting rooftop panels" /><figcaption><span>Field note / 01</span><strong>Engineering with intent</strong></figcaption></figure><figure><img src="/images/oomkar-detail.png" alt="Close-up of photovoltaic solar panels" /><figcaption><span>Field note / 02</span><strong>Precision at every layer</strong></figcaption></figure></div></div></section>

      <section className="faq dark-section section-pad"><div className="page-width faq-grid"><div><p className="eyebrow light">Questions, answered</p><h2>Clarity is part<br /><i>of the service.</i></h2><p className="muted">Still have a question? We would be glad to help you think it through.</p><a className="text-link light" href="#contact">Ask Oomkar <ArrowRight size={16} /></a></div><div>{faqs.map(([q, a], i) => <div className={`faq-item ${faqOpen === i ? 'open' : ''}`} key={q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}><span>{q}</span><ChevronDown size={18} /></button>{faqOpen === i && <p>{a}</p>}</div>)}</div></div></section>

      <section className="contact section-pad" id="contact"><div className="page-width contact-grid"><div><p className="eyebrow">Start a conversation</p><h2>Let&apos;s build a<br /><i>brighter baseline.</i></h2><p className="lede">Tell us a little about what you are looking to power. We will come back with the right next step.</p><div className="contact-details"><a href="tel:+919090909090"><Phone size={17} /> +91 90909 09090</a><a href="mailto:info@oomkartechnicalservices.com"><MessageCircle size={17} /> info@oomkartechnicalservices.com</a><span>Baripada, Odisha</span></div></div><form className="lead-form" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="form-success"><Check size={32} /><h3>Thank you for reaching out.</h3><p>We&apos;ll be in touch to understand your energy goals.</p></div> : <><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Phone<input required name="phone" placeholder="+91" /></label></div><label>Email address<input required type="email" name="email" placeholder="you@company.com" /></label><label>How can we help?<textarea name="message" rows={4} placeholder="Tell us about your site or project" /></label><button className="button button-primary" type="submit">Request a consultation <ArrowRight size={17} /></button><p className="form-footnote">No spam. Just a thoughtful first conversation.</p></>}</form></div></section>

      <footer className="footer"><div className="page-width footer-top"><a href="#top" className="brand"><span className="brand-mark"><Sun size={18} /></span><span>OOMKAR <em>TECHNICAL SERVICES</em></span></a><p>Powering progress. Responsibly.</p><a href="https://wa.me/919090909090" className="whatsapp"><MessageCircle size={17} /> WhatsApp us</a></div><div className="page-width footer-bottom"><span>© 2026 Oomkar Technical Services</span><span>Solar EPC / Odisha</span><span>Designed for a brighter baseline</span></div></footer>
    </main>
  )
}

function ArrowUpRight() { return <ArrowRight className="arrow-up" size={20} /> }
