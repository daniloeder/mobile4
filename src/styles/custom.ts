// Custom styles for React Native application

// Colors
export const COLORS = {
  background: '#000000',
  cardBg: '#1A1A1A',
  darkCard: '#17171F',
  darkSecondary: '#1E1E2D',
  gold: '#C6B06C',
  goldTransparent: 'rgba(198, 176, 108, 0.1)',
  text: '#FFFFFF',
  textSecondary: '#999999',
  success: '#4CAF50',
  danger: '#F44336',
  chartBg: '#232336',
  border: 'rgba(255, 255, 255, 0.1)',
};

// Spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border Radius
export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  circle: 999,
};

// Effects
export const EFFECTS = {
  shadowLight: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadowMedium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
  },
};

// Typography
export const TYPOGRAPHY = {
  titleLarge: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
  body: {
    fontSize: 16,
    color: COLORS.text,
  },
  caption: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  small: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
};
