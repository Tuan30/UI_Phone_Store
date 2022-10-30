import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  img: {
    height: 400,
    width: 400,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.red,
  },
});

export default styles;
