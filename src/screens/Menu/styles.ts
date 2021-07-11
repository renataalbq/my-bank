import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'center',
        paddingTop: 38
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
        marginTop: 25,
        borderTopWidth: 1,
        borderTopColor: theme.colors.line
    },
    navItem:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 40,
    },
    text:{
        width: '100%',
        fontFamily: theme.fonts.Itext600,
        color: "#FFF",
        fontSize: 20
    },
    textBtn:{
        flex:1,
        fontFamily: theme.fonts.Itext300,
        color: "#FFF",
        textAlign: 'center',
        fontSize: 24
    },
    content:{
        borderWidth: 1,
        borderColor: theme.colors.line,
        marginBottom: 30,
        width: 200,
        borderRadius: 5,
        marginHorizontal:100
    },
    signOut:{
        height: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});