import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  containerBox: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    marginRight: 20,
    alignItems: "center",
  },
  title: {
    marginTop: 10,
  },
  boxCategory: {
    width: 80,
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  titleCategory: {
    alignItems: "center",
    marginTop: 6,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Allura_400Regular",
  },
  imgItem: {
    width: "80%",
    height: "80%",
    borderRadius: 15,
    resizeMode: "contain",
  },
});

export default styles;
