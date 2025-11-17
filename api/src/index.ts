import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const PLACEHOLDER_IMAGE = process.env.PLACEHOLDER_IMAGE_URL || 'https://placehold.co/768x768?text=Chain+Canvas';

function todayUtcDateOnly(): Date {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// GET today's game: find or create the daily game and return with its edits
app.get('/api/games/today', async (req, res) => {
  try {
    const today = todayUtcDateOnly();

    // Try to find an existing game for today
    let game = await prisma.game.findFirst({
      where: { date: today },
      include: {
        edits: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    // If none, create it
    if (!game) {
      game = await prisma.game.create({
        data: {
          date: today,
          originalImageUrl: PLACEHOLDER_IMAGE,
          currentImageUrl: PLACEHOLDER_IMAGE,
          editCount: 0,
          maxEdits: 10,
          state: 'open',
        },
        include: { edits: true },
      });
    }

    res.json({ game });
  } catch (err) {
    console.error('Error in /api/games/today', err);
    res.status(500).json({ error: 'Failed to load today's game' });
  }
});

// Placeholder for submitting an edit (start an AI job)
app.post('/api/games/:id/edits', async (req, res) => {
  const { id } = req.params;
  // TODO: Integrate Venice AI: enqueue job with current image + params from body
  res.json({ message: `Edit request for game ${id} started.` });
});

// Placeholder for committing an edit
app.post('/api/games/:id/commit', async (req, res) => {
  const { id } = req.params;
  // TODO: Verify auth (Farcaster QuickAuth), check lock, persist Edit, update Game
  res.json({ message: `Edit for game ${id} committed.` });
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
