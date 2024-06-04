import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { Main, Scroll, Column, Label, Title, Row } from '@theme/global';
import { ThemeContext } from 'styled-components/native';
export default function SearchScreen({ navigation, }) {
    const { color, font, } = useContext(ThemeContext);
    return (
        <Main>
            <Scroll>

            </Scroll>
        </Main>
    )
}