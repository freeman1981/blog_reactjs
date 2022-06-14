import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link, Outlet} from "react-router-dom";
import {client} from "../utils";


const Posts = () => {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        const fetchPosts = async () => {
            const response = await client.get("/api/posts/");
            setPosts(response.data);
        }
        fetchPosts();
    }, []);

    if (!posts) return "No post!"

    return (
        <Container maxWidth="sm">
            <Stack spacing={4}>
                {posts?.map((post) => (
                    <Card sx={{minWidth: 275}} key={post.id}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                <Link to={`/posts/${post.id}`}>{post.name}</Link>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <Outlet />
            </Stack>
        </Container>
    );
};

export default Posts;
