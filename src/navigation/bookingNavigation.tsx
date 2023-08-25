import ListTrips from "@/pages/listTrips";
import SearchTrip from "@/pages/searchTrip";
import TripDetails from "@/pages/tripDetails";
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
        name="listTrips"
        component={ListTrips}
        options={{ title: "Uygun Seferler" }}
      />
      <Stack.Screen
        name="tripDetails"
        component={TripDetails}
        options={{ title: "Sefer Detayları" }}
      />
    </Stack.Navigator>
  );
}
