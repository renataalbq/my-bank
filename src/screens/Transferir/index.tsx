import React from "react";
import { View, Text } from "react-native";
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import {Lista} from '../../components/Lista';
import { Header } from "../../components/Header";
import {styles} from './styles';
import { Avatar } from "../../components/Avatar";
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";


export function Transferir(){
    const listaOpcoes = [
        {
            id: '1',
            title: 'Renata Albuquerque',
        },
        {
            id: '2',
            title: 'Gabriel Soares da Silva',
        },
        {
            id: '3',
            title: 'Lindemberg F. Santos',
        },

    ]
    return(
        <Background>
            <Header title="TRANSFERIR" />
            <View style={styles.container}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.text}>Transferir para novo contato</Text>
                    <MaterialIcons 
                        name="keyboard-arrow-right" 
                        color="#FFFF" 
                        size={18}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.contatos} >
                <ListHeader title='Contatos frequentes' />
                <FlatList
                    data={listaOpcoes}
                    keyExtractor={item => item.id}
                    renderItem={({item }) => (
                        <>
                            <View style={styles.lista}>
                                <Avatar urlImg="https://secure.gravatar.com/avatar/4c220801431651e72fda2cf6f0563cbf?s=96&d=mm&r=g" />
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