import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBc9N7uvzE6oLGo5qQI1MY3vwKscKkqtHM",
    authDomain: "linkedin-clone-redux-thunk.firebaseapp.com",
    projectId: "linkedin-clone-redux-thunk",
    storageBucket: "linkedin-clone-redux-thunk.appspot.com",
    messagingSenderId: "1018225700053",
    appId: "1:1018225700053:web:22c363400802b7aa6c065c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;