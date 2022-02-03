import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Info from "./Info"
const Header = props =>{
    return <StyledHeader >
        <NavBar></NavBar>
        <Info></Info>
    </StyledHeader>
}

const StyledHeader = styled.div`

`

export default Header;

