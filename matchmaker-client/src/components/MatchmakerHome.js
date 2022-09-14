import React, {useState} from 'react'
import TileContainer from './TileContainer'
import DaterTile from './DaterTile'
import ClientTile from './ClientTile'

export default function MatchmakerHome({matchmaker}) {
  let curClients = matchmaker.daters
  const [showDaters, setShowDaters] = useState(false)
  const [availableClients, setAvailableClients] = useState([])
  const [roster, setRoster] = useState(curClients)
  function handleClick(){
    setShowDaters(!showDaters)
    fetch('http://localhost:9292/availabledaters')
    .then((res)=>res.json())
    .then((data)=>setAvailableClients(data))
  }

  function onDelete(id){
    let updatedRoster = roster.filter(dater => dater.id !== id)
    setRoster(updatedRoster)
    let updatedClients = roster.filter(dater => dater.id === id)
    setAvailableClients([...availableClients, ...updatedClients])
  }
  function onAddToRoster(id){
    let updatedClients = availableClients.filter(dater=>dater.id!==id)
    setAvailableClients(()=>updatedClients)
    let updatedRoster = availableClients.filter(dater=>dater.id===id)
    setRoster([...roster, ...updatedRoster])
    setShowDaters(!showDaters)
    console.log(updatedClients)
    console.log(availableClients)
  }
  return (

    <div className="matchmaker-home">
      <div className="matchmaker-clients">
      
      {roster.length<1?<button onClick = {handleClick} className="matchmaker-clients">Search for a client</button>:<ClientTile dater = {roster[0]} matchmaker = {matchmaker} callback = {onDelete}/>}
      {roster.length<2?<button onClick = {handleClick} className="matchmaker-clients">Search for a client</button>:<ClientTile dater = {roster[1]} matchmaker = {matchmaker} callback = {onDelete}/>}
      {roster.length<3?<button onClick = {handleClick} className="matchmaker-clients">Search for a client</button>:<ClientTile dater = {roster[2]} matchmaker = {matchmaker} callback = {onDelete}/>}
      </div>
      <div className="header">
      <h1>{`Welcome back ${matchmaker.username}!`}</h1>
      </div>
      {showDaters?<TileContainer matchmaker = {matchmaker} tiles = {availableClients} callback={onAddToRoster} />:null}


    </div>
  )
}
