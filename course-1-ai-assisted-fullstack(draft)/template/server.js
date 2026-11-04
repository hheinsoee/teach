const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/hello", (req, res) => {
  res.json({ message: "the server is running" });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
