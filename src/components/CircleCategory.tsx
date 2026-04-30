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

interface CircleCategoryProps {
  title: string;
  emoji: string;
  progress: number; // 0-100
  isLocked?: boolean;
  isCompleted?: boolean;
  onPress?: () => void;
  color?: string;
  style?: ViewStyle;
}

export const CircleCategory: React.FC<CircleCategoryProps> = ({
  title,
  emoji,
  progress,
  isLocked = false,
  isCompleted = false,
  onPress,
  color = colors.primary.main,
  style,
}) => {
  const categorySize = 100;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLocked}
      style={[
        {
          alignItems: 'center',
          gap: spacing.sm,
          opacity: isLocked ? 0.6 : 1,
        },
        style,
      ]}
      activeOpacity={0.8}
    >
      {/* Círculo com progresso */}
      <View
        style={{
          width: categorySize,
          height: categorySize,
          borderRadius: categorySize / 2,
          backgroundColor: colors.neutral.lighter,
          alignItems: 'center',
          justifyContent: 'center',
          ...shadows.subtle,
          borderWidth: 3,
          borderColor: color,
          overflow: 'hidden',
        }}
      >
        {/* Barra de progresso circular (simulada com View) */}
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: 4,
            backgroundColor: colors.primary.main,
            bottom: 0,
            width: `${progress}%`,
          }}
        />

        {/* Conteúdo central */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 32 }}>{emoji}</Text>

          {isCompleted && (
            <View
              style={{
                position: 'absolute',
                top: -8,
                right: -8,
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: colors.success,
                alignItems: 'center',
                justifyContent: 'center',
                ...shadows.subtle,
              }}
            >
              <Text style={{ fontSize: 18 }}>⭐</Text>
            </View>
          )}

          {isLocked && (
            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: categorySize / 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 28 }}>🔒</Text>
            </View>
          )}
        </View>
      </View>

      {/* Título */}
      <Text
        style={{
          ...typography.label,
          color: colors.textPrimary,
          textAlign: 'center',
          width: categorySize,
          numberOfLines: 2,
        }}
      >
        {title}
      </Text>

      {/* Progresso percentual */}
      <Text
        style={{
          ...typography.caption,
          color: colors.textSecondary,
        }}
      >
        {progress}%
      </Text>
    </TouchableOpacity>
  );
};

export default CircleCategory;
