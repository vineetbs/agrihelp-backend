const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;

app.get("/", async (req, res) => {
  const apiKey = "1adce1c892844c078ebde9b4c4c89dcf";
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=agriculture&language=en&apiKey=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching news");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
