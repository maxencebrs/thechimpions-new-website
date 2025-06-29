# 🏗 The Chimpions – Architecture Overview

This document describes the technical architecture of The Chimpions website, built with **Next.js** (frontend) and **Supabase** (DB, auth, content management). The site functions as both a brand showcase and a DAO utility platform.

---

## 🔧 Tech Stack Summary

| Layer         | Tech                | Description                                     |
|---------------|---------------------|-------------------------------------------------|
| Frontend      | **Next.js** (App Router) | React-based SSR/CSR framework               |
| Styling       | **Tailwind CSS**    | Utility-first styling system                   |
| DB/Auth       | **Supabase**        | PostgreSQL + Realtime + Auth                   |
| Deployment    | **Vercel**          | CI/CD and hosting                              |
| Wallet Auth   | Solana Wallet Adapter | Phantom, Backpack, etc.                       |
| State         | React + Zustand     | Lightweight global state where needed          |

---

## 📁 Folder Structure (with App Router)

/app
├─ layout.tsx
├─ page.tsx
├─ (routes)/
│ ├─ gallery/
│ │ └─ page.tsx
│ ├─ validator/
│ │ └─ page.tsx
│ ├─ treehouse-capital/
│ │ └─ page.tsx
│ ├─ the-treehouse/
│ │ └─ page.tsx
│ ├─ holders/
│ │ └─ page.tsx
│ ├─ chimpswap/
│ │ └─ page.tsx
│ ├─ faq/
│ │ └─ page.tsx
│ └─ the-chimpions/
│ └─ page.tsx
/components
├─ ui/
├─ layout/
├─ nav/
├─ footer/
├─ buttons/
├─ kpi/
├─ nfts/
├─ holders/
├─ modals/
└─ cards/
/lib
├─ supabase.ts # Supabase client config
├─ wallet.ts # Solana wallet connection util
└─ api.ts # API fetch helpers (REST or RPC)
/hooks
├─ useUser.ts
├─ useKpis.ts
├─ useHolders.ts
└─ useWallet.ts
/store
└─ useGlobalState.ts # Zustand-based shared state
/types
└─ index.ts # Central TypeScript types
/public
└─ assets/ # Logo, icons, images
/styles
└─ globals.css # Tailwind & base styles
/utils
├─ format.ts
└─ filters.ts
.env.local # Supabase + Wallet env vars
tailwind.config.ts
next.config.js


---

## 🔄 Data Flow Overview

### Supabase Tables (Simplified)

| Table Name         | Description                                 | Editable via Admin? |
|--------------------|---------------------------------------------|----------------------|
| `kpis`             | Homepage KPIs (TVL, revenue, etc.)          | ✅                  |
| `tws_editions`     | Treehouse Weekly Spotlights                 | ✅                  |
| `dao_members`      | Council / DAO contributors info             | ✅                  |
| `faq_entries`      | FAQ content (categorized)                   | ✅                  |
| `treehouse_deals`  | Highlighted investments (Treehouse Capital) | ✅                  |
| `holders`          | Synced from wallet data                     | 🔄 Automated         |
| `nft_metadata`     | NFT data for gallery                        | 🔄 Automated         |

---

## 🧠 State Management

| Layer          | Where State Lives     | Notes                               |
|----------------|------------------------|-------------------------------------|
| Auth session   | Supabase auth + localStorage | Accessible via `useUser()`     |
| Wallet state   | Solana Wallet Adapter  | Accessible via `useWallet()`        |
| UI State       | `useGlobalState` (Zustand) | Theme, modals, filters, etc.   |
| Server data    | Fetched via `lib/api.ts` or Supabase hooks | SSR when possible         |

---

## 🔌 External Services & Integrations

| Service         | Purpose                                     |
|------------------|---------------------------------------------|
| **Supabase**     | DB, Auth, Admin panel (with RLS)            |
| **Wallet Adapter** | Phantom, Backpack wallet integration     |
| **Solana RPC**   | Read validator stats, staking data          |
| **Magic Eden / Tensor APIs** | Fetch NFT listings & floor data |
| **Resend**       | Transactional emails (if needed)            |
| **Vercel**       | Hosting + automatic preview deployments     |

---

## 🛠 Dev Best Practices

- **Typesafe everything** → use `@types/supabase` and declare all types in `/types/index.ts`
- **Components first** → all UI is reusable and lives in `/components`
- **Minimal global state** → local state by default, Zustand only if cross-component
- **Modular data fetching** → all Supabase or RPC logic lives in `/lib`
- **Page-based layout** → each route folder has its own `page.tsx`, optional `layout.tsx`

---

## ✅ Admin UI

Built-in Supabase dashboard will be used to manage:
- KPIs
- FAQ entries
- Treehouse deals
- TWS editions
- DAO members

Automated data (holders, NFT metadata) syncs via backend cron or serverless jobs.

---

## 🚀 Deployment Strategy

| Step | Action |
|------|--------|
| 1    | Push to `main` branch (GitHub) |
| 2    | Vercel auto-builds & deploys |
| 3    | Supabase handles live DB |
| 4    | Preview deployments enabled for PRs |

---

> Built for scale and storytelling.  
> The Chimpions Foundation – www.chimpions.co

