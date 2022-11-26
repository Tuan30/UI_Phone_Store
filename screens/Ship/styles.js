import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  title: {
    position: "absolute",
    height: "30%",
    bottom: -50,
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: COLORS.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  view: {
    width: "100%",
    marginTop: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.pink,
    marginTop: 20,
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  text: {
    color: COLORS.white,
  },
});

export default styles;
