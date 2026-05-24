import { useState } from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { HomeHero, FeaturedSection, FiveCPromise, HowItWorks, MistOwnerBand, TrustStrip } from './HomeHero.jsx';
import { ListingsPage } from './Listings.jsx';
import { PropertyDetail } from './PropertyDetail.jsx';
import { AIConsole } from './AIConsole.jsx';
import { LeadForm } from './LeadForm.jsx';
import { Icon } from './Icon.jsx';
import { listings } from './data/listings.js';

function StaticPage({ route, onNav }) {
  const config = {
    'list-property': {
      eyebrow: 'Owner Intake',
      title: <>List Your <span style={{ color: 'var(--ca-ember)' }}>Asset</span></>,
      body: 'Submit your residence for inclusion in the Century Advantage portfolio. A relationship manager will reach out within 24 hours to begin verification.',
    },
    about: {
      eyebrow: 'Century Heritage',
      title: <>Fifty Years of <span style={{ color: 'var(--ca-ember)' }}>Bengaluru</span></>,
      body: 'From Century Park (1975) to today’s landmark gated communities, Century Real Estate has helped shape the Bengaluru skyline. Century Advantage is its concierge for rental and resale.',
    },
    contact: {
      eyebrow: 'Connect With Us',
      title: <>Talk to an <span style={{ color: 'var(--ca-ember)' }}>Advisor</span></>,
      body: 'Reach the Century Advantage office on Kasturba Road. We respond within four hours on weekdays.',
    },
  };
  const page = config[route];
  return (
    <section style={{ padding: '120px 6%', maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
      <span className="eyebrow">{page.eyebrow}</span>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 500, letterSpacing: '-0.01em', margin: '16px 0 12px' }}>
        {page.title}
      </h1>
      <span className="section-rule" />
      <p style={{ marginTop: 24, fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.6 }}>{page.body}</p>
      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
        <LeadForm compact />
      </div>
    </section>
  );
}

export function App() {
  const [route, setRoute] = useState({ page: 'home', params: {} });
  const [filters, setFilters] = useState({});
  const [aiOpen, setAIOpen] = useState(false);

  const navigate = (page, params = {}) => {
    if (page === 'listings') {
      const newFilters = {};
      if (params.type) newFilters.type = params.type;
      if (params.location) newFilters.location = params.location;
      setFilters(newFilters);
    }
    setRoute({ page, params });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openProperty = (id) => navigate('detail', { id });
  const currentListing = listings.find(p => p.id === route.params.id) || listings[0];

  return (
    <>
      <Header route={route.page} onNav={navigate} />
      <main className="ca-page">
        {route.page === 'home' && (
          <>
            <HomeHero onNav={navigate} />
            <FeaturedSection listings={listings} onOpen={openProperty} onNav={navigate} />
            <FiveCPromise />
            <HowItWorks />
            <MistOwnerBand onNav={navigate} />
            <TrustStrip />
          </>
        )}
        {route.page === 'listings' && (
          <ListingsPage
            allListings={listings}
            filters={filters}
            onChangeFilters={setFilters}
            onOpen={openProperty}
          />
        )}
        {route.page === 'detail' && (
          <PropertyDetail listing={currentListing} onBack={() => navigate('listings')} />
        )}
        {['list-property', 'about', 'contact'].includes(route.page) && (
          <StaticPage route={route.page} onNav={navigate} />
        )}
      </main>
      <Footer />
      <AIConsole open={aiOpen} onOpen={() => setAIOpen(true)} onClose={() => setAIOpen(false)} />
    </>
  );
}
