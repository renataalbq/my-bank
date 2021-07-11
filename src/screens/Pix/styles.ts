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
        paddingVertical: 22
    },
    image:{
        width: 100,
        height: 100,
        
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
    text:{
        width: '100%',
        fontFamily: theme.fonts.Mtitle700,
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 35,
        marginBottom: 16,
        paddingTop: 10
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

})