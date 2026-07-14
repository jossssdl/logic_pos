import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mx.einnovacion.swiftsalepos',
  appName: 'LOGIC POS',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    // Loads the live deployed site instead of the bundled `dist/` assets, so JS/React
    // changes go out with a normal `git push` (auto-deploys to the VPS) — no more
    // rebuilding/reinstalling the APK on every device for ordinary code changes. Safe now
    // because native Google Sign-In goes through @capacitor-firebase/authentication (the
    // native SDK, no WebView redirect), so nothing here depends on matching Firebase's
    // authDomain — that's what broke in an earlier attempt (see git history), not this.
    url: 'https://tamalescastillo.com',
  },
  android: {
    buildOptions: {
      releaseType: 'APK',
    },
  },
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ['google.com'],
    },
  },
};

export default config;
