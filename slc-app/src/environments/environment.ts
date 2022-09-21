// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

export const environment = {
  production: false,
  slcConfig: {
    apiKey: 'AIzaSyDG9IqrrIODD8PQ8ozuTI540JKZl4bbtqY',
    authDomain: 'shakespearelc-154de.firebaseapp.com',
    projectId: 'shakespearelc-154de',
    storageBucket: 'shakespearelc-154de.appspot.com',
    messagingSenderId: '1020287234925',
    appId: '1:1020287234925:web:d82a3d070c9eb209876064',
    measurementId: 'G-0H040NETBG',
    production: false,
  },
};

const app = initializeApp(environment.slcConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
