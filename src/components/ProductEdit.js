import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, TextareaAutosize, Container } from '@mui/material';

function ProductEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        type: '',
        country: '',
        description: ''
    });

    const productTypes = ['Electronics', 'Books', 'Clothing', 'Food'];
    const countries = ['USA', 'China', 'Germany', 'Japan'];

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const productToEdit = storedProducts.find(prod => prod.id === parseInt(id));
        if (productToEdit) {
            setProduct(productToEdit);
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const updatedProducts = storedProducts.map(prod => prod.id === parseInt(id) ? product : prod);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        navigate('/products');
    };

    return (
        <Container maxWidth="sm">
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Product Name"
                    value={product.name}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    margin="normal"
                    fullWidth
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Type of Product</InputLabel>
                    <Select
                        value={product.type}
                        onChange={(e) => setProduct({ ...product, type: e.target.value })}
                        label="Type of Product"
                    >
                        {productTypes.map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Country of Origin</InputLabel>
                    <Select
                        value={product.country}
                        onChange={(e) => setProduct({ ...product, country: e.target.value })}
                        label="Country of Origin"
                    >
                        {countries.map((country) => (
                            <MenuItem key={country} value={country}>
                                {country}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextareaAutosize
                    minRows={3}
                    placeholder="Product Description"
                    style={{ width: '100%', marginTop: '16px' }}
                    value={product.description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                    Update Product
                </Button>
            </form>
        </Container>
    );
}

export default ProductEdit;
