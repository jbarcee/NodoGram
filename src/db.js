import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { entry } from "./components/Entry";

const firebaseConfig = {
  apiKey: "AIzaSyAXxyYhSXkua2z9LIMJDcHG07HaVdkXx-8",
  authDomain: "nodogram-1cfcc.firebaseapp.com",
  projectId: "nodogram-1cfcc",
  storageBucket: "nodogram-1cfcc.firebasestorage.app",
  messagingSenderId: "776473842961",
  appId: "1:776473842961:web:42bb71af130493a11328b0",
  measurementId: "G-DMTS85M6KK"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export function addEntry() {
    try {
      addDoc(collection(db,'entry'), {
        text: document.querySelector('#input-text').value,
        user: document.querySelector('#input-name').value
      });
    }
    catch(e) {
      console.log('Error al insertar en la base de datos...');
    }
}

export async function getData() {
    const data = await getDocs(collection(db,'entry'));
    data.forEach(element => {
      let li = document.createElement('LI');
      let {user, text} = element.data();
      li.innerHTML = entry(user,text) ;
    
      document.querySelector("#list").appendChild(li);
    });
  }  
