import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
    padding: 20,
    paddingTop: 44,
  },
  textInput:{
    fontFamily: 'FilsonPro',
    marginBottom: 5
  },
  caption: {
    fontWeight: 'bold',
    marginTop: 46.76,
    textAlign: 'center',
    fontFamily: 'FilsonPro-Bold',
    color: '#111',
    fontSize: 24,
    lineHeight: 38,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.18);',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  logo: {
    alignSelf: 'center',
    width: '70%',
    height: 80,
    // marginBottom:75
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    width: '33.3%',
    padding: 10,
  },
  text: {
    fontWeight: 'normal',
    fontFamily: 'FilsonPro',
    textAlign: 'center',
    color: '#111',
    fontSize: 14,
  },
  bottomContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
  },
  submitButton: {
    backgroundColor: '#009966',
    paddingVertical:11,
    paddingHorizontal:40,
    margin: 15,
    borderRadius: 10,
    textAlign: 'center',
    height: 47.5,
    marginTop:50,
    // shadowColor: 'rgba(0, 0, 0, 0.4)',
    // shadowOpacity: 0.8,
    // elevation: 6,
    // shadowRadius: 15,
    // shadowOffset: {width: 1, height: 13},
  },
  submitButtonText: {
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight:'600',
    fontSize: 15,
    fontFamily:'FilsonPro-Bold'
  },
  subCaption:{
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'FilsonPro'
  }
});

export default styles;
