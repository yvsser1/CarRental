import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYridcQndkkVH-6yxmpYknduKN-GlI8gI",
  authDomain: "rent-car118.firebaseapp.com",
  databaseURL: "https://rent-car118.firebaseio.com",
  projectId: "rent-car118",
  storageBucket: "rent-car118.appspot.com",
  messagingSenderId: "685208685659",
  appId: "1:685208685659:web:00f5e3c5c9d4793b"
};
firebase.initializeApp(config);
const storage = firebase.storage().ref()
// firebase.firestore().settings({ timestampsInSnapshots: true })

// export default firebase

export {
  storage, firebase as default
}