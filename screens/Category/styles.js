import { StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: COLORS.white,
  },
  aside: {
    flex: 2,
  },
});

export default styles;
