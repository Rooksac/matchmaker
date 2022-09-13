import React, {useState} from 'react';

export default function MatchmakerSignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if(id === "username"){
            setUsername(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {
        console.log(username, password, confirmPassword);
    }

  return (
    <div className="form">
        <h2>Matchmaker matchmaker....</h2>
        <div className="form_body">
            <div className="username">
                <label className="form_label" for="username">Username</label>
                <input className="form_input" type="text" id="username" value={username} onChange={(e) => handleInputChange(e)} placeholder="Username"/>
            </div>
            <div className="password">
                <label className="form_label" for="password">Password</label>
                <input className="form_input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password"/>
            </div>
            <div className="confirm_password">
                <label className="form_label" for="confirmPassword">Confirm Password</label>
                <input className="form_input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password"/>
            </div>
            <button onClick = {() => handleSubmit()} type="submit" class="btn">Register</button>
        </div>
    </div>
  )
}
