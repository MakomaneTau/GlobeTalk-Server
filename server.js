const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // IMPORTANT: Use Railway's dynamic port

app.get("/", (req, res) => {
  res.send("Hello from Express on Railway!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
