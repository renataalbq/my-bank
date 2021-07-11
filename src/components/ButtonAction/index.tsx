import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  children: ReactNode
}

export function ButtonAction({children, title, ...rest } : Props){
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
      {children}
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}