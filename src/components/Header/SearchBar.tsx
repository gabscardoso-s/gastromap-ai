import { Search } from "lucide-react-native";
import { TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View className="flex-row items-center p-4 gap-4 bg-[#F6E8D3] rounded-full mx-4 mt-4">
      <Search size={24} color="#7A1F26" />
      <TextInput
        placeholder="Onde vamos comer hoje?"
        placeholderTextColor="#7A1F26"
        className="flex-1 text-semibold"
      />
    </View>
  );
}
