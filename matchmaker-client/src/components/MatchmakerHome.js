import React from 'react'
import TileContainer from './TileContainer'

export default function MatchmakerHome({matchmaker}) {
  return (
    <div>

      <h1>{`Welcome back ${matchmaker[0].username}!`}</h1>
      

      <TileContainer clients = {matchmaker[1]} />

    </div>
  )
}
