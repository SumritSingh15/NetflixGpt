import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("GROQ KEY EXISTS:", !!process.env.GROQ_API_KEY);

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/gpt-search", async (req, res) => {
  try {
    console.log("REQUEST BODY:", req.body);

    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query missing" });
    }

  const completion = await groq.chat.completions.create({
  model: "llama-3.1-8b-instant",
  max_tokens: 300,
  messages: [
    {
      role: "user",
      content: `Suggest exactly 10 Netflix movies related to "${query}". Return only comma-separated movie names, no extra text.`
    },
  ],
});


    const result = completion.choices[0]?.message?.content;

    res.json({ movies: result });
  } catch (error) {
    console.error("BACKEND ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
