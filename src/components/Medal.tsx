import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { sizes, spacing, shadows } from '../theme/spacing';

interface MedalProps {
  title: string;
  emoji: string;
  medalColor?: 'gold' | 'silver' | 'bronze' | 'platinum';
  isUnlocked?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Medal: React.FC<MedalProps> = ({
  title,
  emoji,
  medalColor = 'gold',
  isUnlocked = true,
  onPress,
  style,
}) => {
  const getMedalStyle = () => {
    const medalStyle = {
      backgroundColor: '?',
      glowColor: '?',
    };

    switch (medalColor) {
      case 'gold':
        return {
          backgroundColor: colors.badge.gold,
          glowColor: 'rgba(255, 215, 0, 0.3)',
        };
      case 'silver':
        return {
          backgroundColor: colors.badge.silver,
          glowColor: 'rgba(192, 192, 192, 0.3)',
        };
      case 'bronze':
        return {
          backgroundColor: colors.badge.bronze,
          glowColor: 'rgba(205, 127, 50, 0.3)',
        };
      case 'platinum':
        return {
          backgroundColor: colors.badge.platinum,
          glowColor: 'rgba(229, 228, 226, 0.3)',
        };
      default:
        return {
          backgroundColor: colors.badge.gold,
          glowColor: 'rgba(255, 215, 0, 0.3)',
        };
    }
  };

  const medalStyle = getMedalStyle();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          alignItems: 'center',
          gap: spacing.sm,
          opacity: isUnlocked ? 1 : 0.4,
        },
        style,
      ]}
      activeOpacity={isUnlocked ? 0.8 : 1}
      disabled={!isUnlocked}
    >
      {/* Glow effect */}
      <View
        style={{
          position: 'absolute',
          top: -16,
          left: -16,
          right: -16,
          bottom: -16,
          borderRadius: 80,
          backgroundColor: medalStyle.glowColor,
        }}
      />

      {/* Medal circle */}
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: medalStyle.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          ...shadows.prominent,
          borderWidth: 2,
          borderColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}
      >
        <Text style={{ fontSize: 40 }}>{emoji}</Text>

        {!isUnlocked && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 40,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 32 }}>🔒</Text>
          </View>
        )}
      </View>

      {/* Title */}
      <Text
        style={{
          ...typography.caption,
          color: colors.textPrimary,
          textAlign: 'center',
          width: 80,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Medal;
