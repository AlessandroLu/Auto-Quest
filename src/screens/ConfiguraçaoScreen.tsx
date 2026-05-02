import React from "react";
import { View, Text, TextStyle } from "react-native";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

export const ConfiguraçaoScreen: React.FC<any> = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: colors.neutral.white,
      }}
    >
      <Text
        style={
          {
            ...typography.h3,
            color: colors.neutral.darkGray,
            textAlign: "center",
          } as TextStyle
        }
      >
        Configurações
      </Text>
    </View>
  );
};

export default ConfiguraçaoScreen;
