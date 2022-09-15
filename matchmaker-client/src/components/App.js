import React, {useState} from 'react'
import '../App.css';
import SignIn from './SignIn';


import MatchmakerHome from './MatchmakerHome';

function App() {
  const [currentUser, setCurrentUser] = useState('')

  function handleLogIn(userObject){
    setCurrentUser(userObject)
  }

  function handleLogOut(){
    setCurrentUser('')
  }
  return (
    <div className="App">
      
      {currentUser===''?<SignIn handleLogIn = {handleLogIn}/>:<MatchmakerHome handleLogOut = {handleLogOut} matchmaker = {currentUser}/>}
      
    </div>
  );
}

export default App;
