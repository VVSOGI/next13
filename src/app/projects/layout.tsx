import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "3rem",
          borderBottom: "1px solid #ececec",
        }}
      >
        <h1>Projects</h1>
      </header>
      <div style={{ position: "relative", flex: 1, display: "flex" }}>
        <aside
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "3rem",
            borderRight: "1px solid #ececec",
          }}
        >
          <h3>sidebar</h3>
        </aside>
        <main style={{ padding: "3rem" }}>{children}</main>
      </div>
    </section>
  );
}
