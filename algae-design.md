# ⚡ Design System — ALGAE™ Premium Red Marine Algae Complex

Documento de especificação técnica e guia de estilo do **Design System** para a Landing Page do suplemento **ALGAE™ (More Than Aromas)**. Este sistema visual adota um tema **Claro (Light Mode)** ultra clean, diretamente derivado da identidade do rótulo do produto (`Pre_Label2.png`): fundo predominantemente branco, tipografia em slate/preto de alto contraste, acentos com luminosidade metálica prateada (Silver Specular Glow), badges em formato de pílula preta e cards com remoção total de bordas aparentes, estruturados com sombras suaves em cinza claro.

---

## 🎨 1. Paleta de Cores e Tokens Semânticos

A paleta de cores substitui completamente os fundos escuros por uma superfície clara, higiênica e clínica. O canvas utiliza o **Branco Puro (`#FFFFFF`)**, intercalado com o **Cinza Névoa / Soft Ice (`#F8FAFC`)** em seções alternadas para criar profundidade sem poluição visual. Os elementos de destaque (botões CTA, ícones e linhas de reflexo) empregam gradientes em **Prata Metálico (`#E2E8F0` / `#94A3B8`)**, enquanto os badges replicam o tom **Preto Ônix (`#000000` / `#0F172A`)** presente nos destaques gráficos do rótulo.

### 🌟 Cores do Produto (Brand Swatches & Hex Tokens)

| Token | Valor Hex / RGBA | Descrição & Uso Principal |
| :--- | :--- | :--- |
| `background_light` | `#FFFFFF` | Branco Puro (Fundo Base do Canvas / Superfície Clean) |
| `background_subtle` | `#F8FAFC` | Cinza Névoa / Ice (Fundo Secundário e Alternado de Seções) |
| `surface_card` | `#FFFFFF` | Superfície dos Cards (Branco Isolado com Sombra Suave) |
| `brand_black` | `#000000` | Preto Puro (Badges Pílula do Rótulo, Destaques de Alto Contraste) |
| `brand_dark_slate` | `#0F172A` | Slate Escuro (Headings H1, H2 e Títulos Principais) |
| `silver_primary` | `#94A3B8` | Prata Metálico Base (Acentos, Ícones e Gradientes Prateados) |
| `silver_light` | `#E2E8F0` | Prata Claro / Specular Highlight (Luminosidade de Botões e Refletivos) |
| `silver_glow` | `rgba(148, 163, 184, 0.35)` | Efeito de Brilho / Specular Glow para CTAs no Hover |
| `neutral.text_primary` | `#0F172A` | Preto Slate Profundo (Texto Principal / Headings) |
| `neutral.text_secondary` | `#475569` | Cinza Escuro (Corpo de Texto, Subtítulos e Parágrafos) |
| `neutral.text_muted` | `#64748B` | Cinza Médio (Captions, Footnotes, Disclaimers) |
| `shadow_light_gray` | `rgba(0, 0, 0, 0.04)` | Sombra Difusa Cinza Claro para Elevação de Cards |

---

## ✒️ 2. Tipografia e Escala Hierárquica

- **Família Principal (Prose & Headings):** `'Outfit', sans-serif` (Pesos: 400, 500, 600, 700, 800)
- **Família Mono / Métricas:** `'JetBrains Mono', monospace` (Utilizada para dados numéricos, dosagens e tabelas: `2,000 mg`, `30 mcg`, `72 Minerals`, `>86.7%`)

### Escala de Tamanhos (Desktop / Mobile Responsive)
* **Display / Hero H1:** `3.25rem` (52px) / Mobile: `2.25rem` (36px) — Weight: `800`
* **Section Heading H2:** `2.25rem` (36px) / Mobile: `1.75rem` (28px) — Weight: `700`
* **Card Title H3:** `1.25rem` (20px) — Weight: `600`
* **Body Lead:** `1.125rem` (18px) — Weight: `400`
* **Body Regular:** `1.0rem` (16px) — Weight: `400`
* **Small / Caption:** `0.875rem` (14px) — Weight: `500`

---

## 📐 3. Espaçamento, Raios de Borda e Sombras

### Raios de Borda (`border-radius`)
* **`radius-sm`:** `8px` (Inputs, Badges Secundários)
* **`radius-md`:** `16px` (Cards Pequenos, Popups)
* **`radius-lg`:** `24px` (Cards Principais, Containers de Recursos)
* **`radius-full`:** `9999px` (Badges Pílula do Rótulo, Botões CTA)

### Padrão de Sombras (Remoção Total de Bordas Aparentes)
Para garantir um visual moderno e clean, **nenhum card ou container possui borda aparente (`border: none`)**. A separação visual é feita exclusivamente por contraste de profundidade e sombras em cinza claro.

* **`shadow-card-light`:** `0 12px 32px -4px rgba(0, 0, 0, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.02)`
* **`shadow-card-hover`:** `0 20px 40px -8px rgba(0, 0, 0, 0.08), 0 8px 16px -4px rgba(0, 0, 0, 0.03)`
* **`shadow-silver-luminosity`:** `0 0 25px rgba(148, 163, 184, 0.4), 0 8px 24px -4px rgba(15, 23, 42, 0.15)`

