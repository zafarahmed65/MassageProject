import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />

        {/* You can add more routes for other components as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
