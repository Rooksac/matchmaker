import React from 'react'

export default function ClientTile({dater, matchmaker, callback, onFindMatchClick}) {
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
        <img src={dater.image}/>
        <p>{dater.username}, Age: {dater.age} interested in: {dater.interested_in}</p>
        <button>View Profile</button>
        <button onClick = {()=>onFindMatchClick(dater.id)}>Find a Match!</button>
        <button onClick = {handleClick}>Set this client free!</button>
    </div>
  )
}
