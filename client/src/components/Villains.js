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

  const deleteVillain = async (id) => {
    const res = await axios.delete(`http://localhost:3001/villains/${id}`)
    console.log('villain deleted')
  }

  return (
    <div>
      <div className="villainBox">
        {villains.map((villain) => (
          <div className="villainCard" key={villain.name}>
            <h1> {villains != null ? villain.name : ''}</h1>
            <img className="imageBox" src={villain.image} />
            <button onClick={() => deleteVillain(villain._id)}>Kill</button>
            <button>Update</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Villains
