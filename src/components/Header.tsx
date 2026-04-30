import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { sizes, spacing, shadows } from '../theme/spacing';

interface HeaderProps {
  title: string;
  userName?: string;
  userAvatar?: string;
  coins?: number;
  streak?: number;
  onProfilePress?: () => void;
  onSettingsPress?: () => void;
  style?: ViewStyle;
  showFireIcon?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  userName,
  userAvatar,
  coins = 0,
  streak = 0,
  onProfilePress,
  onSettingsPress,
  style,
  showFireIcon = true,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.primary.main,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.md,
          paddingTop: spacing.xl,
          ...shadows.medium,
        },
        style,
      ]}
    >
      {/* Saudação e Perfil */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: spacing.md,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              ...typography.h3,
              color: colors.neutral.white,
              marginBottom: 4,
            }}
          >
            Olá, {userName || 'Motorista'}! 👋
          </Text>
          <Text
            style={{
              ...typography.body2,
              color: colors.neutral.light,
            }}
          >
            {title}
          </Text>
        </View>

        {/* Avatar */}
        <TouchableOpacity
          onPress={onProfilePress}
          style={{
            marginLeft: spacing.md,
          }}
        >
          <View
            style={{
              width: sizes.iconLarge,
              height: sizes.iconLarge,
              borderRadius: sizes.iconLarge / 2,
              backgroundColor: colors.neutral.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 3,
              borderColor: colors.secondary.main,
              ...shadows.subtle,
            }}
          >
            <Text style={{ fontSize: 28 }}>👤</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Streak e Moedas */}
      <View
        style={{
          flexDirection: 'row',
          gap: spacing.md,
          paddingTop: spacing.md,
          borderTopWidth: 1,
          borderTopColor: 'rgba(255,255,255,0.2)',
        }}
      >
        {/* Streak */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: spacing.sm,
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: spacing.sm,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>🔥</Text>
          <View>
            <Text
              style={{
                ...typography.caption,
                color: colors.neutral.light,
              }}
            >
              Streak
            </Text>
            <Text
              style={{
                ...typography.label,
                color: colors.neutral.white,
              }}
            >
              {streak} dias
            </Text>
          </View>
        </View>

        {/* Moedas */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: spacing.sm,
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: spacing.sm,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>🪙</Text>
          <View>
            <Text
              style={{
                ...typography.caption,
                color: colors.neutral.light,
              }}
            >
              Moedas
            </Text>
            <Text
              style={{
                ...typography.label,
                color: colors.neutral.white,
              }}
            >
              {coins}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
