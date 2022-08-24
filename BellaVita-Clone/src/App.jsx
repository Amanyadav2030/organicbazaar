import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AllRoutes from './Routes/AllRoutes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AllRoutes />
    </div>
  )
}

export default App
