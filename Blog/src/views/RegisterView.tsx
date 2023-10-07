import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { AppRouteNavigatorParamList } from "../utils/types";
import StylesUtils from "../utils/StylesUtils";

const RegisterView = () => {
  const route: RouteProp<AppRouteNavigatorParamList> = useRoute();
  const navigation: NavigationProp<AppRouteNavigatorParamList> =
    useNavigation();

  const [emailInput, onEmailInputChange] = useState("");
  const [phoneInput, onPhoneInputChange] = useState("");
  const [usernameInput, onUsernameInputChange] = useState("");
  const [passwordInput, onPasswordInputChange] = useState("");
  const [confirmPasswordInput, onConfirmPasswordInputChange] = useState("");

  function onRegisterPress() {}

  return (
    <SafeAreaView>
      <ScrollView style={[StylesUtils.fullScreenStyle, { padding: 16 }]}>
        <TextInput
          onChangeText={onEmailInputChange}
          value={emailInput}
          placeholder="Email"
          style={StylesUtils.textInputStyle}
        />
        <TextInput
          onChangeText={onPhoneInputChange}
          value={phoneInput}
          placeholder="Phone"
          style={StylesUtils.textInputStyle}
        />
        <TextInput
          onChangeText={onUsernameInputChange}
          value={usernameInput}
          placeholder="Username"
          style={StylesUtils.textInputStyle}
        />
        <TextInput
          onChangeText={onPasswordInputChange}
          value={passwordInput}
          placeholder="Password"
          secureTextEntry={true}
          style={StylesUtils.textInputStyle}
        />
        <TextInput
          onChangeText={onConfirmPasswordInputChange}
          value={confirmPasswordInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={StylesUtils.textInputStyle}
        />

        <Pressable style={StylesUtils.button} onPress={onRegisterPress}>
          <Text style={StylesUtils.text}>Sign Up</Text>
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
            onPress={() => navigation.goBack()}
          >
            Log In
          </Text>
        </View>
      </ScrollView>
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

export default RegisterView;
