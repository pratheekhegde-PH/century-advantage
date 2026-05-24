function Header({ route, onNav }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'listings', label: 'Browse Properties' },
    { id: 'list-property', label: 'List Your Property' },
    { id: 'about', label: 'About Legacy' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header className="ca-header">
      <a href="#" onClick={e => { e.preventDefault(); onNav('home'); }}>
        <img className="logo" src="../../assets/logo/century-advantage-purple-black.png" alt="Century Advantage" />
      </a>
      <nav className="ca-nav">
        {navItems.map(n => (
          <a key={n.id}
             href="#"
             className={route === n.id ? 'active' : ''}
             onClick={e => { e.preventDefault(); onNav(n.id); }}>
            {n.label}
          </a>
        ))}
      </nav>
      <div className="ca-header-ctas">
        <button className="btn btn-secondary btn-compact" onClick={() => onNav('listings', { type: 'Rental' })}>Rentals</button>
        <button className="btn btn-primary btn-compact" onClick={() => onNav('listings', { type: 'Resale' })}>Resale</button>
      </div>
    </header>
  );
}

window.Header = Header;
