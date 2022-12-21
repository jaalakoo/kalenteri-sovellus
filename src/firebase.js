import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyD-isrw4PblMjgHjMH3-ZChedDqo4qVfSg",
    authDomain: "kalenteri-84be3.firebaseapp.com",
    projectId: "kalenteri-84be3",
    storageBucket: "kalenteri-84be3.appspot.com",
    messagingSenderId: "973928390229",
    appId: "1:973928390229:web:453c7eba680b598a6d3edc"
};

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref()
export const events = databaseRef.child("events")
export default firebase