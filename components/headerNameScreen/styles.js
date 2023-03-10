import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    backgroundColor: COLORS.white,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    color: COLORS.main,
    width: "60%",
  },
  bottom: {
    flex: 1,
    paddingHorizontal: 25,
  },
});

export default styles;
