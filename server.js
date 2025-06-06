import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/palettes', async (req, res) => {
  try {
    const response = await fetch('https://www.colourlovers.com/api/palettes/top?format=json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching from ColourLovers:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export default app;
