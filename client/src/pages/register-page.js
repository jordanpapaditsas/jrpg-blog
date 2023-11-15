import {useState} from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function register(event) {
    event.preventDefault();

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type' : 'application/json'},
    });

    
    if (response.status === 200) {
      alert('Registration was successful!');
      setError('');
    } else {
      const data = await response.json();
      setError(data.error || 'Registration Failed!');
    }
  }

  return (
    <form className="register" onSubmit={register}>
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
      <button>Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}