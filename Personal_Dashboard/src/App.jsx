import React from 'react'
import Layout from './components/Layout'

export default function App() {
  return (
    <div className="h-screen p-3 flex justify-center bg-gradient-to-br from-[#07130e] via-[#0f1f17] to-[#1b4332]">
      <div className="h-full w-370 border-2 border-gray-800 rounded-2xl overflow-hidden">
        <Layout />
      </div>
    </div>
  )
}
