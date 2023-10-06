import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const StylesUtils = StyleSheet.create({
  defaultMargin: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenStyle: {
    width: width,
    height: height,
  },

  textInputStyle: {
    height: 48,
    padding: 8,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 8,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#006d77",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default StylesUtils;
