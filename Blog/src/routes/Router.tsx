import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";

const AppRouter = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Login"
       screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="LoginView" component={LoginView} />
        <Stack.Screen name="Register" component={RegisterView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
