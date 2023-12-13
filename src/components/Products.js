import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, List, ListItem, ListItemText, Paper, IconButton, Container} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    const handleAddProductClick = () => {
        navigate('/products/new');
    };

    const handleEditProductClick = (productId) => {
        navigate(`/products/edit/${productId}`);
    };

    const handleDeleteProduct = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return (
        <Container maxWidth="sm">
            <Button variant="contained" color="primary" onClick={handleAddProductClick}>
                Add Product
            </Button>
            <Paper elevation={3} style={{ marginTop: '16px' }}>
                <List>
                    {products.map((product) => (
                        <ListItem
                            key={product.id}
                            secondaryAction={
                                <>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEditProductClick(product.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteProduct(product.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </>
                            }
                        >
                            <ListItemText
                                primary={product.name}
                                secondary={`Type: ${product.type}, Country: ${product.country}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default Products;
