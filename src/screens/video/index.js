import React, { useContext, useEffect , useState, useRef} from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Main, Scroll, Column, Label, Title, Row, Button, SubLabel } from '@theme/global';
import { ThemeContext } from 'styled-components/native';
import { AnimatePresence, MotiImage, MotiView, useAnimationState } from 'moti';
import { Search , Send, Heart,  Menu, X, Undo2} from 'lucide-react-native'
const { width, height } = Dimensions.get('window');
import AntDesign from '@expo/vector-icons/AntDesign';

import { Modalize } from 'react-native-modalize';

export default function VideoScreen({ navigation, route }) {
    const { color, font, margin } = useContext(ThemeContext);
    const item =  {
        id: 1,
        name: 'Avivamento',
        img: require('@imgs/avivamento.png'),
        chapter: 
            {
                id: 1,
                title: 'Criando laços com o Senhor',
                duration: 2,
                chapter: 1,
                url: 'https://v1.pinimg.com/videos/mc/720p/86/3e/7d/863e7df0bea5f83c62be722ba9cbf714.mp4',
                pastor: 'Pr. Marcos Pereira',
            },
        list: [
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
        
    }
    const [currentTime, setcurrentTime] = useState('1:30');
    const [openMenu, setopenMenu] = useState(false);
    const handleOpenMenu = () => {
        setopenMenu(!openMenu)
        ChapterList.current?.open()
    }
    const [like, setlike] = useState(false);
    const handleLike = () => {
        setlike(!like)
    }
    const ChapterList = useRef(null);
    return (
        <Main>
            <MotiImage source={require('@imgs/home.png')} style={{ width: width, height: height + 30, position: 'absolute', top: -5, }} />
            <Column style={{ width: '88%', marginHorizontal: margin.h, alignSelf: 'center', height: '86%', borderRadius: 24, marginVertical: margin.v, backgroundColor: '#171717', }}></Column>



            <Row style={{ marginHorizontal: margin.h, justifyContent: 'space-between', alignItems: 'center',  zIndex: 99, }}>
                <Button style={{ paddingVertical:4, paddingHorizontal: 6, borderRadius: 6,  }}>
                    <Column>
                        <Title style={{ fontSize: 16, }}>Capítulo {item?.chapter?.chapter}</Title>
                        <Label style={{  fontSize: 14, fontFamily: font.book, }}>{currentTime} / {item.chapter?.duration}:00</Label>
                    </Column>
                </Button>

                <Row>
                    <Button onPress={() => {navigation.goBack()}}  style={{ width: 46, height: 46, borderRadius: 100, justifyContent: 'center', alignItems: 'center',  }}>
                        <Undo2 size={24} color="#ffffff" strokeWidth={1.75}  />
                    </Button>
                    <Button onPress={handleLike} style={{ width: 46, height: 46, borderRadius: 100, justifyContent: 'center', alignItems: 'center',  }}>
                        <AnimatePresence> 
                          {like ?  <MotiView from={{opacity: 0, scale: 0,}} transition={{type: 'timing'}} animate={{opacity: 1, scale: 1,}} exit={{opacity: 0, scale: 0,}}><AntDesign name="heart" size={24} color={color.red} /></MotiView> : <AntDesign name="hearto" size={24} color="#fff" /> }
                        </AnimatePresence> 
                    </Button>
                    <Button onPress={handleOpenMenu}  style={{ width: 46, height: 46, borderRadius: 100, justifyContent: 'center', alignItems: 'center',  }}>
                            <AnimatePresence>
                            {openMenu ? <MotiView from={{opacity: 0, scale: 0,}} transition={{type: 'timing'}} animate={{opacity: 1, scale: 1,}} exit={{opacity: 0, scale: 0,}}><X color="#fff"/></MotiView> : <Menu color="#fff"/>        }
                            </AnimatePresence>
                    </Button>
                </Row>







            </Row>

            <Modalize ref={ChapterList} onClose={() => setopenMenu(false)} snapPoint={300} handlePosition="inside" 
                handleStyle={{ backgroundColor: '#ffffff50', }} modalStyle={{ backgroundColor: '#26262600',   }}
                adjustToContentHeight >
                <MotiImage source={require('@imgs/home.png')} style={{ width: width, height: 600, position: 'absolute', borderTopLeftRadius: 24, borderTopRightRadius: 24, top: 0, bottom: 0,  }} />
              
                <Column style={{ paddingHorizontal: margin.h, paddingVertical: margin.v, }}>
                    <Title style={{ fontSize: 24, fontFamily: 'Font_Bold', marginBottom: 10, }}>Tocando agora</Title>
                    <Button style={{ borderRadius: 8, backgroundColor: "#ffffff30", padding: 12, }}>
                        <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                            <Column>
                                <Title style={{ fontSize: 18, }}>{item.chapter.title}</Title>
                                <Label style={{ fontSize: 10, }}>{item.chapter.pastor} - {item.chapter.duration} min - {item.chapter.chapter} capítulo</Label>
                            </Column>
                            <Row>

                            </Row>
                        </Row>
            </Button>
                    <Title style={{ fontSize: 24, fontFamily: 'Font_Bold', marginTop: 20, }}>Próximos</Title>
                    <FlatList
                        data={item.list}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <ChapterCard item={item} />}
                    />
                </Column>




            </Modalize>
        </Main>
    )
}


const ChapterCard = ({item}) => {
    return(
        <Column style={{ marginTop: 12, }}>
            <Button style={{ borderRadius: 8, backgroundColor: "#ffffff30", padding: 12, }}>
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
