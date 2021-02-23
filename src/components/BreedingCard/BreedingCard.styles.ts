import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 30% calc(70% - 16px);
    box-sizing: border-box;
    grid-column-gap: ${({ theme }) => theme.spacing * 4}px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    align-items: center;
    > div {
        padding: ${({ theme }) => theme.spacing * 4}px;
    }
    > img {
        width: 100%;
        height: auto;
    }
`;

export const BreedingName = styled.p`
    margin: 0 0 ${({ theme }) => theme.spacing * 2}px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: bold;
`;

export const BreedingDescription = styled.p`
    margin: ${({ theme }) => theme.spacing * 2}px 0;
    color: ${({ theme }) => theme.colors.gray};
    opacity: .54;
    font-size: 12px;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    text-transform: uppercase;
    height: 44px;
    padding: 0 ${({ theme }) => theme.spacing * 8}px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    &:hover { 
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.white};
        box-sizing: border-box;
        border: 2px solid ${({ theme }) => theme.colors.primary};
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;