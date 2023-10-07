import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StylesUtils from "../utils/StylesUtils";
import { Blog, User } from "../model/model";
import ProductCard from "../components/ProductCard";

const MainView = () => {
  const sampleUser = new User();
  const sampleBlog = new Blog();

  sampleUser.name = "Sushant Neupane";
  sampleUser.username = "nsushant";
  sampleUser.profilePicture =
    "https://img.freepik.com/vektoren-kostenlos/videokonferenz-fernarbeits-flachbild-laptop-mit-einer-gruppe-von-kollegen-die_88138-548.jpg?w=2000";

  sampleBlog.body =
    "This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.This is the description.";
  sampleBlog.date = "2023-07-08";
  sampleBlog.intro = "This is the title";
  sampleBlog.image =
    "https://img.freepik.com/vektoren-kostenlos/videokonferenz-fernarbeits-flachbild-laptop-mit-einer-gruppe-von-kollegen-die_88138-548.jpg?w=2000";
  sampleBlog.user = sampleUser;
  return (
    <SafeAreaView style={StylesUtils.fullScreenStyle}>
      <ScrollView style={{ padding: 16 }}>
        <ProductCard blog={sampleBlog} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default MainView;
