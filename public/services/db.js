var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc, } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCdR3Ca_-AaZmZ70VsemRRKoiGcxmd-63A",
    authDomain: "dcatest-1e5fe.firebaseapp.com",
    projectId: "dcatest-1e5fe",
    storageBucket: "dcatest-1e5fe.appspot.com",
    messagingSenderId: "158587940650",
    appId: "1:158587940650:web:0fd0e803492e0d6cd9f853",
    measurementId: "G-YTNR367C1N"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "users");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "users"), {
            email,
            password
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
/*const addPost = async (newpost) => {
  try {
    const docRef = await addDoc(collection(db,"Npost"),newpost);
    console.log("Document written with ID: ", docRef.id);

   } catch (e)  {
    console.error("Error adding document:" , e);
}

}

export default {addPost}*/ 
