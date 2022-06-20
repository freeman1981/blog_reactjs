import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function PostCard({post}) {
    return (
        <Grid item xs={4}  marginTop={3}>
            <Card variant="outlined">
                <Link component={RouterLink} to={`/${post.id}`}>
                    <CardContent>
                        <Typography variant="h4">{post.name}</Typography>
                        <Typography variant="h8">{post.modified}</Typography>
                    </CardContent>
                </Link>
            </Card>
        </Grid>
    );
}
