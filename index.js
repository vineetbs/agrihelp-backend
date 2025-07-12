const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());

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

app.get("/health", (req, res) => {
  console.log("Cron job executed at", new Date().toISOString());
  res.status(200).send("Server is alive!");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
