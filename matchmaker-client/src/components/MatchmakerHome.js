import React from 'react'
import TileContainer from './TileContainer'

export default function MatchmakerHome({matchmaker}) {
  return (
    <div>

      <h1>{`Welcome back ${matchmaker.username}!`}</h1>
      

      <TileContainer />

    </div>
  )
}
