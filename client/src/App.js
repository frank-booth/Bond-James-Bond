import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Bonds from './components/Bonds'
import Movies from './components/Movies'
import Villains from './components/Villains'
import VillainsForm from './components/VillainsForm'
import VillainUpdate from './components/VillainUpdate'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/villains" element={<Villains />} />
          <Route path="add" element={<VillainsForm />} />
          <Route path="/villains/update" element={<VillainUpdate />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
