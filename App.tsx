import { UserProvider } from "@/context/userContext";
import AppNavigation from "@/navigation/appNavigation";

export default function App() {
  return (
    <UserProvider>
      <AppNavigation></AppNavigation>
    </UserProvider>
  );
}
