import React, { useState } from "react";
import axios from "axios";

function App() {
  const [gender, setGender] = useState(1);
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState("");

  const handlePredict = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict/",
        {
          gender,
          age,
          salary,
        }
      );

      setResult(response.data.prediction);
    } catch (error) {
      console.log(error);
      setResult("Something went wrong");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f6fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#1e293b",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          Car Purchase Prediction
        </h1>

        <label style={labelStyle}>Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(Number(e.target.value))}
          style={inputStyle}
        >
          <option value={1}>Male</option>
          <option value={0}>Female</option>
        </select>

        <label style={labelStyle}>Age</label>
        <input
          type="number"
          min="18"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Estimated Salary</label>
        <input
          type="number"
          min="15000"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handlePredict}
          style={{
            width: "100%",
            padding: "14px",
            background: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Predict Now
        </button>

        {result && (
          <div
            style={{
              marginTop: "25px",
              padding: "18px",
              background: "#eff6ff",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "18px",
              color: "#1e40af",
            }}
          >
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  marginTop: "12px",
  fontSize: "15px",
  fontWeight: "600",
  color: "#334155",
};

const inputStyle = {
  width: "100%",
  padding: "13px",
  border: "1px solid #cbd5e1",
  borderRadius: "10px",
  fontSize: "15px",
  outline: "none",
  marginBottom: "10px",
  boxSizing: "border-box",
};

export default App;