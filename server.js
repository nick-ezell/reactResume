const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nerdHerder");

// routes
// app.use(require("./routes/api.js"));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
  );
}

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
