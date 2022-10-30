import { BackHandler, StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.white,
  },

  boxTitle: {
    alignItems: "center",
    paddingHorizontal: 20,
  },

  text: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },

  title: {
    fontSize: 18,
    lineHeight: 24,
  },

  buttom: {
    alignItems: "center",
    marginTop: 40,
  },

  boxButtom: {
    backgroundColor: COLORS.pink,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },

  textButtom: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export default styles;
