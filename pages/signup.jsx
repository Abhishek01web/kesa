import React from 'react';
import { useState } from 'react';

function signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoginMode, setLoginMode] = useState(false);
  const [isForgotPassword, setForgotPassword] = useState(false);

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signing up...');
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in...');
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot password...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        {isForgotPassword ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
              onClick={handleForgotPassword}
            >
              Reset Password
            </button>
            <p className="mt-4 text-sm text-gray-500 cursor-pointer" onClick={() => setForgotPassword(false)}>
              Return to Login
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{isLoginMode ? 'Login' : 'Sign Up'}</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isLoginMode && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded mb-4"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            {isLoginMode ? (
              <button
                className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
                onClick={handleLogin}
              >
                Login
              </button>
            ) : (
              <button
                className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            )}
            <p className="mt-4 text-sm text-gray-500 cursor-pointer" onClick={() => setLoginMode(!isLoginMode)}>
              {isLoginMode ? 'Create an account' : 'Already have an account?'}
            </p>
            {!isLoginMode && (
              <p className="mt-2 text-sm text-gray-500 cursor-pointer" onClick={() => setForgotPassword(true)}>
                Forgot Password?
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default signup;
