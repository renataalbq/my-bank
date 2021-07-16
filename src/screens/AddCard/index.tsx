import React, {useState} from "react";
import { View, Text, ImageBackground, TextInput, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import {styles} from './styles';
import {BlurView} from 'expo-blur';
import { Header } from "../../components/Header";
import illustrationBg from '../../assets/illustrationBg.png';
import { RectButton} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import uuid from 'react-native-uuid';
import { COLLECTION_CARDS, DATABASE_NAME } from "../../configs/database";

export function AddCard(){

    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [validMonth, setValidMonth] = useState('')
    const [validYear, setValidYear] = useState('')
    const [cvv, setCvv] = useState('')

    const navigation = useNavigation();

    async function handleSave(){
        const newCard = {
            id: uuid.v4(),
            name,
            cardNumber,
            date: `${validMonth}/${validYear}`,
            cvv
        };

        const storage = await AsyncStorage.getItem(COLLECTION_CARDS);
        const cards = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_CARDS,
            JSON.stringify([...cards,newCard])

        );

        navigation.navigate('Cards')
    }

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <Header title="CADASTRAR CARTÃO" />
                <ImageBackground 
                    style={styles.imageBg} 
                    source={illustrationBg} 
                    resizeMode="cover"  
                >
                    <BlurView style={styles.blur} >
                        <Text style={styles.textName}>{name}</Text>
                        <Text style={styles.cardNumber}>{cardNumber}</Text>
                        <View style={styles.content}>
                            <Text style={styles.validText}>Valid Thru</Text>
                            <Text style={styles.textCvv}>Cvv</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.row}>
                                <Text style={[styles.date, {marginLeft: 13}]}>{validMonth}</Text>
                                <Text style={styles.date}> / </Text>
                                <Text style={styles.date}>{validYear}</Text>   
                            </View>
                            <View>
                              <Text style={styles.cvv}>{cvv}</Text>  
                            </View>
                        </View>
                    </BlurView>
                </ImageBackground>

                <TextInput 
                    style={styles.input} 
                    maxLength={30}
                    placeholder="Nome completo"
                    onChangeText={setName} 
                />

                <TextInput 
                    style={styles.input}
                    maxLength={20}
                    keyboardType="numeric"
                    placeholder="Número do cartão"
                    onChangeText={setCardNumber} 
                />
                <View style={styles.row}>
                    <View style={styles.info}>
                        <TextInput 
                            style={styles.smallInput}
                            placeholder="Mês"
                            maxLength={2}
                            keyboardType="numeric"
                            onChangeText={setValidMonth} 
                        />
                        <TextInput 
                            style={styles.smallInput}
                            placeholder="Ano"
                            maxLength={2}
                            keyboardType="numeric"
                            onChangeText={setValidYear} 
                        />
                    </View>
                    <View>
                        <TextInput 
                            style={styles.mediumInput}
                            keyboardType="numeric"
                            maxLength={3}
                            placeholder="CVV"
                            onChangeText={setCvv} 
                        />
                    </View>
                </View>
                <View style={styles.boxBtn}>
                    <RectButton style={styles.cadastrarBtn} onPress={handleSave}>
                        <Text style={styles.textBtn}>CADASTRAR</Text>        
                    </RectButton>    
                </View>
        </ScrollView>
       </KeyboardAvoidingView>
    );
}