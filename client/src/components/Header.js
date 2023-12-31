import {Link} from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./user-context";

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

function logout() {
  fetch('http://localhost:4000/logout', {
    credentials: 'include',
    method: 'POST',
  });
  setUserInfo(null);
}

const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">JRPG Blog</Link>
      
      <nav>
        {username && (
          <>
          <span className="greet">Greetings, {username}!</span>
            <Link className="create-new-post" to="/create">Create new post</Link>
            <a className="logout" onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link className="login" to="/login">Login</Link>
            <Link className="register" to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
