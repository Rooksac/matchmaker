import React from 'react'

export default function MatchTile({dater, matchmaker, lookForMatch, handleMakeAMatch}) {
    function onMakeAMatch(id){
        fetch('http://localhost:9292/make-match', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({dater_id: lookForMatch, matchmaker_id: matchmaker.id, dated_id:id}),
            })
        .then((response) => response.json())
        .then((data) => console.log(data))
        handleMakeAMatch(lookForMatch, dater.id)
        alert('Congratulations!  Your client is now in pre-love!')
    }
  return (
    <div className="match-a-client">
        <p>{dater.username}</p>
        <img src={dater.image} width="200px" height="200px"/>
        <p>Age: {dater.age}</p>
        <p>Interested in: {dater.interested_in}</p>
        <button className='dater-buttons'>View Profile</button>
        <button onClick={()=>onMakeAMatch(dater.id)} className='dater-buttons'>Make a Match!</button>
    </div>
  )
}
