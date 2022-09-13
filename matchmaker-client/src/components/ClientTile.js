import React from 'react'

export default function ClientTile({dater}) {
  return (
    <div>
        <img/>
        <p>{dater.username}, Age: {dater.age} interested in: {dater.interested_in}</p>
        <button>View Profile</button>
        <button>Find a Match!</button>
    </div>
  )
}
