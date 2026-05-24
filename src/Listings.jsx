import { Icon } from './Icon.jsx';
import { PropertyCard } from './PropertyCard.jsx';

function FilterBar({ value, onChange }) {
  const v = value;
  const set = (k, val) => onChange({ ...v, [k]: val });
  return (
    <div className="filter-bar">
      <div className="filter-grid">
        <div className="field">
          <label className="field-label">Property Type</label>
          <select className="field-select" value={v.type || ''} onChange={e => set('type', e.target.value)}>
            <option value="">All Properties</option>
            <option value="Rental">Rentals Only</option>
            <option value="Resale">Resales Only</option>
          </select>
        </div>
        <div className="field">
          <label className="field-label">Bedrooms</label>
          <select className="field-select" value={v.bhk || ''} onChange={e => set('bhk', e.target.value)}>
            <option value="">Any BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK</option>
          </select>
        </div>
        <div className="field">
          <label className="field-label">Max Budget</label>
          <select className="field-select" value={v.budget || ''} onChange={e => set('budget', e.target.value)}>
            <option value="">Any Budget</option>
            <optgroup label="Rentals">
              <option value="50000">Below ₹50,000/mo</option>
              <option value="100000">Below ₹1 Lakh/mo</option>
              <option value="200000">Below ₹2 Lakh/mo</option>
            </optgroup>
            <optgroup label="Resale">
              <option value="20000000">Below ₹2 Cr</option>
              <option value="30000000">Below ₹3 Cr</option>
              <option value="50000000">Below ₹5 Cr</option>
            </optgroup>
          </select>
        </div>
        <div className="field">
          <label className="field-label">Location</label>
          <select className="field-select" value={v.location || ''} onChange={e => set('location', e.target.value)}>
            <option value="">Any Location</option>
            <option value="Hebbal">Hebbal</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Thanisandra">Thanisandra</option>
            <option value="Sarjapur">Sarjapur Road</option>
            <option value="Jakkur">Jakkur</option>
          </select>
        </div>
        <div className="field">
          <label className="field-label">Furnishing</label>
          <select className="field-select" value={v.furnishing || ''} onChange={e => set('furnishing', e.target.value)}>
            <option value="">Any Status</option>
            <option value="Fully Furnished">Fully Furnished</option>
            <option value="Semi Furnished">Semi Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>
        <button className="btn btn-secondary btn-compact" onClick={() => onChange({})}>Reset</button>
      </div>
    </div>
  );
}

export function ListingsPage({ allListings, filters, onChangeFilters, onOpen }) {
  const filtered = allListings.filter(p => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.bhk && p.bhk !== parseInt(filters.bhk)) return false;
    if (filters.location && !p.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.furnishing && p.furnishing !== filters.furnishing) return false;
    if (filters.budget && p.price > parseInt(filters.budget)) return false;
    return true;
  });
  return (
    <div>
      <div className="listings-head">
        <span className="eyebrow">Exquisite Curated Inventory</span>
        <h1>Explore Premium <span className="accent">Residences</span></h1>
        <p>Filter and discover verified rental or resale properties in Bengaluru's most sought-after developments.</p>
      </div>
      <div className="listings-wrap">
        <FilterBar value={filters} onChange={onChangeFilters} />
        {filtered.length === 0 ? (
          <div style={{ padding: '80px 20px', textAlign: 'center', color: 'var(--fg-2)' }}>
            <Icon name="search" size={36} style={{ color: 'var(--ca-ember)', margin: '0 auto 16px', display: 'block' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--fg-1)', marginBottom: 6 }}>No matching residences</h3>
            <p style={{ fontSize: 14 }}>Try adjusting your filters, or chat with the AI agent on the right for a curated shortlist.</p>
          </div>
        ) : (
          <div className="cards-grid">
            {filtered.map(p => <PropertyCard key={p.id} p={p} onOpen={onOpen} />)}
          </div>
        )}
      </div>
    </div>
  );
}
