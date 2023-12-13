import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, TextareaAutosize, Container } from '@mui/material';

function ProductAdd() {
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({
        name: '',
        type: '',
        country: '',
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push({ ...newProduct, id: Date.now() });
        localStorage.setItem('products', JSON.stringify(products));
        navigate('/products');
    };

    return (
        <Container maxWidth="sm">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    margin="normal"
                    fullWidth
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Type of Product</InputLabel>
                    <Select
                        value={newProduct.type}
                        onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
                        label="Type of Product"
                    >
                        <MenuItem value="Electronics">Electronics</MenuItem>
                        <MenuItem value="Clothing">Clothing</MenuItem>
                        <MenuItem value="Food">Food</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Country of Origin</InputLabel>
                    <Select
                        value={newProduct.country}
                        onChange={(e) => setNewProduct({ ...newProduct, country: e.target.value })}
                        label="Country of Origin"
                    >
                        <MenuItem value="USA">USA</MenuItem>
                        <MenuItem value="China">China</MenuItem>
                        <MenuItem value="Germany">Germany</MenuItem>
                    </Select>
                </FormControl>
                <TextareaAutosize
                    minRows={3}
                    placeholder="Product Description"
                    style={{ width: '100%', marginTop: '16px' }}
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                    Add Product
                </Button>
            </form>
        </Container>
    );
}

export default ProductAdd;
