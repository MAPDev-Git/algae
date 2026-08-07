export default function LegalPages({ page }: { page: string }) {
  const content = {
    privacy: {
      title: "Privacy Policy",
      body: `Last Updated: ${new Date().toLocaleDateString()}
      
ALGAE™ ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit or make a purchase from our website.

1. Information We Collect
We collect information you provide directly to us, such as when you make a purchase, create an account, or contact us for support.

2. How We Use Your Information
We use the information we collect to fulfill orders, communicate with you, and improve our services.

3. Sharing Your Information
We do not sell your personal information. We share it only with service providers needed to run our business (like payment processors and shipping companies).`
    },
    terms: {
      title: "Terms of Service",
      body: `Last Updated: ${new Date().toLocaleDateString()}
      
Welcome to ALGAE™. By using our website and purchasing our products, you agree to these Terms of Service.

1. Product Information
Statements made about our products have not been evaluated by the FDA. Our products are not intended to diagnose, treat, cure, or prevent any disease.

2. Orders and Returns
For questions about orders, please contact our support team. Return policies will be evaluated on a case-by-case basis.

3. Intellectual Property
All content on this site is the property of ALGAE™ and protected by copyright laws.`
    },
    cookies: {
      title: "Cookie Policy",
      body: `Last Updated: ${new Date().toLocaleDateString()}
      
We use cookies to improve your experience on our site. 

1. What are Cookies?
Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.

2. Types of Cookies We Use
- Essential Cookies: Needed for the site to function (like shopping carts).
- Analytics Cookies: Help us understand traffic and usage patterns.
- Marketing Cookies: Used to deliver relevant advertisements.

3. Managing Cookies
You can control cookies through your browser settings, though disabling certain cookies may affect site functionality.`
    }
  };

  const current = content[page as keyof typeof content] || content.privacy;

  return (
    <section className="section bg-light" style={{ minHeight: '60vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>{current.title}</h1>
        <div style={{ whiteSpace: 'pre-wrap', color: 'var(--text-secondary)' }}>
          {current.body}
        </div>
        <div style={{ marginTop: '3rem' }}>
          <a href="#" className="btn-primary-silver" style={{ padding: '10px 24px' }}>Return to Home</a>
        </div>
      </div>
    </section>
  );
}
