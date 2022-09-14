import React from 'react'

export default function ClientTile({dater, matchmaker, callback}) {
    function handleClick(){
        fetch('http://localhost:9292/delete-client', {
  method: 'PATCH',
  body: JSON.stringify({
    dater_id: dater.id,
    matchmaker_id: matchmaker.id
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  callback(dater.id)
    }
  return (
    <div>
        <img/>
        <p>{dater.username}, Age: {dater.age} interested in: {dater.interested_in}</p>
        <button>View Profile</button>
        <button>Find a Match!</button>
        <button onClick = {handleClick}>Set this client free!</button>
    </div>
  )
}
