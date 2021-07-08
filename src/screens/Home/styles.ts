import { Inter_100Thin } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        marginTop:40,
        marginBottom: 35,
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 75,
    },
    container: {
        width:'100%',
    },
    box: {
        flexDirection: 'row',
    },
    icon:{
        alignItems: 'center',
        paddingVertical: 15
    },
    titleHeader:{
        color: '#FFFF',
        fontSize: 36,
        fontFamily: theme.fonts.Mtitle700,
    },
    saldo:{
        paddingTop: 20,
        paddingLeft: 35

    },
    subtitle:{
        color: '#FFFF',
        fontSize: 20,
        fontFamily: theme.fonts.Mtext300,
    },
    text:{
        color: '#FFFF',
        fontSize: 28,
        fontFamily: theme.fonts.Ititle700,
    },
    infoHeader:{
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',

    },
    viewIcon:{
        paddingRight: 35,
        paddingTop: 6
    },
    item:{
        paddingHorizontal: 24,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        color: '#FFFF',
        fontSize: 15,
        fontFamily: theme.fonts.Itext600,
    },
    value:{
        color: '#FFFF',
        fontSize: 13,
        fontFamily: theme.fonts.Itext600,
    },
    desc:{
        color: '#FFFF',
        fontSize: 13,
        fontFamily: theme.fonts.Itext400,
        paddingBottom: 10,
    },
    date:{
        color: '#FFFF',
        fontSize: 11,
        fontFamily: theme.fonts.Itext400,
        paddingBottom: 10,
    }
});