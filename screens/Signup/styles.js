import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
      resizeMode: 'cover'
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      alignItems: 'center',
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      color: 'grey',
    },
    viewImg:{
      alignItems: "center",
    },
    imgIcon:{
      justifyContent: "center",
      width: 150,
      height: 150,
      borderRadius: 100,
      marginBottom: 20
    },
    input: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      paddingHorizontal: 24,
      paddingVertical: 15,
      backgroundColor: COLORS.white,
      borderRadius: 15,
      marginBottom: 30,
    },
    button: {
      backgroundColor: COLORS.black,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 15,
      borderRadius: 20
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 20,
    },
    icon: {
      position: "absolute",
      right: 15,
      top: 15,
    },
    loginApp:{
      marginTop: 20,
    },
    login:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:COLORS.white,
      marginBottom: 10,
      paddingHorizontal: 30,
      justifyContent: 'space-between',
      borderRadius: 20,
      paddingVertical: 10
    },
    imgIconLogin:{
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 100,
    },
  });
  
  export default styles