---

## 🧩 4. Componentes CSS & Código de Produção

### 4.1 Variáveis CSS Globais (`:root`)

```css
:root {
  /* Canvas e Superfícies Claras */
  --bg-light: #FFFFFF;
  --bg-subtle: #F8FAFC;
  --surface-card: #FFFFFF;
  
  /* Cores de Marca & Destaques Metálicos */
  --brand-black: #000000;
  --brand-dark-slate: #0F172A;
  --silver-primary: #94A3B8;
  --silver-light: #E2E8F0;
  --silver-glow: rgba(148, 163, 184, 0.35);
  
  /* Tipografia */
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #64748B;
  --text-white: #FFFFFF;

  /* Fontes */
  --font-sans: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Sombras de Elevação Clean (Sem Bordas Apparentes) */
  --shadow-clean-sm: 0 4px 12px rgba(0, 0, 0, 0.03);
  --shadow-clean-card: 0 12px 32px -4px rgba(0, 0, 0, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.02);
  --shadow-clean-hover: 0 20px 40px -8px rgba(0, 0, 0, 0.08);
  --shadow-silver-luminosity: 0 0 30px rgba(148, 163, 184, 0.45), 0 10px 28px -4px rgba(15, 23, 42, 0.2);
}
```

---

### 4.2 Botão CTA Principal com Efeito Prateado Luminoso (Silver Specular Glow)

Inspirado na logomarca 3D e nos elementos prateados da embalagem, o botão combina o tom **Dark Slate (`#0F172A`)** com brilho metálico prateado e varredura de luz (Shine) ao passar o mouse.

```css
.btn-primary-silver {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  color: var(--text-white);
  border: none !important;
  border-radius: 9999px;
  padding: 18px 40px;
  font-family: var(--font-sans);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(226, 232, 240, 0.8);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.btn-primary-silver:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-silver-luminosity);
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
}

/* Efeito de Reflexo Metálico Passante (Specular Shine) */
.btn-primary-silver::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    60deg,
    transparent 30%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 70%
  );
  transform: rotate(25deg) translateX(-100%);
  transition: transform 0.8s ease;
}

.btn-primary-silver:hover::after {
  transform: rotate(25deg) translateX(100%);
}
```

---

### 4.3 Card Clean (Sem Borda e com Sombra Cinza Claro)

```css
.card-clean-light {
  background-color: var(--surface-card);
  border: none !important; /* Remoção total de borda aparente */
  border-radius: 24px;
  padding: 36px;
  box-shadow: var(--shadow-clean-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-clean-light:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-clean-hover);
}
```

---

### 4.4 Badges Pílula (Padrão do Rótulo ALGAE)

Inspirados diretamente no elemento visual `Natural Calcified Seaweed` da embalagem:

```css
/* Badge Pílula Preto Ônix (Como no Rótulo) */
.badge-label-black {
  background-color: var(--brand-black);
  color: var(--text-white);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 9999px;
  display: inline-block;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-clean-sm);
}

/* Badge Pílula Prata Metálico (Informativo) */
.badge-label-silver {
  background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);
  color: var(--brand-dark-slate);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 9999px;
  display: inline-block;
  letter-spacing: 0.3px;
}
```

---

### 4.5 Tabela Comparativa Clean (ALGAE vs. Outros)

```css
.table-clean-wrapper {
  background: var(--surface-card);
  border-radius: 24px;
  box-shadow: var(--shadow-clean-card);
  overflow: hidden;
}

.table-clean {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.table-clean th {
  background: var(--bg-subtle);
  color: var(--text-primary);
  font-weight: 700;
  padding: 20px 24px;
  font-size: 0.95rem;
  border-bottom: 2px solid #E2E8F0;
}

.table-clean td {
  padding: 18px 24px;
  color: var(--text-secondary);
  border-bottom: 1px solid #F1F5F9;
  font-size: 0.95rem;
}

.table-clean tr:last-child td {
  border-bottom: none;
}

.table-clean tr.highlight-row {
  background-color: rgba(241, 245, 249, 0.6);
  font-weight: 600;
}
```

---

## 🛠️ 5. Resumo da Adaptação Visual

1. **Migração para Tema Claro:** Canvas totalmente dominado por `#FFFFFF` e `#F8FAFC`, garantindo uma leitura leve, confiável e clínica.
2. **Eliminação de Bordas Apparentes:** Todos os cards, containers de depoimentos, FAQs e módulos comparativos utilizam `border: none` e profundidade obtida por sombras sutis em cinza claro (`rgba(0, 0, 0, 0.05)`).
3. **Identidade Visual Fiel ao Rótulo:**
   * Uso de badges em formato de pílula preta pura (`#000000`).
   * CTAs com brilho prateado metálico (Silver Specular Glow) alinhados à renderização 3D do logotipo `ALGAE`.
   * Tipografia limpa com hierarquia em Slate Profundo (`#0F172A`) e Cinza Escuro (`#475569`).

---
*Documento gerado e atualizado para integração direta no projeto Google Antigravity. Arquivo gerado: `algae-design.md`*
