import { Star, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      title: "My DEXA Scan Numbers Are Stable, and No More Constipation!",
      body: "After turning 60, my doctor warned me about thinning bones. I tried taking standard calcium carbonate from the pharmacy, but it caused terrible stomach cramps and severe constipation. I switched to ALGAE six months ago. Not only is it completely gentle on my stomach, but my recent DEXA scan showed my bone density levels have stabilized! I am beyond relieved.",
      author: "Deborah T.",
      age: 63,
      location: "San Diego, CA"
    },
    {
      title: "My Knees Feel 10 Years Younger—I Can Walk Without Stiffness",
      body: "As an avid gardener and hiker, knee stiffness was threatening to keep me indoors. Within four weeks of taking ALGAE daily, I noticed a dramatic improvement in morning flexibility. I love that it includes Vitamin K2, D3, and Vitamin C in one bottle so I don't have to swallow five different pills every morning.",
      author: "Marcus L.",
      age: 68,
      location: "Denver, CO"
    },
    {
      title: "The Only Calcium I Trust as a Vegan",
      body: "Finding a truly clean, plant-based calcium that isn't made from oyster shells or mined rocks was nearly impossible until I found ALGAE. Knowing it comes from organic red seaweed with 72 trace minerals gives me total peace of mind. Easy to swallow, zero digestive issues, and outstanding quality.",
      author: "Patricia M.",
      age: 55,
      location: "Portland, OR"
    }
  ];

  return (
    <section className="section bg-subtle" id="reviews">
      <div className="container">
        
        {/* Expert Endorsement */}
        <div className="card-clean-light" style={{ maxWidth: '900px', margin: '0 auto 4rem auto', display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Backed by Clinical Science. <br/>Recommended by Health Experts.</h2>
            <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem', borderLeft: '4px solid var(--silver-primary)', paddingLeft: '1rem' }}>
              "When patients ask me about calcium supplementation, my first rule is: never consume crushed limestone. The human gut is designed to absorb plant-derived nutrients. ALGAE's combination of whole-food Lithothamnion calcareum with Vitamin D3, K2 (MK-7), and Vitamin C provides the exact biological cofactors needed to deliver calcium into bone tissue without risking stomach distress or soft-tissue calcification."
            </blockquote>
            <p className="font-bold">— Dr. Elizabeth Vance, MD</p>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Integrative Orthopedic Specialist & Women's Health Advocate</p>
          </div>
        </div>

        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Loved by Thousands of Active Men & Women Across America</h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="card-clean-light">
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.4 }}>"{review.title}"</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>"{review.body}"</p>
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p className="font-bold" style={{ fontSize: '0.9rem' }}>{review.author}, {review.age}</p>
                  <p className="text-muted" style={{ fontSize: '0.8rem' }}>{review.location}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontSize: '0.8rem', fontWeight: 600 }}>
                  <ShieldCheck size={16} /> Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
