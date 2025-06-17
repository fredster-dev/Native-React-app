// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import Constants from 'expo-constants';

const {
    firebaseApiKey, 
    firebaseAuthDomain, 
    firebaseProjectId, 
    firebaseStorageBucket, 
    firebaseMessagingSenderId, 
    firebaseAppId
} = Constants.expoConfig.extra;


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
    projectId: firebaseProjectId,
    storageBucket: firebaseStorageBucket,
    messagingSenderId: firebaseMessagingSenderId,
    appId: firebaseAppId,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
