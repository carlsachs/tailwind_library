import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

//reveal slide animation
import ComponentAnimation from "./helpers/ComponentAnimation";

//import Components
import Header from "./headers/SimpleHeader";
import Start from "./starts/Start1";
import Cards1 from "./starts/Start2";

const Container = tw.div`relative flex flex-col`;

export default () => {

    return (
        <Container>
        <ComponentAnimation>
            <Header />
            <Cards1 />
        </ComponentAnimation>
        </Container>
    )
}