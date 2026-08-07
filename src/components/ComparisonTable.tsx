import { CheckCircle, XCircle } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <section className="section bg-light" id="comparison">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Why ALGAE Is the Clear Winner for Your Health</h2>
        </div>

        <div className="table-clean-wrapper">
          <table className="table-clean">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Feature / Benefit</th>
                <th style={{ width: '25%' }}>Standard Rock Calcium</th>
                <th style={{ width: '25%' }}>Synthetic Bone Formulas</th>
                <th style={{ width: '25%', background: 'var(--brand-dark-slate)', color: 'white' }}>ALGAE™ Complex</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Primary Ingredient</td>
                <td>Mined Limestone / Chalk</td>
                <td>Synthetic Calcium Citrate</td>
                <td className="font-bold">100% Organic Red Algae</td>
              </tr>
              <tr>
                <td className="font-semibold">Micro-Structure</td>
                <td>Dense, Jagged Rock Crystals</td>
                <td>Synthetic Powder</td>
                <td className="font-bold">Porous Honeycomb Matrix</td>
              </tr>
              <tr>
                <td className="font-semibold">Bioavailability Rate</td>
                <td>Abysmal (~27%)</td>
                <td>Moderate (~50%)</td>
                <td className="font-bold">Superior (&gt;86.7%)</td>
              </tr>
              <tr>
                <td className="font-semibold">Digestive Comfort</td>
                <td>Causes Bloating & Constipation</td>
                <td>Frequent Stomach Upset</td>
                <td className="font-bold">Gentle & Non-Constipating</td>
              </tr>
              <tr>
                <td className="font-semibold">Trace Mineral Profile</td>
                <td>0 Trace Minerals</td>
                <td>0-3 Added Minerals</td>
                <td className="font-bold">72 Ionic Ocean Trace Minerals</td>
              </tr>
              <tr className="highlight-row">
                <td className="font-semibold">Arterial Calcification Guard</td>
                <td style={{ color: '#E11D48' }}><XCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> NO (Risk of Buildup)</td>
                <td><AlertTriangle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> Rare</td>
                <td style={{ color: '#059669' }}><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> YES (50 mcg K2 MK-7)</td>
              </tr>
              <tr className="highlight-row">
                <td className="font-semibold">Collagen Matrix Driver</td>
                <td style={{ color: '#E11D48' }}><XCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> NO</td>
                <td style={{ color: '#E11D48' }}><XCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> NO</td>
                <td style={{ color: '#059669' }}><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> YES (40 mg Vitamin C)</td>
              </tr>
              <tr className="highlight-row">
                <td className="font-semibold">Vitamin D3 Potency</td>
                <td style={{ color: '#E11D48' }}><XCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> None or Weak</td>
                <td><AlertTriangle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> Standard D3</td>
                <td style={{ color: '#059669' }}><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> 30 mcg (1,200 IU)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Inline fallback for AlertTriangle so we don't have to import it separately if missed
import { AlertTriangle } from 'lucide-react';
