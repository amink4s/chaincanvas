"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Placeholder for today's game logic
app.get('/api/games/today', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // In a real app, you'd find or create the game for the current date
    res.json({ message: "Today's game placeholder" });
}));
// Placeholder for submitting an edit
app.post('/api/games/:id/edits', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Logic to handle the AI image edit request (e.g., call Venice AI)
    res.json({ message: `Edit request for game ${id} started.` });
}));
// Placeholder for committing an edit
app.post('/api/games/:id/commit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Logic to verify user, check lock, and save the edit
    res.json({ message: `Edit for game ${id} committed.` });
}));
app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
});
