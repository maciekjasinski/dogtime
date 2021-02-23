import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing * 8}px 0;
    color: ${({ theme }) => theme.colors.white};
    margin-top: ${({ theme }) => theme.spacing * 15}px;
`;

export const Title = styled.h1`
    text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    margin: ${({ theme }) => theme.spacing * 4}px 0;
`;

export const Text = styled.p`
    text-transform: uppercase;
    margin: ${({ theme }) => theme.spacing * 4}px 0;
`;