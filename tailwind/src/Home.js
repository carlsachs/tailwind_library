import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

//import Components
import Header from "./Header1";

const Container = tw.div`relative flex flex-col`;

export default () => {

    return (
        <Container>
            <Header />
        </Container>
    )
}