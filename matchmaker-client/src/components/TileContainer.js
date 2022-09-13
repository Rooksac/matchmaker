import React from 'react'
import DaterTile from './DaterTile'

export default function ({tiles}) {
  return (
    <div className="tile-container">
      {tiles.map ((tile)=>{<DaterTile dater = {tile}/>})}
    </div>
  )
}
