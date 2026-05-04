import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMj9V-19Q-KYmu8exebQUVw_VfJguNXvA",
  authDomain: "funded-master.firebaseapp.com",
  projectId: "funded-master",
  storageBucket: "funded-master.firebasestorage.app",
  messagingSenderId: "545436486198",
  appId: "1:545436486198:web:7ebe8173f5663e3ac06697"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
