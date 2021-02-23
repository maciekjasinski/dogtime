import styled from 'styled-components';
import { StyledNavLink as NavLink, LoginButton } from '../Navbar/Navbar.styles';

export const Wrapper = styled.div`
    height: calc(100vh - 60px);
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray};
    padding: ${({ theme }) => theme.spacing * 6}px ${({ theme }) => theme.spacing * 4}px;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
`;

export const StyledNavLink = styled(NavLink)`
    margin: 0 0 ${({ theme }) => theme.spacing * 6}px 0;
`;

export const StyledLoginButton = styled(LoginButton)`
    margin: 0;
`;