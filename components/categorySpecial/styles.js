import { StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../../contains";

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  titleText: {
    fontFamily: "Allura_400Regular",
    fontSize: 25,
  },
  title: {
    marginBottom: 10,
  },
  box: {
    flexDirection: "row",
    marginRight: 25,
    borderRadius: 15,
    width: 230,
  },
  boxCategory: {
    width: 110,
    height: 110,
    borderRadius: 15,
  },
  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "contain",
  },
  info: {
    marginLeft: 15,
    justifyContent: "space-around",
    maxWidth: 120,
  },
  infoName: {
    fontWeight: "bold",
  },
  infoPrice: {
    fontWeight: "bold",
    color: "red",
  },
});

export default styles;
