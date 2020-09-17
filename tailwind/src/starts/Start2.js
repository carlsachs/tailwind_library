import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

//import media
import Skyscraper from "../media/skyscraper.jpg";
import logo from "../media/logos/logo.png";

//TW
const Container = tw.div`relative text-blue-900 h-full -mx-8 -mb-8 px-8 flex justify-center`;
const ThreeColumn = tw.div`bg-blue-900 flex flex-row w-full`;
const ColumnOne = tw.div`bg-blue-700 w-1/3 h-screen flex flex-col justify-evenly`;
const ColumnTwo = tw.div`relative block bg-blue-400 w-1/3 h-screen`;
const ColumnThree = tw.div`bg-blue-200 w-1/3 h-screen flex flex-col justify-evenly`;
const CyphenDiv = tw.div`bg-blue-200 h-full flex justify-center`;
const CyphenDescription = tw.div`bg-gray-900 h-full`;
const Img = tw.img`absolute inset-0 w-full h-full object-cover object-center z-0`;
const SubColumnOne = tw.div`bg-blue-900 h-full`;
const SubColumnTwo = tw.div`bg-blue-700 h-full`;
const SubColumnThree = tw.div`bg-blue-500 h-full`;
const BrandText = tw.text`text-6xl mt-24 text-blue-500`;

export default () => {

    return (
        <Container>

            <ThreeColumn>
            
                <ColumnOne>
                    <CyphenDiv>
                        <BrandText>Cyphen</BrandText>
                    </CyphenDiv>
                    <CyphenDescription>
                    
                    </CyphenDescription>
                </ColumnOne>
                <ColumnTwo>
                    <Img src={Skyscraper} alt="skyscraper vertical shot" />
                    <img style={{
                        height: "150px",
                        width: "150px",
                        position: "absolute",
                        top: "36%",
                        left: "37%"
                    }} src={logo} alt="CyphenDevelopment Logo" />
                </ColumnTwo>
                <ColumnThree>
                    <SubColumnOne>
                        <h1>SubcardOne</h1>
                    </SubColumnOne>
                    <SubColumnTwo>
                        <h1>SubcardTwo</h1>
                    </SubColumnTwo>
                    <SubColumnThree>
                        <h1>SubcardThree</h1>
                    </SubColumnThree>
                </ColumnThree>
            
            </ThreeColumn>
        
        </Container>
    )
}