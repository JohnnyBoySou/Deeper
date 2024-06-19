import React, { useContext, useRef, useState, } from 'react';
import { Dimensions, View } from 'react-native';
import { Main, Scroll, Column, Label, Title, Row, Button, SubLabel } from '@theme/global';
import { ThemeContext } from 'styled-components/native';
import { MotiImage, MotiView } from 'moti';
import { ChevronRight, Undo2 } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';
import{ GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, withTiming, runOnJS, useAnimatedStyle, SlideInDown, SlideOutDown } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const SHEET_OVER_DRAG = 20; 
const SHEET_HEIGHT = 160;

export default function OnboardingScreen({ navigation, }) {
    const { color, font, margin } = useContext(ThemeContext);

    const onClose = () => {
        offset.value = withSpring(SHEET_HEIGHT)
    }
    
    const offset = useSharedValue(0)


    const pan = Gesture.Pan().onChange((e) => {
        const offsetDelta = e.changeX + offset.value
        const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta)

        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
    }).onFinalize(() => {
        if (offset.value < SHEET_HEIGHT / 3) {
            offset.value = withSpring(0)
        }else{
            offset.value = withTiming(SHEET_HEIGHT, {}, () => {
                runOnJS(onClose)()
            })
        }
    })

    const translateX = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }]
        }
    })

    return (

        <Main style={{ paddingTop: 40, }}>
                <Row>
                    <Button style={{ backgroundColor: '#2E2E2E40', marginLeft: margin.h, justifyContent: 'center', alignItems: 'center',  borderRadius: 100, borderWidth: 1, borderColor: '#4d4d4d50', width: 44, height: 44, }}>
                       <Undo2 size={24} color="#fff"/>
                    </Button>
                </Row>

                <Column>
                    <Title style={{ fontSize: 38, textAlign: 'center', marginBottom: -14, marginTop: 10, }}>O que você está</Title>
                    <Title style={{ fontSize: 38, textAlign: 'center', color: "#EB6440", fontFamily: 'Rox_Bold'}}>procurando?</Title>
                </Column>

                <Column style={{ justifyContent: 'center', alignItems: 'center',   marginBottom: 20, marginTop: 50,}}>

                    <Row style={{ marginBottom: 20, transform: [{rotate: '-10deg',}] }}>
                    <Button style={{ borderWidth: 1, borderColor: '#EEEAE7', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 16, }}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                            <Column style={{ backgroundColor: '#EEEAE7', borderRadius: 100, padding: 8,  justifyContent: 'center', alignItems: 'center',  }}>
                                <MotiImage source={require('@imgs/rol.png')} style={{ width: 28, height: 28, }}/>
                            </Column>
                            <Label style={{ fontSize: 26, marginLeft: 14, fontFamily: 'Rox_Bold', color: "#EEEAE7",  textAlign: 'center', }}>Imagens</Label>
                        </Row>
                    </Button>
                    <Column style={{width: 24, }} />
                    <Button style={{ borderWidth: 1, backgroundColor: '#EEEAE7', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 16, }}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                            <Column style={{ backgroundColor: '#EEEAE7', borderRadius: 100, padding: 8,  justifyContent: 'center', alignItems: 'center',  }}>
                                <MotiImage source={require('@imgs/rol2.png')} style={{ width: 28, height: 28, }}/>
                            </Column>
                            <Label style={{ fontSize: 26, marginLeft: 14, fontFamily: 'Rox_Bold', color: "#EB6440",  textAlign: 'center', }}>Vídeos</Label>
                        </Row>
                    </Button>
                    </Row>
                    <Row style={{ marginBottom: 20, transform: [{rotate: '-10deg',}] }}>
                   
                    <Button style={{ borderWidth: 1, backgroundColor: '#EEEAE7', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 16, }}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                            <Column style={{ backgroundColor: '#EEEAE7', borderRadius: 100, padding: 8,  justifyContent: 'center', alignItems: 'center',  }}>
                                <MotiImage source={require('@imgs/rol2.png')} style={{ width: 28, height: 28, }}/>
                            </Column>
                            <Label style={{ fontSize: 26, marginLeft: 14, fontFamily: 'Rox_Bold', color: "#EB6440",  textAlign: 'center', }}>Ministrações</Label>
                        </Row>
                    </Button>

                    <Column style={{width: 24, }} />
                   
                    <Button style={{ borderWidth: 1, borderColor: '#EEEAE7', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 16, }}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                            <Column style={{ backgroundColor: '#EEEAE7', borderRadius: 100, padding: 8,  justifyContent: 'center', alignItems: 'center',  }}>
                                <MotiImage source={require('@imgs/rol.png')} style={{ width: 28, height: 28, }}/>
                            </Column>
                            <Label style={{ fontSize: 26, marginLeft: 14, fontFamily: 'Rox_Bold', color: "#EEEAE7",  textAlign: 'center', }}>Matinal</Label>
                        </Row>
                    </Button>

                    </Row>

                    <Row style={{ marginBottom: 20, transform: [{rotate: '-10deg',}] }}>
                    <Button style={{ borderWidth: 1, borderColor: '#EEEAE7', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 16, }}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                            <Column style={{ backgroundColor: '#EEEAE7', borderRadius: 100, padding: 8,  justifyContent: 'center', alignItems: 'center',  }}>
                                <MotiImage source={require('@imgs/rol.png')} style={{ width: 28, height: 28, }}/>
                            </Column>
                            <Label style={{ fontSize: 26, marginLeft: 14, fontFamily: 'Rox_Bold', color: "#EEEAE7",  textAlign: 'center', }}>Mensagens</Label>
                        </Row>
                    </Button>
                    <Column style={{width: 24, }} />
                    <Button style={{ borderWidth: 1, backgroundColor: '#EEEAE7', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 16, }}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                            <Column style={{ backgroundColor: '#EEEAE7', borderRadius: 100, padding: 8,  justifyContent: 'center', alignItems: 'center',  }}>
                                <MotiImage source={require('@imgs/rol2.png')} style={{ width: 28, height: 28, }}/>
                            </Column>
                            <Label style={{ fontSize: 26, marginLeft: 14, fontFamily: 'Rox_Bold', color: "#EB6440",  textAlign: 'center', }}>Versículos</Label>
                        </Row>
                    </Button>
                    </Row>
                </Column>



                <Column style={{ position: 'absolute',  bottom: 20, left: 30, right: 30, backgroundColor: '#EEEAE7', paddingTop: 24, borderRadius: 24, }}>

                    <Row style={{ backgroundColor: '#262626', padding: 24, borderBottomLeftRadius: 18, borderBottomRightRadius: 18, borderTopRightRadius: 32, }}>
                        <Row style={{  flexGrow: 2, marginLeft: 20, borderWidth: 2, borderColor: '#EB6440',  borderRadius: 24,  padding: 6, alignItems: 'flex-end'}}>
                            <GestureDetector gesture={pan}>
                            <Animated.View style={[translateX]} entering={SlideInDown.springify().damping(15)} exiting={SlideOutDown}>
                            <Button style={{ paddingVertical: 20,  alignSelf: 'flex-end', paddingHorizontal: 20, backgroundColor: '#EB6440', borderRadius: 18,}}>
                                <ChevronRight size={32} color="#fff"/>
                            </Button>
                            </Animated.View>
                            </GestureDetector>
                        </Row>
                    </Row>

                </Column>


                <Column style={{height: 150, }} />

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