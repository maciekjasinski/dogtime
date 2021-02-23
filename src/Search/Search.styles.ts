import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconButton, Paper } from '@material-ui/core';

export const Wrapper = styled.div`
    height: 44px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: fit-content;
    align-items: center;
    margin: auto;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    > button {
        height: 44px;
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        font-weight: bold;
        padding: 0 ${({ theme }) => theme.spacing * 10}px;
        font-size: 14px;
        cursor: pointer;
        &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white};
        }
    }
    @media screen and (max-width: 690px) {
        grid-template-columns: auto;
        grid-template-rows: repeat(4, auto);
        height: auto;
    }
`;

export const StyledIconButton = styled(IconButton)`
    && {
        height: 44px;
        border-radius: 0;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        border-right: 2px solid ${({ theme }) => theme.colors.primary};
        > svg {
            color: ${({ theme }) => theme.colors.white};
        }
        &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
    > input { 
        box-sizing: border-box;
        width: 298px;
        height: 44px;
        border: none;
        outline: none;
        padding: 0;
        font-size: 14px;
        padding: 0 8px;
        text-align: center;
    }
    > svg {
        position: absolute;
        right: 10px;
        top: 10px;
        color: ${({ theme }) => theme.colors.primary};
        opacity: 0.54;
        cursor: pointer;
    }
    @media screen and (max-width: 690px) {
        border: none;
    }
`;

export const Item = styled.p`
    margin: 0 auto;
    width: 100%;
    text-align: center;
`;

export const StyledPaper = styled(Paper)`
    && {
        width: 200px;
        height: 90px;
        padding: ${({ theme }) => theme.spacing * 2}px ${({ theme }) => theme.spacing * 8}px;
        >h3 {
            color: ${({ theme }) => theme.colors.primary};
            margin: 0 0 ${({ theme }) => theme.spacing * 2}px;
        }
        .MuiSlider-root {
            width: 90%;
            display: block;
            margin: 0 auto;
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const StyledLink = styled(Link)`
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    opacity: .87;
    width: 100%;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: ${({ theme }) => theme.spacing * 3}px;
`;

export const Text = styled.p`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-size: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: ${({ theme }) => theme.spacing * 10}px;
`;