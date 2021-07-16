import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        paddingVertical: 25
    },

    image:{
        width: 100,
        height: 100,
        
    },
    title:{
        width: '100%',
        fontFamily: theme.fonts.Mtitle700,
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 35,
        marginBottom: 16,
        paddingTop: 10
    },
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon:{
        alignSelf: 'center',
        paddingVertical: 15
    },
    content:{
        alignItems: 'center'
    },
    infos:{
        paddingTop: 24
    },
    lista:{
        flexDirection: 'row',
        paddingBottom: 5,
        paddingLeft: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    button:{
        paddingBottom: 15,
    },
    text:{
        width: '100%',
        fontFamily: theme.fonts.Ititle700,
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 15,
    },
    textModal:{
        width: '100%',
        fontFamily: theme.fonts.Ititle700,
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
        marginTop: 50,
    },
    overlay:{
        flex: 1,
        backgroundColor: theme.colors.overlay
    },
    modal:{
        flex: 1,
        marginTop: 100
    },
    bar:{
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: '#E6E6E6',
        alignSelf: 'center',
        marginTop: 13,
    },
    closeIcon:{
        position: 'absolute',
        right: 15,
    },

})