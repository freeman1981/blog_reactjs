import { useParams } from 'react-router-dom'
import {client} from "../utils";
import React from 'react';


const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        const fetchPost = async () => {
            const response = await client.get(`/api/posts/${id}`);
            setPost(response.data);
        }
        fetchPost();
    }, []);

    return (
        <div>{id}</div>
    )

};

export default PostDetail;
