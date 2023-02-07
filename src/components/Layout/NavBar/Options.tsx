import React from "react";
import { OptionItem, OptionsWrapper } from "./NavBar.styles";

export default function Options() {
    return (
        <OptionsWrapper>
            <OptionItem>Home</OptionItem>
            <OptionItem>Events</OptionItem>
            <OptionItem>Articles</OptionItem>
            <OptionItem>Activities</OptionItem>
            <OptionItem>FAQ</OptionItem>
        </OptionsWrapper>
    );
}
