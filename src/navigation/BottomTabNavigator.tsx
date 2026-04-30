import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";
import { sizes, spacing } from "../theme/spacing";

interface BottomTabItem {
  name: string;
  icon: string;
  label: string;
}

interface BottomTabNavigatorProps {
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

const tabs: BottomTabItem[] = [
  { name: "Home", icon: "🏠", label: "Home" },
  { name: "Simulados", icon: "📝", label: "Simulados" },
  { name: "Carteira", icon: "🎖️", label: "Carteira" },
  { name: "Comunidade", icon: "👥", label: "Comunidade" },
  { name: "Configuracoes", icon: "⚙️", label: "Config" },
];

export const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({
  activeTab,
  onTabPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.neutral.white,
        borderTopWidth: 1,
        borderTopColor: colors.neutral.light,
        height: sizes.tabBarHeight,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => onTabPress(tab.name)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: spacing.xs,
              flex: 1,
              height: "100%",
              borderTopWidth: 3,
              borderTopColor: isActive ? colors.primary.main : "transparent",
            }}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 24 }}>{tab.icon}</Text>
            <Text
              style={[
                typography.caption as any,
                {
                  color: isActive ? colors.primary.main : colors.neutral.gray,
                  fontSize: 10,
                },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabNavigator;
