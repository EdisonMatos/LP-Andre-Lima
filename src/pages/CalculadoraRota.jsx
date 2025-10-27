import React from "react";

export default function CalculadoraRota() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <iframe
        src="../calculadora.html"
        width="100%"
        height="100%"
        style={{
          border: "none",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: "12px",
        }}
        loading="lazy"
        title="Calculadora de Rescisão Trabalhista"
      />
    </div>
  );
}
