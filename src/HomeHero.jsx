import { useState } from 'react';
import { Icon } from './Icon.jsx';
import { PropertyCard } from './PropertyCard.jsx';

export function HomeHero({ onNav }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Premium Rental &amp; Resale Hub</span>
          <h1>Find Your <span className="accent">Perfect Home</span><br />or Sell Smarter.</h1>
          <p className="lead">
            Backed by a legacy of trust and curated excellence. Century Advantage offers bespoke brokerage services
            connecting buyers, high-net-worth tenants, and property owners in Bengaluru.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => onNav('listings', { type: 'Rental' })}>
              <Icon name="search" size={16} /> Browse Rentals
            </button>
            <button className="btn btn-secondary" onClick={() => onNav('listings', { type: 'Resale' })}>
              Browse Resale
            </button>
            <button className="btn btn-tertiary" onClick={() => onNav('list-property')}>
              List Your Property <Icon name="arrow-right" size={14} />
            </button>
          </div>
          <div className="hero-badges">
            <div className="hero-badge">
              <div className="hero-badge-num">50</div>
              <div className="hero-badge-text"><h4>50 Years Legacy</h4><p>Century Real Estate heritage</p></div>
            </div>
            <div className="hero-badge">
              <div className="hero-badge-num"><Icon name="check-circle" size={18} /></div>
              <div className="hero-badge-text"><h4>Verified Listings</h4><p>100% inspected assets</p></div>
            </div>
            <div className="hero-badge">
              <div className="hero-badge-num">90</div>
              <div className="hero-badge-text"><h4>Day Mandate</h4><p>Guaranteed fast closure</p></div>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80" alt="Century Ethos Penthouse" />
          <div className="hero-media-overlay">
            <span className="hero-media-tag">Featured Residence</span>
            <div className="hero-media-title">Century Ethos Penthouse</div>
            <div className="hero-media-price">Resale · ₹2.4 Cr</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedSection({ listings, onOpen, onNav }) {
  return (
    <section className="section">
      <div className="section-header">
        <span className="eyebrow">Exquisite Handpicked Assets</span>
        <h2 className="section-title" style={{ marginTop: 12 }}>Featured <span className="accent">Advantage</span> Residences</h2>
        <span className="section-rule" />
        <p className="lead">Explore highly sought-after properties directly managed by Century Advantage advisors in Bengaluru's landmark projects.</p>
      </div>
      <div className="cards-grid">
        {listings.slice(0, 3).map(p => <PropertyCard key={p.id} p={p} onOpen={onOpen} />)}
      </div>
      <div className="center-row">
        <button className="btn btn-primary" onClick={() => onNav('listings')}>
          View All Active Inventory <Icon name="arrow-right" size={14} />
        </button>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const [tab, setTab] = useState('tenants');
  const tenantSteps = [
    { ico: 'search', h: 'Connect & Discover', d: 'Browse our fully-verified property list. Submit your brief via the AI agent or any lead form on a listing page.' },
    { ico: 'shield', h: 'Curate & Verify', d: 'A dedicated advisor pre-screens shortlisted residences against your brief — location, layout, owner readiness.' },
    { ico: 'key', h: 'Close & Continue', d: 'We conclude paperwork, possession, and key handover. The advisor stays on as your year-round point of contact.' },
  ];
  const ownerSteps = [
    { ico: 'home', h: 'Connect', d: 'Onboard your property via our intake form. We confirm title, RERA, and possession status within 48 hours.' },
    { ico: 'tag', h: 'Curate', d: 'Professional photography, market-grade pricing, and an exclusivity period of 90 days inside the Century Advantage portfolio.' },
    { ico: 'check-circle', h: 'Close', d: 'Qualified buyers and tenants only. We close in a defined 90-day mandate window or refund the listing fee.' },
  ];
  const steps = tab === 'tenants' ? tenantSteps : ownerSteps;
  return (
    <section className="section-legacy" style={{ padding: '96px 6%' }}>
      <div className="inner">
        <div className="section-header">
          <span className="eyebrow">Simplifying Real Estate</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>The Century <span className="accent">Advantage</span> Process</h2>
          <span className="section-rule" />
          <p className="lead">Curated efficiency at every phase. Select your profile below to see your bespoke three-step timeline.</p>
        </div>
        <div className="tabs-row">
          <button className={`tab-btn${tab === 'tenants' ? ' active' : ''}`} onClick={() => setTab('tenants')}>For Tenants &amp; Buyers</button>
          <button className={`tab-btn${tab === 'owners' ? ' active' : ''}`} onClick={() => setTab('owners')}>For Property Owners</button>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step-num">{i + 1}</div>
              <div className="ico"><Icon name={s.ico} size={32} /></div>
              <h3>{s.h}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-grid">
        <div className="trust-item">
          <div className="trust-num">50<span style={{ fontSize: 24 }}>+</span></div>
          <div className="trust-text"><h4>Years shaping Bengaluru</h4><p>From Century Park (1975) to today's landmark gated communities.</p></div>
        </div>
        <div className="trust-item">
          <div className="trust-num">2,400</div>
          <div className="trust-text"><h4>Verified residences</h4><p>Active inventory across Hebbal, Whitefield, Thanisandra, Sarjapur.</p></div>
        </div>
        <div className="trust-item">
          <div className="trust-num">90</div>
          <div className="trust-text"><h4>Day closure mandate</h4><p>A guaranteed window — or we refund the listing fee in full.</p></div>
        </div>
      </div>
    </section>
  );
}

export function FiveCPromise() {
  const cards = [
    { label: 'Connect', desc: 'Brief us. We listen — locality, layout, lifestyle.' },
    { label: 'Curate', desc: 'A shortlist of three, hand-picked from verified inventory.' },
    { label: 'Care', desc: 'A single advisor walks every visit, every question, every doc.' },
    { label: 'Close', desc: 'Paperwork, possession, key handover — inside the 90-day mandate.' },
    { label: 'Continue', desc: 'We stay on. Renewal, exit, the next residence — same advisor.' },
  ];
  return (
    <section className="fivec-band">
      <div className="fivec-inner">
        <div className="fivec-lede">
          <span className="eyebrow">The Five-C Promise</span>
          <h2 style={{ marginTop: 12 }}>Five steps. <em>One advisor.</em><br />From brief to key.</h2>
          <p>Each phase has a deliverable, a timeline, and a name attached. We don't hand you off mid-journey.</p>
        </div>
        <div className="fivec-list">
          {cards.map((c, i) => (
            <div key={c.label} className="fivec-card">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <div className="label">{c.label}.</div>
              <div className="desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MistOwnerBand({ onNav }) {
  return (
    <section className="mist-band">
      <div className="mist-inner">
        <div>
          <span className="eyebrow" style={{ color: 'var(--ca-legacy)' }}>For Property Owners</span>
          <h3 style={{ marginTop: 10 }}>List with the <em>90-day mandate</em>.</h3>
          <p>Professional photography, market-grade pricing, qualified buyers only. We close in ninety days — or refund the listing fee in full.</p>
        </div>
        <button className="btn ember-cta" onClick={() => onNav('list-property')}>
          List Your Asset <Icon name="arrow-right" size={14} />
        </button>
      </div>
    </section>
  );
}
