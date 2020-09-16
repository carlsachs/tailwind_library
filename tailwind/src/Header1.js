import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

const Container = tw.div`relative bg-gray-900 text-blue-400 h-full -mx-8 -mb-8 px-8`;
const Top = tw.div`max-w-screen-xl mx-auto pt-4 pb-4`;
const Text = tw.text`text-blue-400 flex justify-center w-full border-red-200`;

export default () => {

    return (
        <Container>
            <LogoArea>
                <Text>This is the Top</Text>
            </LogoArea>
        </Container>
    )
}