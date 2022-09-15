import React from 'react'
import DaterTile from './DaterTile'

export default function DaterTileContainer ({tiles, matchmaker, onAddToRoster}) {
  return (
    <div class="dater-tile-container">
      {tiles.map(tile=><DaterTile buttonText = {'add client'} matchmaker = {matchmaker} dater = {tile} onAddToRoster={onAddToRoster}/>)}
    </div>
  )
}
