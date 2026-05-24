import { useState } from 'react';
import { Icon } from './Icon.jsx';

export function LeadForm({ compact }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="lead-card" style={compact ? { position: 'static' } : undefined}>
      <h3>Schedule a Site Visit</h3>
      <p className="sub">A Century advisor will respond within 4 hours.</p>
      {sent ? (
        <div style={{ textAlign: 'center', padding: '24px 0', color: 'var(--status-success)', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500 }}>
          <Icon name="check-circle" size={32} style={{ margin: '0 auto 12px', display: 'block', color: 'var(--status-success)' }} />
          Request received.<br />An advisor is being matched.
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <div className="field">
            <label className="field-label">Full Name</label>
            <input className="field-input" placeholder="Aarav Kapoor" required />
          </div>
          <div className="field">
            <label className="field-label">Mobile</label>
            <input className="field-input" placeholder="+91 98xxx xxxxx" required />
          </div>
          <div className="field">
            <label className="field-label">Email</label>
            <input className="field-input" type="email" placeholder="aarav@example.com" />
          </div>
          <div className="field">
            <label className="field-label">Preferred Date</label>
            <input className="field-input" type="date" />
          </div>
          <button className="btn btn-primary" type="submit">Submit Request</button>
        </form>
      )}
    </div>
  );
}
