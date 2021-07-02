import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyCgdvSFsrEozXOyIWXbMo45hdqlF5B1E8I',
  authDomain: 'student-attendence-app-946c1.firebaseapp.com',
  databaseURL:
    'https://student-attendence-app-946c1-default-rtdb.firebaseio.com',
  projectId: 'student-attendence-app-946c1',
  storageBucket: 'student-attendence-app-946c1.appspot.com',
  messagingSenderId: '953627645618',
  appId: '1:953627645618:web:f650a8c153098b961cdbab',
  measurementId: 'G-1404PPHEXZ',
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();
console.log(firebase.name);
console.log(firebase.database());
