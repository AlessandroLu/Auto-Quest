import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { colors, ColorSystem } from "../theme/colors";
import { sizes, spacing, shadows } from "../theme/spacing";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "filled" | "outlined";
  onPress?: () => void;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "elevated",
  onPress,
  style,
}) => {
  const getCardStyles = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: sizes.cardBorderRadius,
      padding: spacing.lg,
      backgroundColor: colors.neutral.white,
    };

    const variantStyles = {
      default: {
        ...baseStyle,
        backgroundColor: colors.neutral.light,
      },
      elevated: {
        ...baseStyle,
        ...shadows.medium,
      },
      filled: {
        ...baseStyle,
        backgroundColor: colors.neutral.light,
      },
      outlined: {
        ...baseStyle,
        borderWidth: 1,
        borderColor: ColorSystem.borderLight,
      },
    };

    return {
      ...variantStyles[variant],
    };
  };

  return <View style={[getCardStyles(), style]}>{children}</View>;
};

export default Card;
