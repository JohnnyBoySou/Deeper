import React, { useContext, useEffect } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Main, Scroll, Column, Label, Title, Row, Button, SubLabel } from '@theme/global';
import { ThemeContext } from 'styled-components/native';
import { MotiImage, MotiView, useAnimationState } from 'moti';
import { Search, Undo2 } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

export default function DetailsScreen({ navigation, route }) {
    const { color, font, margin } = useContext(ThemeContext);
    const item = route.params?.item

    const user = {
        finish: {
            chapters: 3,
            duration: 5,
        },
    }

    const progress = user.finish.chapters / item.chapters * 100
    const minutes =  item.duration - user.finish.duration  

    const versiculo = useAnimationState({
        open: {
            opacity: 1,
            height: 180,
        },
        close: {
            opacity: 0,
            height: 0,
        },
    })

    useEffect(() => {
        versiculo.transitionTo('open')
    }, [])
    return (
        <Main style={{ backgroundColor: '#171717',  }}>
            <MotiImage source={item?.banner} style={{ width: width, height: height + 60, position: 'absolute', top: -5, opacity: .5, }} />
            <Scroll style={{ paddingTop: 0, }} onScroll={(event) => {const scrolling = event.nativeEvent.contentOffset.y; if (scrolling >= 200) {  versiculo.transitionTo('close'); } else {  versiculo.transitionTo('open'); } }} >
                <Row style={{ justifyContent: 'space-between', alignItems: 'center',  marginHorizontal: margin.h, marginTop: 10, }}>
                    <Button onPress={() => {navigation.goBack()}} style={{ width: 46, height: 46, borderRadius: 100, backgroundColor: "#ffffff20", justifyContent: 'center', alignItems: 'center',  }} >
                        <Undo2 size={24} color="#ffffff" strokeWidth={1.75}  />
                    </Button>
                    <MotiImage source={require('@imgs/side.png')}/>
                </Row>

                <MotiView state={versiculo} style={{ marginHorizontal: margin.h, marginVertical: 32, }} transition={{type: 'timing', duration: 2000,}}>
                    <Title style={{ fontFamily: 'Rox_Bold', fontSize: 26, }}>{item?.versiculo?.message}</Title>
                    <Title style={{ fontFamily: 'Rox_Bold', textAlign:'right', marginTop: 12, fontSize: 18, }}>{item?.versiculo?.book} {item?.versiculo.chapter}:{item?.versiculo.verse}</Title>
                </MotiView>

                <Column style={{ justifyContent: 'center', marginHorizontal: margin.h,  }}>

                    <Row style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 12, }}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                            <Title style={{ marginRight: 6, fontSize: 18, }}>{item?.follows}</Title>
                            <Label style={{ fontSize: 14,  }}>Seguidores</Label>
                        </Row>
                        <Button style={{ backgroundColor: '#2E2E2E40', paddingVertical: 8, paddingHorizontal: 24, borderRadius: 100, borderWidth: 1, borderColor: '#4d4d4d50' }}>
                            <Label style={{ color: '#ffffff99', fontSize: 16, }}>{item?.type}</Label>
                        </Button>
                    </Row>

                    <Title style={{ fontFamily: 'Rox_Bold', fontSize: 52, marginBottom: 30, }}>{item?.name}</Title>
                    
                    <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                        <Label style={{ color: "#fff", }}>{user.finish?.chapters} conclúidos</Label>
                        <Label style={{ color: "#fff", }}>{item?.chapters} episódios</Label>
                    </Row>

                    <Row style={{ backgroundColor: '#b4b4b430', height: 48, borderRadius: 100,  marginTop: 12,}}>
                        <Column style={{ width: progress + '%', backgroundColor: progress == 100 ? "#fff" : "#ffffff20", borderRadius: 100, height: 48,  position:'relative', }}>
                            <Row style={{ justifyContent: 'center', alignItems: 'center', height: 48, }}>
                                <Label style={{ color: progress == 100 ? "#000" : "#fff", }}>{progress.toFixed(0)}%</Label>
                            </Row>
                        <Column style={{ width: 48, height: 48, backgroundColor: '#fff', borderRadius: 100, position: 'absolute', right: 0, }} />
                        </Column>
                    </Row>

                    <Column style={{ marginVertical: 20, }}>
                        <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                            <Label>Para completar</Label>
                            <Label style={{ fontSize: 18, color: '#fff', fontFamily: 'Font_Medium' }}>{minutes} minutos</Label>
                        </Row>
                        <Column style={{ flexGrow: 1, height: 0.6, backgroundColor: '#ffffff40', marginVertical: 24, }} />
                        <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                            <Label>Recompensa</Label>
                            <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                                <MotiImage source={require('@imgs/dracma.png')} style={{ width: 28, height: 28, marginRight: 6,}} />
                                <Label style={{ fontSize: 18, color: '#fff', fontFamily: 'Font_Medium' }}>{item?.reward} Dracmas</Label>
                            </Row>
                        </Row>
                    </Column>

                    <Button onPress={() => {navigation.navigate('Video', {item: item})}}  style={{ backgroundColor: '#ffffff25', paddingVertical: 12, marginTop: 16, paddingHorizontal: 24, borderRadius: 100, borderWidth: 1, borderColor: '#ffffff60', justifyContent: 'center', alignItems: 'center',  }}>
                            <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                                <Label style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', }}>Começar ministração</Label>
                                <MotiImage source={require('@imgs/start.png')} style={{ width: 32, height: 32, marginLeft: 6,}} />
                            </Row>
                    </Button>
                    <Column style={{ flexGrow: 1, height:1, backgroundColor: '#ffffff40', marginVertical: 24, }} />
                    <Title>Capítulos</Title>

                    <FlatList
                        data={item.list}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <ChapterCard item={item} />}
                    />

                    <Column style={{height: 200,  flexGrow: 1, borderRadius: 12, marginTop: 50, marginBottom: 50, }} />

                </Column>

            </Scroll>
        </Main>
    )
}


const ChapterCard = ({item}) => {
    const navigation = useNavigation()
    return(
        <Column style={{ marginTop: 12, }}>
            <Button style={{ borderRadius: 8, backgroundColor: "#ffffff30", padding: 12, }} onPress={() => {navigation.navigate('Video', {item: item})}} >
                <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                    <Column>
                        <Title style={{ fontSize: 18, }}>{item.title}</Title>
                        <Label style={{ fontSize: 10, }}>{item.pastor} - {item.duration} min - {item.chapter} capítulo</Label>
                    </Column>
                    <Row>
                    </Row>
                </Row>
            </Button>
        </Column>
    )
}
