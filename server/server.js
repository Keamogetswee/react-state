import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';

dotenv.config(); // Loads process.env.ANTHROPIC_API_KEY

const app = express();
app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY, // <-- THIS is correct for Node
});

app.post('/api/getRecipe', async (req, res) => {
    try {
        const { ingredients } = req.body;
        const msg = await anthropic.messages.create({
            model: "claude-3-haiku-20240307",
            max_tokens: 1024,
            system: "You are a chef assistant...",
            messages: [{ role: "user", content: `I have ${ingredients.join(", ")}. Suggest a recipe.` }],
        });
        res.json({ recipe: msg.content[0].text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));
