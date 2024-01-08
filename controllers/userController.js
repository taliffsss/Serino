const jwt = require("jsonwebtoken");
const { User } = require("../models");

const generateAuthToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.Email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { Email: email } });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password." });
    }

    // Password is correct, generate JWT token
    const token = generateAuthToken(user);

    // Respond with token and success message
    return res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { loginUser };
