import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Container, IconButton } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import {
    StyledAppBar,
    FlexWrapper,
    StyledNavLink,
    Logo,
    LoginButton,
    StyledIconButton
} from './Navbar.styles';
import { Drawer } from '../Drawer';

export function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }
    return (
        <>
            <StyledAppBar position="fixed">
                <Container>
                    {isMobile ?
                        <FlexWrapper>
                            <Logo>DogTime</Logo>
                            <StyledIconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                                {isDrawerOpen ? <Close /> : <Menu />}
                            </StyledIconButton>
                        </FlexWrapper>
                    :
                        <FlexWrapper>
                            <Logo>Dogtime</Logo>
                            <div>
                                <StyledNavLink to='/hodowle'>Hodowle</StyledNavLink>
                                <StyledNavLink to='/rasy'>Rasy</StyledNavLink>
                                <StyledNavLink to='/poradnik'>Poradnik</StyledNavLink>
                                <LoginButton>Zaloguj się</LoginButton>
                            </div>
                        </FlexWrapper>
                    }
                </Container>
                {isDrawerOpen && <Drawer close={closeDrawer} />}
            </StyledAppBar>
        </>
    )
}
