import React from 'react';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function PostCard({post}) {
    return (
        <Grid item xs={4} key={post.id} marginTop={3}>
            <Card variant="outlined">
                <Link to={`/${post.id}`}>
                    <CardContent>
                        <Typography variant="h4">{post.name}</Typography>
                        <Typography variant="h8">{post.content}</Typography>
                    </CardContent>
                </Link>
            </Card>
        </Grid>
    );
}
