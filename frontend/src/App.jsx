import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch(() => setError("Backend connection failed"));
  }, []);

  return (
    <div style={styles.container}>
      <h1>🚀 Coolify Test</h1>

      <p>React Frontend</p>

      <div style={styles.card}>
        <h2>Backend Status</h2>

        {data && (
          <>
            <p>✅ Connected</p>
            <p>{data.message}</p>
            <p>Environment: {data.environment}</p>
          </>
        )}

        {error && <p>❌ {error}</p>}

        {!data && !error && <p>Connecting to backend...</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    textAlign: "center",
    minWidth: "300px"
  }
};

export default App;