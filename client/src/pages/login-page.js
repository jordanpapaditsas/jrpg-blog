import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/user-context";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  const [error, setError] = useState('');

 async function login(event) {
    event.preventDefault();

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

   const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include', 
    });

    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
      
    } else {
      setError('Wrong credentials!');
    }
  }

  if (redirect) {
    return <Navigate to={"/"}></Navigate>
  }
  return (
    <form className="login" onSubmit={login}>
      <input type="text" 
        placeholder="username" 
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input type="password" 
        placeholder="password" 
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button>Login</button>
      <div className="error-message">
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div> 
    </form>
  )
}