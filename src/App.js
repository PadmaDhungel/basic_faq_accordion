import { useState } from "react";
import "./styles.css";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2>FAQ Accordion</h2>
      <div className="accordion">
        <p>
          What is ReactJs?
          <button onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
        </p>
      </div>
    </div>
  );
}
