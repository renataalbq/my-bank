import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginTop: 5,
    },
    title:{
        fontFamily: theme.fonts.Itext600,
        fontSize: 20,
        color: '#FFF',
    },
})