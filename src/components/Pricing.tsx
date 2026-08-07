export default function Pricing() {
  return (
    <section className="section bg-light" id="pricing">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Select Your Package Below & Save Up To 50% Today</h2>
        </div>

        <div className="grid grid-cols-3 gap-8" style={{ alignItems: 'center' }}>
          
          {/* Starter Kit */}
          <div className="card-clean-light" style={{ display: 'flex', flexDirection: 'column', padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>STARTER KIT</h3>
            <p className="text-center text-muted" style={{ marginBottom: '1.5rem' }}>1-Month Supply (90 Capsules)</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <img src="/ALGAE_Bottle_3000x3000_SF.png" alt="1 Bottle of ALGAE" style={{ height: '150px', objectFit: 'contain' }} />
            </div>
            
            <div className="text-center" style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>$49</span><span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>.00 / bottle</span>
              <p style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Retail: $59.00</p>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2rem', flexGrow: 1 }}>
              <li style={{ display: 'flex', gap: '8px' }}><span>✓</span> Standard Shipping ($4.95)</li>
              <li style={{ display: 'flex', gap: '8px' }}><span>✓</span> 90-Day Money-Back Guarantee</li>
            </ul>
            
            <a href="#checkout" className="btn-primary-silver" style={{ width: '100%', padding: '16px', fontSize: '1rem' }}>BUY 1 BOTTLE NOW</a>
          </div>

          {/* Best Value */}
          <div className="card-clean-light" style={{ display: 'flex', flexDirection: 'column', padding: '40px', border: '2px solid var(--silver-primary)', transform: 'scale(1.05)', zIndex: 10, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', background: 'var(--brand-dark-slate)', color: 'white', padding: '6px 16px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>
              SAVE $150 (51% OFF)
            </div>
            
            <h3 style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '0.5rem', color: 'var(--brand-dark-slate)' }}>BEST VALUE</h3>
            <p className="text-center text-muted" style={{ marginBottom: '1.5rem' }}>5-Month Supply (450 Capsules)</p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <img src="/5Bottles.png" alt="5 Bottles of ALGAE" style={{ height: '200px', objectFit: 'contain' }} />
            </div>
            
            <div className="text-center" style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800 }}>$29</span><span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>.00 / bottle</span>
              <p style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Retail: $295.00 (Total: $145.00)</p>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2.5rem', flexGrow: 1, fontWeight: 500 }}>
              <li style={{ display: 'flex', gap: '8px' }}><span>✓</span> <strong>FREE</strong> Expedited U.S. Shipping</li>
              <li style={{ display: 'flex', gap: '8px' }}><span>✓</span> <strong>FREE</strong> Bone Health E-Book</li>
              <li style={{ display: 'flex', gap: '8px' }}><span>✓</span> 90-Day Money-Back Guarantee</li>
            </ul>
            
            <a href="#checkout" className="btn-primary-silver" style={{ width: '100%', padding: '18px', fontSize: '1.05rem' }}>CLAIM 5 BOTTLES</a>
          </div>

          {/* Most Popular */}
          <div className="card-clean-light" style={{ display: 'flex', flexDirection: 'column', padding: '32px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--silver-light)', color: 'var(--brand-dark-slate)', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>
              SAVE $60 (35% OFF)
            </div>
            <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>MOST POPULAR</h3>
            <p className="text-center text-muted" style={{ marginBottom: '1.5rem' }}>3-Month Supply (270 Capsules)</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <img src="/3Bottles.png" alt="3 Bottles of ALGAE" style={{ height: '150px', objectFit: 'contain' }} />
            </div>
            
            <div className="text-center" style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>$39</span><span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>.00 / bottle</span>
              <p style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Retail: $177.00 (Total: $117.00)</p>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2rem', flexGrow: 1 }}>
              <li style={{ display: 'flex', gap: '8px' }}><span>✓</span> <strong>FREE</strong> Standard U.S. Shipping</li>
              <li style={{ display: 'flex', gap: '8px' }}><span>✓</span> 90-Day Money-Back Guarantee</li>
            </ul>
            
            <a href="#checkout" className="btn-primary-silver" style={{ width: '100%', padding: '16px', fontSize: '1rem' }}>CLAIM 3 BOTTLES</a>
          </div>

        </div>
      </div>
    </section>
  );
}
