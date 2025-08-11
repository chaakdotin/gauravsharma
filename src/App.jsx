import { useState } from 'react'
import './assets/css/App.css'
import Header from './header'
import Home from './home'
import Work from './work1'
import Work2 from './work1'
import Work3 from './work1'
import Work4 from './work1'
import Work5 from './work1'
import Work6 from './work1'
import Work7 from './work1'
import Work8 from './work1'
import Motionmotion from './motionmotion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {

  // const [count, setCount] = useState(0)

  return (
    <Router>
      
      <Header />
      {/* <img src="./demo/Screenshot 2025-08-02 at 18.23.53.png" alt="" style={{position:"fixed",zIndex:-1, pointerEvents:"none", opacity:0.5, width:"100vw",height:"100vh", top:0, left:0}}/> */}
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/work" element={<Work1 />} />
        <Route path="/work" element={<Work2 />} />
        <Route path="/work" element={<Work3 />} />
        <Route path="/work" element={<Work4 />} />
        <Route path="/work" element={<Work5 />} />
        <Route path="/work" element={<Work6 />} />
        <Route path="/work" element={<Work7 />} />
        <Route path="/work" element={<Work8 />} />
        <Route path="/work/motionmotion" element={<Motionmotion />} />
      </Routes>
    </Router>
  )
}

export default App
