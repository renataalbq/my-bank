import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useFonts} from 'expo-font';
import {Inter_300Light, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold} from '@expo-google-fonts/inter'
import {Montserrat_300Light, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading'
import { Background } from './src/components/Background';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light, 
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold,
    Montserrat_300Light,
    Montserrat_700Bold,
    Inter_800ExtraBold
  });
  if (!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <Background>
      <StatusBar 
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}

