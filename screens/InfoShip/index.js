import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";
import { InputStyle } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGetMe, fetchAsyncUpdate } from "../../store/slices/user";
import { showToast } from "../../help/showToast";
import { MESSAGE } from "../../contains";

const InfoShipScreen = () => {
  const isLogin = useSelector((state) => state.Auth.isLogin);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAsyncGetMe()).then((respone) => {
      if (!respone.error) {
        setLoading(false);
        setObjInfo({
          ...objInfo,
          name: respone.payload.name,
          email: respone.payload.email,
          phone: respone.payload.phone,
          address: respone.payload.address,
        });
      }
    });
  }, [isUpdate]);

  const [objInfo, setObjInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleUpdate = () => {
    dispatch(fetchAsyncUpdate(objInfo)).then((respone) => {
      showToast(MESSAGE.update);
      if (!respone) {
        setIsUpdate(!isUpdate);
      }
    });
  };
  return (
    <>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
        <View style={styles.formInput}>
          <InputStyle
            name={"Họ tên"}
            value={objInfo.name}
            onChange={(value) => setObjInfo({ ...objInfo, name: value })}
          />
        </View>
        <View style={styles.formInput}>
          <InputStyle
            name={"Email"}
            value={objInfo.email}
            onChange={(value) => setObjInfo({ ...objInfo, email: value })}
          />
        </View>
        <View style={styles.formInput}>
          <InputStyle
            name={"Số điện thoại"}
            value={objInfo.phone}
            onChange={(value) => setObjInfo({ ...objInfo, phone: value })}
          />
        </View>
        <View style={styles.formInput}>
          <InputStyle
            name={"Địa chỉ"}
            value={objInfo.address}
            onChange={(value) => setObjInfo({ ...objInfo, address: value })}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Cập nhật thông tin</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </>
  );
};

export default InfoShipScreen;
