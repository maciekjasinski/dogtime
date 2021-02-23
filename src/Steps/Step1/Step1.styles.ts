import styled from 'styled-components';

export const PageTitle = styled.h1`
    font-size: 42px;
    letter-spacing: 2;
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing * 20}px;
    @media screen and (max-width: 690px) {
        font-size: 32px;
        margin-top: ${({ theme }) => theme.spacing * 10}px;
    }
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing * 20}px;
    > .divider {
        width: 1px;
        height: 500px;
        background-color: ${({ theme }) => theme.colors. primary};
        opacity: .5;
    }
    > div { 
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    > div:last-child {
        text-align: right;
        align-items: flex-end;
    }
    @media screen and (max-width: 690px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1px 1fr;
        grid-row-gap: ${({ theme }) => theme.spacing * 8}px;
        > div, div:last-child {
            height: auto;
            align-items: center;
            text-align: center;
        }
        .divider {
            width: 100%;
            height: 1px;
        }
    }
`;

export const Title = styled.p`
    font-size: 42px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
    margin: 0;
    @media screen and (max-width: 690px) {
        font-size: 28px;
    }
`;

export const Description = styled.p`
    font-size: 36px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    margin: 0;
    @media screen and (max-width: 690px) {
        font-size: 18px;
    }
`;

export const Button = styled.button`
    width: 200px;
    height: 44px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-transform: uppercase;
    margin-top: ${({ theme }) => theme.spacing * 6}px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        transition: all .1s linear;
    }
`;

export const ButtonOutline = styled(Button)`
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    &:hover {
        border: none;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
`;