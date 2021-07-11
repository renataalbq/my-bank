import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Menu } from '../screens/Menu';
import { Perfil } from '../screens/Perfil';
import { AddCard } from '../screens/AddCard';

const {Navigator, Screen} = createStackNavigator();

export function AppRoutes(){
    return(
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle:{backgroundColor:'transparent'}
            }}
        >
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Menu"
                component={Menu}
            />
            <Screen 
                name="Perfil"
                component={Perfil}
            />
            <Screen 
                name="AddCard"
                component={AddCard}
            />

        </Navigator>
    )
}