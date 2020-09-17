import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

//import media
import skyscraper from "../media/skyscraper.jpg";

const Container = tw.div`relative bg-gray-500 text-blue-900 h-full -mx-8 -mb-8 px-8 flex justify-center`;
const TwoColumnWrap = tw.div`flex flex-row lg:items-center max-w-screen-xl mx-auto py-10 md:py-10 space-x-64`;
const ColumnOne = tw.div``;
const ColumnTwo = tw.div``;
const Img = tw.img``;

export default () => {

    return (
        <Container>

        <TwoColumnWrap>

            <ColumnOne>
                <h1>Column One</h1>
            </ColumnOne>

            <ColumnTwo>
                <Img src={skyscraper} alt="skyscraper vertical shot" />
            </ColumnTwo>

        </TwoColumnWrap>
        
        </Container>
    )
}