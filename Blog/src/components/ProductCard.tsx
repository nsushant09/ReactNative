import { Image, View, StyleSheet, Dimensions, Text } from "react-native";
import { Blog } from "../model/model";
import StylesUtils from "../utils/StylesUtils";
const { width, height } = Dimensions.get("window");

type blogProps = {
  blog: Blog;
};
const ProductCard = (props: blogProps) => {
  return (
    <View style={[styles.productCardStyle]}>
      <ProfileWithNameAndDate blog={props.blog}/>
      <ProductImageTitleDescription blog={props.blog} />
    </View>
  );
};

function ProfileWithNameAndDate(blog : blogProps) {
  return (
    <View style={[{ flexDirection: "row" }]}>
      <Image
        style={styles.profileImage}
        source={{
          uri: blog.blog.image,
        }}
      />

      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}>
          {blog.blog.user.username}
        </Text>
        <Text style={{ fontSize: 14, color: "#373737" }}>{blog.blog.date}</Text>
      </View>
    </View>
  );
}

function ProductImageTitleDescription(blog : blogProps) {
  return (
    <View>
      <Image source={{ uri: blog.blog.image }} />
      <Text style={{ fontSize: 24, color: "#000000" }}>{blog.blog.intro}</Text>
      <Text style={{ fontSize: 18, color: "#000000" }}>{blog.blog.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productCardStyle: {
    display: "flex",
    flexDirection: "column",
    width: width,
    padding: 4,
    borderRadius: 8,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
});

export default ProductCard;
