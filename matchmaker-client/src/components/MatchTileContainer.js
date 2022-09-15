import React from 'react'
import MatchTile from './MatchTile'

export default function MatchTileContainer({matchmaker, tiles, lookForMatch, handleMakeAMatch}) {
  return (
    <div>
        {tiles.map(tile =><MatchTile dater={tile} matchmaker={matchmaker} lookForMatch = {lookForMatch} handleMakeAMatch = {handleMakeAMatch} />)}
    </div>
  )
}
