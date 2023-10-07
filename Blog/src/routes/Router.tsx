import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import { AppRouteNavigatorParamList } from "../utils/types";
import MainView from "../views/MainView";

const AppStack = createNativeStackNavigator<AppRouteNavigatorParamList>();
const AppRouter = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
       screenOptions={{headerShown: false}}
       initialRouteName="Main"
      >
        <AppStack.Screen name="Login" component={LoginView}/>
        <AppStack.Screen name="Register" component={RegisterView} />
        <AppStack.Screen name="Main" component={MainView} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
