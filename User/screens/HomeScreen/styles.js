import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    color: '#4a4a4a',
    fontFamily:'FilsonPro'
  },
  roundButton: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
  },
  goButton: {
    position: 'absolute',
    backgroundColor: '#009966',
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    bottom: 110,
    left: Dimensions.get('window').width / 2 - 37,
  },
  goText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    fontFamily:'FilsonPro'
  },

  balanceButton: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    width: 150,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    top: 40,
    left: Dimensions.get('window').width / 2 - 70,
  },
  balanceText: {
    fontSize: 24,
    color: 'white',
    fontFamily:"FilsonPro-Bold",
    // marginTop:70
  }
});

export default styles;
