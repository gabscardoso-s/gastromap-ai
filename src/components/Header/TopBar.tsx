import { Menu } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function TopBar() {
  return (
    <View className="flex-row items-center p-4 gap-4 bg-[#F6E8D3] w-screen">
      <TouchableOpacity>
        <Menu size={24} color="#7A1F26" />
      </TouchableOpacity>

      <Text className="text-2xl font-bold text-[#7A1F26]">
        Mapa Gastronômico
      </Text>
    </View>
  );
}
