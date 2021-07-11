import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export type TransactionsProps ={
    id: string;
    title: string;
    value: string;
    desc: string;
    date: string;
}

type Props = {
    data: TransactionsProps
}

export function Transactions({data}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.value}>{data.value}</Text>
            </View>
                <View style={styles.item}>
                <Text style={styles.desc}>{data.desc}</Text>
            <Text style={styles.date}>{data.date}</Text>
            </View>
        </View>
    );
}


