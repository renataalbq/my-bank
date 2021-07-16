import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export type CardProps = {
    id: string;
    name: string;
    cardNumber: string;
    date: number;
    cvv: number;
}

type Props = {
    data: CardProps
}


export function Card({data}: Props){
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.value}>{data.date}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.desc}>{data.cardNumber}</Text>
                <Text style={styles.date}>{data.cvv}</Text>
            </View>
        </View>
    )
}