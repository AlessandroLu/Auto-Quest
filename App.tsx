import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { HomeScreen, QuizScreen, DigitalWalletScreen } from "./src/screens";
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigator";
import { colors } from "./src/theme/colors";

type TabName =
  | "Home"
  | "Simulados"
  | "Carteira"
  | "Comunidade"
  | "Configuracoes";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>("Home");
  const [navigationStack, setNavigationStack] = useState<TabName[]>(["Home"]);

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName as TabName);
    setNavigationStack([tabName as TabName]);
  };

  const navigation = {
    navigate: (screen: string) => {
      if (screen === "Simulados") {
        setActiveTab("Simulados");
        setNavigationStack(["Simulados"]);
      } else if (screen === "Carteira") {
        setActiveTab("Carteira");
        setNavigationStack(["Carteira"]);
      } else if (screen === "Home") {
        setActiveTab("Home");
        setNavigationStack(["Home"]);
      }
    },
    goBack: () => {
      if (navigationStack.length > 1) {
        const newStack = navigationStack.slice(0, -1);
        setNavigationStack(newStack);
        setActiveTab(newStack[newStack.length - 1]);
      } else {
        setActiveTab("Home");
      }
    },
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "Home":
        return <HomeScreen navigation={navigation} />;
      case "Simulados":
        return <QuizScreen navigation={navigation} />;
      case "Carteira":
        return <DigitalWalletScreen navigation={navigation} />;
      case "Comunidade":
        return <HomeScreen navigation={navigation} />; // Placeholder
      case "Configuracoes":
        return <HomeScreen navigation={navigation} />; // Placeholder
      default:
        return <HomeScreen navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.neutral.white,
      }}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1 }}>{renderScreen()}</View>
      <BottomTabNavigator activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}
