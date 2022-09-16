import React, {useState} from 'react'

export default function DaterSignUp({reset}) {
    const initialState = {username: '', password: '', gender: null, age: 0, interestedIn: null, image: null}
    const [loginInfo, setLoginInfo] = useState(initialState)


    function handleChange(e) {
        let {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/signup/daters", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(loginInfo),
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
        setLoginInfo(initialState)
        reset()
        alert('Account created!  Prepare yourself for Love!')
    }

  return (
    <div className="form">
        <h2 className='matchmaker-title-signup'>Make me a match!</h2>
        <form onSubmit={handleSubmit}>
                <label className="form_label, form-name" for="username">Username</label>
                <input className="form_label, form-boxes" onChange={handleChange} type="text" name="username" value={loginInfo.username}/>
                <br />
                <label className="form_label, form-name" for="password">Password</label>
                <input className="form_label, form-boxes" onChange={handleChange} type="text" name="password" value={loginInfo.password}/>
                <br />
                <label className="form_label, form-name" for="gender">Gender</label>
                <select className="form_label, form-boxes" onChange={handleChange} name="gender" value={loginInfo.gender}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="non-binary">non-binary</option>
                </select>
                <br />
                <label className="form_label, form-name" for="age">Age</label>
                <input className="form_label, form-boxes" onChange={handleChange} type="number" name="age" value={loginInfo.age} min="21" max="40"/>
                <br />
                <label className="form_label, form-name" for="interestedIn">I'm interested in...</label>
                <select className="form_label, form-boxes" onChange={handleChange} name="interestedIn" value={loginInfo.interestedIn}>
                    <option value = ''>--Im interested in meeting...--</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="non-binary">non-binary</option>
                </select>
               <br />
                <label className="form_label, form-name" for="image">My Photo</label>
                <input className="form_label, form-boxes" onChange={handleChange} type="text" alt="my photo"gen name="image" value={loginInfo.image}/> 
               <br /> 
                <input type="submit" className="submit-button"/>
        </form>
    </div>
  )
}
