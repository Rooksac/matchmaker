import React, { useState, useEffect } from "react";
import DaterTileContainer from "./DaterTileContainer";
import MatchTileContainer from "./MatchTileContainer";
import ClientTile from "./ClientTile";

export default function MatchmakerHome({ matchmaker, handleLogOut }) {
  let curClients = matchmaker.daters;
  const [showDaters, setShowDaters] = useState(false);
  const [availableClients, setAvailableClients] = useState([]);
  const [roster, setRoster] = useState(curClients);
  const [eligibleDaters, setEligibleDaters] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
  const [lookForMatch, setLookForMatch] = useState("");
  let buttonText = showMatches ? "Cancel" : "Find a Match";
  function onFindMatchClick(id) {
    setShowMatches(!showMatches);
    setLookForMatch(id);

    fetch(`http://localhost:9292/find-match/${id}`)
      .then((res) => res.json())
      .then((data) => setEligibleDaters(data));
  }
  function handleLoad() {
    fetch("http://localhost:9292/availabledaters")
      .then((res) => res.json())
      .then((data) => setAvailableClients(data));
  }
  function handleClientClick() {
    setShowDaters(!showDaters);
  }

  function onDelete(id) {
    let updatedRoster = roster.filter((dater) => dater.id !== id);
    setRoster(updatedRoster);
    let updatedClients = roster.filter((dater) => dater.id === id);
    setAvailableClients([...availableClients, ...updatedClients]);
  }
  function onAddToRoster(id) {
    let updatedClients = availableClients.filter((dater) => dater.id !== id);
    setAvailableClients(() => updatedClients);
    let updatedRoster = availableClients.filter((dater) => dater.id === id);
    setRoster([...roster, ...updatedRoster]);
    setShowDaters(!showDaters);
  }

  function handleMakeAMatch(daterId, datedId) {
    let updatedRoster = roster.filter((dater) => dater.id !== daterId);
    console.log(updatedRoster);
    setRoster(updatedRoster);
    let updatedClients = availableClients.filter(
      (dater) => dater.id !== datedId
    );
    console.log(updatedClients);
    setAvailableClients(updatedClients);
    setShowMatches(!showMatches);
  }

  function conditionalClick() {
    if (showMatches === true) {
      setShowMatches(false)
    } 
  }

  useEffect(handleLoad, []);

  return (
    <div className="matchhome, matchmaker-home">
      <div className="header">
        <button onClick={handleLogOut} className="logout-button">Logout</button>
        <h1 className="welcome-matchmaker">{`Welcome back ${matchmaker.username}!`}</h1>
        {/* <button onClick={handleLogOut} className="logout-button">Logout</button> */}
      </div>
      <div>
        <h2 className="myclients">My Clients:</h2>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div
            style={{
              width: "50vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              overflow: "scroll",
              maxHeight: "75vh",
              padding: "2rem",
            }}
          >
            {roster.length < 1 ? (
              <button
                onClick={handleClientClick}
                className="matchmaker-clients"
              >
                Search for a client
              </button>
            ) : (
              <ClientTile
                dater={roster[0]}
                matchmaker={matchmaker}
                callback={onDelete}
                onFindMatchClick={onFindMatchClick}
                buttonText={buttonText}
                conditionalClick={conditionalClick}
              />
            )}
            {roster.length < 2 ? (
              <button
                onClick={handleClientClick}
                className="matchmaker-clients"
              >
                Search for a client
              </button>
            ) : (
              <ClientTile
                dater={roster[1]}
                matchmaker={matchmaker}
                callback={onDelete}
                onFindMatchClick={onFindMatchClick}
                buttonText={buttonText}
                conditionalClick={conditionalClick}
              />
            )}
            {roster.length < 3 ? (
              <button
                onClick={handleClientClick}
                className="matchmaker-clients"
              >
                Search for a client
              </button>
            ) : (
              <ClientTile
                dater={roster[2]}
                matchmaker={matchmaker}
                callback={onDelete}
                onFindMatchClick={onFindMatchClick}
                buttonText={buttonText}
                conditionalClick={conditionalClick}
              />
            )}
          </div>
          <div
            style={{
              width: "50vw",
              overflow: "scroll",
              display: "flex",
              maxHeight: "80vh",
            }}
          >
            {showDaters ? (
              <DaterTileContainer
                matchmaker={matchmaker}
                tiles={availableClients}
                onAddToRoster={onAddToRoster}
              />
            ) : null}
            {showMatches ? (
              <MatchTileContainer
                matchmaker={matchmaker}
                tiles={eligibleDaters}
                onFindMatchClick={onFindMatchClick}
                lookForMatch={lookForMatch}
                handleMakeAMatch={handleMakeAMatch}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
