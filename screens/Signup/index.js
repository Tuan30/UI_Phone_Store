import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
  Image,
  Keyboard,
  TouchableHighlight,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { COLORS, IMAGES, MESSAGE } from "../../contains";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { showToast } from "../../help/showToast";

const SignupScreen = ({ navigation }) => {
  const [showPass, setShowPass] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const login = () => {
    navigation.navigate("Login")
    showToast(MESSAGE.addCartSuccess)
  }

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image style={styles.imgIcon} source={IMAGES.avatar} />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.input}>
            <TextInput
              placeholder="Email..."
              value={data.email}
              onChangeText={(val) => setData({ ...data, email: val })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Mật khẩu..."
              secureTextEntry={showPass}
              value={data.confirmPassword}
              onChangeText={(val) => setData({ ...data, confirmPassword: val })}
            />
            <TouchableOpacity onPress={handleShowPass} style={styles.icon}>
              <FontAwesome name={!showPass ? "eye" : "eye-slash"} size={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Nhập lại mật khẩu..."
              secureTextEntry={showPass}
              value={data.password}
              onChangeText={(val) => setData({ ...data, password: val })}
            />
            <TouchableOpacity onPress={handleShowPass} style={styles.icon}>
              <FontAwesome name={!showPass ? "eye" : "eye-slash"} size={18} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor={COLORS.black}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>

      {Platform.OS === "android" ? 
      <View style={styles.loginApp}>
      <TouchableOpacity style={styles.login}>
        <Text>Đăng nhập bằng Google</Text>
        <Image style={styles.imgIconLogin} source={IMAGES.loginGoogle}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login}>
        <Text>Đăng nhập bằng Facebook</Text>
        <Image style={styles.imgIconLogin} source={IMAGES.loginFacebook}/>
      </TouchableOpacity>
    </View>
      : null}
    </View>
  );
};

export default SignupScreen;
