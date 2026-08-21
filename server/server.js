const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const user = {
  email: "mukeshkannamannai04@gmail.com",
  password: "123456",
};

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.json({
      success: true,
      message: "Login successful",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});