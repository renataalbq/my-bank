import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';


export function Menu({...rest } : RectButtonProps){
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
        <MaterialIcons 
            name="menu" 
            color="#FFFF" 
            size={48}
        />

    </RectButton>
  );
}