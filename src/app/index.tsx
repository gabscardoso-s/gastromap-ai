import Header from "@/components/Header";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex-1">
            <Header />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

