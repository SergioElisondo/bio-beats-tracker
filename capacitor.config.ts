import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.biobeatstracker.biobeatstracker',
  appName: 'biobeatstracker',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'https://biobeatstracker.io/',
    cleartext: true,
  }
};

export default config;
