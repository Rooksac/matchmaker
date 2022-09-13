import React from 'react'
import MatchmakerSignUp from './MatchmakerSignUp'
import DaterSignUp from './DaterSignUp'

export default function NewAccount() {

  function handleMatchMakerClick(){
    <MatchmakerSignUp />
  }

  function handleDaterClick(){
    <DaterSignUp />
  }
  return (
    <div>
        <h2>Join the Matchmaker Community!</h2>
        <button onClick={handleMatchMakerClick}>Matchmaker Registration</button>
        <button onClick={handleDaterClick}>Dater Registration</button>
        
    </div>
  )
}
