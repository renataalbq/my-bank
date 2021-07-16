import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    textBtn:{
        flex:1,
        fontFamily: theme.fonts.Itext300,
        color: "#FFF",
        textAlign: 'center',
        fontSize: 24
    },
    boxBtn:{
        borderWidth: 1,
        borderColor: theme.colors.line,
        width: 300,
        height: 100,
        borderRadius: 5,
        marginTop: 50,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    cadastrarBtn:{
        height: 56,
        borderRadius: 5,
    }
})