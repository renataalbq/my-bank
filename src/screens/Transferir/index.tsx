import React, {useState, useEffect} from "react";
import { View, Text,  FlatList,  ActivityIndicator, TouchableOpacity } from "react-native";
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Header } from "../../components/Header";
import {styles} from './styles';
import { Avatar } from "../../components/Avatar";
import { MaterialIcons } from '@expo/vector-icons';
import axios, {AxiosResponse} from "axios";

interface Contact {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}


export function Transferir(){
    const [user, setUser] = useState<Contact[]>([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response: AxiosResponse) => {
                setUser(response.data)
            })
    })

    function showContacts(item){
        const {name, email} = item.item
        return(
            <View style={styles.listaContainer}>
                <View style={styles.lista}>
                    <Avatar urlImg="https://secure.gravatar.com/avatar/4c220801431651e72fda2cf6f0563cbf?s=96&d=mm&r=g"  />
                    <View style={styles.infos}>
                        <Text style={styles.textName}>{name}</Text>
                        <Text style={styles.subtitle} >{email}</Text>
                    </View>
                </View>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    color="#FFF"
                    size={18}
                />
            </View>
        )
    }
    
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
                    data={user}
                    keyExtractor={item => item.name}
                    renderItem={showContacts}
                    ItemSeparatorComponent={() => <ListDivider />}
                    
                />
            </View>
        </Background>
    );
}


