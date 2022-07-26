import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Bonds from './components/Bonds'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <main>
        <Routes>
          <Route path="bonds" element={<Bonds />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
