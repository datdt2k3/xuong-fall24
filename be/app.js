import express from "express";
import cors from "cors";
import productRouter from "./routers/product";
const app = express();

const products = [
    {
        key: "1",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product One",
        price: 299.99,
        stock: true,
        description: "This is a description for Product One."
    },
    {
        key: "2",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Two",
        price: 199.99,
        stock: false,
        description: "This is a description for Product Two."
    },
    {
        key: "3",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Three",
        price: 399.99,
        stock: true,
        description: "This is a description for Product Three."
    },
    {
        key: "4",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Four",
        price: 149.99,
        stock: true,
        description: "This is a description for Product Four."
    },
    {
        key: "5",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Five",
        price: 499.99,
        stock: false,
        description: "This is a description for Product Five."
    },
    {
        key: "6",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Six",
        price: 249.99,
        stock: true,
        description: "This is a description for Product Six."
    },
    {
        key: "7",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Seven",
        price: 359.99,
        stock: true,
        description: "This is a description for Product Seven."
    },
    {
        key: "8",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Eight",
        price: 449.99,
        stock: false,
        description: "This is a description for Product Eight."
    },
    {
        key: "9",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Nine",
        price: 89.99,
        stock: true,
        description: "This is a description for Product Nine."
    },
    {
        key: "10",
        imageUrl: "https://via.placeholder.com/150",
        name: "Product Ten",
        price: 59.99,
        stock: true,
        description: "This is a description for Product Ten."
    }
];

app.use(cors());
app.use('/api', productRouter)
app.get('/api/products', (req, res) => {
    res.json(products);
})

export const viteNodeApp = app;