import axios from "axios";

export const client = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    timeout: 1000,
    headers: {'Authorization': 'Token 4d005967a8fa3d98f05437118395922f1c6f1344'},
});

export async function getPosts() {
    try {
        const response = await client.get("/api/posts/")
        return response.data
    } catch (e) {
        console.log(e);
        return []
    }
}

export async function getPost(postId) {
    try {
        const response = await client.get(`/api/posts/${postId}/`)
        return response.data
    } catch (e) {
        console.log(e);
        return []
    }
}
