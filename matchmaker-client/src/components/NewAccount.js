import React, {useState} from 'react'
import MatchmakerSignUp from './MatchmakerSignUp'
import DaterSignUp from './DaterSignUp'

export default function NewAccount() {
  const [clickedMatchMaker, setClickedMatchMaker] = useState(false)
  const [clickedDater, setClickedDater] = useState(false)

  function handleMatchMakerClick(){
    setClickedMatchMaker(clickedMatchMaker => !clickedMatchMaker)
  }

  function handleDaterClick(){
    setClickedDater(clickedDater => !clickedDater)
  }
  return (
    <div className="signin-border">
        <h2>Join the Matchmaker Community!</h2>
        <button onClick={handleMatchMakerClick} >Matchmaker Registration</button>
        <button onClick={handleDaterClick} >Dater Registration</button>
        {clickedMatchMaker ? <MatchmakerSignUp /> : null}
        {clickedDater ? <DaterSignUp /> : null}
    </div>
  )
}
