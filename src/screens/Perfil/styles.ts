import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        paddingVertical: 25
    },
    title:{
        fontFamily: theme.fonts.Itext600,
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center',
        paddingVertical: 23
    },
    textFoto:{
        fontFamily: theme.fonts.Itext300,
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
        paddingVertical: 23
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10
    }
})