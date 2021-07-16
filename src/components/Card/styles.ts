import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    paddingBottom:10
  },
  item:{
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title:{
      color: '#FFFF',
      fontSize: 15,
      fontFamily: theme.fonts.Itext600,
  },
  value:{
      color: '#FFFF',
      fontSize: 15,
      fontFamily: theme.fonts.Itext600,
  },
  desc:{
      color: '#FFFF',
      fontSize: 13,
      fontFamily: theme.fonts.Itext400,
      paddingBottom: 10,
  },
  date:{
      color: '#FFFF',
      fontSize: 13,
      fontFamily: theme.fonts.Itext400,
      paddingBottom: 10,
  },

});