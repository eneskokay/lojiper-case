import ListTrip from "@/pages/listTrip";
import SearchTrip from "@/pages/searchTrip";
import { mainColor } from "@/styles/theme/colors";
import texts from "@/styles/theme/texts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={"searchTrip"}
      screenOptions={{
        headerStyle: { backgroundColor: mainColor },
        headerTitleStyle: [texts.text_400, { color: "white" }],
      }}
    >
      <Stack.Screen
        name="searchTrip"
        component={SearchTrip}
        options={{ title: "Sefer Ara" }}
      />
      <Stack.Screen
        name="listTrip"
        component={ListTrip}
        options={{ title: "Uygun Seferler" }}
      />
    </Stack.Navigator>
  );
}
