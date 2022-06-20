import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {getPost} from "../utils";


export default function Post() {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        (async () => {
            const posts = await getPost(postId);
            setPost(posts)
        })();
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
