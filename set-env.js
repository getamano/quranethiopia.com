const fs = require('fs');
const dotenv = require('dotenv');

// Read environment variables from .env file
dotenv.config();

// Create environment.ts content with the variables from .env
const envConfig = `
export const environment = {
  production: true,
  firebase: {
  apiKey: '${process.env.FIREBASE_API_KEY}',
  authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
  projectId: '${process.env.FIREBASE_PROJECT_ID}',
  storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
  messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
  appId: '${process.env.FIREBASE_APP_ID}',
  measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}'
  }
};
`;

// Write the content to environment.ts
fs.writeFileSync('src/environments/environment.ts', envConfig, { encoding: 'utf8' });


console.log('Environment files created successfully.');