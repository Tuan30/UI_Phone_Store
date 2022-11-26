import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    flex: 1,
    resizeMode: "cover",
  },
  boximg: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
  },
  viewImg:{
    position: 'relative',
    alignItems: "center",
  },
  imgIcon:{
    justifyContent: "center",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20
  },

  textRigiter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  background: {
    flex: 1,
    position: "absolute",
  },
  text:{
    fontSize: 16
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
  ImgNoen:{
    position : "absolute",
    height: 160,
    width: 160,
    bottom: 110,
    resizeMode: 'cover',
    left: 114
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

export default styles;
