import React, { useContext } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Main, Scroll, Column, Label, Title, Row, Button, SubLabel } from '@theme/global';
import { ThemeContext } from 'styled-components/native';
import { MotiImage, MotiView } from 'moti';
import { Search } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation, }) {
    const { color, font, margin } = useContext(ThemeContext);
    const data = ministracoes[0];
    return (
        <Main>
            <MotiImage source={require('@imgs/home.png')} style={{ width: width, height: height + 50, position: 'absolute', top: -15, }} />
            <Scroll>
                <Row style={{ justifyContent: 'space-between', alignItems: 'center',  marginHorizontal: margin.h, marginTop: 20, }}>
                    <MotiImage source={require('@imgs/logo.png')}/>
                    <MotiImage source={require('@imgs/side.png')}/>
                </Row>

                <Button onPress={() => navigation.navigate('Search')} style={{ paddingHorizontal: 20, paddingVertical: 12, marginVertical: 12, marginHorizontal: margin.h, backgroundColor: '#ffffff25', borderRadius: 12,  }}>
                    <Row style={{ justifyContent: 'space-between', alignItems: 'center', flexGrow: 1, }}>
                        <SubLabel style={{}}>Buscar</SubLabel>
                        <Search size={26} color="#fff"/>
                    </Row>
                </Button>

                <Column style={{ justifyContent: 'center', alignItems: 'center',   marginBottom: 20, marginTop: 50,}}>

                    <Row style={{ marginBottom: 20, }}>
                        <MotiImage from={{scale: 0, opacity: 0, rotate: '32deg'}} animate={{scale: 1, opacity: 1, rotate: '-20deg'}} style={{ width: 152, height: 242, borderRadius: 12, backgroundColor: '#303030', zIndex: 99,  }} />
                        <MotiImage from={{scale: 0, opacity: 0, rotate: '32deg'}} animate={{scale: 1, opacity: 1, rotate: '10deg'}} style={{ width: 152, height: 242, borderRadius: 12, backgroundColor: '#202020', marginLeft: -50, }} />
                    </Row>

                    <Title style={{ fontFamily: 'Rox_Bold', fontSize: 52, }}>{data?.name}</Title>
                 
                    <Row>
                        <Button style={{ backgroundColor: '#2E2E2E40', paddingVertical: 8, paddingHorizontal: 24, borderRadius: 100, borderWidth: 1, borderColor: '#4d4d4d50' }}>
                            <Label style={{ color: '#ffffff99', fontSize: 16, }}>{data?.type}</Label>
                        </Button>
                        <Column style={{width: 12, }} />
                        <Button style={{ backgroundColor: '#2E2E2E40', paddingVertical: 8, paddingHorizontal: 24, borderRadius: 100, borderWidth: 1, borderColor: '#4d4d4d50' }}>
                            <Label style={{ color: '#ffffff99', fontSize: 16, }}>{data?.versiculo?.book}</Label>
                        </Button>
                    </Row>
                    <Row style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12, }}>
                        <Title style={{ marginRight: 12, fontSize: 18, }}>{data?.follows}</Title>
                        <Label style={{ fontSize: 14, }}>Seguidores</Label>
                    </Row>
                    <Button onPress={() => {navigation.navigate('Details', {item: data})}}  style={{ backgroundColor: '#FFF', paddingVertical: 8, marginTop: 12, paddingHorizontal: 24, borderRadius: 100, borderWidth: 1, borderColor: '#4d4d4d50' }}>
                            <Label style={{ color: '#000', fontSize: 16, fontFamily: font.medium, }}>Começar</Label>
                        </Button>
                </Column>

                <Title style={{ marginHorizontal: margin.h, marginBottom: 12,}}>Ministrações</Title>
                <FlatList
                    data={ministracoes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Card item={item} />}
                    horizontal
                />


                <Column style={{height: 150, }} />
            </Scroll>
        </Main>
    )
}

const Card = ({item}) => {
    const navigation = useNavigation()
    return(
        <Column style={{ marginLeft: 26, }}>
            <Button onPress={() => {navigation.navigate('Details', {item: item})}}  style={{ borderRadius: 12, }}>
                <MotiImage source={item?.img} style={{ width: 130, height: 240,  backgroundColor: '#ffffff50',   }}/>
            </Button>
        </Column>
    )
}


const ministracoes = [
    {
        id: 1,
        name: 'Avivamento',
        desc: 'Conjunto de ministrações.',
        img: require('@imgs/avivamento.png'),
        follows: '24,978',
        type: 'Motivacional',
        banner: require('@banner/avivamento.png'),
        versiculo: {
            message: "“Sejam bondosos e compassivos uns para com os outros, perdoando‑se mutuamente, como Deus os perdoou em Cristo.”",
            book: 'Efésios',
            chapter: 4,
            verse: 32,    
        },
        chapters: 14,
        duration: 26,
        reward: 12,
        list: [
            {
                id: 1,
                title: 'Criando laços com o Senhor',
                duration: 2,
                chapter: 1,
                pastor: 'Pr. Marcos Pereira',
            },
            {
                id: 2,
                title: 'Fortes no Senhor somos',
                duration: 3,
                chapter: 2,
                pastor: 'Pr. André Marçal',
            },
            {
                id: 3,
                title: 'Criando laços com o Senhor',
                duration: 3,
                chapter: 3,
                pastor: 'Pr. Marcos Pereira',
            },
            {
                id:4,
                title: 'Fortes no Senhor somos',
                duration: 1,
                chapter: 4,
                pastor: 'Pr. André Marçal',
            },
        ]
    },
    {
        id: 2,
        name: 'Poder inigualável',
        desc: 'Conjunto de ministrações.',
        img: require('@imgs/inigualavel.png'),
        follows: '15,430',
        type: 'Motivacional',
        banner: require('@banner/inigualavel.png'),
        versiculo: {
            message: "“Sejam bondosos e compassivos uns para com os outros, perdoando‑se mutuamente, como Deus os perdoou em Cristo.”",
            book: 'Efésios',
            chapter: 4,
            verse: 32,    
        },
        chapters: 9,
        duration: 11,
        reward: 8,
        list: [
            {
                id: 1,
                title: 'Criando laços com o Senhor',
                duration: 2,
                chapter: 1,
                pastor: 'Pr. Marcos Pereira',
            },
            {
                id: 2,
                title: 'Fortes no Senhor somos',
                duration: 3,
                chapter: 2,
                pastor: 'Pr. André Marçal',
            },
            {
                id: 3,
                title: 'Criando laços com o Senhor',
                duration: 3,
                chapter: 3,
                pastor: 'Pr. Marcos Pereira',
            },
            {
                id:4,
                title: 'Fortes no Senhor somos',
                duration: 1,
                chapter: 4,
                pastor: 'Pr. André Marçal',
            },]
    },

]