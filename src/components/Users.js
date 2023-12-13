import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Paper, Container } from '@mui/material';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Container maxWidth="sm">
            <Paper elevation={3}>
                <List component="nav" aria-label="users">
                    {users.map((user) => (
                        <ListItem
                            button
                            component={Link}
                            to={`/user/${user.id}`}
                            key={user.id}
                        >
                            <ListItemText primary={user.name} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default Users;
