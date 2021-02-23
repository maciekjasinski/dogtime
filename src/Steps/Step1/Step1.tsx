import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import {
    PageTitle,
    GridWrapper,
    Title,
    Description,
    Button,
    ButtonOutline
} from './Step1.styles';

export function Step1 () {
    const history = useHistory();
    const redirect = (path: string) => {
        history.push(path)
    }
    return (
        <Container>
            <PageTitle>Witaj na DogTime!</PageTitle>
            <GridWrapper>
                <div>
                    <Title>Szukasz zwierzaka dla siebie?</Title>
                    <Description>Pomożemy Ci go znaleźć!</Description>
                    <Button onClick={() => redirect('/krok-2')}>Szukam psa</Button>
                </div>
                <div className="divider"></div>
                <div>
                    <Title>Posiadasz hodowlę?</Title>
                    <Description>Zobacz co możemy Ci zaoferować!</Description>
                    <ButtonOutline onClick={() => redirect('/login')}>Jestem hodowcą</ButtonOutline>
                </div>
            </GridWrapper>
        </Container>
    )
}
