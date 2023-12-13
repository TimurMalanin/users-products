import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!user) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {user.name}
                </Typography>
                <Typography color="textSecondary">
                    {user.email}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UserDetail;
