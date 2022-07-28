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

  const updateVillain = (villain) => {
    navigate('./update', { state: { villain: villain } })
  }

  return (
    <div>
      <div className="villainBox">
        {villains.map((villain) => (
          <div className="villainCard" key={villain.name}>
            <h1> {villains != null ? villain.name : ''}</h1>
            <img className="imageBox" src={villain.image} />
            <h2>{villain.movies}</h2>
            <div className="descriptionBox">
              <p>{villain.description}</p>
            </div>
            <div className="villainButtonContainer">
              <button
                className="villainButton"
                id="deleteButton"
                onClick={() => {
                  deleteVillain(villain._id)
                  refreshVillains(villains.indexOf(villain))
                }}
              >
                Kill
              </button>
              <button
                className="villainButton"
                onClick={() => updateVillain(villain)}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Villains
