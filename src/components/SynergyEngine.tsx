import { Activity, Shield, Bone, ActivitySquare } from 'lucide-react';

export default function SynergyEngine() {
  const stages = [
    {
      num: 1,
      title: 'Gentle Gut Uptake',
      ingredient: '2,000 mg Red Algae',
      desc: 'The microporous honeycomb structure dissolves rapidly at physiological gastric pH without demanding excess stomach acid.',
      icon: <Activity size={24} color="var(--brand-dark-slate)" />
    },
    {
      num: 2,
      title: 'Bloodstream Transport',
      ingredient: '30 mcg Vitamin D3',
      desc: 'Acts as the biochemical gatekeeper, synthesizing calcium-binding proteins across the intestinal wall to elevate blood calcium safely.',
      icon: <ActivitySquare size={24} color="var(--brand-dark-slate)" />
    },
    {
      num: 3,
      title: 'Direct-to-Bone Lock',
      ingredient: '50 mcg Vitamin K2 (MK-7)',
      desc: 'Activates Osteocalcin to bind calcium tightly into bone, and Matrix Gla Protein (MGP) to scrub calcium out of your blood vessels.',
      icon: <Shield size={24} color="var(--brand-dark-slate)" />
    },
    {
      num: 4,
      title: 'Collagen Matrix',
      ingredient: '40 mg Vitamin C',
      desc: 'Stimulates collagen synthesis, creating a flexible protein mesh within your skeleton that absorbs physical impact.',
      icon: <Bone size={24} color="var(--brand-dark-slate)" />
    }
  ];

  return (
    <section className="section bg-subtle" id="formula">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>The 4-Stage Bone-Building Engine</h2>
          <p className="lead">How ALGAE Guarantees Complete Mineral Delivery to Your Skeleton</p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {stages.map((stage, idx) => (
            <div key={idx} className="card-clean-light" style={{ position: 'relative', overflow: 'visible' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '24px', background: 'var(--silver-light)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'var(--brand-dark-slate)' }}>
                {stage.num}
              </div>
              <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>{stage.icon}</div>
              <div className="badge-label-silver" style={{ alignSelf: 'flex-start', marginBottom: '1rem', fontSize: '0.75rem' }}>{stage.ingredient}</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{stage.title}</h3>
              <p style={{ fontSize: '0.875rem' }}>{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
