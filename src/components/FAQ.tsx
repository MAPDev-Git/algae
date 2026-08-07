import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "How is ALGAE different from regular calcium pills at the pharmacy?",
      a: "Standard calcium supplements use synthetic Calcium Carbonate derived from limestone or marble rock. These dense rock particles are hard to digest, poorly absorbed (~27%), and often cause severe constipation and gas. ALGAE uses 100% organic red marine algae (Lithothamnion calcareum) with an ultra-porous honeycomb structure. It dissolves easily in stomach acid, boasts over 86.7% bioavailability, and includes 72 trace minerals plus D3, K2, and Vitamin C."
    },
    {
      q: "Will ALGAE cause constipation, acid rebound, or stomach upset?",
      a: "No. Because Lithothamnion calcareum is a plant-based mineral matrix with an ultra-microporous cell structure, it dissolves smoothly and acts as a mild, natural acid buffer. It does not cause the heavy gas, acid rebound, or constipation typical of rock-derived calcium."
    },
    {
      q: "Why are Vitamin D3, Vitamin K2, and Vitamin C included in the formula?",
      a: "Calcium cannot build bone on its own. Vitamin D3 unlocks intestinal absorption into your bloodstream. Vitamin K2 MK-7 acts as a biological guide, locking calcium into bone tissue and keeping it out of arteries. Vitamin C stimulates collagen synthesis, building the flexible matrix that prevents bones from becoming brittle."
    },
    {
      q: "What is the recommended daily dosage?",
      a: "Take 3 capsules daily, preferably with meals, or as directed by your healthcare professional. Taking ALGAE with a meal optimizes mineral uptake and digestive harmony."
    },
    {
      q: "Is ALGAE tested for purity and heavy metals?",
      a: "Yes. Every batch of ALGAE is manufactured in an FDA-registered, cGMP-certified facility in the USA. We conduct rigorous third-party laboratory testing for heavy metals (lead, mercury, cadmium, arsenic), purity, and potency to ensure complete safety."
    },
    {
      q: "What if ALGAE doesn't work for me?",
      a: "Every order is protected by our 90-Day Unconditional 100% Money-Back Guarantee. If you are not completely satisfied with your results, simply contact our support team within 90 days for a prompt, courteous refund—even if the bottles are empty."
    }
  ];

  return (
    <section className="section bg-light" id="faq">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h2>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="card-clean-light" style={{ padding: '24px', cursor: 'pointer' }} onClick={() => setOpen(open === idx ? null : idx)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{faq.q}</h3>
                {open === idx ? <ChevronUp /> : <ChevronDown />}
              </div>
              {open === idx && (
                <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
