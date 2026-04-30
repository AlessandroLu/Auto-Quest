/**
 * AutoQuest - Paleta de Cores
 * Sistema de Design baseado em Material Design
 * Otimizado para gamificação e acessibilidade
 */

export const colors = {
  // Primárias
  primary: {
    light: '#4CAF50', // Verde claro (siga/acerto)
    main: '#388E3C', // Verde padrão
    dark: '#1B5E20', // Verde escuro
  },

  // Secundárias (Atenção/Alertas)
  secondary: {
    light: '#FFB74D', // Laranja claro
    main: '#FFA726', // Laranja
    dark: '#F57C00', // Laranja escuro
  },

  // Status
  success: '#4CAF50',
  error: '#E53935',
  warning: '#FFB74D',
  info: '#1976D2',

  // Neutros
  neutral: {
    white: '#FFFFFF',
    light: '#F5F5F5',
    lighter: '#EEEEEE',
    gray: '#9E9E9E',
    darkGray: '#616161',
    dark: '#212121',
    black: '#000000',
  },

  // Para gradientes
  gradient: {
    greenStart: '#4CAF50',
    greenEnd: '#388E3C',
    orangeStart: '#FFB74D',
    orangeEnd: '#FFA726',
  },

  // Overlay e transparência
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
  overlaySuccess: 'rgba(76, 175, 80, 0.1)',
  overlayError: 'rgba(229, 57, 53, 0.1)',

  // Badges e gamificação
  badge: {
    gold: '#FFD700',
    silver: '#C0C0C0',
    bronze: '#CD7F32',
    platinum: '#E5E4E2',
  },
};

// Aliases para uso mais fácil
export const ColorSystem = {
  // Backgrounds
  bgPrimary: colors.neutral.white,
  bgSecondary: colors.neutral.light,
  bgTertiary: colors.neutral.lighter,
  bgDark: colors.neutral.dark,

  // Textos
  textPrimary: colors.neutral.dark,
  textSecondary: colors.neutral.darkGray,
  textTertiary: colors.neutral.gray,
  textOnPrimary: colors.neutral.white,
  textOnSuccess: colors.neutral.white,
  textOnError: colors.neutral.white,

  // Ações
  actionPrimary: colors.primary.main,
  actionSuccess: colors.success,
  actionError: colors.error,
  actionWarning: colors.warning,

  // Bordas
  borderLight: colors.neutral.lighter,
  borderDefault: colors.neutral.gray,
  borderDark: colors.neutral.darkGray,
};
