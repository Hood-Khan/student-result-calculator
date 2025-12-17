import React from 'react'

function StuResultCal() {
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
              type="text"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/90 font-medium">
              Maths
            </label>
            <input
              type="text"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/90 font-medium">
              Science
            </label>
            <input
              type="text"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/90 font-medium">
              Statistics
            </label>
            <input
              type="text"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-1 text-white/90 font-medium">
              Physics
            </label>
            <input
              type="text"
              className="w-full bg-white/30 border border-white/40 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 w-full bg-white/60 hover:bg-white/40 text-white font-semibold py-3 rounded-xl transition">
          Calculate Result
        </button>

        <hr className="mt-8 w-full h-px bg-white/60 border-0" />


        {/* Result */}
        <div className="mt-8 bg-white/25 border border-white/30 rounded-2xl p-5 space-y-3 text-white">
          <div className="flex justify-between">
            <span>Total Marks</span>
            <span>T</span>
          </div>
          <div className="flex justify-between">
            <span>Percentage</span>
            <span>T</span>
          </div>
          <div className="flex justify-between">
            <span>Grade</span>
            <span>T</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StuResultCal
