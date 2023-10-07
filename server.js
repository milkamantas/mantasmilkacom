const express = require('express');
const axios = require('axios');

const app = express();

app.get('/get-dribbble-token', async (req, res) => {
  const code = req.query.code;
  try {
    const response = await axios.post('https://dribbble.com/oauth/token', {
      client_id: process.env.REACT_APP_DRIBBBLE_CLIENT_ID,
      client_secret: process.env.REACT_APP_DRIBBBLE_CLIENT_SECRET,
      code: code,
      redirect_uri: process.env.REACT_APP_DRIBBBLE_REDIRECT_URI,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching token:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
