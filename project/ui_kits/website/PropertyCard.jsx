function PropertyCard({ p, onOpen }) {
  return (
    <article className="pcard" onClick={() => onOpen?.(p.id)}>
      <div className="pcard-img">
        <img src={p.image} alt={p.project} />
        <div className="pcard-tags">
          <span className={`pcard-tag ${p.type === 'Rental' ? 'rental' : 'resale'}`}>{p.type}</span>
          <span className="pcard-tag furn">{p.furnishing}</span>
        </div>
      </div>
      <div className="pcard-body">
        <div className="pcard-loc">
          <Icon name="map-pin" size={12} />
          {p.location}
        </div>
        <div className="pcard-title">{p.project}</div>
        <div className="pcard-meta">
          <span><strong>{p.bhk}</strong> BHK</span>
          <span><strong>{p.area}</strong> sq.ft.</span>
          <span>Floor <strong>{p.floor}</strong></span>
        </div>
        <div className="pcard-details">
          <div>Facing: <span>{p.facing}</span></div>
          <div>Possession: <span>{p.possession}</span></div>
        </div>
        <div className="pcard-foot">
          <div className="pcard-price">
            <small>Price Expected</small>
            {p.priceStr}
          </div>
          <span className="btn btn-secondary btn-compact">Details</span>
        </div>
      </div>
    </article>
  );
}

window.PropertyCard = PropertyCard;
