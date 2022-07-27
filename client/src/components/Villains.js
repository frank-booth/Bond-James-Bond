import { useState, useEffect } from 'react'
import axios from 'axios'

const Villains = () => {
  const [villains, setVillains] = useState([])

  useEffect(() => {
    const getVillains = async () => {
      const res = await axios.get('http://localhost:3001/villains')
      setVillains(res.data)
      console.log(villains)
    }
    getVillains()
  }, [])

  return (
    <div>
      <div className="villainBox">
        {villains.map((villain) => (
          <div className="villainCard" key={villain.name}>
            <h1> {villains != null ? villain.name : ''}</h1>
            <img className="imageBox" src={villain.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Villains
