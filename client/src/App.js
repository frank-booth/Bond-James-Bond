import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './components/Home'
import Bonds from './components/Bonds'
import Movies from './components/Movies'
import Villains from './components/Villains'
import MovieCard from './components/MovieCard'
import VillainsForm from './components/VillainsForm'
import VillainUpdate from './components/VillainUpdate'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <main className="page-container">
        <Routes>
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieCard />} />
          <Route path="/villains" element={<Villains />} />
          <Route path="new" element={<VillainsForm />} />
          <Route path="/villains/new2" element={<VillainUpdate />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
