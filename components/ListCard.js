import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const ListCard = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Berkley
                </Typography>
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </CardContent>
        </Card>
    )
}

export default ListCard
