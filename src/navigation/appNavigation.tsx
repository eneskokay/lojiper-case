import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./authNavigation";
import BookingNavigation from "./bookingNavigation";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"booking"}
      >
        <Stack.Screen name="auth" component={AuthNavigation} />
        <Stack.Screen name="booking" component={BookingNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
