import Header from "@/components/Header";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import QuickFilters from "../components/QuickFilters";
import SearchBar from "../components/SearchBar";

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex-1">
            <Header />
    <SafeAreaView className="flex-1">
      <View className="">
        <View className="absolute z-10">
          <Header />
          <SearchBar />
          <QuickFilters />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
      </View>
    </SafeAreaView>
  );
}

