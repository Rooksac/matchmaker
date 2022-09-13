import React from 'react'

export default function DaterTile({dater}) {
  // function onAddMatch(){
  //   fetch('http://localhost:9292/login/matchmaker', {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(loginInfo),
  //           })
  //       .then((response) => response.json())
  //       .then((data) => handleLogIn(data))
  // }
  return (
    <div>
        <img/>
        <p>{dater.username}, Age: {dater.age} interested in: {dater.interested_in}</p>
        <button>View Profile</button>
        <button>Match with my client!</button>

    </div>
  )
}
