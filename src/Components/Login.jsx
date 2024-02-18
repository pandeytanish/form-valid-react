import React, { useState, useEffect } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Validate username
    setUsernameError('');
    if (!username) {
      setUsernameError('Username is required');
    }

    // Validate password
    setPasswordError('');
    if (!password) {
      setPasswordError('Password is required');
    }

    // Check if both fields are filled
    if (username && password) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      // Form submission logic
      console.log('Form submitted!');
    } else {
      // Form not valid, handle accordingly
      console.log('Form not valid!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <span style={{ color: 'red' }}>{usernameError}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
      </div>
      <button type="submit" disabled={!formValid}>Submit</button>
    </form>
  );
}

export default Login;
