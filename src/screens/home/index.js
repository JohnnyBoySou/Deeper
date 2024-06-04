import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { Main, Scroll, Column, Label, Title, Row, Button, SubLabel } from '@theme/global';
import { ThemeContext } from 'styled-components/native';
export default function HomeScreen({ navigation, }) {
    const { color, font, } = useContext(ThemeContext);
    return (
        <Main>
            <Scroll>

            <Button onPress={() => navigation.navigate('Search')} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 12, marginVertical: 12, borderWidth: 1, borderColor: '#ffffff50', backgroundColor: '#ffffff25', borderRadius: 100, }}>
                <SubLabel style={{}}>Pesquisar</SubLabel>
            </Button>

            </Scroll>
        </Main>
    )
}