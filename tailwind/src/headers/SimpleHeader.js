import React from "react";
import tw from "twin.macro";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components/macro";

const Container = tw.div`relative bg-gray-900 text-blue-400 h-full -mx-8 px-8 flex justify-center`;
const Navs = tw.div`max-w-screen-xl pt-4 pb-4 space-x-24`;
const MainButton = tw.button`border-2 border-blue-700 w-32 px-4 py-2 rounded hocus:border-opacity-50 hocus:border-blue-400 hocus:text-blue-300`;

const NavigationLink = tw.a`text-blue-400 hocus:cursor-pointer hocus:text-blue-200`;

export default () => {

    return (
        <Container>
            <Navs>
                <NavigationLink to="/">Home</NavigationLink>
                <NavigationLink to="/">Team</NavigationLink>
                <NavigationLink to="/">Work</NavigationLink>
                <NavigationLink to="/">Pricing</NavigationLink>
                <NavigationLink to="/">Contact</NavigationLink>
                <MainButton>Order Now</MainButton>
                <MainButton>Login</MainButton>
            </Navs>
        </Container>
    )
}