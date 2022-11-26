import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import { CheckLogin } from "../../common";

const SupportScreen = ({ navigation }) => {
  const isLogin = useSelector((state) => state.Auth.isLogin);

  const showSupport = () => {
    navigation.navigate("ChatScreen");
  };

  return (
    <>
      {isLogin ? (
        <View style={styles.container}>
          <View style={styles.boxTitle}>
            <Text style={styles.text}>
              Khi bạn cần hỗ trợ gửi thông tin tại đây
            </Text>
            <Text style={styles.title}>
              Bạn cần hỗ trợ trong quá trình mua hàng hay gặp vấn đề về giao
              hàng? Hãy liên hệ với đội ngũ chăm sóc khách hàng của{" "}
              <Text style={styles.text}> T - H Store</Text> nha. Chúng tôi sẽ hỗ
              trợ bạn sớm nhất
            </Text>
          </View>

          <TouchableOpacity style={styles.buttom} onPress={() => showSupport()}>
            <View style={styles.boxButtom}>
              <Text style={styles.textButtom}>Bắt đầu</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <CheckLogin />
      )}
    </>
  );
};

export default SupportScreen;
