import React from 'react';
import {
  View,
  ViewStyle,
  Animated,
  Dimensions,
} from 'react-native';
import { colors } from '../theme/colors';
import { sizes, spacing } from '../theme/spacing';

interface ProgressBarProps {
  progress: number; // 0-100
  variant?: 'linear' | 'circular';
  size?: 'small' | 'medium' | 'large';
  theme?: 'success' | 'warning' | 'error' | 'info';
  style?: ViewStyle;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'linear',
  size = 'medium',
  theme = 'success',
  style,
  animated = true,
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  const getThemeColor = () => {
    const themeColors = {
      success: colors.success,
      warning: colors.warning,
      error: colors.error,
      info: colors.info,
    };
    return themeColors[theme];
  };

  const getHeight = () => {
    return size === 'small' ? 4 : size === 'medium' ? 6 : 8;
  };

  if (variant === 'linear') {
    return (
      <View
        style={[
          {
            width: '100%',
            height: getHeight(),
            backgroundColor: colors.neutral.lighter,
            borderRadius: getHeight() / 2,
            overflow: 'hidden',
          },
          style,
        ]}
      >
        <View
          style={{
            height: '100%',
            width: `${clampedProgress}%`,
            backgroundColor: getThemeColor(),
            borderRadius: getHeight() / 2,
          }}
        />
      </View>
    );
  }

  // Circular progress
  const radius = size === 'small' ? 20 : size === 'medium' ? 30 : 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (clampedProgress / 100) * circumference;

  return (
    <View
      style={[
        {
          width: radius * 2 + spacing.md,
          height: radius * 2 + spacing.md,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
    >
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - 4}
          fill="none"
          stroke={colors.neutral.lighter}
          strokeWidth="4"
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - 4}
          fill="none"
          stroke={getThemeColor()}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>
    </View>
  );
};

export default ProgressBar;
