import React from 'react'

export default function DaterTile({dater, matchmaker, buttonText, callback}) {
  function onAddClient(){
    fetch('http://localhost:9292/add-client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({dater_id: dater.id, matchmaker_id: matchmaker.id}),
            })
        .then((response) => response.json())
        .then((data) => console.log(data))
        callback(dater.id)
  }
  return (
    <div>
        <img/>
        <p>{dater.username}, Age: {dater.age} interested in: {dater.interested_in}</p>
        <button>View Profile</button>
        <button onClick = {onAddClient}>{buttonText}</button>

    </div>
  )
}
