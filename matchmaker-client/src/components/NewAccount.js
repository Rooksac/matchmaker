import React from 'react'
import MatchmakerSignUp from './MatchmakerSignUp'
import DaterSignUp from './DaterSignUp'

export default function NewAccount() {
  return (
    <div>
        <h2>Join the Matchmaker Community!</h2>
        <MatchmakerSignUp />
        <DaterSignUp />
    </div>
  )
}
