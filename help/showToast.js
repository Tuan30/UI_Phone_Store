import Toast from "react-native-root-toast";
import { COLORS } from "../contains";

export function showToast(message) {
  return Toast.show(message, {
    position: 50,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: COLORS.main,
  });
}
