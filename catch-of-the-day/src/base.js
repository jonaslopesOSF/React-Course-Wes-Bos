import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDm5vTRwXfEzh4q5qlZu7SS5TqPxKB3lzQ",
  authDomain: "dog-of-the-day-jonas-lop-7349c.firebaseapp.com",
  databaseURL: "https://dog-of-the-day-jonas-lop-7349c.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());
const a = "a";

// This is a named export
export { firebaseApp };

// this is a default export
export default base;