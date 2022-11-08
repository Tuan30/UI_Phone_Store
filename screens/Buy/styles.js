import { StyleSheet } from "react-native";

import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  sum: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    borderTopColor: COLORS.main,
    borderTopWidth: 1,
    paddingTop: 20,
  },
  container: {
    flex: 1
  },
  showProduct: {
    
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  formText:{
    marginHorizontal: 20,
    marginTop: 40, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text:{
    fontSize: 16
  },
  salePrice: {
    color: COLORS.main,
  },
  sumALl: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 40,
    borderTopColor: COLORS.main,
    borderTopWidth: 1,
    paddingTop: 20,
  },
  apply: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    paddingVertical: 20,
  },
  applyButton: {
    backgroundColor: COLORS.main,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 120,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  applyButtonText: {
    color: COLORS.white,
    fontSize: 20,
  },
  viewPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fromTotal: {
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.main
  },
  product: {
    position: "absolute",
    paddingVertical: 20,
  },
});

export default styles;
