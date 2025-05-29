import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="p-4 border rounded shadow bg-white" style={{ minWidth: '300px' }}>
        <h1 className="text-center">Log In</h1>
        <p className="text-center">Please enter your credentials to log in.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">l
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}
