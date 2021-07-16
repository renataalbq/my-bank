import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';

type Props ={
    urlImg: string;
}

export function Avatar ({urlImg}: Props){
    return(
        <View style={styles.container}>
            <Image 
            source={{uri: urlImg}} 
            style={styles.avatar} />
        </View>
    )
}