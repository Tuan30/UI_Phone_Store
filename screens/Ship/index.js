import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import styles from "./styles";
import { InputStyle } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncGetMe, fetchAsyncUpdate } from "../../store/slices/user";

const ShipScreen = () => {
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
          address: respone.payload.address,
        });
      }
    });
  }, [isUpdate]);

  const handleUpdate = () => {
    dispatch(fetchAsyncUpdate(objInfo)).then((respone) => {
      showToast(MESSAGE.update);
      if (!respone) {
        setIsUpdate(!isUpdate);
      }
    });
  };
  const [objInfo, setObjInfo] = useState({
    address: "",
  });

  return (
    <View style={styles.container}>
      <View>
        <MapView style={styles.map} />
      </View>
      <View style={styles.title}>
        <View style={styles.view}>
          <View style={styles.formInput}>
            <InputStyle
              name={"Địa chỉ của bạn là"}
              value={objInfo.address}
              onChange={(value) => setObjInfo({ ...objInfo, address: value })}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShipScreen;
