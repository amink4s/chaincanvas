# Chain Canvas

A collaborative canvas Farcaster mini-app.

## Project Structure

- `api/`: Node.js/Express backend for game logic.
- `web/`: Next.js frontend for the Farcaster mini-app UI.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/products/docker-desktop/)

### Setup

1. **Clone & Install:**
   ```bash
   git clone https://github.com/amink4s/chaincanvas.git
   cd chaincanvas
   npm install
   ```

2. **Environment Variables:**
   Copy the example env file and fill in your credentials.
   ```bash
   cp .env.example .env
   ```
   Required variables:
   - `DATABASE_URL` – Postgres connection string
   - `VENICE_API_KEY` – Your Venice AI key
   - `NEXT_PUBLIC_NEYNAR_API_KEY` / `NEXT_PUBLIC_NEYNAR_CLIENT_ID` – Neynar Farcaster auth
   - `NEXT_PUBLIC_API_BASE` – Usually `http://localhost:3001` for local dev

3. **Start Database:**
   ```bash
   docker-compose up -d
   ```

4. **Push Database Schema:**
   ```bash
   npm run db:push
   ```

5. **Run Development Servers:**
   ```bash
   npm run dev
   ```
   - Next.js (`web`) runs on `http://localhost:3000`
   - Express (`api`) runs on `http://localhost:3001`

### Cleanup (if needed)
If `web/.next` was accidentally committed:
```bash
git rm -r web/.next
git commit -m "chore: remove build artifacts"
```

### Roadmap (Condensed)
- Implement daily game autocreation and lock logic
- Integrate Venice AI edit pipeline
- Frontend edit UI + next-user selection
- Farcaster cast posting flow
- Manual minting to Base (Zora)
- Beta testing & feedback

---

## Development Conventions

- Branch naming: `feat/*`, `chore/*`, `fix/*`
- Commits: use clear prefixes (`feat:`, `chore:`, `fix:`)
- Add backend env access via a small config module (`api/src/config/env.ts`).
