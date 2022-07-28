import { useState, useEffect } from 'react'

const Home = () => {
  const [toggle, setToggle] = useState(false)

  const audio = new Audio(
    'https://ia600908.us.archive.org/14/items/tvtunes_6995/James%20Bond%20%28Original%29.mp3'
  )

  const start = () => {
    audio.play()
  }

  return (
    <div className="homepage">
      <img
        className="bondGif"
        onClick={start}
        src="https://i.gifer.com/KYAg.gif"
      ></img>
    </div>
  )
}

export default Home
