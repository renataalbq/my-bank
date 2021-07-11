import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 24,
      marginTop: 15,
      marginBottom: 30,
    },
    title: {
        fontFamily: theme.fonts.Ititle700,
        color: '#FFF',
        fontSize: 24
    },

});