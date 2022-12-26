import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [output, setOutput] = useState("0");
  const [currentValue, setCurrentValue] = useState("");
  const [currentFormula, setCurrentFomula] = useState("");
  const [isEqualsClicked, setIsEqualsClicked] = useState(false);

  const clear = () => {
    setOutput("0");
    setCurrentValue("");
    setCurrentFomula("");
    setIsEqualsClicked(false);
  };

  const typeNumbers = (e) => {
    // Handle zeroes in the start:
    if (currentValue === "0" && e.target.value === "0") {
      setCurrentValue(currentValue);
    } else {
      // If the user starts entering new numbers directly after pressing "=" (without clicking AC)
      if (isEqualsClicked && typeof currentFormula === "number") {
        setOutput(e.target.value);
        setCurrentValue(e.target.value);
        setCurrentFomula(e.target.value);
        setIsEqualsClicked(false);
        // If the user wants to continue the existing calculation after pressing "="
      } else if (isEqualsClicked && typeof currentFormula === "string") {
        setOutput(e.target.value);
        setCurrentValue(e.target.value);
        setCurrentFomula(currentFormula + e.target.value);
        setIsEqualsClicked(false);
        // If it's a first calculation
      } else {
        setOutput(currentValue + e.target.value);
        setCurrentValue(currentValue + e.target.value);
        setCurrentFomula(currentFormula + e.target.value);
        setIsEqualsClicked(false);
      }
    }
  };

  const handleOperators = (e) => {
    let lastChar = currentFormula[currentFormula.length - 1];
    let myRegex = /[+\-*\/]/;

    // The user presses one of the operators for the first time
    if (!myRegex.test(lastChar)) {
      setCurrentFomula(currentFormula + e.target.value);
      setCurrentValue("");
      // The user presses two or more operators consecutively:
    } else {
      // If the user presses "-" and the previous operator is not "-", we keep it:
      if (lastChar !== "-" && e.target.value === "-") {
        setCurrentFomula(currentFormula + e.target.value);
      } else if (e.target.value !== "-" && lastChar === "-") {
        setCurrentFomula(currentFormula.slice(0, -2) + e.target.value);
        setCurrentValue("");

        //If the user presses "*", "+" or "/" and the previous operator is not a "-", we keep the last operator entered:
      } else {
        setCurrentFomula(currentFormula.slice(0, -1) + e.target.value);
      }
    }
  };

  const addDecimal = (e) => {
    let lastChar = currentFormula[currentFormula.length - 1];
    let myRegex = /[+\-*\/]/;

    if (
      !currentValue.includes(".") &&
      isEqualsClicked === false &&
      !myRegex.test(lastChar)
    ) {
      setOutput(output + ".");
      setCurrentValue(currentValue + ".");
      setCurrentFomula(currentFormula + ".");
    }
  };

  const evaluateF = (e) => {
    if (currentFormula !== "") {
      let result = evaluate(currentFormula);
      setOutput(result);
      setCurrentFomula(result);
      setIsEqualsClicked(true);
    }
  };
  return (
    <main>
      <div id="calculator">
        <div id="top">
          <div id="currentFormula">{currentFormula}</div>
          <div id="display">{output}</div>
        </div>

        <div id="bottom">
          <button onClick={clear} id="clear">
            AC
          </button>
          <button onClick={handleOperators} id="divide" value="/">
            /
          </button>
          <button onClick={typeNumbers} id="seven" value="7">
            7
          </button>
          <button onClick={typeNumbers} id="eight" value="8">
            8
          </button>
          <button onClick={typeNumbers} id="nine" value="9">
            9
          </button>
          <button onClick={handleOperators} id="multiply" value="*">
            x
          </button>

          <button onClick={typeNumbers} id="four" value="4">
            4
          </button>
          <button onClick={typeNumbers} id="five" value="5">
            5
          </button>
          <button onClick={typeNumbers} id="six" value="6">
            6
          </button>
          <button onClick={handleOperators} id="subtract" value="-">
            -
          </button>

          <button onClick={typeNumbers} id="one" value="1">
            1
          </button>
          <button onClick={typeNumbers} id="two" value="2">
            2
          </button>
          <button onClick={typeNumbers} id="three" value="3">
            3
          </button>
          <button onClick={handleOperators} id="add" value="+">
            +
          </button>

          <button onClick={typeNumbers} id="zero" value="0">
            0
          </button>
          <button onClick={addDecimal} value="." id="decimal">
            .
          </button>
          <button onClick={evaluateF} value="=" id="equals">
            =
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
