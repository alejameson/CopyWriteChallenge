import React from "react";
import { useSelector } from "react-redux";
import "./TextResults.css";

export default function TextResults() {
  const text = useSelector((state) => state.text);
  console.log(text, "TEXT");
  return (
    <div className="text_results">
      <div className="results_title">
        <h1>Results:</h1>
      </div>
      <div className="results_transform_texts">
        {text !== undefined ? <h1>{text}</h1> : <h1>Ingrese una sola palabra</h1>}
      </div>
    </div>
  );
}
