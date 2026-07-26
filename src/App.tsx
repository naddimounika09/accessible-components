import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="container">
      <h1>Accessible Component Fundamentals</h1>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginTop: "-20px",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Three accessible React components built from scratch using React,
        TypeScript, and WAI-ARIA best practices.
      </p>

      {/* Modal Section */}
      <section className="section">
        <h2>Accessible Modal</h2>
        <p
          style={{
            marginBottom: "20px",
            color: "#555",
          }}
        >
          A fully accessible modal dialog with keyboard navigation, focus
          trapping, and ARIA support.
        </p>

        <Modal />
      </section>

      {/* Tabs Section */}
      <section className="section">
        <h2>Accessible Tabs</h2>
        <p
          style={{
            marginBottom: "20px",
            color: "#555",
          }}
        >
          Navigate between different panels using mouse or keyboard arrow keys.
        </p>

        <Tabs />
      </section>

      {/* Accordion Section */}
      <section className="section">
        <h2>Accessible Accordion</h2>
        <p
          style={{
            marginBottom: "20px",
            color: "#555",
          }}
        >
          Expand and collapse content while maintaining accessibility with
          proper ARIA attributes.
        </p>

        <Accordion />
      </section>
    </div>
  );
}

export default App;