import React, { useState } from 'react'

const otp = () => {
    const [otp, setOtp] = useState('');

    const handleOtp = () => {
        alert('password set !');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Verify your OTP</h2>
                <input
                    type="number"
                    placeholder="OTP"
                    className="w-full px-4 py-2 rounded mb-4 border"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}

                />
                <button
                    className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
                    onClick={handleOtp}
                >
                    Verify
                </button>
            </div>
        </div>
    )
}

export default otp;
