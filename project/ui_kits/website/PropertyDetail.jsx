function PropertyDetail({ id, onBack }) {
  const p = window.CA_MOCKS.listings.find(x => x.id === id) || window.CA_MOCKS.listings[0];
  const galleryAlts = [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80',
  ];
  const specs = [
    ['BHK Configuration', p.bhk + ' BHK'],
    ['Carpet Area', p.area + ' sq.ft.'],
    ['Floor', p.floor],
    ['Facing', p.facing],
    ['Furnishing', p.furnishing],
    ['Possession', p.possession],
  ];
  return (
    <div className="detail">
      <a href="#" className="detail-back" onClick={e => { e.preventDefault(); onBack(); }}>
        <Icon name="arrow-left" size={14}/> Back to Listings
      </a>
      <div className="gallery">
        <div className="gallery-main"><img src={p.image} alt={p.project}/></div>
        <div className="gallery-thumbs">
          <div><img src={galleryAlts[0]} alt=""/></div>
          <div><img src={galleryAlts[1]} alt=""/></div>
        </div>
      </div>
      <div className="detail-grid">
        <div className="detail-body">
          <div className="detail-header">
            <div>
              <span className="eyebrow" style={{display:'inline-flex', alignItems:'center', gap:6}}>
                <Icon name="map-pin" size={12}/> {p.location}
              </span>
              <h1 style={{marginTop:8}}>{p.project}</h1>
              <div style={{display:'flex', gap:8, marginTop:6}}>
                <span className={`pcard-tag ${p.type === 'Rental' ? 'rental' : 'resale'}`}>{p.type}</span>
                <span className="pcard-tag furn">{p.furnishing}</span>
              </div>
            </div>
            <div className="detail-price">
              <small>Price Expected</small>
              {p.priceStr}
            </div>
          </div>

          <h3>Specifications</h3>
          <div className="specs-table">
            {specs.map(([k,v]) => (
              <div className="spec-cell" key={k}>
                <div className="label">{k}</div>
                <div className="value">{v}</div>
              </div>
            ))}
          </div>

          <h3>About the Residence</h3>
          <p className="body">
            {p.tagline}. A meticulously maintained {p.bhk}-bedroom residence inside the {p.project} development —
            one of Century Real Estate's most-sought-after Bengaluru projects. Inspected by our advisor team,
            with verified title, RERA registration, and immediate possession readiness. The interiors carry the
            developer's signature high-quality finishes; the {p.facing.toLowerCase()}-facing balcony pulls
            natural light through the day.
          </p>

          <h3>Amenities</h3>
          <div className="amenities-grid">
            {window.CA_MOCKS.amenities.map(a => (
              <div className="amenity" key={a}>
                <span className="ico"><Icon name="check" size={16}/></span> {a}
              </div>
            ))}
          </div>

          <h3>Nearby</h3>
          <div className="facility-row">
            {window.CA_MOCKS.nearby.map(n => (
              <span className="facility-chip" key={n}>
                <Icon name="map-pin" size={12}/> {n}
              </span>
            ))}
          </div>
        </div>

        <aside>
          <LeadForm/>
        </aside>
      </div>
    </div>
  );
}

window.PropertyDetail = PropertyDetail;
