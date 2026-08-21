import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    // Check email
    if (email.trim() === "") {
      setError("Please enter your email.");
      return;
    }

    // Check password
    if (password.trim() === "") {
      setError("Please enter your password.");
      return;
    }

    try {
  const response = await fetch("https://server-one-chi-53.vercel.app/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  if (response.ok) {
  setIsLoggedIn(true);
} else {
  setError(data.message);
}
} catch (error) {
  console.error("Error:", error);
  setError("Unable to connect to the server.");
}
  };
if (isLoggedIn) {
  return <Dashboard />;
}
  return (
    <div className="login-page">
      <div className="login-overlay"></div>

      <div className="login-container">

      
        <div className="login-box">

          <h2>Sign In</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Error Message */}
            {error && <p className="error-message">{error}</p>}

            <button type="submit">
              Sign In
            </button>

            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">Need help?</a>

            </div>

          </form>

          <div className="signup">
            <span>New to Movieflix?</span>{" "}
            <a href="#">Sign up now.</a>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default App;
