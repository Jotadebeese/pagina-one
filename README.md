# Pagina — Precision Contractor Time & Invoicing Engine

> Built for software contractors, consultants, and independent product engineers. Zero bloat, instant keyboard logging, automated fortnightly pay cycles, and immutable PDF billing records.

---

## 🏛️ Architecture & Tech Stack

```
pagina/
├── frontend/             # Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4
│   ├── src/app/
│   │   ├── (marketing)/  # Public product landing page, architecture & value props
│   │   └── (app)/        # Contractor dashboard, 5s time logger, invoice builder, clients
│   └── public/           # SVGs, brand assets, icons
│
└── backend/              # High-performance compiled Go binary
    ├── cmd/server/       # HTTP entrypoint (net/http standard library)
    └── migrations/       # Normalized PostgreSQL schema migrations (ACID ledger)
```

### Core Design Philosophy
- **No Heavy CMS for Financial Data:** Financial ledgers and billable hours demand strict ACID guarantees and immutability. Replacing heavy CMS layers with a compiled Go service and Next.js UI shell ensures sub-15ms response times and <20MB backend memory usage.
- **Route Groups Over Monorepo Bloat:** Avoided premature workspace fragmentation by using Next.js route groups `(marketing)` and `(app)` within a single cohesive frontend app.
- **Bespoke Craft UI:** Styled using signature brand design tokens (warm accent `#ff9900`, canvas `#eeeeee` / `#181411`, clean dashed borders, `DM Sans` + `Roboto`).

---

## 🚀 Quick Start

### Frontend (Next.js 15)
```bash
# Install dependencies
cd frontend
pnpm install

# Run dev server (http://localhost:3000)
pnpm dev
```

### Backend (Go)
```bash
# Run Go server (http://localhost:8080)
cd backend
go run ./cmd/server
```

---

## 📄 License & Credits
Designed and engineered by [Juan Diego Bedoya](https://jotadebeese.com). All rights reserved.
