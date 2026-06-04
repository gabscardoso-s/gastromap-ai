import { Drawer } from "expo-router/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Home" }} />
      </Drawer>
    </SafeAreaProvider>
  );
}
