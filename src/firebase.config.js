import {getApp ,getApps , initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBXA_fErGIp7WhgpRn2vUXr4qKvsQGC5J0",
  authDomain: "electronics-a215d.firebaseapp.com",
  databaseURL: "https://electronics-a215d-default-rtdb.firebaseio.com",
  projectId: "electronics-a215d",
  storageBucket: "electronics-a215d.appspot.com",
  messagingSenderId: "932299976100",
  appId: "1:932299976100:web:aa545f19d9b793a1e3a531",
};

const app =getApps.length>0? getApp() : initializeApp(firebaseConfig);

const firestore=getFirestore(app)
const storage=getStorage(app)

export {app, firestore, storage};
