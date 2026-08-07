import { Search, Waves, Check } from 'lucide-react';

export default function AlgaeRevolution() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Sourced From Pristine Oceanic Waters. <br/>Perfected by Marine Biology.</h2>
          <p className="lead">
            Deep in the unpolluted, arctic-chilled ocean waters, a rare red seaweed species—<em>Lithothamnion calcareum</em>—spends years absorbing essential macro and trace minerals directly from the sea.
            Instead of dense, solid rock calcite, ALGAE delivers a <strong>100% organic, plant-derived mineral matrix</strong> that your body instantly recognizes as food.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="card-clean-light text-center" style={{ alignItems: 'center' }}>
            <div style={{ background: 'var(--bg-subtle)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Search size={32} color="var(--silver-primary)" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Ultra-Microporous Honeycomb Matrix</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Scanning Electron Microscopy reveals an intricate, porous cell wall network. This massive surface area allows stomach acid to break down the minerals smoothly, achieving <strong>over 86.7% bioavailability</strong>.
            </p>
          </div>

          <div className="card-clean-light text-center" style={{ alignItems: 'center' }}>
            <div style={{ background: 'var(--bg-subtle)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Check size={32} color="var(--silver-primary)" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Intact 12:1 Calcium-to-Magnesium Ratio</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Nature never isolates nutrients. ALGAE provides 32% elemental plant calcium natively bound with magnesium. This ratio activates crucial enzymatic pathways and prevents mineral competition.
            </p>
          </div>

          <div className="card-clean-light text-center" style={{ alignItems: 'center' }}>
            <div style={{ background: 'var(--bg-subtle)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Waves size={32} color="var(--silver-primary)" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Full Spectrum of 72 Ionic Trace Minerals</h3>
            <p style={{ fontSize: '0.95rem' }}>
              A single serving delivers trace amounts of 72 marine minerals—including Strontium, Boron, Silicon, Zinc, and Manganese to stimulate bone-building osteoblasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
