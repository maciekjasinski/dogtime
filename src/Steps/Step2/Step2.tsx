import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    PageTitle,
    Title,
    Description,
    Button
} from '../Step1/Step1.styles';
import {
    StyledContainer,
    Label,
    StyledDescription,
    StyledTitle
} from './Step2.styles';

export function Step2() {
    const history = useHistory();
    const redirect = (path: string) => {
        history.push(path);
    }
    return (
        <div>
            <PageTitle>DogTime</PageTitle>
            <StyledContainer>
                <div>
                    <StyledTitle>Czy znasz już rasę?</StyledTitle>
                    <StyledDescription>
                        Jeśli nie, wypełnij krórką anikietę, a pomożemy 
                        <br />Ci wybrać idalanego psa dla Ciebie
                    </StyledDescription>
                </div>
                <Button onClick={() => redirect('/')}>Nie</Button>
                <Button onClick={() => redirect('/szukaj')}>Tak</Button>
                <Label>Przejdz do wyszukiwarki</Label>
            </StyledContainer>
        </div>
    )
}
