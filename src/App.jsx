import { useState } from "react";
import paragraph from "./peragraph.json";

function App() {
  let [num, setNum] = useState(0);
  let [para, setPara] = useState([]);

  function generate() {
    if (paragraph.length >= num) {
      let temp = [];
      for (let i = 0; i < num; i++) {
        temp.push(paragraph[i]);
      }
      setPara(temp);
    } else if (paragraph.length < num) {
      alert(
        "Ayyo! You're demanding too many paragraphs in one go, kindly take little by little 😀"
      );
    } else if (num < 0) {
      alert("Ayyo! You know that you wrote a negative input 😵");
    }
  }

  return (
    <div>
      <div >
        <h1>
          TIRED OF BORING LOREM IPSUM?
        </h1>
        <h3 >
          Generate actual paragraphs, not random lorem ipsum
        </h3>
        <div>
          <label>Paragraphs:</label>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)} 
            placeholder="Number of paragraphs"
          />
          <button onClick={generate}>Generate</button>
        </div>
        <div>
          {para.map((item, key) => (
            <p key={key}>
              <span>{key + 1}: </span>
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;