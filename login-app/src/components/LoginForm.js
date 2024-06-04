import React, { useState } from 'react';
/*import { useDispach, useSelector } from 'react-redux';
/*import { login } from '../redux/action/authActions';*/

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Make API call to authenticate user
      fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            // Login successful, redirect to dashboard or something
          }
        })
        .catch((error) => {
          setError('An error occurred');
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    );
  };

export default LoginForm;
