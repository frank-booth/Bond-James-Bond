import { useState, useEffect } from 'react'

const Home = () => {
  return (
    <div className="homepage">
      <img className="bondGif" src="https://i.gifer.com/KYAg.gif"></img>
      <div>
        <audio
          className="audioControls"
          src="https://ia600908.us.archive.org/14/items/tvtunes_6995/James%20Bond%20%28Original%29.mp3"
          type="audio/mpeg"
          controls
        ></audio>
      </div>
    </div>
  )
}

export default Home
