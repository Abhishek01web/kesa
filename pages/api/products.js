// pages/api/products.js

// Simulated product data (replace with actual data from your database)
const products = [
    { id: 1, name: 'Product 1', price: 20.99, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 30.49, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 15.99, description: 'Description for Product 3' },
    // Add more products here
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      // Serve the list of products as JSON
      res.status(200).json(products);
    } else {
      // Handle other HTTP methods if needed
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  