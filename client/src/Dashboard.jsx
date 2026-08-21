function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="dashboard-navbar">
        <h1 className="dashboard-logo">NETFLIX</h1>

        <button className="logout-button">
          Sign Out
        </button>
      </nav>

      <main className="dashboard-content">
        <h2>Welcome to Netflix!</h2>

        <p>You have successfully logged in.</p>

        <div className="dashboard-card">
          <h3>Dashboard</h3>
          <p>Enjoy your movies and TV shows.</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;