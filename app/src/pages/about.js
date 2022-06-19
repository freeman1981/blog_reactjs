import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function About() {
    return (
        <Container>
            <Typography sx={{fontSize: 20}}>
                About
            </Typography>
            <Typography sx={{fontSize: 14}}>
                Привет! Меня Зовут Александр!
                Я решил тут блог вести ...
            </Typography>
        </Container>
    )
}
