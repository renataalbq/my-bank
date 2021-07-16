import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    imageBg:{
        justifyContent:'center', 
        width: '100%',
        height: 300,
        marginTop: 35
    },
    blur:{
        width:350,
        height:200,
        alignSelf:'center',
        borderRadius:20,
    },
    textName:{
        marginLeft: 18,
        color:'#fff',
        marginTop:10,
        fontSize:22
    },
    cardNumber:{
        textAlign:'center',
        color:'#fff',
        marginTop:30,
        fontSize:24
    },
    info:{
        flexDirection:'row',
        marginLeft: 8
    },
    validText:{
        marginTop:22,
        color:'#fff',
        fontSize:18,
    },
    textCvv:{
        marginTop:15,
        color:'#fff',
        fontSize:18,   
        marginLeft: 38
    },
    content:{
        flexDirection:'row',
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'space-between',
    },
    date:{
        color:'#fff',
        fontSize:18
    },
    cvv:{
        textAlign:'center',
        color:'#fff',
        fontSize:18
    },
    input:{
        width: 370,
        height: 48,
        backgroundColor: '#FFF',
        color: theme.colors.forms,
        borderRadius: 8,
        fontSize: 18,
        marginHorizontal:10,
        marginTop: 15,
        paddingLeft: 10
    },
    smallInput:{
        width: 48,
        height: 48,
        backgroundColor: '#FFF',
        color: theme.colors.forms,
        borderRadius: 8,
        fontSize: 14,
        marginHorizontal:4,
        textAlign: 'center',
        marginTop: 15
    },
    mediumInput:{
        width: 100,
        height: 48,
        backgroundColor: '#FFF',
        color: theme.colors.forms,
        borderRadius: 8,
        fontSize: 13,
        marginHorizontal:4,
        textAlign: 'center',
        marginTop: 15
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
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
        width: 200,
        borderRadius: 5,
        marginHorizontal:100,
        marginTop: 25
    },
    cadastrarBtn:{
        height: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})