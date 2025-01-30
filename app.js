const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/index");

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

// Server Listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
