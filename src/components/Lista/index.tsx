import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';


export type ListaProps = {
    id: string;
    title: string;
}

type Props = {
    data: ListaProps
}

export function Lista({data}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <MaterialIcons 
                    name="keyboard-arrow-right" 
                    color="#FFFF" 
                    size={18}
            />
        </View>
    );
}
