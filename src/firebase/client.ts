import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9xUmJjIJtpsgxZDZIQV8bItI3eW7fNmQ",
  authDomain: "developers-fashionunited-com.firebaseapp.com",
  databaseURL: "https://developers-fashionunited-com.firebaseio.com",
  projectId: "developers-fashionunited-com",
  storageBucket: "developers-fashionunited-com.appspot.com",
  messagingSenderId: "187698730207",
  appId: "1:187698730207:web:d4bf2613c478b2c9fac56a",
};

export const app = initializeApp(firebaseConfig);
