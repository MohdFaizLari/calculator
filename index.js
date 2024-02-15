let inputValues = [];
let clearInput = () => {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("resultCont").innerText = "";
  inputValues = [];
};
let operatorOperations = (e) => {
  if (e.target.id === "addition") {
    let result = Number(inputValues[0].value) + Number(inputValues[1].value);
    document.getElementById("resultCont").innerText = "Result is = " + result;
    console.log(result);
  } else if (e.target.id === "substraction") {
    let result = Number(inputValues[0].value) - Number(inputValues[1].value);
    document.getElementById("resultCont").innerText = "Result is = " + result;
    console.log(result);
  } else if (e.target.id === "multipication") {
    let result = Number(inputValues[0].value) * Number(inputValues[1].value);
    document.getElementById("resultCont").innerText = "Result is = " + result;
    console.log(result);
  } else if (e.target.id === "division") {
    let result = Number(inputValues[0].value) / Number(inputValues[1].value);
    document.getElementById("resultCont").innerText = "Result is = " + result;
    console.log(result);
  }
};

let operatorsEventAttach = () => {
  let opeartors = [
    { id: "addition" },
    { id: "substraction" },
    { id: "multipication" },
    { id: "division" },
  ];

  for (let i = 0; i < opeartors.length; i++) {
    let currentOpt = opeartors[i];
    let operatorCont = document.getElementById(currentOpt.id);
    operatorCont.addEventListener("click", operatorOperations);
  }
};

let inputDataHandler1 = () => {
  let value1Obj = {};
  let value1 = document.getElementById("input1").value;
  value1Obj.id = "input1";
  value1Obj.value = value1;
  inputValues.push(value1Obj);
  console.log("DataStored", value1);
};

let inputDataHandler2 = () => {
  let value2Obj = {};
  let value2 = document.getElementById("input2").value;
  value2Obj.id = "input2";
  value2Obj.value = value2;
  inputValues.push(value2Obj);

  operatorsEventAttach();
  console.log("DataStored", value2);
};

let pageLoadSetup = (() => {
  document.getElementById("clear").addEventListener("click", clearInput);
})();
