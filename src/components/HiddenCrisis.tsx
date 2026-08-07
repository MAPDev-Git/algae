import { AlertTriangle, Ghost, Droplet, HeartPulse } from 'lucide-react';

export default function HiddenCrisis() {
  const problems = [
    {
      icon: <Ghost size={32} color="var(--text-muted)" />,
      title: 'The "Crushed Rock" Bioavailability Trap',
      description: 'Most high-street calcium pills are made from synthetic Calcium Carbonate dug up from rock quarries. To your digestive tract, this is literally crushed stone. These dense, jagged mineral crystals have an abysmal absorption rate—as low as 27%.'
    },
    {
      icon: <AlertTriangle size={32} color="var(--text-muted)" />,
      title: 'Severe Gastrointestinal Distress',
      description: 'Because rock-derived calcium dissolves poorly in stomach acid, heavy mineral particles linger in your digestive tract. This causes osmotic imbalance, severe gas, painful acid rebound, and chronic constipation.'
    },
    {
      icon: <HeartPulse size={32} color="var(--text-muted)" />,
      title: 'The Dangerous "Calcium Paradox"',
      description: 'Taking isolated calcium without Vitamin K2 and Vitamin D3 is like sending delivery trucks onto a highway without a GPS. Unanchored calcium circulates aimlessly in your bloodstream, depositing into soft tissues and arterial walls.'
    },
    {
      icon: <Droplet size={32} color="var(--text-muted)" />,
      title: 'Brittle Bones Caused by Ignoring Collagen',
      description: 'Calcium alone makes bones hard but brittle—like a piece of dry chalk that snaps under pressure. Without Vitamin C and essential matrix cross-linkers like Boron and Silicon, your bones lose flexural strength.'
    }
  ];

  return (
    <section className="section bg-subtle" id="science">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Is Your Calcium Supplement Silently Damaging Your Body?</h2>
          <p className="lead">
            Over 80% of adults taking traditional calcium pills are unknowingly swallowing <strong>pulverized limestone, chalk, or crushed rock</strong>. Here is why standard calcium supplements fail your skeleton and upset your gut:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="card-clean-light">
              <div style={{ marginBottom: '1.5rem' }}>{problem.icon}</div>
              <h3 style={{ marginBottom: '1rem' }}>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
