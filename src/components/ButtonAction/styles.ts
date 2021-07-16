import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 130,
        height: 130,
        backgroundColor: theme.colors.button,
        borderRadius: 8,
        margin: 25,
        padding: 8,
    },
    title: {
        color: '#FFFF',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.Itext600
    },
});