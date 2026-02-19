import { useScreenState } from "../hooks/useScreenState";

export default function AudienceScreen() {
  const { state, changeState } = useScreenState();

  const neonColors = {
    Idle: "#0ff",      // Cyan
    Active: "#f0f",    // Magenta
    Error: "#ff0066",  // Neon Pink
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#000", // خلفية سوداء للنيون
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Orbitron, sans-serif",
        color: neonColors[state],
        transition: "0.4s ease",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          textShadow: `0 0 10px ${neonColors[state]}, 0 0 20px ${neonColors[state]}`,
          marginBottom: "10px",
        }}
      >
        Audience Screen
      </h1>

      <h2
        style={{
          fontSize: "26px",
          marginBottom: "30px",
          textShadow: `0 0 8px ${neonColors[state]}`,
        }}
      >
        Current State: {state}
      </h2>

      <button
        onClick={changeState}
        style={{
          padding: "14px 28px",
          fontSize: "20px",
          borderRadius: "8px",
          border: `2px solid ${neonColors[state]}`,
          background: "transparent",
          color: neonColors[state],
          cursor: "pointer",
          textShadow: `0 0 8px ${neonColors[state]}`,
          boxShadow: `0 0 12px ${neonColors[state]}`,
          transition: "0.3s",
        }}
      >
        Change State
      </button>
    </div>
  );
}
