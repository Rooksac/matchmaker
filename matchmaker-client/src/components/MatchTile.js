import React from 'react'

export default function MatchTile({dater, onFindMatchClick}) {
  return (
    <div>
        <img src={dater.image}/>
        <p>{dater.username}, Age: {dater.age} interested in: {dater.interested_in}</p>
        <button>View Profile</button>
        <button>Make a Match!</button>
    </div>
  )
}
