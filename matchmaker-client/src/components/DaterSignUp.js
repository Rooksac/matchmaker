import React, {useState} from 'react'

export default function DaterSignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState(null);
    const [age, setAge] = useState(0);
    const [interestedIn, setInterestedIn] = useState(null);
    const [image, setImage] = useState(null);

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
        if(id === "gender"){
            setGender(value);
        }
        if(id === "age"){
            setAge(value);
        }
        if(id === "interestedIn"){
            setInterestedIn(value);
        }
        if(id === "image"){
            setImage(value);
        }
    }

    const handleSubmit = () => {
        console.log(username, password, confirmPassword, gender, age, interestedIn, image);
    }

  return (
    <div className="form">
        <h2>Make me a match!</h2>
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
            <div className="gender">
                <label className="form_label" for="gender">Gender</label>
                <select className="form_input" id="gender" value={gender} onChange={(e) => handleInputChange(e)} name="gender">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-binary</option>
                </select>
            </div>
            <button onClick = {() => handleSubmit()} type="submit" class="btn">Register</button>
        </div>
    </div>
  )
}
