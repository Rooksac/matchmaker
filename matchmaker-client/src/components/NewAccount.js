import React, {useState, useEffect} from 'react'
import MatchmakerSignUp from './MatchmakerSignUp'
import DaterSignUp from './DaterSignUp'

export default function NewAccount() {
  const [clickedMatchMaker, setClickedMatchMaker] = useState(false)
  const [clickedDater, setClickedDater] = useState(false)
  const [daterImages, setDaterImages] = useState([])
  const [datedImages, setDatedImages] = useState([])
  function handleMatchMakerClick(){
    setClickedMatchMaker(clickedMatchMaker => !clickedMatchMaker)
  }

  function handleDaterClick(){
    setClickedDater(clickedDater => !clickedDater)
  }

  function getMatchInfo(){
    fetch("http://localhost:9292/matchhistory")
    .then((r)=> r.json())
    .then((data) => {
      setDaterImages(data[0])
      setDatedImages(data[1])
    })  
  }
  
  function resetMatchmakerForm(){
    setClickedMatchMaker(false)
  }

  function resetDaterForm() {
    setClickedDater(false)
  }
  
  
  useEffect(getMatchInfo, [])
  
  return (
    <div>
      <div><h1 className='successheader'>Matchmaker Success Stories!</h1></div>
      <div className='flex-homepage' >
        <div className='matchmaker-success'>
        <div>
        { daterImages.map(image => 
          <img src={image} width="200px" height="200px" className="success-images"/>
        )} 
        </div>
        <div>
        { datedImages.map(image => 
          <img src={image} width="200px" height="200px" className="success-images"/>
        )} 
        </div>
      </div>
      
      <div className="signup-border">
          <h2 className="signup-header">Join the Matchmaker Community!</h2>
          <button onClick={handleMatchMakerClick} className="signup-button">Matchmaker Registration</button>
          <button onClick={handleDaterClick} className="signup-button">Dater Registration</button>
          {clickedMatchMaker ? <MatchmakerSignUp  reset = {resetMatchmakerForm}/> : null}
          {clickedDater ? <DaterSignUp reset = {resetDaterForm}/> : null}
      </div>
      </div>
    </div>
  )
}
