import React, {useState} from 'react'
import TileContainer from './TileContainer'
import DaterTile from './DaterTile'
import ClientTile from './ClientTile'

export default function MatchmakerHome({matchmaker}) {
  const [showDaters, setShowDaters] = useState(false)
  const [availableClients, setAvailableClients] = useState([])
  function handleClick(){
    setShowDaters(!showDaters)
    fetch('http://localhost:9292/availabledaters')
    .then((res)=>res.json())
    .then((data)=>setAvailableClients(data))
  }
  return (
    <div>

      <h1>{`Welcome back ${matchmaker[0].username}!`}</h1>
      {matchmaker[1].length<1?<button onClick = {handleClick}>Search for a client</button>:<ClientTile dater = {matchmaker[1][0]} matchmaker = {matchmaker[0]}/>}
      {matchmaker[1].length<2?<button onClick = {handleClick}>Search for a client</button>:<ClientTile dater = {matchmaker[1][1]} matchmaker = {matchmaker[0]}/>}
      {matchmaker[1].length<3?<button onClick = {handleClick}>Search for a client</button>:<ClientTile dater = {matchmaker[1][2]} matchmaker = {matchmaker[0]}/>}

      {showDaters?<TileContainer matchmaker = {matchmaker[0]} tiles = {availableClients} />:null}

    </div>
  )
}
