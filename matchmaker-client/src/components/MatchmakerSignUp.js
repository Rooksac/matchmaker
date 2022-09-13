import React, {useState} from 'react';

export default function MatchmakerSignUp() {
    const initialState = {username: '', password: '', confirmPassword: ''}
    const [loginInfo, setLoginInfo] = useState(initialState)


    function handleChange(e) {
        let {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value})
    }

    function handleSubmit() {
        
    }
  return (
    <div className="form">
        <h2>Matchmaker matchmaker....</h2>
        <form>
             //username
             <label className="form_label" for="username">Username</label>
                <input className="form_input" onChange={handleChange} type="text" name="username" value={loginInfo.username}/>
             //password
             <label className="form_label" for="password">Password</label>
                <input className="form_input" onChange={handleChange} type="text" name="password" value={loginInfo.password}/>
             //confirmPassword
             <label className="form_label" for="confirmPassword">Confirm Password</label>
                <input className="form_input" onChange={handleChange} type="password" value={loginInfo.confirmPassword}/>
             //submit
             <input type="submit" onSubmit ={handleSubmit}/>
        </form>
        </div>
  )
}
