import React from 'react';
import { View, Text, Image} from 'react-native';
import { ListDivider } from '../../components/ListDivider';
import { Avatar } from '../../components/Avatar';
import { ListHeader } from '../../components/ListHeader';
import { RectButton} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function Menu() {

    const navigation = useNavigation();
    function handlePerfil(){
        navigation.navigate('Perfil')
    }
    function handleCloseMenu(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.bgMenu}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Avatar urlImg="https://github.com/renataalbq.png" />
                </View>
                <ListHeader title='Olá, Renata' /> 
                <MaterialIcons 
                    name="highlight-off" 
                    color="#FFFF" 
                    size={46}
                    onPress={handleCloseMenu}
                    style={styles.closeIcon}
                />
            </View>
            <View style={styles.container}>

                <TouchableOpacity style={styles.navItem} onPress={handlePerfil}>
                    <Text style={styles.text}>Perfil</Text>
                    <MaterialIcons 
                    name="keyboard-arrow-right" 
                    color="#FFFF" 
                    size={18}
                    />
                </TouchableOpacity>
                <ListDivider />

                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.text}>Cadastrar Cartão</Text>
                    <MaterialIcons 
                    name="keyboard-arrow-right" 
                    color="#FFFF" 
                    size={18}
                    />
                </TouchableOpacity>
                <ListDivider />

                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.text}>Recarga</Text>
                    <MaterialIcons 
                    name="keyboard-arrow-right" 
                    color="#FFFF" 
                    size={18}
                    />
                </TouchableOpacity>
                <ListDivider />

                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.text}>Chave Pix</Text>
                    <MaterialIcons 
                    name="keyboard-arrow-right" 
                    color="#FFFF" 
                    size={18}
                    />
                </TouchableOpacity>
                <ListDivider />
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.text}>Configurações</Text>
                    <MaterialIcons 
                    name="keyboard-arrow-right" 
                    color="#FFFF" 
                    size={18}
                    />
                </TouchableOpacity>
                <ListDivider />
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.text}>Ajuda</Text>
                    <MaterialIcons 
                    name="keyboard-arrow-right" 
                    color="#FFFF" 
                    size={18}
                    />
                </TouchableOpacity>
                <ListDivider />
            </View>
            <View style={styles.content}>
                <RectButton style={styles.signOut} onPress={() => {}}>
                    <Text style={styles.textBtn}>SAIR</Text>        
                </RectButton>    
            </View>

        </View>
    );
}
