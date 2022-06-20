import {useParams} from 'react-router-dom'
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {client} from "../utils";


export default function Post() {
    const {postId} = useParams();
    const [post, setPost] = React.useState({});

    React.useEffect(() => {
        const fetchPost = async () => {
            const response = await client.get(`/api/posts/${postId}/`);
            setPost(response.data);
        }
        fetchPost()
    }, []);

    return (
        <Container>
            <Typography sx={{fontSize: 20}}>
                {post.name}
            </Typography>
            <Box dangerouslySetInnerHTML={{__html: post.content}} />
        </Container>
    )
}
