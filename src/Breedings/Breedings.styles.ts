import styled from 'styled-components';
import { Container, Checkbox, TextField, Grid } from '@material-ui/core';
import { MapContainer } from 'react-leaflet';

export const StyledContainer = styled(Container)`
    margin-top: ${({ theme }) => theme.spacing * 20}px;
`;

export const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 500px;
    box-sizing: border-box;
    border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const SearchButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    outline: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    height: 44px;
    padding: 0 ${({ theme }) => theme.spacing * 8}px;
    margin-top: ${({ theme }) => theme.spacing * 4}px;
    width: 100%;
    &:hover { 
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.white};
        box-sizing: border-box;
        border: 2px solid ${({ theme }) => theme.colors.primary};
    }
`;

export const ShowMoreButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: unset;
    color: ${({ theme }) => theme.colors.gray};
    opacity: 0.54;
    padding: 0;
    margin-left: ${({ theme }) => theme.spacing * 8}px;
    text-transform: uppercase;
    font-size: 10px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FilterTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: ${({ theme }) => theme.spacing * 4}px 0;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
`;

export const FiltersWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing * 4}px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
`;

export const StyledCheckbox = styled(Checkbox)`
    && {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const PriceWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const PriceInput = styled(TextField)`
    && {
        .MuiInputBase-input {
            color: ${({ theme }) => theme.colors.primary};
            text-align: center;
        }
    }
`;

export const StyledGridItem = styled(Grid)`
    @media screen and (max-width: 690px) {
        width: 100%;
    }
`;

export const ShowFiltersButton = styled.button`
    height: 44px;
    width: 100%;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing * 5}px;
    text-transform: uppercase;
    font-weight: bold;
`;
