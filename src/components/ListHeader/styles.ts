import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 24,
      marginTop: 15,
      marginBottom: 15,
    },
    title: {
        fontFamily: theme.fonts.Mtitle700,
        color: '#FFF',
        fontSize: 22
    },

});