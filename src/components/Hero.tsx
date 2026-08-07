import { CheckCircle, ShieldCheck, Leaf, FlaskConical, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section bg-light" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-8">
          
          <div className="flex-col gap-4">
            <div className="badge-label-black" style={{ marginBottom: '1.5rem' }}>
              <Leaf size={16} />
              100% PLANT-BASED OCEAN MINERAL COMPLEX • NO CRUSHED ROCKS
            </div>
            
            <h1 style={{ marginBottom: '1rem' }}>Stop Swallowing <br/>Crushed Rocks.</h1>
            <h2 style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 500 }}>
              Rebuild Stronger, More Flexible Bones with Ocean-Harvested Red Algae.
            </h2>
            
            <p className="lead" style={{ marginBottom: '2rem' }}>
              The clinically formulated, 100% plant-derived marine calcium complex powered by 72 ionic ocean minerals, Vitamin D3, Vitamin K2 (MK-7), and Vitamin C.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle color="var(--silver-primary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>2,000 mg Pure Lithothamnion calcareum:</strong> Whole-food red marine algae providing 100% organic plant calcium and magnesium.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle color="var(--silver-primary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>The Synergistic Bone Team (D3 + K2 + C):</strong> Directs calcium straight into your bone matrix while shielding arteries.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle color="var(--silver-primary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Micro-Porous Honeycomb Absorption:</strong> Dissolves gently with zero gas, bloating, or constipation.</span>
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#pricing" className="btn-primary-silver" style={{ maxWidth: '400px' }}>
                CLAIM YOUR BOTTLE TODAY
              </a>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                🔒 256-Bit Encrypted Checkout • 90-Day Guarantee
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', marginTop: '2.5rem', flexWrap: 'wrap', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><ShieldCheck size={16} /> FDA-Registered</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Award size={16} /> cGMP Certified</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Leaf size={16} /> 100% Vegan & Non-GMO</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FlaskConical size={16} /> Doctor Formulated</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(circle, var(--silver-light) 0%, transparent 60%)', zIndex: 0, opacity: 0.5, top: '5%' }}></div>
            <img src="/ALGAE_Bottle_3000x3000_SF.png" alt="ALGAE Premium Red Marine Algae Complex" style={{ maxWidth: '100%', height: 'auto', zIndex: 1, position: 'relative', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }} />
          </div>

        </div>
      </div>
    </section>
  );
}
