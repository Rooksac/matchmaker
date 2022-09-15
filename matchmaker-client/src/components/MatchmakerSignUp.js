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
        fetch("http://localhost:9292/signup/matchmakers", {
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
        <h2 className='matchmaker-title-signup'>Matchmaker matchmaker....</h2>
        <form 
        onSubmit={handleSubmit}
        >
           <div className="signup-matchmaker">
           
             <label className="form_label, form-name" for="username">Username</label>
                <input className="form_label, form-boxes" onChange={handleChange} type="text" name="username" value={loginInfo.username}/>
            <br />
             <label className="form_label, form-name" for="password">Password</label>
                <input className="form_label, form-boxes" onChange={handleChange} type="text" name="password" value={loginInfo.password}/>
            <br />
             <input type="submit" className="submit-button"/>
             </div>
        </form>
        </div>
  )
}
