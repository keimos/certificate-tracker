const express = require("express");
const cors = require("cors");
const db = require("./app/models");

// Create an instance of the Express application
const app = express();

// Configure CORS options
const corsOptions = {
  origin: "http://localhost:8081",
};

// Apply middleware
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sync databse
db.sequelize
  .sync();
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Define a simple route
app.get("/", (req, res) =>) {
  res.json({ message: "Welcome to certificate tracker application." });
});

// Import and use routes
require("./app/routes/cert.routes")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


