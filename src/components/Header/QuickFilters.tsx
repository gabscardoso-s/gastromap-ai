import { ScrollView, Text, TouchableOpacity } from "react-native";

const filters: string[] = ["Culinária", "Ticket", "Pessoas", "Distância"];

export default function QuickFilters() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-4 flex-row px-4"
    >
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index.toString()}
          className="bg-[#F6E8D3] px-4 py-2 rounded-full mr-3"
        >
          <Text className="text-[#7A1F26] font-medium">{filter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
