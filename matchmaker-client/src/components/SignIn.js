import React, {useState} from 'react'

export default function SignIn({handleLogIn}) {
    const initialState = {username: '', password: ''}
    const [loginInfo, setLoginInfo] = useState(initialState)
   
    function handleChange(e) {
        let {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value})
    }
    function handleSubmit(loginObj){
        fetch('https://localhost:9292/login/matchmaker', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(loginObj),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data)
    handleLogIn(data)
  })
  setLoginInfo(initialState)
    }
  return (
    <div>
        <form>
            <label>
                Username:
                <input onChange = {handleChange} type="text" name="username" value = {loginInfo.name}/>
            </label>
            <label>
                Password:
                <input type ="text" name="password" value = {loginInfo.password}/>
            </label>
            <input type = "submit" onSubmit = {handleSubmit}/>
        </form>
    </div>
  )
}
