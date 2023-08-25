import { BookingProvider } from "@/context/bookingContext";
import { UserProvider } from "@/context/userContext";
import AppNavigation from "@/navigation/appNavigation";

export default function App() {
  return (
    <UserProvider>
      <BookingProvider>
        <AppNavigation></AppNavigation>
      </BookingProvider>
    </UserProvider>
  );
}
