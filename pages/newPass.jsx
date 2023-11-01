import React, { useState } from 'react'

const newPass = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        alert('password set !');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Set New Password</h2>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded mb-4 border"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 rounded mb-4 border"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                    className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
                    onClick={handleSignup}
                >
                    Set password
                </button>
            </div>
        </div>
    )
}

export default newPass;
