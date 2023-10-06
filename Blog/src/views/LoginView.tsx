import {
  TextInput,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import StylesUtils from "../utils/StylesUtils";

const LoginView = () => {

  const [emailInput, onEmailInputChange] = React.useState("");
  const [passwordInput, onPasswordInputChange] = React.useState("");
  
  const onLoginPress = () => {
    if (emailInput.length == 0 && passwordInput.length == 0) {
      Alert.alert("Invalid details");
      return;
    }

    Alert.alert(
      "The email is : " + emailInput + " and the password is " + passwordInput
    );
  };
  return (
    <SafeAreaView
      style={[StylesUtils.fullScreenStyle, { justifyContent: "flex-end" }]}
    >
      <View style={{ marginBottom: 32 }}>
        <TextInput
          onChangeText={onEmailInputChange}
          value={emailInput}
          placeholder="Email"
          style={StylesUtils.textInputStyle}
        />

        <TextInput
          onChangeText={onPasswordInputChange}
          value={passwordInput}
          secureTextEntry={true}
          placeholder="Password"
          style={StylesUtils.textInputStyle}
        />

        <Pressable style={StylesUtils.button} onPress={onLoginPress}>
          <Text style={StylesUtils.text}>Log In</Text>
        </Pressable>

        <View
          style={[
            styles.rowFlex,
            StylesUtils.defaultMargin,
            StylesUtils.centerContent,
          ]}
        >
          <Text>Don't have an account ? </Text>
          <Text
            style={styles.primaryBoldText}
            onPress={() => {}}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rowFlex: {
    display: "flex",
    flexDirection: "row",
  },
  columnFlex: {
    display: "flex",
    flexDirection: "column",
  },
  primaryBoldText: {
    fontWeight: "bold",
    color: "#006d77",
  },
});

export default LoginView;
