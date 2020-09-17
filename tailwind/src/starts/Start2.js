import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

//import media
import Skyscraper from "../media/skyscraper.jpg";

//TW
const Container = tw.div`relative text-blue-900 h-full -mx-8 -mb-8 px-8 flex justify-center`;
const ThreeColumn = tw.div`bg-blue-900 flex flex-row w-full`;
const ColumnOne = tw.div`bg-blue-700 w-1/3 h-screen`;
const ColumnTwo = tw.div`relative block bg-blue-400 w-1/3 h-screen`;
const ColumnThree = tw.div`bg-blue-200 w-1/3 h-screen`;
const Img = tw.img`absolute inset-0 w-full h-full object-cover object-center`;

export default () => {

    return (
        <Container>

            <ThreeColumn>
            
                <ColumnOne>
                    <h1>Card One</h1>
                </ColumnOne>
                <ColumnTwo>
                    <Img src={Skyscraper} alt="skyscraper vertical shot" />
                </ColumnTwo>
                <ColumnThree>
                    <h1>Card Three</h1>
                </ColumnThree>
            
            </ThreeColumn>
        
        </Container>
    )
}