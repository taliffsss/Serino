const express = require("express");
const app = express();
const treasureRoutes = require("./routes/treasureRoutes");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the user routes without authentication middleware
app.use("/api", userRoutes);

// Mount the treasure routes with authentication middleware
app.use("/api", treasureRoutes);

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
