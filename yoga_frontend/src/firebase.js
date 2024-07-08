// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjbXRrK6hr-XHbLitx8JnkCRtzr5woexQ",
  authDomain: "yoga-posture-detection-70df6.firebaseapp.com",
  databaseURL:
    "https://yoga-posture-detection-70df6-default-rtdb.firebaseio.com/",
  projectId: "yoga-posture-detection-70df6",
  storageBucket: "yoga-posture-detection-70df6.appspot.com",
  messagingSenderId: "123658933028",
  appId: "1:123658933028:web:919738b23be009ee8659b1",
  measurementId: "G-7TS8MY9R8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
export default app;

export function getBestTime(pose, setBestPerform) {
  const uid = auth.currentUser.uid;
  console.log(auth.currentUser);
  const path = `users/${uid}/${pose}`;
  console.log(path);
  const dbRef = ref(database, path);
  onValue(dbRef, (s) => {
    setBestPerform(s.val() || 0);
  });
}
export function getStats(setStats) {
  const uid = auth.currentUser.uid;
  console.log(auth.currentUser);
  const path = `users/${uid}`;
  console.log(path);
  const dbRef = ref(database, path);
  onValue(dbRef, (s) => {
    setStats(s.val() || {});
  });
}

export function updateBestTime(pose, bestTime) {
  const updates = {};
  const uid = auth.currentUser.uid;
  updates[`users/${uid}/${pose}`] = bestTime;
  return update(ref(database), updates);
}
