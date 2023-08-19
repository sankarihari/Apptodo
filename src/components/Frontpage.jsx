import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Frontpage = () => {
    const navigate = useNavigate();
    const ButtonClick = (val) => {
        navigate("/home", { state: { updateData: val } });
      };
    return (
        <div   >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    
                    sx={{ height: 140 }}
                    image="https://img.freepik.com/free-vector/mobile-note-list-concept-illustration_114360-6275.jpg?w=740&t=st=1692423706~exp=1692424306~hmac=812e11c98ad06e5b8230c182e12ee23dacd314d893aff8f8068cfda7d9191bbc"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ToDo App
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Become focused, organized, and calm with Todoist. The world’s BEST task manager and to-do list app.
                    </Typography>
                </CardContent>
                <CardActions>
                <Link href="/home">Clik here to start</Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default Frontpage