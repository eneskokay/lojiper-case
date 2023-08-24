import Login from "@/pages/login";
import Register from "@/pages/register";
import { mainColor } from "@/styles/theme/colors";
import texts from "@/styles/theme/texts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={"login"}
      screenOptions={{
        headerStyle: { backgroundColor: mainColor },
        headerTitleStyle: [texts.text_400, { color: "white" }],
      }}
    >
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          title: "Kayıt Ol",
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "Giriş Yap",
        }}
      />
    </Stack.Navigator>
  );
}
