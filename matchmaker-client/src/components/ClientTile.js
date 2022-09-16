import React from "react";

export default function ClientTile({
  dater,
  matchmaker,
  callback,
  onFindMatchClick,
  buttonText,
  conditionalClick,
}) {
  function handleSetClientFreeClick() {
    fetch("http://localhost:9292/delete-client", {
      method: "PATCH",
      body: JSON.stringify({
        dater_id: dater.id,
        matchmaker_id: matchmaker.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    callback(dater.id);

    conditionalClick();
  }
  return (
    <div className="client-tiles">
      <p>{dater.username}</p>
      <img src={dater.image} width="200px" height="200px" />
      <p>Age: {dater.age}</p>
      <p>
         Interested in: {dater.interested_in}
      </p>
      <button
        onClick={() => onFindMatchClick(dater.id)}
        className="matchmaker-clients"
      >
        {buttonText}
      </button>
      <button onClick={handleSetClientFreeClick} className="matchmaker-clients">
        Set this client free!
      </button>
    </div>
  );
}
