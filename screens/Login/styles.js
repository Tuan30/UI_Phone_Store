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
  background: {
    flex: 1,
    position: "absolute",
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
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 20,
    backgroundColor: COLORS.white,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});

export default styles;
