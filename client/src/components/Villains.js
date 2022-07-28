import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import VillainUpdate from './VillainUpdate'

const Villains = () => {
  let navigate = useNavigate()
  const [villains, setVillains] = useState([])

  useEffect(() => {
    const getVillains = async () => {
      const res = await axios.get('http://localhost:3001/villains')
      setVillains(res.data)
      console.log(res.data)
    }
    getVillains()
  }, [])

  const deleteVillain = async (id) => {
    const res = await axios.delete(`http://localhost:3001/villains/${id}`)
    console.log('villain deleted')
  }

  const refreshVillains = (index) => {
    let temp = [...villains]
    temp.splice(index, 1)
    setVillains(temp)
  }

  const updateVillain = (villainId) => {
    navigate('./new2', { state: { id: villainId } })
  }

  return (
    <div>
      <div className="villainBox">
        {villains.map((villain) => (
          <div className="villainCard" key={villain.name}>
            <h1> {villains != null ? villain.name : ''}</h1>
            <img className="imageBox" src={villain.image} />
            <button
              onClick={() => {
                deleteVillain(villain._id)
                refreshVillains(villains.indexOf(villain))
              }}
            >
              Kill
            </button>
            <button onClick={() => updateVillain(villain._id)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Villains
