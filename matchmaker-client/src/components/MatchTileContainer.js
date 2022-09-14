import React from 'react'
import MatchTile from './MatchTile'

export default function MatchTileContainer({matchmaker, tiles}) {
  return (
    <div>
        {tiles.map(tile =><MatchTile dater={tile} matchmaker={matchmaker} />)}
    </div>
  )
}
