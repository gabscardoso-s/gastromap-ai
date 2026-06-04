import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Menu } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center gap-4 p-4 bg-[#F6E8D3]">
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        className=""
      >
        <Menu size={24} color="#7A1F26" />
      </TouchableOpacity>
      <Text className="text-xl font-bold text-[#7A1F26]">
        Mapa Gastronômico
      </Text>
    </View>
  );
}
