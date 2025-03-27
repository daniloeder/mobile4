
// This file serves as a polyfill for React Native features in web environment
import 'react-native-gesture-handler';

// Define a custom type for immediate that doesn't require _onImmediate
interface CustomImmediate {
  _cleared?: boolean;
}

type TimeoutId = ReturnType<typeof setTimeout>;

// Required for React Navigation
// @ts-ignore - We're intentionally setting global.setImmediate and global.clearImmediate
global.setImmediate = ((callback: Function, ...args: any[]) => 
  setTimeout(() => callback(...args), 0)) as any;

// @ts-ignore - We're intentionally setting global.setImmediate and global.clearImmediate
global.clearImmediate = ((id: TimeoutId) => clearTimeout(id)) as any;

// Add any additional polyfills that might be needed here
