import React, {useState} from 'react'

export default function DaterSignUp() {
    const initialState = {username: '', password: '', confirmPassword: '', gender: null, age: 0, interestedIn: null, image: null}
    const [loginInfo, setLoginInfo] = useState(initialState)


    function handleChange(e) {
        let {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value})
    }

    const handleSubmit = () => {
        
    }

  return (
    <div className="form">
        <h2>Make me a match!</h2>
        <form>
                //username
                <label className="form_label" for="username">Username</label>
                <input className="form_input" onChange={handleChange} type="text" name="username" value={loginInfo.username}/>
                //password
                <label className="form_label" for="password">Password</label>
                <input className="form_input" onChange={handleChange} type="text" name="password" value={loginInfo.password}/>
                //confirmPassword
                <label className="form_label" for="confirmPassword">Confirm Password</label>
                <input className="form_input" onChange={handleChange} type="password" name="confirmPassword" value={loginInfo.confirmPassword}/>
                //gender with dropdown
                <label className="form_label" for="gender">Gender</label>
                <select className="form_input" onChange={handleChange} name="gender" value={loginInfo.gender}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-binary</option>
                </select>
                //age
                <label className="form_label" for="age">Age</label>
                <input className="form_input" onChange={handleChange} type="number" name="age" value={loginInfo.age} min="21" max="40"/>
                //InterestedIn with dropdown
                <label className="form_label" for="interestedIn">I'm interested in...</label>
                <select className="form_input" onChange={handleChange} name="interestedIn" value={loginInfo.interestedIn}>
                    <option value="female">Females</option>
                    <option value="male">Males</option>
                    <option value="non-binary">Non-binary</option>
                </select>
                //image
                <label className="form_label" for="image">My Photo</label>
                <input className="form_input" onChange={handleChange} type="image" alt="my photo here" src="" name="image" value={loginInfo.image}/> 
                //submit          
                <input type="submit" onSubmit ={handleSubmit}/>
        </form>
    </div>
  )
}
