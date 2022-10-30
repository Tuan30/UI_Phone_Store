import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  slider: {
    borderRadius: 20,
    width: "100%",
    resizeMode: "cover",
  },

  img: {
    borderRadius: 20,
  },

  text: {
    position: "absolute",
    backgroundColor: COLORS.pink,
    paddingHorizontal: 40,
    paddingVertical: 10,
    bottom: 10,
    borderRadius: 20,
    marginLeft: 125,
  },

  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },
});

export default styles;
