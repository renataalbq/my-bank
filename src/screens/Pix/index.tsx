import React from "react";
import { View, Text,Image } from "react-native";
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { ButtonAction } from '../../components/ButtonAction';
import {Lista} from '../../components/Lista';
import { Header } from "../../components/Header";
import {styles} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import pixLogo from '../../assets/pixLogo.png';


export function Pix(){
    const listaOpcoes = [
        {
            id: '1',
            title: 'Minhas chaves',
        },
        {
            id: '2',
            title: 'Limite Pix',
        },

    ]
    return(
        <Background>
            <Header title="PIX" />
            <View style={styles.content}>
                <Image source={pixLogo} style={styles.image} resizeMode="stretch" />
                <Text style={styles.text}>
                    Envie e receba pagamentos{`\n`}
                    de forma instantânea e gratuita
                </Text>
                </View>
            <View style={styles.container}>
                <View style={styles.box}>
                    <ButtonAction title={'PAGAR'}>
                        <MaterialIcons 
                            name="monetization-on" 
                            color="#FFFF" 
                            size={48}  
                            style={styles.icon}
                        />
                    </ButtonAction>  
                </View>
                <View style={styles.box}>
                    <ButtonAction title={'RECEBER'}>
                        <MaterialIcons 
                            name="arrow-downward" 
                            color="#FFFF" 
                            size={48}  
                            style={styles.icon}
                        />
                    </ButtonAction>  
                </View>
    
            </View>
            <View style={styles.infos} >
                <FlatList
                    data={listaOpcoes}
                    keyExtractor={item => item.id}
                    renderItem={({item }) => (
                        <>
                            <View style={styles.lista}>
                                <Lista data={item} />
                            </View>
                        </>
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    
                />
            </View>
        </Background>
    );
}