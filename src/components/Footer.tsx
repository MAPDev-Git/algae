import { useState, useEffect } from 'react';

export default function Footer() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownExitIntent]);

  return (
    <>
      <footer style={{ background: 'var(--brand-dark-slate)', color: 'var(--text-white)', padding: '60px 0 100px 0' }}>
        <div className="container text-center">
          <img src="/Logo.svg" alt="ALGAE Logo" style={{ height: '48px', marginBottom: '1.5rem', display: 'block', margin: '0 auto 1.5rem auto' }} />
          <p style={{ color: 'var(--silver-primary)', marginBottom: '2rem' }}>Plant-Based Ocean Nutrition</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '2rem' }}>
            <a href="#privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silver-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
            <a href="#terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silver-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
            <a href="#cookies" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silver-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>Cookie Policy</a>
          </div>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1rem' }}>
            ₢ 2026 ALGAE & More Than Aromas. All rights reserverd.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Powered by:</span>
            <a href="https://mapweb.utilafull.com/" target="_blank" rel="noopener noreferrer">
              <img src="/logo_mapweb.png" alt="MapWeb" style={{ height: '24px', opacity: 0.8 }} />
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar */}
      <div style={{ 
        position: 'fixed', bottom: 0, left: 0, width: '100%', 
        background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--silver-light)', padding: '12px 0', zIndex: 100,
        boxShadow: '0 -4px 12px rgba(0,0,0,0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 600, color: 'var(--brand-dark-slate)', fontSize: '0.95rem' }}>
            🌿 ALGAE™ Plant-Based Marine Calcium • Save up to 50% Today
          </div>
          <a href="#pricing" className="btn-primary-silver" style={{ padding: '8px 24px', fontSize: '0.95rem' }}>
            CLAIM YOUR OFFER
          </a>
        </div>
      </div>

      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(5px)',
          zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="card-clean-light" style={{ maxWidth: '600px', margin: '20px', textAlign: 'center', position: 'relative' }}>
            <button 
              onClick={() => setShowExitIntent(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              &times;
            </button>
            <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>WAIT! Before You Leave...</h2>
            <h3 style={{ color: '#059669', marginBottom: '1rem' }}>Claim an Extra $10 Off Your First Order!</h3>
            <p style={{ marginBottom: '2rem' }}>
              Don't settle for crushed rock calcium. Try ALGAE today and experience the ocean mineral difference.
            </p>
            <a href="#pricing" className="btn-primary-silver" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', marginBottom: '1rem' }} onClick={() => setShowExitIntent(false)}>
              CLAIM MY $10 DISCOUNT NOW
            </a>
            <button 
              onClick={() => setShowExitIntent(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              No thanks, I'd rather stick with traditional rock calcium.
            </button>
          </div>
        </div>
      )}
    </>
  );
}
