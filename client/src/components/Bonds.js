import { useState, useEffect } from 'react'
import axios from 'axios'

const Bonds = () => {
  const [bonds, setBonds] = useState([])

  useEffect(() => {
    const getBonds = async () => {
      const res = await axios.get('http://localhost:3001/bonds')
      setBonds(res.data)
      console.log(res.data)
    }
    getBonds()
  }, [])

  return (
    <div>
      <div className="bondBox">
        {bonds.map((bond) => (
          <div className="bondCard" key={bond.name}>
            <h2> {bonds != null ? bond.name : ''}</h2>
            <h3> {bond.years}</h3>
            <img className="imageBox" src={bond.image} />

            <h3>Movie Count: {bond.movie_count}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bonds
