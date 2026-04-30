import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { House, NotebookText, Wallet, Users, Bolt } from "lucide-react-native";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";
import { sizes, spacing } from "../theme/spacing";

interface BottomTabItem {
  name: string;
  icon: (active: boolean) => React.ReactNode;
  label: string;
}

interface BottomTabNavigatorProps {
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

const tabs: BottomTabItem[] = [
  {
    name: "Home",
    icon: (active) => (
      <House
        color={active ? colors.primary.main : colors.neutral.gray}
        size={24}
      />
    ),
    label: "Home",
  },
  {
    name: "Simulados",
    icon: (active) => (
      <NotebookText
        color={active ? colors.primary.main : colors.neutral.gray}
        size={24}
      />
    ),
    label: "Simulados",
  },
  {
    name: "Carteira",
    icon: (active) => (
      <Wallet
        color={active ? colors.primary.main : colors.neutral.gray}
        size={24}
      />
    ),
    label: "Carteira",
  },
  {
    name: "Comunidade",
    icon: (active) => (
      <Users
        color={active ? colors.primary.main : colors.neutral.gray}
        size={24}
      />
    ),
    label: "Comunidade",
  },
  {
    name: "Configuracoes",
    icon: (active) => (
      <Bolt
        color={active ? colors.primary.main : colors.neutral.gray}
        size={24}
      />
    ),
    label: "Config",
  },
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
            {typeof tab.icon(isActive) === "string" ? (
              <Text style={{ fontSize: 24 }}>{tab.icon(isActive)}</Text>
            ) : (
              tab.icon(isActive)
            )}
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
