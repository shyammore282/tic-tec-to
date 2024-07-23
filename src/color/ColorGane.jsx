import React, { useEffect, useState } from "react";

const ColorGane = () => {
  const [typeOfColor, setTypeOfColor] = useState("Hex");
  const [color, setColor] = useState("#000000");

  const randomUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      colorCode += hex[randomUtility(hex.length)];
    }
    setColor(colorCode);
  };
  const handleCreateRgbColor = () => {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);

    let rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
  };

  useEffect(() => {
    if (typeOfColor === "Rgb") {
      handleCreateRgbColor();
    } else {
      handleCreateHexColor();
    }
  }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        backgroundColor: color,
      }}
    >
      <h2
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Color ganerator
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <button
          style={{
            padding: "5px 10px",
            margin: "0px 10px",
            borderRadius: "10px",
            outline: "none",
          }}
          onClick={() => setTypeOfColor("Hex")}
        >
          Hex color
        </button>
        <button
          style={{
            padding: "5px 10px",
            margin: "0px 10px",
            borderRadius: "10px",
            outline: "none",
          }}
          onClick={() => setTypeOfColor("Rgb")}
        >
          Rgb color
        </button>
        <button
          style={{
            padding: "5px 10px",
            margin: "0px 10px",
            borderRadius: "10px",
            outline: "none",
          }}
          onClick={
            typeOfColor === "Rgb" ? handleCreateRgbColor : handleCreateHexColor
          }
        >
          Color ganerator
        </button>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          margin: "30px",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2>{typeOfColor}</h2>
        <h5>{color}</h5>
      </div>
    </div>
  );
};

export default ColorGane;
