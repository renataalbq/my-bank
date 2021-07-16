import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action}: Props ){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather 
          name="arrow-left"
          size={24}
          color="#FFF"
        />
      </BorderlessButton>

      <Text style={styles.title}>
        { title }
      </Text>

      { action ? <View> { action } </View> : <View style={{ width: 24 }}/> }
    </View>
  );
}