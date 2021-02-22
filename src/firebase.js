import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDv7gETtpKRL66NnwXfRwnUxiroJLkse3o",
        authDomain: "coffee-project-30f48.firebaseapp.com",
        databaseURL: "https://coffee-project-30f48-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "coffee-project-30f48",
        storageBucket: "coffee-project-30f48.appspot.com",
        messagingSenderId: "1063571644640",
        appId: "1:1063571644640:web:19cecf6979dc98b3b4b085",
        measurementId: "G-1PDDZB31DN"
});

var db = firebaseApp.firestore();

export {db};