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
      <h1>Bonds Page</h1>
      <div>
        {bonds.map((bond) => (
          <div key={bond.name}>
            <h1> {bond.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bonds
