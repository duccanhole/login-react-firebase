import app from 'firebase/compat/';
import 'firebase/auth';
//firebase config
const firebaseConfig =  {
    apiKey: "AIzaSyBt_-ox1vKmKCMEyaUB_E4rneMIIWeZh-A",
    authDomain: "example-378cb.firebaseapp.com",
    projectId: "example-378cb",
    storageBucket: "example-378cb.appspot.com",
    messagingSenderId: "739279456410",
    appId: "1:739279456410:web:728cd61035c077558e7723",
    measurementId: "G-HKM84MGN94"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;