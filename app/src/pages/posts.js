import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {getPosts} from "../utils";
import PostCard from '../components/postCard'


export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const posts = await getPosts();
            setPosts(posts)
        })();
    }, []);

    return (
        <Container>
            <TextField
                id="standard-search"
                label="Search posts"
                type="search"
                variant="standard"
            />
            <Grid container spacing={5}>
                {posts.map((post) => (
                    <PostCard post={post} key={post.id}/>
                ))}
            </Grid>
        </Container>
    );
};
