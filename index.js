const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", async (req, res) => {
  // const apiKey = "1adce1c892844c078ebde9b4c4c89dcf";
  try {
    const response = await axios.get(`agrihelpbackend.up.railway.app`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching news");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
