import firebase from "firebase/app";
import "firebase/firestore";


const miConfiguracion = {  
    apiKey: "AIzaSyB2W-fuoFxtGk35w1DkueztBJtKQrQJey4",
    authDomain: "guitarras-lider.firebaseapp.com",
    projectId: "guitarras-lider",
    storageBucket: "guitarras-lider.appspot.com",
    messagingSenderId: "425373481211",
    appId: "1:425373481211:web:d5a02d06e941f6af5d185e"  
}


const app = firebase.initializeApp(miConfiguracion)

export const firestore = firebase.firestore(app)


//https://console.firebase.google.com/u/0/project/guitarras-lider/settings/general/web:YTkxMDUzOTgtMGY3ZS00NmY3LThlOTAtNmZlYTlmNzMwMWIx?hl=es