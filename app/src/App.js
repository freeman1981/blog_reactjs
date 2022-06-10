import axios from "axios";
import React from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const client = axios.create({
    baseURL: "http://app-provider:8000",
    timeout: 1000,
    headers: {'Authorization': 'Token e6c9d999b67f12ef9a94fd7c610852d949703627'},
});

const App = () => {
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
                                {post.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Container>
    );
}

export default App;
