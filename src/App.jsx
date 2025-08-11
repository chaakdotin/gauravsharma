import { useState } from 'react'
import './assets/css/App.css'
import Header from './Header'
import Home from './home'
import Work1 from './work1'
import Motionmotion from './motionmotion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {

  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      {/* <img src="./demo/Screenshot 2025-08-02 at 18.23.53.png" alt="" style={{position:"fixed",zIndex:-1, pointerEvents:"none", opacity:0.5, width:"100vw",height:"100vh", top:0, left:0}}/> */}
      <Routes>
        <Route path="/" element={<Work1 />} />
        <Route path="/work" element={<Work1 />} />
        <Route path="/work/motionmotion" element={<Motionmotion />} />
      </Routes>
    </Router>
  )
}

export default App
