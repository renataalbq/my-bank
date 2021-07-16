import React, {useState, useCallback} from "react";
import { View, Text, FlatList, Button} from "react-native";
import {styles} from './styles';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_CARDS } from "../../configs/database";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Card, CardProps } from "../../components/Card";
import { ListDivider } from "../../components/ListDivider";
import { RectButton} from 'react-native-gesture-handler';


export function Cards(){
    const [cards, setCards] = useState<CardProps[]>([]);

    const navigation = useNavigation();

    function handleAddCard(){
        navigation.navigate('AddCard');
      }

    async function loadCards(){
        const response = await AsyncStorage.getItem(COLLECTION_CARDS)
        const storage: CardProps[] = response ? JSON.parse(response) : [];

        setCards(storage)
    }

    useFocusEffect(useCallback(() => {
        loadCards();
    },[]));


    return(
        <Background>

            <Header title="CADASTRAR CARTÃO" />
            <View style={styles.boxBtn}>
                <RectButton style={styles.cadastrarBtn} onPress={handleAddCard}>
                    <Text style={styles.textBtn}>CADASTRAR NOVO CARTÃO</Text>        
                </RectButton>    
            </View>
            <FlatList 
                data={cards}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card 
                        data={item} 
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 69,marginTop: 30 }}
                showsVerticalScrollIndicator={false}
            />
        </Background>

    )
}