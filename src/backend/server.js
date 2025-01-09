const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000; // Backend server will run on port 5000

// Enable CORS
app.use(cors());

// API endpoint to fetch characters
app.get('/api/characters', async (req, res) => {
  try {
    // Fetch data from the Rick and Morty API
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Rick and Morty API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for filtering characters by name
app.get('/api/characters/search', async (req, res) => {
  const { name } = req.query;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error searching characters:', error);
    res.status(500).json({ error: 'Character not found or another error occurred' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
