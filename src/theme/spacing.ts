/**
 * AutoQuest - Sistema de Espaçamento
 * Baseado em escala 8px (Material Design)
 */

export const spacing = {
  // Base spacing unit (8px)
  xs: 4,      // 4px
  sm: 8,      // 8px
  md: 16,     // 16px
  lg: 24,     // 24px
  xl: 32,     // 32px
  xxl: 48,    // 48px
  xxxl: 64,   // 64px
};

// Atalhos para padding/margin
export const spacings = {
  containerHorizontal: spacing.lg,    // 16px
  containerVertical: spacing.lg,      // 16px
  sectionGap: spacing.xl,             // 32px
  elementGap: spacing.md,             // 16px
  tightGap: spacing.sm,               // 8px
};

// Tamanhos de componentes
export const sizes = {
  // Altura de botões (touch-friendly)
  buttonSmall: 40,
  buttonMedium: 48,
  buttonLarge: 56,

  // Altura de inputs
  inputHeight: 48,

  // Ícones
  iconXSmall: 16,
  iconSmall: 24,
  iconMedium: 32,
  iconLarge: 48,
  iconXLarge: 64,

  // Cards
  cardBorderRadius: 12,
  buttonBorderRadius: 24,

  // Tab bar
  tabBarHeight: 60,

  // Header
  headerHeight: 56,
};

// Sombras
export const shadows = {
  subtle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  prominent: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
};
