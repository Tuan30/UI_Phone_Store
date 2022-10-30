import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  area: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderColor: COLORS.main,
    marginBottom: 40,
  },
  areaText: {
    flexDirection: "row",
    alignItems: "center",
  },
  areaTextName: {
    marginLeft: 25,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
