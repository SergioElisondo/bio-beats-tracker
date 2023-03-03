import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.biorhythms.biorhythmsapp',
  appName: 'biorhythmsapp',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'https://biorhythms.io/',
    cleartext: true,
  }
};

export default config;
