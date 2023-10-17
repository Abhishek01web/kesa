import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProductList from '../components/ProductList'; // You should create a ProductList component

function admin({ user }) {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });
    const [editingProduct, setEditingProduct] = useState(null);

    // Fetch products from an API or database on component mount
    useEffect(() => {
        // Replace this with actual API/database calls
        const fetchProducts = async () => {
            const response = await fetch('/api/products'); // Example API endpoint
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        // Implement logic to add a new product
        // You would typically send a POST request to an API
        console.log('Adding product:', newProduct);
    };

    const handleEditProduct = async () => {
        // Implement logic to edit an existing product
        // You would typically send a PUT request to an API
        console.log('Editing product:', editingProduct);
    };

    const handleDeleteProduct = async (productId) => {
        // Implement logic to delete a product
        // You would typically send a DELETE request to an API
        console.log('Deleting product with ID:', productId);
    };

    return (
        <>
            <Head>
                <title>Admin Panel</title>
            </Head>
            <div className="container mx-auto p-4 mt-[80px]">
                <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">Product Management</h2>
                    <ProductList
                        products={products}
                        onEditProduct={(product) => setEditingProduct(product)}
                        onDeleteProduct={(productId) => handleDeleteProduct(productId)}
                    />
                    <h3 className="text-lg font-semibold mt-4">Add New Product</h3>
                    <div className="flex flex-col space-y-2">
                        <input
                            type="text"
                            placeholder="Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={handleAddProduct}
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

// This is a simplified example. In a real application, you would implement authentication and user management.
export async function getServerSideProps() {
    // Simulate user authentication (replace with actual authentication logic)
    const user = {
        id: 1,
        username: 'admin',
    };

    return {
        props: {
            user,
        },
    };
}

export default admin;
