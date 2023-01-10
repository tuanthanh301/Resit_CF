import React, { useState } from "react";

const App = () => {
  function integer_to_roman(num) {
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman_num = "",
      i = 3;
    while (i--) roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
  }
  // console.log(integer_to_roman(600));
    const [numberToRoman, setNumberToRoman] = useState("where magics happen");
    const [checkInput, setCheckInput] = useState("");
    const handleOnchange = (event) => {
      const value = event.target.value;
      
      console.log(event);
      function isNumeric(str) {
        if (typeof str != "string") return false  
        return !isNaN(str) && !isNaN(parseFloat(str)) 
      }
      if (Number(value) >= 3000){
        setCheckInput("Your number must be integer and lower than 3000.")
        setNumberToRoman("")
      } else if (value === ""){
        setCheckInput("")
        setNumberToRoman("")
      } else if (!isNumeric(value)){
        setCheckInput("Please input a number")
        setNumberToRoman("")
      }
      else {
        setCheckInput("Correct")
        setNumberToRoman(integer_to_roman(value))
      }
    };
    
    
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ width: "60%", height: "50vh", border: "1px black solid" }}
        >
          <div
            style={{
              width: "100%",
              height: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "40px", marginTop: "30px" }}>
              Decimal to ROMAN
            </h1>
            <p>Enter your decimal number and magic will happens</p>
          </div>
          <div
            style={{
              width: "100%",
              height: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              style={{ width: "50%", height: "10%", marginTop: "60px" }}
              placeholder="Enter your decimal number"
              onChange={handleOnchange}
              
            ></input>
            <p>
              {checkInput}
            </p>
            <p
              style={{ fontSize: "40px", marginTop: "10px", fontWeight: "500" }}
             >
             {numberToRoman}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
