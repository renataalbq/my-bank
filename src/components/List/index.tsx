import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export type ListaProps ={
    id: string;
    title: string;
    value: string;
    desc: string;
    date: string;
}

type Props = {
    data: ListaProps
}

export function Lista({data}: Props) {
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


