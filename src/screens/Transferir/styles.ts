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
    container:{
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical:20,
        marginVertical: 30,
        borderTopWidth: 1,
        borderTopColor: theme.colors.line,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.line,

    },

    item:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    text:{
        width: '100%',
        fontFamily: theme.fonts.Itext600,
        fontSize: 20,
        color: '#FFF',
        alignItems: 'center',
        
    },
    contatos:{
        paddingTop: 24
    },
    lista:{
        flexDirection: 'row',
        paddingBottom: 5,
        paddingLeft: 15,
        alignItems: 'center',
    
       
    },
    subtitle:{
        fontFamily: theme.fonts.Itext300,
        fontSize: 14,
        color: '#FFF',
        alignItems: 'center',
    },
    textName:{
        fontFamily: theme.fonts.Itext600,
        fontSize: 20,
        color: '#FFF',
    },
    infos:{
        paddingLeft: 10
      
    },
    listaContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    }
    
})