import React, { useState } from 'react'

const returnandexchangepolicy = () => {
    const [agree, setAgree] = useState(false);
    return (
        <div className="bg-white p-6 m-4 rounded-md mt-[100px]">
            <h1 className="text-3xl font-bold mb-4">Return and Exchange Policy</h1>

            <h2 className="text-2xl font-bold mt-6 mb-4">1. Returns and Exchanges</h2>
            <p className="mb-4">
                1.1. We gladly accept returns and exchanges within 30 days from the date of purchase. To qualify for a return or exchange, the item must be unused, in its original condition, and accompanied by the original packaging.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">2. Eligible Items</h2>
            <p className="mb-4">
                2.1. You can return or exchange any item that meets the following criteria:
                <ul className="list-disc list-inside">
                    <li>It is unworn, unwashed, and in its original condition.</li>
                    <li>It includes all original tags, labels, and packaging.</li>
                </ul>
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">3. Non-Eligible Items</h2>
            <p className="mb-4">
                3.1. Please note that the following items are not eligible for return or exchange:
                <ul className="list-disc list-inside">
                    <li>Items that have been worn, washed, or altered.</li>
                    <li>Customized or personalized items.</li>
                    <li>Earrings and other pierced jewelry (for hygiene reasons).</li>
                    <li>Items marked as final sale.</li>
                </ul>
            </p>

            {/* ... (other sections) ... */}

            <h2 className="text-2xl font-bold mt-6 mb-4">8. Contact Us</h2>
            <p>
                8.1. For any questions or assistance related to returns or exchanges, please do not hesitate to reach out to our Customer Service team at [Your Contact Information].
            </p>

            <div className="flex items-center mt-8">
                <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                />
                <label htmlFor="agree" className="ml-2 block text-sm leading-5 text-gray-900">
                    I have read and agree to the Return and Exchange Policy
                </label>
            </div>

            <button
                disabled={!agree}
                className={`mt-6 px-6 py-3 rounded-md bg-indigo-600 text-white disabled:opacity-50 ${!agree && 'cursor-not-allowed'
                    }`}
            >
                Agree and Continue
            </button>
        </div>
    )
}

export default returnandexchangepolicy;
