import React, { useState } from "react";

function StuResultCal() {
  const [engMarks, setEngMarks] = useState("");
  const [mathsMarks, setMathsMarks] = useState("");
  const [sciMarks, setSciMarks] = useState("");
  const [statMarks, setStatMarks] = useState("");
  const [phyMarks, setPhyMarks] = useState("");

  const [totalMarks, setTotalMarks] = useState("");
  const [percentage, setPercentage] = useState("");
  const [grade, setGrade] = useState("");

  const result = () => {
    let totalSum =
      Number(engMarks) +
      Number(mathsMarks) +
      Number(sciMarks) +
      Number(statMarks) +
      Number(phyMarks);
    console.log(totalSum);
    setTotalMarks(totalSum)

    let per = ((totalSum / 500) * 100).toFixed(2);
    console.log(per);
    setPercentage(per)

    let grade;
    if (per < 0 || per > 100) {
      grade = "Invalid Percentage";
    } else if (per >= 80) {
      grade = "A";
    } else if (per >= 70) {
      grade = "B";
    } else if (per >= 60) {
      grade = "C";
    } else if (per >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
    console.log(grade);
    setGrade(grade)

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 px-4">
      <div className="w-full max-w-lg bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Student Result Calculator
        </h2>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 text-white/90 font-medium">
              English
            </label>
            <input
              type="number"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setEngMarks(value);
              }}
              value={engMarks}
              min={0}
              max={100}
            />
          </div>

          <div>
            <label className="block mb-1 text-white/90 font-medium">
              Maths
            </label>
            <input
              type="number"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              min={0}
              max={100}
              onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setMathsMarks(value);
              }}
              value={mathsMarks}
            />
          </div>

          <div>
            <label className="block mb-1 text-white/90 font-medium">
              Science
            </label>
            <input
              type="number"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              min={0}
              max={100}
              onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setSciMarks(value);
              }}
              value={sciMarks}
            />
          </div>

          <div>
            <label className="block mb-1 text-white/90 font-medium">
              Statistics
            </label>
            <input
              type="number"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              min={0}
              max={100}
              onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setStatMarks(value);
              }}
              value={statMarks}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-1 text-white/90 font-medium">
              Physics
            </label>
            <input
              type="number"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              min={0}
              max={100}
              onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setPhyMarks(value);
              }}
              value={phyMarks}
            />
          </div>
        </div>

        {/* Button */}
        <button
          className="mt-8 w-full bg-white/60 hover:bg-white/40 text-white font-semibold py-3 rounded-xl transition"
          onClick={() => result()}
        >
          Calculate Result
        </button>

        <hr className="mt-8 w-full h-px bg-white/60 border-0" />

        {/* Result */}
        <div className="mt-8 bg-white/25 border border-white/30 rounded-2xl p-5 space-y-3 text-white">
          <div className="flex justify-between">
            <span>Total Marks</span>
            <span>
              {totalMarks}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Percentage</span>
            <span>
              {percentage}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Grade</span>
            <span>
              {grade}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StuResultCal;
