import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        marginTop:42,
        marginBottom: 35,
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 55,
    },
    container: {
        width:'100%',
        marginHorizontal: 5
    },
    box: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',

    },
    icon:{
        alignSelf: 'center',
        paddingVertical: 15
    },
    titleHeader:{
        color: '#FFFF',
        fontSize: 36,
        fontFamily: theme.fonts.Mtitle700,
        paddingLeft: 45
    },
    saldo:{
        paddingTop: 20,
        paddingLeft: 45

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
        paddingRight: 45,
        paddingTop: 6
    }
});