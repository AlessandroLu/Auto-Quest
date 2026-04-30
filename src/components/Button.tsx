import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography, fontFamily } from '../theme/typography';
import { sizes, spacing, shadows } from '../theme/spacing';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  style,
  textStyle,
}) => {
  const getButtonStyles = () => {
    const baseStyle: ViewStyle = {
      ...shadows.medium,
      borderRadius: sizes.buttonBorderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: spacing.sm,
    };

    const sizeStyle: ViewStyle = {
      small: { height: sizes.buttonSmall, paddingHorizontal: spacing.md },
      medium: { height: sizes.buttonMedium, paddingHorizontal: spacing.lg },
      large: { height: sizes.buttonLarge, paddingHorizontal: spacing.xl },
    };

    const variantStyle: ViewStyle = {
      primary: {
        backgroundColor: colors.primary.main,
      },
      secondary: {
        backgroundColor: colors.secondary.main,
      },
      success: {
        backgroundColor: colors.success,
      },
      error: {
        backgroundColor: colors.error,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primary.main,
      },
    };

    return {
      ...baseStyle,
      ...sizeStyle[size],
      ...variantStyle[variant],
      opacity: disabled ? 0.5 : 1,
    };
  };

  const getTextStyles = (): TextStyle => {
    const textColor =
      variant === 'outline' ? colors.primary.main : colors.textOnPrimary;

    return {
      ...typography.button,
      color: textColor,
      textAlign: 'center',
    };
  };

  return (
    <TouchableOpacity
      style={[getButtonStyles(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {icon}
      <Text style={[getTextStyles(), textStyle]}>
        {loading ? 'Carregando...' : title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
