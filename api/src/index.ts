import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Placeholder for today's game logic
app.get('/api/games/today', async (req, res) => {
  // In a real app, you'd find or create the game for the current date
  res.json({ message: "Today's game placeholder" });
});

// Placeholder for submitting an edit
app.post('/api/games/:id/edits', async (req, res) => {
  const { id } = req.params;
  // Logic to handle the AI image edit request (e.g., call Venice AI)
  res.json({ message: `Edit request for game ${id} started.` });
});

// Placeholder for committing an edit
app.post('/api/games/:id/commit', async (req, res) => {
  const { id } = req.params;
  // Logic to verify user, check lock, and save the edit
  res.json({ message: `Edit for game ${id} committed.` });
});


app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});