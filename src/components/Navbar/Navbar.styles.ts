import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AppBar, IconButton } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
    && {
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const FlexWrapper = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        display: flex;
        align-items: center;
    }
`;

export const StyledIconButton = styled(IconButton)`
    && {
        padding-right: 0;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const activeClassName = 'active';

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
    margin: 0 ${({ theme }) => theme.spacing * 6}px;
    text-transform: uppercase;
    &.${activeClassName} {
        color: ${({ theme }) => theme.colors.primary};
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Logo = styled.h1`
    font-size: 24px;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const LoginButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    margin: 0 0 0 ${({ theme }) => theme.spacing * 6}px;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing * 2}px ${({ theme }) => theme.spacing * 6}px;
    font-weight: bold;
    font-size: 14px;
    height: 44px;
    display: block;
    border: none;
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;