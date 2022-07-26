import { useState, useEffect } from 'react'
import axios from 'axios'

const Bonds = () => {
  const [bonds, setBonds] = useState([])

  useEffect(() => {
    const getBonds = async () => {
      const res = await axios.get('http://localhost:3001/bonds')
      setBonds(res.data)
      console.log(bonds)
    }
    getBonds()
  }, [])

  return (
    <div>
      <div className="bondBox">
        {bonds.map((bond) => (
          <div className="bondCard" key={bond.name}>
            <h1> {bonds != null ? bond.name : ''}</h1>
            <img className="imageBox" src={bond.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bonds
