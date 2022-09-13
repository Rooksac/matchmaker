import React, {useState} from 'react';

export default function MatchmakerSignUp() {
    const initialState = {username: '', password: ''}
    const [loginInfo, setLoginInfo] = useState(initialState)


    function handleChange(e) {
        let {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://localhost:9292/signup/matchmaker", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(loginInfo),
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
    }
    
  return (
    <div className="form">
        <h2>Matchmaker matchmaker....</h2>
        <form 
        // onSubmit={handleSubmit}
        >
           
             <label className="form_label" for="username">Username</label>
                <input className="form_input" onChange={handleChange} type="text" name="username" value={loginInfo.username}/>
             
             <label className="form_label" for="password">Password</label>
                <input className="form_input" onChange={handleChange} type="text" name="password" value={loginInfo.password}/>
            
             <input type="submit"/>
        </form>
        </div>
  )
}
