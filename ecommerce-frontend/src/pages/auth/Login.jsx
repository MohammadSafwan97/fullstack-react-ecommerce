import "./auth.css";

export function Login() {
  return (
    <div>
      <div className="auth-wrap">
        {/* Left Section */}
        <aside className="auth-hero" aria-hidden="true">
          <div className="brand">
            <div className="logo">D</div>
            <div>
              <h1>Welcome Back</h1>
              <p className="lead">
                Log in to access your discussions, profile, and community
                features.
              </p>
            </div>
          </div>

          <div className="features">
            <div className="feat">
              <div className="icon-circle">🔒</div>
              <div>
                <h4>Safe & Secure</h4>
                <p>Passwords encrypted using modern hashing algorithms.</p>
              </div>
            </div>

            <div className="feat">
              <div className="icon-circle">⚡</div>
              <div>
                <h4>Fast Login</h4>
                <p>Quick authentication for smooth user experience.</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Section */}
        <main className="auth-card" role="region" aria-label="Login Form">
          <h2 className="mb-3" style={{ fontSize: "22px" }}>
            Login
          </h2>

          <form
            action="./server/requests.php"
            method="POST"
            noValidate
          >
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="actions">
              <a className="forgot-link" href="#">
                Forgot password?
              </a>
              <button type="submit" className="btn" name="login" value="login">
                Log in
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
