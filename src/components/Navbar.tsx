export default function Navbar() {
  return (
    <>
      <div style={{ background: 'var(--brand-dark-slate)', color: 'white', textAlign: 'center', padding: '10px', fontSize: '0.875rem', fontWeight: 500 }}>
        🌿 LIMITED TIME OFFER: Save up to 50% On Plant-Based Marine Calcium • Free U.S. Shipping On Multi-Packs • 90-Day Guarantee
      </div>
      <header style={{ 
        position: 'sticky', top: 0, zIndex: 50, 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--silver-light)' 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/Logo.svg" alt="ALGAE Logo" style={{ height: '32px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>ALGAE™</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'none' }} className="nav-tagline">| Plant-Based Ocean Nutrition</span>
          </div>
          
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="#science" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>The Science</a>
            <a href="#formula" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>4-Stage Formula</a>
            <a href="#comparison" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>Comparison</a>
            <a href="#reviews" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>Reviews</a>
            <a href="#pricing" className="btn-primary-silver" style={{ padding: '8px 24px', fontSize: '0.95rem' }}>ORDER NOW</a>
          </nav>
        </div>
      </header>
    </>
  );
}
