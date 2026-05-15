// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";


// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyANPWaFfEFj5nshRaFoxCMAOjVwE3wbt-A",
    authDomain: "foodie-website-b4887.firebaseapp.com",
    projectId: "foodie-website-b4887",
    storageBucket: "foodie-website-b4887.firebasestorage.app",
    messagingSenderId: "531327100872",
    appId: "1:531327100872:web:15c81a528d6749152b02fd",
    measurementId: "G-6NBX4WT371"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// ==========================
// GOOGLE AUTH
// ==========================

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const googleLoginBtn = document.getElementById("googleLogin");

googleLoginBtn.addEventListener("click", async () => {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        alert(`Welcome ${user.displayName}`);

        console.log(user);

    } catch (error) {

        console.log(error);

        alert(error.message);

    }

});