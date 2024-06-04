import React, { useContext, useState } from 'react';
import { Main, Scroll, Column, Label, Title, Row, Button, SubLabel } from '@theme/global';
import { ThemeContext } from 'styled-components/native';
import { MotiImage } from 'moti';
import { Dimensions, FlatList, TextInput } from 'react-native';
import { Search } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';

const { width , height  } = Dimensions.get('window');

export default function SearchScreen({ navigation, }) {
    const { color, font, margin} = useContext(ThemeContext);
    const [type, settype] = useState('Pastor');
    return (
        <Main >
            <MotiImage source={require('@imgs/search.png')} style={{ width: width, height: height, position: 'absolute', top: 1, }} />
            <Button onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 10, zIndex: 999, alignSelf: 'center', width: 82, height: 10, borderRadius: 100, backgroundColor: '#ffffff50', }}>
               <Column/>
            </Button>
            <Scroll>
                <Column style={{ marginHorizontal: margin.h, marginVertical: margin.v,}}>
                    <Title style={{ fontSize: 32, }}>Buscador</Title>
                    <Row>
                        <TextInput placeholderTextColor="#70707090" style={{ backgroundColor:"#fff", flexGrow: 1, borderRadius: 12, padding: 16, fontFamily: font.bold, fontSize: 24, marginVertical: 16, }} placeholder='Buscar...'/>
                        <Search size={24} color="#000" style={{ position: 'absolute', top: 36, right: 20, }}/>
                    </Row>
                    <Row style={{  alignItems: 'center',  marginVertical: 4, }}>
                        <Button style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6,}} onPress={() => {settype('Ministracao')}} >
                            <Label style={{ fontFamily: 22, color: type === 'Ministracao' ? '#fff' : color.label,  fontFamily:'Font_Medium', textDecorationLine: type === 'Ministracao' ? 'underline' : 'none', textDecorationStyle: type === 'Ministracao' ? 'solid' : 'none',  }}>Ministração</Label>
                        </Button>
                        <Button style={{ paddingHorizontal: 12, marginHorizontal: 10,  paddingVertical: 6, borderRadius: 6, }} onPress={() => {settype('Pastor')}} >
                            <Label style={{ fontFamily: 22, color: type === 'Pastor' ? '#fff' : color.label,  fontFamily:'Font_Medium', textDecorationLine: type === 'Pastor' ? 'underline' : 'none', textDecorationStyle: type === 'Pastor' ? 'solid' : 'none',  }}>Pastor</Label>
                        </Button>
                        <Button style={{ paddingHorizontal: 12,  paddingVertical: 6, borderRadius: 6, }} onPress={() => {settype('Capitulo')}} >
                            <Label style={{ fontFamily: 22, color: type === 'Capitulo' ? '#fff' : color.label,  fontFamily:'Font_Medium', textDecorationLine: type === 'Capitulo' ? 'underline' : 'none', textDecorationStyle: type === 'Capitulo' ? 'solid' : 'none',  }}>Capítulo</Label>
                        </Button>
                    </Row>
                    <Button onPress={() => {}}  style={{ justifyContent: 'center', alignItems: 'center',  paddingVertical: 12, marginVertical: 12, borderWidth: 1, borderColor: '#ffffff50',  backgroundColor: '#ffffff25', borderRadius: 100, }}>
                        <SubLabel style={{ }}>Pesquisar</SubLabel>
                    </Button>

                    <Column style={{flexGrow: 1, height: 1, backgroundColor: '#ffffff20', marginVertical: 12, }} />
                    <Title>Resultados</Title>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Result item={item} />}
                        ListEmptyComponent={<Empty />}
                    />
                </Column>
            </Scroll>
        </Main>
    )
}

const data = [{
    id: 1,
    name: 'Avivamento',
    desc: 'Conjunto de ministrações.',
    img: require('@imgs/avivamento.png'),
    chapters: 12, 
    duration: '26min',
}]

const Result = ({item}) => {
    const navigation = useNavigation();
    return(
        <Button style={{ marginTop: 12, borderRadius: 12,}} onPress={() => {navigation.navigate('SerieSingle', {item: item,})}} >
        <Row >
            <MotiImage from={{opacity: 0, translateY: 20,}} animate={{opacity: 1, translateY: 0,}} source={item.img} style={{ width: 110, height: 180, borderRadius: 12, }} />
            <Column style={{ marginLeft: 30, }}>
                <Label style={{ textDecorationLine: 'underline', textDecorationStyle:'solid', fontSize: 16, }}>Disponível me Libras</Label>
                <Title style={{ fontSize: 24, marginVertical: 4, }}>{item?.name}</Title>
                <Label>{item?.desc}</Label>
                <Label style={{ fontSize: 16, }}>{item?.chapters} capítulos - {item?.duration}</Label>
                <Row style={{ marginTop: 16, }}>
                    <Button style={{ paddingVertical: 6, paddingHorizontal: 18, borderRadius: 100, backgroundColor: '#fff', }}>
                        <SubLabel style={{ color: "#000",  }}>Assistir</SubLabel>
                    </Button>
                    <Button style={{ backgroundColor: '#30303090', borderWidth:1, borderColor: '#505050', borderRadius:100,  paddingVertical: 6, paddingHorizontal: 18, marginLeft: 12,}}>
                        <SubLabel>Sobre</SubLabel>
                    </Button>
                </Row>
            </Column>
        </Row>
        </Button>

    )
    }

const Empty = () => {
    return(
        <Column style={{ marginVertical: 20, }}>
        <MotiImage from={{opacity: 0, translateY: 20,}} animate={{opacity: 1, translateY: 0,}} source={require('@imgs/empty.png')} style={{ width: 120, height: 120,  alignSelf: 'center' }} />
            <Title style={{ textAlign: 'center' }}>Não conseguimos encontrar...</Title>
            <Label style={{ textAlign: 'center' }}>Que tal tentar utilizar outro termo?</Label>
            <Button style={{ paddingHorizontal: 24, paddingVertical: 10, backgroundColor: '#fff', borderRadius: 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, }}>
                <SubLabel style={{ color: '#000', textAlign:'center',}}>Limpar</SubLabel>
            </Button>
        </Column>
    )}
