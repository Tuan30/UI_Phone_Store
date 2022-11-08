import React, { useEffect, useState } from "react";
import {
  View,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { COLORS, IMAGES, MESSAGE } from "../../contains";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";
import { fetchAsyncLogin } from "../../store/slices/auth";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { showToast } from "../../help/showToast";

const LoginScreen = () => {
  const [showPass, setShowPass] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(fetchAsyncLogin(data)).then((res) => {
      if (!res.error) {
        showToast(MESSAGE.login);
        navigation.navigate("Home");
      }
    });
  };

  const handleRighiter =() => {

  }

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewImg}>
          <Image
            style={styles.imgIcon}
            source={IMAGES.avatar}
          />
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
                value={data.password}
                onChangeText={(val) => setData({ ...data, password: val })}
              />
              <TouchableOpacity onPress={handleShowPass} style={styles.icon}>
                <FontAwesome name={!showPass ? "eye" : "eye-slash"} size={18} />
              </TouchableOpacity>
            </View>

            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor={COLORS.black}
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableHighlight>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.textRigiter}>
          <TouchableOpacity>
            <Text style={styles.text}>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRighiter}>
            <Text style={styles.text}>Đăng kí</Text>
          </TouchableOpacity>
        </View>

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
      </View>
    </>
  );
};

export default LoginScreen;
