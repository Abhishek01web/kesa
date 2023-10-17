// components/Accordion.js
import { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const openAccordion = () => {
        setIsOpen(true);
    }

    const clseAccordion = () => {
        setIsOpen(false);
    }

    return (
        <div className="border rounded shadow">
            <button
                onClick={toggleAccordion}
                onMouseEnter={openAccordion}
                onMouseLeave={clseAccordion}
                className="w-full p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
                {title}
            </button>
            {isOpen && (
                <div className="p-4">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
