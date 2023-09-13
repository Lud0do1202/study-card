import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'be.Lud0do1202.study_card',
  appName: 'Study Card',
  webDir: 'dist/study-card',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      clientId: '329007050181-2th5oo7j1vt0mub3pgk6fqcb8ftp0d8n.apps.googleusercontent.com',
    },
  },
};

export default config;
