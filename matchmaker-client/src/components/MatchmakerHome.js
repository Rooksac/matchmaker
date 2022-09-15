import React, {useState, useEffect} from 'react'
import DaterTileContainer from './DaterTileContainer'
import MatchTileContainer from './MatchTileContainer'
import DaterTile from './DaterTile'
import ClientTile from './ClientTile'

export default function MatchmakerHome({matchmaker}) {
  let curClients = matchmaker.daters
  const [showDaters, setShowDaters] = useState(false)
  const [availableClients, setAvailableClients] = useState([])
  const [roster, setRoster] = useState(curClients)
  const [eligibleDaters, setEligibleDaters] = useState([])
  const [showMatches, setShowMatches] = useState(false)
  const [lookForMatch, setLookForMatch] = useState('')
  function onFindMatchClick(id){
    setShowMatches(!showMatches)
    setLookForMatch(id)
    fetch(`http://localhost:9292/find-match/${id}`)
    .then((res)=>res.json())
    .then((data)=>setEligibleDaters(data))
  }
  function handleLoad(){
    fetch('http://localhost:9292/availabledaters')
    .then((res)=>res.json())
    .then((data)=>setAvailableClients(data))
  }
  function handleClientClick(){
    setShowDaters(!showDaters)
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
  }

  function handleMakeAMatch(daterId, datedId){
    let updatedClients = roster.filter(dater=>dater.id!==daterId)
    setRoster(updatedClients)
    let updatedDaters = eligibleDaters.filter(dater=>dater.id!==datedId)
    setRoster(updatedDaters)
  }
  useEffect(handleLoad, [])
  return (

    <div className="matchmaker-home">
      <div className="matchmaker-clients">
      
      {roster.length<1?<button onClick = {handleClientClick} className="matchmaker-clients">Search for a client</button>:<ClientTile dater = {roster[0]} matchmaker = {matchmaker} callback = {onDelete} onFindMatchClick = {onFindMatchClick} />}
      {roster.length<2?<button onClick = {handleClientClick} className="matchmaker-clients">Search for a client</button>:<ClientTile dater = {roster[1]} matchmaker = {matchmaker} callback = {onDelete} onFindMatchClick = {onFindMatchClick} />}
      {roster.length<3?<button onClick = {handleClientClick} className="matchmaker-clients">Search for a client</button>:<ClientTile dater = {roster[2]} matchmaker = {matchmaker} callback = {onDelete} onFindMatchClick = {onFindMatchClick} />}
      </div>
      <div className="header">
      <h1>{`Welcome back ${matchmaker.username}!`}</h1>
      </div>
      {showDaters?<DaterTileContainer matchmaker = {matchmaker} tiles = {availableClients} onAddToRoster={onAddToRoster} />:null}
      {showMatches?<MatchTileContainer matchmaker = {matchmaker} tiles = {eligibleDaters} onFindMatchClick={onFindMatchClick} lookForMatch = {lookForMatch} handleMakeAMatch = {handleMakeAMatch} />:null}


    </div>
  )
}
