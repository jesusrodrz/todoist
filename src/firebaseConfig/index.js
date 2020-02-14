import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfigData = {
  apiKey: 'AIzaSyDLrcfneEAxO1gh5d7Rij9FodDbiRoKl-8',
  authDomain: 'todoist-app-sample.firebaseapp.com',
  databaseURL: 'https://todoist-app-sample.firebaseio.com',
  projectId: 'todoist-app-sample',
  storageBucket: 'todoist-app-sample.appspot.com',
  messagingSenderId: '851076107450',
  appId: '1:851076107450:web:23c1269620720041704683',
};

const firebaseConfig = firebase.initializeApp(firebaseConfigData);
export default firebaseConfig;
