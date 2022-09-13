import React, {useState} from 'react'
import '../App.css';
import SignIn from './SignIn';
import NewAccount from './NewAccount';

import MatchmakerHome from './MatchmakerHome';

function App() {
  const [currentUser, setCurrentUser] = useState('')

  function handleLogIn(userObject){
    setCurrentUser(userObject)
  }
  return (
    <div className="App">
      {currentUser===''?<SignIn handleLogIn = {handleLogIn}/>:<MatchmakerHome/>}
      <NewAccount />
    </div>
  );
}

export default App;
