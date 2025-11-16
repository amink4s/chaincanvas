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

1.  **Clone & Install:**
    ```bash
    git clone https://github.com/amink4s/chaincanvas.git
    cd chaincanvas
    npm install
    ```

2.  **Environment Variables:**
    Copy the example env file and fill in your Neynar credentials.
    ```bash
    cp .env.example .env
    ```

3.  **Start Database:**
    Run a local PostgreSQL database using Docker.
    ```bash
    docker-compose up -d
    ```

4.  **Push Database Schema:**
    Apply the Prisma schema to your new database.
    ```bash
    npm run db:push
    ```

5.  **Run Development Servers:**
    This command starts both the `api` and `web` servers.
    ```bash
    npm run dev
    ```
    - Next.js (`web`) runs on `http://localhost:3000`.
    - Express (`api`) runs on `http://localhost:3001`.