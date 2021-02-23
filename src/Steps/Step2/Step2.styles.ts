import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { Description, Title } from '../Step1/Step1.styles';

export const StyledContainer = styled(Container)`
    margin-top: ${({ theme }) => theme.spacing * 20}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    > button {
        display: block;
        margin: ${({ theme }) => theme.spacing * 6}px 
            auto ${({ theme }) => theme.spacing * 3}px;
    }
    @media screen and (max-width: 690px) {
        text-align: left;
    }
`;

export const Label = styled.p`
    font-size: 10px;
    text-transform: uppercase;
    text-align: center;
`;

export const StyledDescription = styled(Description)`
    @media screen and (max-width: 690px) {
        text-align: left;
        margin-top: ${({ theme }) => theme.spacing * 6}px;
    }
`;

export const StyledTitle = styled(Title)`
    @media screen and (max-width: 690px) {
        text-align: left;
    }
`;
