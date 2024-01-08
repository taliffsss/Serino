const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header("Authorization");

  // Check if the request does not have a token (excluding login route)
  if (!token && req.path !== "/api/auth") {
    return res
      .status(401)
      .json({ error: "Unauthorized access. Please provide a valid token." });
  }

  // Verify and decode the token
  try {
    if (req.path !== "/api/auth") {
      const decoded = jwt.verify(
        token.replace("Bearer ", ""),
        process.env.JWT_SECRET_KEY
      ); // Replace 'your_secret_key' with your actual secret key

      // If the token is valid, attach the decoded payload to the request object
      req.user = decoded;
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Invalid token. Please log in again." });
  }
};

module.exports = authMiddleware;
