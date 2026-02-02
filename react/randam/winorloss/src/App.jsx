import { useState } from "react";
import "./App.css";

function App() {
  const [inputNum, setInputNum] = useState("");
  const [result, setResult] = useState("");

  // boxes with random numbers (hidden initially)
  const [boxes, setBoxes] = useState(
    Array.from({ length: 4 }, () => ({
      value: Math.floor(Math.random() * 10) + 1,
      show: false,
    })),
  );

  function handleBoxClick(index) {
    if (!inputNum) {
      setResult("❗ Enter a number first");
      return;
    }

    const updatedBoxes = boxes.map((box, i) =>
      i === index ? { ...box, show: true } : box,
    );

    setBoxes(updatedBoxes);

    if (boxes[index].value === Number(inputNum)) {
      setResult("🎉 WIN!");
    } else {
      setResult("❌ LOSE!");
    }
  }

  return (
    <div className="container">
      <h2>🎯 Match the Number Game</h2>

      {/* INPUT */}
      <input
        type="number"
        placeholder="Enter number (1–100)"
        value={inputNum}
        onChange={(e) => setInputNum(e.target.value)}
      />

      {/* BOXES */}
      <div className="boxes">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleBoxClick(index)}
          >
            {box.show ? box.value : "?"}
          </div>
        ))}
      </div>

      {/* RESULT */}
      <h3
        style={{
          color: result.includes("WIN") ? "green" : "red",
        }}
      >
        {result}
      </h3>
    </div>
  );
}

export default App;
