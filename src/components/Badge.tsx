import React from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { sizing, spacing } from '../theme/spacing';

interface BadgeProps {
  label: string;
  color?: 'gold' | 'silver' | 'bronze' | 'platinum' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'gold',
  size = 'medium',
  style,
}) => {
  const getColorStyle = (): ViewStyle => {
    const colorMap = {
      gold: { backgroundColor: colors.badge.gold, textColor: '#000' },
      silver: { backgroundColor: colors.badge.silver, textColor: '#000' },
      bronze: { backgroundColor: colors.badge.bronze, textColor: '#FFF' },
      platinum: { backgroundColor: colors.badge.platinum, textColor: '#000' },
      success: { backgroundColor: colors.success, textColor: '#FFF' },
      warning: { backgroundColor: colors.warning, textColor: '#000' },
    };
    return { backgroundColor: colorMap[color].backgroundColor };
  };

  const getSize = () => {
    return size === 'small'
      ? { paddingHorizontal: spacing.sm, paddingVertical: 4 }
      : size === 'medium'
      ? { paddingHorizontal: spacing.md, paddingVertical: 8 }
      : { paddingHorizontal: spacing.lg, paddingVertical: 12 };
  };

  return (
    <View
      style={[
        {
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          ...getSize(),
        },
        getColorStyle(),
        style,
      ]}
    >
      <Text
        style={{
          ...typography.label,
          color: colors.neutral.white,
          fontSize: size === 'small' ? 12 : 14,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default Badge;
