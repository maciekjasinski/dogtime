import React from 'react';
import { Wrapper, StyledNavLink, StyledLoginButton } from './Drawer.styles';
import { DrawerProps } from './Drawer.interface';

export function Drawer({ close }: DrawerProps) {
    return (
        <Wrapper>
            <StyledNavLink onClick={() => close()} to='/hodowle'>Hodowle</StyledNavLink>
            <StyledNavLink onClick={() => close()} to='/rasy'>Rasy</StyledNavLink>
            <StyledNavLink onClick={() => close()} to='/poradnik'>Poradnik</StyledNavLink>
            <StyledLoginButton onClick={() => close()}>Zaloguj się</StyledLoginButton>
        </Wrapper>
    )
}
