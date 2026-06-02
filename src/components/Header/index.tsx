import React from "react";
import { View } from "react-native";
import QuickFilters from "./QuickFilters";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <View className="">
      <TopBar />
      <SearchBar />
      <QuickFilters />
    </View>
  );
}
