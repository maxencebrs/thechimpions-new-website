# ✅ The Chimpions MVP – Build Tasks

This file defines each step to build the MVP using **Next.js** + **Supabase** as outlined in `architecture.md`.  
Each task is small, testable, and focused on a single concern — optimized for sequential execution via Cursor.

---

## 1. 🧱 Project Bootstrapping

### 1.1 – Initialize Next.js App
- Create a new Next.js project with App Router
- Confirm it runs at `localhost:3000`

### 1.2 – Install Tailwind CSS
- Add Tailwind and configure `tailwind.config.ts`
- Confirm Tailwind classes render in `app/page.tsx`

### 1.3 – Connect to Supabase
- Add `.env.local` with `SUPABASE_URL` and `SUPABASE_ANON_KEY`
- Create `lib/supabase.ts` and confirm it fetches test data

---

## 2. 🎨 Core Layout & Styling

### 2.1 – Create Global Layout
- Build `app/layout.tsx` with `<Header>`, `<Footer>`, and `{children}`
- Confirm layout wraps all routes

### 2.2 – Implement Global Styles
- Add `globals.css` with dark background and base font styles
- Confirm background color `#0A0A23` renders and text is legible

### 2.3 – Add Navbar
- Create `components/nav/Navbar.tsx`
- Add dummy links to all 9 site sections
- Clicking links should route between pages

### 2.4 – Add Footer
- Create `components/footer/Footer.tsx`
- Add:
  - Twitter + Discord links
  - Tensor + Magic Eden links
  - Legal line: "The Chimpions Foundation"

---

## 3. 🔄 Supabase Integration

### 3.1 – Fetch KPI Data from Supabase
- Create `kpis` table with 4 sample values
- Fetch and display them on the homepage

### 3.2 – Fetch FAQ Entries
- Create `faq_entries` table with 2 questions
- Render on `/faq` using accordion component

---

## 4. 🏠 Homepage

### 4.1 – Create Homepage Route
- Define `app/page.tsx`
- Confirm it renders static heading

### 4.2 – Display KPI Tiles
- Add cards for: TVL, Treasury, Revenue, AUM
- Data comes from Supabase

### 4.3 – Add NFT Marketplace CTAs
- Add buttons linking to:
  - Magic Eden
  - Tensor
- Confirm they open in new tabs

---

## 5. 📄 Static Pages

### 5.1 – Create `/faq` Page
- Define route: `app/faq/page.tsx`
- Render FAQ entries from Supabase

### 5.2 – Create `/the-chimpions` Page
- Add mission, values, and code of conduct
- Use static content for now

---

## 6. 🧪 Placeholder Routes

Each route renders a basic placeholder for now.

### 6.1 – `/gallery`
- Page title: “NFT Gallery Coming Soon”

### 6.2 – `/validator`
- Page title: “Validator Info Coming Soon”

### 6.3 – `/treehouse-capital`
- Page title: “Treehouse Capital Coming Soon”

### 6.4 – `/the-treehouse`
- Page title: “TWS Editions Coming Soon”

### 6.5 – `/holders`
- Page title: “Holders DB Coming Soon”

### 6.6 – `/chimpswap`
- Page title: “ChimpSwap Coming Soon”

---

## 7. 🔐 Auth & Wallet

### 7.1 – Install Supabase Auth
- Add `@supabase/auth-helpers-nextjs`
- Implement session detection with `useUser()`

### 7.2 – Add Wallet Connect
- Integrate Solana Wallet Adapter
- Show connected wallet address in navbar

---

## 8. 🧪 QA & Testing

### 8.1 – Test Mobile Responsiveness
- Confirm homepage + nav are responsive at `375px`

### 8.2 – Run Lighthouse Audit
- Audit via Chrome DevTools
- Aim for 90+ in Performance + Accessibility

---

## 9. 🚀 Deployment

### 9.1 – Push to GitHub
- Init Git repo and push project
- Include `.env.example`

### 9.2 – Deploy to Vercel
- Connect repo to Vercel
- Confirm public URL works

---

> Each task should be treated as an isolated, testable unit before moving to the next.
> Powered by The Chimpions Foundation • www.chimpions.co
