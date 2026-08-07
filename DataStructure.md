# Estrutura de Dados — ALGAE™

Este arquivo mapeia os principais modelos de dados utilizados na aplicação e no sistema de vendas do suplemento ALGAE™. Ele servirá como base para o front-end e futura integração com banco de dados ou headless CMS.

## 1. Produto (Product Model)

```typescript
export interface Product {
  id: string;
  name: string;
  tagline: string;
  formulation: {
    lithothamnion_calcareum: string; // "2,000 mg"
    vitamin_c: string;               // "40 mg"
    vitamin_d3: string;              // "30 mcg (1,200 IU)"
    vitamin_k2: string;              // "50 mcg (MK-7)"
  };
  features: string[];
}
```

## 2. Pacotes de Venda (Pricing Packages)

```typescript
export interface PricingPackage {
  id: string;
  title: string;          // "BEST VALUE", "MOST POPULAR", "STARTER KIT"
  bottleQuantity: number; // 5, 3, 1
  capsulesTotal: number;  // 450, 270, 90
  pricePerBottle: number; // 29.00, 39.00, 49.00
  retailPrice: number;    // 354.00, 177.00, 59.00
  totalPrice: number;     // 174.00, 117.00, 49.00
  savingsLabel: string;   // "SAVE $180 (50% OFF)"
  inclusions: string[];   // ["FREE Expedited U.S. Shipping", "FREE E-Book", ...]
  ctaText: string;        // "CLAIM 6 BOTTLES – BEST VALUE"
  isPopular: boolean;
  checkoutUrl: string;    // Link para Stripe/Shopify
}
```

## 3. Depoimentos (Testimonials)

```typescript
export interface Testimonial {
  id: string;
  rating: number;         // 5
  title: string;          // "My DEXA Scan Numbers Are Stable..."
  content: string;        // "After turning 60, my doctor warned me..."
  authorName: string;     // "Deborah T."
  authorAge: number;      // 63
  authorLocation: string; // "San Diego, CA"
  verifiedBuyer: boolean; // true
}
```

## 4. FAQ (Frequently Asked Questions)

```typescript
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
```

## 5. Tabela Comparativa (Comparison Table)

```typescript
export interface ComparisonFeature {
  featureName: string;
  standardRockCalcium: string;
  syntheticBoneFormulas: string;
  algaeComplex: string;
  isHighlight: boolean;
}
```
