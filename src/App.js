import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Users from './components/Users';
import Products from './components/Products';
import ProductEdit from './components/ProductEdit';
import UserDetail from './components/UserDetail';
import ProductAdd from './components/ProductAdd';
import {AppBar, Toolbar, Typography, Button, CssBaseline} from '@mui/material';

function App() {
    return (
        <>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        My React App
                    </Typography>
                    <Button color="inherit" component={Link} to="/users">
                        Users
                    </Button>
                    <Button color="inherit" component={Link} to="/products">
                        Products
                    </Button>
                </Toolbar>
            </AppBar>
            <div>
                <Routes>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/user/:id" element={<UserDetail/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/new" element={<ProductAdd/>}/>
                    <Route path="/products/edit/:id" element={<ProductEdit/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
