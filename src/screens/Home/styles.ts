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
    }
});