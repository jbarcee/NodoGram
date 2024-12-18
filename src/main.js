import { addEntry, getData } from "./db";
import {firebase, firebaseui} from "firebase/compat/app";


addEventListener('submit', () => {
  addEntry();
});

/*setInterval(() => {
  if (document.querySelector("#list") !== null) {
    document.querySelector("#list").remove();

  }
  const list = document.createElement("UL");
  list.setAttribute("id", "list");
  document.body.appendChild(list);*/
  getData();
//}, 1000);










