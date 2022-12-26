import React from "react";

function Temp() {
  return (
    <div className="calculator">
      <div id="display">
        <input
          type="text"
          className="calculator-display"
          value="1 + 6 + 5 / 3"
          disabled
        />
        <input type="text" className="calculator-screen" value="0" disabled />
      </div>

      <div className="calculator-keys">
        <button type="button" id="add" className="operator" value="+">
          +
        </button>
        <button type="button" id="subtract" className="operator" value="-">
          -
        </button>
        <button type="button" id="multiply" className="operator" value="*">
          &times;
        </button>
        <button type="button" id="divide" className="operator" value="/">
          &divide;
        </button>

        <button type="button" id="seven" value="7">
          7
        </button>
        <button type="button" id="eight" value="8">
          8
        </button>
        <button type="button" id="nine" value="9">
          9
        </button>

        <button type="button" id="four" value="4">
          4
        </button>
        <button type="button" id="five" value="5">
          5
        </button>
        <button type="button" id="six" value="6">
          6
        </button>

        <button type="button" id="one" value="1">
          1
        </button>
        <button type="button" id="two" value="2">
          2
        </button>
        <button type="button" id="three" value="3">
          3
        </button>

        <button type="button" id="zero" value="0">
          0
        </button>
        <button type="button" id="decimal" className="decimal" value=".">
          .
        </button>
        <button
          type="button"
          id="clear"
          className="all-clear"
          value="all-clear"
        >
          AC
        </button>

        <button type="button" id="equals" className="equal-sign" value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default Temp;
