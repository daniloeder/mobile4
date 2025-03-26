export const COLORS = {
    black: '#000000',
    darkGray: '#121212',
    darkCard: '#1E1E2D',
    darkInput: '#2A2A3A',
    darkBorder: '#333333',
    gold: '#C6B06C',
    goldTransparent: 'rgba(198, 176, 108, 0.1)',
    white: '#FFFFFF',
    lightGray: '#999999',
    green: '#4CAF50',
    red: '#F44336',
    transparentWhite: 'rgba(255, 255, 255, 0.1)',
    transparentBlack: 'rgba(0, 0, 0, 0.5)',
  };
  
  export const TYPOGRAPHY = {
    h1: {
      fontSize: 32,
      fontWeight: '700',
      color: COLORS.white,
    },
    h2: {
      fontSize: 24,
      fontWeight: '700',
      color: COLORS.white,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600',
      color: COLORS.white,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '400',
      color: COLORS.lightGray,
    },
    body: {
      fontSize: 16,
      fontWeight: '400',
      color: COLORS.white,
    },
    label: {
      fontSize: 14,
      fontWeight: '400',
      color: COLORS.lightGray,
    },
    small: {
      fontSize: 12,
      fontWeight: '400',
      color: COLORS.lightGray,
    },
    gold: {
      color: COLORS.gold,
    },
  };
  
  export const SPACING = {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  };
  
  export const BORDER_RADIUS = {
    s: 8,
    m: 16,
    l: 24,
    circle: 9999,
  };
  
  export default {
    COLORS,
    TYPOGRAPHY,
    SPACING,
    BORDER_RADIUS,
  };