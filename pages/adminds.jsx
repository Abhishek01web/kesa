import axios from 'axios';
import React, { useState } from 'react'
const API = process.env.NEXT_PUBLIC_APP_API_URL
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFjMGVkZGQwOTFlMjg2YjgzN2Q0N2IiLCJpYXQiOjE2OTcwMjM1NDgsImV4cCI6MTY5NzYyODM0OH0.KRLUMJZLAO0rkLtTIOboSL5Pl_NSaf-3B7tteWKEq3g'

const admindashboard = () => {

    const [section, setSection] = useState(0);

    const [categories, setCategories] = useState([]); //for all categories
    const [products, setAllProducs] = useState([]); //for all products

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        sprice: 0,
        length: 0,
        width: 0,
        weight: '',
        gemstone: '',
        tag: '',
        material: '',
        setting: '',
        color: '',
        category: '',
        images: [],
    });

    const [catData, setCatData] = useState({
        name: '',
        image: [],
    });

    const handleCatInputChange = (e) => {
        const { name, value } = e.target;
        setCatData({
            ...catData,
            [name]: value,
        });
    };
    const handleCatImageChange = (e) => {
        const image = Array.from(e.target.files);
        setCatData({
            ...catData,
            image,
        });
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleImageChange = (e) => {
        const images = Array.from(e.target.files);
        setFormData({
            ...formData,
            images,
        });
    };

    //HANDLE CREATE PRODUCT
    const handleCreateProduct = async () => {

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                if (key === 'images') {
                    formData.images.forEach((image) => {
                        formDataToSend.append('images', image);
                    });
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const { data } = await axios.post(${ API } / api / v1 / product / create - product, formDataToSend, { headers: { 'Authorization': token } });

            if (data?.success) {
                // Handle successful product creation
                alert('Product created successfully');
            } else {
                // Handle errors
                const data = await response.json();
                console.error('Error creating product:', data.error);
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    }

    //HANDLE CREATE CATEGORY
    const handleCreateCategory = async () => {

        try {
            const formDataToSend = new FormData();
            for (const key in catData) {
                if (key === 'image') {
                    catData.image.forEach((image) => {
                        formDataToSend.append('image', image);
                    });
                } else {
                    formDataToSend.append(key, catData[key]);
                }
            }
            const { data } = await axios.post(${ API } / api / v1 / category / create - category, formDataToSend, { headers: { 'Authorization': token } });

            if (data?.success) {
                // Handle successful product creation
                alert('Category created successfully');
            } else {
                // Handle errors
                const data = await response.json();
                console.error('Error creating product:', data.error);
            }
        } catch (error) {
            console.log('Error creating product:', error);
        }
    }

    //GET ALL CATEGORY FOR HOME PAGE
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(${ API } / api / v1 / category / get - category);
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
    const CreateProduct = () => {
        getAllCategory();
        setSection(1);
    }

    //GET ALL PRODUCTS FOR ADMIN
    const getAllProduct = async () => {
        try {
            const { data } = await axios.get(${ API } / api / v1 / product / get - product);
            if (data?.success) {
                setAllProducs(data?.products);
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };
    const handleShowAllProduct = () => {
        setSection(2);
        getAllProduct();
    }
    return (
        <div className="flex">
            {/* Sidebar (You can create a separate Sidebar component) */}
            <nav className="w-1/5 bg-gray-800 text-white p-4">
                <ul>
                    <li className="mb-2"> <h1>Admin Dashboard</h1></li>
                    <li className="mb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={CreateProduct}>Create Product </button>
                    </li>
                    <li className="mb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleShowAllProduct}>Show Product </button>
                    </li>
                    <li className="mb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={e => setSection(3)}>Create Category </button>
                    </li>
                    <li className="mb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Show Category </button>
                    </li>

                </ul>
            </nav>

            {/* Create Product Area */}
            <main className={section === 1 ? "flex-1 bg-gray-200 p-4" : "hidden"}>
                <div className="w-2/3  mx-auto">
                    <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" enctype="multipart/form-data" method="post">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Product Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter Product Name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                Category
                            </label>
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                name="category"
                                onChange={handleInputChange}
                            >
                                <option value="">Select a Category</option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Product Description
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                name="description"
                                type="text"
                                placeholder="Enter Product Description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Regular Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                name="price"
                                type="number"
                                placeholder="Enter Product Price"
                                value={formData.price}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Sale Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="sprice"
                                name="sprice"
                                type="number"
                                placeholder="Enter Product Sale Price"
                                value={formData.sprice}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4 ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="length">
                                Enter Product Lenght
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-[40] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="length"
                                name="length"
                                type="number"
                                placeholder="Enter Product Length"
                                value={formData.length}
                                onChange={handleInputChange}
                            />

                        </div>
                        <div className="mb-4 ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="width">
                                Enter Product Width
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-[40] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id='width'
                                name="width"
                                type="number"
                                placeholder="Enter Product Width"
                                value={formData.width}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                                Enter Product Weight
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="weight"
                                name="weight"
                                type="text"
                                placeholder="Enter Product Weight"
                                value={formData.weight}
                                onChange={handleInputChange}
                            />

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="material">
                                Product Material
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="material"
                                name="material"
                                type="text"
                                placeholder="Enter Product Material"
                                value={formData.material}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
                                Enter Product Tag
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="tag"
                                name="tag"
                                type="text"
                                placeholder="Enter Product Tag"
                                value={formData.tag}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="setting">
                                Setting
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="setting"
                                name="setting"
                                type="text"
                                placeholder="Enter Product Setting"
                                value={formData.setting}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gemstone">
                                Gemstone
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="gemstone"
                                name="gemstone"
                                type="text"
                                placeholder="Enter Gemstone"
                                value={formData.gemstone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
                                Color
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="color"
                                name="color"
                                type="text"
                                placeholder="Enter Color"
                                value={formData.color}
                                onChange={handleInputChange}
                            />
                        </div>



                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                                Product Images
                            </label>
                            <input
                                className="block text-gray-700 text-sm font-bold"
                                type="file"
                                name="images"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleCreateProduct}
                            >
                                Create Product
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            {/* Show All Product Area */}
            <main className={section === 2 ? "w-[100vw] flex-1 bg-gray-200 p-4" : "hidden"}>
                <table className="w-[100%] divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sale Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Gemstone
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Images
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Delete
                            </th>
                            {/* Add more table headers for additional details */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products?.map((product) => (
                            <tr key={product._id}>
                                <td className="w-[200px] px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className=" text-sm font-medium text-gray-900">{product.name}</div>
                                </td>
                                <td className="w-[200px] px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className=" text-sm text-gray-900">{product?.description?.substring(0, 50)}</div>
                                </td>
                                <td className="px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className="text-sm text-gray-900"> &#8377; {product.price}</div>
                                </td>
                                <td className="px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className="text-sm text-gray-900"> &#8377; {product.sprice}</div>
                                </td>
                                <td className="px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className="text-sm text-gray-900">{product.gemstone}</div>
                                </td>
                                <td className="px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className="text-sm text-gray-900">{product.color}</div>
                                </td>
                                <td className="px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className="text-sm text-gray-900">{product?.category?.name}</div>
                                </td>

                                <td className="px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className="text-sm text-gray-900">
                                        {product?.images?.map((photo, index) => (
                                            <img
                                                src={${API} /Images / ${ photo.url }}
                                        alt={Product Photo ${index}}
                  />
                  ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className="text-sm text-gray-900"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button></div>
                                </td>
                                <td className="px-6 py-4 border border-gray-300 whitespace-wrap">
                                    <div className="text-sm text-gray-900"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete </button></div>
                                </td>
                                {/* Add more table cells for additional details */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>


            {/* Create category Area */}
            <main className={section === 3 ? "flex-1 bg-gray-200 p-4" : "hidden"}>
                <div className="w-2/3  mx-auto">
                    <h1 className="text-2xl font-semibold mb-4">Create Category</h1>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" enctype="multipart/form-data" method="post">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="catName">
                                Category Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="catName"
                                name="name"
                                type="text"
                                placeholder="Enter Category Name"
                                value={catData.name}
                                onChange={handleCatInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                                Category Image
                            </label>
                            <input
                                className="block text-gray-700 text-sm font-bold"
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleCatImageChange}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleCreateCategory}
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default admindashboard
