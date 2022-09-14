import React from 'react'
import DaterTile from './DaterTile'
import ClientTile from './ClientTile'

export default function TileContainer ({tiles, matchmaker, callback}) {
  return (
    <div className="tile-container">
      {tiles.map(tile=><DaterTile buttonText = {'add client'} matchmaker = {matchmaker} dater = {tile} callback={callback}/>)}
    </div>
  )
}
