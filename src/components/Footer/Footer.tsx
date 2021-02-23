import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Grid } from '@material-ui/core';
import { Wrapper, Title, StyledLink,Text } from './Footer.styles';

export function Footer() {
    return (
        <Wrapper>
            <Container>
                <Grid container spacing={2} alignItems="center" justify="space-between">
                    <Grid item xs={12} md={4}>
                        <Title>Dogtime</Title>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledLink to="/">Regulamin</StyledLink>
                        <StyledLink to="/">Polityka prywatności</StyledLink>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Text><b>Kontakt</b></Text>
                        <Text>Telefon: 123 123 123</Text>
                        <Text>Email: biuro@dogtime.pl</Text>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}
