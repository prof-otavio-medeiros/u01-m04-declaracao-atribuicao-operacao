function showValue(direction) {
  let x = 6;
  let y = 4;
  const iframeMain = document.getElementById("iframeMain");
  const divMain = iframeMain.contentWindow.document.getElementById("divMain");
  if (direction === "FORWARD" && arrValuesIndex < arrValues.length) {
    let result;
    let value = arrValues[arrValuesIndex].value;
    const operator = arrValues[arrValuesIndex].operator;
    const isLabel = arrValues[arrValuesIndex].isLabel;
    if (isLabel) {
      divElement = document.createElement("div");
      divMain.appendChild(divElement);
      arrValuesIndex++;
      divElement.innerHTML = `<span id="idLabel">${value}</span></br>`;
      isResultHidden = true;
    } else {
      if (operator === "++" || operator === "--") {
        result = eval(operator + "x");
      } else {
        result = eval("x " + operator + " y");
      }
      if (isResultHidden) {
        divElement = document.createElement("div");
        divMain.appendChild(divElement);
      } else {
        arrValuesIndex++;
      }
      let varResult = operator === "++" || operator === "--" ? "x" : "z";
      divElement.innerHTML = `
<pre>
  <code>
<span id="idValue">${operator === "++" || operator === "--" ? `x${operator}` : `let z = x ${operator} y;`}</span></br>
<span class="classResult" ${isResultHidden ? "hidden" : ""}>      
  ${varResult}        -> ${result}
  typeof ${varResult} -> ${typeof result}
</span>
  </code>
</pre>`;
      isResultHidden = !isResultHidden;
    }
  } else if (direction === "BACKWARD" && arrValuesIndex > 0) {
    const childrenElement = divMain.children.item(--arrValuesIndex);
    childrenElement.remove();
  }
  iframeMain.contentWindow.scroll(1, 999999);
}

let arrValuesIndex = 0;
let isResultHidden = true;
let divElement;

let arrValues = [
  {
    value: `OPERAÇÕES ARITMÉTICAS`,
    isLabel: true,
  },
  {
    operator: "+",
    isLabel: false,
  },
  {
    operator: "-",
    isLabel: false,
  },
  {
    operator: "*",
    isLabel: false,
  },
  {
    operator: "/",
    isLabel: false,
  },
  {
    operator: "%",
    isLabel: false,
  },
  {
    operator: "**",
    isLabel: false,
  },
  {
    operator: "++",
    isLabel: false,
  },
  {
    operator: "--",
    isLabel: false,
  },
];
