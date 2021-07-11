import React from "react";
import { View, Text, Image } from "react-native";
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import {Lista} from '../../components/Lista';
import {styles} from './styles';
import { Header } from "../../components/Header";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";


export function Perfil(){
    const listaOpcoes = [
        {
            id: '1',
            title: 'Nome',
        },
        {
            id: '2',
            title: 'Email',
        },
        {
            id: '3',
            title: 'Endereço',
        },
        {
            id: '4',
            title: 'Telefone',
        },
        {
            id: '5',
            title: 'Renda Mensal',
        },
        {
            id: '6',
            title: 'Senha',
        },
    ]
    return(
        <Background>
            <Header title="PERFIL" />
            <View style={styles.header}>
                <Image style={styles.avatar} source={{uri:"https://github.com/renataalbq.png"}} />
                <TouchableOpacity>
                    <Text style={styles.textFoto}>Alterar Foto</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={listaOpcoes}
                    keyExtractor={item => item.id}
                    renderItem={({item }) => (
                        <Lista data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    
                />
            </View>
        </Background>
    );
}