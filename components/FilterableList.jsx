import { useState } from 'react';

const data = [
    { id: 1, name: 'Rings' },
    { id: 2, name: 'Necklaces' },
    { id: 3, name: 'Earings' },
    { id: 4, name: 'Best Collection' },
    { id: 5, name: 'All' }
];

const categories = [
    {
        text: "Rings",
    },
    {
        text: "Necklaces",
    },
    {
        text: "Earings",
    },
    {
        text: "Best Collection",
    },
    {
        text: "All"
    }
]

const FilterableList = () => {
    const [filteredData, setFilteredData] = useState(data);

    const handleFilter = (filterType) => {
        if (filterType === 'All') {
            setFilteredData(data);
        } else {
            const filtered = data.filter((item) => item.name.includes(filterType));
            setFilteredData(filtered);
        }
    };

    return (
        <div className="p-4">
            <section className='flex gap-2'>
                {
                    categories.map((elm, i) => {
                        return (
                            <button
                                className="text-black font-oswald py-2 px-4 border rounded-lg uppercase text-2xl block p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-black hover:text-white transition duration-300"
                                onClick={() => handleFilter(elm.text)}
                            >
                                {elm.text}
                            </button>
                        )
                    })
                }
            </section>
            <ul className="mt-4">
                {filteredData.map((item) => (
                    <li key={item.id} className="bg-gray-100 p-2 m-1 rounded">
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterableList;
