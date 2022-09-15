import React from 'react'

export default function DaterTile({dater, matchmaker, buttonText, onAddToRoster}) {
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
        onAddToRoster(dater.id)
  }
  return (
    <div className="dater-tiles">
        <p>{dater.username}</p>
        <img src={dater.image} width= "300px" height="300px"/>
        <p>Age: {dater.age}</p>
        <p>Interested in: {dater.interested_in}</p>
        <button className="dater-buttons">View Profile</button>
        <button onClick = {onAddClient} className="dater-buttons">{buttonText}</button>

    </div>
  )
}
