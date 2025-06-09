// src/database/config.js

import firebase  from 'firebase/app';
import  'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDx--fDsvfmU9ZA19srkHaORcVGKS5VjXo",
  authDomain: "photowall-89720.firebaseapp.com",
  databaseURL: "https://photowall-89720-default-rtdb.firebaseio.com/",
  projectId: "photowall-89720",
  storageBucket: "photowall-89720.appspot.com", // Fixed typo here
  messagingSenderId: "1005764659905",
  appId: "1:1005764659905:web:8cce832781c3c8fde2a240",
  measurementId: "G-6ZWK9P6KWT"
};

 firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { database };
